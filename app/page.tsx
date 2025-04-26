import HeroCarousel from "@/components/hero-carousel"
import FeaturedPrograms from "@/components/featured-programs"
import Announcements from "@/components/announcements"
import UpcomingEvents from "@/components/upcoming-events"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroCarousel />

      <div className="container mx-auto px-4 py-12 space-y-16">
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to ISCJ</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Islamic Society of Central Jersey is dedicated to serving the Muslim community through education,
            worship, and community service.
          </p>
        </section>

        <FeaturedPrograms />

        <div className="grid md:grid-cols-2 gap-8">
          <Announcements />
          <UpcomingEvents />
        </div>
      </div>
    </main>
  )
}
