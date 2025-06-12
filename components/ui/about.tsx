'use client';

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px', // Trigger when section is 100px from bottom of viewport
  });

  const [offsetY, setOffsetY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Ensure the code only runs on the client
    setHasMounted(true);
    const handleScroll = () => setOffsetY(window.scrollY);
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);

    handleScroll();
    checkIsDesktop();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkIsDesktop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  if (!hasMounted) return null;

  return (
    <section
      id="about"
      className="py-20 px-4 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #2B4037 0.46%, #111A16 44.36%, #000 99.69%)",
      }}
    >
      <div className="container mx-auto text-center">
        {/* Enhanced Title & Value Proposition */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-alqabas">عن المشروع</h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
              <strong>فلل حي البحر</strong> - مشروع سكني رائد يعيد تعريف مفهوم الحياة الفاخرة في الخبر
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-white/80">
              يستمد تصميم الفلل الأربع إلهامه من جمال البحر وسحر المناظر الطبيعية، ليحقق انسجامًا بصريًا بين العمارة الحديثة والعناصر الطبيعية.
              تم توظيف ألوان هادئة ومواد طبيعية الملمس، مع مساحات مفتوحة تسمح بتدفق ضوء الشمس ونسيم البحر إلى كل ركن في الفلل.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/70">
              هذا المفهوم المعماري يجسد تجربة سكنية فريدة تمزج بين الفخامة والطبيعة، ضمن بيئة أنيقة تنبض بالصفاء والهدوء.
            </p>
          </div>
        </div>

        {/* Enhanced Stats with Icons */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="flex flex-col items-center">
          
            <h3 className="text-lg font-semibold mb-2">المساحة</h3>
            <p className="text-3xl md:text-4xl font-bold py-3">من ٣٩٩ إلى ٤٢٠</p>
            <p className="text-white/70">م² لكل فيلا</p>
          </div>

          <div className="flex flex-col items-center">
         
            <h3 className="text-lg font-semibold mb-2">عدد الفلل</h3>
            <p className="text-3xl md:text-4xl font-bold py-3">
              {inView && <CountUp end={4} duration={2} />}
            </p>
            <p className="text-white/70">فلل ذكية متكاملة</p>
          </div>

          <div className="flex flex-col items-center">
  
            <h3 className="text-lg font-semibold mb-2">الموقع</h3>
            <p className="text-3xl md:text-4xl font-bold py-3">الخبر</p>
            <p className="text-white/70">حي البحر المميز</p>
          </div>

          <div className="flex flex-col items-center">
   
            <h3 className="text-lg font-semibold mb-2">التقنية</h3>
            <p className="text-3xl md:text-4xl font-bold py-3">
              {inView && <CountUp end={100} duration={2.5} suffix="%" />}
            </p>
            <p className="text-white/70">منزل ذكي متكامل</p>
          </div>
        </div>

        {/* Enhanced Section: Why Choose Hay Albahr */}
        {/* <div className="mb-20 max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 font-alqabas">لماذا فلل حي البحار؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white/90">🏖️ إطلالة بحرية مميزة</h4>
              <p className="text-white/80 leading-relaxed">
                استمتع بالقرب من الشاطئ وإطلالات خلابة على الخليج العربي، مما يوفر أجواء هادئة ومنعشة على مدار السنة.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white/90">🏗️ عمارة مستوحاة من البحر</h4>
              <p className="text-white/80 leading-relaxed">
                تصميم معماري فريد يعكس جمال البيئة الساحلية مع استخدام مواد عالية الجودة وتشطيبات فاخرة.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white/90">🏠 أنظمة ذكية متطورة</h4>
              <p className="text-white/80 leading-relaxed">
                تحكم كامل في الإضاءة والتكييف والأمان من خلال تطبيقات الهاتف الذكي مع إمكانيات التحديث المستمر.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white/90">📍 موقع استراتيجي</h4>
              <p className="text-white/80 leading-relaxed">
                قريب من المراكز التجارية والمدارس المميزة والمرافق الصحية، مع سهولة الوصول للمطار والطرق الرئيسية.
              </p>
            </div>
          </div>
        </div> */}

        {/* Enhanced Parallax Gallery with Captions */}
        <div className="pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center mt-10">
            <div
              className="relative group transition-transform duration-200 ease-out"
              style={{
                transform: isDesktop ? `translateY(${offsetY * -0.05}px)` : "translateY(0px)",
              }}
            >
              <div className="h-[300px] md:h-[350px] overflow-hidden rounded-xl">
                <img
                  src="https://hel1.your-objectstorage.com/burooj-prod/images/2.jpeg"
                  alt="فيلا بروج - التصميم الخارجي"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
              <p className="text-white text-sm font-medium">التناغم مع الطبيعة</p>
              </div>
            </div>

            <div
              className="relative group transition-transform duration-200 ease-out"
              style={{
                transform: isDesktop ? `translateY(${offsetY * -0.1}px)` : "translateY(0px)",
              }}
            >
              <div className="h-[350px] md:h-[450px] overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://hel1.your-objectstorage.com/burooj-prod/images/5.jpeg"
                  alt="فيلا بروج - المساحات الداخلية"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white text-sm font-medium">التصميم الخارجي المعاصر</p>
              </div>
            </div>

            <div
              className="relative group transition-transform duration-200 ease-out"
              style={{
                transform: isDesktop ? `translateY(${offsetY * -0.05}px)` : "translateY(0px)",
              }}
            >
              <div className="h-[300px] md:h-[350px] overflow-hidden rounded-xl">
                <img
                  src="https://hel1.your-objectstorage.com/burooj-prod/images/6.jpeg"
                  alt="فيلا بروج - المناظر الطبيعية"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
              <p className="text-white text-sm font-medium">المساحات الداخلية الفاخرة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
