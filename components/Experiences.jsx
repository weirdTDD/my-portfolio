import React from 'react';

const WorkTimeline = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Product Designer",
      company: "Acme Corp",
      period: "2022 — Present",
      type: "Full-time",
      description: "Led end-to-end design for the company's flagship SaaS platform, owning the design system and driving a 40% improvement in user onboarding.",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping"]
    },
    {
      id: 2,
      role: "Product Designer",
      company: "Bright Labs",
      period: "2020 — 2022",
      type: "Full-time",
      description: "Collaborated with cross-functional teams to redesign the core mobile experience, reducing support tickets by 25%.",
      skills: ["Mobile UX", "Mentorship", "Usability Testing"]
    },
    {
      id: 3,
      role: "UI/UX Designer",
      company: "Studio Nine",
      period: "2019 — 2020",
      type: "Contract",
      description: "Designed responsive web interfaces for 8+ client projects across fintech and e-commerce.",
      skills: ["Web Design", "Fintech", "Agile", "HTML/CSS"]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto relative">
        
        {/* Main Vertical Line */}
        <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-blue-500" />

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12 group">
              
              {/* Timeline Node (Hollow Ring) */}
              <div className="absolute left-0 top-1.5 w-[20px] h-[20px] rounded-full border-3 border-blue-500 bg-blue-200 z-10" />
              {/* Experience Card */}
              <div className=" dark:bg-slate-900/60 border border-gray-500 rounded-xl p-6 transition-all duration-300 hover:border-blue-600/30 group-hover:-translate-y-2.5">
                
                {/* Header Row */}
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="text-xs font-medium text-blue-500/90 mb-1 block uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold dark:text-gray-100 text-gray-900">{exp.role}</h3>
                    <p className="text-blue-400 font-medium mb-4">{exp.company}</p>
                  </div>
                  
                  {/* Job Type Badge */}
                  <span className="px-3 py-1  bg-gray-600/30 border border-gray-600 text-white text-[10px] text-nowrap font-semibold rounded-xl uppercase ">
                    {exp.type}
                  </span>
                </div>

                <p className="dark:text-gray-300 text-gray-600 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-gray-600/30 border border-gray-600 text-gray-300 text-xs rounded-md font-medium hover:border-gray-500 transition-colors"
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