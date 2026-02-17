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

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
