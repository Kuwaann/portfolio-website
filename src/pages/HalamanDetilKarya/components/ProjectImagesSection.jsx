export function ProjectImagesSection({ project }) {
    return (
        <section className="grid grid-cols-2 px-4 gap-4">
            <div className="overflow-hidden aspect-square rounded-sm">
                <img src={project.img[1]} alt="" className="project-img w-full h-full object-cover scale-150" />
            </div>
            <div className="overflow-hidden aspect-square rounded-sm">
                <img src={project.img[2]} alt="" className="project-img w-full h-full object-cover scale-150" />
            </div>
            <div className="overflow-hidden h-[75vh] rounded-sm col-span-2">
                <img src={project.img[3]} alt="" className="project-img w-full h-full object-cover scale-150" />
            </div>
        </section>
    )
}