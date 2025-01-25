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
    left: "50%",
    top: "50%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "",
    top: "",
  },
  {
    title: "Gaming",
    emoji: "🏏",
    left: "",
    top: "",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "",
    top: "",
  },
  {
    title: "Music",
    emoji: "📻",
    left: "",
    top: "",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "",
    top: "",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "",
    top: "",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what i do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <Cardheader
              title="My reads"
              description="Explore the books shaping my perspectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <Cardheader
              title="My Toolbox"
              description="Explore the technologies and tools I use to create digital
                experiences."
              className="px-6 pt-6"
            />

            <ToolboxItems items={toolBoxItems} className="mt-6" />
            <ToolboxItems
              items={toolBoxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card>
            <Cardheader
              title="Beyond the code"
              description="Explore my interests and hobbies beyond there"
            />

            <div>
              {hobbies.map((hobbi) => (
                <div
                  key={hobbi.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-yellow-300 to-green-400 rounded-full py-1.5"
                >
                  <span className="font-medium text-gray-950">
                    {hobbi.title}
                  </span>
                  <span>{hobbi.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="location" />
            <Image src={smileEmoji} alt="smiling me" />
          </Card>
        </div>
      </div>
    </div>
  );
};
