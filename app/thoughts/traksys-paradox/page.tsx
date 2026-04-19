'use client';

export default function TrakSYSParadoxPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-24 md:pt-28">
            {/* Article Title Section */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 pt-6 md:pt-8 pb-6 md:pb-8">


                {/* Date and Read Time */}
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 mb-4 md:mb-6">
                    <span>April 2026</span>
                    <span>•</span>
                    <span>12 min read</span>
                </div>

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    The TrakSYS Paradox: How We Used MCP to Bridge the Gap Between Raw Data and Real Answers
                </h1>
                <p className="text-base md:text-xl text-gray-400 max-w-4xl">
                    Research question: How can we enable non-technical factory staff to query complex manufacturing data using natural language, while ensuring accuracy and contextual understanding?
                </p>
            </div>

            {/* PDF Viewer - Responsive */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 pb-8 md:pb-16">
                {/* Mobile: Card style with view/download options */}
                <div className="block md:hidden mb-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                        <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <div>
                            <p className="text-white font-medium">Article.pdf</p>
                            <p className="text-xs text-gray-400">12 min read • April 2026</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <a
                            href="/article/Article.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2 bg-green-500 text-black font-medium rounded-lg text-sm hover:bg-green-400 transition-colors"
                        >
                            Open PDF
                        </a>
                        <a
                            href="/article/Article.pdf"
                            download
                            className="flex-1 text-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg text-sm hover:bg-white/10 transition-colors"
                        >
                            Download
                        </a>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-center">
                        For best experience, open on tablet or desktop
                    </p>
                </div>

                {/* Desktop/Tablet: Embedded PDF Viewer */}
                <div className="hidden md:block border border-white/10 rounded-2xl overflow-hidden bg-white">
                    <iframe
                        src="/article/Article.pdf#view=FitH"
                        className="w-full h-[800px] lg:h-[1000px]"
                        title="The TrakSYS Paradox Article"
                    />
                </div>

                {/* Tablet: Slightly shorter height */}
                <div className="hidden sm:block md:hidden border border-white/10 rounded-2xl overflow-hidden bg-white">
                    <iframe
                        src="/article/Article.pdf#view=FitH"
                        className="w-full h-[600px]"
                        title="The TrakSYS Paradox Article"
                    />
                </div>

                {/* Download link for all devices */}
                <div className="mt-4 text-center">
                    <a
                        href="/article/Article.pdf"
                        download
                        className="text-sm text-gray-500 hover:text-green-400 transition-colors"
                    >
                        ↓ Download PDF to read offline
                    </a>
                </div>
            </div>
        </main>
    );
}