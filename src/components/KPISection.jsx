import { achievements } from "../../constants";
import { cn } from "../lib/utils";

export function KPISection({ className = "" }) {
    return (
        <div className={cn(`flex item-center justify-between w-full px-32`, className)}>
            <div className="kpi-card flex flex-col gap-2.5 py-16 justify-center">
                <h3 className="font-normal text-white/50">Klien</h3>
                <span className="font-medium text-7xl">{achievements.clients}</span>
            </div>
            <div className="kpi-card flex flex-col gap-2.5 py-16 justify-center">
                <h3 className="font-normal text-white/50">Proyek</h3>
                <span className="font-medium text-7xl">{achievements.projects}</span>
            </div>
            <div className="kpi-card flex flex-col gap-2.5 py-16 justify-center">
                <h3 className="font-normal text-white/50">Pengalaman Kerja</h3>
                <span className="font-medium text-7xl">{achievements.experience} th</span>
            </div>
            <div className="kpi-card flex flex-col gap-2.5 py-16 justify-center">
                <h3 className="font-normal text-white/50">Sertifikat</h3>
                <span className="font-medium text-7xl">{achievements.certifications}</span>
            </div>
        </div>
    )
}