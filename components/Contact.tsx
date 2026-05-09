import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const socialLinks = [
    { name: "resume", href: "/assets/resume_preyas.pdf" },
    { name: "github", href: "https://github.com/PreyasGit" },
    { name: "linkedin", href: "https://www.linkedin.com/in/preyas-mistry-1694ba259/" },
    { name: "X", href: "https://x.com/PREYASMISTRY3" },
    { name: "instagram", href: "https://www.instagram.com/the.rebel.jedi/" },
    { name: "patreon", href: "https://www.patreon.com/c/preyasworks" },
    { name: "apple music", href: "https://music.apple.com/profile/the_rebel_jedi" },
    { name: "pinterest", href: "https://ph.pinterest.com/preyasmistry/" },
  ];

  return (
    <section id="contact" className="py-32">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold mb-8 tracking-tighter">Contact Me</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="transition-all duration-200 ease-out">
              Send Message
            </Button>
          </form>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6 tracking-tight">Connect with me</h3>
          <div className="flex flex-wrap gap-1 text-base">
            {socialLinks.map((link, index) => (
              <div key={link.name} className="flex items-center gap-1">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors duration-200 ease-out"
                >
                  {link.name}
                </a>
                {index < socialLinks.length - 1 && (
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
