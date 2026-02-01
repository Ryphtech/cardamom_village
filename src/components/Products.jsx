export default function Products() {
    return (
        <section className="px-4 lg:px-40 py-20 bg-white dark:bg-[#0c1a0e]" id="shop">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black">Signature Collections</h2>
                        <p className="text-gray-500 max-w-md">Our most sought-after spices, graded for culinary excellence.</p>
                    </div>
                    <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        View Catalog <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Product Card 1 */}
                    <div className="group bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-transparent hover:border-primary/30 transition-all shadow-sm">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6NfzIQSOvyikaAKcxhoGDjsDlUMdJLtJeQdHu2DKc9bDf6qc5bbGsWorf0uYIdb_BcoNB9OmXi1uz1VXPUfS_5k4dH2d1gtebEGrYZXLCRk_BfzrQqou5hX1Dz3ry55WD2iHto2V5eiFxCRYYp0_WDf4PTmpfpbP7415yyQKyzX8zlSeH1BRSKN3lu7WkTBF1hr8E1N1n_woK-l5skqyzIXOVsJkzRNwqD1Xri_PUsHj-Sb_OfLCmDTtuV1FGdSj48hlplyVpUVyj" alt="Green Cardamom pods" />
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold">Green Cardamom</h3>
                                    <p className="text-sm text-gray-500">8mm Bold Grade</p>
                                </div>
                                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">Top Choice</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">The 'Queen of Spices', hand-sorted to ensure uniform size and vibrant green color.</p>
                            <button className="w-full bg-[#111812] dark:bg-primary text-white dark:text-[#111812] py-3 rounded-lg font-bold hover:brightness-125 transition-all">
                                Enquire Now
                            </button>
                        </div>
                    </div>
                    {/* Product Card 2 */}
                    <div className="group bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-transparent hover:border-primary/30 transition-all shadow-sm">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhuM4L06fMZFM_ARawzxvRWDjxpMd9AY5P3pzpXZiXcOAPuBF-bps57Tf-wv1P0to7dBZlgmlxLl5twbclfop-L3QylfhAZzp-b4q8Tqv4sc6CtQoxYmCj0tUnqMgRJitAKGvUR7FDVzQSZs3GwpijmoxAmWHJickU0m3F2TKD0ogLYL8RKOz_JXUX9NsBMFShqtPML8Bd7aT-9KxO08aWSt-cKkm0iWHJr0fkASVxwangyOvSI6mMzwvUQOl41L7iWYXtCO3O-xlk" alt="Black Pepper corns" />
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold">Malabar Pepper</h3>
                                    <p className="text-sm text-gray-500">Waynad Gold Grade</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">Pungent, aromatic, and rich in piperine content. The gold standard for culinary use.</p>
                            <button className="w-full bg-[#111812] dark:bg-primary text-white dark:text-[#111812] py-3 rounded-lg font-bold hover:brightness-125 transition-all">
                                Enquire Now
                            </button>
                        </div>
                    </div>
                    {/* Product Card 3 */}
                    <div className="group bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-transparent hover:border-primary/30 transition-all shadow-sm">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAotKB0eb-fskBLMpo7WsXMgqoklqEEgKYZ6guMHaHu2O4bp0jbwcrlPuOGBPjwuSdHLSPRHRDQmfWAVPN8YIsKTjzNCHqBzdf5D3BdSJ0zVScpLo2_qmvJfL0YpYXWY0pcxT37wxynuW3bn-OXXoDW02dLfGOhcu7BHOIkDLak8XrV-uB2L6nMS5lGz5mjqg_IxOPpbi-hKsNANLX5VjQ6GM6yGlvg8U6vgB692YKAH_e9Igib070AACsmtCwReYyY9sI2lBC1s985" alt="Cloves" />
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold">Zanzibar Cloves</h3>
                                    <p className="text-sm text-gray-500">Idukki Grown</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">High essential oil content, intense aroma, and bold flavor profile.</p>
                            <button className="w-full bg-[#111812] dark:bg-primary text-white dark:text-[#111812] py-3 rounded-lg font-bold hover:brightness-125 transition-all">
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
