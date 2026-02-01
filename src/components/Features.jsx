export default function Features() {
    return (
        <section className="px-4 lg:px-40 py-12 lg:py-16 bg-white dark:bg-[#0c1a0e]">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-4 p-6 lg:p-8 rounded-xl border border-[#dbe6dc] dark:border-[#1e3a20] bg-background-light dark:bg-background-dark/50 hover:shadow-xl transition-shadow">
                        <span className="material-symbols-outlined text-primary text-4xl">eco</span>
                        <h3 className="text-xl font-bold">100% Natural</h3>
                        <p className="text-[#618965] dark:text-gray-400">Pure produce with absolutely no added preservatives, artificial colors, or enhancers.</p>
                    </div>
                    <div className="flex flex-col gap-4 p-6 lg:p-8 rounded-xl border border-[#dbe6dc] dark:border-[#1e3a20] bg-background-light dark:bg-background-dark/50 hover:shadow-xl transition-shadow">
                        <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                        <h3 className="text-xl font-bold">Direct from Idukki</h3>
                        <p className="text-[#618965] dark:text-gray-400">Sourced straight from the misty heights of Kerala's most famous spice hills.</p>
                    </div>
                    <div className="flex flex-col gap-4 p-8 rounded-xl border border-[#dbe6dc] dark:border-[#1e3a20] bg-background-light dark:bg-background-dark/50 hover:shadow-xl transition-shadow">
                        <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
                        <h3 className="text-xl font-bold">Premium Grading</h3>
                        <p className="text-[#618965] dark:text-gray-400">Rigorous quality control ensuring only the finest 7.5mm and 8mm grades reach you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
