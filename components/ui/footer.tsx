'use client';

import { Linkedin, Globe, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <>
      {/* Full-Width Image Before Footer */}
      <section className="w-full h-[400px]">
        <img
          src="/footer.png"
          alt="بروج فلل"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap border-t border-white/20 pt-8">
            {/* Left: Copyright */}
            <p className="text-sm text-white/80">
              © 2025 بروج. جميع الحقوق محفوظة.
            </p>

            {/* Right: Contact + Social */}
            <div className="flex gap-6 mt-4 sm:mt-0 items-center">
              <a
                href="mailto:contact@burooj.pro"
                className="text-white hover:text-white/70"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/966548366111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://burooj.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/burooj-building-services/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
