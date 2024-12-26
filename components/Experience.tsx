import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const experiences = [
    {
      title: "Summer Intern",
      company: "Krtya Technologies Pvt. Ltd.",
      period: "May 2024 - Jun 2024",
      description:
        "Contributed to the Ticket Management System Project and built a functional Movie Ticket Booking Web Application with backend integration.",
      technologies: ["NextJS", "ReactJS", "Node.js", "MongoDB", "Tailwind CSS"],
      projectType: "link",
      projectLink: "https://github.com/PreyasGit/movie-repo",
      buttonText: "View Project",
    },
    {
      title: "Digital Artist",
      company: "Upwork",
      period: "Mar 2023",
      description:
        "Created and minted NFTs from original digital artwork using Procreate, delivering customized art solutions to clients.",
      technologies: ["Procreate", "Blockchain"],
      projectType: "image",
      projectLink: "/images/nft-artwork-protected.png",
      buttonText: "View Artwork",
    },
    {
      title: "Placement Android Application",
      company: "SSIP Hackathon Finalist, Anand",
      period: "Oct 2022 - Feb 2023",
      description:
        "Designed user-centric interfaces for a Placement Android App using Figma, enhancing app usability and project success.",
      technologies: ["Figma"],
      projectType: "image",
      projectLink: "/images/placement_app.png",
      buttonText: "View Project",
    },
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-grow">
              <div>
                <p className="mb-4">{exp.description}</p>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  {exp.technologies.join(" / ")}
                </p>
              </div>
              {exp.projectLink && (
                <Button asChild className="self-start mt-auto">
                  <a
                    href={exp.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.buttonText}
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}