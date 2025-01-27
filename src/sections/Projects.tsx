import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import recordedShowShopping from "@/assets/images/recordedVideoShopping.png";
import uiForShoppableVideo from "@/assets/images/image-of-shoppable-video.webp";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "RevoVideo-Live",
    year: "2021",
    title: "Shopping From Recorded Video",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtube.com/shorts/Zzq-b48d2IY?feature=share",
    image: recordedShowShopping,
  },
  {
    company: "RevoVideo-Streamstyle",
    year: "2022",
    title: "UI for in video product shopping",
    results: [
      { title: "Enhanced user experience by 90%" },
      { title: "Improved site speed by 20%" },
      { title: "Increased mobile traffic by 65%" },
    ],
    link: "https://youtu.be/K_RKlULGnS8",
    image: uiForShoppableVideo,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container ">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-yellow-300 to-green-400 text-center bg-clip-text text-transparent">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how i transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20  gap-20 ">
          {portfolioProjects.map((project, proIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${proIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex bg-gradient-to-r from-yellow-300 to-green-400 gap-2 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>See Project</span>
                      <ArrowUprightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
