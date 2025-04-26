import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Megaphone } from "lucide-react"

const announcements = [
  {
    title: "Registration Open for Fall Semester",
    date: "August 15, 2023",
    content: "Registration for the Fall semester is now open. Please register early to secure your spot.",
  },
  {
    title: "Eid Prayer Announcement",
    date: "July 10, 2023",
    content: "Eid prayer will be held at the main hall. First session at 7:30 AM and second session at 9:00 AM.",
  },
  {
    title: "Fundraising Dinner",
    date: "June 25, 2023",
    content: "Join us for our annual fundraising dinner. Tickets available at the office or online.",
  },
]

export default function Announcements() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center space-x-2 pb-2">
        <Megaphone className="h-5 w-5 text-primary" />
        <CardTitle>Announcements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} className={index !== 0 ? "pt-4 border-t" : ""}>
              <h3 className="font-medium">{announcement.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{announcement.date}</p>
              <p className="text-sm">{announcement.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
