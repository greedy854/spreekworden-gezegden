const images = [
  {
      src: '/F/1.png',
      tags: ['f', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
  },
  {
      src: '/F/2.png',
      tags: ['f', "Het is niet alle dagen feest", "Je kunt niet elke dag alleen maar plezier maken, er moet ook gewerkt worden."]
  },
  {
      src: '/F/3.png',
      tags: ['f', "Feiten zijn heilig / commentaar is vrij maar feiten zijn heilig", "De feiten moeten altijd correct worden weergegeven."]
  },
  {
      src: '/F/4.png',
      tags: ['f', "Op een oude fiets moet je het leren", "Jonge en onervaren mensen hebben hun eerste seksuele betrekkingen het best met een ervaren persoon."]
  },
  {
      src: '/F/5.png',
      tags: ['f', "Er zijn meer hondjes die Fikkie heten", "Dat iemand een bepaalde naam heeft, wil vaak nog niet zeggen dat hij of zij ook met een kwestie te maken heeft."]
  },
  {
      src: '/F/6.png',
      tags: ['f', "Niemand is zonder fouten", "Zelfs de mensen die het meest bekwaam zijn, maken wel eens een fout."]
  },
  {
      src: '/F/7.png',
      tags: ['f', "Een gast en een vis blijven drie dagen fris", "Gasten die langer dan drie dagen blijven logeren, worden gewoonlijk als een last ervaren."]
  },
  {
      src: '/F/8.png',
      tags: ['f', "Te goeder naam en faam bekend staan.", "Zeer goed bekend staan."]
  },
  {
      src: '/F/9.png',
      tags: ['f', "Hij is een verachte fakkel.", "Hij is iemand, wiens werk niet gewaardeerd wordt."]
  },
  {
      src: '/F/10.png',
      tags: ['f', "Iemand op zijn falie geven.", "Iemand een pak slaag geven."]
  },
  {
      src: '/F/11.png',
      tags: ['f', "Daar is geen faliekant bij", "Dat is volledig/totaal in orde."]
  },
  {
      src: '/F/12.png',
      tags: ['f', "Dat is familie van Adamswege.", "Dat is verre familie."]
  },
  {
      src: '/F/13.png',
      tags: ['f', "Het is als met de koeien van de farao.", "Er is niets aan te doen."]
  },
  {
      src: '/F/14.png',
      tags: ['f', "Dat is een Farizeeër.", "Hij is schijnheilig."]
  },
  {
      src: '/F/15.png',
      tags: ['f', "Dat is een fata morgana.", "Dat is een illusie."]
  },
  {
      src: '/F/16.png',
      tags: ['f', "Dat is een vreemd stuk fatsoen.", "Dat is iemand die zich voortdurend aanstelt."]
  },
  {
      src: '/F/17.png',
      tags: ['f', "Hij loopt met te veel fatsoen aan zijn gat.", "Hij doet zich gewichtiger voor dan hij is."]
  },
  {
      src: '/F/18.png',
      tags: ['f', "Ik bedank je feestelijk.", "Daar heb ik absoluut geen zin in."]
  },
  {
      src: '/F/19.png',
      tags: ['f', "Zijn plannen waren een fiasco.", "Zijn plannen mislukten."]
  },
  {
      src: '/F/20.png',
      tags: ['f', "Hij danst voordat de fiedel gaat.", "Hij is erg voorbarig."]
  },
  {
      src: '/F/21.png',
      tags: ['f', "Wat heb ik nou aan mijn fiets hangen?", "Wat is er nu aan de hand?"]
  },
  {
      src: '/F/22.png',
      tags: ['f', "Hij gaat van te hei in te fij.", "Hij valt van het ene uiterste in het andere."]
  },
  {
      src: '/F/23.png',
      tags: ['f', "Van de fijnen en van motregen wordt men het meest bedrogen.", "Mensen die zich mooi voordoen, zijn dikwijls niet te vertrouwen."]
  },
  {
      src: '/F/24.png',
      tags: ['f', "Laat ie fijn zijn.", "Goed zo!"]
  },
  {
      src: '/F/25.png',
      tags: ['f', "Hij weet het fijne van de zaak.", "Hij kent alle bijzonderheden."]
  },
  {
      src: '/F/26.png',
      tags: ['f', "Het is een tamme Filistijn.", "Dat is iemand, die niet meer zo fel ageert als vroeger."]
  },
  {
      src: '/F/27.png',
      tags: ['f', "Dat is naar de Filistijnen.", "Dat is kapot."]
  },
  {
      src: '/F/28.png',
      tags: ['f', "Hij laat fiolen zorgen.", "Onbezorgd zijn."]
  },
  {
      src: '/F/29.png',
      tags: ['f', "De fiolen van zijn toorn over iemand uitstorten.", "Hij trakteerde ons op een woede-uitbarsting."]
  },
  {
      src: '/F/30.png',
      tags: ['f', "Hij laat het in de fiolen lopen.", "Hij laat het mislukken."]
  },
  {
      src: '/F/31.png',
      tags: ['f', "Bij iemand in de flank vallen.", "Door iemand aardig gevonden worden."]
  },
  {
      src: '/F/32.png',
      tags: ['f', "Alles in de flank zetten.", "De tafel op een dusdanige manier dekken, dat alles er keurig geordend uitziet."]
  },
  {
      src: '/F/33.png',
      tags: ['f', "Eerst mensen en dan flaporen.", "Grote mensen komen eerder aan de beurt dan kinderen."]
  },
  {
      src: '/F/34.png',
      tags: ['f', "Een flater begaan.", "Een domme fout maken."]
  },
  {
      src: '/F/35.png',
      tags: ['f', "Hij is aan de flenter.", "Hij zet de bloemetjes flink buiten."]
  },
  {
      src: '/F/36.png',
      tags: ['f', "Hij is aan de flep.", "Hij is alcoholist."]
  },
  {
      src: '/F/37.png',
      tags: ['f', "Hij houdt van de fles.", "Hij drinkt graag een borreltje."]
  },
  {
      src: '/F/38.png',
      tags: ['f', "Iemand op flessen trekken.", "Iemand oplichten."]
  },
  {
      src: '/F/39.png',
      tags: ['f', "Hij is op de fles gegaan.", "Hij is failliet gegaan."]
  },
  {
      src: '/F/40.png',
      tags: ['f', "Gebroken flessen maken het meeste lawaai.", "Degenen met de minste kennis voeren dikwijls het hoogste woord."]
  },
  {
      src: '/F/41.png',
      tags: ['f', "Dat is een flessentrekker.", "Dat is een oplichter."]
  },
  {
      src: '/F/42.png',
      tags: ['f', "Hij is in zijn fleur.", "Hij heeft het naar zijn zin."]
  },
  {
      src: '/F/43.png',
      tags: ['f', "Dat heeft hij keurig geflikt.", "Dat heeft hij handig voor elkaar gekregen."]
  },
  {
      src: '/F/44.png',
      tags: ['f', "Het is witte flip tussen hen.", "Zij kunnen goed met elkaar overweg."]
  },
  {
      src: '/F/45.png',
      tags: ['f', "Iemand bij de flip nemen.", "Iemand voor de gek houden."]
  },
  {
      src: '/F/46.png',
      tags: ['f', "Met het fluitje gewonnen, met het trommeltje verteerd.", "Al het geld dat men heeft verdiend, weer zeer snel uitgeven."]
  },
  {
      src: '/F/47.png',
      tags: ['f', "Daar kun je naar fluiten.", "Dat krijg je nooit meer terug."]
  },
  {
      src: '/F/48.png',
      tags: ['f', "Hij gaat ermee fluiten.", "Hij gaat ermee vandoor."]
  },
  {
      src: '/F/49.png',
      tags: ['f', "Laat hem maar fluiten.", "Trek je niets van hem aan."]
  },
  {
      src: '/F/50.png',
      tags: ['f', "Hij zit op fluweel.", "Hem kan niets gebeuren."]
  },
  {
      src: '/F/51.png',
      tags: ['f', "Dat is geen foef waard.", "Dat is niets waard."]
  },
  {
      src: '/F/52.png',
      tags: ['f', "De fok opzetten.", "Zijn bril opzetten."]
  },
  {
      src: '/F/53.png',
      tags: ['f', "Hij heeft aan de fokkehals getrokken.", "Stank voor dank krijgen."]
  },
  {
      src: '/F/54.png',
      tags: ['f', "Iemand de fok opzetten.", "Iemand voor de gek houden."]
  },
  {
      src: '/F/55.png',
      tags: ['f', "Iemand de fooi geven.", "Iemand ontslaan."]
  },
  {
      src: '/F/56.png',
      tags: ['f', "Ik heb een fooitje gekregen.", "Ik heb te weinig gekregen."]
  },
  {
      src: '/F/57.png',
      tags: ['f', "De fortuin heeft hem de rug toegekeerd.", "Alles zit hem tegen."]
  },
  {
      src: '/F/58.png',
      tags: ['f', "De fortuin lacht hem toe.", "Alles gaat voorspoedig bij hem."]
  },
  {
      src: '/F/59.png',
      tags: ['f', "De fortuin loopt bij hem op krukken.", "Alles zit hem tegen."]
  },
  {
      src: '/F/60.png',
      tags: ['f', "De fortuin is blind.", "Men kan tevoren nooit zeggen, of het iemand al dan niet goed zal gaan."]
  },
  {
      src: '/F/61.png',
      tags: ['f', "Daar is geen woord Frans bij.", "Hij heeft precies gezegd waar het op staat."]
  },
  {
      src: '/F/62.png',
      tags: ['f', "Iemand het Frans praten afleren.", "Iemand zijn overdreven manieren en praatjes afleren."]
  },
  {
      src: '/F/63.png',
      tags: ['f', "Hij kent evengoed Frans als een koe Spaans.", "Hij kent er absoluut niets van."]
  },
  {
      src: '/F/64.png',
      tags: ['f', "Dat is een vrolijk Fransje.", "Dat is iemand die zonder zorgen door het leven gaat."]
  },
  {
      src: '/F/65.png',
      tags: ['f', "Hij is voor de fret.", "Hij houdt van lekker eten."]
  },
  {
      src: '/F/66.png',
      tags: ['f', "Hij is zo mager als een fret.", "Hij is zeer mager."]
  },
  {
      src: '/F/67.png',
      tags: ['f', "Hij is niet helemaal fris.", "Hij heeft te veel alcohol gedronken."]
  },
  {
      src: '/F/68.png',
      tags: ['f', "Voor het front komen.", "Duidelijk zeggen wat de bedoeling is."]
  },
  {
      src: '/F/69.png',
      tags: ['f', "Front maken.", "Niet afwachten tot men wordt aangevallen, maar zelf in de aanval gaan."]
  },
  {
      src: '/F/70.png',
      tags: ['f', "Hij is er gezien als een rotte appel bij de fruitvrouw.", "Men ziet hem liever niet."]
  },
  {
      src: '/F/71.png',
      tags: ['f', "Hij is in de fuik gelopen.", "Hij is in de val gelopen."]
  },
  {
      src: '/F/72.png',
      tags: ['f', "Hij heeft zich in de fuik gepraat.", "Hij heeft iets verkeerds gezegd en is daardoor in de problemen geraakt."]
  }
];

export default images;
