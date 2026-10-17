export function ProjectStorySection({ project }) {
    return (
        <section className="px-32 border-y border-y-white/15 border-dashed mb-4 flex flex-col gap-2">
            <div className="border-x border-x-white/15 border-dashed px-32 py-32">
                <h3 className="text-[64px] text-white">Cerita di Balik Karya</h3>
                <p className="text-lg text-white/50">{project.description}</p>
            </div>
        </section>
    )
}