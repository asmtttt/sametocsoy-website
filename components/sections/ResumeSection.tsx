"use client";

import { Icons } from "@/components/icons/Icons";
import { useTranslation } from "@/lib/i18n";
import { skills, jobMeta, schoolMeta } from "@/lib/data";

type JobKey = keyof typeof jobMeta;
type SchoolKey = keyof typeof schoolMeta;

export default function ResumeSection() {
  const { t } = useTranslation();
  const r = t.resume;

  return (
    <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      <div className="grid md:grid-cols-3 gap-12">

        <div className="md:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic text-white cursor-default">
              <Icons.Briefcase /> {r.experience}
            </h2>
            <div className="space-y-12 border-l-2 border-slate-800 ml-3 pl-8 relative">
              {r.jobs.map((job) => {
                const meta = jobMeta[job.key as JobKey];
                return (
                  <div key={job.key} className="relative group">
                    <div
                      className={`absolute -left-[39px] top-1 w-4 h-4 rounded-full border-4 border-[#030712] transition-transform duration-300 group-hover:scale-125 ${
                        meta.isCurrent
                          ? "bg-blue-500"
                          : "bg-slate-600 group-hover:bg-blue-400"
                      }`}
                    />
                    <h4 className="text-lg font-bold text-white cursor-default">{job.title}</h4>
                    <div className="text-blue-400 text-sm mb-4 font-semibold tracking-wide flex flex-wrap gap-2 cursor-default">
                      {meta.companies.map((company, i) => (
                        <span key={i} className="flex items-center gap-2">
                          {i > 0 && <span>-</span>}
                          <a
                            href={company.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors cursor-pointer"
                          >
                            {company.name}
                          </a>
                        </span>
                      ))}
                      <span>• {job.period}</span>
                    </div>

                    {job.bullets.length > 0 ? (
                      <ul className="space-y-3 text-slate-400 text-sm leading-relaxed cursor-default">
                        {job.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>
                              <strong className="text-slate-200">{bullet.title}:</strong>{" "}
                              {bullet.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-400 text-sm leading-relaxed cursor-default mb-2">
                        {job.description}
                      </p>
                    )}

                    {meta.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3">
                        {meta.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/5 border border-blue-500/10 text-blue-400/80 uppercase font-bold tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic text-white cursor-default">
              <Icons.GraduationCap /> {r.education}
            </h2>
            <div className="grid gap-4">
              {r.schools.map((school) => {
                const meta = schoolMeta[school.key as SchoolKey];
                return (
                  <a
                    key={school.key}
                    href={meta.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-5 rounded-2xl bg-slate-900/30 border border-slate-800 transition-all duration-300 cursor-pointer group block ${
                      meta.accent === "blue"
                        ? "hover:border-blue-500/50"
                        : "hover:border-emerald-500/50"
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <span
                        className={`font-black text-[10px] tracking-widest uppercase ${
                          meta.accent === "blue" ? "text-blue-400" : "text-emerald-400"
                        }`}
                      >
                        {school.name}
                      </span>
                      <span
                        className={`font-bold text-white text-base leading-tight transition-colors ${
                          meta.accent === "blue"
                            ? "group-hover:text-blue-300"
                            : "group-hover:text-emerald-300"
                        }`}
                      >
                        {school.degree}
                      </span>
                      <span className="text-slate-400 text-xs italic font-medium">
                        {school.detail}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic text-white cursor-default">
              <Icons.Rocket /> {r.skills}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm hover:border-blue-500/50 hover:text-white transition-all duration-300 cursor-pointer text-slate-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
