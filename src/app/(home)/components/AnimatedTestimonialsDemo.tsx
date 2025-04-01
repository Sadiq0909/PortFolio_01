import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "[Your Degree] <br/> [Your University], [Year of Graduation]<br/>Relevant coursework: [Key subjects or skills]",
      name: "Education",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Passionate software developer with expertise in web development, machine learning, and AI technologies.",
      name: "Skills",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKq6HM9tGGgriGmwG8-0ziKlqHhtSmVEAlA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQF0kax-oyXittudSdmvzznKQgUW8Ag0D55Q&s",
    },
    {
      quote: "Aiming to create innovative solutions that solve real-world problems, while pushing the boundaries of technology.",
      name: "Vision",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgh8suI6cU46FeFvWBlkiXQofjxWOEKrAog&s",
    },
    {
      quote: "Constantly learning and improving my skill set to stay on top of the latest trends in the tech industry.",
      name: "Learning",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdVTFUFyAsKi5e2QC2Zg5WdgufCwsHNmLpg&s",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
