import { useState, useEffect } from 'react';
import img1 from '../assets/images/carousel_img1.jpeg';
import img2 from '../assets/images/carousel_img2.jpeg';
import img3 from '../assets/images/carousel_img3.jpeg';
import img4 from '../assets/images/carousel_img4.jpeg';
import img5 from '../assets/images/carousel_img5.jpeg';
import img6 from '../assets/images/carousel_img6.jpeg';

const images = [img1, img2, img3, img4, img5, img6];

export default function FarmStories() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500); // 1.5-second interval

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 lg:py-20 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-40 mb-10 text-center">
                <h2 className="text-4xl font-black">Our Farm Stories</h2>
                <p className="text-gray-500 mt-4 max-w-md mx-auto">Glimpses into the life and lush fields of Cardamom Village.</p>
            </div>

            <div className="relative w-full max-w-4xl mx-auto px-4">
                <div className="overflow-hidden rounded-2xl aspect-video shadow-2xl bg-black/5 dark:bg-white/5">
                    <div
                        className="flex transition-transform duration-700 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="min-w-full h-full relative flex items-center justify-center">
                                <img
                                    src={image}
                                    alt={`Farm story ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-6 gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`size-2 rounded-full transition-all duration-300 ${currentIndex === index
                                ? "bg-primary w-6"
                                : "bg-primary/30 hover:bg-primary/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
