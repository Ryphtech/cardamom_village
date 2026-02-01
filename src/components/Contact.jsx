export default function Contact() {
    return (
        <section className="px-4 lg:px-40 py-12 lg:py-24 bg-background-light dark:bg-background-dark" id="contact">
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div className="space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-black">Wholesale & Export Inquiries</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        We supply premium spices to retailers, distributors, and bulk purchasers worldwide. Connect with us for customized grading and packaging solutions.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Us</p>
                                <p className="font-bold">hello@cardamomvillage.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call Us</p>
                                <p className="font-bold">+91 944 600 0000</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Our Location</p>
                                <p className="font-bold">Idukki, Kerala, India</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-[#0c1a0e] p-6 lg:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold">Full Name</label>
                                <input className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-transparent focus:ring-primary focus:border-primary" placeholder="John Doe" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold">Email</label>
                                <input className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-transparent focus:ring-primary focus:border-primary" placeholder="john@example.com" type="email" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold">Subject</label>
                            <select className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-transparent focus:ring-primary focus:border-primary">
                                <option>Bulk Purchase Inquiry</option>
                                <option>Export Request</option>
                                <option>Product Samples</option>
                                <option>General Support</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold">Message</label>
                            <textarea className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-transparent focus:ring-primary focus:border-primary" placeholder="Tell us about your requirements..." rows="4"></textarea>
                        </div>
                        <button className="w-full bg-primary text-[#111812] py-4 rounded-lg font-black text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
