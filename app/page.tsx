import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import Features from "@/components/ui/features";
import { ProjectHighlights } from "@/components/ui/highlights";
import SmartAutomation from "@/components/ui/smart-automation";



import { Footer } from "@/components/ui/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SmartAutomation />
      <Features />
      <ProjectHighlights />
      <Footer />
    </main>
  )
}
