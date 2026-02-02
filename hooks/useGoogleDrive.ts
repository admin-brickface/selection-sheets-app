import { useState, useCallback } from 'react';

// You would typically put this in an environment variable
// NEXT_PUBLIC_GOOGLE_CLIENT_ID
// For this prototype, we'll ask the user to input it.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const google: any;

const SCOPES = 'https://www.googleapis.com/auth/drive.file';



export function useGoogleDrive() {
    const [isUploading, setIsUploading] = useState(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const initClient = useCallback(() => {
        return new Promise<void>((resolve, reject) => {
            const script1 = document.createElement('script');
            script1.src = "https://accounts.google.com/gsi/client";
            script1.async = true;
            script1.defer = true;
            document.body.appendChild(script1);

            const script2 = document.createElement('script');
            script2.src = 'https://apis.google.com/js/api.js';
            script2.async = true;
            script2.defer = true;
            script2.onload = () => resolve();
            script2.onerror = (e) => reject(e);
            document.body.appendChild(script2);
        });
    }, []);

    const login = useCallback(async (clientId: string) => {
        // Check for cached token
        const cachedToken = localStorage.getItem('google_access_token');
        const cachedExpiry = localStorage.getItem('google_token_expiry');

        if (cachedToken && cachedExpiry) {
            const now = new Date().getTime();
            if (now < parseInt(cachedExpiry)) {
                // Token is still valid
                setAccessToken(cachedToken);
                return cachedToken;
            }
        }

        return new Promise<string>((resolve, reject) => {
            const client = google.accounts.oauth2.initTokenClient({
                client_id: clientId,
                scope: SCOPES,
                callback: (tokenResponse: { access_token: string, expires_in: number }) => {
                    if (tokenResponse && tokenResponse.access_token) {
                        const token = tokenResponse.access_token;
                        setAccessToken(token);

                        // Cache token (expires_in is usually 3599 seconds)
                        // Verify type of expires_in, sometimes it is string "3599"
                        const expiresInSeconds = Number(tokenResponse.expires_in) || 3599;
                        const expiryTime = new Date().getTime() + (expiresInSeconds * 1000);

                        localStorage.setItem('google_access_token', token);
                        localStorage.setItem('google_token_expiry', expiryTime.toString());

                        resolve(token);
                    } else {
                        reject("Failed to get token");
                    }
                },
            });
            client.requestAccessToken();

        });
    }, []);

    const uploadFile = async (blob: Blob, filename: string, token: string) => {
        setIsUploading(true);
        try {
            const metadata = {
                name: filename,
                mimeType: 'application/pdf',
            };

            const formData = new FormData();
            formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
            formData.append('file', blob);

            const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            const data = await response.json();
            if (response.ok) {
                return data;
            } else {
                throw new Error(data.error?.message || "Upload failed");
            }
        } finally {
            setIsUploading(false);
        }
    };

    return { initClient, login, uploadFile, isUploading, accessToken };
}
