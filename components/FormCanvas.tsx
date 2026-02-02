'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FormDefinition, FieldConfig, FieldType } from '@/types/form';
import { DraggableField } from './DraggableField';
import { CloudUpload } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useGoogleDrive } from '@/hooks/useGoogleDrive';

interface FormCanvasProps {
    formDef: FormDefinition;
    onSaveConfig?: (fields: FieldConfig[]) => void; // For dev use
}

export const FormCanvas: React.FC<FormCanvasProps> = ({ formDef, onSaveConfig }) => {
    const [fields, setFields] = useState<FieldConfig[]>(formDef.defaultFields);
    // const [isEditMode, setIsEditMode] = useState(false); // Edit mode functionality removed
    // const isEditMode = false; // Forced to false
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Drive Integration
    const { initClient, login, uploadFile, isUploading } = useGoogleDrive();
    const [isDriveReady, setIsDriveReady] = useState(false);

    useEffect(() => {
        initClient().then(() => setIsDriveReady(true)).catch(console.error);
    }, [initClient]);

    // Sync fields when formDef changes
    useEffect(() => {
        setFields(formDef.defaultFields);
    }, [formDef.defaultFields, formDef.id]);


    useEffect(() => {
        if (!containerRef.current) return;
        const updateSize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                });
            }
        };

        const img = new Image();
        img.src = formDef.imagePath;
        img.onload = updateSize;

        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [formDef.imagePath]);




    const updateFieldPos = (id: string, x: number, y: number) => {
        setFields(fields.map(f => f.id === id ? { ...f, x, y } : f));
    };

    const updateFieldSize = (id: string, w: number, h: number) => {
        setFields(fields.map(f => f.id === id ? { ...f, width: w, height: h } : f));
    };

    const updateFieldValue = (id: string, val: string | boolean) => {
        setFields(fields.map(f => f.id === id ? { ...f, value: val } : f));
    };

    const removeField = (id: string) => {
        setFields(fields.filter(f => f.id !== id));
    };



    const generatePDFBlob = async () => {
        if (!containerRef.current) return null;

        try {
            await new Promise(r => setTimeout(r, 100)); // wait for render

            const canvas = await html2canvas(containerRef.current, {
                scale: 2,
                useCORS: true,
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            return pdf.output('blob');
        } catch (err) {
            console.error("PDF Gen Error", err);
            return null;
        }
    };



    const handleUploadDrive = async () => {
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || prompt("Please enter your Google Client ID:");
        // Optional: Get folder ID from env var
        const folderId = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID;

        if (!clientId) return;

        const customerName = prompt("Enter Customer Name for the file:");
        if (!customerName) return;

        // Replace slashes with dashes for better filename compatibility
        const dateStr = new Date().toLocaleDateString('en-US').replace(/\//g, '-');
        const fileName = `${customerName} - ${dateStr}.pdf`;

        try {
            console.log("Attempting login...");
            const token = await login(clientId);
            if (!token) {
                alert("Login failed or no token received.");
                return;
            }
            console.log("Login successful, generating PDF...");

            const blob = await generatePDFBlob();
            if (!blob) {
                alert("Failed to generate PDF. Check console for details.");
                return;
            }
            console.log("PDF generated, uploading...");

            await uploadFile(blob, fileName, token, folderId);
            alert("Uploaded to Drive Successfully!");

        } catch (err) {
            console.error("Upload Process Error:", err);
            // safe error string
            const msg = err instanceof Error ? err.message : String(err);
            alert("Upload failed: " + msg);
        }
    };

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Toolbar */}
            {/* Toolbar */}
            <div className="p-4 bg-white rounded-lg shadow flex flex-wrap gap-2 items-center justify-end sticky top-0 z-50">
                <div className="flex gap-2">
                    <button
                        onClick={handleUploadDrive}
                        disabled={isUploading}
                        className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded text-sm font-medium hover:bg-orange-700 disabled:opacity-50"
                    >
                        <CloudUpload size={16} /> {isUploading ? 'Uploading...' : 'Save to Drive'}
                    </button>
                </div>
            </div>

            {/* Canvas */}
            <div className="w-full overflow-auto bg-gray-100 flex justify-center p-4">
                <div
                    ref={containerRef}
                    className="relative bg-white shadow-lg select-none"
                    style={{
                        maxWidth: '100%',
                    }}
                >
                    <img
                        src={formDef.imagePath}
                        alt={formDef.name}
                        className="block w-full h-auto pointer-events-none"
                        draggable={false}
                        onLoad={(e) => {
                            const t = e.target as HTMLImageElement;
                            setDimensions({ width: t.offsetWidth, height: t.offsetHeight });
                        }}
                    />

                    <div className="absolute inset-0 z-10 w-full h-full">
                        {fields.map(field => (
                            <DraggableField
                                key={field.id}
                                field={field}
                                containerWidth={dimensions.width}
                                containerHeight={dimensions.height}
                                isEditMode={false} // Permanently disable edit mode for fields
                                onUpdatePosition={updateFieldPos}
                                onUpdateSize={updateFieldSize}
                                onRemove={removeField}
                                onChangeValue={updateFieldValue}
                            />
                        ))}

                        {/* Static Footer Overlay - Signature & Date placeholders */}
                        <div className="absolute bottom-10 left-0 w-full px-16 flex justify-between pointer-events-none select-none">
                            <div className="flex flex-col items-center w-1/3">
                                <div className="border-b-2 border-black w-full mb-1"></div>
                                <span className="font-bold text-sm text-black">Customer's Signature</span>
                            </div>
                            <div className="flex flex-col items-center w-1/4">
                                <div className="border-b-2 border-black w-full mb-1"></div>
                                <span className="font-bold text-sm text-black">Date</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
