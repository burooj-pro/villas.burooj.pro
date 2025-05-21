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
        url: "https://hel1.your-objectstorage.com/burooj-prod/images/4.jpeg",
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
    images: ["https://hel1.your-objectstorage.com/burooj-prod/images/4.jpeg"],
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
      <head>
        {/* TikTok Pixel */}
        <script
          id="tiktok-pixel"
          dangerouslySetInnerHTML={{
            __html: `!function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq, ttq.methods[i]);
              ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
              ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
              ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
              var s=d.createElement("script");s.type="text/javascript";s.async=!0;
              s.src=r+"?sdkid="+e+"&lib="+t;
              var f=d.getElementsByTagName("script")[0];
              f.parentNode.insertBefore(s,f)};
              ttq.load("D0M45C3C77U8DMAGO9H0");
              ttq.page();
            }(window, document, 'ttq');`,
          }}
        />

        {/* Snap Pixel */}
        <script
          id="snap-pixel"
          dangerouslySetInnerHTML={{
            __html: `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
              {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
              a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
              r.src=n;var u=t.getElementsByTagName(s)[0];
              u.parentNode.insertBefore(r,u);})(window,document,
              'https://sc-static.net/scevent.min.js');

              snaptr('init', 'd9aaaff3-e67a-4544-b2d4-8c66877bc4e6');
              snaptr('track', 'PAGE_VIEW');`,
          }}
        />
      </head>
      <body className={`${notoKufiArabic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
