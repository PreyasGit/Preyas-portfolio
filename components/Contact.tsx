import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button type="submit">Send Message</Button>
        </form>
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

