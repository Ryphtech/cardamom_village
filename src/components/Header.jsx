export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-solid border-[#f0f4f0] dark:border-[#1e3a20] px-4 lg:px-40 py-3">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-primary">
                        <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-[#111812] dark:text-white text-xl font-black tracking-tight">Cardamom Village</h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#shop">Shop</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#process">Process</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="bg-primary text-[#111812] px-6 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                        Enquire Now
                    </button>
                </div>
            </div>
        </header>
    );
}
