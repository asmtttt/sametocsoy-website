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
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic text-navy cursor-default">
              <Icons.Briefcase /> {r.experience}
            </h2>
            <div className="space-y-12 border-l-2 border-sand-dark ml-3 pl-8 relative">
              {r.jobs.map((job) => {
                const meta = jobMeta[job.key as JobKey];
                return (
                  <div key={job.key} className="relative group">
                    <div
                      className={`absolute -left-[39px] top-1 w-4 h-4 rounded-full border-4 border-sand-light transition-transform duration-300 group-hover:scale-125 ${
                        meta.isCurrent
                          ? "bg-bronze"
                          : "bg-sand-dark group-hover:bg-bronze"
                      }`}
                    />
                    <h4 className="text-lg font-bold text-navy cursor-default">{job.title}</h4>
                    <div className="text-bronze text-sm mb-4 font-semibold tracking-wide flex flex-wrap gap-2 cursor-default">
                      {meta.companies.map((company, i) => (
                        <span key={i} className="flex items-center gap-2">
                          {i > 0 && <span>-</span>}
                          <a
                            href={company.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-navy transition-colors cursor-pointer"
                          >
                            {company.name}
                          </a>
                        </span>
                      ))}
                      <span>• {job.period}</span>
                    </div>

                    {job.bullets.length > 0 ? (
                      <ul className="space-y-3 text-brown text-sm leading-relaxed cursor-default">
                        {job.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-bronze shrink-0" />
                            <span>
                              <strong className="text-navy">{bullet.title}:</strong>{" "}
                              {bullet.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-brown text-sm leading-relaxed cursor-default mb-2">
                        {job.description}
                      </p>
                    )}

                    {meta.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3">
                        {meta.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-bronze/5 border border-bronze/10 text-bronze uppercase font-bold tracking-wider"
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
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic text-navy cursor-default">
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
                    className={`p-5 rounded-2xl bg-sand/40 border border-sand-dark transition-all duration-300 cursor-pointer group block ${
                      meta.accent === "blue"
                        ? "hover:border-bronze/50"
                        : "hover:border-navy/40"
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <span
                        className={`font-black text-[10px] tracking-widest uppercase ${
                          meta.accent === "blue" ? "text-bronze" : "text-navy"
                        }`}
                      >
                        {school.name}
                      </span>
                      <span
                        className={`font-bold text-navy text-base leading-tight transition-colors ${
                          meta.accent === "blue"
                            ? "group-hover:text-bronze"
                            : "group-hover:text-navy/70"
                        }`}
                      >
                        {school.degree}
                      </span>
                      <span className="text-navy-muted text-xs italic font-medium">
                        {school.detail}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 italic text-navy cursor-default">
              <Icons.Rocket /> {r.skills}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-sand/60 border border-sand-dark text-sm hover:border-bronze/50 hover:text-navy transition-all duration-300 cursor-pointer text-brown font-medium"
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
