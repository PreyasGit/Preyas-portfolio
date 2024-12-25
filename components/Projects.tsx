import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Video Calling Web App",
      description:
        "Developed a static video calling web application with a focus on responsive design and a smooth user experience.",
      image: "/images/PH.jpg",
      link: "https://github.com/PreyasGit/video-call",
    },
    {
      title: "Bucket List Web Application",
      description:
        "A personal project featuring wish prioritization, editing, categories, and notes. Currently working on user authentication and cloud storage.",
      image: "/images/PH.jpg",
      link: "https://github.com/PreyasGit/New-Bucketlist",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}