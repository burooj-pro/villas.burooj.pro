'use client';

import React from 'react';

export default function SmartAutomation() {
  return (
    <section
      id="smart-automation"
      className="relative w-full text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/automation2.png"
          alt="Smart Automation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content (Right-Aligned Text) */}
      <div className="relative z-10 flex flex-col items-end justify-center px-6 md:px-20 py-20 md:py-32 min-h-[60vh] text-right">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
            تجربة فاخرة في التحكم الذكي
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            استمتع بالتحكم الكامل في كل تفاصيل الفيلا من خلال أنظمة الأتمتة الذكية: التكييف، الستائر، الإضاءة، الري، الحماية والمزيد.
          </p>
          <a
  href="/extenral.pdf#page=6"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-white text-black font-semibold px-5 py-3 rounded-md hover:bg-gray-200 transition duration-300"
>
  تحميل كتيب الأتمتة الذكية
</a>

        </div>
      </div>
    </section>
  );
}
