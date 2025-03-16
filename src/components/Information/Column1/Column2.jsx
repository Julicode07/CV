import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function Column2() {
    const { t } = useTranslation();
    const descriptionObj = t("col-span-2.Work Experience.FirstJob.description", { returnObjects: true });
    const projectsObj = t("col-span-2.Projects.ProjectsMap", { returnObjects: true });
    const educationObj = t("col-span-2.Studies.StudiesMap", { returnObjects: true });

    const education = typeof educationObj === "object" ? Object.values(educationObj) : [];
    const descriptions = typeof descriptionObj === "object" ? Object.values(descriptionObj) : [];
    const projects = typeof projectsObj === "object" ? Object.values(projectsObj) : [];


    return (
        <div className="space-y-6 md:col-span-2">
            {/* Work Experience */}
            <div>
                <div className="flex gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                    <p className="font-bold text-2xl">{t("col-span-2.Work Experience.title")}</p>
                </div>
                <div className="relative bg-white rounded-2xl shadow-lg px-6">
                    <div className="relative pl-6 pb-6">
                        <div className="absolute top-2 left-[1px] w-0.5 h-[90%] bg-gradient-to-b from-gray-800 to-gray-900"></div>
                        <div className="absolute top-2 left-0 w-5 h-5 -translate-x-2 bg-white border-2 border-blue-800 rounded-full"></div>
                        <div className="group hover:bg-slate-50 p-4 rounded-lg transition-colors duration-300">
                            <div className="flex justify-between items-start flex-wrap gap-2">
                                <h3 className="font-bold text-lg">{t("col-span-2.Work Experience.FirstJob.title")}</h3>
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 bg-gradient-to-r from-gray-800 to-gray-900 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900" data-v0-t="badge">
                                    {t("col-span-2.Work Experience.FirstJob.period")}
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-2">{t("col-span-2.Work Experience.FirstJob.company")}</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {descriptions.length > 0 ? (
                                    descriptions.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))
                                ) : (
                                    <li>No description available.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects */}
            <div className="rounded-lg border bg-card text-card-foreground border-none shadow-md hover:shadow-lg transition-shadow duration-300" data-v0-t="card">
                <div className="flex gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                    <p className="font-bold text-2xl">{t("col-span-2.Projects.title")}</p>
                </div>
                <div className="p-6 pt-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <div className="group">
                                    <div className="rounded-lg bg-card text-card-foreground shadow-sm border border-transparent group-hover:border-violet-200 transition-all duration-300 overflow-hidden h-full" data-v0-t="card">
                                        <div className="h-2 w-full bg-gradient-to-r from-gray-800 to-gray-900"></div>
                                        <div className="flex flex-col space-y-1.5 p-4">
                                            <h3 className="font-semibold tracking-tight text-base">{project.title}</h3>
                                            <p className="text-sm text-muted-foreground">{project.technologies}</p>
                                        </div>
                                        <div className="p-4 pt-0">
                                            <p className="text-sm text-muted-foreground">{project.description}</p>
                                            <div className="mt-3">
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs h-7 group-hover:bg-gray-50 group-hover:text-gray-700 transition-colors duration-300"
                                                >
                                                    {project.titleLink}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No projects available.</p>
                        )}
                    </div>
                </div>
            </div>
            {/* Study */}
            <div className="relative bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                    <p className="flex gap-2 font-bold text-2xl"><span className="inline-block my-auto bg-gray-300 px-1.5 rounded-md"><i className="ri-code-line text-xl"></i></span>{t("col-span-2.Studies.title")}</p>
                </div>
                <div className="p-6 pt-4 space-y-4">
                    {education.length > 0 ? (
                        education.map((edu) => (
                            <div className="group p-3 rounded-lg hover:bg-slate-50 transition-colors duration-300">
                                <h3 className="font-medium">{edu.title}</h3>
                                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                                <p className="text-sm text-muted-foreground">{edu.period}</p>
                            </div>
                        ))
                    ) : (
                        <p>No education available.</p>
                    )}
                </div>
            </div>



        </div>
    );
}
