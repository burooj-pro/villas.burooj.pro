'use client';

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectHighlights() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsDesktop(window.innerWidth >= 768);

    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="   relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #2B4037 0.46%, #111A16 44.36%, #000 99.69%)",
      }}
    >
      {/* Background Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-16 left-16 w-36 h-36 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-28 h-28 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Unified Section - Diagram and Actions Combined */}
        <div className="bg-black p-4 sm:p-6 md:p-8 lg:p-12 border-y border-white/10 shadow-2xl w-full">
          
          {/* Header Section */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-alqabas text-center">
                احجز زيارتك الآن
              </h2>
            </div>
            <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
              زوروا موقع المشروع واكتشفوا بأنفسكم روعة التصميم ومزايا الموقع الاستراتيجي
            </p>
          </div>

          {/* Main Content Grid - Responsive */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            
              {/* Left Side - Diagram */}
              <div className="flex flex-col justify-center items-center order-2 lg:order-1">
                <div className="relative group w-full">
                  <div
                    className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto transition-transform duration-200 ease-out"
                    style={{
                      transform: isDesktop ? `translateY(${offsetY * -0.05}px)` : "none",
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative h-full w-full rounded-xl md:rounded-2xl overflow-hidden">
                      <img
                        src="https://hel1.your-objectstorage.com/burooj-prod/images/1.png"
                        alt="فلل بروج - مخطط المشروع"
                        className="w-full h-full object-contain rounded-xl md:rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Quick Actions */}
              <div className="flex flex-col justify-center order-1 lg:order-2">
                {/* Quick Actions */}
                <div className="space-y-3 md:space-y-4">
                  <a href="tel:+966548366111" className="block">
                    <Button
                      size="lg"
                      className="w-full bg-white text-black hover:bg-white/90 font-semibold py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <Phone className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse" />
                      احجز موعد للزيارة
                    </Button>
                  </a>

                  <a 
                    href="https://wa.me/966548366111?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%A7%D9%84%D9%81%D9%84%D9%84%20%D9%88%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF%20%D9%84%D9%84%D8%B2%D9%8A%D8%A7%D8%B1%D8%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-black font-semibold py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <MessageCircle className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:animate-bounce" />
                    تواصل عبر الواتساب
                  </Button>
                </a>

                <a href="mailto:contact@burooj.pro?subject=طلب عرض سعر - فلل حي البحر&body=أهلاً، أرغب في الحصول على عرض سعر مفصل لفلل حي البحر." className="block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-black font-semibold py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <Mail className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse" />
                    طلب عرض سعر
                  </Button>
                </a>
                </div>

                {/* Value Proposition Stats */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-3 md:gap-4 text-center">
                    <div className="bg-white/5 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
                      <p className="text-xl md:text-2xl font-bold text-white mb-1">٣</p>
                      <p className="text-white/80 text-xs md:text-sm font-medium">فلل متاحة</p>
                      <p className="text-white/60 text-xs">للحجز الفوري</p>
                    </div>
                    <div className="bg-white/5 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
                      <p className="text-xl md:text-2xl font-bold text-white mb-1">٢٤/٧</p>
                      <p className="text-white/80 text-xs md:text-sm font-medium">خدمة العملاء</p>
                      <p className="text-white/60 text-xs">دعم مستمر</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
