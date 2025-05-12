"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const emailAddress = "damforwork247@gmail.com";

  const emailSubject = "Project Inquiry";

  const emailBody = encodeURIComponent(
    `Hi Dam,

I'm interested in discussing a project with you.

Project Type: [Please describe the type of project, e.g., Web Development, Mobile App, Design]
Brief Description: [Please provide a short overview of your project]
Timeline: [What is your desired timeline or deadline?]
Budget (Optional): [If you have a budget in mind, please mention it]

Looking forward to hearing from you!

Best regards,
[Your Name]
[Your Contact Information (Optional)]
`
  );

  const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  const handleContactClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-yellow-300 to-green-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create somthing amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to brgin your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals
              </p>
            </div>
            <div>
              <button
                onClick={handleContactClick} // Added the onClick handler here
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                {ArrowUpRightIcon && <ArrowUpRightIcon className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
