'use client';

import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full">
      {/* Top Text Content */}
      <div
        className="py-32 md:py-40 text-center px-6 md:px-20"
        style={{
          background: "linear-gradient(90deg, #2B4037 0.46%, #111A16 44.36%, #000 99.69%)",
        }}
      >
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 text-white leading-tight font-alqabas">
            حياة ذكية بإطلالة بحرية في قلب الخبر
          </h1>

          {/* Button Group Centered & Responsive */}
          <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4 mt-8">
            <Link href="https://drive.google.com/file/d/1KT1cT7ubgoAe7GzqSezlp9bcbBguDsZR/view?usp=sharing" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-white text-black hover:bg-white hover:text-[#2B4037] transition-all duration-300"
              >
                <ArrowDownToLine className="ml-2 h-5 w-5 font-alqabas" />
                فيلا أ - ملف تعريفي بالعربية
              </Button>
            </Link>
            <Link href="https://drive.google.com/file/d/1swUFtDBICRO8nxHrRhH8fU80qWLxi7gE/view?usp=sharing" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-white text-black hover:bg-white hover:text-[#2B4037] transition-all duration-300"
              >
                <ArrowDownToLine className="ml-2 h-5 w-5 font-alqabas" />
                Villa A - Brochure (EN)
              </Button>
            </Link>
            <Link href="https://drive.google.com/file/d/1P3UvQRgovfMut4KOv5NFOeAS89SQcpNa/view?usp=sharing" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-white text-black hover:bg-white hover:text-[#2B4037] transition-all duration-300"
              >
                <ArrowDownToLine className="ml-2 h-5 w-5 font-alqabas" />
                فيلا ب - ملف تعريفي بالعربية
              </Button>
            </Link>
            <Link href="https://drive.google.com/file/d/1JchIG8vbpyXxmNR_cT-c88h_nwZknxDh/view?usp=sharing" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-white text-black hover:bg-white hover:text-[#2B4037] transition-all duration-300"
              >
                <ArrowDownToLine className="ml-2 h-5 w-5 font-alqabas" />
                Villa B - Brochure (EN)
              </Button>
            </Link>
            <Link href="/extenral.pdf" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-white text-black hover:bg-white hover:text-[#2B4037] transition-all duration-300"
              >
                <ArrowDownToLine className="ml-2 h-5 w-5 font-alqabas" />
                ملف تقني - أنظمة ذكية
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/Burooj.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        />
      </div>
    </section>
  );
}
