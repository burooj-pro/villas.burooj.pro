import { Sparkles, Shield, Clock, DollarSign } from "lucide-react"

const features = [
  {
    title: "كفاءة أعلى",
    description: "تقنيات دقيقة تضمن جودة عالية في التنظيف",
    icon: Sparkles,
  },
  {
    title: "تكلفة أقل",
    description: "تقليل العمالة والتكاليف التشغيلية بنسبة 40%",
    icon: DollarSign,
  },
  {
    title: "وقت أسرع",
    description: "إنجاز عمليات التنظيف بسرعة فائقة بنسبة 70%",
    icon: Clock,
  },
  {
    title: "أمان أكبر",
    description: "تقليل المخاطر على العاملين بشكل كبير",
    icon: Shield,
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#3437FF]">
          مميزات الخدمة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-[#3437FF]/20 hover:border-[#3437FF]/40 transition-all bg-[#3437FF]/5"
            >
              <feature.icon className="h-12 w-12 text-[#3437FF] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#3437FF]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 