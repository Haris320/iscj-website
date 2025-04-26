import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const events = [
  {
    title: "Friday Prayer",
    date: "Every Friday",
    time: "1:00 PM - 2:00 PM",
    location: "Main Prayer Hall",
  },
  {
    title: "Weekend School",
    date: "Every Saturday & Sunday",
    time: "10:00 AM - 2:00 PM",
    location: "School Building",
  },
  {
    title: "Community Iftar",
    date: "March 15, 2024",
    time: "6:30 PM - 8:30 PM",
    location: "Community Center",
  },
]

export default function UpcomingEvents() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center space-x-2 pb-2">
        <Calendar className="h-5 w-5 text-primary" />
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className={index !== 0 ? "pt-4 border-t" : ""}>
              <h3 className="font-medium">{event.title}</h3>
              <p className="text-sm">{event.date}</p>
              <p className="text-sm text-muted-foreground">{event.time}</p>
              <p className="text-sm text-muted-foreground">{event.location}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
