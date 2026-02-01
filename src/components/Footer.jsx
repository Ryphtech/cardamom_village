export default function Footer() {
    return (
        <footer className="px-4 lg:px-40 py-16 bg-[#0c1a0e] text-white border-t border-white/5">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="text-primary">
                            <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-black tracking-tight">Cardamom Village</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Preserving the authentic flavors of Idukki since 1985. We are dedicated to bringing the world's most premium spices from our hills to your home.
                    </p>
                    <div className="flex gap-4">
                        <a className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
                        <a className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
                        <a className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#"><span className="material-symbols-outlined text-sm">camera</span></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a className="hover:text-primary transition-colors" href="#">About Story</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Our Farms</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Product Grades</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Sustainability</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Support</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a className="hover:text-primary transition-colors" href="#">Shipping Policy</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Returns & Refunds</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Contact Support</a></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="font-bold mb-6">Newsletter</h4>
                    <p className="text-sm text-gray-400">Get updates on new harvests and spice cooking tips.</p>
                    <div className="flex gap-2">
                        <input className="bg-white/5 border-white/10 rounded-lg text-sm flex-1 focus:ring-primary" placeholder="Your email" type="email" />
                        <button className="bg-primary text-[#111812] px-4 py-2 rounded-lg font-bold">Join</button>
                    </div>
                    <div className="pt-4 flex items-center gap-4 opacity-50 grayscale">
                        <div className="h-8 w-12 bg-white/20 rounded"></div>
                        <div className="h-8 w-12 bg-white/20 rounded"></div>
                        <div className="h-8 w-12 bg-white/20 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
                © 2024 Cardamom Village Spices Private Limited. All rights reserved. Designed for Premium Quality.
            </div>
        </footer>
    );
}
