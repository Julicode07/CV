import Column1 from "./Column1";
import Column2 from "./Column2";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function Information() {
    const [translate] = useTranslation();
    return (
        <div className="bg-white grid md:grid-cols-3 gap-3 p-6 md:p-7">
            <div className="md:col-span-3">
                <div className="relative bg-white rounded-2xl shadow-lg">
                    <div className="flex flex-col gap-2 py-3 px-4 md:py-2 bg-gray-200 rounded-t-2xl">
                        <p className="flex gap-2 font-bold text-xl"><span className="inline-block my-auto bg-gray-300 px-1.5 rounded-md"><i className="ri-code-line text-base"></i></span>{translate("col-span-1.About Me.title")}</p>
                    </div>
                    <p className="text-sm p-4">{translate("col-span-1.About Me.description")}</p>
                </div>
            </div>
            {/* Column 1 */}
            <Column1 />
            {/* Column 2 */}
            <Column2 />
        </div>
    )
}