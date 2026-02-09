import feature1 from '../assets/images/feature1.webp';
import feature2 from '../assets/images/feature2.jpg';
import feature3 from '../assets/images/feature3.webp';

export default function Features() {
    return (
        <section className="px-4 lg:px-40 py-12 lg:py-16 bg-white dark:bg-[#0c1a0e]">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 100% Natural */}
                    <div
                        className="relative overflow-hidden flex flex-col gap-4 p-6 lg:p-8 rounded-xl border border-[#dbe6dc] dark:border-[#1e3a20]"
                        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${feature1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <span className="material-symbols-outlined text-primary text-4xl">eco</span>
                        <h3 className="text-xl font-bold text-white relative z-10">100% Natural</h3>
                        <p className="text-gray-200 dark:text-gray-300 relative z-10">Pure produce with absolutely no added preservatives, artificial colors, or enhancers.</p>
                    </div>

                    {/* Direct from Idukki */}
                    <div
                        className="relative overflow-hidden flex flex-col gap-4 p-6 lg:p-8 rounded-xl border border-[#dbe6dc] dark:border-[#1e3a20]"
                        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${feature2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                        <h3 className="text-xl font-bold text-white relative z-10">Direct from Idukki</h3>
                        <p className="text-gray-200 dark:text-gray-300 relative z-10">Sourced straight from the misty heights of Kerala's most famous spice hills.</p>
                    </div>

                    {/* Premium Grading */}
                    <div
                        className="relative overflow-hidden flex flex-col gap-4 p-6 lg:p-8 rounded-xl border border-[#dbe6dc] dark:border-[#1e3a20]"
                        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${feature3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
                        <h3 className="text-xl font-bold text-white relative z-10">Premium Formatting</h3>
                        <p className="text-gray-200 dark:text-gray-300 relative z-10">Rigorous quality control ensuring the finest 8mm, 7mm, 6mm and 5mm qualities reach you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
