import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Assuming the provided CSS is in App.css or relevant CSS file
import home from './assets/home.svg';
import rss from './assets/heart.svg';
import settings from './assets/settings.svg';

const PrivacyPage = () => {
  const [active, setActive] = useState(1); // Initially, the "Heart" (rss) icon should be active

  return (
    <div className="App2">
      {/* Logo Section */}
      <div className="logo-header">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>

      <div className="content-container">
        {/* Privacy Content */}
        <div className="card">
          <div className="card-body">
            <h2>Privacyverklaring</h2>
            <p className="card-text">
             <p>Wij zijn Sprekende Spreuken – Proverbs Paradise (hierna te noemen "wij", "ons", "Sprekende Spreuken" of “SS/PP”) en wij zijn verantwoordelijk voor de verwerking van persoonsgegevens die plaatsvinden tijdens het gebruik van onze applicatie en website. Ons Kamer van Koophandel nummer is: 90109740.</p>
             <p>In deze privacyverklaring beschrijven we hoe we omgaan met jouw persoonsgegevens en hoe we jouw privacy beschermen en respecteren als gebruiker van onze applicatie ("SS-PP") en/of website www.sprekendespreuken.nl ("SS/PP-website").</p>
             <p>We behandelen jouw persoonsgegevens met de grootst mogelijke zorg. Hierbij houden we ons aan de Algemene Verordening Gegevensbescherming (AVG) en andere relevante wet- en regelgeving.</p>
             <h2>Welke persoonsgegevens verwerken wij?</h2>
             <p>Tijdens het installeren en gebruiken van de App en onze Website, en bij het invullen van het contactformulier, kunnen de volgende persoonsgegevens worden verzameld en verwerkt:</p>
             <p>. Voor- en achternaam.</p>
             <p>. Naam, e-mailadres, geboortedatum, land en taal.</p>
             <p>. Inloggegevens.</p>
             <p>. Informatie over je gebruik van de App en/of onze Website.</p>
             <p>. Loggegevens zoals IP-adres, marketing-ID’s en push-notificatietokens van je apparaat, browsertype en datum en tijd van de verzoeken die je doet wanneer je onze Website bezoekt;</p>
             <p>. Bestel- en betalingsinformatie.</p>
             <h2>Waarom gebruiken wij jouw persoonsgegevens?</h2>
             <p>Wij verwerken jouw persoonsgegevens om verschillende redenen:</p>
             <p>. Om onze diensten te verbetere.</p>
             <p>. Om je in staat te stellen in te loggen en onze app en website te gebruiken.</p>
             <p>. Voor het aangaan en uitvoeren van overeenkomsten en om contact te onderhouden met klanten.</p>
             <p>. Om ervoor te zorgen dat de inhoud op de meest optimale manier wordt getoond op jouw apparaat.</p>
             <p>. Voor de afhandeling van klachten en geschillen.</p>
             <p>. Om te voldoen aan wettelijke verplichtingen.</p>
             <p>. Voor het versturen van (promotionele) e-mails.</p>
             <p>. Om je van dienst te zijn via onze klantenservice.</p>
             <p>. Voor het uitvoeren van (markt)onderzoek.</p>
             <p>. Voor intern beheer en administratieve doeleinden.</p>
             <h2>Op welke rechtsgronden baseren wij de verwerking van jouw persoonsgegevens?</h2>
             <p>Wij verwerken jouw persoonsgegevens op basis van de volgende juridische gronden:</p>
             <p>. Het uitvoeren van de overeenkomst tussen jou en ons, bijvoorbeeld wanneer je je abonneert op de SS/PP-pp of via de SS/PP-website een abonnement voor een vriend aanschaft.</p>
             <p>. Ons gerechtvaardigd belang, zoals voor directe marketing, (promotionele) mailingen, marktonderzoek en het verbeteren van onze diensten.</p>
             <p>. Naleving van wettelijke verplichtingen.</p>
             <h2>Worden je gegevens gedeeld met andere partijen?</h2>
             <p>Wij kunnen jouw persoonsgegevens delen met andere partijen als dit noodzakelijk is voor de uitvoering van de eerder beschreven doeleinden. Om ervoor te zorgen dat deze partijen de regels naleven, hebben we de nodige afspraken met hen gemaakt en waar vereist,</p>
             <p>verwerkersovereenkomsten gesloten om de veiligheid van jouw gegevens te garanderen. We delen bijvoorbeeld gegevens met derden die het betalingssysteem voor onze App en Website beheren. Ook kunnen we persoonsgegevens delen met marketingonderzoekbureaus,</p>
             <p>softwareontwikkelaars en partijen die analysediensten leveren om onze dienstverlening te verbeteren. Tot slot verstrekken we jouw persoonsgegevens als we wettelijk verplicht zijn of op basis van een gerechtelijke uitspraak.</p>
             <p>Derde partijen waarmee we samenwerken en mogelijk persoonsgegevens delen zijn onder andere:</p>
             <p>. Andere derde partijen: voor het uitvoeren van marketing, marktonderzoek en softwareontwikkeling.</p>
             <p>. Pieter Wiegman of Koudstaal Advocaten voor het afwikkelen van geschillen of het inbreuk maken op het copyright, auteursrecht, merkenrecht……en wat al niet meer.</p>
             <h2>Websites van derden</h2>
             <p>. Dit privacy statement is niet van toepassing op websites of apps van derden, behalve op die van verwerkers die wij inschakelen. Dit geldt ook voor links naar en het delen op sociale media zoals: X (het voormalige Twitter), chat-GPT, Instagram, Facebook, zelfs als deze via onze Website of App toegankelijk zijn. Wij zijn niet verantwoordelijk voor hoe deze partijen jouw persoonsgegevens gebruiken. We raden je daarom aan om het privacy beleid van de betreffende websites en apps te raadplegen.</p>
             <h2>Cookies</h2>
             <p>Bij een bezoek aan onze website of app maken we mogelijk gebruik van cookies en vergelijkbare technologieën, zoals webbakens, pixels en SDK's, om verschillende redenen, waaronder het herkennen van gebruikers, het verbeteren van de gebruikerservaring en het meten van de effectiviteit van onze diensten en promoties. Deze technologieën kunnen informatie op uw apparaat opslaan, maar ze worden alleen geïnstalleerd met uw toestemming. Houd er rekening mee dat bepaalde functies van onze website of app mogelijk niet beschikbaar zijn als u bepaalde cookies uitschakelt.</p>
             <p>Bewaartermijn van persoonsgegevens: We bewaren uw persoonsgegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor ze worden verwerkt, tenzij we wettelijk verplicht zijn om ze langer te bewaren of u anderszins toestemming hebt gegeven voor een langere bewaartermijn.</p>
             <h2>Beveiliging van je gegevens</h2>
             <p>We nemen de bescherming van je gegevens serieus en hebben passende technische en organisatorische maatregelen genomen om ervoor te zorgen dat je gegevens veilig zijn en worden beschermd tegen verlies, misbruik en ongeoorloofde toegang. We blijven ons voortdurend informeren over de nieuwste ontwikkelingen op het gebied van gegevensbeveiliging en nemen alle redelijke stappen om te voorkomen dat persoonsgegevens verloren gaan of onrechtmatig worden gebruikt.</p>
             <h2>Jouw rechten</h2>
             <p>Als gebruiker heb je bepaalde rechten met betrekking tot je persoonsgegevens. Hier zijn ze:</p>
             <p>. Recht op informatie en inzage: Je kunt ons vragen welke persoonsgegevens we van jou hebben en hoe we deze gebruiken. We verstrekken je graag meer informatie over het doel van de verwerking en de manier waarop we je gegevens gebruiken.</p>
             <p>. Recht op rectificatie: Als je denkt dat we onjuiste persoonsgegevens van jou hebben, laat het ons dan weten. We zullen deze gegevens corrigeren of aanpassen indien nodig.</p>
             <p>. Recht op vergetelheid: Je kunt ons verzoeken om je persoonsgegevens te verwijderen. We zullen hieraan voldoen, tenzij er wettelijke verplichtingen zijn die ons verhinderen dit te doen, zoals bijvoorbeeld wanneer we verplicht zijn gegevens te bewaren voor fiscale doeleinden.</p>
             <p>. Recht op beperking: Als je van mening bent dat wij je persoonsgegevens onrechtmatig verwerken, kun je ons verzoeken om het gebruik van je gegevens te beperken totdat het geschil is opgelost.</p>
             <p>. Recht op bezwaar (verzet): Je kunt bezwaar maken tegen het gebruik of bewaren van je persoonsgegevens. We zullen je verzoek zorgvuldig beoordelen en indien mogelijk voldoen, tenzij er dwingende gerechtvaardigde gronden zijn om door te gaan met de verwerking.</p>
             <p>. Recht op overdraagbaarheid: Je hebt het recht om je persoonsgegevens over te dragen aan een andere organisatie of dienst.</p>
             <p>Daarnaast heb je ook:</p>
             <p>Het recht om je toestemming in te trekken: Als we je om toestemming hebben gevraagd voor de verwerking van je gegevens, kun je deze toestemming te allen tijde intrekken.</p>
             <p>Het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP): Als je van mening bent dat wij niet handelen in overeenstemming met de privacywetgeving, kun je contact met ons opnemen via sprekendespreuken@gmail.com of een klacht indienen bij de Autoriteit Persoonsgegevens.</p>
             <h2>Wijzigingen in dit privacy statement</h2>
             <p>We behouden ons het recht voor om wijzigingen aan te brengen in dit privacy statement. We raden je aan om regelmatig het meest recente privacy statement te raadplegen via onze website of app, zodat je op de hoogte blijft van eventuele wijzigingen.</p>
             <h2>Vragen?</h2>
             <p>Voor vragen over onze privacyverklaring of bovengenoemde rechten kun je altijd contact met ons opnemen. Je kunt contact met ons opnemen via het contactformulier in onze SS/PP-app of door een e-mail te sturen naar sprekendespreuken@gmail.com of later ook op onze SS/PP-website www.sprekendespreuken.nl.</p>
             <h3>Versie: februari 2025</h3>
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

export default PrivacyPage;
