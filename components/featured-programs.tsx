import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Calendar, GraduationCap } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "Weekend School",
    description: "Islamic education for children on weekends",
    icon: BookOpen,
    href: "/programs/weekend-school",
  },
  {
    title: "Full-Time School",
    description: "Comprehensive Islamic and academic education",
    icon: GraduationCap,
    href: "/programs/full-time-school",
  },
  {
    title: "Youth Programs",
    description: "Activities and education for teenagers",
    icon: Users,
    href: "/programs/youth-programs",
  },
  {
    title: "Community Events",
    description: "Regular gatherings and special occasions",
    icon: Calendar,
    href: "/programs/community-events",
  },
]

export default function FeaturedPrograms() {
  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Programs</h2>
        <p className="text-muted-foreground mt-2">Explore our educational and community programs</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program) => (
          <Link href={program.href} key={program.title}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <program.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{program.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
