import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div className="bg-gradient-to-br from-white to-silver/10 p-8 rounded-2xl border border-yellow/20">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-foreground font-medium mb-2">
                        Naam
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-silver/40 rounded-lg text-foreground placeholder:text-silver focus:outline-none focus:border-yellow transition-colors"
                        placeholder="Jouw naam"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-silver/40 rounded-lg text-foreground placeholder:text-silver focus:outline-none focus:border-yellow transition-colors"
                        placeholder="jouw.email@voorbeeld.be"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-foreground font-medium mb-2">
                        Onderwerp
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-silver/40 rounded-lg text-foreground placeholder:text-silver focus:outline-none focus:border-yellow transition-colors"
                        placeholder="Onderwerp van je bericht"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-foreground font-medium mb-2">
                        Bericht
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-silver/40 rounded-lg text-foreground placeholder:text-silver focus:outline-none focus:border-yellow transition-colors resize-none"
                        placeholder="Jouw bericht..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-8 py-4 bg-yellow text-white font-semibold rounded-lg hover:bg-yellow/90 transition-all transform hover:scale-105 shadow-lg shadow-yellow/30"
                >
                    Verstuur Bericht
                </button>
            </form>
        </div>
    );
}