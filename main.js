/* ==========================================================================
   LEEF × wisefood Presentation Portfolio JavaScript
   Design System: CANALS 6-Panel Architecture (PWA & Offline ServiceWorker)
   Includes: 100% German & English Dictionaries, Lightbox Handlers, SW Registration
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Register Service Worker for PWA Offline Caching
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      console.log('LEEF Portfolio ServiceWorker registered:', reg.scope);
    }).catch((err) => {
      console.log('ServiceWorker registration failed:', err);
    });
  }

  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // --------------------------------------------------------------------------
  // 1. Dual Language Dictionary (100% GERMAN & ENGLISH COVERAGE)
  // --------------------------------------------------------------------------
  const i18nData = {
    de: {
      hero_title_sub: 'EIN KLEINER STROHHALM.<br>GROSSE WIRKUNG.',
      hero_subtitle: 'Wie verwandelt man ein alltägliches Produkt in eine aufmerksamkeitsstarke Bildserie? Studio-Fotografie vs. KI-Artwork.',
      profile_bio: 'Visual Lead & Senior Content Creator (10+ Jahre Erfahrung) • Produkt- & Food-Fotografie, KI-Art Direction',
      profile_quote: '«Nachhaltige Produkte müssen nicht belehrend wirken — sie verdienen ein stilvolles, lebendiges und erstklassiges visuelles Branding!»',
      
      presenter_title: '<i class="fa-solid fa-comments"></i> ⚡ Stichpunkte für das Gespräch (Klicken zum Öffnen)',
      presenter_list: [
        '📌 <strong>Hybrid Workflow:</strong> Kombination von Studio-Fotografie für haptische Authentizität mit KI für die schnelle Kampagnen-Exploration.',
        '🌱 <strong>Öko-Manifest (Motiv 1):</strong> Eine künstlerische Neuinterpretation von Papier-Strohhalmen zur Hervorhebung rein natürlicher Herkunft und ökologischer Wirkung.',
        '🍸 <strong>Kommerzielles Visual (Motiv 2):</strong> Ein realistisches Lifestyle-Visual, das zeigt, wie sich Papier-Strohhalme nahtlos in moderne Café- und Bar-Umgebungen für B2B-Wirkung integrieren.',
        '⚡ <strong>Allrounder-Kompetenz:</strong> Vollständige Umsetzung — vom Blumen-Sourcing auf der Wiese und Studio-Licht-Setup bis hin zum KI-Prompting und Photoshop-Postproduktion.'
      ],

      /* Screen 02 */
      cat_tag_01: 'MOTIV 01: KEY VISUAL FOTOGRAFIE',
      photo_headline: 'FOTOGRAFIE',
      photo_desc: 'Ein künstlerisches Öko-Manifest für LEEF & wisefood, das Papier-Strohhalme kreativ mit frischen Wiesenblumen kombiniert, um die reine natürliche Herkunft zu zelebrieren.',
      val_slogan_photo: '«AUS DER NATUR. FÜR DIE NATUR.»',
      photo_intent_title: '<i class="fa-solid fa-bullseye"></i> WAS ICH ERREICHEN WOLLTE',
      photo_intent_desc: 'Ziel war es, die organische Herkunft des Produkts ohne Greenwashing-Klischees zu zeigen. Durch die kunstvolle Kombination von Papier-Strohhalmen mit Wiesenblumen entsteht eine mitreißende Metapher für biologische Abbaubarkeit, die ein Alltags-Produkt in ein aufmerksamkeitsstarkes Kampagnenobjekt verwandelt.',
      dl_high_photo: '<i class="fa-solid fa-download"></i> Hohe Auflösung (Druck 300 DPI)',
      dl_web_photo: '<i class="fa-solid fa-file-image"></i> Web-Auflösung (Social / Web)',

      /* Screen 03 */
      cat_tag_02: 'MOTIV 02: KOMMERZIELLES B2B VISUAL',
      ai_headline: 'KI-ARTWORK',
      ai_desc: 'Ein kommerzielles B2B-Visual, das LEEF Papier-Strohhalme in einem realen Bar-Ambiente zeigt. Generiert mit KI und veredelt in Photoshop für einen authentischen fotografischen Look ohne typische KI-Artefakte.',
      val_slogan_ai: '«STARK IM GLAS. GUT FÜR DIE WELT.»',
      ai_intent_title: '<i class="fa-solid fa-bullseye"></i> WAS ICH ERREICHEN WOLLTE',
      ai_intent_desc: 'Ziel war es zu zeigen, wie stilvoll und natürlich Papier-Strohhalme in modernen Cafés und Bars wirken. Durch sorgfältiges Verfeinern des KI-Outputs mit realistischer Beleuchtung, Filmkorn und Marken-Details wirkt das Visual wie ein echtes Lifestyle-Foto statt eines synthetischen Renders.',
      dl_high_ai: '<i class="fa-solid fa-download"></i> Hohe Auflösung (Druck 300 DPI)',
      dl_web_ai: '<i class="fa-solid fa-file-image"></i> Web-Auflösung (Social / Web)',

      /* Screen 04 BTS Photo */
      cat_tag_03: 'HINTER DEN KULISSEN: STUDIO-FOTOGRAFIE',
      bts_photo_title: 'FELD-SOURCING & STUDIO',
      bts_photo_subtitle: 'Vom Spaziergang auf der Wiese bis zum gerichteten Studio-Licht:',
      tab_p1: 'Wiese 🌾',
      tab_p2: 'Studio 📸',
      tab_p3: 'Makro A 🔍',
      tab_p4: 'Makro B 🌸',
      tab_p5: 'Installation 💐',

      /* Screen 05 BTS KI */
      cat_tag_04: 'HINTER DEN KULISSEN: KI & PHOTOSHOP ZEITLEISTE',
      ai_timeline_title: 'KI & PHOTOSHOP',
      prompt_header_label: 'PROMPT-SPEZIFIKATION',
      tab_a1: 'Render',
      tab_a2: 'Bar-Set',
      tab_a3: 'Branding',
      tab_a4: 'Layout',

      /* Screen 06 Process */
      process_headline: 'PROZESS & STRATEGIE',
      matrix_subtitle: 'Als Allrounder verbinde ich die Effizienzpotenziale von KI mit der Unersetzbarkeit von echter Fotografie.',
      t1_head: 'HYBRID WORKFLOW',
      t1_body: 'Fotografie liefert 100% haptische Präzision der Textur, KI bietet unendliche Geschwindigkeit bei der Konzept-Exploration und dem B2B-Kontext.',
      t2_head: 'COMMERCIAL FOCUS',
      t2_body: 'Jedes Visual löst eine klare Business-Aufgabe: vom Öko-Manifest der Marke bis zur nahtlosen Integration in moderne Cafés und Bars.',
      t3_head: 'FULL-CYCLE EXECUTION',
      t3_body: 'Abdeckung des gesamten Zyklus: vom Blumen-Sourcing auf der Wiese und Studio-Licht-Setup bis hin zu Prompting und finalem Layout.',

      footer_badge: 'LEEF × WISEFOOD • Termin: 3. August 2026'
    },

    en: {
      hero_title_sub: 'A SMALL STRAW.<br>BIG IMPACT.',
      hero_subtitle: 'How do you transform an everyday product into a high-impact campaign? Studio photography vs. AI artwork.',
      profile_bio: 'Visual Lead & Senior Content Creator (10+ years experience) • Product & Food Photography, AI Art Direction',
      profile_quote: '«Sustainable products shouldn’t feel preachy or dull — they deserve a stylish, vibrant, and first-class visual branding!»',
      
      presenter_title: '<i class="fa-solid fa-comments"></i> ⚡ Live Meeting Talking Points (Click to Open)',
      presenter_list: [
        '📌 <strong>Hybrid Workflow:</strong> Combining studio photography for tactile authenticity with AI for rapid campaign exploration.',
        '🌱 <strong>Eco-Manifesto (Motiv 1):</strong> An artistic reinterpretation of paper straws to highlight pure natural origins and eco-friendly impact.',
        '🍸 <strong>Commercial Visual (Motiv 2):</strong> A realistic lifestyle visual showcasing how paper straws seamlessly integrate into modern cafe and bar settings for B2B impact.',
        '⚡ <strong>Allrounder Skillset:</strong> Complete execution — from field-sourcing and studio light setup to AI prompting and Photoshop post-production.'
      ],

      /* Screen 02 */
      cat_tag_01: 'MOTIV 01: KEY VISUAL PHOTO',
      photo_headline: 'PHOTOGRAPHY',
      photo_desc: 'An artistic eco-manifesto for LEEF & wisefood, creatively pairing paper straws with fresh meadow blooms to celebrate pure natural origins.',
      val_slogan_photo: '«AUS DER NATUR. FÜR DIE NATUR.»',
      photo_intent_title: '<i class="fa-solid fa-bullseye"></i> WHAT I WANTED TO ACHIEVE',
      photo_intent_desc: 'The goal was to showcase the organic origins of the product without falling into greenwashing clichés. By artfully combining paper straws with wild blooms, the visual creates an engaging metaphor for biodegradability, turning a daily essential into an eye-catching campaign piece.',
      dl_high_photo: '<i class="fa-solid fa-download"></i> High-Res (Print 300 DPI)',
      dl_web_photo: '<i class="fa-solid fa-file-image"></i> Web-Res (Social / Web)',

      /* Screen 03 */
      cat_tag_02: 'MOTIV 02: COMMERCIAL B2B VISUAL',
      ai_headline: 'AI ARTWORK',
      ai_desc: 'A commercial B2B visual showing LEEF paper straws in a real bar environment. Generated with AI and polished in Photoshop to achieve an authentic photographic look without typical AI artifacts.',
      val_slogan_ai: '«STARK IM GLAS. GUT FÜR DIE WELT.»',
      ai_intent_title: '<i class="fa-solid fa-bullseye"></i> WHAT I WANTED TO ACHIEVE',
      ai_intent_desc: 'The goal was to show how paper straws look stylish and natural in modern cafes and bars. By carefully refining the AI output with realistic lighting, film grain, and brand details, the visual feels like a genuine lifestyle shot rather than a synthetic render.',
      dl_high_ai: '<i class="fa-solid fa-download"></i> High-Res (Print 300 DPI)',
      dl_web_ai: '<i class="fa-solid fa-file-image"></i> Web-Res (Social / Web)',

      /* Screen 04 BTS Photo */
      cat_tag_03: 'BEHIND THE SCENES: STUDIO PHOTOGRAPHY',
      bts_photo_title: 'FIELD SOURCING & STUDIO',
      bts_photo_subtitle: 'From green field flower collecting to directional studio lighting:',
      tab_p1: 'Meadow 🌾',
      tab_p2: 'Studio 📸',
      tab_p3: 'Macro A 🔍',
      tab_p4: 'Macro B 🌸',
      tab_p5: 'Installation 💐',

      /* Screen 05 BTS KI */
      cat_tag_04: 'BEHIND THE SCENES: AI & PHOTOSHOP TIMELINE',
      ai_timeline_title: 'AI & PHOTOSHOP',
      prompt_header_label: 'PROMPT SPECIFICATION',
      tab_a1: 'Render',
      tab_a2: 'Bar-Set',
      tab_a3: 'Branding',
      tab_a4: 'Layout',

      /* Screen 06 Process */
      process_headline: 'PROCESS & STRATEGY',
      matrix_subtitle: 'As an Allrounder, I balance the speed and creative freedom of AI with the physical accuracy of real photography.',
      t1_head: 'HYBRID WORKFLOW',
      t1_body: 'Photography provides 100% tactile texture accuracy, while AI offers infinite speed in exploring campaign concepts and B2B contexts.',
      t2_head: 'COMMERCIAL FOCUS',
      t2_body: 'Every visual solves a clear business objective: from the brand eco-manifesto to seamless integration into modern cafes and bars.',
      t3_head: 'FULL-CYCLE EXECUTION',
      t3_body: 'Covering the complete cycle: from field flower sourcing and studio lighting setup to AI prompting and final ad layout.',

      footer_badge: 'LEEF × WISEFOOD • Meeting: August 3, 2026'
    }
  };

  // --------------------------------------------------------------------------
  // 2. Language Switcher Logic with Dynamic PNG Links
  // --------------------------------------------------------------------------
  let currentLang = localStorage.getItem('leef_lang') || 'de';

  const switchLanguage = (lang) => {
    if (!i18nData[lang]) return;
    currentLang = lang;
    localStorage.setItem('leef_lang', lang);

    document.documentElement.lang = lang;

    // Update Language Buttons
    document.querySelectorAll('.lang-btn-sm').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nData[lang][key]) {
        el.innerHTML = i18nData[lang][key];
      }
    });

    // Update Download Hrefs depending on Language (PNG files)
    const dlHighPhoto = document.getElementById('dlHighPhoto');
    const dlWebPhoto = document.getElementById('dlWebPhoto');
    const dlHighAi = document.getElementById('dlHighAi');
    const dlWebAi = document.getElementById('dlWebAi');

    if (dlHighPhoto && dlWebPhoto) {
      if (lang === 'en') {
        dlHighPhoto.href = 'https://github.com/boulvarapp/leef-wisefood-portfolio/releases/download/v1.0-highres/motiv_01_photo_highres_EN.png';
        dlWebPhoto.href = 'assets/downloads/web_res/motiv_01_photo_web_EN.png';
      } else {
        dlHighPhoto.href = 'https://github.com/boulvarapp/leef-wisefood-portfolio/releases/download/v1.0-highres/motiv_01_photo_highres.png';
        dlWebPhoto.href = 'assets/downloads/web_res/motiv_01_photo_web.png';
      }
    }

    if (dlHighAi && dlWebAi) {
      dlHighAi.href = 'https://github.com/boulvarapp/leef-wisefood-portfolio/releases/download/v1.0-highres/motiv_02_ai_highres.png';
      dlWebAi.href = 'assets/downloads/web_res/motiv_02_ai_web.png';
    }

    // Translate Presenter List
    const presenterList = document.getElementById('presenterList');
    if (presenterList && i18nData[lang].presenter_list) {
      presenterList.innerHTML = i18nData[lang].presenter_list.map(item => `<li>${item}</li>`).join('');
    }

    // Refresh Captions
    updatePhotoBtsCaption();
    updateAiStageCaption();
  };

  document.querySelectorAll('.lang-btn-sm').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  // --------------------------------------------------------------------------
  // 3. CANALS GSAP HORIZONTAL PIN SCROLL + SWEEPING PARALLAX & TYPOGRAPHY REVEAL
  // --------------------------------------------------------------------------
  const panels = gsap.utils.toArray('.panel');
  const track = document.getElementById('horizontalTrack');
  const sectionCounter = document.getElementById('sectionCounter');
  const pageNavDots = document.querySelectorAll('.page-nav-dot');

  let horizontalTween;

  if (track && panels.length > 0) {
    const totalPanels = panels.length;
    
    horizontalTween = gsap.to(panels, {
      xPercent: -100 * (totalPanels - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-outer-wrapper',
        pin: true,
        scrub: 0.6,
        end: () => '+=' + (track.offsetWidth * 0.85),
        onUpdate: (self) => {
          const progress = self.progress;
          const activeIndex = Math.min(
            Math.round(progress * (totalPanels - 1)),
            totalPanels - 1
          );

          // Update Progress bar width
          const scrollProgress = document.getElementById('scrollProgress');
          if (scrollProgress) {
            scrollProgress.style.width = `${progress * 100}%`;
          }

          // Update Left Sidebar Counter (01 / 06)
          if (sectionCounter) {
            const formattedIdx = String(activeIndex + 1).padStart(2, '0');
            sectionCounter.textContent = `${formattedIdx} / 06`;
          }

          // Update Active Page Nav Dot in Sidebar
          pageNavDots.forEach((dot, idx) => {
            if (idx === activeIndex) dot.classList.add('active');
            else dot.classList.remove('active');
          });
        }
      }
    });

    // ------------------------------------------------------------------------
    // A. BOUNDED PHOTO PARALLAX DRIFT (SMOOTH FOR IPAD & DESKTOP)
    // ------------------------------------------------------------------------
    panels.forEach((panel) => {
      const innerImg = panel.querySelector('.inner-parallax-img');
      if (innerImg) {
        const driftAmount = window.innerWidth < 1200 ? 15 : 25;
        gsap.fromTo(innerImg,
          { xPercent: -driftAmount },
          {
            xPercent: driftAmount,
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              scrub: true
            }
          }
        );
      }

      // ------------------------------------------------------------------------
      // B. ELEGANT TYPOGRAPHY PARALLAX REVEAL (CANALS STYLE REVEAL)
      // ------------------------------------------------------------------------
      const tag = panel.querySelector('.editorial-category-tag');
      const title = panel.querySelector('.giant-section-label, .giant-parallax-title');
      const slogan = panel.querySelector('.slogan-banner');
      const desc = panel.querySelector('.motiv-desc');
      const intent = panel.querySelector('.intent-box');
      const swissRow = panel.querySelector('.swiss-thesis-row');

      if (tag) {
        gsap.fromTo(tag,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: 'left 88%',
              end: 'left 45%',
              scrub: 0.4
            }
          }
        );
      }

      if (title) {
        gsap.fromTo(title,
          { y: 55, opacity: 0.15, letterSpacing: '0.04em' },
          {
            y: 0,
            opacity: 1.0,
            letterSpacing: '-0.02em',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: 'left 85%',
              end: 'left 35%',
              scrub: 0.5
            }
          }
        );
      }

      if (slogan) {
        gsap.fromTo(slogan,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: 'left 78%',
              end: 'left 40%',
              scrub: 0.5
            }
          }
        );
      }

      if (desc) {
        gsap.fromTo(desc,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: 'left 70%',
              end: 'left 35%',
              scrub: 0.5
            }
          }
        );
      }

      if (intent) {
        gsap.fromTo(intent,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: 'left 65%',
              end: 'left 30%',
              scrub: 0.5
            }
          }
        );
      }

      if (swissRow) {
        gsap.fromTo(swissRow,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: 'left 75%',
              end: 'left 35%',
              scrub: 0.5
            }
          }
        );
      }
    });

    // Click handler for Sidebar Page Nav Dots (Smooth direct scroll to target panel)
    pageNavDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const targetIdx = parseInt(dot.getAttribute('data-panel'), 10);
        if (!isNaN(targetIdx) && horizontalTween.scrollTrigger) {
          const st = horizontalTween.scrollTrigger;
          const targetScroll = st.start + (st.end - st.start) * (targetIdx / (totalPanels - 1));
          gsap.to(window, { scrollTo: targetScroll, duration: 0.75, ease: 'power2.out' });
        }
      });
    });

    // ------------------------------------------------------------------------
    // TABLET & MOBILE TOUCH FINGER SWIPE SUPPORT (fixed: prevent back gesture)
    // ------------------------------------------------------------------------
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartScroll = 0;
    let swipeDirection = null; // 'horizontal' | 'vertical' | null

    window.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartScroll = window.scrollY;
        swipeDirection = null;
      }
    }, { passive: true });

    // NON-passive so we can preventDefault() and block browser back navigation
    window.addEventListener('touchmove', (e) => {
      if (!touchStartX || e.touches.length > 1) return;
      const deltaX = touchStartX - e.touches[0].clientX;
      const deltaY = touchStartY - e.touches[0].clientY;

      // Lock direction after first significant move (8px threshold)
      if (!swipeDirection && (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8)) {
        swipeDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'horizontal' : 'vertical';
      }

      if (swipeDirection === 'horizontal') {
        e.preventDefault(); // Block browser back/forward & vertical scroll
        window.scrollTo(0, touchStartScroll + deltaX * 2.2);
      }
    }, { passive: false });

    window.addEventListener('touchend', () => {
      // Snap to nearest panel on finger lift
      if (swipeDirection === 'horizontal' && horizontalTween && horizontalTween.scrollTrigger) {
        const st = horizontalTween.scrollTrigger;
        const progress = (window.scrollY - st.start) / (st.end - st.start);
        const clamped = Math.max(0, Math.min(1, progress));
        const nearestPanel = Math.round(clamped * (panels.length - 1));
        const targetScroll = st.start + (st.end - st.start) * (nearestPanel / (panels.length - 1));
        gsap.to(window, { scrollTo: targetScroll, duration: 0.45, ease: 'power2.out' });
      }
      touchStartX = 0;
      touchStartY = 0;
      swipeDirection = null;
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // 4. Presenter Collapsible Box Toggle
  // --------------------------------------------------------------------------
  const presenterToggle = document.getElementById('presenterToggle');
  const presenterBox = presenterToggle ? presenterToggle.closest('.presenter-box') : null;

  if (presenterToggle && presenterBox) {
    presenterToggle.addEventListener('click', () => {
      presenterBox.classList.toggle('open');
    });
  }

  // --------------------------------------------------------------------------
  // 5. Photo Studio BTS Interactive Gallery (Panel 04 - GERMAN DATA FIXED)
  // --------------------------------------------------------------------------
  const photoBtsData = {
    bts_meadow: {
      img: 'assets/images/photo/bts_meadow_walk.jpg',
      de: {
        title: 'Schritt 1: Blumen-Sourcing auf der Wiese 🌾',
        desc: 'Sammeln von frischem Hahnenfuss, Klee und Wegwarte beim Spaziergang mit dem Hund 🐕. Echte botanische Elemente direkt aus der Natur!'
      },
      en: {
        title: 'Step 1: Field Sourcing & Meadow Walk 🌾',
        desc: 'Collecting wild buttercups, clover, and chicory blooms in green fields on a walk with my dog. Fresh, authentic botanical elements directly from nature!'
      }
    },
    bts_rig: {
      img: 'assets/images/photo/bts_camera_setup.jpg',
      de: {
        title: 'Schritt 2: Studio-Set & Kamera-Aufbau 📸',
        desc: 'Aufbau des Kamera- & Licht-Setups mit gerichtetem Studio-Licht und blauem Hintergrund. (Mit dem treuen Corgi-Assistenten am Monitor! 🐶)'
      },
      en: {
        title: 'Step 2: Studio Setup & Camera Rigging 📸',
        desc: 'Setting up the camera and lighting setup with a direct studio light and an azure blue backdrop. (With the trusty Corgi Assistant Art Director keeping an eye on the process! 🐶)'
      }
    },
    macro_test1: {
      img: 'assets/images/photo/test_shot_1.jpg',
      de: {
        title: 'Schritt 3: Makro-Test A 🔍',
        desc: 'Testen der Schärfentiefe und feinen botanischen Texturen auf einer gepunkteten Papier-Trinkhalm-Vase mit Wiesenblumen.'
      },
      en: {
        title: 'STEP 3: MACRO FRAMING TEST A 🔍',
        desc: 'Testing macro depth of field and fine botanical textures on a single polka-dot paper straw with wild meadow flowers.'
      }
    },
    macro_test2: {
      img: 'assets/images/photo/test_shot_2.jpg',
      de: {
        title: 'Schritt 4: Makro-Test B 🌸',
        desc: 'Erkundung von gerichteten Hartschatten und Farbkontrasten zwischen farbenfrohen Strohhalm-Mustern und zarten Blütenblättern.'
      },
      en: {
        title: 'Step 4: Macro Test B 🌸',
        desc: 'Exploring directional hard shadows and color contrast between vibrant straw patterns and delicate petals.'
      }
    },
    raw_bouquet: {
      img: 'assets/images/photo/raw_composition.jpg',
      de: {
        title: 'Schritt 5: Botanische Installation 💐',
        desc: 'Vollständiges Studio-Arrangement: Papier-Strohhalme in kräftigen Farben und Punkten, kombiniert zu einer einheitlichen Komposition vor dem finalen Layout.'
      },
      en: {
        title: 'Step 5: Botanical Installation 💐',
        desc: 'Full studio arrangement: paper straws in vibrant colors and polka dots combined into a unified composition before final layout.'
      }
    }
  };

  let activePhotoKey = 'bts_meadow';
  const photoTabs = document.querySelectorAll('.bts-pill-btn[data-photo]');
  const photoBtsImg = document.getElementById('photoBtsImg');
  const photoBtsTitle = document.getElementById('photoBtsTitle');
  const photoBtsDesc = document.getElementById('photoBtsDesc');
  const photoBtsModalBtn = document.getElementById('photoBtsModalBtn');

  function updatePhotoBtsCaption() {
    if (!photoBtsData[activePhotoKey]) return;
    const data = photoBtsData[activePhotoKey][currentLang] || photoBtsData[activePhotoKey]['de'];
    if (photoBtsTitle) photoBtsTitle.textContent = data.title;
    if (photoBtsDesc) photoBtsDesc.textContent = data.desc;
    if (photoBtsImg) photoBtsImg.setAttribute('data-img', photoBtsData[activePhotoKey].img);
    if (photoBtsModalBtn) photoBtsModalBtn.setAttribute('data-img', photoBtsData[activePhotoKey].img);
  }

  photoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-photo');
      if (!photoBtsData[key]) return;
      activePhotoKey = key;

      photoTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      gsap.to([photoBtsImg, photoBtsTitle, photoBtsDesc], {
        opacity: 0,
        duration: 0.15,
        onComplete: () => {
          if (photoBtsImg) photoBtsImg.src = photoBtsData[key].img;
          updatePhotoBtsCaption();

          gsap.to([photoBtsImg, photoBtsTitle, photoBtsDesc], {
            opacity: 1,
            duration: 0.35,
            ease: 'power2.out'
          });
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 6. AI Post-Production Stage Switcher (Panel 05 - GERMAN DATA FIXED)
  // --------------------------------------------------------------------------
  const stageData = {
    step1: {
      img: 'assets/images/ai/step1_raw_gen.jpg',
      de: {
        title: 'Schritt 1: KI-Basisgenerierung',
        desc: 'Generierung der Szenerie mit Fokus auf natürliche Beleuchtung, salbeigrünen Fliesen-Hintergrund und realistische Strohhalm-Platzierung.'
      },
      en: {
        title: 'Step 1: AI Base Generation',
        desc: 'Generating the base scene focusing on natural lighting, sage-green tiled background, and realistic straw placement.'
      }
    },
    step2: {
      img: 'assets/images/ai/step2_shelf_edit.jpg',
      de: {
        title: 'Schritt 2: Bar-Regal & Detail-Retusche',
        desc: 'Hinzufügen von Spezialitäten-Flaschen und eines Cocktail-Shakers auf dem Hintergrund-Regal für einen authentischen Bar-Kontext.'
      },
      en: {
        title: 'Step 2: Bar Shelf & Detail Retouching',
        desc: 'Adding specialty liquor bottles and a cocktail shaker on the background shelf for an authentic bar context.'
      }
    },
    step3: {
      img: 'assets/images/ai/step3_leef_brand.jpg',
      de: {
        title: 'Schritt 3: Branding-Integration',
        desc: 'Einbetten des echten LEEF-Branding auf der Kraftpapiertüte und Platzieren von gestreiften Papier-Strohhalmen in Eisgetränken.'
      },
      en: {
        title: 'Step 3: Branding Integration',
        desc: 'Integrating true-to-life LEEF branding onto the craft paper bag and placing striped paper straws into iced drinks.'
      }
    },
    step4: {
      img: 'assets/images/ai/step4_final_ad.jpg',
      de: {
        title: 'Schritt 4: Layout & Typografie',
        desc: 'Einfügen des Hauptslogans "STARK IM GLAS. GUT FÜR DIE WELT.", des Farbakzents und der handgeschriebenen Unterzeile "Mehr Farbe im Glas, weniger Müll auf der Erde."'
      },
      en: {
        title: 'Step 4: Layout & Typography',
        desc: 'Integrating the main slogan "STARK IM GLAS. GUT FÜR DIE WELT.", the accent header banner, and the handwritten subline "Mehr Farbe im Glas, weniger Müll auf der Erde."'
      }
    }
  };

  let activeStageKey = 'step1';
  const stageTabs = document.querySelectorAll('.bts-pill-btn[data-stage]');
  const stagePreviewImg = document.getElementById('stagePreviewImg');
  const stageTitle = document.getElementById('stageTitle');
  const stageDesc = document.getElementById('stageDesc');
  const stageModalBtn = document.getElementById('stageModalBtn');

  function updateAiStageCaption() {
    if (!stageData[activeStageKey]) return;
    const data = stageData[activeStageKey][currentLang] || stageData[activeStageKey]['de'];
    if (stageTitle) stageTitle.textContent = data.title;
    if (stageDesc) stageDesc.textContent = data.desc;
    if (stagePreviewImg) stagePreviewImg.setAttribute('data-img', stageData[activeStageKey].img);
    if (stageModalBtn) stageModalBtn.setAttribute('data-img', stageData[activeStageKey].img);
  }

  stageTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const stageKey = tab.getAttribute('data-stage');
      if (!stageData[stageKey]) return;
      activeStageKey = stageKey;

      stageTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      gsap.to([stagePreviewImg, stageTitle, stageDesc], {
        opacity: 0,
        duration: 0.15,
        onComplete: () => {
          if (stagePreviewImg) stagePreviewImg.src = stageData[stageKey].img;
          updateAiStageCaption();

          gsap.to([stagePreviewImg, stageTitle, stageDesc], {
            opacity: 1,
            duration: 0.35,
            ease: 'power2.out'
          });
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. Copy Prompt to Clipboard
  // --------------------------------------------------------------------------
  const copyPromptBtn = document.getElementById('copyPromptBtn');
  const promptCode = document.getElementById('promptCode');

  if (copyPromptBtn && promptCode) {
    copyPromptBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(promptCode.textContent.trim());
        const originalText = copyPromptBtn.innerHTML;
        
        copyPromptBtn.innerHTML = 'COPIED!';
        copyPromptBtn.style.background = '#00f5d4';
        copyPromptBtn.style.color = '#111111';

        setTimeout(() => {
          copyPromptBtn.innerHTML = originalText;
          copyPromptBtn.style.background = '';
          copyPromptBtn.style.color = '';
        }, 2200);
      } catch (err) {
        console.error('Failed to copy prompt text:', err);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. Lightbox Modal Preview (Clicking Close Button, Overlay, or Image Closes Modal)
  // --------------------------------------------------------------------------
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');

  const openModal = (imgSrc) => {
    if (!modal || !modalImg) return;
    modalImg.src = imgSrc;
    modal.classList.add('active');
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.modal-trigger');
    if (trigger) {
      const imgSrc = trigger.getAttribute('data-img');
      if (imgSrc) openModal(imgSrc);
    }
  });

  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalImg) modalImg.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Initialize Language on Startup
  switchLanguage(currentLang);
});
