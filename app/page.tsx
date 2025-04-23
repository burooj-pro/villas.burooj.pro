import { Hero } from "@/components/ui/hero"
import { Features } from "@/components/ui/features"
import { MediaSection } from "@/components/ui/media-section"
import { ContactForm } from "@/components/ui/contact-form"
import { Footer } from "@/components/ui/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <MediaSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
