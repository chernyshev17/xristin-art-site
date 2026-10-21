document.addEventListener("DOMContentLoaded", () => {
  // ===== Language handling =====

  const translations = {
    en: {
      "brand.sub": "Oil painting \u2022 Belgium",
      "nav.home": "Home",
      "nav.gallery": "Gallery",
      "nav.available": "Available",
      "nav.about": "About",
      "nav.contact": "Contact",
      "footer.rights": "All rights reserved.",

      // HOME
      "home.hero_tagline": "Oil on canvas \u2022 Belgium",
      "home.hero_title": "Where atmosphere matters more than subject",
      "home.hero_text":
        "Born in Vladivostok and now based in Belgium, Kristina paints in oil on canvas with a focus on atmosphere rather than strict subjects. Her works sit between still life and landscape, built in slow layers of colour and memory to bring a calm, familiar presence into everyday spaces.",
      "home.hero_cta_gallery": "View gallery",
      "home.hero_cta_available": "Available works",
      "home.series_title": "Series",

      "series.stilllife_title": "Still Life",
      "series.stilllife_text":
        "Tabletop scenes with tea, flowers and glass, painted in layered, muted colours.",
      "series.landscapes_title": "Landscapes",
      "series.landscapes_text":
        "Fields, paths and distant trees, often in the soft grey light of the North.",
      "series.birch_title": "Birch Series",
      "series.birch_text":
        "Seven expressive birch paintings, focused on rhythm, trunk and colour.",

      // GALLERY
      "gallery.title": "Gallery",
      "gallery.intro":
        "A selection of recent paintings, grouped into still lifes, landscapes and the birch tree series.",
      "gallery.stilllife_title": "Still Life",
      "gallery.stilllife_desc":
        "Intimate arrangements of everyday objects, built slowly in layers of oil.",
      "gallery.landscapes_title": "Landscapes",
      "gallery.landscapes_desc":
        "Fields, paths, water and skies, painted in a quieter, atmospheric register.",
      "gallery.birch_title": "Birch Series",
      "gallery.birch_desc":
        "A series of expressive birch paintings, focusing on rhythm, gesture and colour.",

      // AVAILABLE
      "available.title": "Available works",
      "available.intro":
        "Original oil paintings currently available. For details, framing options or shipping, please get in touch via the contact form.",
      "available.sold_title": "Sold works",
      "available.sold_intro":
        "A selection of paintings that have already found their homes.",
      "available.filter_label": "Filter by series",
      "available.filter_all": "All",
      "available.inquire": "Inquire about this work",
      "available.faq_title": "Practical information",
      "available.faq_shipping_q": "Shipping",
      "available.faq_shipping_a":
        "Works are shipped from Belgium. Packing is done carefully and tracked shipping is available worldwide.",
      "available.faq_framing_q": "Framing",
      "available.faq_framing_a":
        "Paintings are sold unframed by default, but framing can be arranged and added to the price on request.",
      "available.faq_payment_q": "Payment",
      "available.faq_payment_a":
        "Bank transfer and common European payment methods can be arranged after we confirm the work and shipping.",

      "badge.sold": "Sold",
      "badge.new": "New",

      // ABOUT
      "about.title": "About",
      "about.text_1":
        "My name is Kristina and I work primarily with oil on canvas. I was born in Vladivostok, by the Pacific Ocean, and now live in Belgium under a quieter northern sky. That distance between places \u2014 between bright coasts and soft, grey light \u2014 naturally slips into my work.",
      "about.text_2":
        "I move between still life, landscape and more abstract, expressive series like the Birch series. I\u2019m less interested in strict categories and more in atmosphere: the pause in a room, the weight of a colour, the way light can make something feel suddenly familiar. Each painting is built slowly in layers, so that it keeps a trace of earlier decisions and moods underneath what you see on the surface.",
      "about.text_3":
        "My work is meant to be lived with. I like the idea of a painting quietly becoming part of someone\u2019s everyday surroundings \u2014 hanging in a hallway, above a table, next to a window \u2014 and catching the eye at unexpected moments. If one of my works can give a feeling of calm, recognition or simple curiosity to the person who lives with it, then it is doing what it was made to do.",
      "about.text_4": "",
      "about.timeline_title": "Selected moments",
      "about.timeline_item1":
        "2021 \u2013 First landscape series, small works on paper and canvas.",
      "about.timeline_item2":
        "2023 \u2013 Birth of the Birch Series, a group of seven expressive vertical tree paintings.",
      "about.timeline_item3":
        "2024 \u2013 Still life paintings with tea & flowers become a recurring motif. Familiar landscapes and memories prevail.",
      "about.timeline_item4":
        "2025 \u2013 New work focusing on color, expression and atmosphere. Exploring new horizons.",

      // CONTACT
      "contact.title": "Contact",
      "contact.intro":
        "For enquiries about available works, commissions or exhibitions, please use the form below or email directly.",
      "contact.form_name_label": "Name",
      "contact.form_email_label": "Email",
      "contact.form_work_label": "Work you are interested in",
      "contact.form_message_label": "Message",
      "contact.form_submit": "Send message",
      "contact.side_title": "Studio & contact",
      "contact.side_text_1":
        "Based in Belgium, working mainly in oil on canvas.",
      "contact.side_text_2":
        "If you are interested in a specific painting, please mention its title and size so it’s easy to identify.",
      "contact.faq_title": "Frequently asked",
      "contact.faq_view_q": "Can I see a work in person?",
      "contact.faq_view_a":
        "Viewings in Belgium may be possible by appointment, depending on the work.",
      "contact.faq_commission_q": "Do you accept commissions?",
      "contact.faq_commission_a":
        "Occasionally, yes – especially for still lifes and interiors. Feel free to describe what you have in mind."
    },

    fr: {
      "brand.sub": "Peinture à l'huile \u2022 Belgique",
      "nav.home": "Accueil",
      "nav.gallery": "Galerie",
      "nav.available": "Disponibles",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "footer.rights": "Tous droits réservés.",

      // HOME
      "home.hero_tagline": "Huile sur toile \u2022 Belgique",
      "home.hero_title": "L’atmosphère compte plus que le sujet",
      "home.hero_text":
        "Née à Vladivostok et désormais basée en Belgique, Kristina peint à l’huile sur toile en privilégiant l’atmosphère plutôt que des sujets stricts. Ses œuvres se situent entre nature morte et paysage, construites lentement en couches de couleur et de mémoire pour apporter une présence calme et familière dans les espaces du quotidien.",
      "home.hero_cta_gallery": "Voir la galerie",
      "home.hero_cta_available": "Œuvres disponibles",
      "home.series_title": "Séries",

      "series.stilllife_title": "Natures mortes",
      "series.stilllife_text":
        "Scènes de table avec thé, fleurs et verre, peintes en couches aux couleurs atténuées.",
      "series.landscapes_title": "Paysages",
      "series.landscapes_text":
        "Champs, chemins et arbres lointains, souvent dans une lumière grise du Nord.",
      "series.birch_title": "Série Bouleaux",
      "series.birch_text":
        "Sept tableaux expressifs de bouleaux, centrés sur le rythme, le tronc et la couleur.",

      // GALLERY
      "gallery.title": "Galerie",
      "gallery.intro":
        "Une sélection de peintures récentes, regroupées en natures mortes, paysages et la série de bouleaux.",
      "gallery.stilllife_title": "Natures mortes",
      "gallery.stilllife_desc":
        "Arrangements intimes d'objets du quotidien, construits lentement en couches d'huile.",
      "gallery.landscapes_title": "Paysages",
      "gallery.landscapes_desc":
        "Champs, chemins, eau et ciel, peints dans un registre plus silencieux et atmosphérique.",
      "gallery.birch_title": "Série Bouleaux",
      "gallery.birch_desc":
        "Une série de peintures de bouleaux expressives, centrées sur le rythme, le geste et la couleur.",

      // AVAILABLE
      "available.title": "Œuvres disponibles",
      "available.intro":
        "Peintures originales à l'huile actuellement disponibles. Pour les détails, l'encadrement ou l'envoi, merci d'utiliser le formulaire de contact.",
      "available.sold_title": "Œuvres vendues",
      "available.sold_intro":
        "Une sélection de peintures qui ont déjà trouvé preneur.",
      "available.filter_label": "Filtrer par série",
      "available.filter_all": "Toutes",
      "available.inquire": "Renseignez-vous sur cette œuvre",
      "available.faq_title": "Informations pratiques",
      "available.faq_shipping_q": "Expédition",
      "available.faq_shipping_a":
        "Les œuvres sont expédiées depuis la Belgique. L'emballage est soigneux et un envoi suivi est possible dans le monde entier.",
      "available.faq_framing_q": "Encadrement",
      "available.faq_framing_a":
        "Les peintures sont vendues non encadrées par défaut, mais un encadrement peut être organisé et ajouté au prix sur demande.",
      "available.faq_payment_q": "Paiement",
      "available.faq_payment_a":
        "Un virement bancaire et d'autres moyens de paiement européens courants peuvent être organisés après confirmation de l'œuvre et de l'envoi.",

      "badge.sold": "Vendu",
      "badge.new": "Nouveau",

      // ABOUT
      "about.title": "À propos",
      "about.text_1":
        "Je m’appelle Kristina et je travaille principalement à l’huile sur toile. Je suis née à Vladivostok, au bord de l’océan Pacifique, et je vis aujourd’hui en Belgique, sous un ciel du nord plus doux et plus calme. Cette distance entre les lieux — entre des côtes lumineuses et une lumière grise et douce — se glisse naturellement dans mon travail.",
      "about.text_2":
        "Je passe de la nature morte au paysage, et à des séries plus abstraites et expressives comme la série Birch. Les catégories m’intéressent moins que l’atmosphère : la pause dans une pièce, le poids d’une couleur, la façon dont la lumière peut rendre quelque chose soudainement familier. Chaque peinture se construit lentement, par couches, en gardant sous la surface la trace des décisions et des états d’esprit précédents.",
      "about.text_3":
        "Mes œuvres sont faites pour être vécues au quotidien. J’aime l’idée qu’un tableau devienne peu à peu une partie silencieuse de l’espace de quelqu’un — accroché dans un couloir, au-dessus d’une table, près d’une fenêtre — et accroche le regard à des moments inattendus. Si l’une de mes œuvres peut apporter un sentiment de calme, de reconnaissance ou simplement de curiosité à la personne qui vit avec elle, alors elle fait ce pour quoi elle a été créée.",
      "about.text_4": "",
      "about.timeline_title": "Moments choisis",
      "about.timeline_item1":
        "2021 – Première série de paysages, petits formats sur papier et toile.",
      "about.timeline_item2":
        "2023 – Naissance de la série Birch, un ensemble de sept tableaux verticaux et expressifs d’arbres.",
      "about.timeline_item3":
        "2024 – Les natures mortes avec thé et fleurs deviennent un motif récurrent. Les paysages familiers et les souvenirs prennent plus de place.",
      "about.timeline_item4":
        "2025 – Nouveaux travaux axés sur la couleur, l’expression et l’atmosphère. Exploration de nouveaux horizons.",

      // CONTACT
      "contact.title": "Contact",
      "contact.intro":
        "Pour toute question concernant les œuvres disponibles, les commandes ou les expositions, utilisez le formulaire ci-dessous ou écrivez directement.",
      "contact.form_name_label": "Nom",
      "contact.form_email_label": "Email",
      "contact.form_work_label": "Œuvre qui vous intéresse",
      "contact.form_message_label": "Message",
      "contact.form_submit": "Envoyer",
      "contact.side_title": "Atelier & contact",
      "contact.side_text_1":
        "Basée en Belgique, travaille principalement à l’huile sur toile.",
      "contact.side_text_2":
        "Si une peinture en particulier vous intéresse, merci de mentionner son titre et son format pour la retrouver facilement.",
      "contact.faq_title": "Questions fréquentes",
      "contact.faq_view_q":
        "Puis-je voir une œuvre en vrai ?",
      "contact.faq_view_a":
        "Des visites en Belgique peuvent être possibles sur rendez-vous, selon l’œuvre.",
      "contact.faq_commission_q":
        "Acceptez-vous des commandes sur mesure ?",
      "contact.faq_commission_a":
        "Parfois, oui – surtout pour des natures mortes et des intérieurs. N'hésitez pas à décrire votre idée."
    },

    nl: {
      "brand.sub": "Olieverf \u2022 België",
      "nav.home": "Home",
      "nav.gallery": "Galerij",
      "nav.available": "Beschikbaar",
      "nav.about": "Over",
      "nav.contact": "Contact",
      "footer.rights": "Alle rechten voorbehouden.",

      // HOME
      "home.hero_tagline": "Olie op doek \u2022 België",
      "home.hero_title": "Waar sfeer belangrijker is dan onderwerp",
      "home.hero_text":
        "Geboren in Vladivostok en nu gevestigd in België schildert Kristina met olieverf op doek, met de nadruk op sfeer in plaats van strikte onderwerpen. Haar werk beweegt zich tussen stilleven en landschap, langzaam in lagen van kleur en herinnering opgebouwd om een rustige, vertrouwde aanwezigheid in alledaagse ruimtes te brengen.",
      "home.hero_cta_gallery": "Bekijk de galerij",
      "home.hero_cta_available": "Beschikbare werken",
      "home.series_title": "Reeksen",

      "series.stilllife_title": "Stillevens",
      "series.stilllife_text":
        "Tafereeltjes met thee, bloemen en glas, in lagen geschilderd met gedempte kleuren.",
      "series.landscapes_title": "Landschappen",
      "series.landscapes_text":
        "Velden, paden en verre bomen, vaak in het zachte grijze licht van het noorden.",
      "series.birch_title": "Berkenreeks",
      "series.birch_text":
        "Zeven expressieve berkenschilderijen, gericht op ritme, stam en kleur.",

      // GALLERY
      "gallery.title": "Galerij",
      "gallery.intro":
        "Een selectie recente schilderijen, gegroepeerd in stillevens, landschappen en de berkenreeks.",
      "gallery.stilllife_title": "Stillevens",
      "gallery.stilllife_desc":
        "Intieme schikkingen van alledaagse voorwerpen, langzaam opgebouwd in lagen olieverf.",
      "gallery.landscapes_title": "Landschappen",
      "gallery.landscapes_desc":
        "Velden, paden, water en luchten, geschilderd in een stille, atmosferische toon.",
      "gallery.birch_title": "Berkenreeks",
      "gallery.birch_desc":
        "Een reeks expressieve berken, met de nadruk op ritme, gebaar en kleur.",

      // AVAILABLE
      "available.title": "Beschikbare werken",
      "available.intro":
        "Originele olieverfschilderijen die momenteel beschikbaar zijn. Voor details, inlijsten of verzending, kunt u het contactformulier gebruiken.",
      "available.sold_title": "Verkochte werken",
      "available.sold_intro":
        "Een selectie schilderijen die inmiddels een thuis hebben gevonden.",
      "available.filter_label": "Filter op reeks",
      "available.filter_all": "Alle",
      "available.inquire": "Informeer naar dit werk",
      "available.faq_title": "Praktische informatie",
      "available.faq_shipping_q": "Verzending",
      "available.faq_shipping_a":
        "Werken worden verzonden vanuit België. Ze worden zorgvuldig verpakt en aangetekende verzending is wereldwijd mogelijk.",
      "available.faq_framing_q": "Inlijsten",
      "available.faq_framing_a":
        "Schilderijen worden standaard zonder lijst verkocht, maar inlijsten kan geregeld worden en aan de prijs worden toegevoegd op verzoek.",
      "available.faq_payment_q": "Betaling",
      "available.faq_payment_a":
        "Overschrijving en gangbare Europese betaalmethoden kunnen worden afgesproken nadat werk en verzending zijn bevestigd.",

      "badge.sold": "Verkocht",
      "badge.new": "Nieuw",

      // ABOUT
      "about.title": "Over",
      "about.text_1":
        "Mijn naam is Kristina en ik werk voornamelijk met olieverf op doek. Ik ben geboren in Vladivostok, aan de Grote Oceaan, en woon nu in België onder een stillere noorderlucht. Die afstand tussen plaatsen — tussen heldere kusten en zacht, grijs licht — sijpelt vanzelf mijn werk binnen.",
      "about.text_2":
        "Ik beweeg tussen stilleven, landschap en meer abstracte, expressieve reeksen zoals de Birch-serie. Strikte categorieën interesseren mij minder dan sfeer: de pauze in een kamer, het gewicht van een kleur, de manier waarop licht iets plotseling vertrouwd kan laten aanvoelen. Elk schilderij wordt langzaam in lagen opgebouwd, zodat onder het oppervlak een spoor blijft van eerdere beslissingen en stemmingen.",
      "about.text_3":
        "Mijn werk is bedoeld om mee te leven. Ik houd van het idee dat een schilderij stilletjes deel wordt van iemands dagelijkse omgeving — hangend in een gang, boven een tafel, naast een raam — en op onverwachte momenten het oog vangt. Als één van mijn werken een gevoel van rust, herkenning of eenvoudige nieuwsgierigheid kan geven aan degene die ermee samenleeft, dan doet het wat het moet doen.",
      "about.text_4": "",
      "about.timeline_title": "Geselecteerde momenten",
      "about.timeline_item1":
        "2021 – Eerste landschapsreeks, kleine werken op papier en doek.",
      "about.timeline_item2":
        "2023 – Ontstaan van de Birch-serie, een groep van zeven expressieve verticale boomschilderijen.",
      "about.timeline_item3":
        "2024 – Stillevens met thee en bloemen worden een terugkerend motief. Vertrouwde landschappen en herinneringen krijgen meer ruimte.",
      "about.timeline_item4":
        "2025 – Nieuw werk met focus op kleur, expressie en sfeer. Verkennen van nieuwe horizonten.",

      // CONTACT
      "contact.title": "Contact",
      "contact.intro":
        "Voor vragen over beschikbare werken, opdrachten of tentoonstellingen kunt u gebruikmaken van het onderstaande formulier of rechtstreeks mailen.",
      "contact.form_name_label": "Naam",
      "contact.form_email_label": "E-mail",
      "contact.form_work_label": "Werk waarin u bent geïnteresseerd",
      "contact.form_message_label": "Bericht",
      "contact.form_submit": "Versturen",
      "contact.side_title": "Atelier & contact",
      "contact.side_text_1":
        "Gebaseerd in België, werkt voornamelijk met olieverf op doek.",
      "contact.side_text_2":
        "Als u geïnteresseerd bent in een specifiek schilderij, vermeld dan graag de titel en het formaat.",
      "contact.faq_title": "Veelgestelde vragen",
      "contact.faq_view_q": "Kan ik een werk in het echt zien?",
      "contact.faq_view_a":
        "Bezichtigingen in België zijn soms mogelijk op afspraak, afhankelijk van het werk.",
      "contact.faq_commission_q": "Neemt u opdrachten aan?",
      "contact.faq_commission_a":
        "Af en toe, ja – vooral voor stillevens en interieurs. Beschrijf gerust wat u in gedachten heeft."
    }
  };

  Object.assign(translations.en, {
    "gallery.intro": "Paintings in oil and oil pastel, alongside still lifes, landscapes and the Birch Series.",
    "gallery.oilpastel_title": "Oil & Oil Pastel",
    "gallery.oilpastel_desc": "Paintings combining layered oil colour with the expressive marks of oil pastel.",
    "medium.oil": "Oil on canvas",
    "medium.oilpastel": "Oil and oil pastel on canvas",
    "work.three_panels": "3 panels",
    "work.each": "each",
    "work.set_price": "for the complete set of 3",
    "nav.skip": "Skip to content",
    "contact.sending": "Sending…",
    "contact.success": "Thank you — your enquiry has been submitted.",
    "contact.error": "We could not confirm delivery. Your message is still here. Please try again or email xristina.gallery@gmail.com.",
    "gallery.enlarge": "Enlarge",
    "gallery.close": "Close enlarged view",
    "gallery.previous": "Previous painting",
    "gallery.next": "Next painting",
    "nav.top": "Back to top",
    "available.empty": "No works in this series are shown here."
});
  Object.assign(translations.fr, {
    "gallery.intro": "Peintures à l’huile et au pastel à l’huile, natures mortes, paysages et série Bouleaux.",
    "gallery.oilpastel_title": "Huile & pastel à l’huile",
    "gallery.oilpastel_desc": "Des peintures associant les couches de couleur à l’huile aux traits expressifs du pastel à l’huile.",
    "medium.oil": "Huile sur toile",
    "medium.oilpastel": "Huile et pastel à l’huile sur toile",
    "work.three_panels": "3 panneaux",
    "work.each": "chacun",
    "work.set_price": "pour l’ensemble des 3 panneaux",
    "nav.skip": "Aller au contenu",
    "contact.sending": "Envoi en cours…",
    "contact.success": "Merci — votre demande a été transmise.",
    "contact.error": "Nous n’avons pas pu confirmer l’envoi. Votre message est conservé. Réessayez ou écrivez à xristina.gallery@gmail.com.",
    "gallery.enlarge": "Agrandir",
    "gallery.close": "Fermer la vue agrandie",
    "gallery.previous": "Tableau précédent",
    "gallery.next": "Tableau suivant",
    "nav.top": "Retour en haut",
    "available.empty": "Aucune œuvre de cette série n’est présentée ici."
});
  Object.assign(translations.nl, {
    "gallery.intro": "Schilderijen in olieverf en oliepastel, naast stillevens, landschappen en de Berkenreeks.",
    "gallery.oilpastel_title": "Olieverf & oliepastel",
    "gallery.oilpastel_desc": "Schilderijen waarin lagen olieverf samengaan met expressieve lijnen in oliepastel.",
    "medium.oil": "Olieverf op doek",
    "medium.oilpastel": "Olieverf en oliepastel op doek",
    "work.three_panels": "3 panelen",
    "work.each": "per paneel",
    "work.set_price": "voor de complete set van 3",
    "nav.skip": "Naar de inhoud",
    "contact.sending": "Verzenden…",
    "contact.success": "Bedankt — uw aanvraag is verzonden.",
    "contact.error": "We konden de verzending niet bevestigen. Uw bericht staat er nog. Probeer opnieuw of mail naar xristina.gallery@gmail.com.",
    "gallery.enlarge": "Vergroten",
    "gallery.close": "Vergrote weergave sluiten",
    "gallery.previous": "Vorig schilderij",
    "gallery.next": "Volgend schilderij",
    "nav.top": "Terug naar boven",
    "available.empty": "Er zijn hier geen werken uit deze reeks te zien."
});
  // Translation text is never parsed as markup. A blocked storage API must not
  // disable navigation, artwork viewing or enquiries.
  let currentLang = "en";
  try { currentLang = localStorage.getItem("lang") || "en"; } catch (_) {}
  const requestedLang = new URLSearchParams(window.location.search).get("lang");
  if (translations[requestedLang]) currentLang = requestedLang;
  if (!translations[currentLang]) currentLang = "en";
  const t = key => translations[currentLang][key] || translations.en[key] || key;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const scrollBehavior = () => reducedMotion.matches ? "auto" : "smooth";

  function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    document.querySelectorAll('a[href]').forEach(link => {
      const url = new URL(link.getAttribute('href'), window.location.href);
      if (url.origin !== window.location.origin || !/\/(?:index\.html|gallery\.html|available\.html|about\.html|contact\.html)?$/.test(url.pathname)) return;
      if (url.pathname === '/index.html') url.pathname = '/';
      url.searchParams.set('lang', lang);
      url.searchParams.set('v', 'studio2');
      link.href = url.pathname + url.search + url.hash;
    });
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const value = translations[lang][el.dataset.i18n];
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll(".lang-btn").forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".artwork-view").forEach(button => {
      const title = button.closest(".slide")?.querySelector("strong")?.textContent ||
        button.closest(".gallery-item")?.querySelector(".work-title")?.childNodes[0]?.textContent?.trim();
      button.setAttribute("aria-label", `${t("gallery.enlarge")} ${title}`);
    });
    [["[data-prev]", "gallery.previous"], ["[data-next]", "gallery.next"],
      [".lightbox-close", "gallery.close"], [".back-to-top", "nav.top"]].forEach(([selector, key]) => {
      document.querySelectorAll(selector).forEach(el => el.setAttribute("aria-label", t(key)));
    });
  }
  applyTranslations(currentLang);
  document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (_) {}
      applyTranslations(lang);
    });
  });

  // Gallery carousels: navigation never scrolls the whole page or moves focus.
  document.querySelectorAll("[data-slideshow]").forEach(slideshow => {
    const slides = [...slideshow.querySelectorAll(".slide")];
    const thumbs = [...slideshow.querySelectorAll(".slideshow-thumb")];
    const position = slideshow.querySelector(".slideshow-position");
    let currentIndex = 0;
    function showSlide(index, scroll = true) {
      currentIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
        slide.hidden = i !== currentIndex;
      });
      thumbs.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === currentIndex);
        thumb.setAttribute("aria-pressed", String(i === currentIndex));
      });
      if (position) position.textContent = `${currentIndex + 1} / ${slides.length}`;
      if (scroll && thumbs[currentIndex]) {
        const thumb = thumbs[currentIndex];
        const row = thumb.parentElement;
        row.scrollTo({left: Math.max(0, thumb.offsetLeft - row.offsetLeft - (row.clientWidth - thumb.clientWidth) / 2), behavior: scrollBehavior()});
      }
    }
    slideshow.querySelector("[data-prev]")?.addEventListener("click", () => showSlide(currentIndex - 1));
    slideshow.querySelector("[data-next]")?.addEventListener("click", () => showSlide(currentIndex + 1));
    thumbs.forEach((thumb, i) => thumb.addEventListener("click", () => showSlide(i)));
    slideshow.addEventListener("keydown", event => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
      }
    });
    showSlide(0, false);
  });

  // One native modal for single paintings and the complete triptych. The
  // browser handles focus containment, Escape, and hiding the background.
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const artwork = lightbox.querySelector(".lightbox-artwork");
    const caption = lightbox.querySelector("#lightbox-caption");
    let opener;
    document.querySelectorAll(".artwork-view").forEach(button => {
      button.addEventListener("click", () => {
        opener = button;
        artwork.replaceChildren();
        const triptych = button.querySelector(".triptych");
        const holder = triptych ? document.createElement("div") : artwork;
        if (triptych) {
          holder.className = "triptych";
          artwork.append(holder);
        }
        button.querySelectorAll("img").forEach(source => {
          const image = new Image();
          image.src = source.dataset.original || source.currentSrc;
          image.alt = source.alt;
          holder.append(image);
        });
        const info = button.closest(".slide")?.querySelector(".slideshow-caption");
        const card = button.closest(".gallery-item");
        const details = card ? [...card.querySelector(".work-meta").children].map(el => el.textContent).join(" · ") : "";
        caption.textContent = info?.textContent || [card?.querySelector(".work-title")?.textContent, details].filter(Boolean).join(" — ");
        lightbox.showModal();
        document.body.classList.add("modal-open");
      });
    });
    lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
    lightbox.addEventListener("close", () => {
      document.body.classList.remove("modal-open");
      artwork.replaceChildren();
      opener?.focus({preventScroll: true});
    });
  }

  // Apply each filter to both Available and Sold, and hide an empty Sold group.
  const allItems = [...document.querySelectorAll(".gallery-item[data-series]")];
  const soldSection = document.querySelector("[data-i18n='available.sold_title']")?.closest("section");
  document.querySelectorAll(".filter-bar").forEach(bar => {
    const buttons = [...bar.querySelectorAll(".filter-btn")];
    buttons.forEach(button => {
      button.setAttribute("aria-pressed", String(button.classList.contains("active")));
      button.addEventListener("click", () => {
        buttons.forEach(other => {
          other.classList.toggle("active", other === button);
          other.setAttribute("aria-pressed", String(other === button));
        });
        allItems.forEach(item => { item.hidden = button.dataset.seriesFilter !== "all" && item.dataset.series !== button.dataset.seriesFilter; });
        if (soldSection) {
          const anySold = [...soldSection.querySelectorAll(".gallery-item")].some(item => !item.hidden);
          // Keep practical information visible even when there are no sold works.
          soldSection.querySelector(".section-header").hidden = !anySold;
          soldSection.querySelector(".gallery-grid").hidden = !anySold;
        }
      });
    });
  });

  // The real form action also works without JavaScript. On failure, keep the
  // complete message so the visitor can retry or use the visible email link.
  const form = document.querySelector(".contact-form");
  if (form) {
    const work = new URLSearchParams(location.search).get("work");
    if (work) form.elements.work.value = work;
    if (window.fetch && window.AbortController) {
      let sending = false;
      form.addEventListener("submit", async event => {
        event.preventDefault();
        if (sending || !form.reportValidity()) return;
        sending = true;
        const button = form.querySelector("[type='submit']");
        const status = form.querySelector(".form-status");
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 20000);
        button.disabled = true;
        button.dataset.i18n = "contact.sending";
        button.textContent = t("contact.sending");
        form.setAttribute("aria-busy", "true");
        status.hidden = true;
        try {
          const response = await fetch(form.action, {method: "POST", body: new FormData(form), headers: {Accept: "application/json"}, signal: controller.signal});
          const data = await response.json();
          if (!response.ok || data.ok !== true) throw new Error("Delivery not confirmed");
          status.dataset.i18n = "contact.success";
          status.textContent = t("contact.success");
          status.dataset.state = "success";
          form.reset();
        } catch (_) {
          status.dataset.i18n = "contact.error";
          status.textContent = t("contact.error");
          status.dataset.state = "error";
        } finally {
          clearTimeout(timeout);
          status.hidden = false;
          button.disabled = false;
          button.dataset.i18n = "contact.form_submit";
          button.textContent = t("contact.form_submit");
          form.removeAttribute("aria-busy");
          sending = false;
        }
      });
    }
  }

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    const update = () => { backToTop.hidden = window.scrollY <= 400; backToTop.classList.toggle("visible", window.scrollY > 400); };
    window.addEventListener("scroll", update, {passive: true});
    backToTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: scrollBehavior()}));
    update();
  }
  document.querySelectorAll(".fade-in").forEach(element => element.classList.add("visible"));
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const hero = document.querySelector("[data-hero-slideshow]");
  if (hero) {
    const slides = [...hero.querySelectorAll(".hero-slide")];
    let index = 0;
    const pause = document.createElement("button");
    pause.type = "button";
    pause.className = "hero-pause";
    pause.textContent = "Ⅱ";
    pause.setAttribute("aria-label", "Pause slideshow");
    pause.setAttribute("aria-pressed", "false");
    hero.append(pause);
    let paused = false;
    pause.addEventListener("click", () => {
      paused = !paused;
      pause.textContent = paused ? "▶" : "Ⅱ";
      pause.setAttribute("aria-label", paused ? "Play slideshow" : "Pause slideshow");
      pause.setAttribute("aria-pressed", String(paused));
    });
    setInterval(() => {
      if (paused || reducedMotion.matches || document.hidden || hero.matches(":hover") || hero.contains(document.activeElement) || slides.length < 2) return;
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 7000);
  }
});
