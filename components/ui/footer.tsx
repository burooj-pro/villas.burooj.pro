import { Linkedin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#3437FF] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <a
            href="https://buroojair.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <Globe className="h-8 w-8 mb-2" />
            <span className="text-lg hover:text-white/90 transition-colors">
              لمزيد من المعلومات زوروا موقعنا الإلكتروني
            </span>
          </a>

          <a
            href="https://linkedin.com/company/buroojair"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <Linkedin className="h-8 w-8 mb-2" />
            <span className="text-lg hover:text-white/90 transition-colors">
              تابعونا على لينكد إن
            </span>
          </a>

          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-sm text-white/80">© 2024 بروج إير. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 