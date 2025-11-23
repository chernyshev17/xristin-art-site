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

      "home.hero_tagline": "Oil paintings on canvas",
      "home.hero_title": "Quiet light, fields and flowers.",
      "home.hero_text":
        "Kristina paints still lifes and landscapes in oil, with a focus on atmosphere, silence and slow looking.",
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

      "about.title": "About",
      "about.text_1":
        "Kristina (Xristina) is an artist working primarily in oil painting, currently based in Belgium.",
      "about.text_2":
        "Her work moves between still lifes and landscapes: tables laid for tea, flowers in vases, quiet fields and winter skies.",
      "about.text_3":
        "Originally from Russia, she now lives and paints in Belgium, bringing together memories of one place with the light and weather of another.",
      "about.text_4":
        "The paintings are built in layers, often over many sessions, allowing colour and texture to slowly accumulate.",
      "about.timeline_title": "Selected moments",
      "about.timeline_item1":
        "2021 – First landscape series, small works on paper and canvas.",
      "about.timeline_item2":
        "2023 – Start of the Birch Series, a group of seven vertical tree paintings.",
      "about.timeline_item3":
        "2024 – Still life paintings with tea, flowers and glass become a recurring motif.",
      "about.timeline_item4":
        "2025 – New work focusing on winter horizons and muted colour.",

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
      "brand.sub": "Peinture \u00e0 l'huile \u2022 Belgique",
      "nav.home": "Accueil",
      "nav.gallery": "Galerie",
      "nav.available": "Disponibles",
      "nav.about": "\u00c0 propos",
      "nav.contact": "Contact",
      "footer.rights": "Tous droits r\u00e9serv\u00e9s.",

      "home.hero_tagline": "Peintures \u00e0 l'huile sur toile",
      "home.hero_title": "Lumi\u00e8re silencieuse, champs et fleurs.",
      "home.hero_text":
        "Kristina peint des natures mortes et des paysages \u00e0 l'huile, avec un accent sur l'atmosph\u00e8re, le silence et le regard lent.",
      "home.hero_cta_gallery": "Voir la galerie",
      "home.hero_cta_available": "Oeuvres disponibles",
      "home.series_title": "S\u00e9ries",

      "series.stilllife_title": "Natures mortes",
      "series.stilllife_text":
        "Sc\u00e8nes de table avec th\u00e9, fleurs et verre, peintes en couches aux couleurs att\u00e9nu\u00e9es.",
      "series.landscapes_title": "Paysages",
      "series.landscapes_text":
        "Champs, chemins et arbres lointains, souvent dans une lumi\u00e8re grise du Nord.",
      "series.birch_title": "S\u00e9rie Bouleaux",
      "series.birch_text":
        "Sept tableaux expressifs de bouleaux, centr\u00e9s sur le rythme, le tronc et la couleur.",

      "gallery.title": "Galerie",
      "gallery.intro":
        "Une s\u00e9lection de peintures r\u00e9centes, regroup\u00e9es en natures mortes, paysages et la s\u00e9rie de bouleaux.",
      "gallery.stilllife_title": "Natures mortes",
      "gallery.stilllife_desc":
        "Arrangements intimes d'objets du quotidien, construits lentement en couches d'huile.",
      "gallery.landscapes_title": "Paysages",
      "gallery.landscapes_desc":
        "Champs, chemins, eau et ciel, peints dans un registre plus silencieux et atmosph\u00e9rique.",
      "gallery.birch_title": "S\u00e9rie Bouleaux",
      "gallery.birch_desc":
        "Une s\u00e9rie de peintures de bouleaux expressives, centr\u00e9es sur le rythme, le geste et la couleur.",

      "available.title": "Oeuvres disponibles",
      "available.intro":
        "Peintures originales \u00e0 l'huile actuellement disponibles. Pour les d\u00e9tails, l'encadrement ou l'envoi, merci d'utiliser le formulaire de contact.",
      "available.sold_title": "Oeuvres vendues",
      "available.sold_intro":
        "Une s\u00e9lection de peintures qui ont d\u00e9j\u00e0 trouv\u00e9 preneur.",
      "available.filter_label": "Filtrer par s\u00e9rie",
      "available.filter_all": "Toutes",
      "available.inquire": "Renseignez-vous sur cette oeuvre",
      "available.faq_title": "Informations pratiques",
      "available.faq_shipping_q": "Exp\u00e9dition",
      "available.faq_shipping_a":
        "Les oeuvres sont exp\u00e9di\u00e9es depuis la Belgique. L'emballage est soigneux et un envoi suivi est possible dans le monde entier.",
      "available.faq_framing_q": "Encadrement",
      "available.faq_framing_a":
        "Les peintures sont vendues non encadr\u00e9es par d\u00e9faut, mais un encadrement peut \u00eatre organis\u00e9 et ajout\u00e9 au prix sur demande.",
      "available.faq_payment_q": "Paiement",
      "available.faq_payment_a":
        "Un virement bancaire et d'autres moyens de paiement europ\u00e9ens courants peuvent \u00eatre organis\u00e9s apr\u00e8s confirmation de l'oeuvre et de l'envoi.",

      "badge.sold": "Vendu",
      "badge.new": "Nouveau",

      "about.title": "\u00c0 propos",
      "about.text_1":
        "Kristina (Xristina) est une artiste qui travaille principalement la peinture \u00e0 l'huile, actuellement bas\u00e9e en Belgique.",
      "about.text_2":
        "Son travail navigue entre natures mortes et paysages : tables dress\u00e9es pour le th\u00e9, fleurs dans des vases, champs calmes et ciels d'hiver.",
      "about.text_3":
        "Originaire de Russie, elle vit et peint d\u00e9sormais en Belgique, en m\u00ealant les souvenirs d'un lieu avec la lumi\u00e8re et le climat d'un autre.",
      "about.text_4":
        "Les tableaux se construisent par couches, souvent sur de nombreuses s\u00e9ances, laissant la couleur et la texture s'accumuler lentement.",
      "about.timeline_title": "Moments choisis",
      "about.timeline_item1":
        "2021 \u2013 Premi\u00e8re s\u00e9rie de paysages, petits formats sur papier et toile.",
      "about.timeline_item2":
        "2023 \u2013 D\u00e9but de la s\u00e9rie Bouleaux, un groupe de sept tableaux verticaux.",
      "about.timeline_item3":
        "2024 \u2013 Les natures mortes au th\u00e9, aux fleurs et au verre deviennent un motif r\u00e9current.",
      "about.timeline_item4":
        "2025 \u2013 Nouveau travail ax\u00e9 sur les horizons d'hiver et les couleurs att\u00e9nu\u00e9es.",

      "contact.title": "Contact",
      "contact.intro":
        "Pour toute question concernant les oeuvres disponibles, les commandes ou les expositions, utilisez le formulaire ci-dessous ou \u00e9crivez directement.",
      "contact.form_name_label": "Nom",
      "contact.form_email_label": "Email",
      "contact.form_work_label": "Oeuvre qui vous int\u00e9resse",
      "contact.form_message_label": "Message",
      "contact.form_submit": "Envoyer",
      "contact.side_title": "Atelier & contact",
      "contact.side_text_1":
        "Bas\u00e9e en Belgique, travaille principalement \u00e0 l'huile sur toile.",
      "contact.side_text_2":
        "Si une peinture en particulier vous int\u00e9resse, merci de mentionner son titre et son format pour la retrouver facilement.",
      "contact.faq_title": "Questions fr\u00e9quentes",
      "contact.faq_view_q":
        "Puis-je voir une oeuvre en vrai ?",
      "contact.faq_view_a":
        "Des visites en Belgique peuvent \u00eatre possibles sur rendez-vous, selon l'oeuvre.",
      "contact.faq_commission_q":
        "Acceptez-vous des commandes sur mesure ?",
      "contact.faq_commission_a":
        "Parfois, oui \u2013 surtout pour des natures mortes et des int\u00e9rieurs. N'h\u00e9sitez pas \u00e0 d\u00e9crire votre id\u00e9e."
    },

    nl: {
      "brand.sub": "Olieverf \u2022 Belgi\u00eb",
      "nav.home": "Home",
      "nav.gallery": "Galerij",
      "nav.available": "Beschikbaar",
      "nav.about": "Over",
      "nav.contact": "Contact",
      "footer.rights": "Alle rechten voorbehouden.",

      "home.hero_tagline": "Schilderijen in olieverf op doek",
      "home.hero_title": "Stil licht, velden en bloemen.",
      "home.hero_text":
        "Kristina schildert stillevens en landschappen in olieverf, met aandacht voor sfeer, stilte en vertraagd kijken.",
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
        "Werken worden verzonden vanuit Belgi\u00eb. Ze worden zorgvuldig verpakt en aangetekende verzending is wereldwijd mogelijk.",
      "available.faq_framing_q": "Inlijsten",
      "available.faq_framing_a":
        "Schilderijen worden standaard zonder lijst verkocht, maar inlijsten kan geregeld worden en aan de prijs worden toegevoegd op verzoek.",
      "available.faq_payment_q": "Betaling",
      "available.faq_payment_a":
        "Overschrijving en gangbare Europese betaalmethoden kunnen worden afgesproken nadat werk en verzending zijn bevestigd.",

      "badge.sold": "Verkocht",
      "badge.new": "Nieuw",

      "about.title": "Over",
      "about.text_1":
        "Kristina (Xristina) is een kunstenaar die voornamelijk met olieverf werkt en momenteel in Belgi\u00eb woont.",
      "about.text_2":
        "Haar werk beweegt tussen stillevens en landschappen: tafels gedekt voor thee, bloemen in vazen, stille velden en winterluchten.",
      "about.text_3":
        "Oorspronkelijk uit Rusland, woont en schildert ze nu in Belgi\u00eb, waarbij ze herinneringen aan de ene plek mengt met het licht en weer van een andere.",
      "about.text_4":
        "De schilderijen worden in lagen opgebouwd, vaak over vele sessies, zodat kleur en textuur langzaam kunnen groeien.",
      "about.timeline_title": "Geselecteerde momenten",
      "about.timeline_item1":
        "2021 \u2013 Eerste landschapsreeks, kleine werken op papier en doek.",
      "about.timeline_item2":
        "2023 \u2013 Begin van de Berkenreeks, een groep van zeven verticale boomschilderijen.",
      "about.timeline_item3":
        "2024 \u2013 Stillevens met thee, bloemen en glas worden een terugkerend motief.",
      "about.timeline_item4":
        "2025 \u2013 Nieuw werk gericht op winterse horizonten en gedempte kleur.",

      "contact.title": "Contact",
      "contact.intro":
        "Voor vragen over beschikbare werken, opdrachten of tentoonstellingen kunt u gebruikmaken van het onderstaande formulier of rechtstreeks mailen.",
      "contact.form_name_label": "Naam",
      "contact.form_email_label": "E-mail",
      "contact.form_work_label": "Werk waarin u bent ge\u00efnteresseerd",
      "contact.form_message_label": "Bericht",
      "contact.form_submit": "Versturen",
      "contact.side_title": "Atelier & contact",
      "contact.side_text_1":
        "Gebaseerd in Belgi\u00eb, werkt voornamelijk met olieverf op doek.",
      "contact.side_text_2":
        "Als u ge\u00efnteresseerd bent in een specifiek schilderij, vermeld dan graag de titel en het formaat.",
      "contact.faq_title": "Veelgestelde vragen",
      "contact.faq_view_q": "Kan ik een werk in het echt zien?",
      "contact.faq_view_a":
        "Bezichtigingen in Belgi\u00eb zijn soms mogelijk op afspraak, afhankelijk van het werk.",
      "contact.faq_commission_q": "Neemt u opdrachten aan?",
      "contact.faq_commission_a":
        "Af en toe, ja \u2013 vooral voor stillevens en interieurs. Beschrijf gerust wat u in gedachten heeft."
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
    const mainImages = document.querySelectorAll(".slide img");

    mainImages.forEach((img) => {
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

  // For safety: on Available page, force visible (avoid weird iOS bugs)
  if (document.body.classList.contains("page-available")) {
    fadeEls.forEach((el) => el.classList.add("visible"));
  } else if ("IntersectionObserver" in window) {
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
