import { Code, PenTool, Film } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "I create and develop websites, focusing on design, functionality, and user experience. My work involves coding, designing layouts, and implementing features to ensure that websites are visually appealing, easy to navigate, and responsive across different devices.",
  },
  {
    icon: PenTool,
    title: "Graphic Designing",
    description:
      "As a graphic designer, I craft visually appealing and impactful designs that communicate messages effectively. Whether it's creating logos, illustrations, or marketing materials, I combine artistic flair with strategic thinking to meet clients' needs and enhance their brand identity.",
  },
  {
    icon: Film,
    title: "Filmmaking & Photography",
    description:
      "I specialize in visual storytelling through film and photography, capturing emotions and narratives with creativity and expertise. Whether documenting events or conveying messages through imagery, I bring a keen eye for detail to every project.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-8">
      <div className="px-[10%]">
        <h2 className="text-4xl md:text-6xl font-semibold text-foreground text-center md:text-left">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-10 rounded-xl text-card-foreground transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:-translate-y-2.5 group"
            >
              <service.icon className="w-12 h-12 mb-8 transition-colors group-hover:text-primary-foreground" />
              <h3 className="text-2xl md:text-3xl font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
