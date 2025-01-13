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
    },
    {
        src: '/D/D-images-0.jpg',
        tags: ['d', "lol",]
    },
    {
        src: '/D/D-images-1.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-2.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-3.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-4.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-5.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-6.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-7.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-8.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-9.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-10.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-11.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-12.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-13.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-14.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-15.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-16.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-17.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-18.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-19.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-20.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-21.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-22.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-23.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-24.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-25.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-26.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-27.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-28.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-29.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-30.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-31.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-32.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-33.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-34.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-35.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-36.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-37.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-38.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-39.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-40.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-41.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-42.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-43.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-44.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-45.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-46.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-47.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-48.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-49.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-50.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    }, {
        src: '/D/D-images-51.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-52.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-53.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-54.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-55.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-56.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-57.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-58.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-59.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-60.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-61.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-62.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-63.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-64.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-65.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-66.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-67.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-68.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-69.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-70.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-71.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-72.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-73.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-74.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-75.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-76.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-77.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-78.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-79.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-80.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-81.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-82.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-83.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-84.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-85.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-86.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-87.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-88.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-89.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-90.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-91.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-92.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-93.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-94.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-95.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-96.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-97.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-98.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-99.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-100.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-101.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-102.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-103.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-104.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-105.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-106.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-107.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-108.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-109.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-110.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-111.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-112.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-113.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-114.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-115.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-116.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-117.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-118.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-119.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-120.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-121.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-122.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-123.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-124.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-125.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-126.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-127.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-128.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-129.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-130.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-131.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-132.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-133.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-134.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-135.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-136.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-137.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-138.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-139.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-140.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-141.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-142.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-143.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-144.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-145.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-146.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-147.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-148.jpg',
        tags: ['d', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."]
    },
    {
        src: '/D/D-images-149.jpg',
        tags: ['d', "hallo",]
    },
    { src: '/D/D-DEEL2 (1)-001.png', tags: ['f', "Van je familie moet je het hebben.", "In veel gevallen kan men zijn eigen familieleden het minst vertrouwen."] },
    { src: '/D/D-DEEL2 (1)-002.png', tags: ['f', "Familie is niet altijd wat je denkt.", "Soms is de afstand tussen familieleden groter dan je denkt."] },
    { src: '/D/D-DEEL2 (1)-003.png', tags: ['f', "Familie is niet altijd alles.", "Zelfs familie kan je pijn doen."] },
    { src: '/D/D-DEEL2 (1)-004.png', tags: ['f', "Niet alles is wat het lijkt.", "Zelfs je naaste kan je verrassen."] },
    { src: '/D/D-DEEL2 (1)-005.png', tags: ['f', "Vertrouw niet blindelings.", "Soms kunnen de mensen die je het dichtst staan je verraden."] },
    { src: '/D/D-DEEL2 (1)-006.png', tags: ['f', "Vriendschap en familie.", "Soms komt echte vriendschap van buiten de familie."] },
    { src: '/D/D-DEEL2 (1)-007.png', tags: ['f', "Doorzettingsvermogen.", "Het is niet altijd gemakkelijk om de waarheid te verdragen."] },
    { src: '/D/D-DEEL2 (1)-008.png', tags: ['f', "Verlies.", "Het verlies van een naaste kan je sterker maken."] },
    { src: '/D/D-DEEL2 (1)-009.png', tags: ['f', "Loyaliteit.", "Loyaliteit is een zeldzaam goed, zelfs binnen familie."] },
    { src: '/D/D-DEEL2 (1)-010.png', tags: ['f', "Geheimen.", "Familieleden bewaren vaak de diepste geheimen."] },
    { src: '/D/D-DEEL2 (1)-011.png', tags: ['f', "Vergeving.", "Vergeving is de sleutel tot heling in familierelaties."] },
    { src: '/D/D-DEEL2 (1)-012.png', tags: ['f', "Ruzie.", "Soms ontstaan er conflicten tussen de dichtstbijzijnde mensen."] },
    { src: '/D/D-DEEL2 (1)-013.png', tags: ['f', "Ondersteuning.", "Familie kan je de kracht geven om door te gaan."] },
    { src: '/D/D-DEEL2 (1)-014.png', tags: ['f', "Hulp.", "Hulp van familie kan soms onvoorwaardelijk zijn."] },
    { src: '/D/D-DEEL2 (1)-015.png', tags: ['f', "Afstand.", "Afstand nemen van familie kan soms heilzaam zijn."] },
    { src: '/D/D-DEEL2 (1)-016.png', tags: ['f', "Verlies van vertrouwen.", "Verlies van vertrouwen in familie kan het moeilijk maken om verder te gaan."] },
    { src: '/D/D-DEEL2 (1)-017.png', tags: ['f', "Levenslessen.", "Familie leert ons belangrijke levenslessen."] },
    { src: '/D/D-DEEL2 (1)-018.png', tags: ['f', "Afhankelijkheid.", "Afhankelijk zijn van familie kan zowel een zegen als een last zijn."] },
    { src: '/D/D-DEEL2 (1)-019.png', tags: ['f', "Zelfstandigheid.", "Zelfstandigheid kan helpen om relaties in de familie te versterken."] },
    { src: '/D/D-DEEL2 (1)-020.png', tags: ['f', "Verlies van verbondenheid.", "Soms voel je je ver weg van je eigen familie."] },
    { src: '/D/D-DEEL2 (1)-021.png', tags: ['f', "Verantwoordelijkheid.", "Familie brengt verantwoordelijkheden met zich mee."] },
    { src: '/D/D-DEEL2 (1)-022.png', tags: ['f', "Delen.", "Samen delen is een belangrijk onderdeel van familie."] },
    { src: '/D/D-DEEL2 (1)-023.png', tags: ['f', "Veranderingen.", "Familierelaties veranderen naarmate de tijd verstrijkt."] },
    { src: '/D/D-DEEL2 (1)-024.png', tags: ['f', "Ouderschap.", "Ouderschap is een van de belangrijkste rollen in een familie."] },
    { src: '/D/D-DEEL2 (1)-025.png', tags: ['f', "Vergeving van fouten.", "Iedereen maakt fouten, ook binnen de familie."] },
    { src: '/D/D-DEEL2 (1)-026.png', tags: ['f', "Groeien samen.", "Het is belangrijk om samen te groeien als familie."] },
    { src: '/D/D-DEEL2 (1)-027.png', tags: ['f', "Afkomst.", "Je afkomst maakt je deel uit van een grotere familie."] },
    { src: '/D/D-DEEL2 (1)-028.png', tags: ['f', "Zorg.", "Zorg voor je familie is essentieel."] },
    { src: '/D/D-DEEL2 (1)-029.png', tags: ['f', "Herinneringen.", "Herinneringen aan familie zijn waardevol."] },
    { src: '/D/D-DEEL2 (1)-030.png', tags: ['f', "Opoffering.", "Opofferingen maken het mogelijk om een sterke familie te hebben."] },
    { src: '/D/D-DEEL2 (1)-031.png', tags: ['f', "Familiewaarden.", "Familiewaarden zijn de fundamenten van veel relaties."] },
    { src: '/D/D-DEEL2 (1)-032.png', tags: ['f', "Samen zijn.", "Samen zijn met familie is een groot cadeau."] },
    { src: '/D/D-DEEL2 (1)-033.png', tags: ['f', "Verlies van familie.", "Het verlies van een familielid laat een leegte achter."] },
    { src: '/D/D-DEEL2 (1)-034.png', tags: ['f', "Conflict oplossen.", "Conflicten in families kunnen soms moeilijk zijn om op te lossen."] },
    { src: '/D/D-DEEL2 (1)-035.png', tags: ['f', "Eerlijkheid.", "Eerlijkheid is de basis van een goede familierelatie."] },
    { src: '/D/D-DEEL2 (1)-036.png', tags: ['f', "Bijstand.", "Familie biedt vaak bijstand in tijden van behoefte."] },
    { src: '/D/D-DEEL2 (1)-037.png', tags: ['f', "Zelfreflectie.", "Familieleden kunnen ons helpen bij zelfreflectie."] },
    { src: '/D/D-DEEL2 (1)-038.png', tags: ['f', "Hulp in nood.", "Familie is er vaak in tijden van nood."] },
    { src: '/D/D-DEEL2 (1)-039.png', tags: ['f', "Vertrouwen opbouwen.", "Het opbouwen van vertrouwen binnen een familie is essentieel."] },
    { src: '/D/D-DEEL2 (1)-040.png', tags: ['f', "Liefde.", "Liefde tussen familieleden is onmisbaar."] },
    { src: '/D/D-DEEL2 (1)-041.png', tags: ['f', "Raad geven.", "Raad van familieleden kan onschatbare waarde hebben."] },
    { src: '/D/D-DEEL2 (1)-042.png', tags: ['f', "Samenzijn.", "De kracht van samenzijn binnen een familie."] },
    { src: '/D/D-DEEL2 (1)-043.png', tags: ['f', "Nieuwe generaties.", "Familie wordt doorgegeven van generatie op generatie."] },
    { src: '/D/D-DEEL2 (1)-044.png', tags: ['f', "Samen lachen.", "Lachen met familie is een van de mooiste dingen in het leven."] },
    { src: '/D/D-DEEL2 (1)-045.png', tags: ['f', "Het verleden.", "Het verleden van een familie speelt een grote rol in de toekomst."] },
    { src: '/D/D-DEEL2 (1)-046.png', tags: ['f', "Wederzijds respect.", "Respect is essentieel in elke familierelatie."] },
    { src: '/D/D-DEEL2 (1)-047.png', tags: ['f', "Hulp bieden.", "Hulp bieden aan familie is een teken van liefde."] },
    { src: '/D/D-DEEL2 (1)-048.png', tags: ['f', "Erfgoed.", "Familie erfgoed is een belangrijk deel van wie we zijn."] },
    { src: '/D/D-DEEL2 (1)-049.png', tags: ['f', "Versterking van banden.", "Het versterken van banden is essentieel voor familie."] },
    { src: '/D/D-DEEL2 (1)-050.png', tags: ['f', "Samen lachen.", "Lachen met je familie is een bron van vreugde."] },
    { src: '/D/D-DEEL2 (1)-051.png', tags: ['f', "Gedeelde herinneringen.", "Herinneringen die we delen vormen een sterke familieband."] },
    { src: '/D/D-DEEL2 (1)-052.png', tags: ['f', "Vertrouwen herstellen.", "Het herstellen van vertrouwen is essentieel in familierelaties."] },
    { src: '/D/D-DEEL2 (1)-053.png', tags: ['f', "Oprechtheid.", "Oprechtheid is de basis van elke succesvolle familierelatie."] },
    { src: '/D/D-DEEL2 (1)-054.png', tags: ['f', "Vrijheid binnen familie.", "Vrijheid binnen een familie kan helpen bij het behouden van gezonde relaties."] },
    { src: '/D/D-DEEL2 (1)-055.png', tags: ['f', "Samen plannen.", "Samen plannen maakt familie sterker en meer verbonden."] },
    { src: '/D/D-DEEL2 (1)-056.png', tags: ['f', "Aandacht voor elkaar.", "Echte aandacht voor elkaar maakt een familie hechter."] },
    { src: '/D/D-DEEL2 (1)-057.png', tags: ['f', "Tijd doorbrengen.", "Tijd doorbrengen met familie versterkt de band."] },
    { src: '/D/D-DEEL2 (1)-058.png', tags: ['f', "Samen groeien.", "Familie helpt ons te groeien, zowel als individu als groep."] },
    { src: '/D/D-DEEL2 (1)-059.png', tags: ['f', "Verlies van een ouder.", "Het verlies van een ouder kan diepe sporen achterlaten in de familie."] },
    { src: '/D/D-DEEL2 (1)-060.png', tags: ['f', "Echte liefde.", "Echte liefde binnen familie betekent onvoorwaardelijke steun."] },
    { src: '/D/D-DEEL2 (1)-061.png', tags: ['f', "Communicatie.", "Goede communicatie is de sleutel tot gezonde familierelaties."] },
    { src: '/D/D-DEEL2 (1)-062.png', tags: ['f', "Verantwoordelijkheid nemen.", "Verantwoordelijkheid nemen voor elkaar is wat een familie succesvol maakt."] },
    { src: '/D/D-DEEL2 (1)-063.png', tags: ['f', "Verlies van een kind.", "Het verlies van een kind is onmeetbaar voor een familie."] },
    { src: '/D/D-DEEL2 (1)-064.png', tags: ['f', "Verzoening.", "Verzoening kan diepe wonden helen binnen een familie."] },
    { src: '/D/D-DEEL2 (1)-065.png', tags: ['f', "Liefdevolle steun.", "Liefdevolle steun maakt alles mogelijk, zelfs in de moeilijkste tijden."] },
    { src: '/D/D-DEEL2 (1)-066.png', tags: ['f', "Generaties leren.", "Elke generatie leert van de vorige binnen een familie."] },
    { src: '/D/D-DEEL2 (1)-067.png', tags: ['f', "Rouwen samen.", "Rouwen samen maakt de familie sterker."] },
    { src: '/D/D-DEEL2 (1)-068.png', tags: ['f', "Waarden doorgeven.", "Familieleden geven belangrijke waarden door aan elkaar."] },
    { src: '/D/D-DEEL2 (1)-069.png', tags: ['f', "Betrouwbare bondgenoten.", "Familieleden zijn vaak de meest betrouwbare bondgenoten."] },
    { src: '/D/D-DEEL2 (1)-070.png', tags: ['f', "Nieuwe tradities.", "Nieuwe tradities helpen een familie dichter bij elkaar te brengen."] },
    { src: '/D/D-DEEL2 (1)-071.png', tags: ['f', "Kracht van familie.", "De kracht van familie kan zelfs de grootste obstakels overwinnen."] },
    { src: '/D/D-DEEL2 (1)-072.png', tags: ['f', "Onvoorwaardelijke liefde.", "Familie biedt onvoorwaardelijke liefde die helpt in moeilijke tijden."] },
    { src: '/D/D-DEEL2 (1)-073.png', tags: ['f', "Verlies van een familielid.", "Het verlies van een familielid laat een leegte die niet te vullen is."] },
    { src: '/D/D-DEEL2 (1)-074.png', tags: ['f', "Eerlijkheid binnen familie.", "Eerlijkheid is cruciaal om een sterke en gezonde familieband te behouden."] },
    { src: '/D/D-DEEL2 (1)-075.png', tags: ['f', "Samen lachen.", "Samen lachen maakt de familieband sterker."] },
    { src: '/D/D-DEEL2 (1)-076.png', tags: ['f', "Familiebanden versterken.", "Het versterken van familiebanden is essentieel voor het welzijn van iedereen."] },
    { src: '/D/D-DEEL2 (1)-077.png', tags: ['f', "Wederzijds begrip.", "Wederzijds begrip maakt familierelaties krachtiger."] },
    { src: '/D/D-DEEL2 (1)-078.png', tags: ['f', "Oplossen van meningsverschillen.", "Het oplossen van meningsverschillen is noodzakelijk voor een hechte familie."] },
    { src: '/D/D-DEEL2 (1)-079.png', tags: ['f', "Samen blijven.", "Samen blijven, ondanks de moeilijkheden, maakt een familie sterker."] },
    { src: '/D/D-DEEL2 (1)-080.png', tags: ['f', "Eerlijk delen.", "Eerlijk delen van gevoelens versterkt familierelaties."] },
    { src: '/D/D-DEEL2 (1)-081.png', tags: ['f', "Hechte banden.", "Hechte familiebanden kunnen een leven lang meegaan."] },
    { src: '/D/D-DEEL2 (1)-082.png', tags: ['f', "De kracht van vergeven.", "De kracht van vergeving maakt families sterker en hechter."] },
    { src: '/D/D-DEEL2 (1)-083.png', tags: ['f', "De invloed van familie.", "Familie heeft een grote invloed op wie we zijn."] },
    { src: '/D/D-DEEL2 (1)-084.png', tags: ['f', "Levenslange steun.", "Familie biedt levenslange steun in zowel goede als slechte tijden."] },
    { src: '/D/D-DEEL2 (1)-085.png', tags: ['f', "Samen door moeilijke tijden.", "Samen door moeilijke tijden komen maakt je familiebanden sterker."] },
    { src: '/D/D-DEEL2 (1)-086.png', tags: ['f', "Gezamenlijke herinneringen.", "Gezamenlijke herinneringen vormen de basis voor familiebanden."] },
    { src: '/D/D-DEEL2 (1)-087.png', tags: ['f', "Ouders en kinderen.", "De relatie tussen ouders en kinderen is de ruggengraat van een familie."] },
    { src: '/D/D-DEEL2 (1)-088.png', tags: ['f', "Oude tradities behouden.", "Het behouden van oude tradities versterkt de familieband."] },
    { src: '/D/D-DEEL2 (1)-089.png', tags: ['f', "Samen genieten.", "Samen genieten van de kleine dingen maakt een familie hechter."] },
    { src: '/D/D-DEEL2 (1)-090.png', tags: ['f', "Echte connectie.", "De echte connectie binnen familie is onmisbaar."] },
    { src: '/D/D-DEEL2 (1)-091.png', tags: ['f', "Onverbrekelijke banden.", "Onverbrekelijke banden vormen de basis van een sterke familie."] },
    { src: '/D/D-DEEL2 (1)-092.png', tags: ['f', "Gezinsdynamiek.", "De dynamiek binnen een gezin bepaalt de kwaliteit van relaties."] },
    { src: '/D/D-DEEL2 (1)-093.png', tags: ['f', "Kracht van moederliefde.", "De kracht van moederliefde heeft een diepgaande invloed op het gezin."] },
    { src: '/D/D-DEEL2 (1)-094.png', tags: ['f', "Vaderlijke steun.", "Vaderlijke steun is essentieel voor een gezonde gezinsstructuur."] },
    { src: '/D/D-DEEL2 (1)-095.png', tags: ['f', "Herinneringen aan grootouders.", "Herinneringen aan grootouders blijven voor altijd in het hart van de familie."] },
    { src: '/D/D-DEEL2 (1)-096.png', tags: ['f', "Familiefeest.", "Familiefeesten brengen iedereen dichter bij elkaar."] },
    { src: '/D/D-DEEL2 (1)-097.png', tags: ['f', "Hulp binnen het gezin.", "Het bieden van hulp binnen het gezin maakt het sterker."] },
    { src: '/D/D-DEEL2 (1)-098.png', tags: ['f', "Gezin en vriendschap.", "Het vinden van vriendschap binnen het gezin is bijzonder waardevol."] },
    { src: '/D/D-DEEL2 (1)-099.png', tags: ['f', "Ondersteuning in tijden van verlies.", "Familie biedt de meeste steun in tijden van verlies."] },
    { src: '/D/D-DEEL2 (1)-100.png', tags: ['f', "Generaties verbinden.", "Generaties binnen een familie verbinden zorgt voor continuïteit."] },
    { src: '/D/D-DEEL2 (1)-101.png', tags: ['f', "Gedeelde waarden.", "Gedeelde waarden zorgen voor een sterkere familieband."] },
    { src: '/D/D-DEEL2 (1)-102.png', tags: ['f', "Samenzijn in stilte.", "Soms is samenzijn in stilte met familie het mooiste wat er is."] },
    { src: '/D/D-DEEL2 (1)-103.png', tags: ['f', "Vertrouwen tussen ouders en kinderen.", "Vertrouwen tussen ouders en kinderen is de basis van een gezond gezin."] },
    { src: '/D/D-DEEL2 (1)-104.png', tags: ['f', "Grote momenten delen.", "Grote momenten in het leven worden vaak het beste gedeeld met familie."] },
    { src: '/D/D-DEEL2 (1)-105.png', tags: ['f', "Vertrouwen als fundament.", "Vertrouwen is de fundament van elke familierelatie."] },
    { src: '/D/D-DEEL2 (1)-106.png', tags: ['f', "Echte familiewaarden.", "Echte familiewaarden worden doorgegeven van generatie op generatie."] },
    { src: '/D/D-DEEL2 (1)-107.png', tags: ['f', "Hulp in moeilijke tijden.", "Familie biedt de meest onmisbare hulp in moeilijke tijden."] },
    { src: '/D/D-DEEL2 (1)-108.png', tags: ['f', "Samen huilen.", "Soms kan het samen huilen met je familie je het meeste helpen."] },
    { src: '/D/D-DEEL2 (1)-109.png', tags: ['f', "Gelukkige tijden.", "Gelukkige tijden worden het mooist gedeeld met familie."] },
    { src: '/D/D-DEEL2 (1)-110.png', tags: ['f', "De kracht van familieherinneringen.", "De kracht van familieherinneringen gaat door de tijd heen."] },
    { src: '/D/D-DEEL2 (1)-111.png', tags: ['f', "Herinneringen met ouders.", "Herinneringen met ouders blijven een leven lang bij je."] },
    { src: '/D/D-DEEL2 (1)-112.png', tags: ['f', "Oog voor detail.", "Oog voor detail in een gezin maakt alles bijzonder."] },
    { src: '/D/D-DEEL2 (1)-113.png', tags: ['f', "Sterke moeder-kind relatie.", "De sterke band tussen moeder en kind is onbreekbaar."] },
    { src: '/D/D-DEEL2 (1)-114.png', tags: ['f', "Gezinsgeluk.", "Gezinsgeluk komt van gezamenlijke momenten van vreugde."] },
    { src: '/D/D-DEEL2 (1)-115.png', tags: ['f', "Eenheid binnen familie.", "Eenheid binnen een familie zorgt voor kracht en stabiliteit."] },
    { src: '/D/D-DEEL2 (1)-116.png', tags: ['f', "Waardering voor familie.", "Waardering voor familie is de basis van liefde en respect."] }
];

export default images;
