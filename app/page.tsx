import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Projects from './components/Landing/Projects';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-20 cursor-none">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-silver/5 via-black to-silver/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h1 className="hero-title text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-black mb-6 bg-gradient-to-r from-yellow via-yellow/90 to-silver bg-clip-text text-transparent animate-fade-in leading-none transition-all duration-300">
              DIVER-GENT
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-silver/90 mb-8 font-light animate-fade-in-delay">
              Overkoepelende organisatie voor Gentse studentenprojecten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
              <Link
                href="/about"
                className="px-8 py-4 bg-yellow text-black font-semibold rounded-full hover:bg-yellow/90 transition-all transform hover:scale-105 shadow-lg shadow-yellow/20 cursor-hover"
              >
                Ontdek Meer
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-yellow text-yellow font-semibold rounded-full hover:bg-yellow/10 transition-all transform hover:scale-105 cursor-hover"
              >
                Contacteer Ons
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-silver/5 rounded-full blur-3xl"></div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
                Wie Zijn Wij?
              </h2>
              <div className="w-24 h-1 bg-yellow mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-silver/90 leading-relaxed">
                  DIVER-GENT is een nieuwe, overkoepelende organisatie die verschillende Gentse studentenprojecten en verenigingen verenigt onder één dak.
                </p>
                <p className="text-lg text-silver/90 leading-relaxed">
                  Onze missie is om studenteninitiatieven te ondersteunen, samenwerking te bevorderen en een sterke gemeenschap te creëren binnen de Gentse studentenwereld.
                </p>
                <Link
                  href="/about"
                  className="inline-block mt-6 text-yellow hover:text-yellow/80 font-semibold transition-colors cursor-hover"
                >
                  Lees meer over ons →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-yellow/10 to-silver/10 p-8 rounded-2xl border border-yellow/20">
                <h3 className="text-2xl font-bold text-yellow mb-4">Onze Visie</h3>
                <p className="text-silver/80 leading-relaxed">
                  We geloven in de kracht van diversiteit en samenwerking. Door verschillende projecten en verenigingen te verenigen, creëren we een platform waar innovatie en creativiteit kunnen bloeien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow/10 via-silver/10 to-yellow/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow mb-6">
              Klaar om deel te nemen?
            </h2>
            <p className="text-lg text-silver/90 mb-8 max-w-2xl mx-auto">
              Heb je vragen of wil je meer weten over DIVER-GENT? Neem gerust contact met ons op!
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-yellow text-black font-semibold rounded-full hover:bg-yellow/90 transition-all transform hover:scale-105 shadow-lg shadow-yellow/20 cursor-hover"
            >
              Contacteer Ons
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
