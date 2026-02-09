import founder1 from '../assets/images/founder1.jpeg';
import founder2 from '../assets/images/founder2.jpeg';
import cofounder from '../assets/images/cofounder.jpeg';

export default function Founders() {
    return (
        <section className="px-4 lg:px-40 py-12 bg-white dark:bg-zinc-900/50" id="founders">
            <div className="max-w-[1200px] mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest">Our Roots</div>
                    <h2 className="text-3xl md:text-4xl font-black">Legacy comes from hardwork</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto italic">
                        Meet the visionaries who brought the pure essence of Idukki's high ranges to the world.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Founders Row */}
                    <div className="flex flex-row justify-center gap-4 md:gap-8">
                        <div className="w-1/2 md:w-1/3 aspect-[4/5] relative group overflow-hidden rounded-2xl shadow-xl border border-primary/10">
                            <img
                                src={founder1}
                                alt="Prakash A R"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white text-left flex flex-col items-start">
                                <p className="font-black text-sm md:text-xl">Prakash A R</p>
                                <span className="mt-1 px-2 py-0.5 bg-primary/80 text-[#111812] font-black text-[8px] uppercase tracking-wider rounded-full shadow-sm">Founder</span>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/3 aspect-[4/5] relative group overflow-hidden rounded-2xl shadow-xl border border-primary/10">
                            <img
                                src={founder2}
                                alt="Amal Prakash A"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white text-left flex flex-col items-start">
                                <p className="font-black text-sm md:text-xl">Amal Prakash A</p>
                                <span className="mt-1 px-2 py-0.5 bg-primary/80 text-[#111812] font-black text-[8px] uppercase tracking-wider rounded-full shadow-sm">Founder</span>
                            </div>
                        </div>
                    </div>

                    {/* Co-founder Row */}
                    <div className="flex justify-center">
                        <div className="w-1/2 md:w-1/3 aspect-[4/5] relative group overflow-hidden rounded-2xl shadow-xl border border-primary/10">
                            <img
                                src={cofounder}
                                alt="Ashmy Prakash"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white text-left flex flex-col items-start">
                                <p className="font-black text-sm md:text-xl">Ashmy Prakash</p>
                                <span className="mt-1 px-2 py-0.5 bg-primary/80 text-[#111812] font-black text-[8px] uppercase tracking-wider rounded-full shadow-sm">Co-Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
