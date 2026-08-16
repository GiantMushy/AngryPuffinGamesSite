// Angry Puffin Games — translations + flag art for the language switcher.
// Loaded before main.js, which reads these globals to render the switcher,
// swap copy, and localize the signup button states.
//
// "State Your Case", "Angry Puffin Games", "Morfís", "Gamescom" and
// "GameMakers Iceland" are proper names and stay untranslated on purpose.

// Languages in menu order. `flag` maps to APG_FLAG below. Default is English (UK).
// `note` is a small "translated by AI" disclaimer shown under non-English
// options (in that language). English is the source copy, so it has none.
window.APG_LANGS = [
  { code: "en", label: "English",  flag: "gb" },
  { code: "is", label: "Íslenska", flag: "is", note: "Þýtt af gervigreind" },
  { code: "es", label: "Español",  flag: "es", note: "Traducido por IA" },
  { code: "de", label: "Deutsch",  flag: "de", note: "Von KI übersetzt" },
  { code: "da", label: "Dansk",    flag: "dk", note: "Oversat af AI" },
];

// Inline SVG flags. `uid` makes the UK clip-path ids unique per instance
// (the flag is drawn once in the toggle and once per menu row).
window.APG_FLAG = function (code, uid) {
  switch (code) {
    case "gb":
      return (
        '<svg viewBox="0 0 60 30" preserveAspectRatio="none">' +
        '<clipPath id="gbt' + uid + '"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>' +
        '<rect width="60" height="30" fill="#012169"/>' +
        '<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>' +
        '<path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#gbt' + uid + ')" stroke="#C8102E" stroke-width="4"/>' +
        '<path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>' +
        '<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>' +
        "</svg>"
      );
    case "is":
      return (
        '<svg viewBox="0 0 25 18" preserveAspectRatio="none">' +
        '<rect width="25" height="18" fill="#02529C"/>' +
        '<rect x="7" width="4" height="18" fill="#fff"/><rect y="7" width="25" height="4" fill="#fff"/>' +
        '<rect x="8" width="2" height="18" fill="#DC1E35"/><rect y="8" width="25" height="2" fill="#DC1E35"/>' +
        "</svg>"
      );
    case "es":
      return (
        '<svg viewBox="0 0 30 20" preserveAspectRatio="none">' +
        '<rect width="30" height="20" fill="#AA151B"/>' +
        '<rect y="5" width="30" height="10" fill="#F1BF00"/>' +
        "</svg>"
      );
    case "de":
      return (
        '<svg viewBox="0 0 30 18" preserveAspectRatio="none">' +
        '<rect width="30" height="6" fill="#000"/>' +
        '<rect y="6" width="30" height="6" fill="#DD0000"/>' +
        '<rect y="12" width="30" height="6" fill="#FFCE00"/>' +
        "</svg>"
      );
    case "dk":
      return (
        '<svg viewBox="0 0 37 28" preserveAspectRatio="none">' +
        '<rect width="37" height="28" fill="#C8102E"/>' +
        '<rect x="12" width="4" height="28" fill="#fff"/><rect y="12" width="37" height="4" fill="#fff"/>' +
        "</svg>"
      );
    default:
      return "";
  }
};

