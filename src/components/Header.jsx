import logo from '../assets/images/hero2.jpeg';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-solid border-[#f0f4f0] dark:border-[#1e3a20] px-4 lg:px-40 py-3 transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-primary">
                        <img src={logo} alt="Cardamom Village Logo" className="size-8 rounded-full object-cover" />
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
                    <a href="#shop" className="bg-primary text-[#111812] px-4 lg:px-6 py-2 rounded-lg text-xs lg:text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                        Order Now
                    </a>
                </div>
            </div>
        </header>
    );
}
