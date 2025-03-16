import { useTranslation } from "react-i18next";
import "../../i18n";
import Column1 from "./Column1/Column1";

export default function Information() {
    const [translate] = useTranslation();
    return (
        <div className="bg-white grid md:grid-cols-3 gap-6 p-6 md:p-10">
            {/* Column 1 */}
            <Column1 />
            {/* Column 2 */}
            <div className="space-y-6 md:col-span-2">
                <div className="relative bg-white rounded-2xl shadow-lg">
                    <div className="flex gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                        <p className="font-bold text-2xl">{translate("col-span-2.title-1")}</p>
                    </div>
                    <div>holahfjdshfk</div>
                </div>
                <div className="relative bg-white rounded-2xl shadow-lg">
                    <div className="flex gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                        <p className="font-bold text-2xl">{translate("col-span-2.title-2")}</p>
                    </div>
                    <div>holahfjdshfk</div>
                </div>
                <div className="relative bg-white rounded-2xl shadow-lg">
                    <div className="flex gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                        <p className="font-bold text-2xl">{translate("col-span-2.title-3")}</p>
                    </div>
                    <div>holahfjdshfk</div>
                </div>
                <div className="relative bg-white rounded-2xl shadow-lg">
                    <div className="flex gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                        <p className="flex gap-2 font-bold text-2xl"><span className="inline-block my-auto bg-gray-300 px-1.5 rounded-md"><i className="ri-code-line text-xl"></i></span>{translate("col-span-1.title-3")}</p>
                    </div>
                    <div>holahfjdshfk</div>
                </div>
                <div className="relative bg-white rounded-2xl shadow-lg">
                    <div className="flex gap-2 py-3 px-4 md:py-4 bg-gray-200 rounded-t-2xl">
                        <p className="flex gap-2 font-bold text-2xl"><span className="inline-block my-auto bg-gray-300 px-1.5 rounded-md"><i className="ri-code-line text-xl"></i></span>{translate("col-span-1.title-4")}</p>
                    </div>
                    <div>holahfjdshfk</div>
                </div>
            </div>
        </div>
    )
}