
import {
  SiGo,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const SKILL_ICONS = [
  { name: "React", icon: SiReact, color: "text-sky-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "NestJS", icon: SiNestjs, color: "text-rose-600" },
  { name: "Go", icon: SiGo, color: "text-cyan-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "AWS", icon: FaAws, color: "text-amber-600" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-600" },
];

const SkillsLogo = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {SKILL_ICONS.map(({ name, icon: Icon, color }) => (
        <div
          key={name}
          className="group rounded-2xl border border-line bg-white px-4 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-soft"
        >
          <Icon className={`mx-auto text-3xl ${color}`} />
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-slate">
            {name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsLogo;