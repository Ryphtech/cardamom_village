export default function Hero() {
    return (
        <section className="px-4 lg:px-40 py-8">
            <div className="max-w-[1200px] mx-auto">
                <div
                    className="relative overflow-hidden rounded-xl h-[560px] flex flex-col justify-end p-6 md:p-10 lg:p-16 bg-cover bg-center"
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1-z7X_eNKQIo417PPDSVZxjyH9lQZpWpvzVbKRhuIpVHPdWbY7Qlo089V7hxLRtnwOMfIhNkxwwT02mzQBzEzHyVsomag8Ng2IQlqvxCvk6x3Js3RVKDKMz4QQtwDgMIgqaW9oCdRY_uYpj4fgx5jrO55o7RwCVhqhuh2SPQjYJnQLJbudqOz6PxrXDg2fJTxfB2TG4c8iGrD6zXEwgvhou5BbsFiEea5QBIU5aeRKJioxW6jYJ1dNTYAlYCA4JjV1NCwL63zgkzO")' }}
                >
                    <div className="max-w-2xl space-y-6">
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                            Pure Essence of Idukki. <br />Handpicked for Perfection.
                        </h1>
                        <p className="text-white/90 text-lg font-normal leading-relaxed">
                            Experience the world's finest cardamom, pepper, and cloves, delivered directly from the lush plantations of Kerala to your doorstep.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <button className="bg-primary text-[#111812] px-8 py-4 rounded-lg text-base font-bold hover:scale-105 transition-transform">
                                Shop Collections
                            </button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-white/20 transition-all">
                                Learn Our Process
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
