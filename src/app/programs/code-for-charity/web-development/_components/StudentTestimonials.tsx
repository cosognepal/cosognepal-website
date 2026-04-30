import SectionTitle from "@/components/SectionTitle";
import Testimonial, { TestimonialData } from "@/components/ui/Testimonial";

import aadityaImage from "@/assets/images/Testimonials/aaditya.jpg";
import shashankImage from "@/assets/images/Testimonials/shashank.jpg";
import nayanImage from "@/assets/images/Testimonials/nayan.jpg";

const TESTIMONIALS: TestimonialData[] = [
  {
    name: "Aaditya Khanal",
    role: "Student",
    image: aadityaImage,
    quote:
      "I recently completed the 15+ days free WordPress workshop organized by Cosog Nepal, and it was truly a valuable experience. The mentors were highly supportive, knowledgeable, and always ready to help throughout the sessions. A special thanks to Aashish Panthi, the lead of Cosog Nepal, for being extremely friendly, approachable, and guiding us smoothly during the entire workshop. Overall, this workshop helped me build a strong foundation in WordPress.",
  },
  {
    name: "Shashank Shrestha",
    role: "Student",
    image: shashankImage,
    quote:
      "I signed up for the Web Development course at Cosog Nepal because I wanted to learn how to build websites with WordPress. Taking this course was both hard and rewarding. All of the mentors were very helpful and always available when needed. Working and studying with other students made the process more fun and less stressful. This course helped me grow both as a person and as a professional, and it inspired me to keep learning new things.",
  },
  {
    name: "Nayan Acharya",
    role: "Student",
    image: nayanImage,
    quote:
      "Joining Cosog's WordPress Program was fully driven by curiosity to learn and build digital products. This journey was more than just learning about WordPress — it showed us collaboration, mentorship, and growth. Connecting with mentors and other peers gave me a new perspective and inspired me to build meaningful projects. This program didn't just teach skills; it helped shape my mindset toward innovation and continuous learning.",
  },
];

export default function StudentTestimonials() {
  return (
    <section className="space-y-block" id="testimonials">
      <SectionTitle title="Hear from our students" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-standard">
        {TESTIMONIALS.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
