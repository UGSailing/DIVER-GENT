import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function StudentTeamFair() {
    return (
        <main className="pt-20 min-h-screen bg-white">
            {/* Hero / Event Header */}
            <section className="py-20 bg-gradient-to-br from-yellow/90 via-yellow/70 to-yellow/60">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="uppercase tracking-[0.2em] text-sm font-semibold text-black/80 mb-3">
                        Event
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4">
                        Student Team Fair
                    </h1>
                    <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto">
                        Ontdek Gentse studententeams, ontmoet de teams achter de projecten en
                        vind het project dat bij jou past.
                    </p>
                </div>
            </section>

            {/* Event meta: date, time, location */}
            <section className="py-10 bg-silver/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-silver mb-1">
                            Datum
                        </h2>
                        <p className="text-lg font-semibold text-foreground">
                            18 februari 2026
                        </p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-silver mb-1">
                            Uur
                        </h2>
                        <p className="text-lg font-semibold text-foreground">
                            15:00 – 22:00
                        </p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-silver mb-1">
                            Locatie
                        </h2>
                        <p className="text-lg font-semibold text-foreground">
                            Universiteit Gent – UFO
                        </p>
                        <p className="text-sm text-silver">Sint-Pietersnieuwstraat 33, 9000 Gent</p>
                    </div>
                </div>
            </section>

            {/* Event description */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Over het event
                    </h2>
                    <p className="text-lg text-silver leading-relaxed">
                        Tijdens de Student Team Fair brengen we verschillende Gentse
                        studententeams samen onder één dak. Je krijgt de kans om hun
                        projecten te ontdekken, vragen te stellen en te ontdekken hoe jij
                        zelf kan deelnemen of samenwerken.
                    </p>
                    <p className="text-lg text-silver leading-relaxed">
                        Of je nu geïnteresseerd bent in technologie, ondernemerschap,
                        duurzaamheid of internationale projecten – er is altijd een team
                        dat bij jouw interesses past. Kom langs, ontdek de mogelijkheden
                        en maak kennis met de mensen achter de projecten.
                    </p>
                </div>
            </section>

            {/* Present student teams */}
            <section className="py-16 bg-gradient-to-b from-white to-silver/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                                Aanwezige studententeams
                            </h2>
                            <p className="text-silver max-w-xl">
                                Maak kennis met de teams die aanwezig zijn op de Student Team
                                Fair. Bezoek hun stand, stel vragen en ontdek hoe jij kan
                                aansluiten.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* 180dc */}
                        <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-silver/20 hover:border-yellow/50 hover:shadow-xl hover:shadow-yellow/10 transition-all duration-200 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-yellow transition-colors">
                                180 Degrees Consulting
                            </h3>
                            <p className="text-silver text-sm leading-relaxed">
                                Consultancy door en voor studenten, met projecten voor non-profits
                                en sociale ondernemingen.
                            </p>
                        </div>

                        {/* AnTARES */}
                        <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-silver/20 hover:border-yellow/50 hover:shadow-xl hover:shadow-yellow/10 transition-all duration-200 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-yellow transition-colors">
                                AnTARES
                            </h3>
                            <p className="text-silver text-sm leading-relaxed">
                                Studententeam dat krachtige raketten bouwt en deelneemt aan
                                Europese rocketry-wedstrijden.
                            </p>
                        </div>

                        {/* BotBattle */}
                        <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-silver/20 hover:border-yellow/50 hover:shadow-xl hover:shadow-yellow/10 transition-all duration-200 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-yellow transition-colors">
                                BotBattle
                            </h3>
                            <p className="text-silver text-sm leading-relaxed">
                                Team dat robots ontwerpt en bouwt voor robotica-wedstrijden en
                                demonstraties.
                            </p>
                        </div>

                        {/* Everest Analytics */}
                        <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-silver/20 hover:border-yellow/50 hover:shadow-xl hover:shadow-yellow/10 transition-all duration-200 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-yellow transition-colors">
                                Everest Analytics
                            </h3>
                            <p className="text-silver text-sm leading-relaxed">
                                Studententeam dat impactvolle data- en AI-projecten uitvoert voor
                                echte organisaties.
                            </p>
                        </div>

                        {/* Humasol */}
                        <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-silver/20 hover:border-yellow/50 hover:shadow-xl hover:shadow-yellow/10 transition-all duration-200 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-yellow transition-colors">
                                Humasol
                            </h3>
                            <p className="text-silver text-sm leading-relaxed">
                                Duurzame energie- en waterprojecten in Afrika, Azië en
                                Zuid-Amerika.
                            </p>
                        </div>

                        {/* UGent Racing */}
                        <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-silver/20 hover:border-yellow/50 hover:shadow-xl hover:shadow-yellow/10 transition-all duration-200 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-yellow transition-colors">
                                UGent Racing
                            </h3>
                            <p className="text-silver text-sm leading-relaxed">
                                Formula Student-team dat een elektrische, autonome racewagen
                                bouwt.
                            </p>
                        </div>

                        {/* UGent Sailing */}
                        <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-silver/20 hover:border-yellow/50 hover:shadow-xl hover:shadow-yellow/10 transition-all duration-200 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-yellow transition-colors">
                                UGent Sailing
                            </h3>
                            <p className="text-silver text-sm leading-relaxed">
                                Autonome, CO2-neutrale boot voor de Monaco Energy Boat
                                Challenge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}