window.APG_STRINGS = {
  en: {
    "nav-nest": "The Nest",
    "nav-team": "The Team",
    "nav-game": "The Game",
    "nav-cta": "Get updates",
    "hero-badge": "Reykjavík · indie game studio",
    "hero-h1": 'We make games that get people <span class="script">loud.</span>',
    "hero-lead": "The perfect excuse to argue with your friends — a party game about debate, corruption and calling people out.",
    "hero-cta1": "Meet State Your Case",
    "hero-cta2": "Join the mailing list",
    "studio-eyebrow": "THE NEST",
    "studio-h2": "Four students, one game dev course, zero chill.",
    "studio-p": "Angry Puffin Games is an Icelandic studio building party games for mobile. We care about two things: getting everyone playing together, and giving them something worth shouting about.",
    "studio-quote": "“We wanted the UI to feel clean and simple and easy to use.”",
    "game-mode": "Local (one phone) · Online — coming soon",
    "game-desc": "An Icelandic party game inspired by parliamentary debate culture and the Morfís speech competition hosted in Universities here in Iceland. Teams get a topic, give a minute speech, sneak in corruption tasks for points — and at the end of the round, accuse the rivals they think were completing their corruption.",
    "loop1-h": "State your case",
    "loop1-p": "The moderator picks a Versus or Scenario topic. Your team/you prepare and then argue it like your life depends on it.",
    "loop2-h": "Get corrupt",
    "loop2-p": "Secret tasks worth big points: fake a sneezing fit, quote a philosopher who does not exist, compliment your opponent mid-insult. Do it without getting caught.",
    "loop3-h": "Point fingers",
    "loop3-p": "Round over. Accuse whoever you think completed their tasks. Get the correct accusations and steal their points if not lose some of yours.",
    "screens-h2": "Clean and simple and easy to use.",
    "packs-label": "Pick your Interest — Topic Packs",
    "events-eyebrow": "EVENTS",
    "events-h2": "Where to find us.",
    "event1-title": "Gamescom 2026 · Cologne",
    "event1-p": "We are packing the puffins and bringing State Your Case to Cologne. Come argue with us in person — or sign up below and we will tell you where to find the booth.",
    "event2-title": "GameMakers Iceland · Reykjavík",
    "event2-p": "Home turf. Catch us at GameMakers Iceland, showing off State Your Case alongside the rest of the country's game dev scene. Come say hæ, play a round, and tell us we are wrong.",
    "team-h2": "The Puffins",
    "team-p": "Computer science and software engineering students who met in a game dev course and never stopped arguing.",
    "signup-h2": "Be first to argue.",
    "signup-p": "Launch dates, new topic packs, and more news.",
    "signup-placeholder": "you@example.com",
    "signup-submit": "Sign me up",
    "signup-sending": "Sending…",
    "signup-error": "Something went wrong — please try again.",
    "signup-success": "You are on the list. Start practising your closing statement.",
    "signup-fine": "No spam, no data sold, unsubscribe any time.",
    "ideas-p": "Got your own topics or corruption tasks you want to see in the game? Send them our way — we'll take a look and maybe add them in.",
    "ideas-btn": "Send us your ideas",
    "footer-copy": "© 2026 Angry Puffin Games · Reykjavík, Iceland",
    "footer-back": "Back to top",
  },

  is: {
    "nav-nest": "Hreiðrið",
    "nav-team": "Liðið",
    "nav-game": "Leikurinn",
    "nav-cta": "Fá fréttir",
    "hero-badge": "Reykjavík · sjálfstætt leikjastúdíó",
    "hero-h1": 'Við gerum leiki sem fá fólk til að <span class="script">öskra.</span>',
    "hero-lead": "Fullkomin afsökun til að rífast við vinina — partíleikur um kappræður, spillingu og að benda á fólk.",
    "hero-cta1": "Kynnstu State Your Case",
    "hero-cta2": "Skráðu þig á póstlistann",
    "studio-eyebrow": "HREIÐRIÐ",
    "studio-h2": "Fjórir nemendur, eitt leikjagerðarnámskeið, engin ró.",
    "studio-p": "Angry Puffin Games er íslenskt stúdíó sem býr til partíleiki fyrir síma. Okkur er annt um tvennt: að fá alla til að spila saman og gefa þeim eitthvað sem er þess virði að öskra um.",
    "studio-quote": "„Við vildum að viðmótið væri hreint, einfalt og auðvelt í notkun.“",
    "game-mode": "Staðbundið (einn sími) · Netspilun — væntanleg",
    "game-desc": "Íslenskur partíleikur innblásinn af kappræðuhefð þingsins og Morfís-ræðukeppninni sem haldin er í háskólum hér á landi. Lið fá umræðuefni, halda eins mínútu ræðu, lauma inn spillingarverkefnum fyrir stig — og í lok umferðar saka andstæðingana sem þau halda að hafi verið að klára spillinguna sína.",
    "loop1-h": "Færðu rök fyrir máli þínu",
    "loop1-p": "Stjórnandinn velur Versus- eða atburðarásarefni. Liðið þitt/þú undirbýrð þig og rífst svo eins og líf þitt liggi við.",
    "loop2-h": "Vertu spillt",
    "loop2-p": "Leynileg verkefni sem gefa mörg stig: þykjast fá hnerrakast, vitna í heimspeking sem er ekki til, hrósa andstæðingnum í miðri móðgun. Gerðu það án þess að nást.",
    "loop3-h": "Bentu á sökudólga",
    "loop3-p": "Umferð búin. Sakaðu þau sem þú heldur að hafi klárað verkefnin sín. Réttar ásakanir stela stigum þeirra — annars tapar þú stigum.",
    "screens-h2": "Hreint, einfalt og auðvelt í notkun.",
    "packs-label": "Veldu áhugasvið — Efnispakkar",
    "events-eyebrow": "VIÐBURÐIR",
    "events-h2": "Hvar má finna okkur.",
    "event1-title": "Gamescom 2026 · Köln",
    "event1-p": "Við pökkum lundunum og förum með State Your Case til Kölnar. Komdu og rífstu við okkur í eigin persónu — eða skráðu þig hér að neðan og við segjum þér hvar básinn er.",
    "event2-title": "GameMakers Iceland · Reykjavík",
    "event2-p": "Heimavöllur. Náðu í okkur á GameMakers Iceland þar sem við sýnum State Your Case ásamt öðrum í íslensku leikjagerðarsenunni. Komdu og segðu hæ, spilaðu umferð og segðu okkur að við höfum rangt fyrir okkur.",
    "team-h2": "Lundarnir",
    "team-p": "Tölvunarfræði- og hugbúnaðarverkfræðinemar sem kynntust á leikjagerðarnámskeiði og hættu aldrei að rífast.",
    "signup-h2": "Vertu fyrst til að rífast.",
    "signup-p": "Útgáfudagar, nýir efnispakkar og fleiri fréttir.",
    "signup-placeholder": "þú@dæmi.is",
    "signup-submit": "Skráðu mig",
    "signup-sending": "Sendi…",
    "signup-error": "Eitthvað fór úrskeiðis — reyndu aftur.",
    "signup-success": "Þú ert á listanum. Byrjaðu að æfa lokaræðuna þína.",
    "signup-fine": "Ekkert ruslpóst, engin gögn seld, afskráðu þig hvenær sem er.",
    "ideas-p": "Ertu með þín eigin umræðuefni eða spillingarverkefni sem þú vilt sjá í leiknum? Sendu þau til okkar — við kíkjum á þau og bætum þeim kannski við.",
    "ideas-btn": "Sendu okkur hugmyndir",
    "footer-copy": "© 2026 Angry Puffin Games · Reykjavík, Ísland",
    "footer-back": "Aftur efst",
  },

  es: {
    "nav-nest": "El Nido",
    "nav-team": "El Equipo",
    "nav-game": "El Juego",
    "nav-cta": "Recibir novedades",
    "hero-badge": "Reikiavik · estudio indie de videojuegos",
    "hero-h1": 'Hacemos juegos que ponen a la gente a <span class="script">gritar.</span>',
    "hero-lead": "La excusa perfecta para discutir con tus amigos: un juego de fiesta sobre debate, corrupción y señalar a los demás.",
    "hero-cta1": "Conoce State Your Case",
    "hero-cta2": "Únete a la lista de correo",
    "studio-eyebrow": "EL NIDO",
    "studio-h2": "Cuatro estudiantes, un curso de desarrollo de videojuegos, cero calma.",
    "studio-p": "Angry Puffin Games es un estudio islandés que crea juegos de fiesta para móvil. Nos importan dos cosas: que todos jueguen juntos y darles algo por lo que valga la pena gritar.",
    "studio-quote": "«Queríamos que la interfaz fuera limpia, sencilla y fácil de usar.»",
    "game-mode": "Local (un solo teléfono) · En línea — próximamente",
    "game-desc": "Un juego de fiesta islandés inspirado en la cultura del debate parlamentario y en el concurso de oratoria Morfís que se celebra en las universidades de Islandia. Los equipos reciben un tema, dan un discurso de un minuto, cuelan tareas de corrupción para ganar puntos y, al final de la ronda, acusan a los rivales que creen que estaban cumpliendo su corrupción.",
    "loop1-h": "Defiende tu caso",
    "loop1-p": "El moderador elige un tema de Versus o Escenario. Tu equipo (o tú) se prepara y luego lo defiende como si te fuera la vida en ello.",
    "loop2-h": "Corrómpete",
    "loop2-p": "Tareas secretas que valen muchos puntos: finge un ataque de estornudos, cita a un filósofo que no existe, halaga a tu rival en plena pulla. Hazlo sin que te pillen.",
    "loop3-h": "Señala culpables",
    "loop3-p": "Fin de la ronda. Acusa a quien creas que completó sus tareas. Acierta y les robas puntos; si no, pierdes algunos de los tuyos.",
    "screens-h2": "Limpio, sencillo y fácil de usar.",
    "packs-label": "Elige tu interés — Packs de temas",
    "events-eyebrow": "EVENTOS",
    "events-h2": "Dónde encontrarnos.",
    "event1-title": "Gamescom 2026 · Colonia",
    "event1-p": "Empacamos a los frailecillos y llevamos State Your Case a Colonia. Ven a discutir con nosotros en persona, o apúntate abajo y te diremos dónde está el stand.",
    "event2-title": "GameMakers Iceland · Reikiavik",
    "event2-p": "Terreno propio. Encuéntranos en GameMakers Iceland, donde mostramos State Your Case junto al resto de la escena islandesa de desarrollo. Ven a saludar, juega una ronda y dinos que estamos equivocados.",
    "team-h2": "Los Frailecillos",
    "team-p": "Estudiantes de informática e ingeniería de software que se conocieron en un curso de desarrollo de videojuegos y nunca dejaron de discutir.",
    "signup-h2": "Sé el primero en discutir.",
    "signup-p": "Fechas de lanzamiento, nuevos packs de temas y más novedades.",
    "signup-placeholder": "tu@ejemplo.com",
    "signup-submit": "Apúntame",
    "signup-sending": "Enviando…",
    "signup-error": "Algo salió mal — inténtalo de nuevo.",
    "signup-success": "Estás en la lista. Empieza a practicar tu discurso final.",
    "signup-fine": "Sin spam, sin vender datos, cancela cuando quieras.",
    "ideas-p": "¿Tienes tus propios temas o tareas de corrupción que quieres ver en el juego? Envíanoslos: les echaremos un vistazo y quizá los añadamos.",
    "ideas-btn": "Envíanos tus ideas",
    "footer-copy": "© 2026 Angry Puffin Games · Reikiavik, Islandia",
    "footer-back": "Volver arriba",
  },

  de: {
    "nav-nest": "Das Nest",
    "nav-team": "Das Team",
    "nav-game": "Das Spiel",
    "nav-cta": "Updates erhalten",
    "hero-badge": "Reykjavík · Indie-Spielestudio",
    "hero-h1": 'Wir machen Spiele, die Leute <span class="script">laut</span> machen.',
    "hero-lead": "Die perfekte Ausrede, um mit deinen Freunden zu streiten – ein Partyspiel über Debatten, Korruption und das Bloßstellen anderer.",
    "hero-cta1": "Lerne State Your Case kennen",
    "hero-cta2": "Trag dich in den Newsletter ein",
    "studio-eyebrow": "DAS NEST",
    "studio-h2": "Vier Studenten, ein Game-Dev-Kurs, null Gelassenheit.",
    "studio-p": "Angry Puffin Games ist ein isländisches Studio, das Partyspiele für Mobilgeräte entwickelt. Uns sind zwei Dinge wichtig: alle zusammen zum Spielen zu bringen und ihnen etwas zu geben, worüber es sich zu schreien lohnt.",
    "studio-quote": "„Wir wollten, dass sich die Oberfläche sauber, einfach und leicht zu bedienen anfühlt.“",
    "game-mode": "Lokal (ein Handy) · Online — bald verfügbar",
    "game-desc": "Ein isländisches Partyspiel, inspiriert von der parlamentarischen Debattenkultur und dem Morfís-Redewettbewerb, der an den Universitäten hier in Island stattfindet. Teams bekommen ein Thema, halten eine einminütige Rede, schmuggeln Korruptionsaufgaben für Punkte ein – und beschuldigen am Ende der Runde die Gegner, von denen sie glauben, dass sie ihre Korruption erfüllt haben.",
    "loop1-h": "Vertritt deinen Standpunkt",
    "loop1-p": "Der Moderator wählt ein Versus- oder Szenario-Thema. Dein Team/du bereitet sich vor und streitet dann, als hinge dein Leben davon ab.",
    "loop2-h": "Werde korrupt",
    "loop2-p": "Geheime Aufgaben, die viele Punkte bringen: einen Niesanfall vortäuschen, einen Philosophen zitieren, den es nicht gibt, deinem Gegner mitten in der Beleidigung ein Kompliment machen. Mach es, ohne erwischt zu werden.",
    "loop3-h": "Zeig mit dem Finger",
    "loop3-p": "Runde vorbei. Beschuldige, wer deiner Meinung nach seine Aufgaben erfüllt hat. Liegst du richtig, stiehlst du ihre Punkte – sonst verlierst du einige von deinen.",
    "screens-h2": "Sauber, einfach und leicht zu bedienen.",
    "packs-label": "Wähl dein Interesse — Themenpakete",
    "events-eyebrow": "EVENTS",
    "events-h2": "Wo du uns findest.",
    "event1-title": "Gamescom 2026 · Köln",
    "event1-p": "Wir packen die Papageitaucher ein und bringen State Your Case nach Köln. Komm und streite mit uns persönlich – oder trag dich unten ein und wir sagen dir, wo du den Stand findest.",
    "event2-title": "GameMakers Iceland · Reykjavík",
    "event2-p": "Heimspiel. Triff uns bei GameMakers Iceland, wo wir State Your Case zusammen mit dem Rest der isländischen Spieleentwickler-Szene zeigen. Komm vorbei, sag hæ, spiel eine Runde und sag uns, dass wir falsch liegen.",
    "team-h2": "Die Papageitaucher",
    "team-p": "Informatik- und Software-Engineering-Studenten, die sich in einem Game-Dev-Kurs kennengelernt und nie aufgehört haben zu streiten.",
    "signup-h2": "Sei der Erste, der streitet.",
    "signup-p": "Release-Termine, neue Themenpakete und weitere News.",
    "signup-placeholder": "du@beispiel.de",
    "signup-submit": "Anmelden",
    "signup-sending": "Senden…",
    "signup-error": "Etwas ist schiefgelaufen – bitte versuch es erneut.",
    "signup-success": "Du stehst auf der Liste. Fang schon mal an, dein Schlusswort zu üben.",
    "signup-fine": "Kein Spam, keine Datenverkäufe, jederzeit abbestellbar.",
    "ideas-p": "Hast du eigene Themen oder Korruptionsaufgaben, die du im Spiel sehen willst? Schick sie uns – wir schauen sie uns an und fügen sie vielleicht hinzu.",
    "ideas-btn": "Schick uns deine Ideen",
    "footer-copy": "© 2026 Angry Puffin Games · Reykjavík, Island",
    "footer-back": "Nach oben",
  },

  da: {
    "nav-nest": "Reden",
    "nav-team": "Holdet",
    "nav-game": "Spillet",
    "nav-cta": "Få opdateringer",
    "hero-badge": "Reykjavík · indie-spilstudie",
    "hero-h1": 'Vi laver spil, der får folk til at <span class="script">råbe.</span>',
    "hero-lead": "Den perfekte undskyldning for at skændes med dine venner – et festspil om debat, korruption og at hænge folk ud.",
    "hero-cta1": "Mød State Your Case",
    "hero-cta2": "Tilmeld dig mailinglisten",
    "studio-eyebrow": "REDEN",
    "studio-h2": "Fire studerende, ét spiludviklingskursus, nul ro.",
    "studio-p": "Angry Puffin Games er et islandsk studie, der laver festspil til mobil. Vi går op i to ting: at få alle til at spille sammen og give dem noget, der er værd at råbe om.",
    "studio-quote": "»Vi ville have, at brugerfladen skulle føles ren, enkel og nem at bruge.«",
    "game-mode": "Lokalt (én telefon) · Online — kommer snart",
    "game-desc": "Et islandsk festspil inspireret af den parlamentariske debatkultur og Morfís-talekonkurrencen, der afholdes på universiteterne her i Island. Holdene får et emne, holder en et-minuts tale, sniger korruptionsopgaver ind for point – og ved rundens slutning anklager de de modstandere, de tror, var i gang med deres korruption.",
    "loop1-h": "Fremlæg din sag",
    "loop1-p": "Moderatoren vælger et Versus- eller Scenarie-emne. Dit hold/du forbereder jer og skændes så, som om livet afhang af det.",
    "loop2-h": "Bliv korrupt",
    "loop2-p": "Hemmelige opgaver, der giver mange point: lad som om du får et nyseanfald, citér en filosof, der ikke findes, ros din modstander midt i en fornærmelse. Gør det uden at blive opdaget.",
    "loop3-h": "Peg fingre",
    "loop3-p": "Runden er slut. Anklag dem, du tror, fuldførte deres opgaver. Rammer du rigtigt, stjæler du deres point – ellers mister du nogle af dine egne.",
    "screens-h2": "Rent, enkelt og nemt at bruge.",
    "packs-label": "Vælg din interesse — Emnepakker",
    "events-eyebrow": "BEGIVENHEDER",
    "events-h2": "Hvor du finder os.",
    "event1-title": "Gamescom 2026 · Köln",
    "event1-p": "Vi pakker lunderne og tager State Your Case med til Köln. Kom og skænds med os i egen person – eller tilmeld dig nedenfor, så fortæller vi dig, hvor standen er.",
    "event2-title": "GameMakers Iceland · Reykjavík",
    "event2-p": "Hjemmebane. Find os til GameMakers Iceland, hvor vi viser State Your Case frem sammen med resten af det islandske spiludviklingsmiljø. Kom og sig hæ, spil en runde, og fortæl os, at vi tager fejl.",
    "team-h2": "Lunderne",
    "team-p": "Datalogi- og softwareingeniørstuderende, der mødtes på et spiludviklingskursus og aldrig holdt op med at skændes.",
    "signup-h2": "Vær den første til at skændes.",
    "signup-p": "Udgivelsesdatoer, nye emnepakker og flere nyheder.",
    "signup-placeholder": "dig@eksempel.dk",
    "signup-submit": "Tilmeld mig",
    "signup-sending": "Sender…",
    "signup-error": "Noget gik galt – prøv igen.",
    "signup-success": "Du er på listen. Begynd at øve din afsluttende tale.",
    "signup-fine": "Ingen spam, ingen data solgt, afmeld når som helst.",
    "ideas-p": "Har du dine egne emner eller korruptionsopgaver, du gerne vil se i spillet? Send dem til os – vi kigger på dem og tilføjer dem måske.",
    "ideas-btn": "Send os dine idéer",
    "footer-copy": "© 2026 Angry Puffin Games · Reykjavík, Island",
    "footer-back": "Tilbage til toppen",
  },
};
