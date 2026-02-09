import logo from '../assets/images/hero2.jpeg';

export default function Footer() {
    return (
        <footer className="px-4 lg:px-40 py-12 lg:py-16 bg-[#0c1a0e] text-white border-t border-white/5">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="col-span-1 md:col-span-1 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="text-primary">
                            <img src={logo} alt="Cardamom Village Logo" className="size-8 rounded-full object-cover" />
                        </div>
                        <h2 className="text-xl font-black tracking-tight">Cardamom Village</h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Preserving the authentic flavors of Idukki since 1985. We are dedicated to bringing the world's most premium spices from our hills to your home.
                    </p>
                    <div className="flex gap-4">
                        {/* Instagram */}
                        <a
                            className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                            href="https://www.instagram.com/cardamom_village?igsh=bnRidGMzdG1la2U5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        {/* WhatsApp */}
                        <a
                            className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                            href="https://wa.me/917736733056"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.559.925 3.324 1.413 5.121 1.414 5.4 0 9.792-4.392 9.795-9.793.002-2.618-1.018-5.078-2.871-6.931s-4.314-2.873-6.932-2.873c-5.4 0-9.793 4.393-9.795 9.794-.001 1.884.507 3.722 1.47 5.323l-.988 3.606 3.69-.968zm11.233-7.55c-.328-.164-1.944-.959-2.246-1.069-.302-.11-.522-.164-.742.164s-.85.1069-1.042 1.288c-.192.219-.384.247-.712.083s-1.384-.51-2.635-1.627c-.974-.869-1.631-1.942-1.822-2.27-.192-.329-.021-.507.143-.671.148-.147.328-.384.493-.575.164-.192.219-.329.329-.548.11-.219.055-.411-.027-.575s-.742-1.789-1.015-2.446c-.266-.639-.536-.553-.742-.563-.191-.01-.41-.01-.63-.01s-.576.082-.878.411c-.302.329-1.152 1.123-1.152 2.74s1.18 3.178 1.344 3.397c.164.219 2.325 3.55 5.623 4.975.785.34 1.397.543 1.874.694.788.251 1.503.216 2.069.131.63-.094 1.944-.795 2.219-1.562.275-.767.275-1.425.192-1.561s-.302-.219-.63-.383z" />
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a
                            className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                            href="#"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a className="hover:text-primary transition-colors" href="#about">About Story</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#process">Our Farms</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#shop">Product Grades</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#process">Sustainability</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-6">Support</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a className="hover:text-primary transition-colors" href="#">Shipping Policy</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Returns & Refunds</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#contact">Contact Support</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-gray-500 space-y-2">
                <p>© 2026 Cardamom Village Spices Private Limited. All rights reserved.</p>
                <p>Designed and developed by <a href="https://www.ryphtech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Ryphtech</a></p>
            </div>
        </footer>
    );
}
