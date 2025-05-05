'use client';

import React from "react";
import { Home, Zap, Wind, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "الموقع الاستراتيجي",
    description: "تقع الفلل في قلب حي البحر بمدينة الخبر، بالقرب من الخدمات الرئيسية، مما يوفر نمط حياة متكامل وسهل الوصول.",
    icon: <Home className="text-green-400" />,
  },
  {
    title: "نظام جمع الغسيل الآلي",
    description: "راحة يومية مع نظام ذكي يجمع الملابس من الغرف مباشرة إلى غرفة الغسيل، مما يوفر الوقت والجهد.",
    icon: <ShieldCheck className="text-green-400" />,
  },
  {
    title: "مكنسة مركزية",
    description: "نظام تنظيف مركزي مدمج يوفر نظافة فعالة دون الحاجة لحمل معدات تقليدية بين الغرف.",
    icon: <Zap className="text-green-400" />,
  },
  {
    title: "أنظمة أتمتة ذكية",
    description: "تحكم متكامل بالإضاءة، التكييف، الستائر، والأجهزة من خلال تطبيق ذكي، لتجربة معيشة عصرية ومريحة.",
    icon: <Wind className="text-green-400" />,
  }
];


export default function Features() {
  return (
    <section
      id="features"
      className="pb-20 px-4 text-white"
      style={{
        background: "linear-gradient(90deg, #2B4037 0.46%, #111A16 44.36%, #000 99.69%)",
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">مميزات المشروع</h2>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
          نقدم أربع فلل ذكية بتقنيات متكاملة وتصميم فريد من نوعه، تجمع بين الرفاهية والراحة.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
   <div
   key={index}
   className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-right shadow-lg"
 >
   <div className="flex items-center gap-3 mb-4">{feature.icon}</div>
   <p className="text-lg font-medium leading-relaxed">{feature.title}</p>
   <p className="text-sm text-white/80 mt-2">{feature.description}</p>
 </div>
 
          ))}
        </div>
      </div>
    </section>
  );
}
