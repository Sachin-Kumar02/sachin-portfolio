import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, Download, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker using unpkg CDN to ensure compatibility
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [numPages, setNumPages] = useState<number>();
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Subtract padding so it fits nicely
        setContainerWidth(Math.min(containerRef.current.clientWidth - 32, 1000));
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const pdfFileName = "Sachin_Kumar_Resume.pdf";
  const pdfPath = `/resume/${pdfFileName}`;

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <div className="max-w-6xl w-full mx-auto p-4 sm:p-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
        >
          <ArrowLeft size={20} />
          <span className="hidden sm:inline">Back to Portfolio</span>
          <span className="sm:hidden">Back</span>
        </Link>
        
        <a 
          href={pdfPath}
          download={pdfFileName}
          className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-lg hover:bg-emerald-500/20 transition-colors font-mono"
        >
          <Download size={20} />
          <span className="hidden sm:inline">Download PDF</span>
          <span className="sm:hidden">Download</span>
        </a>
      </div>

      {/* PDF Viewer using react-pdf to bypass Brave's iframe blocking */}
      <div 
        ref={containerRef}
        className="flex-grow w-full max-w-4xl mx-auto bg-slate-800 sm:rounded-t-xl overflow-hidden shadow-2xl border border-slate-700/50 border-b-0 flex flex-col items-center py-8 px-4 overflow-y-auto"
      >
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex flex-col items-center justify-center h-64 text-emerald-400 gap-4">
              <Loader2 className="animate-spin w-8 h-8" />
              <p className="font-mono text-sm">Loading PDF...</p>
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center h-64 text-red-400 gap-4 text-center">
              <p className="font-mono">Failed to load PDF.</p>
              <p className="text-sm text-slate-400">Please ensure you have uploaded <strong>{pdfFileName}</strong> to the <strong>public/resume</strong> folder.</p>
            </div>
          }
        >
          {Array.from(new Array(numPages || 0), (el, index) => (
            <div key={`page_${index + 1}`} className="mb-8 shadow-xl bg-white">
              <Page 
                pageNumber={index + 1} 
                width={containerWidth}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
}
