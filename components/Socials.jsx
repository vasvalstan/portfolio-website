import {
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/valentin-stanciu-684a97229/",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/vasvalstan",
  },
];

import Link from "next/link";

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
