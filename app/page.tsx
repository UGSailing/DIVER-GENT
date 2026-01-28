import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Landing/Projects';

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow/5 to-white"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#35353508_1px,transparent_1px),linear-gradient(to_bottom,#35353508_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="hero-title text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-black mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-yellow bg-clip-text text-transparent animate-fade-in leading-none transition-all duration-300">
            DIVER-GENT
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-silver mb-8 font-light animate-fade-in-delay">
            Overkoepelende organisatie voor Gentse studententeams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Link
              href="/events/studentteamfair"
              className="px-8 py-4 bg-yellow text-white font-semibold rounded-full hover:bg-yellow/90 transition-all transform hover:scale-105 shadow-lg shadow-yellow/30 cursor-hover"
            >
              Student Team Fair
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-yellow text-foreground font-semibold rounded-full hover:bg-yellow/10 transition-all transform hover:scale-105 cursor-hover"
            >
              Ontdek Meer
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-yellow/100 via-yellow/80 to-yellow/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Wie Zijn Wij?
            </h2>
            <div className="w-24 h-1 bg-yellow mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                DIVER-GENT is een nieuwe, overkoepelende organisatie die verschillende Gentse studentenprojecten en verenigingen verenigt onder één dak.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Onze missie is om studenteninitiatieven te ondersteunen, samenwerking te bevorderen en een sterke gemeenschap te creëren binnen de Gentse studentenwereld.
              </p>
              <Link
                href="/about"
                className="inline-block mt-6 text-black hover:text-black/70 font-semibold transition-colors cursor-hover"
              >
                Lees meer over ons →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-yellow/30 shadow-lg shadow-yellow/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Onze Visie</h3>
              <p className="text-foreground/90 leading-relaxed">
                We geloven in de kracht van diversiteit en samenwerking. Door verschillende projecten en verenigingen te verenigen, creëren we een platform waar innovatie en creativiteit kunnen bloeien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

    </main>
  );
}
