import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JSicon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import Cardheader from "@/components/Cardheader";
import ToolboxItems from "@/components/ToolboxItems";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JSicon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: Css3Icon,
  },
  {
    title: "ReactJS",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
];

const hobbies = [
  {
    title: "painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🏏",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "📻",
    left: "75%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what i do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <Cardheader
                title="My reads"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <Cardheader
                title="My Toolbox"
                description="Explore the technologies and tools I use to create digital
                experiences."
                className=""
              />

              <ToolboxItems items={toolBoxItems} className="" />
              <ToolboxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <Cardheader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond there"
                className="px-6 py-6"
              />

              <div className="flex-1 relative">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-yellow-300 to-green-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="location"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-yellow-300 to-green-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={smileEmoji} alt="smiling me" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
