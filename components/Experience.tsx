import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      title: "Summer Intern",
      company: "Krtya Technologies Pvt. Ltd.",
      period: "May 2024 - Jun 2024",
      description:
        "Contributed to the Ticket Management System Project and built a functional Movie Ticket Booking Web Application with backend integration.",
    },
    {
      title: "Digital Artist",
      company: "Upwork",
      period: "Mar 2023",
      description:
        "Created and minted NFTs from original digital artwork using Procreate, delivering customized art solutions to clients.",
    },
    {
      title: "Placement Android Application",
      company: "SSIP Hackathon Finalist, Anand",
      period: "Oct 2022 - Feb 2023",
      description:
        "Designed user-centric interfaces for a Placement Android App using Figma, enhancing app usability and project success.",
    },
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}