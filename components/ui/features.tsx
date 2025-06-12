'use client';

import React from "react";
import { Home, Zap, Wind, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "الموقع الاستراتيجي",
    description: "تقع الفلل في قلب حي البحر بمدينة الخبر، بالقرب من الخدمات الرئيسية، مما يوفر نمط حياة متكامل وسهل الوصول.",
    icon: <Home className="text-white/80" />,

  },
  {
    title: "نظام جمع الغسيل الآلي",
    description: "راحة يومية مع نظام ذكي يجمع الملابس من الغرف مباشرة إلى غرفة الغسيل، مما يوفر الوقت والجهد.",
    icon: <ShieldCheck className="text-white/80" />,

  },
  {
    title: "مكنسة مركزية",
    description: "نظام تنظيف مركزي مدمج يوفر نظافة فعالة دون الحاجة لحمل معدات تقليدية بين الغرف.",
    icon: <Zap className="text-white/80" />,

  },
  {
    title: "أنظمة أتمتة ذكية",
    description: "تحكم متكامل بالإضاءة، التكييف، الستائر، والأجهزة من خلال تطبيق ذكي، لتجربة معيشة عصرية ومريحة.",
    icon: <Wind className="text-white/80" />,

  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-4 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #2B4037 0.46%, #111A16 44.36%, #000 99.69%)",
      }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Enhanced Header */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
      
            <h2 className="text-4xl md:text-5xl font-bold font-alqabas">مميزات المشروع</h2>

          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-4xl mx-auto leading-relaxed">
            نقدم أربع فلل ذكية بتقنيات متكاملة وتصميم فريد من نوعه
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            تجمع بين الرفاهية والراحة في بيئة عصرية متطورة
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-full"
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full min-h-[280px] flex flex-col justify-between">
      

                {/* Content */}
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white font-alqabas leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-base group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Bottom Line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-white/40 to-transparent mx-auto mt-6 group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
