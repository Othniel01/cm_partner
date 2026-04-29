import { z } from "zod";

const ResultSchema = z.object({
    level: z.string(),
    description: z.string(),
});

const AnswerSchema = z.object({
    label: z.string(),
    next: z.string().optional(),
    nextSection: z.boolean().optional(),
    end: z.boolean().optional(),
    result: ResultSchema.optional(),
});

const QuestionSchema = z.object({
    id: z.string(),
    question: z.string(),
    bullets: z.array(z.string()).optional(),
    answers: z.array(AnswerSchema).min(1),
});

const CategorySchema = z.object({
    name: z.string(),
    questions: z.record(z.string(), QuestionSchema),
});

const QuizDataSchema = z.record(z.string(), CategorySchema);

export type Result = z.infer<typeof ResultSchema>;
export type Answer = z.infer<typeof AnswerSchema>;
export type Question = z.infer<typeof QuestionSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type QuizData = z.infer<typeof QuizDataSchema>;

const rawQuizData: QuizData = {
    BELEID: {
        name: "BELEID",
        questions: {
            b1: {
                id: "b1",
                question:
                    "Zijn de uitgangspunten voor het inrichten en uitvoeren van contractmanagement vastgelegd?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "b2",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Ad hoc",
                            description: "Geen beleid",
                        },
                    },
                ],
            },

            b2: {
                id: "b2",
                question:
                    "Is deze vastlegging een duidelijk herkenbaar afgebakend voor contractmanagement of zijn uitgangspunten in één of meerdere andere beleidsstukken opgenomen?",
                answers: [
                    {
                        label: "Afzonderlijk contractmanagement beleid herkenbaar",
                        next: "b3",
                    },

                    {
                        label: "✗ Onderdeel van aangrenzend ander beleid",
                        nextSection: true,
                        result: {
                            level: "Informeel",
                            description:
                                "Beleidskeuzes CM zijn op enkele onderdelen gemaakt. Meestal als onderdeel van aangrenzend of overkoepelend beleid",
                        },
                    },
                ],
            },

            b3: {
                id: "b3",
                question: "Bevat het beleid alle volgende elementen?",
                bullets: [
                    "Duidelijke afbakening van welke contracten onder de beleidsregels vallen",
                    "Definitie van contractmanagement",
                    "Hoofdlijnen van het contractmanagementproces (minimaal contractcreatie – contractuitvoering)",
                    "Opsomming en definitie van de rollen die in het proces ontstaan",
                    "Verdeling van de verantwoordelijkheden in de hoofdlijnen van het proces over de rollen (bijvoorbeeld in de vorm van een RASCI of een RACI)",
                ],
                answers: [
                    {
                        label: "✓ Ja",
                        next: "b4",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Informeel+",
                            description:
                                "Het beleid mist essentiële basiselementen. De grondslagen voor contractmanagement zijn onvolledig gedefinieerd.",
                        },
                    },
                ],
            },

            b4: {
                id: "b4",
                question: "Bevat het beleid alle volgende elementen?",
                bullets: [
                    "Aanwijzingen voor waar de rol van proceseigenaar belegd moet worden in de organisatie",
                    "Duidelijk afbakening van de start en het einde van contractmanagement in de levenscyclus van een contract",
                    "Van toepassing zijnde, eventueel gestandaardiseerde, (geautomatiseerde) systemen en templates",
                    "Systematiek voor het bepalen van de contractmanagementaanpak (inhoud en tijd) per contract",
                ],
                answers: [
                    {
                        label: "✓ Ja",
                        next: "b5",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gedefinieerd-",
                            description:
                                "Het beleid bevat de basisstructuur maar mist operationele sturing over eigenaarschap, levenscyclus en systematiek.",
                        },
                    },
                ],
            },

            b5: {
                id: "b5",
                question: "Bevat het beleid alle volgende elementen?",
                bullets: [
                    "Systematiek voor het aanwijzen van een contracteigenaar",
                    "Doel van contractmanagement en visie op hoe het doel gerealiseerd wordt",
                    "Van toepassing zijnde, eventueel gestandaardiseerde, (geautomatiseerde) systemen en templates",
                    "Koppeling met bovenliggend en aangrenzend beleid",
                    "Concreet meetbare punten om succes van het proces vast te stellen en wijze van meten (KPI's / PI's / PPI's en overig)",
                    "Koppeling tussen rollen en functies",
                    "Aanwijzingen voor de wenselijkheid van het al dan niet combineren van meerdere rollen in 1 functie of splitsing van rollen over functies",
                ],
                answers: [
                    {
                        label: "✓ Ja",
                        next: "b6",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gedefinieerd",
                            description:
                                "Alle cm beleidskeuzes gemaakt en vastgelegd in een volledig beleid",
                        },
                    },
                ],
            },

            b6: {
                id: "b6",
                question: "Wordt het beleid periodiek geëvalueerd en bijgesteld?",
                answers: [
                    {
                        label: "✓ Volgens vast verbeterproces",
                        nextSection: true,
                        result: {
                            level: "Geoptimaliseerd",
                            description:
                                "Gemanaged + CM beleid wordt periodiek geëvalueerd en bijgesteld",
                        },
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gedefinieerd +",
                            description:
                                "Het beleid is inhoudelijk compleet maar wordt niet structureel geëvalueerd of bijgesteld.",
                        },
                    },
                ],
            },
        },
    },

    PROCES: {
        name: "PROCES",
        questions: {
            p1: {
                id: "p1",
                question:
                    "Zijn er processen uitgewerkt voor de manier waarop contractmanagement wordt uitgevoerd?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "p2",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Ad hoc",
                            description:
                                "Uitvoering op basis van persoonlijke inschatting – geen proceseigenaarschap",
                        },
                    },
                ],
            },

            p2: {
                id: "p2",
                question:
                    "Zijn deze processen voor de eigen afdeling of is er een overkoepelend proces voor het bedrijfsonderdeel of de organisatie waar het proces deel van uitmaakt?",
                answers: [
                    {
                        label: "drijfsonderdeel/organisatie",
                        next: "p3",
                    },
                    {
                        label: "Afdeling",
                        next: "p2_1",
                    },
                ],
            },

            p2_1: {
                id: "p2_1",
                question: "Is de rol van proceseigenaar duidelijk belegd binnen de afdeling?",
                answers: [
                    {
                        label: "✓ Ja",
                        nextSection: true,
                        result: {
                            level: "Informeel",
                            description:
                                "Basis CM activiteiten – binnen eigen functie / afdeling – proceseigenaarschap ligt binnen de eigen afdeling",
                        },
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Informeel-",
                            description:
                                "Basis CM activiteiten – binnen eigen functie / afdeling – proceseigenaarschap ligt binnen de eigen afdeling",
                        },
                    },
                ],
            },

            p3: {
                id: "p3",
                question:
                    "Is er in het proces systematiek verwerkt voor verschillen in contractmanagementaanpak voor verschillende type contracten?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "p4",
                    },
                    {
                        label: "✗ Nee",
                        next: "p3_1",
                    },
                ],
            },

            p3_1: {
                id: "p3_1",
                question: "Is de rol van proceseigenaar duidelijk belegd binnen de organisatie?",
                answers: [
                    {
                        label: "✓ Ja",
                        nextSection: true,
                        result: {
                            level: "Informeel+",
                            description:
                                "Basis CM activiteiten – binnen eigen functie / afdeling – proceseigenaarschap ligt binnen de eigen afdeling",
                        },
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Lijkt misschien managed, maar is informeel",
                            description:
                                "Er is een organisatiebreed proces maar de proceseigenaar is niet duidelijk belegd.",
                        },
                    },
                ],
            },

            p4: {
                id: "p4",
                question: "Is de rol van proceseigenaar duidelijk belegd binnen de organisatie?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "p5",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gedefinieerd -",
                            description:
                                "Het organisatiebrede proces bestaat maar eigenaarschap is niet eenduidig belegd.",
                        },
                    },
                ],
            },

            p5: {
                id: "p5",
                question:
                    "Wordt het proces gemeten? Bijvoorbeeld door gemaakte uren, gebruikte systemen, uitvoering volgens proces en gerealiseerd effect",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "p6",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gedefinieerd",
                            description:
                                "Proces opgesteld met daarin een scenariobenadering voor de deelprocessen",
                        },
                    },
                ],
            },

            p6: {
                id: "p6",
                question: "Worden proces en procesdocumenten/werkinstructies geëvalueerd?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "p7",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gemanaged",
                            description:
                                "Gedefinieerd + KPI’s gedefinieerd en meting en verbetering in relatie daarmee",
                        },
                    },
                ],
            },

            p7: {
                id: "p7",
                question:
                    "Wordt het proces op basis van de metingen geëvalueerd en bijgestuurd in combinatie met andere processen?",
                answers: [
                    {
                        label: "✓ Ja",
                        nextSection: true,
                        result: {
                            level: "Geoptimaliseerd",
                            description:
                                "Gemanaged + Geëvalueerd en bijgesteld in relatie tot organisatiedoelstellingen",
                        },
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gemanaged",
                            description:
                                "Gedefinieerd + KPI’s gedefinieerd en meting en verbetering in relatie daarmee",
                        },
                    },
                ],
            },
        },
    },

    MENS: {
        name: "MENS",
        questions: {
            m1: {
                id: "m1",
                question:
                    "Zijn er specifieke functionarissen verantwoordelijk voor contractmanagement (als functie of deel van hun functie)?",
                bullets: ["Bijvoorbeeld cm, clm, inkoper, verkoper"],
                answers: [
                    {
                        label: "✓ Ja",
                        next: "m2",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Ad hoc",
                            description: "CM is geen afzonderlijke functie",
                        },
                    },
                ],
            },

            m2: {
                id: "m2",
                question:
                    "Is er vanuit de lijnorganisatie een functiebeschrijving waarin de contractmanagementactiviteiten voor deze functionarissen zijn beschreven (meestal functiebeschrijving contractmanager)?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "m3",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Informeel-",
                            description:
                                "Functionarissen zijn aangewezen maar een formele functiebeschrijving ontbreekt.",
                        },
                    },
                ],
            },

            m3: {
                id: "m3",
                question: "Is er vanuit het proces een rolbeschrijving contractmanager?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "m4",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Informeel",
                            description:
                                "CM is een afzonderlijke functie met een vanuit de lijnsturing gedefinieerde set aan taken",
                        },
                    },
                ],
            },

            m4: {
                id: "m4",
                question:
                    "Is er vanuit het proces een rolbeschrijving van aan contractmanager grenzende rollen?",
                bullets: ["Bijvoorbeeld CE en RVM"],
                answers: [
                    {
                        label: "✓ Ja",
                        next: "m5",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Informeel+",
                            description:
                                "De contractmanager rol is beschreven maar aangrenzende rollen zijn niet gedefinieerd.",
                        },
                    },
                ],
            },

            m5: {
                id: "m5",
                question:
                    "Zijn er voor de CM persoonlijke beoordelingscriteria/doelstellingen opgesteld gebaseerd op de functiebeschrijving en de rolbeschrijving en is het opleidingspad/certificeringspad duidelijk gedefinieerd?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "m6",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gedefinieerd",
                            description:
                                "Rol contractmanager een aangrenzende rollen zijn processturing gedefinieerd",
                        },
                    },
                ],
            },

            m6: {
                id: "m6",
                question:
                    "Worden functiebeschrijving, rolbeschrijving en persoonlijke doelstellingen/beoordelingscriteria periodiek geëvalueerd en bijgesteld?",
                answers: [
                    {
                        label: "✓ Ja",
                        nextSection: true,
                        result: {
                            level: "Geoptimaliseerd",
                            description:
                                "Gemanaged + Processturing en lijnsturing Gemanaged. Geëvalueerd en bijgesteld in relatie tot organisatiedoelstellingen",
                        },
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gemanaged",
                            description:
                                "Gedefinieerd + Functie en rol gecombineerd met persoonlijke KPI’s. ",
                        },
                    },
                ],
            },
        },
    },

    SYSTEEM: {
        name: "SYSTEEM",
        questions: {
            s1: {
                id: "s1",
                question:
                    "Is er een geautomatiseerd systeem voor het vastleggen van contracten en contractgegevens?",
                bullets: ["ook meervoud en andere systemen"],
                answers: [
                    {
                        label: "✓ Ja",
                        next: "s2",
                    },
                    {
                        label: "✗ Nee",
                        next: "s1_1",
                    },
                ],
            },

            s1_1: {
                id: "s1_1",
                question:
                    "Is er een gecentraliseerde plaats gedefinieerd voor opslag van contracten en contractgegevens? (bijvoorbeeld SharePoint)",
                answers: [
                    {
                        label: "✓ Ja",
                        nextSection: true,
                        result: {
                            level: "Informeel",
                            description:
                                "Geen specifiek systeem voor het vastleggen van documenten, maar wel een gecentraliseerde opslag (bijvoorbeeld sharepoint)",
                        },
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Ad hoc",
                            description:
                                "Geen specifieke systemen voor het vastleggen van documenten.",
                        },
                    },
                ],
            },

            s2: {
                id: "s2",
                question:
                    "Faciliteert dit systeem een workflow voor het contractmanagement in de uitvoeringsfase?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "s3",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gedefinieerd",
                            description:
                                "Specifiek systeem voor het vastleggen van documenten en het inzichtelijk maken van data/informatie",
                        },
                    },
                ],
            },

            s3: {
                id: "s3",
                question: "Is dit systeem (waar noodzakelijk) geïntegreerd met andere systemen?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "s4",
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gedefinieerd +",
                            description:
                                "Het systeem faciliteert workflows maar is niet geïntegreerd met aangrenzende systemen.",
                        },
                    },
                ],
            },

            s4: {
                id: "s4",
                question:
                    "Maakt dit systeem gebruik van technieken zoals AI en RPA om de CM werkzaamheden te ondersteunen?",
                answers: [
                    {
                        label: "✓ Ja",
                        nextSection: true,
                        result: {
                            level: "Geoptimaliseerd",
                            description:
                                "Gemanaged + gebruik van moderne technieken zoals AI en RPA",
                        },
                    },
                    {
                        label: "✗ Nee",
                        nextSection: true,
                        result: {
                            level: "Gemanaged",
                            description:
                                "Gedefinieerd + vastleggen van workflow + gekoppeld met andere systemen",
                        },
                    },
                ],
            },
        },
    },

    CONTRACTPORTFOLIO: {
        name: "CONTRACTPORTFOLIO",
        questions: {
            cp1: {
                id: "cp1",
                question:
                    "Is er (centraal of over meerdere locaties verspreid) overzicht over alle contracten waarop contractmanagement moet worden toegepast?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "cp2",
                    },
                    {
                        label: "✗ Nee",
                        end: true,
                        result: {
                            level: "Ad hoc",
                            description: "Er is geen overzicht van alle contracten",
                        },
                    },
                ],
            },

            cp2: {
                id: "cp2",
                question:
                    "Zijn van alle contracten in dit overzicht/deze overzichten de volgende gegevens bekend:",
                bullets: [
                    "naam wederpartij",
                    "contractwaarde in geld",
                    "begindatum",
                    "einddatum",
                    "verlengdatum",
                ],
                answers: [
                    {
                        label: "✓ Ja",
                        next: "cp3",
                    },
                    {
                        label: "✗ Nee",
                        end: true,
                        result: {
                            level: "Informeel-",
                            description:
                                "Er is een overzicht van alle contracten met hun basisdata + contractdocument",
                        },
                    },
                ],
            },

            cp3: {
                id: "cp3",
                question: "Zijn van alle contracten de volgende gegevens bekend:",
                bullets: [
                    "invulling rollen (aan beide zijden van het contract) contracteigenaar, contractmanager en realisatie",
                    "en verificatiemanager",
                    "van toepassing zijnd contractmanagementscenario",
                ],
                answers: [
                    {
                        label: "✓ Ja",
                        next: "cp4",
                    },
                    {
                        label: "✗ Nee",
                        end: true,
                        result: {
                            level: "Informeel",
                            description:
                                "Er is een overzicht van alle contracten met hun basisdata + contractdocument",
                        },
                    },
                ],
            },

            cp4: {
                id: "cp4",
                question:
                    "Is er voor alle contracten inzicht in de voor contractmanagementdoeleinden relevante informatie per contract? Denk hierbij aan een contractrisicoprofiel, notulen van vergaderingen, rapportages, etc.",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "cp5",
                    },
                    {
                        label: "✗ Nee",
                        end: true,
                        result: {
                            level: "Informeel+",
                            description:
                                "Er is een overzicht van alle contracten met hun basisdata + contractdocument",
                        },
                    },
                ],
            },

            cp5: {
                id: "cp5",
                question:
                    "Wordt er informatie verzameld over de uitvoering van het CM proces (zijn de werkzaamheden conform plan uitgevoerd en heeft dit tot het gewenste resultaat geleid)?",
                answers: [
                    {
                        label: "✓ Ja",
                        next: "cp6",
                    },
                    {
                        label: "✗ Nee",
                        end: true,
                        result: {
                            level: "Gedefinieerd",
                            description:
                                "Basis + Er is een overzicht van de te verzamelen data vanuit CM oogpunt",
                        },
                    },
                ],
            },

            cp6: {
                id: "cp6",
                question:
                    "Wordt de te verzamelen data geëvalueerd en waar nodig bijgesteld in relatie tot de organisatiedoelstellingen?",
                answers: [
                    {
                        label: "✓ Ja",
                        end: true,
                        result: {
                            level: "Geoptimaliseerd",
                            description:
                                "Geemanaged + Geëvalueerd en bijgesteld in relatie tot organisatiedoelstellingen",
                        },
                    },
                    {
                        label: "✗ Nee",
                        end: true,
                        result: {
                            level: "Gemanaged",
                            description:
                                "Gedefinieerd + Beeld van te verzamelen documenten vanuit CM oogpunt, vanuit procesoogpunt",
                        },
                    },
                ],
            },
        },
    },
};

export const quizData: QuizData = (() => {
    try {
        return QuizDataSchema.parse(rawQuizData);
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Invalid quiz data:", error.issues);
        }
        throw new Error("Quiz data validation failed at startup");
    }
})();

export const categoryOrder = ["BELEID", "PROCES", "MENS", "SYSTEEM", "CONTRACTPORTFOLIO"] as const;

export type CategoryKey = (typeof categoryOrder)[number];

export const categoryMeta: Record<
    CategoryKey,
    { icon: string; label: string; color: string; bg: string }
> = {
    BELEID: { icon: "📋", label: "Beleid", color: "#F7941D", bg: "#F7941D18" },
    PROCES: { icon: "⚙️", label: "Proces", color: "#3B82F6", bg: "#3B82F618" },
    MENS: { icon: "👥", label: "Mens", color: "#10B981", bg: "#10B98118" },
    SYSTEEM: { icon: "💻", label: "Systeem", color: "#8B5CF6", bg: "#8B5CF618" },
    CONTRACTPORTFOLIO: {
        icon: "📁",
        label: "Contractportfolio",
        color: "#EC4899",
        bg: "#EC489918",
    },
};
