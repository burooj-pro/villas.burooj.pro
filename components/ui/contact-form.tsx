'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactForm() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#3437FF] leading-tight">
          كن شريكاً في الإبتكار
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-600 leading-relaxed max-w-3xl mx-auto">
          لإبداء الرغبة الرجاء إرسال النموذج المبسط على البريد الإلكتروني وسيتم التواصل معك
        </p>
        <Link href="https://docs.google.com/document/d/1YDD0LkLrFZ9mJLgxfP7HOM5-HwemOrmk/edit?rtpof=true&sd=true&tab=t.0" target="_blank">
          <Button 
            size="lg" 
            className="bg-[#3437FF] hover:bg-[#3437FF]/90 text-white text-xl px-8 py-6 h-auto"
          >
            إطلع على النموذج
            <ArrowRight className="mr-2 h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  )
} 