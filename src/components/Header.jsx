import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { motion } from "framer-motion";
export default function Header() {
    const [translate, i18n] = useTranslation();
    const [checked, setChecked] = useState(i18n.language === "es");

    const toggleLanguage = () => {
        const newLang = checked ? "en" : "es";
        i18n.changeLanguage(newLang);
        setChecked(!checked);
    };

    return (
        <div className="relative flex flex-col gap-1 md:gap-2 bg-gradient-to-r from-violet-600 to-indigo-700 p-6 md:p-12 text-white overflow-hidden">
            <div className="flex justify-between gap-4">
                <button className="bg-white/20 px-3 py-1 rounded-full text-white text-xs md:text-sm font-semibold">
                    {translate("availability")}
                </button>

                <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-xl text-xs md:text-sm"
                >
                    <motion.span
                        animate={{ color: checked ? "#9CA3AF" : "#FFFFFF" }}
                        transition={{ duration: 0.3 }}
                        className="font-bold"
                    >
                        EN
                    </motion.span>

                    <label htmlFor="hs-basic-usage" className="relative inline-block w-8 md:w-11 h-4 md:h-6 cursor-pointer">
                        <input
                            type="checkbox"
                            id="hs-basic-usage"
                            className="peer sr-only"
                            checked={checked}
                            onChange={toggleLanguage}
                        />
                        <span className="absolute inset-0 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 bg-white/30"></span>
                        <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full peer-checked:bg-white"></span>
                    </label>

                    <motion.span
                        animate={{ color: checked ? "#FFFFFF" : "#9CA3AF" }}
                        transition={{ duration: 0.3 }}
                        className="font-bold"
                    >
                        ES
                    </motion.span>
                </motion.button>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mt-2">Julian Restrepo</h1>
            <p className="text-xl md:text-3xl font-medium">{translate("developerRole")}</p>

            <div className="inline-block space-y-3 space-x-2 md:space-x-0 md:space-y-0 mt-2 md:mt-4 md:flex flex-col md:flex-row gap-4">
                <a
                    href="mailto:Julicode07@gmail.com"
                    className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-xl text-white text-sm"
                >
                    <i className="ri-mail-line text-sm md:text-base font-semibold"></i>
                    <span>Julicode07@gmail.com</span>
                </a>
                <button className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-xl text-white text-sm">
                    <i className="ri-map-pin-line text-sm md:text-base font-semibold"></i>
                    <span>Rionegro, Antioquia</span>
                </button>
            </div>

            <div className="mt-4 flex gap-2">
                <a href="https://github.com/Julicode07" target="_blank" className="inline-block bg-white/20 p-2 rounded-full text-white text-sm">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a href="" className="inline-block bg-white/20 p-2 rounded-full text-white text-sm">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
            </div>
        </div>
    )
}