"use client";
import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { ResumeModalProps } from '@/utils/types';

export const ResumeModal = ({
  isOpen,
  onClose,
  pdfId
}: ResumeModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // FIXME: Handling when back modal is not closed normally
  useEffect(() => {
    if (!isOpen) return

    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault()
      onClose()
    };

    // Push a dummy state to the history stack
    window.history.pushState({
      modalOpen: true
    },
      '',
      window.location.href
    )

    // Listen for popstate events (back button)
    window.addEventListener('popstate', handlePopState)

    // Cleanup function
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [isOpen, onClose])

  // FIXME: Handling when modal closes normally
  useEffect(() => {
    if (!isOpen) {
      // Check if we need to go back to remove our dummy state
      if (window.history.state?.modalOpen) {
        window.history.back();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Convert the Google Drive file ID to the proper embed URL format
  const embedUrl = `https://drive.google.com/file/d/${pdfId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${pdfId}`;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm pt-16">
      <div className="relative w-[90vw] max-w-6xl h-[85vh] bg-zinc-900 rounded-lg shadow-xl">
        <div className="absolute top-4 right-4 flex gap-2">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            aria-label="Download resume"
          >
            <Download size={24} />
          </a>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-zinc-600 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        <div className="w-full h-full p-6 pt-12">
          <iframe
            src={embedUrl}
            className="w-full h-full rounded border-0"
            title="Resume PDF Viewer"
            onLoad={() => setIsLoading(false)}
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}