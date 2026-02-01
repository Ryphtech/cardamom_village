export default function Process() {
    const steps = [
        {
            icon: "potted_plant",
            title: "Cultivation",
            desc: "Nurtured in the nutrient-rich soils of Idukki's high ranges, using 100% organic farming practices."
        },
        {
            icon: "cut",
            title: "Harvest",
            desc: "Handpicked at dawn by experienced farmers who select only the perfectly mature pods."
        },
        {
            icon: "sunny",
            title: "Processing",
            desc: "Sun-dried naturally and graded by size (7mm+) to preserve volatile oils and aroma."
        },
        {
            icon: "local_shipping",
            title: "Global Delivery",
            desc: "Vacuum packed to seal freshness and shipped worldwide within days of processing."
        }
    ];

    return (
        <section className="px-4 lg:px-40 py-12 lg:py-24 bg-background-light dark:bg-background-dark overflow-hidden" id="process">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">The Essence</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">Our Journey to You</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Every spice has a story. Here is how we ensure the purest flavor reaches your kitchen.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-default">
                                {/* Icon Circle */}
                                <div className="relative z-10 bg-white dark:bg-[#0c1a0e] p-2 rounded-full mb-6 transition-transform duration-500 group-hover:scale-110 border-4 border-background-light dark:border-background-dark">
                                    <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-[#111812] transition-colors duration-300">
                                        <span className="material-symbols-outlined text-4xl text-primary group-hover:text-[#111812] transition-colors duration-300">
                                            {step.icon}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3 px-2">
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Mobile Connector (Vertical) */}
                                {index !== steps.length - 1 && (
                                    <div className="lg:hidden w-1 h-12 bg-primary/20 mt-8 rounded-full"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
