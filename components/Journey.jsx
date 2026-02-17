const journey = [
  {
    years: "Oct 2025 - Present",
    role: "Senior QA Engineer",
    institution: "Psyomics",
  },
  {
    years: "Sept 2024 - June 2025",
    role: "Senior QA Engineer",
    institution: "TAINA Technology",
  },
  {
    years: "Mar 2024 - July 2024",
    role: "Senior QA Automation Engineer",
    institution: "Defaqto",
  },
  {
    years: "May 2023 - Dec 2023",
    role: "Mid QA Engineer",
    institution: "Mindera",
  },
  {
    years: "Jul 2022 - May 2023",
    role: "QA Automation Engineer",
    institution: "Nagarro",
  },
  {
    years: "May 2021 - June 2022",
    role: "QA Automation Engineer",
    institution: "Digital Distribution Group",
  },
  {
    years: "2016 - 2020",
    role: "QA Lead / Senior / Tester",
    institution: "Gameloft & Quantic Lab",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journey.map((item, index) => {
        const { institution, role, years } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            {/* bullets */}
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-[1px] h-[180px] bg-white/10"></div>
            </div>
            {/* text */}
            <div className="max-w-[500px]">
              <p className="mb-6 text-lg text-white/50">{years}</p>
              <h4 className="h4 mb-2">{role}</h4>
              <p className="text-lg text-white/50">{institution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
