import "./Animated_scroll.css";

const skills = [
  { name: "HTML", percentage: 89 },
  { name: "CSS", percentage: 47 },
  { name: "JavaScript", percentage: 56 },
  { name: "UI/UX Design", percentage: 19 },
  { name: "React.js", percentage: 53 },
];

const CircularProgressBar = ({ percentage, name }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center m-4">
      <svg width="160" height="160" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff007f" />
            <stop offset="100%" stopColor="#6200ea" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="55" textAnchor="middle" fontSize="16" fill="#374151">
          {percentage}%
        </text>
      </svg>
      <p className="mt-2 text-gray-700 font-medium">{name}</p>
    </div>
  );
};

const MySkills = () => {
  return (
    <div className="bg-[url('https://wallpapers.com/images/hd/light-color-background-vmkuihk29pi1xq65.jpg')] bg-cover bg-center md:pt-5 pt-16 px-5 pb-20">
       <h1 className="text-center text-red-600 lg:text-5xl text-3xl pt-5">
          My Skills
        </h1>
      <p className="text-center text-xl font-light text-gray-600 py-2">MY FRONTEND SKILLS</p>
      <div className="flex flex-wrap justify-center p-6" id="project_scroll">
        {skills.map((skill) => (
          <CircularProgressBar
            key={skill.name}
            percentage={skill.percentage}
            name={skill.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MySkills;
