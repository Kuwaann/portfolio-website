import { achievements } from "../../constants";
import { cn } from "../lib/utils";

export function KPISection({ className = "" }) {
    return (
        <div className={cn(`flex item-center justify-between w-full px-0 md:px-32`, className)}>
            <div className="kpi-card flex flex-1 md:flex-0 flex-col gap-2.5 py-16 justify-center items-center md:items-start">
                <h3 className="font-normal text-white/50">Klien</h3>
                <span className="font-medium text-2xl md:text-7xl md:text-center">{achievements.clients}</span>
            </div>
            <div className="kpi-card flex flex-1 md:flex-0 flex-col gap-2.5 py-16 justify-center items-center md:items-start">
                <h3 className="font-normal text-white/50">Proyek</h3>
                <span className="font-medium text-2xl md:text-7xl md:text-center">{achievements.projects}</span>
            </div>
            <div className="kpi-card flex flex-1 md:flex-0 flex-col gap-2.5 py-16 justify-center items-center md:items-start">
                <h3 className="font-normal text-white/50">Sertifikat</h3>
                <span className="font-medium text-2xl md:text-7xl md:text-center">{achievements.certifications}</span>
            </div>
        </div>
    )
}