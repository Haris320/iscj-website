"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "ISCJ Mosque",
    title: "Islamic Society of Central Jersey",
    description: "Serving the community since 1975",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Educational Programs",
    title: "Excellence in Education",
    description: "Providing quality Islamic education for all ages",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    alt: "Community Events",
    title: "Vibrant Community",
    description: "Join us for regular events and activities",
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === carouselImages.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? carouselImages.length - 1 : current - 1)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{image.title}</h2>
            <p className="text-xl md:text-2xl max-w-2xl">{image.description}</p>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
