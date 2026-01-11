import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-silver/5 via-black to-silver/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-yellow mb-6">
              Over DIVER-GENT
            </h1>
            <div className="w-24 h-1 bg-yellow mx-auto mb-8"></div>
            <p className="text-xl text-silver/90 leading-relaxed">
              Een overkoepelende organisatie die Gentse studentenprojecten en verenigingen verenigt
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-yellow mb-6">Wie Zijn Wij?</h2>
                <div className="space-y-4 text-lg text-silver/90 leading-relaxed">
                  <p>
                    DIVER-GENT is een nieuwe, overkoepelende organisatie die verschillende Gentse studentenprojecten en verenigingen verenigt onder één dak. We zijn ontstaan uit de behoefte om meer samenwerking en synergie te creëren tussen verschillende studenteninitiatieven in Gent.
                  </p>
                  <p>
                    Onze organisatie fungeert als een platform waar verschillende projecten en verenigingen kunnen samenkomen, kennis kunnen delen en elkaar kunnen versterken. We geloven dat door samen te werken, we meer kunnen bereiken dan alleen.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-yellow mb-6">Onze Missie</h2>
                <div className="space-y-4 text-lg text-silver/90 leading-relaxed">
                  <p>
                    Onze missie is om studenteninitiatieven te ondersteunen, samenwerking te bevorderen en een sterke gemeenschap te creëren binnen de Gentse studentenwereld. We streven ernaar om:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Verschillende studentenprojecten en verenigingen te verenigen</li>
                    <li>Samenwerking en kennisuitwisseling te bevorderen</li>
                    <li>Een platform te bieden voor innovatie en creativiteit</li>
                    <li>Studenten te ondersteunen bij het realiseren van hun projecten</li>
                    <li>Een sterke gemeenschap te creëren binnen de Gentse studentenwereld</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-yellow mb-6">Onze Visie</h2>
                <div className="space-y-4 text-lg text-silver/90 leading-relaxed">
                  <p>
                    We geloven in de kracht van diversiteit en samenwerking. Door verschillende projecten en verenigingen te verenigen, creëren we een platform waar innovatie en creativiteit kunnen bloeien. Onze visie is om een centrale rol te spelen in het Gentse studentenleven en een brug te vormen tussen verschillende initiatieven.
                  </p>
                  <p>
                    We zien DIVER-GENT als een dynamische organisatie die meegroeit met de behoeften van de studentengemeenschap en die altijd openstaat voor nieuwe projecten en ideeën.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-yellow mb-6">Wat Doen We?</h2>
                <div className="space-y-4 text-lg text-silver/90 leading-relaxed">
                  <p>
                    DIVER-GENT ondersteunt verschillende soorten studentenprojecten en verenigingen. Dit kan variëren van technische projecten tot culturele initiatieven, van sociale verenigingen tot innovatieve startups. We bieden:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Organisatorische ondersteuning voor projecten</li>
                    <li>Netwerkmogelijkheden tussen verschillende initiatieven</li>
                    <li>Gedeelde resources en kennis</li>
                    <li>Promotie en zichtbaarheid voor projecten</li>
                    <li>Een platform voor samenwerking en uitwisseling</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow/10 to-silver/10 p-8 rounded-2xl border border-yellow/20">
                <h2 className="text-3xl font-bold text-yellow mb-6">Samen Sterker</h2>
                <p className="text-lg text-silver/90 leading-relaxed">
                  Bij DIVER-GENT geloven we dat we samen sterker zijn. Door verschillende projecten en verenigingen te verenigen, creëren we een krachtige gemeenschap die in staat is om grote dingen te bereiken. Wil je deel uitmaken van deze gemeenschap? Neem dan contact met ons op!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
