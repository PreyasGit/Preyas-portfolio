import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div>
          <h3 className="text-md font-light text-red-500 mt-9">Connect with me</h3>
          <div className="flex flex-wrap gap-2 text-5xl"> 
            <a
              href="/assets/resume_preyas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition duration-200"
            >
              resume
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://github.com/PreyasGit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition duration-200"
            >
              github
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://www.linkedin.com/in/preyas-mistry-1694ba259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition duration-200"
            >
              linkedin
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://x.com/PREYASMISTRY3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition duration-200"
            >
              X
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://www.instagram.com/the.rebel.jedi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition duration-200"
            >
              instagram
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://www.patreon.com/c/preyasworks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition duration-200"
            >
              patreon
            </a>
            <a
              href="https://music.apple.com/profile/the_rebel_jedi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition duration-200"
            >
              apple music
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://ph.pinterest.com/preyasmistry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-500 transition duration-200"
            >
              pinterest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}