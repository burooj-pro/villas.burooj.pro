import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "فلل بروج - تجربة سكنية مميزة في حي البحر، الخبر",
  description:
    "اكتشف فلل بروج الذكية في حي البحر بمدينة الخبر. أربع فلل بتصميم معماري عصري يجمع بين الرفاهية والطبيعة، مزودة بأنظمة تحكم ذكية للإضاءة والمناخ والصوت، وتوفر مساحات مفتوحة وإطلالات ساحرة.",
  keywords: [
    "فلل ذكية",
    "فلل للبيع في الخبر",
    "سكن فاخر",
    "فلل حديثة",
    "حي البحر الخبر",
    "مشاريع سكنية",
    "أنظمة منزل ذكي",
    "فلل بروج",
    "منازل راقية",
    "بروج العقارية",
    "الفلل الفاخرة",
    "سكن في الخبر",
    "فلل مع إطلالة",
    "تصميم معماري حديث",
    "منازل مع تحكم ذكي",
  ],
  openGraph: {
    title: "فلل بروج - تجربة سكنية مميزة في حي البحر، الخبر",
    description:
      "فلل بروج توفر تجربة سكنية فريدة في موقع مميز بمدينة الخبر، بتصميم راقٍ ومتكامل مع الطبيعة، وأنظمة ذكية متقدمة.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "فلل بروج - تجربة سكنية مميزة في حي البحر، الخبر",
      },
    ],
    url: "https://villas.burooj.pro/",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "فلل بروج - تجربة سكنية مميزة في حي البحر، الخبر",
    description:
      "استمتع بتصميم معماري يجمع بين الحداثة والطبيعة في فلل بروج الذكية بحي البحر. تفاصيل دقيقة وأنظمة متطورة لراحة يومية.",
    images: ["/og.png"],
    site: "@buroojsa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoKufiArabic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
