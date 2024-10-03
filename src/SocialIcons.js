import React from "react";
import {
  FaSkype,
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
  FaSnapchat,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const SocialIcons = () => {
  const icons = [
    FaSkype,
    FaTwitter,
    FaWhatsapp,
    FaFacebook,
    FiInstagram,
    FaSnapchat,
  ];
  return (
    <div className="w-fit h-fit  text-[#0cffaa] ">
      <ul className="space-y-5 ">
        {icons.map((Icon, index) => (
          <li
            key={index}
            className="bg-[#002321] text-4xl w-[60px] h-[60px] justify-center items-center flex rounded-full"
          >
            <a href="#">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
