import Image from "next/image";
import Link from "next/link";
type Projects = {
    name: string;
    description: string;
    logo: string;
    url: string;
}

const projects: Projects[] = [
    {
        name: "UGent Sailing",
        description: "UGent Sailing brengt studenten en jonge onderzoekers samen met een interesse in maritieme technologie, artificiële intelligentie en innovatie. Ze bouwen een autonome, CO2-neutrale boot om mee te doen aan de Monaco Energy Boat Challenge.",
        logo: "/images/projects/ugs.png",
        url: "https://ugentsailing.be/",
    },

    {
        name: "UGent Racing",
        description: "UGent Racing is het Formula Student-team van de Universiteit Gent. Studenten uit verschillende studierichtingen en disciplines werken samen aan een elektrische, autonome racewagen.",
        logo: "/images/projects/ugr.png",
        url: "https://ugentracing.be/",
    },

    {
        name: "Humasol",
        description: "Humasol is een internationale solidariteitsorganisatie die als doelstelling heeft om hernieuwbare energie, water en duurzame technologie toegankelijk te maken voor iedereen. Wij werken rond deze thema’s in Afrika, Azië en Zuid-Amerika.",
        logo: "/images/projects/humasol.png",
        url: "https://humasol.be/",
    },

    {
        name: "Everest Analytics",
        description: "Wij bieden studenten praktijkervaring via impactvolle dataprojecten, begeleid door experts in machine learning.",
        logo: "/images/projects/everest.png",
        url: "https://everestanalytics.be/",
    },

    {
        name: "AnTARES",
        description: "Als team van Belgische studenten zijn we toegewijd aan het bouwen van krachtige raketten en kijken we er naar uit om deel te nemen aan de European Rocketry Challenge (EuRoC).",
        logo: "/images/projects/antares.jpg",
        url: "https://antares.ugent.be/",
    },

    {
        name: "180dc",
        description: "’s Werelds grootste universiteitsgebonden consultancy voor non-profitorganisaties en sociaal bewuste organisaties",
        logo: "/images/projects/180dc.png",
        url: "https://180dc.org/",
    },

]

export default function Projects() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-silver/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Onze Teams
                    </h2>
                    <div className="w-24 h-1 bg-yellow mx-auto mb-8"></div>
                    <p className="text-lg text-silver max-w-2xl mx-auto">
                        DIVER-GENT ondersteunt verschillende Gentse studententeams. Ontdek wat we allemaal doen.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.sort((a, b) => a.name.localeCompare(b.name)).map((project) => (
                        <Link key={project.name} href={project.url} target="_blank">
                            <div
                                className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-silver/20 hover:border-yellow/50 hover:shadow-xl hover:shadow-yellow/10 transition-all duration-200 flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 rounded-xl bg-yellow/10 flex items-center justify-center overflow-hidden">
                                        <Image src={project.logo} alt={project.name} width={64} height={64} className="object-contain" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground group-hover:text-yellow transition-colors">
                                        {project.name}
                                    </h3>
                                </div>
                                <div className="h-1 w-10 rounded-full bg-yellow/70 group-hover:w-14 transition-all" />
                                <p className="text-silver text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}