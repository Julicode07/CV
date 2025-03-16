import React from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import Skills from "./Skills";
import { Boostrap, Git, Github, ReactIcon, TailwindCSS, Vite, Astro, FramerMotion } from "./Icons";
export default function Column1() {
    const [translate] = useTranslation();
    return (
        <div className="space-y-6 md:col-span-1">
            <div className="relative bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                    <p className="flex gap-2 font-bold text-2xl"><span className="inline-block my-auto bg-gray-300 px-1.5 rounded-md"><i className="ri-code-line text-xl"></i></span>{translate("col-span-1.About Me.title")}</p>
                </div>
                <p className="p-4">{translate("col-span-1.About Me.description")}</p>
            </div>
            <div className="relative bg-white rounded-2xl shadow-lg">
                <div className="flex gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                    <p className="flex gap-2 font-bold text-2xl"><span className="inline-block my-auto bg-gray-300 px-1.5 rounded-md"><i className="ri-server-line text-xl"></i></span>{translate("col-span-1.title-2")}</p>
                </div>
                <div className="p-6 pt-4 space-y-5">
                    <p className="font-bold">Frontend Development</p>
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
                        <Skills skillName="Vite" percentage="100">
                            <Vite />
                        </Skills>
                    </div>
                    <p className="font-bold">Tools and Version Control</p>
                    <div className="ml-4 space-y-3">
                        <Skills skillName="Git" percentage="90">
                            <Git />
                        </Skills>
                        <Skills skillName="GitHub" percentage="80">
                            <Github />
                        </Skills>
                    </div>
                    <p className="font-bold">Optimización y Performance</p>
                    <div className="ml-4 space-y-3">
                        <Skills skillName="Lighthouse & Web Vitals" percentage="70">
                            📊
                        </Skills>
                        <Skills skillName="Lazy Loading" percentage="70">
                            🔥
                        </Skills>
                    </div>
                    <p className="font-bold">Other Technologies</p>
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
        </div>
    )
}