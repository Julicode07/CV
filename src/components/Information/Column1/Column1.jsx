import React from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import Skills from "./Skills";
import { Boostrap, Git, Github, ReactIcon, TailwindCSS, Vite, Astro, FramerMotion } from "./Icons";

export default function Column1() {
    const [translate] = useTranslation();
    const languagesObj = translate("col-span-1.Languages.LanguagesMap", { returnObjects: true });
    const languages = typeof languagesObj === "object" ? Object.values(languagesObj) : [];
    return (
        <div className="space-y-6 md:col-span-1">
            <div className="relative bg-white rounded-2xl shadow-lg">
                <div className="flex gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                    <p className="flex gap-2 font-bold text-2xl"><span className="inline-block my-auto bg-gray-300 px-1.5 rounded-md"><i className="ri-server-line text-xl"></i></span>{translate("col-span-1.Skills.title")}</p>
                </div>
                <div className="p-6 pt-4 space-y-3">
                    <p className="font-bold">{translate("col-span-1.Skills.frontend")}</p>
                    <div className="ml-4 space-y-3">
                        <Skills skillName="React" percentage="75">
                            <ReactIcon />
                        </Skills>
                        <Skills skillName="Tailwind CSS" percentage="90">
                            <TailwindCSS />
                        </Skills>
                        <Skills skillName="Boostrap" percentage="90">
                            <Boostrap />
                        </Skills>
                        <Skills skillName="Vite" percentage="95">
                            <Vite />
                        </Skills>
                    </div>
                    <p className="font-bold">{translate("col-span-1.Skills.tools")}</p>
                    <div className="ml-4 space-y-3">
                        <Skills skillName="Git" percentage="90">
                            <Git />
                        </Skills>
                        <Skills skillName="GitHub" percentage="80">
                            <Github />
                        </Skills>
                    </div>
                    <p className="font-bold">{translate("col-span-1.Skills.performance")}</p>
                    <div className="ml-4 space-y-3">
                        <Skills skillName="Lighthouse & Web Vitals" percentage="70">
                            📊
                        </Skills>
                        <Skills skillName="Lazy Loading" percentage="70">
                            🔥
                        </Skills>
                    </div>
                    <p className="font-bold">{translate("col-span-1.Skills.other")}</p>
                    <div className="ml-4 space-y-3">
                        <Skills skillName="Astro" percentage="85">
                            <Astro />
                        </Skills>
                        <Skills skillName="Framer Motion" percentage="60">
                            <FramerMotion />
                        </Skills>
                    </div>
                </div>
            </div>
            <div className="relative bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                    <p className="flex gap-2 font-bold text-2xl"><span className="inline-block my-auto bg-gray-300 px-1.5 rounded-md"><i className="ri-code-line text-xl"></i></span>{translate("col-span-1.Languages.title")}</p>
                </div>
                <div className="p-6 pt-4 space-y-4">
                    {languages.map((language, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">{language.title}</span>
                                <span className="text-sm text-muted-foreground">{language.level}</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className={`h-full bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full group-hover:from-violet-400 group-hover:to-indigo-500 transition-all duration-300 w-[${language.percentage}]`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}