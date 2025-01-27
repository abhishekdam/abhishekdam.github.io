import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Vaibhav Yeole",
    position: "Software Engineer @ AlphaSense ",
    text: "Working with Abhishek was an absolute pleasure. Their expertise in front-end development brought our designs to life with precision and creativity. The attention to detail and dedication to delivering exceptional user experiences truly set them apart.",
    avatar: memojiAvatar1,
  },
  {
    name: "Amarjit Yadav",
    position: "Tech Lead @ Dpanda",
    text: "Abhishek is a front-end developer who goes above and beyond to ensure every project is a success. Their ability to translate complex requirements into seamless, responsive interfaces made a significant impact on our product’s performance and user satisfaction.",
    avatar: memojiAvatar2,
  },
  {
    name: "Murali Krishna",
    position: "Senior Software Engineer @ Microsoft",
    text: "Working with Abhishek as our front-end team lead was an inspiring experience. They excelled at guiding the team to deliver clean, maintainable code while ensuring our project timelines were met without compromise on quality. Their technical expertise and leadership kept the team motivated and cohesive.",
    avatar: memojiAvatar3,
  },
  {
    name: "Bholu Tiwari",
    position: "Frontend Engineer @ Razorpay",
    text: "Abhishek's ability to lead a team with clarity and purpose is exceptional. As a front-end team lead, they balanced project deadlines with mentoring team members, creating a positive and productive environment. Their guidance was instrumental in achieving our project goals.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Team Feedback"
          title="What My Colleagues Say About Me"
          description="It’s not just about the work I do, but the relationships I build. Here’s what my team has to say."
        />
      </div>
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center rounded-full flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">
                    {testimonial.text}
                  </p>
                </Card>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
