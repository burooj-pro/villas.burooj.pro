'use client';

import { Phone, Mail, MessageCircle, MapPin, Clock, Building } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#2B4037] to-[#111A16]">
      <div className="container mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-alqabas">
            استفسر الآن
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            فريقنا المتخصص جاهز لمساعدتكم في اختيار الفيلا المثالية
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-alqabas">
              استفسر الآن              </h3>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
              فريقنا المتخصص جاهز لمساعدتكم في اختيار الفيلا المثالية
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <Phone className="h-8 w-8 text-white" />
                <div>
                  <h4 className="text-lg font-semibold text-white">الهاتف</h4>
                  <p className="text-white/80">+966 13 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <MessageCircle className="h-8 w-8 text-white" />
                <div>
                  <h4 className="text-lg font-semibold text-white">واتساب</h4>
                  <p className="text-white/80">تواصل فوري عبر الواتساب</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <Mail className="h-8 w-8 text-white" />
                <div>
                  <h4 className="text-lg font-semibold text-white">البريد الإلكتروني</h4>
                  <p className="text-white/80">info@burooj.pro</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <MapPin className="h-8 w-8 text-white" />
                <div>
                  <h4 className="text-lg font-semibold text-white">الموقع</h4>
                  <p className="text-white/80">حي البحار، الخبر، المملكة العربية السعودية</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <Clock className="h-8 w-8 text-white" />
                <div>
                  <h4 className="text-lg font-semibold text-white">ساعات العمل</h4>
                  <p className="text-white/80">الأحد - الخميس: 8:00 ص - 6:00 م</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="text-center mb-8">
              <Building className="h-16 w-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-alqabas">
                احجز زيارتك الآن
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                زوروا موقع المشروع واكتشفوا بأنفسكم روعة التصميم ومزايا الموقع الاستراتيجي
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-white text-[#2B4037] hover:bg-white/90 font-semibold py-4 text-lg"
              >
                <Phone className="ml-2 h-5 w-5" />
                احجز موعد للزيارة
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-[#2B4037] font-semibold py-4 text-lg"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                تواصل عبر الواتساب
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-[#2B4037] font-semibold py-4 text-lg"
              >
                <Mail className="ml-2 h-5 w-5" />
                أرسل استفساراً
              </Button>
            </div>

            {/* Value Proposition */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-white">٤</p>
                  <p className="text-white/80 text-sm">فلل متاحة</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">٢٤/٧</p>
                  <p className="text-white/80 text-sm">خدمة العملاء</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Opportunity Banner */}
        {/* <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-alqabas">
            فرصة استثمارية مميزة
          </h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
            استثمر في مستقبل السكن الذكي بمنطقة الخليج. فلل حي البحار تقدم عائد استثمار مجزي مع إمكانيات نمو عالية في سوق العقارات الفاخرة
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#2B4037] hover:bg-white/90 font-semibold"
            >
              طلب دراسة جدوى
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2B4037] font-semibold"
            >
              عرض أسعار خاصة
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
} 