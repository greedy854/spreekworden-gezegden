import React, { useState } from 'react';
import '../src/App.css';

function AboutUs() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="about-us">
      <h1>Over ons</h1>
      <p>
        Welkom bij de Spreekwoorden en Gezegde Tool: Sprekende Spreuken/Proverbs Paradise! 
        We helpen je op een leuke manier meer te leren over Nederlandse spreekwoorden en gezegdes, 
        ongeacht je niveau. Op termijn worden ook Engelse spreekwoorden en gezegdes toegevoegd.
      </p>

      <div className="section" onClick={() => toggleSection('why')}>
        <h2>Waarom kiezen voor ons?</h2>
        {activeSection === 'why' && (
          <>
            <p>
              <strong>Unieke aanpak:</strong> De combinatie van spreekwoorden en gezegdes met herkenbare illustraties maakt ons product uniek en doeltreffend.
            </p>
            <p>
              <strong>Veelzijdige inzetbaarheid:</strong> Geschikt voor kinderen, leerlingen, studenten, (groot)ouders, liefhebbers, NT2-ers en onderwijsprofessionals.
            </p>
            <p>
              <strong>Toegankelijkheid:</strong> Een gebruiksvriendelijk platform met een betaalbaar prijsmodel voor iedereen.
            </p>
            <p>
              <strong>Culturele rijkdom:</strong> Een uitgebreide en diverse collectie die recht doet aan de taalvariatie in noord, oost, zuid en west Nederland.
            </p>
          </>
        )}
      </div>

      <div className="section" onClick={() => toggleSection('story')}>
        <h2>Ons verhaal</h2>
        {activeSection === 'story' && (
          <>
            <p>
              Wij zien hoe uitdagend spreekwoorden en gezegden kunnen zijn voor veel leerlingen, 
              vooral voor degenen met een taalontwikkelingsstoornis (TOS), een autisme spectrum stoornis 
              of andere leeruitdagingen. Tegelijkertijd merken we dat spreekwoorden vaak als leuk en 
              boeiend worden ervaren, maar het begrijpen van de lagen binnen onze taal is niet altijd eenvoudig.
            </p>
            <p>
              Een beeld zegt soms meer dan duizend woorden. Daarom hebben we duizenden Nederlandse 
              spreekwoorden en gezegdes verzameld en laten we deze omzetten in herkenbare illustraties. 
              Zo maken we onze prachtige taal toegankelijker en begrijpelijker voor onder andere leerlingen, 
              studenten, (groot)ouders, NT2-ers en professionals.
            </p>
            <p>
              In een tijd waarin taal door sociale media snel verandert, bieden wij een hulpmiddel om onze 
              rijke taaltradities levend, bereikbaar en toepasbaar te maken voor iedereen.
            </p>
          </>
        )}
      </div>

      <div className="section" onClick={() => toggleSection('vision')}>
        <h2>Visie</h2>
        {activeSection === 'vision' && (
          <p>
            Wij geloven in een wereld waarin zoveel mogelijk mensen de taal in al haar rijkdom en nuances begrijpen, 
            ongeacht leeftijd, afkomst, leerniveau of leerstijl. Taal is niet alleen een middel van communicatie, 
            maar ook van verbinding, cultuur en identiteit.
          </p>
        )}
      </div>

      <div className="section" onClick={() => toggleSection('mission')}>
        <h2>Missie</h2>
        {activeSection === 'mission' && (
          <p>
            Wij maken spreekwoorden en gezegdes toegankelijk voor iedereen door middel van eenvoudige en sprekende illustraties 
            die de essentie ervan weergeven. Zo helpen wij taalbarrières te doorbreken, begrip te vergroten en generaties 
            met elkaar te verbinden.
          </p>
        )}
      </div>

      <div className="section" onClick={() => toggleSection('whyWeDo')}>
        <h2>Waarom doen we wat we doen?</h2>
        {activeSection === 'whyWeDo' && (
          <p>
            Taalgebruik is complex, en figuurlijke taal vormt vaak een uitdaging. Dit geldt vooral voor kinderen, mensen met 
            een taalstoornis, NT2-leerlingen, of mensen met een andere hindernis die het begrijpen van taal bemoeilijkt. 
            Onze missie is om taal eenvoudiger en toegankelijker te maken, zodat communicatie soepeler verloopt en misverstanden 
            worden voorkomen. Met illustraties bieden we iedereen de tools om de schoonheid en kracht van taal te gebruiken en te begrijpen.
          </p>
        )}
      </div>

      <div className="section" onClick={() => toggleSection('values')}>
        <h2>Waarden van Sprekende Spreuken/Proverbs Paradise</h2>
        {activeSection === 'values' && (
          <>
            <p>Inclusiviteit: Iedereen, ongeacht achtergrond of leerstijl, kan meedoen en leren.</p>
            <p>Creativiteit: Het gebruik van illustraties om moeilijke taal eenvoudiger te maken.</p>
            <p>Erfgoedbehoud: Het bewaren en verspreiden van de rijke Nederlandse taaltradities.</p>
            <p>Educatieve impact: Het ondersteunen van lerenden en professionals met bruikbare tools.</p>
            <p>Verbinden: Generaties, culturen en perspectieven samenbrengen door taal.</p>
          </>
        )}
      </div>

      <div className="section" onClick={() => toggleSection('goals')}>
        <h2>Langetermijndoelen</h2>
        {activeSection === 'goals' && (
          <>
            <p>Het uitbreiden van de database met Engelse spreekwoorden en gezegdes.</p>
            <p>Samenwerken met onderwijsinstellingen en taalorganisaties.</p>
            <p>Het ontwikkelen van interactieve tools, zoals apps en spellen, die het leren leuker, makkelijker en actiever maken.</p>
            <p>Internationale uitrol met spreekwoorden in meerdere talen.</p>
            <p>Persoonlijke leerpaden die gebruikers helpen specifieke spreekwoorden te leren op basis van hun niveau of interesses.</p>
            <p>Educatieve handleidingen en extra materiaal voor leerkrachten en professionals.</p>
          </>
        )}
      </div>

      <div className="section" onClick={() => toggleSection('features')}>
        <h2>Concreet aanbod en functionaliteiten</h2>
        {activeSection === 'features' && (
          <>
            <p>Een zoekfunctie waarmee je het spreekwoord makkelijk kunt vinden.</p>
            <p>Quizzen om de spreekwoorden beter te onthouden.</p>
            <p>Onderwijsprofessionals kunnen hun eigen materiaal ontwikkelen.</p>
            <p>Downloadbare materialen of kaarten voor scholen, ouders en professionals.</p>
            <p>Een kalender met spreekwoorden van de dag voor dagelijkse inspiratie.</p>
          </>
        )}
      </div>

      <div className="section" onClick={() => toggleSection('community')}>
        <h2>Betrokkenheid van de gemeenschap</h2>
        {activeSection === 'community' && (
          <>
            <p>Er is altijd de mogelijkheid voor gebruikers om zelf spreekwoorden aan te dragen.</p>
            <p>Ook staan we van harte open voor gebruikers die zelf een passend spreekwoord willen toevoegen met een bijbehorend plaatje.</p>
            <p>Er is een feedbackfunctie om de tool continu te verbeteren.</p>
            <p>We werken op termijn toe naar educatieve workshops en webinars om de tool effectief in te zetten.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
