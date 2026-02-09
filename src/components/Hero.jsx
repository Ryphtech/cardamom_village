import hero1 from '../assets/images/hero1.jpg';

export default function Hero() {
    return (
        <section className="px-4 lg:px-40 py-8">
            <div className="max-w-[1200px] mx-auto">
                <div
                    className="relative overflow-hidden rounded-xl h-[560px] flex flex-col justify-end p-6 md:p-10 lg:p-16 bg-cover bg-center"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${hero1})` }}
                >
                    <div className="max-w-2xl space-y-6">
                        <div className="space-y-2">
                            <div className="w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Premium Quality Products
                            </div>
                            <div className="text-primary font-black text-sm md:text-base tracking-[0.2em] uppercase">
                                35 Years of Agricultural Legacy
                            </div>
                        </div>
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                            Pure Essence of Idukki. <br />Handpicked for Perfection.
                        </h1>
                        <p className="text-white/90 text-lg font-normal leading-relaxed">
                            Experience the world's finest cardamom, pepper, and cloves, delivered directly from the lush plantations of Kerala to your doorstep.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a href="#shop" className="bg-primary text-[#111812] px-6 py-3 lg:px-8 lg:py-4 rounded-lg text-sm lg:text-base font-bold hover:scale-105 transition-transform inline-block">
                                View our products
                            </a>
                            <a href="#process" className="hidden lg:inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg text-sm lg:text-base font-bold hover:bg-white/20 transition-all">
                                Learn Our Process
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
