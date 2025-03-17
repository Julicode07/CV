export default function Skills({ children, skillName, percentage }) {
    return (
        <div className="group flex flex-col gap-0.5">
            <div className="flex justify-between mb-1">
                <div className="flex items-center gap-2">
                    {children}
                    <span className="text-xs font-medium">{skillName}</span>
                </div>
                <span className="text-xs text-muted-foreground">{percentage}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full group-hover:from-violet-400 group-hover:to-indigo-500 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}