(() => {
  "use strict";

  const PLACES = [
    {
      id: "hegra",
      where: "نحو 20 كم شمال العُلا",
      name: "الحِجر",
      cat: "history",
      lat: 26.7869,
      lon: 37.9542,
      hours: 3,
      cost: 95,
      costLabel: "من 95 ريالًا للشخص",
      best: "الصباح أو العصر",
      img: "media/hegra.jpg",
      alt: "صف من المقابر النبطية المنحوتة في واجهة صخرية بالحِجر",
      label: "right",
      text: "مدينة نبطية تضم أكثر من 110 مقابر منحوتة في الحجر الرملي، يعود أغلبها إلى الفترة بين القرن الأول قبل الميلاد والقرن الأول الميلادي. أشهرها قصر الفريد، مقبرة تقف وحدها وسط الرمال ولم يكتمل نحتها. أُدرجت في قائمة التراث العالمي لليونسكو عام 2008، فكانت أول موقع سعودي يدخل القائمة.",
      note: "الدخول بجولة مع مرشد فقط، والحجز مسبقًا من موقع Experience AlUla."
    },
    {
      id: "elephant",
      where: "20 دقيقة بالسيارة من البلدة القديمة",
      name: "جبل الفيل",
      cat: "nature",
      lat: 26.6892,
      lon: 37.9816,
      hours: 1.5,
      cost: 0,
      costLabel: "دون تذكرة",
      best: "قبيل الغروب",
      img: "media/elephant-rock.jpg",
      alt: "جبل الفيل في ضوء ذهبي تحت سماء زرقاء",
      label: "left",
      text: "تكوين طبيعي من الحجر الرملي يرتفع 52 مترًا، نحتته الرياح والأمطار والرمال على مدى ملايين السنين حتى صار على هيئة فيل يلامس خرطومه الأرض. يبعد نحو 20 دقيقة بالسيارة عن البلدة القديمة، وحوله جلسات ومقاهٍ تفتح من العصر.",
      note: "أجمل وقت للزيارة عند الغروب حين يتوهج لون الصخرة."
    },
    {
      id: "maraya",
      where: "في وادي عشار",
      name: "مرايا",
      cat: "experience",
      lat: 26.59,
      lon: 37.88,
      hours: 1,
      cost: 0,
      costLabel: "حسب الفعالية",
      best: "العصر والمساء",
      img: "media/maraya.jpg",
      alt: "واجهة مبنى مرايا تعكس الجبال المحيطة به",
      label: "right",
      text: "قاعة حفلات على هيئة مكعب في وادي عشار، تكسوها 9,740 مترًا مربعًا من المرايا، وتحمل رقم موسوعة غينيس لأكبر مبنى مكسو بالمرايا في العالم. اكتمل بناؤها عام 2019 وتتسع لنحو 500 شخص، ومن بعيد تكاد تختفي لأنها تعكس الصخور من حولها.",
      note: "الحفلات والمطعم بحجز مسبق، والتكلفة تختلف حسب الفعالية."
    },
    {
      id: "oldtown",
      where: "في قلب العُلا",
      name: "البلدة القديمة",
      cat: "history",
      lat: 26.617,
      lon: 37.917,
      hours: 2,
      cost: 0,
      costLabel: "مجانًا",
      best: "بعد العصر",
      img: "media/old-town.jpg",
      alt: "بيوت البلدة القديمة الطينية في العُلا كما تبدو من القلعة",
      label: "right",
      text: "متاهة من الأزقة تضم قرابة 900 بيت من الطين و400 دكان وخمس ساحات. سكنها الناس منذ القرن الثاني عشر الميلادي حتى الثمانينات، وكانت محطة للحجاج على الطريق بين دمشق ومكة، وتطل عليها قلعة يبلغ ارتفاعها 45 مترًا.",
      note: "الدخول مجاني، والبلدة تنبض بالحياة بعد العصر حتى آخر الليل."
    },
    {
      id: "dadan",
      where: "شمال البلدة القديمة",
      name: "دادان",
      cat: "history",
      lat: 26.6445,
      lon: 37.9265,
      hours: 2,
      cost: 60,
      costLabel: "من 60 ريالًا للشخص",
      best: "الصباح",
      img: "media/dadan.jpg",
      alt: "جرف صخري شاهق في موقع دادان الأثري",
      label: "right",
      text: "عاصمة مملكتي دادان ولحيان قبل أكثر من ألفي عام. أشهر ما فيها مقابر الأسود: مقابر منحوتة في جرف أحمر تحرسها منحوتات أسود يُعتقد أنها رمز للقوة والحماية، وبعض المقابر على ارتفاع يصل إلى 50 مترًا عن الأرض.",
      note: "الجولة تشمل جبل عكمة وتستغرق نحو ساعتين، ولا يُسمح بالقيادة الذاتية داخل الموقع."
    },
    {
      id: "ikmah",
      where: "بجوار دادان",
      name: "جبل عكمة",
      cat: "history",
      lat: 26.6595,
      lon: 37.917,
      hours: 1,
      cost: 0,
      costLabel: "ضمن جولة دادان",
      best: "الصباح",
      img: "media/ikmah.jpg",
      alt: "نقوش ورسوم صخرية قديمة على صخور جبل عكمة",
      label: "left",
      text: "يُسمّى المكتبة المفتوحة؛ مئات النقوش محفورة على صخور وادٍ ضيق، أغلبها بالخط الدادني ويعود إلى النصف الثاني من الألفية الأولى قبل الميلاد. وهو مسجل في سجل ذاكرة العالم لليونسكو.",
      note: "الزيارة ضمن جولة دادان نفسها."
    },
    {
      id: "harrat",
      where: "30 دقيقة بالسيارة من البلدة القديمة",
      name: "مطل حرة عويرض",
      cat: "nature",
      lat: 26.605,
      lon: 37.865,
      hours: 1.5,
      cost: 0,
      costLabel: "دون تذكرة",
      best: "الغروب وأول الليل",
      img: "media/harrat.jpg",
      alt: "إطلالة من مكان مرتفع على واحة العُلا والجبال المحيطة",
      label: "right",
      text: "قمة جبل بركاني على ارتفاع 1,219 مترًا فوق سطح البحر، تطل على الواحة والبلدة القديمة ودادان. يفتح آخر العصر، وبعد الغروب تستطيع رصد النجوم عبر المناظير المتاحة هناك.",
      note: "يبعد نحو 30 دقيقة بالسيارة عن البلدة القديمة."
    }
  ];

  const CATS = { history: "تاريخ", nature: "طبيعة", experience: "تجارب" };
  const ALULA = { lat: 26.6086, lon: 37.9232 };
  const byId = Object.fromEntries(PLACES.map((p) => [p.id, p]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const num = (n, digits = 0) =>
    Number(n).toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: 0 });

  const hoursText = (h) => {
    if (h === 1) return "ساعة";
    if (h === 2) return "ساعتان";
    if (h === 1.5) return "ساعة ونصف";
    return `${num(h, 1)} ساعات`;
  };

  const distanceKm = (a, b) => {
    const r = 6371;
    const rad = (d) => (d * Math.PI) / 180;
    const dLat = rad(b.lat - a.lat);
    const dLon = rad(b.lon - a.lon);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
    return 2 * r * Math.asin(Math.sqrt(h));
  };

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {}
    },
    remove(key) {
      try {
        localStorage.removeItem(key);
      } catch {}
    }
  };

  const DB = (() => {
    let opening = null;
    const open = () => {
      if (opening) return opening;
      opening = new Promise((resolve, reject) => {
        if (!("indexedDB" in window)) {
          reject(new Error("indexedDB unavailable"));
          return;
        }
        const req = indexedDB.open("alula-guide", 1);
        req.onupgradeneeded = () => {
          const db = req.result;
          if (!db.objectStoreNames.contains("trips")) db.createObjectStore("trips", { keyPath: "id", autoIncrement: true });
          if (!db.objectStoreNames.contains("messages")) db.createObjectStore("messages", { keyPath: "id", autoIncrement: true });
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
      return opening;
    };
    const run = async (name, mode, action) => {
      const db = await open();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(name, mode);
        const req = action(tx.objectStore(name));
        tx.oncomplete = () => resolve(req ? req.result : undefined);
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);
      });
    };
    const backupKey = (name) => `alula-db-${name}`;
    return {
      async all(name) {
        try {
          return await run(name, "readonly", (os) => os.getAll());
        } catch {
          return store.get(backupKey(name), []);
        }
      },
      async put(name, record) {
        const data = { ...record };
        if (!data.id) delete data.id;
        try {
          return await run(name, "readwrite", (os) => os.put(data));
        } catch {
          const list = store.get(backupKey(name), []);
          if (!data.id) data.id = Date.now();
          const i = list.findIndex((x) => x.id === data.id);
          if (i >= 0) list[i] = data;
          else list.push(data);
          store.set(backupKey(name), list);
          return data.id;
        }
      },
      async remove(name, id) {
        try {
          await run(name, "readwrite", (os) => os.delete(id));
        } catch {
          store.set(backupKey(name), store.get(backupKey(name), []).filter((x) => x.id !== id));
        }
      }
    };
  })();

  let toastEl = null;
  let toastTimer = 0;
  const toast = (message) => {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    requestAnimationFrame(() => toastEl.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2800);
  };

  const dateText = (stamp) =>
    new Intl.DateTimeFormat("ar-SA-u-nu-latn", { day: "numeric", month: "long", year: "numeric" }).format(new Date(stamp));

  function initHeader() {
    const header = $(".site-header");
    const toggle = $(".nav-toggle");
    const nav = $("#site-nav");
    if (!header) return;
    const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!toggle || !nav) return;
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      header.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  function initHero() {
    const hero = $("#hero");
    if (!hero) return;
    const media = $(".hero-media", hero);
    const timeEl = $("#alula-time");
    const phaseEl = $("#phase-name");
    const buttons = $$(".phase-switch button", hero);
    const canvas = $("#stars");
    const names = { dawn: "فجر", day: "نهار", sunset: "غروب", night: "ليل" };
    const clock = new Intl.DateTimeFormat("ar-SA-u-nu-latn", { timeZone: "Asia/Riyadh", hour: "numeric", minute: "2-digit", hour12: true });
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Riyadh", hour: "2-digit", minute: "2-digit", hour12: false });
    let sunrise = 6 * 60 + 40;
    let sunset = 17 * 60 + 25;
    let mode = "auto";

    const minutesNow = () => {
      const [h, m] = parts.format(new Date()).split(":").map(Number);
      return (h % 24) * 60 + m;
    };

    const phaseAt = (m) => {
      if (m < sunrise - 50 || m > sunset + 50) return "night";
      if (m < sunrise + 45) return "dawn";
      if (m > sunset - 60) return "sunset";
      return "day";
    };

    const render = () => {
      const auto = phaseAt(minutesNow());
      const phase = mode === "auto" ? auto : mode;
      hero.dataset.phase = phase;
      phaseEl.textContent = mode === "auto" ? names[phase] : `معاينة: ${names[phase]}`;
      timeEl.textContent = clock.format(new Date());
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.phase === mode)));
      if (phase === "night") startStars();
    };

    buttons.forEach((b) =>
      b.addEventListener("click", () => {
        mode = b.dataset.phase;
        render();
      })
    );

    let starsDrawn = false;
    let stars = [];
    let raf = 0;
    const startStars = () => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const size = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        stars = Array.from({ length: Math.round((canvas.clientWidth * canvas.clientHeight) / 2600) }, () => ({
          x: Math.random() * canvas.clientWidth,
          y: Math.random() * canvas.clientHeight,
          r: Math.random() * 1.2 + 0.25,
          a: Math.random() * 0.7 + 0.3,
          s: Math.random() * 0.02 + 0.004,
          p: Math.random() * Math.PI * 2
        }));
      };
      const draw = (t) => {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        for (const s of stars) {
          const tw = reduceMotion ? 1 : 0.65 + 0.35 * Math.sin(t * s.s * 0.06 + s.p);
          ctx.globalAlpha = s.a * tw * (1 - (s.y / canvas.clientHeight) * 0.6);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = "#fff6e6";
          ctx.fill();
        }
        if (!reduceMotion && hero.dataset.phase === "night") raf = requestAnimationFrame(draw);
        else raf = 0;
      };
      if (!starsDrawn) {
        size();
        window.addEventListener("resize", () => {
          size();
          if (!raf) draw(performance.now());
        });
        starsDrawn = true;
      }
      if (!raf) raf = requestAnimationFrame(draw);
    };

    const codes = [
      [[0], "صافٍ"],
      [[1], "صافٍ غالبًا"],
      [[2], "غائم جزئيًا"],
      [[3], "غائم"],
      [[45, 48], "ضباب"],
      [[51, 53, 55, 56, 57], "رذاذ"],
      [[61, 63, 65, 66, 67], "مطر"],
      [[71, 73, 75, 77], "ثلج"],
      [[80, 81, 82], "زخات مطر"],
      [[95, 96, 99], "عاصفة رعدية"]
    ];
    const describe = (code) => (codes.find(([list]) => list.includes(code)) || [null, "غير معروف"])[1];
    const toMinutes = (iso) => {
      const [h, m] = iso.split("T")[1].split(":").map(Number);
      return h * 60 + m;
    };
    const shortTime = (iso) => {
      const m = toMinutes(iso);
      const h = Math.floor(m / 60);
      const mm = String(m % 60).padStart(2, "0");
      return `${((h + 11) % 12) + 1}:${mm} ${h < 12 ? "ص" : "م"}`;
    };

    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=26.6086&longitude=37.9232" +
      "&current=temperature_2m,weather_code,wind_speed_10m&daily=sunrise,sunset&timezone=Asia%2FRiyadh&forecast_days=1";
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then((data) => {
        const c = data.current;
        $("#w-temp").textContent = `${Math.round(c.temperature_2m)}°`;
        $("#w-desc").textContent = describe(c.weather_code);
        $("#w-wind").textContent = `${Math.round(c.wind_speed_10m)} كم/س`;
        const rise = data.daily.sunrise[0];
        const set = data.daily.sunset[0];
        sunrise = toMinutes(rise);
        sunset = toMinutes(set);
        $("#w-sun").textContent = `${shortTime(rise)} و ${shortTime(set)}`;
        render();
      })
      .catch(() => {
        $("#w-desc").textContent = "تعذّر جلب الطقس الآن";
        $("#w-temp").textContent = "—";
        $("#w-wind").textContent = "—";
        $("#w-sun").textContent = "—";
      });

    render();
    setInterval(render, 20000);

    if (!reduceMotion && media) {
      let ticking = false;
      window.addEventListener(
        "scroll",
        () => {
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(() => {
            const y = Math.min(window.scrollY, window.innerHeight);
            media.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
            ticking = false;
          });
        },
        { passive: true }
      );
    }
  }

  function initCounters() {
    const items = $$("[data-count]");
    if (!items.length) return;
    const play = (el) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      if (reduceMotion) {
        el.textContent = num(target) + suffix;
        return;
      }
      const start = performance.now();
      const tick = (t) => {
        const k = Math.min((t - start) / 1600, 1);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = num(Math.round(target * eased)) + suffix;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (!("IntersectionObserver" in window)) return;
    const seen = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          play(entry.target);
          seen.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    items.forEach((el) => {
      el.textContent = "0" + (el.dataset.suffix || "");
      seen.observe(el);
    });
  }

  function initMedia() {
    const audio = $("#desert-audio");
    const soundBtn = $("#sound-toggle");
    if (audio && soundBtn) {
      const label = $(".sound-label", soundBtn);
      audio.volume = 0.55;
      const sync = () => {
        const on = !audio.paused;
        soundBtn.setAttribute("aria-pressed", String(on));
        label.textContent = on ? "أوقف صوت الريح" : "شغّل صوت الريح";
      };
      soundBtn.addEventListener("click", () => {
        if (audio.paused) {
          audio.play().catch(() => toast("المتصفح منع تشغيل الصوت، حاول مرة أخرى"));
        } else {
          audio.pause();
        }
      });
      audio.addEventListener("play", sync);
      audio.addEventListener("pause", sync);
    }

    const facade = $("#film-play");
    if (facade) {
      facade.addEventListener("click", () => {
        const frame = document.createElement("iframe");
        frame.src = `https://www.youtube-nocookie.com/embed/${facade.dataset.video}?autoplay=1&rel=0`;
        frame.title = "فيلم وثائقي عن العُلا";
        frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen";
        frame.allowFullscreen = true;
        facade.replaceWith(frame);
        if (audio && !audio.paused) audio.pause();
      });
    }
  }

  function addPending(id) {
    const list = store.get("alula-pending", []);
    if (!list.includes(id)) list.push(id);
    store.set("alula-pending", list);
  }

  function initPlaces() {
    const map = $("#map");
    const detail = $("#detail");
    if (!map || !detail) return;
    const cards = $$(".place-card");
    const search = $("#place-search");
    const chips = $$(".chip[data-filter]");
    const empty = $("#no-results");
    const countEl = $("#result-count");
    let filter = "all";
    let current = null;
    let speaking = false;

    const W = 600;
    const H = 700;
    const box = { n: 26.82, s: 26.56, w: 37.84, e: 38.01 };
    const px = (p) => ({
      x: ((p.lon - box.w) / (box.e - box.w)) * W,
      y: ((box.n - p.lat) / (box.n - box.s)) * H
    });
    const kmPerPx = (distanceKm({ lat: 26.69, lon: box.w }, { lat: 26.69, lon: box.e })) / W;
    const scalePx = 5 / kmPerPx;

    let seed = 11;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    const rocks = Array.from({ length: 90 }, () => {
      const x = 170 + rand() * 420;
      const y = rand() * H;
      const r = 2 + rand() * 7;
      return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(r * 1.6).toFixed(1)}" ry="${r.toFixed(1)}"/>`;
    }).join("");
    const grid = [];
    for (let lat = 26.6; lat < 26.82; lat += 0.05) {
      const y = ((box.n - lat) / (box.n - box.s)) * H;
      grid.push(`<line x1="0" y1="${y.toFixed(1)}" x2="${W}" y2="${y.toFixed(1)}"/>`);
    }
    for (let lon = 37.85; lon < 38.01; lon += 0.05) {
      const x = ((lon - box.w) / (box.e - box.w)) * W;
      grid.push(`<line x1="${x.toFixed(1)}" y1="0" x2="${x.toFixed(1)}" y2="${H}"/>`);
    }

    const pins = PLACES.map((p) => {
      const { x, y } = px(p);
      const right = p.label === "right";
      return `<g class="pin" data-id="${p.id}" tabindex="0" role="button" aria-label="${esc(p.name)}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})">
        <circle class="pin-ring" r="16"/>
        <circle class="pin-dot" r="7.5"/>
        <text class="pin-label" x="${right ? 14 : -14}" y="5" text-anchor="${right ? "start" : "end"}">${esc(p.name)}</text>
      </g>`;
    }).join("");

    map.insertAdjacentHTML(
      "beforeend",
      `<defs>
        <radialGradient id="map-bg" cx="55%" cy="45%" r="75%"><stop offset="0" stop-color="#2a1c14"/><stop offset="1" stop-color="#140e0b"/></radialGradient>
        <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="8" stroke="#3a3030" stroke-width="1.4"/></pattern>
        <linearGradient id="wadi" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#4f6b3e" stop-opacity=".55"/><stop offset="1" stop-color="#4f6b3e" stop-opacity=".25"/></linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#map-bg)"/>
      <g stroke="#f3e7d6" stroke-opacity=".05">${grid.join("")}</g>
      <g fill="#b0643a" fill-opacity=".14">${rocks}</g>
      <path d="M0 0 H168 C186 110 140 210 168 320 C192 420 150 520 196 700 H0 Z" fill="#0b0909"/>
      <path d="M0 0 H168 C186 110 140 210 168 320 C192 420 150 520 196 700 H0 Z" fill="url(#hatch)" opacity=".7"/>
      <text x="40" y="250" fill="#f3e7d6" fill-opacity=".35" font-size="14" font-weight="600">حرة عويرض</text>
      <path d="M215 700 C240 640 262 590 272 547 C285 500 296 470 306 432 C326 360 352 260 380 170 C392 128 402 92 414 30" fill="none" stroke="url(#wadi)" stroke-width="34" stroke-linecap="round"/>
      <path d="M215 700 C240 640 262 590 272 547 C285 500 296 470 306 432 C326 360 352 260 380 170 C392 128 402 92 414 30" fill="none" stroke="#7a9a63" stroke-opacity=".5" stroke-width="2" stroke-dasharray="2 6"/>
      <text x="250" y="626" fill="#9bb886" fill-opacity=".75" font-size="13" font-weight="600" text-anchor="middle" transform="rotate(-66 250 626)">وادي العُلا</text>
      <g fill="none" stroke="#d9a55b" stroke-opacity=".35" stroke-width="2" stroke-dasharray="7 6">
        <path d="M300 700 C298 640 300 590 292 547 C300 500 318 470 322 430 C340 360 368 260 392 170 C398 140 402 110 403 89"/>
        <path d="M322 440 C380 420 450 390 500 352"/>
        <path d="M282 560 C230 580 160 590 88 579"/>
        <path d="M290 590 C240 610 190 616 141 619"/>
      </g>
      <g transform="translate(560 54)" fill="#f3e7d6">
        <circle r="20" fill="#120d0b" stroke="#f3e7d6" stroke-opacity=".25"/>
        <path d="M0 -13 L6 4 L0 0 L-6 4 Z" fill="#d9a55b"/>
        <text y="16" font-size="11" text-anchor="middle" fill-opacity=".8">شمال</text>
      </g>
      <g transform="translate(24 660)">
        <rect width="${scalePx.toFixed(1)}" height="6" fill="#f3e7d6" fill-opacity=".8"/>
        <rect width="${(scalePx / 2).toFixed(1)}" height="6" fill="#d9a55b"/>
        <text x="${(scalePx / 2).toFixed(1)}" y="-8" font-size="12" fill="#f3e7d6" fill-opacity=".8" text-anchor="middle" direction="rtl">5 كم</text>
      </g>
      <g id="pins">${pins}</g>`
    );

    const pinEls = $$(".pin", map);

    const stopSpeech = () => {
      if ("speechSynthesis" in window) speechSynthesis.cancel();
      speaking = false;
      const btn = $("[data-speak]", detail);
      if (btn) {
        btn.setAttribute("aria-pressed", "false");
        btn.textContent = "استمع للوصف";
      }
    };

    const speak = (p) => {
      if (!("speechSynthesis" in window)) {
        toast("متصفحك لا يدعم القراءة الصوتية");
        return;
      }
      if (speaking) {
        stopSpeech();
        return;
      }
      const u = new SpeechSynthesisUtterance(`${p.name}. ${p.text}`);
      const voice = speechSynthesis.getVoices().find((v) => v.lang && v.lang.toLowerCase().startsWith("ar"));
      u.lang = voice ? voice.lang : "ar-SA";
      if (voice) u.voice = voice;
      u.rate = 0.95;
      u.onend = stopSpeech;
      u.onerror = stopSpeech;
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
      speaking = true;
      const btn = $("[data-speak]", detail);
      btn.setAttribute("aria-pressed", "true");
      btn.textContent = "أوقف القراءة";
      if (!voice) toast("لا يوجد صوت عربي في جهازك، سيُقرأ بالصوت الافتراضي");
    };

    const render = (p) => {
      const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.lat},${p.lon}`)}`;
      detail.innerHTML = `
        <img class="detail-img" src="${p.img}" alt="${esc(p.alt)}">
        <div class="detail-body">
          <span class="tag">${CATS[p.cat]}</span>
          <h2>${esc(p.name)}</h2>
          <p>${esc(p.text)}</p>
          <ul class="facts-list">
            <li><span>مدة الزيارة</span><b>${hoursText(p.hours)}</b></li>
            <li><span>التكلفة</span><b>${esc(p.costLabel)}</b></li>
            <li><span>أفضل وقت</span><b>${esc(p.best)}</b></li>
            <li><span>الموقع</span><b>${esc(p.where)}</b></li>
          </ul>
          <p class="note">${esc(p.note)}</p>
          <div class="detail-actions">
            <button type="button" class="btn btn-gold" data-add>أضف إلى رحلتي</button>
            <button type="button" class="btn btn-ghost" data-speak aria-pressed="false">استمع للوصف</button>
            <a class="btn btn-ghost" href="${maps}" target="_blank" rel="noopener">افتح في الخرائط</a>
          </div>
        </div>`;
    };

    const select = (id, opts = {}) => {
      const p = byId[id];
      if (!p || (current && current.id === id)) return;
      stopSpeech();
      current = p;
      pinEls.forEach((el) => el.classList.toggle("is-active", el.dataset.id === id));
      const pin = pinEls.find((el) => el.dataset.id === id);
      if (pin) pin.parentNode.appendChild(pin);
      if (reduceMotion) {
        render(p);
      } else {
        detail.classList.add("is-swapping");
        setTimeout(() => {
          render(p);
          detail.classList.remove("is-swapping");
        }, 220);
      }
      if (history.replaceState) history.replaceState(null, "", `#${id}`);
      if (opts.scroll) {
        const target = window.innerWidth < 1080 ? detail : $(".explorer");
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      }
    };

    detail.addEventListener("click", (e) => {
      if (!current) return;
      if (e.target.closest("[data-add]")) {
        addPending(current.id);
        toast(`أُضيف «${current.name}» إلى رحلتك، تجده في صفحة المخطط`);
      }
      if (e.target.closest("[data-speak]")) speak(current);
    });

    map.addEventListener("click", (e) => {
      const pin = e.target.closest(".pin");
      if (pin) select(pin.dataset.id, { scroll: window.innerWidth < 1080 });
    });
    map.addEventListener("keydown", (e) => {
      const pin = e.target.closest(".pin");
      if (pin && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        select(pin.dataset.id, { scroll: window.innerWidth < 1080 });
      }
    });

    $$(".place-open").forEach((btn) => btn.addEventListener("click", () => select(btn.dataset.id, { scroll: true })));

    const normalize = (s) => s.replace(/[ً-ْـ]/g, "").replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").toLowerCase().trim();

    const applyFilter = () => {
      const q = normalize(search ? search.value : "");
      let shown = 0;
      cards.forEach((card) => {
        const p = byId[card.dataset.id];
        const ok = (filter === "all" || p.cat === filter) && (!q || normalize(p.name + " " + p.text).includes(q));
        card.hidden = !ok;
        if (ok) shown += 1;
        const pin = pinEls.find((el) => el.dataset.id === p.id);
        if (pin) pin.classList.toggle("is-dim", !ok);
      });
      empty.hidden = shown > 0;
      countEl.textContent = shown === 1 ? "مكان واحد" : shown === 2 ? "مكانان" : `${shown} أماكن`;
    };

    chips.forEach((chip) =>
      chip.addEventListener("click", () => {
        filter = chip.dataset.filter;
        chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        applyFilter();
      })
    );
    if (search) search.addEventListener("input", applyFilter);

    const fromHash = () => {
      const id = location.hash.slice(1);
      if (byId[id]) select(id);
    };
    window.addEventListener("hashchange", fromHash);
    const start = byId[location.hash.slice(1)] ? location.hash.slice(1) : "hegra";
    current = null;
    render(byId[start]);
    current = byId[start];
    pinEls.forEach((el) => el.classList.toggle("is-active", el.dataset.id === start));
    if ("speechSynthesis" in window) speechSynthesis.getVoices();
  }

  function initPlanner() {
    const board = $("#board");
    const pool = $("#pool");
    if (!board || !pool) return;
    const nameInput = $("#trip-name");
    const dayCount = $("#day-count");
    const savedList = $("#saved-list");
    const savedEmpty = $("#saved-empty");
    const MAX_DAYS = 5;
    const PRESETS = {
      1: [["hegra", "elephant", "oldtown"]],
      2: [["hegra", "elephant"], ["dadan", "ikmah", "oldtown", "harrat"]],
      3: [["hegra", "elephant"], ["dadan", "ikmah", "oldtown"], ["maraya", "harrat"]]
    };

    const blank = () => ({ id: null, name: "رحلتي إلى العُلا", days: [[], []], active: 0 });
    let state = Object.assign(blank(), store.get("alula-draft", {}));
    state.days = Array.isArray(state.days) && state.days.length ? state.days.map((d) => d.filter((id) => byId[id])) : [[], []];
    state.active = Math.min(state.active || 0, state.days.length - 1);

    const persist = () => store.set("alula-draft", state);
    const used = () => new Set(state.days.flat());
    const dayHours = (d) => d.reduce((s, id) => s + byId[id].hours, 0);
    const dayCost = (d) => d.reduce((s, id) => s + byId[id].cost, 0);

    const place = (id, day, index) => {
      state.days = state.days.map((d) => d.filter((x) => x !== id));
      const list = state.days[day];
      const at = index === undefined || index > list.length ? list.length : index;
      list.splice(at, 0, id);
      render();
    };

    const renderPool = () => {
      const inTrip = used();
      pool.innerHTML = PLACES.map(
        (p) => `<li class="pool-item${inTrip.has(p.id) ? " in-trip" : ""}" draggable="true" data-id="${p.id}">
          <img src="${p.img}" alt="" loading="lazy">
          <span class="item-text"><span class="item-name">${esc(p.name)}</span><span class="item-meta">${hoursText(p.hours)}</span></span>
          <button type="button" class="icon-btn" data-add="${p.id}" aria-label="أضف ${esc(p.name)} إلى اليوم ${state.active + 1}">+</button>
        </li>`
      ).join("");
    };

    const renderBoard = () => {
      board.innerHTML = state.days
        .map((d, i) => {
          const hrs = dayHours(d);
          const items = d
            .map(
              (id, j) => `<li class="trip-item" draggable="true" data-id="${id}">
                <span class="order">${j + 1}</span>
                <span class="item-text"><span class="item-name">${esc(byId[id].name)}</span><span class="item-meta">${hoursText(byId[id].hours)}</span></span>
                <button type="button" class="icon-btn" data-remove="${id}" aria-label="احذف ${esc(byId[id].name)}">×</button>
              </li>`
            )
            .join("");
          return `<section class="day${i === state.active ? " is-active" : ""}" data-day="${i}" aria-label="اليوم ${i + 1}">
            <div class="day-head">
              <button type="button" class="day-title" data-day-select="${i}" aria-pressed="${i === state.active}">اليوم ${i + 1}</button>
              <span class="day-stats"><span>${num(hrs, 1)} س</span><span>${num(dayCost(d))} ريال</span></span>
            </div>
            <ol class="day-list" data-day="${i}">${items}</ol>
            ${d.length ? "" : '<p class="day-empty">اسحب مكانًا إلى هنا</p>'}
            ${hrs > 8 ? '<p class="warn">هذا اليوم مزدحم، جرّب نقل مكان إلى يوم آخر.</p>' : ""}
          </section>`;
        })
        .join("");
    };

    const renderSummary = () => {
      const all = state.days.flat();
      $("#sum-places").textContent = num(all.length);
      $("#sum-hours").textContent = num(state.days.reduce((s, d) => s + dayHours(d), 0), 1);
      $("#sum-cost").textContent = num(state.days.reduce((s, d) => s + dayCost(d), 0));
      dayCount.textContent = state.days.length;
      $("#day-minus").disabled = state.days.length <= 1;
      $("#day-plus").disabled = state.days.length >= MAX_DAYS;
    };

    const render = () => {
      renderPool();
      renderBoard();
      renderSummary();
      if (nameInput.value !== state.name) nameInput.value = state.name;
      persist();
    };

    const renderSaved = async () => {
      const trips = (await DB.all("trips")).sort((a, b) => b.updated - a.updated);
      savedEmpty.hidden = trips.length > 0;
      savedList.innerHTML = trips
        .map((t) => {
          const count = t.days.flat().length;
          return `<li class="saved-item" data-id="${t.id}">
            <b>${esc(t.name)}</b>
            <span>${t.days.length} ${t.days.length === 1 ? "يوم" : "أيام"}، ${count} ${count === 1 ? "مكان" : "أماكن"}</span>
            <span>آخر تعديل ${dateText(t.updated)}</span>
            <span class="row">
              <button type="button" class="btn btn-ghost btn-sm" data-open="${t.id}">افتح</button>
              <button type="button" class="btn btn-ghost btn-sm" data-delete="${t.id}">احذف</button>
            </span>
          </li>`;
        })
        .join("");
    };

    pool.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-add]");
      if (!btn) return;
      place(btn.dataset.add, state.active);
      toast(`أُضيف «${byId[btn.dataset.add].name}» إلى اليوم ${state.active + 1}`);
    });

    board.addEventListener("click", (e) => {
      const remove = e.target.closest("[data-remove]");
      if (remove) {
        state.days = state.days.map((d) => d.filter((x) => x !== remove.dataset.remove));
        render();
        return;
      }
      const sel = e.target.closest("[data-day-select]");
      if (sel) {
        state.active = Number(sel.dataset.daySelect);
        render();
      }
    });

    let dragId = null;
    document.addEventListener("dragstart", (e) => {
      const item = e.target.closest && e.target.closest(".pool-item, .trip-item");
      if (!item) return;
      dragId = item.dataset.id;
      item.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", dragId);
    });
    document.addEventListener("dragend", (e) => {
      const item = e.target.closest && e.target.closest(".pool-item, .trip-item");
      if (item) item.classList.remove("dragging");
      $$(".day.is-over").forEach((d) => d.classList.remove("is-over"));
      dragId = null;
    });
    const indexAt = (list, y) => {
      const items = $$(".trip-item:not(.dragging)", list);
      const i = items.findIndex((el) => {
        const r = el.getBoundingClientRect();
        return y < r.top + r.height / 2;
      });
      return i === -1 ? items.length : i;
    };
    board.addEventListener("dragover", (e) => {
      const day = e.target.closest(".day");
      if (!day || !dragId) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      $$(".day.is-over").forEach((d) => d !== day && d.classList.remove("is-over"));
      day.classList.add("is-over");
    });
    board.addEventListener("dragleave", (e) => {
      const day = e.target.closest(".day");
      if (day && !day.contains(e.relatedTarget)) day.classList.remove("is-over");
    });
    board.addEventListener("drop", (e) => {
      const day = e.target.closest(".day");
      if (!day) return;
      e.preventDefault();
      const id = dragId || e.dataTransfer.getData("text/plain");
      if (!byId[id]) return;
      const d = Number(day.dataset.day);
      const list = $(".day-list", day);
      const others = state.days[d].filter((x) => x !== id);
      const idx = Math.min(indexAt(list, e.clientY), others.length);
      state.days = state.days.map((x) => x.filter((y) => y !== id));
      state.days[d].splice(idx, 0, id);
      state.active = d;
      render();
    });

    $("#day-plus").addEventListener("click", () => {
      if (state.days.length >= MAX_DAYS) return;
      state.days.push([]);
      state.active = state.days.length - 1;
      render();
    });
    $("#day-minus").addEventListener("click", () => {
      if (state.days.length <= 1) return;
      const last = state.days.pop();
      state.days[state.days.length - 1].push(...last);
      state.active = Math.min(state.active, state.days.length - 1);
      render();
      if (last.length) toast("نُقلت أماكن اليوم المحذوف إلى اليوم الأخير");
    });

    nameInput.addEventListener("input", () => {
      state.name = nameInput.value;
      persist();
    });

    $$("[data-preset]").forEach((btn) =>
      btn.addEventListener("click", () => {
        state.days = PRESETS[btn.dataset.preset].map((d) => d.slice());
        state.active = 0;
        render();
        toast(`حُمّلت خطة ${btn.textContent}`);
      })
    );

    $("#new-trip").addEventListener("click", () => {
      state = blank();
      render();
      nameInput.focus();
      toast("بدأت رحلة جديدة");
    });

    $("#save-trip").addEventListener("click", async () => {
      const name = state.name.trim();
      if (!name) {
        toast("اكتب اسمًا للرحلة أولًا");
        nameInput.focus();
        return;
      }
      if (!state.days.flat().length) {
        toast("أضف مكانًا واحدًا على الأقل قبل الحفظ");
        return;
      }
      state.id = await DB.put("trips", { id: state.id, name, days: state.days, updated: Date.now() });
      persist();
      renderSaved();
      toast("حُفظت الرحلة");
    });

    const pendingDelete = new Set();
    savedList.addEventListener("click", async (e) => {
      const open = e.target.closest("[data-open]");
      const del = e.target.closest("[data-delete]");
      if (open) {
        const trips = await DB.all("trips");
        const t = trips.find((x) => String(x.id) === open.dataset.open);
        if (!t) return;
        state = { id: t.id, name: t.name, days: t.days.map((d) => d.filter((id) => byId[id])), active: 0 };
        render();
        board.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
        toast(`فُتحت «${t.name}»`);
      }
      if (del) {
        const key = del.dataset.delete;
        if (!pendingDelete.has(key)) {
          pendingDelete.add(key);
          del.textContent = "اضغط للتأكيد";
          setTimeout(() => {
            pendingDelete.delete(key);
            if (del.isConnected) del.textContent = "احذف";
          }, 3000);
          return;
        }
        pendingDelete.delete(key);
        const id = isNaN(Number(key)) ? key : Number(key);
        await DB.remove("trips", id);
        if (state.id === id) state.id = null;
        persist();
        renderSaved();
        toast("حُذفت الرحلة");
      }
    });

    $("#export-trip").addEventListener("click", async () => {
      if (!state.days.flat().length) {
        toast("خطتك فارغة، أضف أماكن أولًا");
        return;
      }
      if (document.fonts && document.fonts.ready) await document.fonts.ready;
      const w = 1080;
      const lineH = 64;
      const rows = state.days.reduce((s, d) => s + Math.max(d.length, 1) + 1.6, 0);
      const h = Math.max(1080, Math.round(420 + rows * lineH + 160));
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      const ctx = c.getContext("2d");
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#2a140c");
      g.addColorStop(0.45, "#160f0c");
      g.addColorStop(1, "#0c0907");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(217,165,91,0.12)";
      ctx.beginPath();
      ctx.arc(w * 0.2, 150, 110, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#d9a55b";
      for (let x = 0; x < w; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, 300);
        [[0, 288], [6, 288], [6, 276], [12, 276], [12, 264], [18, 264], [18, 252], [30, 252], [30, 264], [36, 264], [36, 276], [42, 276], [42, 288], [48, 288], [48, 300]].forEach(([dx, y]) => ctx.lineTo(x + dx, y));
        ctx.closePath();
        ctx.fill();
      }
      ctx.direction = "rtl";
      ctx.textAlign = "right";
      ctx.fillStyle = "#f0c987";
      ctx.font = '500 34px "IBM Plex Sans Arabic", Tahoma, sans-serif';
      ctx.fillText("دليل العُلا", w - 80, 110);
      ctx.fillStyle = "#f3e7d6";
      ctx.font = '700 72px "Reem Kufi", Tahoma, sans-serif';
      ctx.fillText(state.name.trim() || "رحلتي إلى العُلا", w - 80, 200);
      let y = 390;
      state.days.forEach((d, i) => {
        ctx.fillStyle = "#f0c987";
        ctx.font = '600 44px "Reem Kufi", Tahoma, sans-serif';
        ctx.fillText(`اليوم ${i + 1}`, w - 80, y);
        ctx.textAlign = "left";
        ctx.fillStyle = "#b5a08a";
        ctx.font = '400 28px "IBM Plex Sans Arabic", Tahoma, sans-serif';
        ctx.fillText(`${num(dayHours(d), 1)} ساعات، ${num(dayCost(d))} ريال`, 80, y);
        ctx.textAlign = "right";
        y += lineH;
        if (!d.length) {
          ctx.fillStyle = "#b5a08a";
          ctx.font = '400 32px "IBM Plex Sans Arabic", Tahoma, sans-serif';
          ctx.fillText("يوم حر", w - 110, y);
          y += lineH;
        }
        d.forEach((id, j) => {
          ctx.fillStyle = "#d9a55b";
          ctx.beginPath();
          ctx.arc(w - 96, y - 12, 7, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#f3e7d6";
          ctx.font = '500 36px "IBM Plex Sans Arabic", Tahoma, sans-serif';
          ctx.fillText(`${byId[id].name}`, w - 124, y);
          y += lineH;
        });
        y += lineH * 0.6;
      });
      ctx.strokeStyle = "rgba(243,231,214,0.18)";
      ctx.beginPath();
      ctx.moveTo(80, h - 120);
      ctx.lineTo(w - 80, h - 120);
      ctx.stroke();
      ctx.fillStyle = "#b5a08a";
      ctx.font = '400 28px "IBM Plex Sans Arabic", Tahoma, sans-serif';
      const all = state.days.flat();
      ctx.fillText(`${all.length} أماكن، ${num(state.days.reduce((s, d) => s + dayHours(d), 0), 1)} ساعات، نحو ${num(state.days.reduce((s, d) => s + dayCost(d), 0))} ريال`, w - 80, h - 70);
      c.toBlob((blob) => {
        if (!blob) {
          toast("تعذّر إنشاء الصورة");
          return;
        }
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${(state.name.trim() || "alula-trip").replace(/[\\/:*?"<>|]/g, "")}.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 4000);
        toast("نُزّلت الخطة صورة");
      }, "image/png");
    });

    const pending = store.get("alula-pending", []).filter((id) => byId[id]);
    if (pending.length) {
      pending.forEach((id) => place(id, state.active));
      store.remove("alula-pending");
      toast(pending.length === 1 ? `أُضيف «${byId[pending[0]].name}» إلى اليوم ${state.active + 1}` : `أُضيفت ${pending.length} أماكن إلى رحلتك`);
    }

    render();
    renderSaved();
  }

  function initTips() {
    const table = $(".climate");
    if (table) {
      const month = Number(new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Riyadh", month: "numeric" }).format(new Date()));
      const row = $(`tr[data-month="${month}"]`, table);
      if (row) row.classList.add("is-current");
    }

    $$(".acc-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        $(`#${btn.getAttribute("aria-controls")}`).hidden = open;
      })
    );

    const checklist = $("#checklist");
    if (checklist) {
      const boxes = $$("input[type=checkbox]", checklist);
      const bar = $("#pack-bar");
      const text = $("#pack-text");
      const progress = $("#pack-progress");
      const saved = new Set(store.get("alula-pack", []));
      boxes.forEach((b) => (b.checked = saved.has(b.value)));
      const update = () => {
        const done = boxes.filter((b) => b.checked);
        store.set("alula-pack", done.map((b) => b.value));
        bar.style.width = `${(done.length / boxes.length) * 100}%`;
        progress.setAttribute("aria-valuenow", done.length);
        text.textContent = done.length === boxes.length ? "حقيبتك جاهزة، رحلة موفقة" : `جهّزت ${done.length} من ${boxes.length}`;
      };
      checklist.addEventListener("change", update);
      $("#pack-reset").addEventListener("click", () => {
        boxes.forEach((b) => (b.checked = false));
        update();
      });
      update();
    }

    const factText = $("#fact-text");
    const next = $("#next-fact");
    if (factText && next) {
      const facts = [
        "قصر الفريد في الحِجر لم يكتمل نحته، ولهذا يكشف للباحثين مراحل نحت الواجهات النبطية.",
        "مبنى مرايا تكسوه 9,740 مترًا مربعًا من المرايا، وهو أكبر مبنى مكسو بالمرايا في العالم.",
        "كان للبلدة القديمة 14 بوابة، وتطل عليها قلعة يبلغ ارتفاعها 45 مترًا.",
        "أغلب نقوش جبل عكمة مكتوبة بالخط الدادني، وهو مسجل في سجل ذاكرة العالم لليونسكو.",
        "مطل حرة عويرض يقع على ارتفاع 1,219 مترًا فوق سطح البحر.",
        "آخر سكان البلدة القديمة غادروها في الثمانينات إلى العُلا الحديثة القريبة منها.",
        "جبل الفيل تشكّل بفعل الرياح والأمطار والرمال على مدى ملايين السنين."
      ];
      let i = 0;
      next.addEventListener("click", () => {
        i = (i + 1) % facts.length;
        factText.classList.add("is-fading");
        setTimeout(() => {
          factText.textContent = facts[i];
          factText.classList.remove("is-fading");
        }, reduceMotion ? 0 : 280);
      });
    }
  }

  function initContact() {
    const form = $("#contact-form");
    if (form) {
      const fields = {
        name: $("#c-name"),
        email: $("#c-email"),
        message: $("#c-message")
      };
      const count = $("#c-count");
      const rules = {
        name: (v) => (v.trim().length < 2 ? "اكتب اسمك (حرفان على الأقل)" : ""),
        email: (v) => (!v.trim() ? "اكتب بريدك الإلكتروني" : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "صيغة البريد غير صحيحة، مثال: name@example.com"),
        message: (v) => (v.trim().length < 10 ? "اكتب رسالتك (10 أحرف على الأقل)" : "")
      };
      const check = (key) => {
        const input = fields[key];
        const msg = rules[key](input.value);
        $(`#${input.id}-error`).textContent = msg;
        input.closest(".field").classList.toggle("is-invalid", Boolean(msg));
        input.setAttribute("aria-invalid", String(Boolean(msg)));
        return !msg;
      };
      Object.keys(fields).forEach((key) => {
        fields[key].addEventListener("blur", () => fields[key].value && check(key));
        fields[key].addEventListener("input", () => {
          if (fields[key].closest(".field").classList.contains("is-invalid")) check(key);
        });
      });
      fields.message.addEventListener("input", () => {
        count.textContent = `${fields.message.value.length} / 500`;
      });

      const sentBox = $("#sent-box");
      const sentList = $("#sent-list");
      const renderSent = async () => {
        const all = (await DB.all("messages")).sort((a, b) => b.date - a.date);
        sentBox.hidden = !all.length;
        sentList.innerHTML = all
          .map(
            (m) => `<li>
              <span class="row"><span>${esc(m.topic)}، ${dateText(m.date)}</span><button type="button" class="btn btn-ghost btn-sm" data-del="${m.id}">احذف</button></span>
              <p>${esc(m.message)}</p>
            </li>`
          )
          .join("");
      };
      sentList.addEventListener("click", async (e) => {
        const btn = e.target.closest("[data-del]");
        if (!btn) return;
        const key = btn.dataset.del;
        await DB.remove("messages", isNaN(Number(key)) ? key : Number(key));
        renderSent();
      });

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const results = Object.keys(fields).map(check);
        if (results.includes(false)) {
          const firstBad = Object.keys(fields).find((k, i) => !results[i]);
          fields[firstBad].focus();
          toast("راجع الحقول المظللة قبل الإرسال");
          return;
        }
        const sender = fields.name.value.trim();
        await DB.put("messages", {
          name: sender,
          email: fields.email.value.trim(),
          topic: $("#c-topic").value,
          message: fields.message.value.trim(),
          date: Date.now()
        });
        form.reset();
        count.textContent = "0 / 500";
        toast(`شكرًا ${sender}، حُفظت رسالتك`);
        renderSent();
      });
      renderSent();
    }

    const city = $("#city");
    const locate = $("#locate");
    if (city) {
      const km = $("#d-km");
      const drive = $("#d-drive");
      const note = $("#d-note");
      const show = (from, label) => {
        const d = distanceKm(from, ALULA);
        km.textContent = num(Math.round(d));
        drive.textContent = num((d * 1.3) / 95, 1);
        note.textContent = `المسافة من ${label} إلى العُلا. تقدير القيادة مبني على متوسط سرعة 95 كم/س، والطريق الفعلي أطول من الخط المستقيم.`;
      };
      city.addEventListener("change", () => {
        if (!city.value) return;
        const [lat, lon] = city.value.split(",").map(Number);
        show({ lat, lon }, city.options[city.selectedIndex].text);
      });
      locate.addEventListener("click", () => {
        if (!("geolocation" in navigator)) {
          toast("متصفحك لا يدعم تحديد الموقع، اختر مدينتك من القائمة");
          return;
        }
        locate.disabled = true;
        locate.textContent = "جارٍ تحديد موقعك";
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            show({ lat: pos.coords.latitude, lon: pos.coords.longitude }, "موقعك الحالي");
            city.value = "";
            locate.disabled = false;
            locate.textContent = "استخدم موقعي";
          },
          () => {
            toast("لم نتمكن من تحديد موقعك، اختر مدينتك من القائمة");
            locate.disabled = false;
            locate.textContent = "استخدم موقعي";
          },
          { timeout: 10000, maximumAge: 600000 }
        );
      });
    }
  }

  initHeader();
  initHero();
  initCounters();
  initMedia();
  initPlaces();
  initPlanner();
  initTips();
  initContact();
})();
