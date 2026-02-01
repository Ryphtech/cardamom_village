export default function About() {
    return (
        <section className="px-4 lg:px-40 py-20" id="about">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-1/2">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                        <img alt="Traditional Spice Processing" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbgwyD8srhwMf2xsUTYjd0vC0Oyrw8IWBlkF4XL19ymIa72Jn0XNzOfWedxeQTiqvDs8wO3hOt8D2uUXfDxNdbM5qx16MwVpOqxEqD6rx9eI7KZed5JkMknm8ErNE_0ZGURf-tJkwDsh6LAwZQhEW4Fz1QwNgYitWZahJ9DJpVYwNRTkx_wr7jAHIgfcP5eHeXhjsp1VzWmcOKJjjq_dZR9aqHQVt0pAxYess05JA7hHQNkK4v66LgP4Mwf4q1BASSpPqmJwz1HrpF" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest">Our Heritage</div>
                    <h2 className="text-4xl lg:text-5xl font-black leading-tight">Farm-to-Market Quality with a Legacy.</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Our journey begins in the high ranges of Idukki, where the unique climate and nutrient-rich soil create the perfect environment for the world's best spices.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        At Cardamom Village, we bridge the gap between traditional farming wisdom and modern quality standards. Every batch is sun-dried and hand-picked to ensure the volatile oils and aromatic compounds remain intact.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div>
                            <div className="text-3xl font-black text-primary">25+</div>
                            <div className="text-sm font-medium text-gray-500">Partner Farms</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-primary">100%</div>
                            <div className="text-sm font-medium text-gray-500">Organic Practices</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
