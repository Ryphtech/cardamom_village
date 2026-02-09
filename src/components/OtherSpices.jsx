import bayleaves from '../assets/images/otherSpice-bayleaves.jpg';
import cinnamon from '../assets/images/otherSpice-karukapatta.jpg';
import nutmeg from '../assets/images/otherSpice-nutmeg.webp';
import staranise from '../assets/images/otherSpice-star.jpg';

const otherSpices = [
    { id: 1, name: "Premium Bay Leaves", image: bayleaves },
    { id: 2, name: "Ceylon Cinnamon", image: cinnamon },
    { id: 3, name: "Grade-A Nutmeg", image: nutmeg },
    { id: 4, name: "Star Anise", image: staranise }
];

export default function OtherSpices() {
    return (
        <section className="px-4 lg:px-40 py-12 lg:py-20 bg-gray-50 dark:bg-zinc-900/30" id="gourmet">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-black">Gourmet Spice Collection</h2>
                    <p className="text-gray-500 max-w-md mx-auto italic">Explore our secondary range of high-quality aromatic spices.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {otherSpices.map((spice) => (
                        <div key={spice.id} className="text-center group">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-white dark:bg-[#112213] p-4 shadow-sm border border-transparent group-hover:border-primary/20 transition-all">
                                <img
                                    src={spice.image}
                                    alt={spice.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="mt-4 font-bold text-gray-800 dark:text-gray-200">{spice.name}</h3>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href={`https://wa.me/917736733056?text=${encodeURIComponent("I would like to receive the full price list of your spices, including the Gourmet Collection.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#111812] dark:bg-primary text-white dark:text-[#111812] px-8 py-4 rounded-xl font-black hover:brightness-125 transition-all shadow-xl shadow-primary/10"
                    >
                        Request Complete Price List
                        <span className="material-symbols-outlined">description</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
