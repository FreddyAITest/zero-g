"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, Car, MessageSquare, ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function Termin() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        car: "",
        service: "",
        date: "",
        time: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    car: "",
                    service: "",
                    date: "",
                    time: "",
                    message: ""
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Header */}
            <header className="border-b border-white/10 py-6">
                <div className="container mx-auto px-4">
                    <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors w-fit">
                        <ArrowLeft size={20} />
                        <span className="font-mono text-sm tracking-wider">Zurück</span>
                    </Link>
                </div>
            </header>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto">

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Termin <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Buchen</span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Vereinbaren Sie einen Termin und wir kümmern uns um Ihr Fahrzeug.
                        </p>
                    </motion.div>

                    {/* Success/Error Messages */}
                    <AnimatePresence>
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="mb-8 p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3"
                            >
                                <CheckCircle className="text-green-500" size={24} />
                                <p className="text-green-500">Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.</p>
                            </motion.div>
                        )}
                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3"
                            >
                                <XCircle className="text-red-500" size={24} />
                                <p className="text-red-500">Fehler beim Versenden. Bitte versuchen Sie es erneut.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                            {/* Name */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-3">
                                    <User size={16} />
                                    Ihr Name*
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                                    placeholder="Max Mustermann"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-3">
                                    <Mail size={16} />
                                    E-Mail*
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                                    placeholder="max@example.com"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-3">
                                    <Phone size={16} />
                                    Telefon*
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                                    placeholder="+49 123 456789"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Car */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-3">
                                    <Car size={16} />
                                    Fahrzeug*
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.car}
                                    onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                                    placeholder="BMW 3er, VW Golf, etc."
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Service */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-3">
                                    <MessageSquare size={16} />
                                    Service*
                                </label>
                                <select
                                    required
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                                    disabled={isSubmitting}
                                >
                                    <option value="" className="bg-[#0a0a0a]">Bitte wählen...</option>
                                    <option value="Inspektion & Wartung" className="bg-[#0a0a0a]">Inspektion & Wartung</option>
                                    <option value="Bremsenservice" className="bg-[#0a0a0a]">Bremsenservice</option>
                                    <option value="Motordiagnose" className="bg-[#0a0a0a]">Motordiagnose</option>
                                    <option value="Unfallinstandsetzung" className="bg-[#0a0a0a]">Unfallinstandsetzung</option>
                                    <option value="E-Mobilität Service" className="bg-[#0a0a0a]">E-Mobilität Service</option>
                                    <option value="HU / AU" className="bg-[#0a0a0a]">HU / AU</option>
                                </select>
                            </div>

                            {/* Date */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-3">
                                    <Calendar size={16} />
                                    Wunschdatum*
                                </label>
                                <input
                                    type="date"
                                    required
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Time */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-3">
                                    <Clock size={16} />
                                    Uhrzeit (Optional)
                                </label>
                                <input
                                    type="time"
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-8">
                            <label className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-3">
                                <MessageSquare size={16} />
                                Nachricht (Optional)
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white focus:outline-none transition-colors resize-none"
                                placeholder="Weitere Details zu Ihrem Anliegen..."
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Wird gesendet...' : 'Termin Anfragen'}
                        </button>
                    </motion.form>

                </div>
            </div>
        </main>
    );
}
