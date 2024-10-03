import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialIcons = () => {
  const icons = [
    LinkedInIcon,
    TwitterIcon,
    WhatsAppIcon,
    FacebookIcon,
    InstagramIcon,
    YouTubeIcon,
  ];
  return (
    <div className="w-fit h-fit  text-[#0cffaa] ">
      <ul className="space-y-5 ">
        {icons.map((Icon, index) => (
          <li
            key={index}
            className="bg-[#002321]  w-[60px] h-[60px] justify-center items-center flex rounded-full"
          >
            <a href="#"> 
              <Icon fontSize="large"/>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
