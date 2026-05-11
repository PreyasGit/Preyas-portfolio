"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Upgraded status state for better UI feedback
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        () => {
          // Trigger the success UI
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
          
          // Optional: Reset the success message after 5 seconds
          setTimeout(() => {
            setStatus("idle");
          }, 5000);
        },
        (error) => {
          setStatus("error");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={status === "submitting"}
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "submitting"}
            />
            <Textarea 
              placeholder="Your Message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={status === "submitting"}
              className="min-h-[120px]"
            />
            
            <div className="pt-2 flex flex-col gap-3">
              <Button type="submit" disabled={status === "submitting" || status === "success"}>
                {status === "submitting" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
              </Button>
              
              {/* Premium Inline UI Feedback */}
              {status === "success" && (
                <p className="text-sm font-semibold text-slate-900 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  Message sent successfully! I will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-500 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </div>

          </form>
        </div>
        <div>
          <h3 className="text-md font-light text-red-500 mt-9">Connect with me</h3>
          <div className="flex flex-wrap gap-2 text-5xl"> 
            {/* Your exact social links remain unchanged here */}
            <a href="/assets/resume_preyas.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition duration-200">resume</a>
            <span className="text-muted-foreground">•</span>
            <a href="https://github.com/PreyasGit" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition duration-200">github</a>
            <span className="text-muted-foreground">•</span>
            <a href="https://www.linkedin.com/in/preyas-mistry-1694ba259/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition duration-200">linkedin</a>
            <span className="text-muted-foreground">•</span>
            <a href="https://x.com/PREYASMISTRY3" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition duration-200">X</a>
            <span className="text-muted-foreground">•</span>
            <a href="https://www.instagram.com/the.rebel.jedi/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition duration-200">instagram</a>
            <span className="text-muted-foreground">•</span>
            <a href="https://www.patreon.com/c/preyasworks" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition duration-200">patreon</a>
            <a href="https://music.apple.com/profile/the_rebel_jedi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition duration-200">apple music</a>
            <span className="text-muted-foreground">•</span>
            <a href="https://ph.pinterest.com/preyasmistry/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition duration-200">pinterest</a>
          </div>
        </div>
      </div>
    </section>
  );
}