import { useState } from 'react';
import cardamomImg from '../assets/images/cardamom.jpeg';
import blackPepperImg from '../assets/images/blackPepper.jpeg';
import coffeeImg from '../assets/images/coffeePowder.jpeg';
import tamarindImg from '../assets/images/tamarind.jpeg';
import clovesImg from '../assets/images/cloves.jpeg';
import teaImg from '../assets/images/teaPowder.webp';
import honeyImg from '../assets/images/honey.jpg';

const products = [
    {
        id: 1,
        name: "Green Cardamom",
        grade: "8mm, 7mm, 6mm, 5mm Qualities",
        description: "The 'Queen of Spices', hand-sorted to ensure uniform size and vibrant green color.",
        image: cardamomImg,
        badge: "Top Choice"
    },
    {
        id: 2,
        name: "Black Pepper",
        grade: "Idukki Grade",
        description: "Pungent, aromatic, and rich in piperine content. The gold standard for culinary use.",
        image: blackPepperImg
    },
    {
        id: 3,
        name: "Premium Coffee",
        grade: "Arabica & Robusta Blend",
        description: "Hand-picked beans from the high altitudes, roasted to perfection for a rich, bold flavor.",
        image: coffeeImg
    },
    {
        id: 4,
        name: "Malabar Tamarind",
        grade: "Dried & Smoked",
        description: "Also known as Kudampuli, it adds a unique smoky sourness to traditional curries.",
        image: tamarindImg
    },
    {
        id: 5,
        name: "Premium Cloves",
        grade: "Hand-picked Quality",
        description: "Deeply aromatic and rich in essential oils, harvested at peak maturity.",
        image: clovesImg
    },
    {
        id: 6,
        name: "Premium Tea Powder",
        grade: "High-Range Special Grade",
        description: "Strong, colorful, and refreshing tea leaves from the misty slopes of Idukki.",
        image: teaImg
    },
    {
        id: 7,
        name: "Wild Forest Honey",
        grade: "100% Pure & Raw",
        description: "Ethically sourced from forest hives, rich in antioxidants and natural sweetness.",
        image: honeyImg
    }
];

export default function Products() {
    const [showMore, setShowMore] = useState(false);
    const visibleProducts = showMore ? products : products.slice(0, 3);

    return (
        <section className="px-4 lg:px-40 py-12 lg:py-20 bg-white dark:bg-[#0c1a0e]" id="shop">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex justify-center mb-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-4xl font-black">Signature Collections</h2>
                        <p className="text-gray-500 max-w-md mx-auto">Our most sought-after spices, graded for culinary excellence.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {visibleProducts.map((product) => (
                        <div key={product.id} className="group bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-transparent hover:border-primary/30 transition-all shadow-sm">
                            <div className="aspect-square overflow-hidden bg-gray-50 dark:bg-[#112213] p-4">
                                <img
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    src={product.image}
                                    alt={product.name}
                                />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold">{product.name}</h3>
                                        <p className="text-sm text-gray-500">{product.grade}</p>
                                    </div>
                                    {product.badge && (
                                        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">{product.badge}</span>
                                    )}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{product.description}</p>
                                <a
                                    href={`https://wa.me/917736733056?text=${encodeURIComponent(`I would like to know more details about the product ${product.name}. I'm from the website.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-[#111812] dark:bg-primary text-white dark:text-[#111812] py-3 rounded-lg font-bold hover:brightness-125 transition-all text-center"
                                >
                                    Enquire Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    {!showMore ? (
                        <button
                            onClick={() => setShowMore(true)}
                            className="text-primary font-bold hover:underline inline-flex items-center gap-2"
                        >
                            Show more products
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    ) : (
                        <button
                            onClick={() => setShowMore(false)}
                            className="text-primary font-bold hover:underline inline-flex items-center gap-2"
                        >
                            Show less products
                            <span className="material-symbols-outlined text-sm">arrow_upward</span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

