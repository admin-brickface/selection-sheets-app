'use client';

import React, { useRef, useEffect, useState } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { FieldConfig } from '@/types/form';
import { cn } from '@/lib/utils';
import { X, GripVertical } from 'lucide-react';
import SignatureCanvas from 'react-signature-canvas';

interface DraggableFieldProps {
    field: FieldConfig;
    containerWidth: number;
    containerHeight: number;
    isEditMode: boolean;
    isGeneratingPdf?: boolean;
    onUpdatePosition: (id: string, x: number, y: number) => void;
    onUpdateSize?: (id: string, w: number, h: number) => void;
    onRemove: (id: string) => void;
    onChangeValue: (id: string, value: string | boolean) => void;
}

export const DraggableField: React.FC<DraggableFieldProps> = ({
    field,
    containerWidth,
    containerHeight,
    isEditMode,
    isGeneratingPdf = false,
    onUpdatePosition,
    onUpdateSize,
    onRemove,
    onChangeValue
}) => {
    const nodeRef = useRef(null);

    // Calculate pixel position from percentage
    const initialX = (field.x / 100) * containerWidth;
    const initialY = (field.y / 100) * containerHeight;

    // Calculate pixel dimensions from percentage
    // Default to strict fallbacks if undefined
    const widthPercent = field.width || (field.type === 'textarea' ? 80 : 30);
    const heightPercent = field.height || (field.type === 'textarea' ? 20 : undefined);

    // We compute these for style application
    const widthPx = (widthPercent / 100) * containerWidth;
    const heightPx = heightPercent ? (heightPercent / 100) * containerHeight : undefined;

    // Track position locally to avoid jitter, but sync when edit mode changes
    const [position, setPosition] = useState({ x: initialX, y: initialY });

    // Resizing state
    const [isResizing, setIsResizing] = useState(false);
    const startResizeRef = useRef({ x: 0, y: 0, w: 0, h: 0 });

    useEffect(() => {
        setPosition({
            x: (field.x / 100) * containerWidth,
            y: (field.y / 100) * containerHeight
        });
    }, [field.x, field.y, containerWidth, containerHeight]);

    const handleStop = (e: DraggableEvent, data: DraggableData) => {
        if (isResizing) return;
        const newXPercent = (data.x / containerWidth) * 100;
        const newYPercent = (data.y / containerHeight) * 100;
        onUpdatePosition(field.id, newXPercent, newYPercent);
    };

    const handleResizeStart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setIsResizing(true);
        startResizeRef.current = {
            x: e.clientX,
            y: e.clientY,
            w: (field.width || (field.type === 'textarea' ? 80 : 30)) / 100 * containerWidth,
            h: (field.height || (field.type === 'textarea' ? 20 : 5)) / 100 * containerHeight
        };

        document.addEventListener('mousemove', handleResizeMove);
        document.addEventListener('mouseup', handleResizeUp);
    };

    const handleResizeMove = (e: MouseEvent) => {
        const dx = e.clientX - startResizeRef.current.x;
        const dy = e.clientY - startResizeRef.current.y;

        const newW = startResizeRef.current.w + dx;
        const newH = startResizeRef.current.h + dy;

        // Convert to percentage
        const wPercent = (newW / containerWidth) * 100;
        const hPercent = (newH / containerHeight) * 100;

        if (onUpdateSize) {
            onUpdateSize(field.id, Math.max(1, wPercent), Math.max(1, hPercent));
        }
    };

    const handleResizeUp = () => {
        setIsResizing(false);
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeUp);
    };


    const style: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        top: 0,
    };

    // Render input based on type
    const renderInput = () => {
        // Common props
        const commonStyle = {
            width: `${widthPx}px`,
            minWidth: '20px',
        };


        // For PDF generation stability, we render DIVs instead of INPUTs
        if (isGeneratingPdf) {
            const staticStyle = {
                ...commonStyle,
                // Ensure the static text aligns nicely
                height: field.type === 'textarea' ? `${heightPx}px` : 'auto',
                minHeight: field.type === 'textarea' ? 'auto' : '24px', // Ensure it has some height
            };

            const commonClasses = "px-1 bg-transparent text-sm text-black border border-transparent";

            switch (field.type) {
                case 'checkbox':
                    // Checkboxes render okay usually, but let's keep it input for now or swap if needed
                    return (
                        <input
                            type="checkbox"
                            className="w-6 h-6 border-2 border-gray-600 rounded checked:bg-blue-600 appearance-none flex items-center justify-center after:content-['✓'] after:text-white after:hidden checked:after:block"
                            checked={!!field.value}
                            readOnly
                        />
                    );
                case 'signature':
                    // Already a div-based component
                    return (
                        <div className="border border-gray-400 bg-white/50 relative" style={{ width: '250px', height: '100px' }}>
                            {field.value === "SIGNED" && (
                                <div className="absolute inset-0 flex items-center justify-center font-script text-3xl">
                                    Signed
                                </div>
                            )}
                        </div>
                    );
                case 'textarea':
                    return (
                        <div
                            className={`${commonClasses} whitespace-pre-wrap leading-tight`}
                            style={staticStyle}
                        >
                            {field.value as string}
                        </div>
                    );
                case 'date':
                case 'text':
                default:
                    return (
                        <div
                            className={`${commonClasses} whitespace-nowrap overflow-hidden flex items-center`}
                            style={staticStyle}
                        >
                            {field.value as string}
                        </div>
                    );
            }
        }

        // EDIT MODE: Render actual inputs
        switch (field.type) {
            case 'checkbox':
                return (
                    <input
                        type="checkbox"
                        className="w-6 h-6 border-2 border-gray-600 rounded checked:bg-blue-600 cursor-pointer"
                        checked={!!field.value}
                        onChange={(e) => onChangeValue(field.id, e.target.checked)}
                    />
                );
            case 'date':
                return (
                    <input
                        type="date"
                        className="border border-gray-300 p-1 rounded bg-white/80 text-sm"
                        style={{ width: '130px' }}
                        value={field.value as string || ''}
                        onChange={(e) => onChangeValue(field.id, e.target.value)}
                    />
                );
            case 'signature':
                return (
                    <div className="border border-gray-400 bg-white/50 relative" style={{ width: '250px', height: '100px' }}>
                        <div className="absolute top-0 left-0 text-xs text-gray-500 p-1 pointer-events-none">Sign Here</div>
                        <SignatureCanvas
                            penColor='black'
                            canvasProps={{ className: 'w-full h-full' }}
                            onEnd={() => onChangeValue(field.id, "SIGNED")}
                        />
                    </div>
                );
            case 'textarea':
                return (
                    <textarea
                        className="border border-transparent hover:border-gray-300 p-1 bg-transparent text-sm resize-none focus:bg-white/90 focus:border-blue-500 outline-none text-black leading-tight"
                        style={{ ...commonStyle, height: `${heightPx}px` }}
                        value={field.value as string || ''}
                        onChange={(e) => onChangeValue(field.id, e.target.value)}
                    />
                );
            case 'text':
            default:
                return (
                    <input
                        type="text"
                        className="border border-transparent hover:border-gray-300 px-1 bg-transparent text-sm focus:bg-white/90 focus:border-blue-500 outline-none text-black w-full"
                        style={commonStyle}
                        value={field.value as string || ''}
                        onChange={(e) => onChangeValue(field.id, e.target.value)}
                    />
                );
        }
    };

    // Helper for show resize handle
    const canResize = (field.type === 'text' || field.type === 'textarea');

    // Optimization: If NOT in edit mode, use simple CSS positioning
    // This ensures native browser scaling works perfectly (zooming) without JS intervention
    if (!isEditMode) {
        return (
            <div
                style={{
                    position: 'absolute',
                    left: `${field.x}%`,
                    top: `${field.y}%`,
                    pointerEvents: 'auto'
                }}
                className="flex items-start group touch-none relative"
            >
                {renderInput()}
            </div>
        );
    }

    return (
        <Draggable
            nodeRef={nodeRef}
            position={position}
            onStop={handleStop}
            disabled={!isEditMode || isResizing} // Disable drag if resizing
        // bounds="parent" // Removed to allow full freedom
        >
            <div
                ref={nodeRef}
                style={style}
                className={cn(
                    "flex items-start group touch-none relative", // relative for absolute positioning of handles
                    isEditMode ? "cursor-move border border-dashed border-blue-400 bg-blue-50/30" : "" // Removed p-1
                )}
            >
                {/* Overlay Grip Handle - Top Left */}
                {isEditMode && (
                    <div className="absolute -left-3 -top-3 text-blue-500 bg-white rounded-full shadow-sm p-0.5 z-30 scale-75 cursor-move">
                        <GripVertical size={16} />
                    </div>
                )}

                {renderInput()}

                {isEditMode && (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); onRemove(field.id); }}
                            className="ml-1 -mt-2 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity absolute -right-2 -top-2 z-50"
                        >
                            <X size={12} />
                        </button>

                        {canResize && (
                            <div
                                className="absolute -bottom-1 -right-1 cursor-se-resize text-blue-600 bg-white border border-blue-400 p-0.5 z-50 rounded-sm shadow-sm opacity-50 hover:opacity-100"
                                onMouseDown={handleResizeStart}
                                title="Resize"
                            >
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                                    <path d="M10 0L10 10L0 10L10 0Z" />
                                </svg>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Draggable>
    );
};
