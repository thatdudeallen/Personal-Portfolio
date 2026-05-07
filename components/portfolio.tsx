import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    image: "/images/work-1.png",
    title: "Restaurant Website",
    description:
      "The website provides an online platform for customers to explore the menu, make reservations, and learn more about the establishment, enhancing their overall dining experience.",
    link: "#",
  },
  {
    image: "/images/work-2.png",
    title: "Graphic Design",
    description:
      "This vibrant graphic design boasts bold geometric shapes and vivid colors, creating a dynamic visual impact. Perfect for framing, it adds a modern flair to any space, sparking conversation whether in a home, office, or studio.",
    link: "#",
  },
  {
    image: "/images/work-3.png",
    title: "Photography",
    description:
      "This captivating photo captures the architectural beauty of Long Street in Cape Town against a vibrant sky backdrop. Through photography, I've frozen moments in time, appreciating intricate details, and experimented with editing software to enhance creativity.",
    link: "#",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-12">
      <div className="px-[10%]">
        <h2 className="text-4xl md:text-6xl font-semibold text-foreground text-center md:text-left">
          My Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl relative overflow-hidden group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full rounded-xl block transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-black/90 rounded-xl flex flex-col items-center justify-center p-10 text-center opacity-0 h-0 transition-all duration-500 group-hover:opacity-100 group-hover:h-full">
                <h3 className="text-lg font-medium mb-5 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/90">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="mt-5 w-14 h-14 rounded-full bg-background flex items-center justify-center text-foreground"
                  aria-label={`View ${project.title} project`}
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="#"
          className="block mx-auto mt-12 w-fit border border-primary px-12 py-3.5 rounded-md text-foreground transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
        >
          See More
        </Link>
      </div>
    </section>
  );
}
