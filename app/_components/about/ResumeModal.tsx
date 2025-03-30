"use client";
import React from 'react';
import { X } from 'lucide-react';
import { ResumeModalProps } from '@/utils/types';

export const ResumeModal = ({
    isOpen,
    onClose,
    pdfUrl
}: ResumeModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl h-[80vh] bg-zinc-900 rounded-lg shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                <div className="w-full h-full p-6 pt-12">
                    <iframe
                        src={`${pdfUrl}?embedded=true`}
                        className="w-full h-full rounded border-0"
                        title="Resume PDF Viewer"
                        loading="lazy"
                        allow="autoplay"
                    />
                </div>
            </div>
        </div>
    );
}