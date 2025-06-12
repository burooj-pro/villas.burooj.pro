'use client';

import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full">
      {/* Enhanced Top Content with Better Visual Hierarchy */}
      <div
        className="py-32 md:py-48 text-center px-6 md:px-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #2B4037 0.46%, #111A16 44.36%, #000 99.69%)",
        }}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Enhanced Title with Better Typography */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight font-alqabas">
              حياة ذكية بإطلالة بحرية
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light">
              في قلب الخبر
            </p>
            
          </div>

          {/* Enhanced Download Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-white/10">


            {/* Enhanced Button Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {/* Villa A Arabic */}
              <Link href="https://drive.google.com/file/d/1KT1cT7ubgoAe7GzqSezlp9bcbBguDsZR/view?usp=sharing" target="_blank">
                <Button
                  size="lg"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 py-6 text-lg group"
                >
                  <ArrowDownToLine className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  فيلا أ - ملف تعريفي بالعربية
                </Button>
              </Link>

              {/* Villa A English */}
              <Link href="https://drive.google.com/file/d/1swUFtDBICRO8nxHrRhH8fU80qWLxi7gE/view?usp=sharing" target="_blank">
                <Button
                  size="lg"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 py-6 text-lg group"
                >
                  <ArrowDownToLine className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Villa A - Brochure (EN)
                </Button>
              </Link>

              {/* Villa B Arabic */}
              <Link href="https://drive.google.com/file/d/1P3UvQRgovfMut4KOv5NFOeAS89SQcpNa/view?usp=sharing" target="_blank">
                <Button
                  size="lg"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 py-6 text-lg group"
                >
                  <ArrowDownToLine className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  فيلا ب - ملف تعريفي بالعربية
                </Button>
              </Link>

              {/* Villa B English */}
              <Link href="https://drive.google.com/file/d/1JchIG8vbpyXxmNR_cT-c88h_nwZknxDh/view?usp=sharing" target="_blank">
                <Button
                  size="lg"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 py-6 text-lg group"
                >
                  <ArrowDownToLine className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Villa B - Brochure (EN)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Video Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/Burooj.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(43, 64, 55, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)",
          }}
        />
      </div>
    </section>
  );
}
