type Question = {
    id: string;
    question: string;
    bullets?: string[]; // optional
    answer: string;
};

type Category = {
    name: string;
    questions: Question[];
};

export const quizData: Record<string, Category> = {
    BELEID: {
        name: "BELEID",
        questions: [
            {
                id: "b1",
                question:
                    "Zijn de uitgangspunten voor het inrichten en uitvoeren van contractmanagement vastgelegd?",
                answer: "Ja",
            },
            {
                id: "b2",
                question:
                    "Is deze vastlegging een duidelijk herkenbaar afgebakend voor contractmanagement of zijn uitgangspunten in één of meerdere andere beleidsstukken opgenomen?",
                answer: "Nee",
            },
            {
                id: "b3",
                question: "Bevat het beleid alle volgende elementen?",
                bullets: [
                    "Duidelijke afbakening van welke contracten onder de beleidsregels vallen",
                    "Definitie van contractmanagement",
                    "Hoofdlijnen van het contractmanagementproces (minimaal contractcreatie – contractuitvoering)",
                    "Opsomming en definitie van de rollen die in het proces ontstaan",
                    "Verdeling van de verantwoordelijkheden in de hoofdlijnen van het proces over de rollen (bijvoorbeeld in de vorm van een RASCI of een RACI)",
                ],
                answer: "Ja",
            },
            {
                id: "b4",
                question: "Bevat het beleid alle volgende elementen?",
                bullets: [
                    "Aanwijzingen voor waar de rol van proceseigenaar belegd moet worden in de organisatie  ",
                    "Duidelijk afbakening van de start en het einde van contractmanagement in de levenscyclus van een contract  ",
                    "Van toepassing zijnde, eventueel gestandaardiseerde, (geautomatiseerde) systemen en templates   ",
                    "Systematiek voor het bepalen van de contractmanagementaanpak (inhoud en tijd) per contract  ",
                ],
                answer: "Nee",
            },
            {
                id: "b5",
                question: "Bevat het beleid alle volgende elementen?  ",
                bullets: [
                    "Systematiek voor het aanwijzen van een contracteigenaar",
                    "Doel van contractmanagement en visie op hoe het doel gerealiseerd wordt",
                    "Van toepassing zijnde, eventueel gestandaardiseerde, (geautomatiseerde) systemen en templates",
                    "Koppeling met bovenliggend en aangrenzend beleid",
                    "Concreet meetbare punten omsucces van het proces vast te stellenen wijze van meten (KPI’s / PI’s /PPI’s en overig)",
                    "Koppeling tussen rollen en functies",
                    "Aanwijzingen voor de wenselijkheidvan het al dan niet combineren van meedere rollen in 1 functie of splitsing van rollen over functies",
                ],
                answer: "Nee",
            },
            {
                id: "b6",
                question: "Wordt het beleid periodiek geëvalueerd enbijgesteld?",
                answer: "Nee",
            },
        ],
    },

    PROCES: {
        name: "PROCES",
        questions: [
            {
                id: "p1",
                question: "Zijn processen voor contractbeheer gedefinieerd?",
                answer: "Ja",
            },
        ],
    },

    MENS: {
        name: "MENS",
        questions: [],
    },

    SYSTEEM: {
        name: "SYSTEEM",
        questions: [],
    },

    CONTRACTPORTFOLIO: {
        name: "CONTRACTPORTFOLIO",
        questions: [],
    },
};
