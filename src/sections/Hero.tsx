import memojiimage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDwn from "@/assets/icons/arrow-down.svg";
import grainimg from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbitComponent from "@/components/HeroOrbitComponent";

export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainimg.src})` }}
        ></div>
        <div className="size-[620px] orbit-hero-ring"></div>
        <div className="size-[820px] orbit-hero-ring"></div>
        <div className="size-[1020px] orbit-hero-ring"></div>
        <div className="size-[1220px] orbit-hero-ring"></div>
        <HeroOrbitComponent
          size={430}
          rotation={80}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spingDuration="3s"
        >
          <SparkleIcon className="size-8 text-yellow-300/20" />
        </HeroOrbitComponent>
        <HeroOrbitComponent
          size={440}
          rotation={-15}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spingDuration="3s"
        >
          <SparkleIcon className="size-5 text-yellow-300/20  " />
        </HeroOrbitComponent>
        <HeroOrbitComponent
          size={520}
          rotation={-70}
          shouldOrbit
          orbitDuration="36s"
        >
          <div className="size-2 rounded-full bg-yellow-300/20" />
        </HeroOrbitComponent>
        <HeroOrbitComponent
          size={530}
          rotation={-170}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spingDuration="3s"
        >
          <SparkleIcon className="size-10 text-yellow-300/20  " />
        </HeroOrbitComponent>
        <HeroOrbitComponent
          size={550}
          rotation={100}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spingDuration="6s"
        >
          <StarIcon className="size-12 text-yellow-300" />
        </HeroOrbitComponent>
        <HeroOrbitComponent
          size={590}
          rotation={18}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spingDuration="6s"
        >
          <StarIcon className="size-8 text-yellow-300" />
        </HeroOrbitComponent>
        <HeroOrbitComponent
          size={620}
          rotation={-20}
          shouldOrbit
          orbitDuration="44s"
        >
          <div className="size-3 rounded-full bg-yellow-300/20" />
        </HeroOrbitComponent>
        <HeroOrbitComponent
          size={710}
          rotation={-120}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spingDuration="3s"
        >
          <SparkleIcon className="size-14 text-yellow-300/20  " />
        </HeroOrbitComponent>
        <HeroOrbitComponent
          size={720}
          rotation={150}
          shouldOrbit
          orbitDuration="48s"
        >
          <div className="size-3 rounded-full bg-yellow-300/20" />
        </HeroOrbitComponent>

        <HeroOrbitComponent
          size={800}
          rotation={-92}
          shouldOrbit
          orbitDuration="50s"
          shouldSpin
          spingDuration="6s"
        >
          <StarIcon className="size-28 text-yellow-300" />
        </HeroOrbitComponent>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image className="size-[100px]" src={memojiimage} alt="pc" />
          <div className="inline-flex items-center gap-4 rounded-lg bg-gray-950 border border-gray-800 px-4 py-1.5">
            <div className="bg-green-400 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new Projects
            </div>
            {/* need to uncomment this when i will stop taking new projects */}
            {/* <div className="bg-red-400 size-2.5 rounded-full"></div>
            <div className="text-sm font0-medium">
              Not available for new Projects
            </div> */}
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl mt-8 text-center tracking-wide">
            Building Eceptional User Experiences
          </h1>
          <p className="mt-4 text-white/60 md:text-lg text-center">
            Transforming designs into functional, high-performing web
            applications. Let&apos;s discuss your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my Work</span>
            <ArrowDwn className="size-4" />
          </button>
          <button className="h-12 px-6 rounded-xl inline-flex items-center gap-2 border border-white bg-white text-gray-900">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
