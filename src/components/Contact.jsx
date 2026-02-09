import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: 'Bulk Purchase Inquiry',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, email, subject, message } = formData;
        const whatsappMessage = `*Wholesale & Export Inquiry from Website*\n\n*Name:* ${fullName}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
        const whatsappUrl = `https://wa.me/917736733056?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

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
                                <p className="font-bold">cardamomvillageinfo@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call Us</p>
                                <p className="font-bold">+91 77367 33056</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Our Location</p>
                                <p className="font-bold">Cardamom Village, Mukkudam PO, Idukki township, 685562</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-[#0c1a0e] p-6 lg:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold" htmlFor="fullName">Full Name</label>
                                <input
                                    id="fullName"
                                    className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-transparent focus:ring-primary focus:border-primary"
                                    placeholder="John Doe"
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-transparent focus:ring-primary focus:border-primary"
                                    placeholder="john@example.com"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold" htmlFor="subject">Subject</label>
                            <select
                                id="subject"
                                className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-transparent focus:ring-primary focus:border-primary"
                                value={formData.subject}
                                onChange={handleChange}
                            >
                                <option>Bulk Purchase Inquiry</option>
                                <option>Export Request</option>
                                <option>Product Samples</option>
                                <option>General Support</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-transparent focus:ring-primary focus:border-primary"
                                placeholder="Tell us about your requirements..."
                                rows="4"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-[#111812] py-4 rounded-lg font-black text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
