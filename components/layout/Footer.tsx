"use client";

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/10 py-16 text-gray-400 font-mono text-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-widest">ZERO-G Performance GmbH</h3>
                        <p className="mb-2">Musterstraße 1</p>
                        <p className="mb-6">10115 Berlin, Deutschland</p>

                        <p className="mb-1"><span className="text-white/60">E-Mail:</span> service@zero-g-performance.de</p>
                        <p><span className="text-white/60">Tel:</span> +49 (0) 30 12345678</p>
                    </div>

                    {/* Legal Details (German Impressum Requirements) */}
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Rechtliche Angaben</h4>
                        <p className="mb-2">
                            <span className="block text-white/60 text-xs">Vertretungsberechtigte Geschäftsführer:</span>
                            Max Mustermann, Erika Musterfrau
                        </p>
                        <p className="mb-2">
                            <span className="block text-white/60 text-xs">Registergericht:</span>
                            Amtsgericht Berlin-Charlottenburg
                        </p>
                        <p className="mb-2">
                            <span className="block text-white/60 text-xs">Registernummer:</span>
                            HRB 123456
                        </p>
                        <p className="mb-4">
                            <span className="block text-white/60 text-xs">Umsatzsteuer-Identifikationsnummer gem. § 27a UStG:</span>
                            DE 123 456 789
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} ZERO-G Performance GmbH. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Datenschutzerklärung</a>
                        <a href="#" className="hover:text-white transition-colors">AGB</a>
                        <a href="#" className="hover:text-white transition-colors">Impressum</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
