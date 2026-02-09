import hero2 from '../assets/images/hero2.jpeg';

export default function About() {
    return (
        <section className="px-4 lg:px-40 py-12 lg:py-20" id="about">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                <div className="w-full lg:w-1/2">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img alt="Traditional Spice Processing" className="w-full h-auto" src={hero2} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest">Our Heritage</div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">Farm-to-Market Quality with a Legacy.</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Our journey begins in the high ranges of Idukki, where the unique climate and nutrient-rich soil create the perfect environment for the world's best spices.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        At Cardamom Village, we bridge the gap between traditional farming wisdom and modern quality standards. Every batch is sun-dried and hand-picked to ensure the volatile oils and aromatic compounds remain intact.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div>
                            <div className="text-3xl font-black text-primary">100+</div>
                            <div className="text-sm font-medium text-gray-500">Satisfied Customers</div>
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
