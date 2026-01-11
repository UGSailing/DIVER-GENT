import Image from "next/image";
type Projects = {
    name: string;
    description: string;
    logo: string;
}

const projects: Projects[] = [
    {
        name: "UGent Sailing",
        description: "UGent Sailing bouwt een autonoom varende, CO2-neutrale boot om mee te doen aan de Monaco Energy Boat Challenge",
        logo: "/images/projects/ugs.png",
    },

    {
        name: "UGent Racing",
        description: "UGent Racing maakt een autonome raceauto",
        logo: "/images/projects/ugr.png",
    },

]

export default function Projects() {
    return (
        <section className="py-20 bg-gradient-to-b from-black/50 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow mb-4">
                        Onze Verenigingen
                    </h2>
                    <div className="w-24 h-1 bg-yellow mx-auto mb-8"></div>
                    <p className="text-lg text-silver/80 max-w-2xl mx-auto">
                        DIVER-GENT ondersteunt verschillende studentenprojecten en verenigingen in Gent. Ontdek wat we allemaal doen.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="text-center bg-gradient-to-br from-silver/5 to-silver/10 p-6 rounded-xl border border-yellow/20 hover:border-yellow/40 transition-all transform hover:scale-105"
                        >
                            <div className="h-24 rounded-lg mb-4 flex items-center justify-center">
                                <Image src={project.logo} alt={project.name} width={128} height={128} className="object-contain" />
                            </div>
                            <h3 className="text-xl font-semibold text-yellow mb-2">{project.name}</h3>
                            <p className="text-silver/70 text-sm">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}