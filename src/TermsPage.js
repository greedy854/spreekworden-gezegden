import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Assuming the provided CSS is in App.css or relevant CSS file
import home from "./assets/home.svg";
import rss from "./assets/heart.svg";
import settings from "./assets/settings.svg";

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
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
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
              <img src={rss} alt="Heart Icon" className="heart-icon" />
            </Link>
          </div>
          <div
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
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
