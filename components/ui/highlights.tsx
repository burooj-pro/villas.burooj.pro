'use client';

import React, { useState, useEffect } from "react";

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
    <section className="pt-20 bg-black text-white px-6 sm:px-8">
      <div className="container mx-auto flex flex-col md:flex-row  items-center">
        {/* Left Column - Image with parallax */}
        <div
          className="w-full md:w-1/2 h-[300px] md:h-[500px] transition-transform duration-200 ease-out"
          style={{
            transform: isDesktop ? `translateY(${offsetY * -0.05}px)` : "none",
          }}
        >
          <img
            src="https://hel1.your-objectstorage.com/burooj-prod/images/1.png"
            alt="فلل بروج"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-1/2 text-center md:text-right space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            هل ترغب في معرفة المزيد؟
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-md mx-auto md:mx-0">
            تواصل معنا مباشرة لمعرفة المزيد عن تفاصيل الفلل أو التحدث مع أحد ممثلينا.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="tel:+966548366111"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 text-center"
            >
              اتصل الآن
            </a>
            <a
  href="https://wa.me/966548366111?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%A7%D9%84%D9%81%D9%84%D9%84%20%D9%88%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84"
  target="_blank"
>
  تواصل عبر الواتساب
</a>

          </div>
        </div>
      </div>
    </section>
  );
}
