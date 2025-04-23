'use client'

import { Button } from "@/components/ui/button"
import { ArrowDownToLine } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/long_video.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#3437FF]/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          فرصة استثمارية فريدة
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
          انضم إلينا في ثورة تنظيف المباني باستخدام الطائرات بدون طيار
        </p>
        <Link href="https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/Burooj Air Seed Investment Document.pdf" target="_blank">
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-transparent border-white text-white hover:bg-white hover:text-[#3437FF] transition-all duration-300"
        >
          <ArrowDownToLine className="ml-2 h-5 w-5" />
          تحميل الملف التعريفي
        </Button>
        </Link>
      </div>
    </section>
  )
} 