export default function Contact() {
  return (
    <section id="contact" className="bg-forest py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-4">
          Let's connect
        </h2>
        <p className="text-lg text-muted-sage leading-relaxed mb-12 max-w-xl mx-auto">
          Want to talk CTV strategy, AI in advertising, or the merits of
          Sondheim vs. Lloyd Webber? I'd love to hear from you.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="https://www.linkedin.com/in/cody-wymore-66543680"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cream text-forest rounded-lg text-sm font-medium hover:bg-pearl transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://www.innovid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-muted-sage/50 text-cream rounded-lg text-sm font-medium hover:bg-sage/20 transition-colors"
          >
            Innovid
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://afterworktheater.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-muted-sage/50 text-cream rounded-lg text-sm font-medium hover:bg-sage/20 transition-colors"
          >
            AfterWork Theater
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-sage/30 pt-8">
          <p className="font-display text-lg text-cream mb-1">
            Cody Wymore
          </p>
          <p className="text-sm text-muted-sage">
            VP, Client Solutions at Innovid (Mediaocean) · New York City
          </p>
          <p className="text-xs text-sage mt-4">
            &copy; {new Date().getFullYear()} Cody Wymore
          </p>
        </div>
      </div>
    </section>
  )
}
