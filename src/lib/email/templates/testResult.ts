type AssesmentEmailProps = {
    participantEmail: string;
};

export function assesmentEmailTemplate({ participantEmail }: AssesmentEmailProps) {
    return {
        subject: "Maturity Model Test Result",
        htmlBody: ` 
        <!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Maturity Model Test Result</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      font-family: Arial, Helvetica, sans-serif;
    "
  >
    <table
      role="presentation"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="background-color: #f8fafc; padding: 40px 0"
    >
      <tr>
        <td align="center">
          <table
            role="presentation"
            width="560"
            cellpadding="0"
            cellspacing="0"
            style="background-color: #ffffff; overflow: hidden"
          >
            <tr>
              <td style="background-color: #0a4460; padding: 32px">
                <div
                  style="
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <img src="./logo1.png" alt="#" />
                  <h1
                    style="
                      color: #eaebff;
                      margin: 0;
                      font-weight: 500;
                      font-size: 14px;
                    "
                  >
                    Maturity Model Assesment
                  </h1>
                </div>
                <h1
                  style="
                    color: #ffffff;
                    margin-top: 2;
                    font-weight: 600;
                    font-size: 24px;
                  "
                >
                  Jouw Quickscan <span style="color: #f7941d">Resultaten</span>
                </h1>
                <p
                  style="
                    color: #ffffff99;
                    margin: 0;
                    font-weight: 500;
                    font-size: 14px;
                  "
                >
                  Contract Management Maturity Assessment — gebaseerd op het
                  CATS Control Model
                </p>

                <div
                  style="
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                  "
                >
                  <div
                    style="
                      margin: 0;
                      font-size: 12px;
                      border: 1px solid #ffffff26;
                      padding: 8px;
                      background-color: #ffffff1a;
                      border-radius: 20px;
                      color: white;
                    "
                  >
                    📅 27 April 2026
                  </div>
                  <div
                    style="
                      margin: 0;
                      font-size: 12px;
                      border: 1px solid #ffffff26;
                      padding: 8px;
                      background-color: #ffffff1a;
                      border-radius: 20px;
                      color: white;
                    "
                  >
                    📧 ${participantEmail}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px">
                <!-- INTRODUCTION -->
                <div style="display: flex; align-items: center; gap: 10px">
                  <p
                    style="
                      font-size: 14px;
                      font-weight: 500;
                      color: #94a3b8;
                      text-transform: uppercase;
                    "
                  >
                    Introductie
                  </p>
                  <div
                    style="height: 1px; width: 100%; background-color: #e2e8f0"
                  ></div>
                </div>

                <div
                  style="
                    border-left: 0.25rem solid #d4006a;
                    width: 93%;
                    padding: 1.1rem;
                    background-color: #f8f9fc;
                    height: fit-content;
                  "
                >
                  <p
                    style="
                      font-size: 16px;
                      font-weight: 600;
                      color: #334155;
                      margin: 0 0 16px;
                    "
                  >
                    Beste deelnemer,
                  </p>
                  <p style="font-size: 16px; color: #334155; margin: 0 0 16px">
                    Hierbij ontvang je de resultaten van de quickscan zoals
                    uitgevoerd door jou op onze website. Deze quickscan geeft op
                    een aantal verschillende domeinen je een indicatie van hoe
                    goed je bent op dat domein; het geeft je een inzage.
                  </p>
                  <p style="font-size: 16px; color: #334155; margin: 0 0 24px">
                    Deze CATS CM quickscan wordt je aangeboden door
                    <span style="font-weight: 600">CM Partners</span>. De
                    eindscore is een indicatie op basis van jouw persoonlijke
                    waarneming. Uiteraard als je over deze waarneming met CM
                    Partners van gedachten wil wisselen dan kun je door een mail
                    te sturen aan
                    <span style="font-weight: 600"
                      >secretariaat@cmpartners.nl</span
                    >
                    met ons in contact treden.
                  </p>
                </div>

                <div style="display: flex; align-items: center; gap: 10px">
                  <p
                    style="
                      font-size: 14px;
                      font-weight: 500;
                      color: #94a3b8;
                      display: block;
                      width: 100%;
                      text-transform: uppercase;
                    "
                  >
                    Uitleg en duiding van uitkomsten
                  </p>
                  <div
                    style="
                      height: 0.0625rem;
                      width: 80%;

                      background-color: #e2e8f0;
                    "
                  ></div>
                </div>

                <p style="font-size: 16px; color: #334155; margin: 0 0 16px">
                  De Contract Management Maturity Quick Scan is bedoeld om in
                  korte tijd een betrouwbaar beeld te geven van de volwassenheid
                  van contractmanagement binnen de organisatie. De scan is
                  opgebouwd volgens het CATS Control Model.
                </p>
                <p style="font-size: 16px; color: #334155; margin: 0 0 24px">
                  De uitkomsten van de quick scan moeten niet worden gelezen als
                  een losstaande score, maar als een samenhangend beeld: beleid
                  stuurt het proces, het proces stuurt de uitvoering, en de
                  uitvoering levert weer informatie op om beleid en proces te
                  verbeteren.
                </p>
                <p
                  style="
                    font-size: 16px;
                    font-weight: 600;
                    color: #334155;
                    margin: 0 0 16px;
                  "
                >
                  De volwassenheidsniveaus: wat betekenen ze?
                </p>
                <p style="font-size: 16px; color: #334155; margin: 0 0 24px">
                  De quick scan werkt met vijf volwassenheidsniveaus. Deze
                  niveaus beschrijven vooral de mate van voorspelbaarheid,
                  herhaalbaarheid en bestuurbaarheid van contractmanagement.
                </p>

                <!-- MATURITY LEVELS DEFINITION START  -->

                <div
                  style="
                    border: #e2e8f0;
                    background-color: #f8f9fc;
                    width: 93%;
                    border-radius: 8px;
                    border: 1px, solid, #e2e8f0;
                    padding-top: 2rem;
                    padding-right: 2rem;
                    display: flex;
                    gap: 2rem;
                    height: fit-content;
                  "
                >
                  <div
                    style="
                      display: flex;
                      width: 20%;
                      padding-left: 0.5rem;
                      flex-direction: column;
                      align-items: center;
                    "
                  >
                    <div
                      style="
                        background-color: #ef4444;
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 100%;
                      "
                    ></div>
                    <p
                      style="color: #ef4444; font-weight: 600; font-size: 14px"
                    >
                      AD HOC
                    </p>
                  </div>

                  <div style="width: 80%">
                    <p
                      style="
                        font-size: 16px;
                        font-weight: 600;
                        color: #334155;
                        margin: 0 0 1px;
                      "
                    >
                      Start / Ad hoc
                    </p>
                    <p style="font-size: 14px; color: #64748b">
                      Contractmanagement vindt plaats op basis van individuele
                      inzet en incidenten. Activiteiten worden uitgevoerd
                      wanneer er een probleem ontstaat of wanneer iemand het
                      initiatief neemt. Resultaten zijn sterk
                      persoonsafhankelijk en moeilijk reproduceerbaar.
                    </p>
                    <p
                      style="
                        font-size: 14px;
                        font-style: italic;
                        color: #8591a1;
                      "
                    >
                      Duiding: een lage score op dit niveau is geen oordeel over
                      kwaliteit van medewerkers, maar een signaal dat de
                      organisatie nog weinig structurele borging heeft. Het
                      belangrijkste risico is continuïteit: bij groei,
                      personeelswisselingen of drukte neemt de beheersbaarheid
                      snel af.
                    </p>
                  </div>
                </div>

                <div
                  style="
                    border: #e2e8f0;
                    background-color: #f8f9fc;
                    width: 93%;
                    border-radius: 8px;
                    border: 1px, solid, #e2e8f0;
                    padding-top: 2rem;
                    padding-right: 2rem;
                    display: flex;
                    margin-top: 1rem;
                    gap: 2rem;
                    height: fit-content;
                  "
                >
                  <div
                    style="
                      display: flex;
                      width: 20%;
                      padding-left: 0.5rem;
                      flex-direction: column;
                      align-items: center;
                    "
                  >
                    <div
                      style="
                        background-color: #f97316;
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 100%;
                      "
                    ></div>
                    <p
                      style="color: #f97316; font-weight: 600; font-size: 14px"
                    >
                      INFORMAL
                    </p>
                  </div>

                  <div style="width: 80%">
                    <p
                      style="
                        font-size: 16px;
                        font-weight: 600;
                        color: #334155;
                        margin: 0 0 1px;
                      "
                    >
                      Informeel
                    </p>
                    <p style="font-size: 14px; color: #64748b">
                      Er zijn werkwijzen ontstaan die in de praktijk vaak worden
                      gevolgd, maar ze zijn beperkt vastgelegd of niet
                      organisatiebreed eenduidig. Sturing gebeurt vooral via
                      ervaring, overleg en impliciete afspraken.
                    </p>
                    <p
                      style="
                        font-size: 14px;
                        font-style: italic;
                        color: #8591a1;
                      "
                    >
                      Duiding: dit niveau kan in kleine omgevingen effectief
                      lijken, maar kent schaal- en auditbeperkingen. De grootste
                      winst zit vaak in het expliciteren van keuzes (wat doen we
                      wel/niet) en het vastleggen van minimale standaarden.
                    </p>
                  </div>
                </div>

                <div
                  style="
                    border: #e2e8f0;
                    background-color: #f8f9fc;
                    width: 93%;
                    border-radius: 8px;
                    border: 1px, solid, #e2e8f0;
                    padding-top: 2rem;
                    padding-right: 2rem;
                    display: flex;
                    margin-top: 1rem;
                    gap: 2rem;
                    height: fit-content;
                  "
                >
                  <div
                    style="
                      display: flex;
                      padding-left: 0.5rem;
                      width: 20%;
                      flex-direction: column;
                      align-items: center;
                    "
                  >
                    <div
                      style="
                        background-color: #3b82f6;
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 100%;
                      "
                    ></div>
                    <p
                      style="color: #3b82f6; font-weight: 600; font-size: 14px"
                    >
                      DEFINED
                    </p>
                  </div>

                  <div style="width: 80%">
                    <p
                      style="
                        font-size: 16px;
                        font-weight: 600;
                        color: #334155;
                        margin: 0 0 1px;
                      "
                    >
                      Gedefinieerd
                    </p>
                    <p style="font-size: 14px; color: #64748b">
                      Beleid, processen en rollen zijn herkenbaar vastgelegd. Er
                      is een gedeelde taal over wat contractmanagement is, waar
                      het begint en eindigt, en wie waarvoor verantwoordelijk
                      is. Er is doorgaans ook een systematiek om verschillen in
                      aanpak per contracttype te onderbouwen.
                    </p>
                    <p
                      style="
                        font-size: 14px;
                        font-style: italic;
                        color: #8591a1;
                      "
                    >
                      Duiding: dit is het niveau waarop contractmanagement voor
                      het eerst echt herhaalbaar wordt. De organisatie kan nu
                      sturen op consistentie en kwaliteit, omdat het 'systeem'
                      zichtbaar is. Een veelvoorkomende volgende stap is het
                      toevoegen van meetbaarheid: niet alleen doen wat is
                      afgesproken, maar ook aantonen wat het oplevert.
                    </p>
                  </div>
                </div>

                <div
                  style="
                    border: #e2e8f0;
                    background-color: #f8f9fc;
                    width: 93%;
                    border-radius: 8px;
                    border: 1px, solid, #e2e8f0;
                    padding-top: 2rem;
                    padding-right: 2rem;
                    display: flex;
                    margin-top: 1rem;
                    gap: 2rem;
                    height: fit-content;
                  "
                >
                  <div
                    style="
                      display: flex;
                      width: 20%;
                      padding-left: 0.5rem;
                      flex-direction: column;
                      align-items: center;
                    "
                  >
                    <div
                      style="
                        background-color: #06b6d4;
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 100%;
                      "
                    ></div>
                    <p
                      style="color: #06b6d4; font-weight: 600; font-size: 14px"
                    >
                      MANAGED
                    </p>
                  </div>

                  <div style="width: 80%">
                    <p
                      style="
                        font-size: 16px;
                        font-weight: 600;
                        color: #334155;
                        margin: 0 0 1px;
                      "
                    >
                      Gemanaged
                    </p>
                    <p style="font-size: 14px; color: #64748b">
                      De organisatie meet de werking van contractmanagement
                      (bijvoorbeeld via KPI's/PI's, doorlooptijden, naleving,
                      gerealiseerde effecten) en gebruikt die informatie om bij
                      te sturen. Evaluatie en verbetering zijn onderdeel van een
                      vaste cyclus en worden gekoppeld aan
                      organisatiedoelstellingen.
                    </p>
                    <p
                      style="
                        font-size: 14px;
                        font-style: italic;
                        color: #8591a1;
                      "
                    >
                      Duiding: op dit niveau verschuift contractmanagement van
                      'proces volgen' naar 'proces sturen'. De waarde zit in
                      voorspelbare prestaties, beter risicobeheer en aantoonbare
                      bijdrage aan financiën, compliance en tevredenheid.
                    </p>
                  </div>
                </div>

                <div
                  style="
                    border: #e2e8f0;
                    background-color: #f8f9fc;
                    width: 93%;
                    border-radius: 8px;
                    border: 1px, solid, #e2e8f0;
                    padding-top: 2rem;
                    padding-right: 2rem;
                    display: flex;
                    margin-top: 1rem;
                    gap: 2rem;
                    height: fit-content;
                  "
                >
                  <div
                    style="
                      display: flex;
                      width: 20%;
                      padding-left: 0.5rem;
                      flex-direction: column;
                      align-items: center;
                    "
                  >
                    <div
                      style="
                        background-color: #16a34a;
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 100%;
                      "
                    ></div>
                    <p
                      style="color: #16a34a; font-weight: 600; font-size: 14px"
                    >
                      OPTIMISED
                    </p>
                  </div>

                  <div style="width: 80%">
                    <p
                      style="
                        font-size: 16px;
                        font-weight: 600;
                        color: #334155;
                        margin: 0 0 1px;
                      "
                    >
                      Geoptimaliseerd
                    </p>
                    <p style="font-size: 14px; color: #64748b">
                      Contractmanagement is continu in ontwikkeling en maakt
                      gebruik van best practices, standaardisatie en waar
                      passend moderne technologie (bijvoorbeeld
                      workflow-automatisering, data-analyse en ondersteunende
                      technieken zoals AI/RPA). Verbetering is niet alleen
                      reactief, maar ook proactief en scenario-gedreven.
                    </p>
                    <p
                      style="
                        font-size: 14px;
                        font-style: italic;
                        color: #8591a1;
                      "
                    >
                      Duiding: dit niveau draait om wendbaarheid: snel kunnen
                      aanpassen aan verandering zonder verlies van beheersing.
                      De organisatie kan variatie in contracten en
                      leveranciersrelaties bewust managen en leert structureel
                      van data en ervaringen.
                    </p>
                  </div>
                </div>

                <!-- MATURITY LEVELS DEFINITION END  -->

                <div style="display: flex; align-items: center; gap: 10px">
                  <p
                    style="
                      font-size: 14px;
                      font-weight: 500;
                      color: #94a3b8;
                      display: block;
                      width: 100%;
                      text-transform: uppercase;
                    "
                  >
                    Jouw scores per onderdeel
                  </p>
                  <div
                    style="
                      height: 0.0625rem;
                      width: 80%;

                      background-color: #e2e8f0;
                    "
                  ></div>
                </div>

                <!-- GRAPH IS HERE  -->

                <div style="display: flex; align-items: center; gap: 10px">
                  <p
                    style="
                      font-size: 14px;
                      font-weight: 500;
                      color: #94a3b8;
                      display: block;
                      width: 100%;
                      text-transform: uppercase;
                    "
                  >
                    Hoe duid je de uitkomsten?
                  </p>
                  <div
                    style="
                      height: 0.0625rem;
                      width: 80%;

                      background-color: #e2e8f0;
                    "
                  ></div>
                </div>

                <div
                  style="
                    background-color: #f8f9fc;
                    width: 93%;
                    border-radius: 8px;
                    border: 1px, solid, transparent;
                    padding: 1rem;
                    display: flex;
                    gap: 2rem;
                    height: fit-content;
                  "
                >
                  <div
                    style="
                      background-color: #d4006a;
                      width: 2rem;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 2rem;
                      border-radius: 100%;
                      color: white;
                    "
                  >
                    1
                  </div>

                  <p style="width: 80%; color: #475569; font-size: 0.875rem">
                    <span style="color: #1b1e4b; font-weight: 600">
                      Kijk naar samenhang tussen de diverse domeinen.</span
                    >
                    Een organisatie kan bijvoorbeeld 'gedefinieerde' processen
                    hebben, maar als beleid ontbreekt of proceseigenaarschap
                    niet duidelijk is belegd, blijft de uitvoering kwetsbaar en
                    persoonsafhankelijk.
                  </p>
                </div>

                <div
                  style="
                    background-color: #f8f9fc;
                    width: 93%;
                    border-radius: 8px;
                    margin-top: 1rem;
                    border: 1px, solid, transparent;
                    padding: 1rem;
                    display: flex;
                    gap: 2rem;
                    height: fit-content;
                  "
                >
                  <div
                    style="
                      background-color: #d4006a;
                      width: 2rem;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 2rem;
                      border-radius: 100%;
                      color: white;
                    "
                  >
                    2
                  </div>

                  <p style="width: 80%; color: #475569; font-size: 0.875rem">
                    <span style="color: #1b1e4b; font-weight: 600">
                      Let op onbalans: waar zit de zwakste schakel?.</span
                    >
                    Volwassenheid wordt in de praktijk vaak begrensd door het
                    laagst ontwikkelde element. Een goed proces zonder meet- en
                    verbetercyclus blijft 'gedefinieerd' en groeit niet door
                    naar 'gemanaged'.
                  </p>
                </div>

                <div
                  style="
                    background-color: #f8f9fc;
                    width: 93%;
                    border-radius: 8px;
                    border: 1px, solid, transparent;
                    padding: 1rem;
                    margin-top: 1rem;
                    display: flex;
                    gap: 2rem;
                    height: fit-content;
                  "
                >
                  <div
                    style="
                      background-color: #d4006a;
                      width: 2rem;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 2rem;
                      border-radius: 100%;
                      color: white;
                    "
                  >
                    3
                  </div>

                  <p style="width: 80%; color: #475569; font-size: 0.875rem">
                    <span style="color: #1b1e4b; font-weight: 600">
                      Duid verschillen per deelgebied als bewuste keuzes of als
                      historisch gegroeid.</span
                    >
                    Verschillen tussen onderdelen (bijvoorbeeld 'mens' hoger dan
                    'systeem', of 'portfolio' lager dan 'proces') zijn
                    waardevolle aanwijzingen. Ze laten zien waar de organisatie
                    al investeert en waar blinde vlekken zitten.
                  </p>
                </div>

                <div
                  style="
                    background-color: #f8f9fc;
                    width: 93%;
                    border-radius: 8px;
                    border: 1px, solid, transparent;
                    padding: 1rem;
                    display: flex;
                    margin-top: 1rem;
                    gap: 2rem;
                    height: fit-content;
                  "
                >
                  <div
                    style="
                      background-color: #d4006a;
                      width: 2rem;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 2rem;
                      border-radius: 100%;
                      color: white;
                    "
                  >
                    4
                  </div>

                  <p style="width: 80%; color: #475569; font-size: 0.875rem">
                    <span style="color: #1b1e4b; font-weight: 600">
                      Vertaal het niveau naar risico's en kansen.</span
                    >
                    Lagere niveaus wijzen vaak op continuïteits- en
                    compliance-risico's; hogere niveaus maken sturing op waarde
                    mogelijk (kosten, prestaties, risico, tevredenheid). Het
                    verslag wordt sterker wanneer per thema expliciet wordt
                    gemaakt: wat betekent dit niveau voor beheersing en voor
                    waardecreatie?
                  </p>
                </div>

                <div
                  style="
                    background-color: #f8f9fc;
                    width: 93%;
                    border-radius: 8px;
                    border: 1px, solid, transparent;
                    padding: 1rem;
                    display: flex;
                    margin-top: 1rem;
                    gap: 2rem;
                    height: fit-content;
                  "
                >
                  <div
                    style="
                      background-color: #d4006a;
                      width: 2rem;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 2rem;
                      border-radius: 100%;
                      color: white;
                    "
                  >
                    5
                  </div>

                  <p style="width: 80%; color: #475569; font-size: 0.875rem">
                    <span style="color: #1b1e4b; font-weight: 600">
                      Gebruik de uitkomst als startpunt voor prioritering, niet
                      als eindconclusie.</span
                    >
                    De quick scan is een diagnose-instrument. De logische
                    vervolgstap is het bepalen van een realistisch
                    doelvolwassenheidsniveau per contracttype/portfolio en het
                    formuleren van verbeteracties die passen bij de
                    organisatiecontext.
                  </p>
                </div>

                <div style="display: flex; align-items: center; gap: 10px">
                  <p
                    style="
                      font-size: 14px;
                      font-weight: 500;
                      color: #94a3b8;
                      display: block;
                      width: 100%;
                      text-transform: uppercase;
                    "
                  >
                    Belangrijke interpretatienotities
                  </p>
                  <div
                    style="
                      height: 0.0625rem;
                      width: 70%;

                      background-color: #e2e8f0;
                    "
                  ></div>
                </div>

                <div
                  style="
                    height: fit-content;
                    padding: 1rem;
                    width: 93%;
                    border-radius: 15px;

                    border: 1px solid #fcd34d;
                    background-color: #fff8e1;
                  "
                >
                  <h1
                    style="
                      font-size: 0.875rem;
                      text-transform: uppercase;
                      color: #92400e;
                    "
                  >
                    Houd rekening met het volgende
                  </h1>

                  <ul
                    style="
                      display: flex;
                      flex-direction: column;
                      gap: 1rem;
                      li::marker {
                        color: #92400e;
                      }
                    "
                  >
                    <li style="color: #92400e; font-size: 0.875rem">
                      <span style="font-weight: 600"
                        >Terminologie kan per organisatie verschillen.</span
                      >
                      Het CATS Control Model gebruikt specifieke definities
                      (bijvoorbeeld voor 'proceseigenaarschap' of 'contract
                      control'). In het verslag is het raadzaam om expliciet te
                      maken hoe deze termen zijn geïnterpreteerd in de context
                      van de organisatie.
                    </li>
                    <li style="color: #92400e; font-size: 0.875rem">
                      <span style="font-weight: 600"
                        >Minimale bezetting en representativiteit.</span
                      >
                      De quick scan is het meest bruikbaar wanneer de antwoorden
                      tot stand komen met vertegenwoordiging vanuit
                      beleid/proceseigenaarschap, uitvoering en relevante
                      stakeholders. Een te smalle groep kan leiden tot een
                      eenzijdig beeld.
                    </li>
                  </ul>
                </div>

                <div
                  style="
                    height: fit-content;
                    padding: 0.8rem;
                    width: 93%;
                    border-radius: 15px;
                    margin-top: 1rem;
                    border: 1px solid #bfdbfe;
                    background-color: #eff6ff;
                  "
                >
                  <p style="font-size: 0.875rem; color: #1e40af">
                    Je kunt met dit aangemelde e-mail adres
                    <span style="font-weight: 600">3 keer</span> de quickscan
                    uitvoeren. Dus als je wil nadenken over de resultaten en
                    misschien een vraag anders had willen beantwoorden dan kan
                    dat alsnog. De reden dat het maar drie keer kan is gelegen
                    in het feit dat er altijd individuen zijn die zullen
                    proberen met e-mails spams te veroorzaken. Het is technisch
                    niet mogelijk om meer dan 3 keer de test te doen met een
                    aangemeld en geverifieerd e-mail adres.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style="
                  padding: 16px 32px;
                  background-color: #f1f5f9;
                  text-align: center;
                "
              >
                <p style="font-size: 12px; color: #94a3b8; margin: 0">
                  &copy; ${new Date().getFullYear()} CM Partners · Utrecht,
                  Netherlands
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

        
        `,
    };
}
