export function ProjectStorySection({ project }) {
    return (
        <section className="px-8 md:px-32 border-y border-y-white/15 border-dashed mb-4 flex flex-col gap-2">
            <div className="flex flex-col md:flex-row border-x border-x-white/15 border-dashed px-8 py-8 md:px-32 md:py-32 gap-8 md:gap-16">
                <h3 className="text-[32px] md:text-[64px] leading-none text-white">Cerita di Balik Karya</h3>
                <p className="text-lg text-white/50 text-justify hyphens-auto">{project.description}</p>
            </div>
        </section>
    )
}