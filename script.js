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

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (value) {
        el.innerHTML = value;
      }
    });
  }

  // Set language from storage or default
  let currentLang = localStorage.getItem("lang");
  if (!currentLang || !["en", "fr", "nl"].includes(currentLang)) {
    currentLang = "en";
  }
  document.documentElement.setAttribute("data-lang", currentLang);
  document.documentElement.setAttribute("lang", currentLang);
  applyTranslations(currentLang);

  // Lang switcher buttons
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach((btn) => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("lang", lang);
      document.documentElement.setAttribute("data-lang", lang);
      document.documentElement.setAttribute("lang", lang);
      langBtns.forEach((b) => b.classList.toggle("active", b === btn));
      applyTranslations(lang);
    });
  });

  // ===== Force gallery to open at top (fix iOS jump) =====
  if (
    document.body.classList.contains("page-gallery") &&
    !window.location.hash
  ) {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 50);
  }

  // ===== Slideshow (gallery page) =====

  const slideshows = document.querySelectorAll("[data-slideshow]");

  slideshows.forEach((slideshow) => {
    const slides = Array.from(slideshow.querySelectorAll(".slide"));
    if (!slides.length) return;

    const thumbs = Array.from(
      slideshow.querySelectorAll(".slideshow-thumb")
    );

    let currentIndex = 0;

    const showSlide = (index) => {
      currentIndex = index;

      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      if (thumbs.length) {
        thumbs.forEach((thumb, i) => {
          thumb.classList.toggle("active", i === index);
        });

        const activeThumb = thumbs[index];
        if (activeThumb) {
          const container = activeThumb.parentElement;
          const offset =
            activeThumb.offsetLeft -
            (container.clientWidth / 2 - activeThumb.clientWidth / 2);
          container.scrollTo({
            left: Math.max(0, offset),
            behavior: "smooth"
          });
        }
      }
    };

    const nextBtn = slideshow.querySelector("[data-next]");
    const prevBtn = slideshow.querySelector("[data-prev]");

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
      });
    }

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener("click", () => showSlide(i));
    });

    showSlide(0);
  });

  // ===== Hero slideshow (home) =====

  const hero = document.querySelector("[data-hero-slideshow]");
  if (hero) {
    const heroSlides = hero.querySelectorAll(".hero-slide");
    let heroIndex = 0;

    // ensure only the first slide is active initially
    if (heroSlides.length > 0) {
      heroSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === 0);
      });
    }

    if (heroSlides.length > 1) {
      setInterval(() => {
        heroSlides[heroIndex].classList.remove("active");
        heroIndex = (heroIndex + 1) % heroSlides.length;
        heroSlides[heroIndex].classList.add("active");
      }, 7000);
    }
  }

  // ===== Lightbox =====

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (lightbox && lightboxImage && lightboxClose) {
    // main gallery slides
    const mainImages = document.querySelectorAll(".slide img");

    mainImages.forEach((img) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || "";
        lightbox.classList.add("open");
      });
    });

    // also enable zoom for Available page thumbnails
    const availableImages = document.querySelectorAll(
      ".page-available .gallery-grid img"
    );
    availableImages.forEach((img) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || "";
        lightbox.classList.add("open");
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove("open");
      lightboxImage.src = "";
    };

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("open")) {
        closeLightbox();
      }
    });
  }

  // ===== Available filters =====

  const filterBars = document.querySelectorAll(".filter-bar");
  if (filterBars.length) {
    const allItems = document.querySelectorAll(".gallery-grid [data-series]");
    filterBars.forEach((bar) => {
      const buttons = bar.querySelectorAll(".filter-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const value = btn.dataset.seriesFilter;
          buttons.forEach((b) =>
            b.classList.toggle("active", b === btn)
          );
          allItems.forEach((item) => {
            const series = item.dataset.series;
            if (value === "all" || series === value) {
              item.style.display = "";
            } else {
              item.style.display = "none";
            }
          });
        });
      });
    });
  }

  // ===== Back to top =====

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("visible", window.scrollY > 400);
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ===== Fade-in on scroll =====

  const fadeEls = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach((el) => observer.observe(el));

    // Fallback: if something goes wrong on Available page,
    // force elements visible after a short delay
    if (document.body.classList.contains("page-available")) {
      setTimeout(() => {
        fadeEls.forEach((el) => {
          if (!el.classList.contains("visible")) {
            el.classList.add("visible");
          }
        });
      }, 600);
    }
  } else {
    fadeEls.forEach((el) => el.classList.add("visible"));
  }

  // ===== Contact: prefill "work" field from query =====

  const urlParams = new URLSearchParams(window.location.search);
  const workParam = urlParams.get("work");
  if (workParam) {
    const workInput = document.getElementById("work");
    if (workInput) {
      workInput.value = workParam; // no extra decode
    }
  }

  // ===== Set footer year =====

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
