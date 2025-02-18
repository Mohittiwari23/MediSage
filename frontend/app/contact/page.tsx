import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@medisage.com", "info@medisage.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Healthcare Avenue", "Medical District", "New York, NY 10001"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
    },
  ]

  return (
    <div className="max-w-[1440px] mx-auto px-20 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to us through any of these channels.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <div className="grid sm:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="space-y-2 p-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <item.icon className="h-6 w-6 text-primary" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-base text-muted-foreground mb-2">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="p-6">
            <CardTitle className="text-2xl">Send us a message</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input placeholder="First name" className="text-base py-6" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Last name" className="text-base py-6" />
                </div>
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Email" className="text-base py-6" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Your message" className="min-h-[160px] text-base" />
              </div>
              <Button type="submit" className="w-full text-lg py-6">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

