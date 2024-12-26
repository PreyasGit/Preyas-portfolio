import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "HTML", "CSS", "ReactJS", "NodeJS", 
    "NextJS", "PostgreSQL", "MongoDB", "Figma", "Procreate", "DaVinci Resolve",
    "Bash Script", "AWS", "Google Cloud", "Express.js", "EJS", "JWT", "NPM", 
    "Nodemon", "jQuery", "MySQL", "TailwindCSS", "Notion", "Postman", "Adobe fresco",
    "Adobe Lightroom", "Vercel", "Nginx", "Canva", "Git", "GitHub", "bootstrap", "docker", 
    "xcode", 
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

