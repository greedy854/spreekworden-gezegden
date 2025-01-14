import "./App.css";
import { useState, useEffect } from "react";
import { Card, Button, Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for routing
import home from "./assets/home.svg";
import rss from "./assets/heart.svg";
import settings from "./assets/settings.svg";
import info from "./assets/info.svg";
import quiz from "./assets/quiz.svg";

const TermsPage = () => {
  const [active, setActive] = useState(0); // Initially, the "Home" icon should be active

  return (
    <div className="App2">
      {/* Logo Section */}
      <div className="logo-header">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>

      <div className="content-container">
        {/* Terms Content */}
        <div className="card">
          <div className="card-body">
            <h2>Gebruikersvoorwaarden</h2>
            <p className="card-text">
              <h2>
                Spekende Spreken – Proverbs Paradise Gebruikersvoorwaarden –
                Algemene voorwaarden{" "}
              </h2>
              <p>
                Wij zijn Sprekende Spreuken - Proverbs Paradise (hierna: “wij”,
                “ons” of “SS/PP”): de ontwikkelaar en exploitant/aanbieder van
                een website/ mobiele applicatie waarin onder andere illustraties
                van spreekwoorden en gezegdes en quotes van bekende personen in
                zeven talen ter beschikking worden gesteld. Dit zijn de
                gebruikersvoorwaarden die van toepassing zijn wanneer jij onze
                app gebruikt. Het gebruik van de app start op het moment dat je
                de app installeert.{" "}
              </p>
              <h2>ARTIKEL 1 - DEFINITIES </h2>
              <p>
                In deze gebruikersvoorwaarden worden de volgende definities
                gehanteerd:{" "}
              </p>
              <p>
                . SS/PP-abonnement: een overeenkomst waarmee je toegang krijgt
                tot het specifieke deel van de inhoud die via de
                SS/PP-webstie/app beschikbaar wordt gesteld.{" "}
              </p>
              <p>
                .SS/PP-website+app: de website en later ook mobiele applicatie
                aangeboden door SS/PP, die je momenteel gebruikt of van plan
                bent te gaan gebruiken. Het omvat:{" "}
              </p>
              <p>. De software die nodig is om de SS/PP-app te gebruiken.</p>
              <p>
                . De inhoud, zoals spreekwoorden en gezegden, tekst en
                afbeeldingen.
              </p>
              <p>
                . Indien van toepassing, de online opslag van gegevens over jouw
                gebruik van de SS/PP-app
              </p>
              <p>
                . Alle wijzigingen die SS/PP aanbrengt in de bovengenoemde
                elementen, inclusief toevoegingen of verwijderingen.
              </p>
              <p>
                . SS/PP: Sprekende Spreuken – Proverbs Paradise, een bedrijf
                gevestigd in Hilversum en ingeschreven bij de Kamer van
                Koophandel onder nummer 90109740.{" "}
              </p>
              <p>
                . SS/PP-website: de website van SS/PP, momenteel bekend als
                sprekendespreuken.nl.{" "}
              </p>
              <p>. SS/PP-emailadres: sprekendespreuken@gmail.com.</p>
              <h2>ARTIKEL 2 – TOEPASSELIJKHEID </h2>
              <p>
                Deze regels (gebruikersvoorwaarden) gelden zodra je de SS/PP-app
                gebruikt en/of een SS/PP-abonnement bij SS/PP afsluit. Als je
                niet helemaal en onvoorwaardelijk akkoord gaat met deze regels
                (gebruikersvoorwaarden), mag je de SS/PP-app niet installeren
                en/of gebruiken.{" "}
              </p>
              <h2>ARTIKEL 3 - INSTALLATIE VAN DE SS/PP-website+app </h2>
              <p>
                1: Bij de implementatie van de SS/PP-website+app wordt verwacht
                dat je: * beschikt over apparatuur waarvoor je de juiste rechten
                hebt om software te installeren; en * een account gebruikt
                waarvoor je alle benodigde accountinformatie beheert (of indien
                je 15 jaar of jonger bent, toestemming hebt van je ouders of
                wettelijke voogd).{" "}
              </p>
              <p>
                2: Je mag de app alleen voor persoonlijk gebruik gebruiken en
                anderen geen toegang geven tot de app via je account.{" "}
              </p>
              <p>
                3: Je verklaart dat alle informatie die je verstrekt, of hebt
                verstrekt, bij het aanmaken van een account, correct, volledig
                en up-to-date is en je zal je accountgegevens bijwerken om deze
                actueel te houden.{" "}
              </p>
              <p>
                4: Je bent zelf verantwoordelijk voor het vertrouwelijk houden
                van uw gebruikersnamen en wachtwoorden. SS/PP is niet
                aansprakelijk voor misbruik van jouw gebruikersnamen,
                wachtwoorden of andere identificatiemiddelen tijdens het gebruik
                van de SS/PP-app. SS/PP mag ervan uitgaan dat je de gebruiker
                bent die zich aanmeldt met een van je identificatiemiddelen, en
                de gevolgen hiervan zijn voor uw eigen rekening. Als je vermoedt
                dat een van jouw identificatiemiddelen is misbruikt, dien je dit
                onmiddellijk te melden aan SS/PP via de contactgegevens vermeld
                in artikel 12 van deze gebruiksvoorwaarden.{" "}
              </p>
              <p>
                5: SS/PP kan het aantal apparaten beperken waarop je een account
                kunt gebruiken. Als je op meer apparaten inlogt dan het
                toegestane aantal, wordt u automatisch uitgelogd op andere
                apparaten. U kunt echter altijd ten minste twee apparaten
                gebruiken met jouw account.{" "}
              </p>
              <p>
                6: Je zal geen accounts op andere wijze aanmaken via de SS/PP
                -app dan door je eigen gegevens in te voeren. In het bijzonder
                zal je geen apparaat, script, bot, spider, crawler of andere
                techniek gebruiken (!).{" "}
              </p>
              <p>
                7: Het is niet toegestaan om de SS/PP -app of de servers en/of
                netwerken die ermee verbonden zijn te verstoren of te hinderen,
                bijvoorbeeld door virussen, spyware, malware of andere
                schadelijke of ontwrichtende code (!).{" "}
              </p>
              <h2>ARTIKEL 4 – WAT SS/PP DOET </h2>
              <p>
                1: SS/PP zal haar best doen om je 24 uur per dag en zeven (7)
                dagen per week een goede app aan te bieden. SS/PP kan je echter
                geen garanties geven:{" "}
              </p>
              <p>
                . Er kunnen altijd (onbekende) fouten in de software zitten die
                wordt gebruikt. Als we fouten ontdekt hebben of zodra fouten aan
                ons gemeld worden, zullen we proberen om deze zo snel als
                redelijkerwijs mogelijk is te verhelpen. We houden daarbij
                zoveel mogelijk rekening met de ernst van de fout. Je kunt een
                foutmelding doen door een e-mail te verzenden naar
                sprekendespreuken@gmail.com.{" "}
              </p>
              <p>
                . Om de SS/PP-app of website te kunnen gebruiken heb je hardware
                (een tablet, telefoon, etc.) nodig en een internetverbinding (om
                content te downloaden/te zien). SS/PP is niet verantwoordelijk
                voor de apparatuur die jij gebruik en ook niet verantwoordelijk
                voor de beschikbaarheid van internet.{" "}
              </p>
              <p>
                2: SS/PP mag haar servers tijdelijk uitzetten, bijvoorbeeld voor
                onderhoud aan de software of voor het installeren van upgrades
                of updates. Daardoor kun je dan de SS/PP -app niet downloaden en
                niet of maar beperkt gebruiken. SS/PP zal haar uiterste best
                doen om de SS/PP -app niet tijdens piekuren stil te zetten.
                SS/PP kan echter niet garanderen dat dat altijd zal lukken.{" "}
              </p>
              <p>
                3: SS/PP behoudt zich het recht voor om de SS/PP -app te
                wijzigen en dus ook om bepaalde eigenschappen, inhoud en
                functionaliteiten van de SS/PP -app te wijzigen, te verwijderen
                of toe te voegen.{" "}
              </p>
              <h2>ARTIKEL 5 – KOSTEN & PRIJZEN </h2>
              <p>
                1: De SS/PP -app omvat zowel een gratis als een betaald
                gedeelte. Een betaald SS/PP-abonnement kan worden verkregen
                tegen de op dat moment geldende prijzen zoals vastgesteld door
                de SS/PP-website+app.{" "}
              </p>
              <p>
                2: Alle vermelde prijzen door de SS/PP-website+app (in de SS/PP
                -app / op de SS/PP -website/ etc.) of die vermeld worden in een
                bestelbevestiging van SS/PP zijn inclusief BTW en andere
                wettelijke belastingen of heffingen, tenzij anders aangegeven.{" "}
              </p>
              <p>
                3: SS/PP behoudt zich het recht voor om haar prijzen op elk
                moment aan te passen. Een prijswijziging treedt in werking op
                (1) het moment dat een lopend abonnement de twaalf (12-24-36)
                maanden overschrijdt of indien dit later is, (ii) vijf (5) weken
                na de aankondiging van de prijswijziging. Als je de nieuwe prijs
                niet wenst te betalen, dien je je SS/PP-abonnement op te zeggen.{" "}
              </p>
              <p>
                4: Bovendien is SS/PP gerechtigd haar prijzen eenmaal per
                kalenderjaar aan te passen aan het inflatiepercentage van het
                voorgaande jaar, zoals gepubliceerd door het Centraal Bureau
                voor de Statistiek (CBS). Een naheffing is hierbij niet van
                toepassing.{" "}
              </p>
              <h2>ARTIKEL 6 - BETALING EN INCASSOKOSTEN </h2>
              <p>
                1: Voor aanvang van het SS/PP-abonnement dien je de
                overeengekomen prijs voor de eerste periode van jouw SS/PP
                -abonnement, afhankelijk van het soort SS/PP -abonnement dat je
                hebt afgesloten, over te maken aan SS/PP. Afhankelijk van het
                soort SS/PP -abonnement, zal SS/PP vervolgens telkens per maand
                of per jaar het over de volgende periode(n) verschuldigde bedrag
                per automatische incasso van jouw rekening af laten schrijven.{" "}
              </p>
              <p>
                2: Wij versturen je zeven (7) dagen voordat het bedrag voor jouw
                SS/PP -abonnement automatisch van je rekening geschreven wordt
                een vooraankondiging van de incasso per e-mail. In deze e-mail
                staat het te incasseren bedrag en de incassodatum.{" "}
              </p>
              <p>
                3: SS/PP kan ook op een andere manier je betaling afspreken
                (bijvoorbeeld per creditcard, PayPal, Appstore, Playstore of
                anderszins).{" "}
              </p>
              <p>
                4: Je schiet toerekenbaar te kort als je niet betaalt voor of op
                de uiterste betaaldatum.{" "}
              </p>
              <p>
                5: Als je na twee of meer betalingsherinneringen niet hebt
                betaald, kan SS/PP het SS/PP -abonnement beëindigen. Ook kan
                SS/PP vanaf dat moment de wettelijk toegestane incassokosten in
                rekening brengen en/of de vordering uit handen geven aan een
                incassobureau. Ondanks de beëindiging blijf je de
                abonnementskosten verschuldigd tot het einde van de looptijd van
                je abonnement.{" "}
              </p>
              <h2>
                ARTIKEL 7 – DUUR, BEËINDIGING EN DE GEVOLGEN VAN BEËINDIGING{" "}
              </h2>
              <p>
                1: In de bestelbevestiging van SS/PP staat hoelang je SS/PP
                -abonnement duurt en, eventueel, van welke inhoud je gebruik
                kunt maken.{" "}
              </p>
              <p>
                2: Een abonnement dat voor een bepaalde duur is afgesloten,
                wordt na afloop van de overeengekomen periode stilzwijgend
                verlengd, tenzij het abonnement voortijdig is stopgezet zoals
                hierna beschreven in lid 4.{" "}
              </p>
              <p>
                3: Als je zelf het abonnement stopzet, of wanneer SS/PP je
                toegang tot de app opschort in geval van feitelijk of
                vermoedelijk onjuist gebruik, ga je ermee akkoord dat SS/PP niet
                aansprakelijk of verantwoordelijk zal zijn en dat SS/PP geen
                enkel bedrag dat reeds door je is betaald, zal restitueren.{" "}
              </p>
              <p>
                4: Als je een doorlopend Abonnement hebt afgesloten kun je dat
                door opzeggen door een e-mail te verzenden aan
                sprekendespreuken@gmail.com . Er geldt een opzegtermijn van een
                maand.{" "}
              </p>
              <p>
                5: SS/PP kan op elk moment het SS/PP -abonnement met
                onmiddellijke ingang beëindigen, of de toegang tot (onderdelen
                van) de SS/PP -app (tijdelijk) opschorten als je de overeenkomst
                of deze gebruikersvoorwaarden schendt, of als SS/PP
                redelijkerwijs vermoedt dat je de overeenkomst of deze
                gebruikersvoorwaarden schendt. SS/PP zal in dat geval niet
                aansprakelijk of verantwoordelijk zijn en zal geen enkel bedrag
                dat reeds door jou is betaald restitueren.{" "}
              </p>
              <p>
                6: SS/PP kan, naar eigen inzicht, een Abonnement voor een door
                haar bepaalde periode (tijdelijk) opzeggen of schorsen, of met
                onmiddellijke ingang beëindigen. In dat geval zal SS/PP je een
                redelijke compensatie bieden.{" "}
              </p>
              <h2>ARTIKEL 8 - INTELLECTUELE EIGENDOMSRECHTEN </h2>
              <p>
                1: SS/PP verleent je via deze gebruikersvoorwaarden een licentie
                om de SS/PP-website+app te gebruiken. De SS/PP-website+app wordt
                dus niet verkocht of overgedragen aan jou. Deze licentie betreft
                een persoonlijke, niet-exclusieve toestemming om de SS/PP-
                SS/PP-website+app te installeren en te gebruiken zoals
                uiteengezet in deze gebruikersvoorwaarden.{" "}
              </p>
              <p>
                2: Je verkrijgt de gebruiksrechten zoals beschreven in deze
                gebruikersvoorwaarden op voorwaarde dat je jouw verplichtingen
                uit deze gebruikersvoorwaarden naleeft. Onverminderd de
                eventuele rechten of rechtsmiddelen die SS/PP op grond van de
                wet of deze gebruikersvoorwaarden heeft, geeft elke schending
                van deze voorwaarden door jou SS/PP het recht om jouw verdere
                gebruik van en/of toegang tot de SS/PP-website+app te ontzeggen.{" "}
              </p>
              <p>
                3: De licentie is beperkt tot de intellectuele eigendomsrechten
                van SS/PP en haar licentiegevers in de SS/PP-website+app en
                omvat geen andere rechten.{" "}
              </p>
              <p>
                4: Alle rechten die hierin niet expliciet aan jou worden
                verleend, zijn voorbehouden aan SS/PP. SS/PP behoudt zich alle
                rechten, titels en belangen in en op de SS/PP-website+app voor,
                inclusief maar niet beperkt tot alle auteursrechten,
                handelsmerken, bedrijfsgeheimen, handelsnamen, eigendomsrechten,
                octrooien, titels, codes, audiovisuele effecten, thema’s,
                karakters, verhalen, instellingen, illustraties, muziekwerken en
                morele rechten, al dan niet geregistreerd en alle toepassingen
                daarvan.{" "}
              </p>
              <p>
                5: Tenzij dwingende toepasselijke regelgeving dat uitdrukkelijk
                toestaat, zal je niet zonder voorafgaande schriftelijke
                toestemming van SS/PP: (i) de SS/PP-website+app commercieel
                exploiteren; (ii) de SS/PP-website+app, kopieën daarvan, of
                eventuele wachtwoorden of gebruikersnamen met betrekking tot de
                SS/PP-website+app distribueren, leasen, in licentie geven,
                verkopen, verhuren, uitlenen, overdragen of anderszins aan een
                derde toewijzen; (iii) de SS/PP-website+app op enige wijze of
                via enig medium geheel of gedeeltelijk kopiëren, reproduceren of
                distribueren of op welke wijze dan ook decompileren, demonteren
                of reverse-engineeren; (iv) de SS/PP-website+app beschikbaar
                maken voor publiek of op een netwerk zodat deze gedownload kan
                worden door meerdere gebruikers; (v) productinformatie,
                auteursrechten, intellectuele eigendom,
                auteursrechtvermeldingen, juridische kennisgevingen of andere
                labels van de oorsprong of bron van de SS/PP-website+app
                verwijderen, wijzigen of verbergen; (vi) de SS/PP-website+app
                wijzigen, verbeteren of een afgeleid werk van de
                SS/PP-website+app maken.{" "}
              </p>
              <h2>ARTIKEL 9 – PRIVACY </h2>
              <p>
                Jouw privacy is belangrijk voor ons. Daarom worden jouw
                persoonsgegevens zorgvuldig verwerkt en beveiligd. SS/PP
                verwerkt je persoonsgegevens in overeenstemming met haar
                Privacyverklaring, die je kunt vinden in de SS/PP-website+app.
                Door akkoord te gaan met deze gebruikersvoorwaarden stem je ook
                in met de verwerking van jouw persoonsgegevens zoals omschreven
                in de privacyverklaring. In het privacyverklaring van SS/PP kun
                je lezen hoe SS/PP omgaat met jouw persoonsgegevens.{" "}
              </p>
              <h2>ARTIKEL 10 - AANSPRAKELIJKHEID </h2>
              <p>
                1: Je stem hierbij in en garandeert dat jouw gebruik van de
                SS/PP-website+app geen inbreuk maakt op de rechten van derden,
                waaronder, maar niet beperkt tot, intellectuele
                eigendomsrechten, morele rechten en privacy rechten.{" "}
              </p>
              <p>
                2: Je stemt ermee in om SS/PP en diens leveranciers te vrijwaren
                en schadeloos te stellen voor alle mogelijke schade, claims,
                kosten en uitgaven (inclusief advocaatkosten) die voortvloeien
                uit jouw gebruik van de SS/PP-website+app.{" "}
              </p>
              <p>
                3: SS/PP heeft het recht, maar niet de verplichting, om de
                SS/PP-website+app op elk moment bij te werken, upgraden of aan
                te passen, evenals data of informatie die in de
                SS/PP-website+app is opgeslagen te wijzigen of te verwijderen.{" "}
              </p>
              <p>
                4: Behalve bij schade veroorzaakt door nalatigheid of
                opzettelijke fouten, zal de totale aansprakelijkheid van SS/PP
                en diens leveranciers nooit de door jou betaalde prijs voor het
                gebruik van de SS/PP-website+app overschrijden. Als je periodiek
                betaalt voor het gebruik van de SS/PP-website+app, is de
                aansprakelijkheid beperkt tot de door jou betaalde vergoeding
                voor de periode waarin de aansprakelijkheid scheppende
                gebeurtenis heeft plaatsgevonden. Deze
                aansprakelijkheidsbeperking geldt voor alle soorten
                aansprakelijkheid van SS/PP en diens leveranciers, ongeacht de
                oorzaak. De beperking is van toepassing op zowel contractuele
                als niet-contractuele aansprakelijkheid.{" "}
              </p>
              <p>
                5: Om schade te kunnen claimen, dien je deze, evenals de reden
                waarom je vindt dat SS/PP tekortschiet, zo snel als
                redelijkerwijs mogelijk te melden na ontdekking ervan. Artikel
                6:89 BW is onverkort van toepassing.{" "}
              </p>
              <h2>ARTIKEL 11 – TOEPASSELIJK RECHT </h2>
              <p>
                1: Op deze gebruikersvoorwaarden is Nederlands recht van
                toepassing.{" "}
              </p>
              <p>
                2: SS/PP behoudt zich het recht voor om deze
                gebruikersvoorwaarden periodiek aan te passen. Als je het niet
                eens bent met de wijzigingen, dien je ons dit binnen zeven (7)
                dagen na de kennisgeving schriftelijk te melden. SS/PP zal
                vervolgens beslissen of je Abonnement ongewijzigd blijft of
                beëindigd wordt, waardoor je geen toegang meer hebt tot de
                SS/PP-website+app. Als je voor je SS/PP-abonnement hebt betaald,
                heb je in dat geval recht op een gedeeltelijke terugbetaling,
                evenredig aan de resterende tijd van je SS/PP-abonnement.{" "}
              </p>
              <p>
                3: Mocht een deel van deze gebruikersvoorwaarden nietig of
                vernietigbaar worden verklaard, dan blijft de rest van de
                voorwaarden onverminderd van kracht.{" "}
              </p>
              <p>
                4: Je kunt je verplichtingen onder deze gebruikersvoorwaarden
                niet overdragen aan derden zonder voorafgaande schriftelijke
                toestemming van SS/PP.{" "}
              </p>
              <p>
                5: SS/PP heeft het recht om de verplichtingen en rechten uit de
                overeenkomst met jou aan een derde partij over te dragen. In dat
                geval heb je het recht om de overeenkomst met SS/PP te
                beëindigen, vooral als de overdracht buiten de groep van SS/PP
                plaatsvindt.
              </p>
              <p>
                6: Nederlands recht is van toepassing op alle overeenkomsten met
                jou, je Abonnement en deze gebruikersvoorwaarden. Bij eventuele
                geschillen zullen SS/PP en jij eerst proberen het conflict in
                onderling overleg op te lossen. Als dit niet lukt, kan het
                geschil worden voorgelegd aan de bevoegde Nederlandse rechter.{" "}
              </p>
              <h2>ARTIKEL 12 – CONTACT</h2>
              <p>
                1: Voor vragen over deze gebruikersvoorwaarden kun je contact
                met ons opnemen via sprekendespreuken@gmail.com of via het
                contactformulier op onze website/ in onze app.{" "}
              </p>
              <h3>Versie: februari 2025 </h3>
            </p>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <div
            className={active === 0 ? "active" : ""}
            onClick={() => setActive(0)}
          >
            <Link to="/">
              <img src={home} alt="Home" />
            </Link>
          </div>
          <div
            className={active === 1 ? "active" : ""}
            onClick={() => setActive(1)}
          >
            <Link to="/about-us">
              <img src={info} alt="About us" />
            </Link>
          </div>
          <div
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
          >
            <Link to="/">
              <img src={rss} alt="Heart Icon" className="heart-icon" />
            </Link>
          </div>
          <div
            className={active === 3 ? "active" : ""}
            onClick={() => setActive(3)}
          >
            <Link to="/quiz">
              <img src={quiz} alt="Quiz" />
            </Link>
          </div>
          <div
            className={active === 4 ? "active" : ""}
            onClick={() => setActive(4)}
          >
            <Link to="/settings">
              <img src={settings} alt="Settings" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TermsPage;
