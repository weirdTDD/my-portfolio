import { CheckCircle } from "lucide-react";
import React from "react";

const WorkTimeline = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Agricom Assurance",
      period: "March 2026 — Present",
      type: "Remote",
      description:
        "Led end-to-end design for the company's flagship SaaS platform, owning the design system and driving a 40% improvement in user onboarding.",
      skills: ["API Design", "Geospatial Analysis", "User Research"],
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Build Scitech",
      period: "Dec 2025 — Feb 2026",
      type: "Internship",
      description:
        "Collaborated with cross-functional teams to redesign the core mobile experience, reducing support tickets by 25%.",
      skills: ["Prototyping", "Mentorship", "Usability Testing"],
    },
    {
      id: 3,
      role: "Full Stack Engineer",
      company: "Prodigy InfoTech",
      period: "Jan 2025 — Feb 2026",
      type: "Internship",
      description:
        "Built and maintained multiple project based applications from handling Authentication, E-commerce & Real-time featured products.",
      skills: ["Web Sockets", "Microservices", "Design Architecture"],
    },
    {
      id: 4,
      role: "Frontend Developer",
      company: "Cultigenix",
      period: "Jul 2025 — Aug 2025",
      type: "Contract",
      description:
        "Built responsive web interfaces for client projects across Edtech and E-commerce.",
      skills: ["Web Design", "Edtech", "Agile", "React", "TailwindCSS"],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="py-12 text-center my-4">
        <h2 className="md:text-5xl text-3xl">Experiences</h2>
        <p className="text-[16px] md:text-lg md:w-xl mx-auto mt-4">
          These are current experiences and organizations I've contributed to
          over the past few years.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Main Vertical Line */}
        <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-blue-500" />

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12 group">
              {/* Timeline Node (Hollow Ring) */}
              <div className="absolute left-0 top-1.5 w-[20px] h-[20px] rounded-full border-3 border-blue-500 bg-blue-200 z-10" />
              {/* Experience Card */}
              <div className="bg:white/10 dark:bg-slate-900/60 border border-gray-400 rounded-xl p-6 transition-all duration-300 hover:border-blue-600/30 group-hover:-translate-y-2.5">
                {/* Header Row */}
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="text-xs font-semibold text-blue-500/90 mb-1 block uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold dark:text-gray-100 text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-blue-500 font-semibold mb-4">
                      {exp.company}
                    </p>
                  </div>

                  {/* Job Type Badge */}
                  <div className="">
                   

                    <span className="px-2 py-0.5 flex items-center bg-blue-600 border border-gray-500 text-white text-[10px] text-nowrap font-semibold rounded-lg uppercase ">
                       <CheckCircle className="w-4 h-4 mr-2"/>

                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="dark:text-gray-300 font-medium text-gray-600 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-600/30 border border-gray-600 font-medium text-gray-950 dark:text-gray-300 text-xs rounded-md hover:border-gray-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTimeline;
