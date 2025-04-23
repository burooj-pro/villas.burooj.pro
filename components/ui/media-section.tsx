'use client'

import { Play } from "lucide-react"


const videos = [
  {
    videoUrl: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/Burooj Air - Al Fozan Cleaning - Vertical Draft 01.mp4",
    thumbnail: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/thumbnails/video-capture-t0010.80seg-8999.png",
    title: "تنظيف المنازل بالطائرات"
  },
  {
    videoUrl: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/Burooj Air 02 - Vertical (1).mp4",
    thumbnail: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/thumbnails/video-capture-t0022.07seg-7409.png",
    title: "تنظيف المباني بالطائرات"
  },
  {
    videoUrl: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/Burooj Air V - Co HQ 7 Cleaning - 15.MP4",
    thumbnail: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/thumbnails/video-capture-t0020.57seg-4246.png",
    title: "تنظيف المباني بالطائرات"
  },
  {
    videoUrl: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/Burooj Air V - Private Villa 6 Cleaning - 13.MP4",
    thumbnail: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/thumbnails/video-capture-t0011.70seg-5686.png",
    title: "تنظيف الأسطح والزوايا الصعبة"
  },
  {
    videoUrl: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/Campaign-01-2021.mp4",
    thumbnail: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/thumbnails/video-capture-t0012.26seg-1858.png",
    title: "تنظيف ألواح الطاقة الشمسية (إعلان)"
  },
  {
    videoUrl: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/Campaign-02-2025.mp4",
    thumbnail: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/thumbnails/video-capture-t0009.64seg-972.png",
    title: "تنظيف شاشات إعلانية وأسطح صعبة (إعلان)"
  },
  {
    videoUrl: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/burooj_air_-_al_fozan_cleaning (1080p).mp4",
    thumbnail: "https://seed-buroojair-prod.hel1.your-objectstorage.com/profile-documents/thumbnails/video-capture-t0013.23seg-9002.png",
    title: "تنظيف القصور والمنازل (إعلان)"
  },

  
]

export function MediaSection() {
  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank')
  }

  return (
    <section className="py-20 bg-[#3437FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          شاهد كيف نعمل
        </h2>
        <p className="text-lg text-white/90 text-center mb-12 max-w-2xl mx-auto">
          نستخدم أحدث تقنيات الطائرات بدون طيار لتنظيف المباني والمنشآت بكفاءة عالية
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => handleVideoClick(video.videoUrl)}
            >
              <div className="absolute inset-0 bg-[#3437FF]/10 flex items-center justify-center group-hover:bg-[#3437FF]/60 transition-colors">
                <Play className="h-16 w-16 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
              <img
                src={`https://wsrv.nl/?url=${encodeURIComponent(video.thumbnail)}&w=640&h=640&fit=cover&output=webp&q=80`}
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white text-sm font-medium line-clamp-2">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 