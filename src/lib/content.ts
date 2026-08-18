/**
 * All landing copy — EN (default), UZ, RU.
 *
 * Copy rules carried over from the blueprint docs, enforced here:
 *  - Numbers over adjectives. No "revolutionary" / "next-gen" / "cutting-edge".
 *  - No fabricated proof. The only number stated is the one the brand already
 *    publishes ($7M+ generated for clients). Case-study slots stay empty until
 *    real ones exist — empty is acceptable, invented is not.
 *  - The buyer's own words for the gaps, not our jargon.
 */

export type Lang = "en" | "uz" | "ru";

export const LANGS: Lang[] = ["en", "uz", "ru"];
export const LANG_LABEL: Record<Lang, string> = { en: "EN", uz: "UZ", ru: "RU" };
export const DEFAULT_LANG: Lang = "en";

export const INSTAGRAM_URL = "https://www.instagram.com/1is4me/";

export const content = {
  /* ------------------------------------------------------------------ EN */
  en: {
    nav: {
      offers: "What we do",
      gaps: "The problem",
      doors: "Three doors",
      outcomes: "Results",
      process: "Process",
      team: "Team",
      cta: "Get an audit",
    },
    hero: {
      eyebrow: "AI Growth Partner",
      title: ["Learn It.", "Plan It.", "Build It."],
      lead:
        "We help SMB owners get back their time, scale their business, and grow their profit with AI + automation.",
      sub: "One AI-run team instead of the five hires you'd otherwise need.",
      primary: "Get your free AI audit",
      secondary: "See how we work",
      note: "Everything runs online. No city limits, no office visits.",
      stats: [
        { value: "$7M+", label: "generated for our clients" },
        { value: "3", label: "doors — one per gap" },
        { value: "Week 1", label: "first working deliverable" },
      ],
    },
    offers: {
      tag: "Two philosophies",
      title: "We grow your sales from both sides",
      lead:
        "In any business money moves two ways: spend less, or earn more. We work on both — inside the business and in how you personally run your day.",
      items: [
        {
          n: "01",
          title: "The cost-reduction philosophy",
          lead: "We find the part of the work you're paying people for that software can do instead.",
          points: [
            "Map the repetitive manual work eating the week",
            "Move it onto AI and automation",
            "Take on more volume without new hires",
            "Get the owner out of the day-to-day weeds",
          ],
        },
        {
          n: "02",
          title: "The revenue & sales philosophy",
          lead: "We build the offer and the system that turn existing attention into orders.",
          points: [
            "Find where the sales process leaks",
            "A response system where leads stop going cold",
            "Offer and funnel built for buyers, not random traffic",
            "Measure conversion at every step",
          ],
        },
      ],
      footer: "Both apply to the business — and to your own working system.",
    },
    gaps: {
      tag: "The problem",
      title: "Where exactly are you stuck?",
      lead:
        "Owners don't stall from lack of effort. They stall at one of three points, and each one needs a different kind of help.",
      items: [
        {
          n: "01",
          label: "Knowledge gap",
          quote: "“I don't know what AI can do.”",
          body: "You're paying people for work software could handle — because nobody ever showed you what's possible.",
        },
        {
          n: "02",
          label: "Direction gap",
          quote: "“I don't know what to fix first.”",
          body: "Money burns on random tactics because there's no diagnosis and no sequenced plan.",
        },
        {
          n: "03",
          label: "Execution gap",
          quote: "“I know what to do — but can't build it.”",
          body: "The plan exists. Nobody on the team can build or run the systems, so nothing ships.",
        },
      ],
    },
    doors: {
      tag: "Three doors",
      title: "One door per gap",
      lead: "Enter anywhere. Each stage lowers the risk of the next.",
      items: [
        {
          n: "01",
          name: "Education",
          for: "For the knowledge gap",
          body: "We train owners and teams to understand AI and operate it inside the business.",
          points: ["Hands-on team training", "Built on your actual processes", "Internal playbooks and SOPs"],
          cta: "Talk about training",
          price: "PRICE SIGNAL — TO BE FILLED",
        },
        {
          n: "02",
          name: "Consulting",
          for: "For the direction gap",
          body: "Diagnosis and strategy: find what's broken, decide what to fix first, build the plan.",
          points: ["Full business audit", "A plan in the right sequence", "Expected result for every step"],
          cta: "Start with the audit",
          price: "PRICE SIGNAL — TO BE FILLED",
        },
        {
          n: "03",
          name: "Implementation",
          for: "For the execution gap",
          body: "We build it and run it: websites, video, marketing, automation — done for you.",
          points: ["Website and sales system", "Content and video production", "Automation and AI agents", "Weekly operation and oversight"],
          cta: "Discuss a project",
          price: "PRICE SIGNAL — TO BE FILLED",
        },
      ],
    },
    outcomes: {
      tag: "Results",
      title: "Whichever door you enter, you're buying four results",
      lead: "Every promise on this site reduces to one of these four. If it doesn't, it doesn't belong here.",
      items: [
        { n: "01", title: "More clients", body: "Qualified buyers in the pipeline — not random traffic." },
        { n: "02", title: "Higher profit", body: "Offers and funnels that convert attention into orders." },
        { n: "03", title: "Lower costs", body: "AI doing the work you'd otherwise hire for." },
        { n: "04", title: "More efficiency", body: "The owner out of the weeds — systems handle the repetition." },
      ],
    },
    process: {
      tag: "Process",
      title: "Simple. Smart. Effective.",
      lead: "Remote. Fast. No wasted calls.",
      items: [
        { n: "01", title: "Discovery call", body: "15–30 minutes. Goals, current state, and whether it's a fit. No pitch deck." },
        { n: "02", title: "The right door", body: "We tell you honestly which of the three you actually need first." },
        { n: "03", title: "First deliverable", body: "Something tangible in week one — a working piece, not a slide." },
        { n: "04", title: "Weekly check-in", body: "Short call or async update. Momentum and visibility, every week." },
      ],
    },
    team: {
      tag: "Team",
      title: "The people behind the brand",
      lead: "Partnership happens with people. Here's who does what.",
      note: "PLACEHOLDER — replace with real names, roles, experience and photos.",
      prev: "Previous",
      next: "Next",
    },
    proof: {
      tag: "Proof",
      title: "The numbers go here",
      stat: "$7M+",
      statLabel: "generated for our clients",
      body:
        "One real number, and the case-study slots stay empty until real ones exist. House rule from the blueprint: no invented case, no sample metric, no placeholder testimonial sits on this page — not even temporarily.",
      badge: "CASE STUDIES — AWAITING REAL DATA",
    },
    cta: {
      tag: "Next step",
      title: "Start with the audit",
      lead:
        "20 questions. They let us understand your business up front — so on audit day we skip the context and go straight to the result.",
      primary: "Fill in the questionnaire",
      secondary: "Message us on Instagram",
    },
    footer: {
      tagline: "Learn It. Plan It. Build It.",
      blurb: "AI systems for growing businesses. Save time. Automate operations. Scale smarter.",
      rights: "All rights reserved.",
      nav: "Pages",
      contact: "Contact",
      audit: "Audit form",
    },
  },

  /* ------------------------------------------------------------------ UZ */
  uz: {
    nav: {
      offers: "Nima qilamiz",
      gaps: "Muammo",
      doors: "Uchta eshik",
      outcomes: "Natija",
      process: "Jarayon",
      team: "Jamoa",
      cta: "Audit olish",
    },
    hero: {
      eyebrow: "AI Growth Partner",
      title: ["Learn It.", "Plan It.", "Build It."],
      lead:
        "Biz kichik va o'rta biznes egalariga vaqtini qaytarib olish, biznesini kengaytirish va foydasini oshirishda yordam beramiz — AI va avtomatlashtirish bilan.",
      sub: "Yollashingiz kerak bo'lgan besh xodim o'rniga — bitta AI jamoa.",
      primary: "Bepul AI audit olish",
      secondary: "Qanday ishlaymiz",
      note: "Hammasi onlayn. Shahar chegarasi yo'q, ofisga borish shart emas.",
      stats: [
        { value: "$7M+", label: "mijozlarimiz uchun ishlab berildi" },
        { value: "3", label: "eshik — har bo'shliqqa bittadan" },
        { value: "1-hafta", label: "birinchi ishlaydigan natija" },
      ],
    },
    offers: {
      tag: "Ikki falsafa",
      title: "Sotuvingizni ikki tomondan oshiramiz",
      lead:
        "Har qanday biznesda pul ikki yo'l bilan ko'payadi: kamroq chiqim yoki ko'proq daromad. Biz ikkalasi ustida ham ishlaymiz — biznes ichida ham, sizning shaxsiy ish tartibingizda ham.",
      items: [
        {
          n: "01",
          title: "Chiqimlarni pasaytirish falsafasi",
          lead: "Siz odamlarga pul to'layotgan ishning qaysi qismini dasturiy ta'minot bajara olishini topamiz.",
          points: [
            "Haftani yeb qo'yayotgan takrorlanuvchi qo'l mehnatini aniqlaymiz",
            "Ularni AI va avtomatlashtirishga o'tkazamiz",
            "Yangi odam yollamasdan hajmni ko'tarish",
            "Egasi kundalik mayda ishlardan chiqadi",
          ],
        },
        {
          n: "02",
          title: "Daromad va sotuvni oshirish falsafasi",
          lead: "Mavjud e'tiborni buyurtmaga aylantiradigan taklif va tizim quramiz.",
          points: [
            "Sotuv jarayonidagi yo'qotish nuqtalarini topamiz",
            "Lidlar sovib qolmaydigan javob tizimi",
            "Taklif va funnel — tasodifiy trafik emas, sotib oladigan xaridor",
            "Har bosqichdagi konversiyani o'lchaymiz",
          ],
        },
      ],
      footer: "Ikkalasi ham biznesga ham, sizning shaxsiy ish tizimingizga ham qo'llaniladi.",
    },
    gaps: {
      tag: "Muammo",
      title: "Siz aynan qaysi nuqtada qotib qolgansiz?",
      lead:
        "Biznes egalari harakat qilmagani uchun emas, uch nuqtadan birida tiqilib qolgani uchun to'xtaydi. Har biri boshqacha yordam talab qiladi.",
      items: [
        {
          n: "01",
          label: "Bilim bo'shlig'i",
          quote: "«AI nima qila olishini bilmayman»",
          body: "Dasturiy ta'minot bajara oladigan ish uchun odamlarga pul to'lanyapti — chunki hech kim nima mumkinligini ko'rsatmagan.",
        },
        {
          n: "02",
          label: "Yo'nalish bo'shlig'i",
          quote: "«Birinchi nimani tuzatishni bilmayman»",
          body: "Pul tasodifiy taktikalarga sarflanadi, chunki diagnostika ham, ketma-ket qo'yilgan reja ham yo'q.",
        },
        {
          n: "03",
          label: "Ijro bo'shlig'i",
          quote: "«Nima qilishni bilaman — qura olmayman»",
          body: "Reja bor. Jamoada uni quradigan va yurgizadigan odam yo'q, shuning uchun hech narsa ishga tushmaydi.",
        },
      ],
    },
    doors: {
      tag: "Uchta eshik",
      title: "Har bo'shliqqa bitta eshik",
      lead: "Istalgan joydan kiring. Har bosqich keyingisining xavfini kamaytiradi.",
      items: [
        {
          n: "01",
          name: "Ta'lim",
          for: "Bilim bo'shlig'i uchun",
          body: "Egasini va jamoani AI'ni tushunish va biznes ichida ishlatishga o'rgatamiz.",
          points: ["Jamoa uchun amaliy trening", "Sizning real jarayonlaringiz asosida", "Ichki qo'llanma va reglamentlar"],
          cta: "Ta'lim haqida gaplashish",
          price: "NARX SIGNALI — TO'LDIRILISHI KERAK",
        },
        {
          n: "02",
          name: "Konsalting",
          for: "Yo'nalish bo'shlig'i uchun",
          body: "Diagnostika va strategiya: nima buzilganini topamiz, nimani birinchi tuzatishni hal qilamiz, reja tuzamiz.",
          points: ["To'liq biznes audit", "To'g'ri ketma-ketlikdagi reja", "Har qadam bo'yicha kutilayotgan natija"],
          cta: "Auditdan boshlash",
          price: "NARX SIGNALI — TO'LDIRILISHI KERAK",
        },
        {
          n: "03",
          name: "Implementatsiya",
          for: "Ijro bo'shlig'i uchun",
          body: "Quramiz va yurgizamiz: sayt, video, marketing, avtomatlashtirish — siz uchun bajariladi.",
          points: ["Sayt va sotuv tizimi", "Kontent va video ishlab chiqarish", "Avtomatlashtirish va AI agentlar", "Haftalik yurgizish va nazorat"],
          cta: "Loyihani muhokama qilish",
          price: "NARX SIGNALI — TO'LDIRILISHI KERAK",
        },
      ],
    },
    outcomes: {
      tag: "Natija",
      title: "Qaysi eshikdan kirmang, to'rtta natijani sotib olasiz",
      lead: "Saytdagi har qanday va'da shu to'rttadan biriga bog'lanadi. Bog'lanmasa — bu yerda turmaydi.",
      items: [
        { n: "01", title: "Ko'proq mijoz", body: "Tasodifiy trafik emas — sotib oladigan xaridor." },
        { n: "02", title: "Yuqori foyda", body: "E'tiborni buyurtmaga aylantiradigan taklif va funnel." },
        { n: "03", title: "Past xarajat", body: "Aks holda yollashingiz kerak bo'lgan ishni AI bajaradi." },
        { n: "04", title: "Ko'proq samaradorlik", body: "Egasi mayda ishlardan chiqadi — takrorni tizim bajaradi." },
      ],
    },
    process: {
      tag: "Jarayon",
      title: "Oddiy. Aqlli. Samarali.",
      lead: "Remote. Tez. Ortiqcha qo'ng'iroqsiz.",
      items: [
        { n: "01", title: "Tanishuv qo'ng'irog'i", body: "15–30 daqiqa. Maqsad, hozirgi holat va mos kelish-kelmasligi. Prezentatsiya yo'q." },
        { n: "02", title: "To'g'ri eshik", body: "Uchtasidan qaysi biri sizga aynan hozir kerakligini halol aytamiz." },
        { n: "03", title: "Birinchi natija", body: "Birinchi haftada qo'lga ilinadigan narsa — slayd emas, ishlaydigan bo'lak." },
        { n: "04", title: "Haftalik check-in", body: "Qisqa qo'ng'iroq yoki async hisobot. Har hafta harakat va ko'rinish." },
      ],
    },
    team: {
      tag: "Jamoa",
      title: "Brend orqasidagi odamlar",
      lead: "Hamkorlik odam bilan bo'ladi. Quyida — kim nima qiladi.",
      note: "JOY BAND — haqiqiy ism, lavozim, tajriba va rasm bilan almashtirilishi kerak.",
      prev: "Oldingi",
      next: "Keyingi",
    },
    proof: {
      tag: "Dalil",
      title: "Raqamlar shu yerda turadi",
      stat: "$7M+",
      statLabel: "mijozlarimiz uchun ishlab berildi",
      body:
        "Bitta haqiqiy raqam, va keys uchun joylar haqiqiysi paydo bo'lguncha bo'sh qoladi. Blueprint qoidasi: o'ylab topilgan keys, soxta raqam yoki namunaviy sharh bu sahifada turmaydi — vaqtinchalik ham.",
      badge: "KEYSLAR — REAL MA'LUMOT KUTILMOQDA",
    },
    cta: {
      tag: "Keyingi qadam",
      title: "Auditdan boshlang",
      lead:
        "20 ta savol. Ular bizga biznesingizni oldindan tushunish imkonini beradi — audit kuni kontekst so'ramasdan, to'g'ridan-to'g'ri natijaga o'tamiz.",
      primary: "So'rovnomani to'ldirish",
      secondary: "Instagram'da yozish",
    },
    footer: {
      tagline: "Learn It. Plan It. Build It.",
      blurb: "O'sayotgan bizneslar uchun AI tizimlari. Vaqtni tejang. Operatsiyalarni avtomatlashtiring.",
      rights: "Barcha huquqlar himoyalangan.",
      nav: "Sahifalar",
      contact: "Aloqa",
      audit: "Audit formasi",
    },
  },

  /* ------------------------------------------------------------------ RU */
  ru: {
    nav: {
      offers: "Что мы делаем",
      gaps: "Проблема",
      doors: "Три двери",
      outcomes: "Результат",
      process: "Процесс",
      team: "Команда",
      cta: "Получить аудит",
    },
    hero: {
      eyebrow: "AI Growth Partner",
      title: ["Learn It.", "Plan It.", "Build It."],
      lead:
        "Мы помогаем владельцам малого и среднего бизнеса вернуть своё время, масштабировать бизнес и увеличить прибыль с помощью AI и автоматизации.",
      sub: "Одна AI-команда вместо пяти сотрудников, которых пришлось бы нанять.",
      primary: "Получить бесплатный AI-аудит",
      secondary: "Как мы работаем",
      note: "Всё онлайн. Без привязки к городу и без визитов в офис.",
      stats: [
        { value: "$7M+", label: "заработано для наших клиентов" },
        { value: "3", label: "двери — по одной на разрыв" },
        { value: "1-я неделя", label: "первый рабочий результат" },
      ],
    },
    offers: {
      tag: "Две философии",
      title: "Увеличиваем продажи с двух сторон",
      lead:
        "В любом бизнесе деньги растут двумя путями: меньше расходов или больше дохода. Мы работаем над обоими — и внутри бизнеса, и в том, как вы лично ведёте свой день.",
      items: [
        {
          n: "01",
          title: "Философия снижения расходов",
          lead: "Находим ту часть работы, за которую вы платите людям, но её может делать софт.",
          points: [
            "Выявляем повторяющуюся ручную работу, съедающую неделю",
            "Переводим её на AI и автоматизацию",
            "Рост объёмов без найма новых людей",
            "Владелец выходит из ежедневной рутины",
          ],
        },
        {
          n: "02",
          title: "Философия роста дохода и продаж",
          lead: "Строим предложение и систему, которые превращают внимание в заказы.",
          points: [
            "Находим точки потерь в процессе продаж",
            "Система ответа, при которой лиды не остывают",
            "Оффер и воронка под покупателя, а не под случайный трафик",
            "Измеряем конверсию на каждом этапе",
          ],
        },
      ],
      footer: "Обе применимы и к бизнесу, и к вашей личной рабочей системе.",
    },
    gaps: {
      tag: "Проблема",
      title: "В какой именно точке вы застряли?",
      lead:
        "Владельцы останавливаются не из-за нехватки усилий, а потому что застревают в одной из трёх точек. Каждая требует своей помощи.",
      items: [
        {
          n: "01",
          label: "Разрыв в знаниях",
          quote: "«Не знаю, что вообще умеет AI»",
          body: "Людям платят за работу, которую мог бы делать софт — просто никто не показал, что это возможно.",
        },
        {
          n: "02",
          label: "Разрыв в направлении",
          quote: "«Не знаю, что чинить первым»",
          body: "Деньги уходят на случайные тактики, потому что нет ни диагностики, ни последовательного плана.",
        },
        {
          n: "03",
          label: "Разрыв в исполнении",
          quote: "«Знаю, что делать — но не могу построить»",
          body: "План есть. В команде некому построить и вести системы, поэтому ничего не запускается.",
        },
      ],
    },
    doors: {
      tag: "Три двери",
      title: "На каждый разрыв — своя дверь",
      lead: "Входите с любой. Каждый этап снижает риск следующего.",
      items: [
        {
          n: "01",
          name: "Обучение",
          for: "Для разрыва в знаниях",
          body: "Учим владельца и команду понимать AI и применять его внутри бизнеса.",
          points: ["Практический тренинг для команды", "На основе ваших реальных процессов", "Внутренние регламенты и инструкции"],
          cta: "Обсудить обучение",
          price: "ЦЕНОВОЙ СИГНАЛ — НУЖНО ЗАПОЛНИТЬ",
        },
        {
          n: "02",
          name: "Консалтинг",
          for: "Для разрыва в направлении",
          body: "Диагностика и стратегия: находим, что сломано, решаем, что чинить первым, строим план.",
          points: ["Полный аудит бизнеса", "План в правильной последовательности", "Ожидаемый результат по каждому шагу"],
          cta: "Начать с аудита",
          price: "ЦЕНОВОЙ СИГНАЛ — НУЖНО ЗАПОЛНИТЬ",
        },
        {
          n: "03",
          name: "Внедрение",
          for: "Для разрыва в исполнении",
          body: "Строим и ведём: сайт, видео, маркетинг, автоматизация — под ключ.",
          points: ["Сайт и система продаж", "Контент и видеопроизводство", "Автоматизация и AI-агенты", "Еженедельное ведение и контроль"],
          cta: "Обсудить проект",
          price: "ЦЕНОВОЙ СИГНАЛ — НУЖНО ЗАПОЛНИТЬ",
        },
      ],
    },
    outcomes: {
      tag: "Результат",
      title: "С какой бы двери вы ни вошли, вы покупаете четыре результата",
      lead: "Любое обещание на этом сайте сводится к одному из четырёх. Не сводится — здесь не стоит.",
      items: [
        { n: "01", title: "Больше клиентов", body: "Не случайный трафик — покупатели, которые покупают." },
        { n: "02", title: "Выше прибыль", body: "Оффер и воронка, превращающие внимание в заказы." },
        { n: "03", title: "Ниже расходы", body: "AI делает работу, под которую иначе пришлось бы нанимать." },
        { n: "04", title: "Больше эффективности", body: "Владелец выходит из рутины — повторяемое делает система." },
      ],
    },
    process: {
      tag: "Процесс",
      title: "Просто. Умно. Эффективно.",
      lead: "Remote. Быстро. Без лишних созвонов.",
      items: [
        { n: "01", title: "Знакомство", body: "15–30 минут. Цели, текущее состояние и подходим ли мы друг другу. Без презентаций." },
        { n: "02", title: "Правильная дверь", body: "Честно говорим, какая из трёх нужна вам именно сейчас." },
        { n: "03", title: "Первый результат", body: "На первой неделе — что-то осязаемое. Рабочий кусок, а не слайд." },
        { n: "04", title: "Еженедельный чек-ин", body: "Короткий звонок или async-отчёт. Движение и прозрачность каждую неделю." },
      ],
    },
    team: {
      tag: "Команда",
      title: "Люди за брендом",
      lead: "Партнёрство бывает с людьми. Ниже — кто и что делает.",
      note: "ЗАГЛУШКА — заменить на реальные имена, роли, опыт и фото.",
      prev: "Назад",
      next: "Вперёд",
    },
    proof: {
      tag: "Доказательства",
      title: "Здесь стоят цифры",
      stat: "$7M+",
      statLabel: "заработано для наших клиентов",
      body:
        "Одна реальная цифра, а слоты под кейсы остаются пустыми, пока не появятся настоящие. Правило блюпринта: выдуманный кейс, ложная метрика или образцовый отзыв не стоят на этой странице — даже временно.",
      badge: "КЕЙСЫ — ОЖИДАЮТСЯ РЕАЛЬНЫЕ ДАННЫЕ",
    },
    cta: {
      tag: "Следующий шаг",
      title: "Начните с аудита",
      lead:
        "20 вопросов. Они дают нам понять ваш бизнес заранее — в день аудита мы не тратим время на контекст и сразу переходим к делу.",
      primary: "Заполнить анкету",
      secondary: "Написать в Instagram",
    },
    footer: {
      tagline: "Learn It. Plan It. Build It.",
      blurb: "AI-системы для растущего бизнеса. Экономьте время. Автоматизируйте операции.",
      rights: "Все права защищены.",
      nav: "Страницы",
      contact: "Контакты",
      audit: "Анкета аудита",
    },
  },
} as const;

