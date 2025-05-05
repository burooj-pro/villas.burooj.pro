'use client';

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only apply transform on md and larger
  const isClient = typeof window !== "undefined";
  const isDesktop = isClient && window.innerWidth >= 768;

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #2B4037 0.46%, #111A16 44.36%, #000 99.69%)",
      }}
    >
      <div className="container mx-auto text-center">
        {/* Title & Intro */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">عن المشروع</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-4xl mx-auto">
        يستمد تصميم الفلل الأربع إلهامه من جمال البحر وسحر المناظر الطبيعية، ليحقق انسجامًا بصريًا بين العمارة الحديثة والعناصر الطبيعية. تم توظيف ألوان هادئة ومواد طبيعية الملمس، مع مساحات مفتوحة تسمح بتدفق ضوء الشمس ونسيم البحر إلى كل ركن في الفلل.

هذا المفهوم المعماري يجسد تجربة سكنية فريدة تمزج بين الفخامة والطبيعة، ضمن بيئة أنيقة تنبض بالصفاء والهدوء.


        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
  <h3 className="text-xl font-semibold">المساحة</h3>
  <p className="text-4xl font-bold py-5">من ٣٩٩ إلى ٤٢٠</p>
  <p className="text-white/70">م² لكل فيلا</p>
</div>

          <div>
            <h3 className="text-xl font-semibold">عدد الفلل</h3>
            <p className="text-4xl font-bold py-5">
              {inView && <CountUp end={4} duration={2} />}
            </p>
            <p className="text-white/70">فلل ذكية متكاملة</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">الموقع</h3>
            <p className="text-4xl font-bold py-5">الخبر</p>
            <p className="text-white/70">حي البحر</p>
          </div>
        </div>

        {/* Parallax Gallery (disabled on mobile) */}
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 gap-y-6 items-center mt-10">
          <div
            className="h-[250px] md:h-[300px] transition-transform duration-200 ease-out"
            style={{
              transform: isDesktop ? `translateY(${offsetY * -0.05}px)` : "none",
            }}
          >
            <img
              src="/villa2.png"
              alt="فيلا بروج 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div
            className="h-[300px] md:h-[400px] transition-transform duration-200 ease-out"
            style={{
              transform: isDesktop ? `translateY(${offsetY * -0.1}px)` : "none",
            }}
          >
            <img
              src="/villa1.png"
              alt="فيلا بروج 2"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
          </div>

          <div
            className="h-[250px] md:h-[300px] transition-transform duration-200 ease-out"
            style={{
              transform: isDesktop ? `translateY(${offsetY * -0.05}px)` : "none",
            }}
          >
            <img
              src="/villa3.png"
              alt="فيلا بروج 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