/** Team roster. Intentionally placeholder — real people replace these. */
export type TeamMember = {
  id: string;
  name: string;
  role: Record<Lang, string>;
  experience: Record<Lang, string>;
  initials: string;
  accent: string;
};

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "[ Name ]",
    role: { en: "Founder", uz: "Asoschi", ru: "Основатель" },
    experience: {
      en: "[ Placeholder — what they've built, how long, which result. ]",
      uz: "[ Joy band — nima qurgan, qancha vaqt, qanday natija. ]",
      ru: "[ Заглушка — что построил, сколько лет, какой результат. ]",
    },
    initials: "01",
    accent: "var(--mint)",
  },
  {
    id: "strategy",
    name: "[ Name ]",
    role: { en: "Strategy & Audit", uz: "Strategiya va audit", ru: "Стратегия и аудит" },
    experience: {
      en: "[ Placeholder — background, sectors, signature engagement. ]",
      uz: "[ Joy band — tajriba, sohalar, asosiy loyiha. ]",
      ru: "[ Заглушка — опыт, отрасли, ключевой проект. ]",
    },
    initials: "02",
    accent: "var(--gold)",
  },
  {
    id: "automation",
    name: "[ Name ]",
    role: { en: "Automation Engineer", uz: "Avtomatlashtirish muhandisi", ru: "Инженер автоматизации" },
    experience: {
      en: "[ Placeholder — stack, systems shipped, uptime owned. ]",
      uz: "[ Joy band — texnologiyalar, ishga tushirilgan tizimlar. ]",
      ru: "[ Заглушка — стек, запущенные системы, зона ответственности. ]",
    },
    initials: "03",
    accent: "var(--sage)",
  },
  {
    id: "content",
    name: "[ Name ]",
    role: { en: "Content & Video", uz: "Kontent va video", ru: "Контент и видео" },
    experience: {
      en: "[ Placeholder — formats, channels, output volume. ]",
      uz: "[ Joy band — formatlar, kanallar, ishlab chiqarish hajmi. ]",
      ru: "[ Заглушка — форматы, каналы, объём производства. ]",
    },
    initials: "04",
    accent: "#b58a9a",
  },
];
