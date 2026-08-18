/**
 * The 20 pre-audit questions.
 *
 * UZ and RU are carried over verbatim from the existing 1is4me audit form so
 * the two stay in sync; EN is added here as the new default language.
 */

import type { Lang } from "./content";

export type QuestionCategory =
  | "identity"
  | "business"
  | "time"
  | "growth"
  | "sales"
  | "ai";

export type QuestionType = "text" | "email" | "textarea" | "radio" | "checkbox";

export type QuestionCopy = { q: string; hint?: string; options?: string[] };

export type Question = {
  n: number;
  cat: QuestionCategory;
  type: QuestionType;
  required: boolean;
  /** Stable column name used in the Google Sheet header. */
  key: string;
} & Record<Lang, QuestionCopy>;

export const CAT_COLORS: Record<QuestionCategory, string> = {
  identity: "var(--c-identity)",
  business: "var(--c-business)",
  time: "var(--c-time)",
  growth: "var(--c-growth)",
  sales: "var(--c-sales)",
  ai: "var(--c-ai)",
};

export const QUESTIONS: Question[] = [
  {
    n: 1, cat: "identity", type: "text", required: true, key: "name",
    en: { q: "Your name" },
    uz: { q: "Ismingiz" },
    ru: { q: "Ваше имя" },
  },
  {
    n: 2, cat: "identity", type: "email", required: true, key: "email",
    en: { q: "Your email address" },
    uz: { q: "Email manzilingiz" },
    ru: { q: "Ваш email" },
  },
  {
    n: 3, cat: "business", type: "text", required: true, key: "businessName",
    en: { q: "Business name" },
    uz: { q: "Biznes nomi" },
    ru: { q: "Название бизнеса" },
  },
  {
    n: 4, cat: "business", type: "text", required: true, key: "industry",
    en: { q: "Industry", hint: "For example: real estate, marketing agency, e-commerce, accounting, construction" },
    uz: { q: "Soha", hint: "Masalan: Ko'chmas mulk, Marketing agentligi, E-commerce, Buxgalteriya, Qurilish" },
    ru: { q: "Сфера деятельности", hint: "Например: недвижимость, маркетинговое агентство, e-commerce, бухгалтерия, строительство" },
  },
  {
    n: 5, cat: "business", type: "radio", required: true, key: "teamSize",
    en: { q: "Roughly how many people work in your business?", options: ["Just me", "2-5", "6-15", "16-50", "50+"] },
    uz: { q: "Biznesingizda taxminan nechta odam ishlaydi?", options: ["Faqat men", "2-5", "6-15", "16-50", "50+"] },
    ru: { q: "Сколько человек работает в вашем бизнесе?", options: ["Только я", "2-5", "6-15", "16-50", "50+"] },
  },
  {
    n: 6, cat: "business", type: "textarea", required: true, key: "whatYouSell",
    en: { q: "In one sentence, what does your business sell?", hint: 'For example: "We help small businesses with accounting" or "We sell made-to-order furniture online"' },
    uz: { q: "Bir gapda, biznesingiz nima sotadi?", hint: 'Masalan: "Biz kichik bizneslarga buxgalteriya bilan yordam beramiz" yoki "Biz onlayn buyurtma asosida mebel sotamiz"' },
    ru: { q: "Одним предложением: что продаёт ваш бизнес?", hint: "Например: «Мы помогаем малому бизнесу с бухгалтерией» или «Мы продаём мебель на заказ онлайн»" },
  },
  {
    n: 7, cat: "business", type: "textarea", required: true, key: "typicalClient",
    en: { q: "Who is your typical client?", hint: 'For example: "small business owners with 5-20 employees" or "homeowners aged 35-55 doing renovations"' },
    uz: { q: "Sizning odatiy mijozingiz kim?", hint: "Masalan: \"5-20 xodimli kichik biznes egalari\" yoki \"35-55 yosh oralig'idagi, ta'mirlash qilayotgan uy egalari\"" },
    ru: { q: "Кто ваш типичный клиент?", hint: "Например: «владельцы малого бизнеса с 5-20 сотрудниками» или «владельцы домов 35-55 лет, делающие ремонт»" },
  },
  {
    n: 8, cat: "growth", type: "checkbox", required: true, key: "howClientsFindYou",
    en: {
      q: "How do most clients find you?", hint: "Select all that apply",
      options: ["Referrals / Word of mouth", "Google search / SEO", "Social media (organic)", "Paid advertising", "Cold outreach (email, calls, DM)", "Events / Networking", "Other"],
    },
    uz: {
      q: "Mijozlarning ko'pchiligi sizni qanday topadi?", hint: "Tegishli barchasini belgilang",
      options: ["Tavsiyalar / Og'izdan og'izga", "Google qidiruv / SEO", "Ijtimoiy tarmoqlar (organik)", "Pullik reklama", "Sovuq murojaat (email, qo'ng'iroq, DM)", "Tadbirlar / Networking", "Boshqa"],
    },
    ru: {
      q: "Как большинство клиентов находят вас?", hint: "Отметьте все подходящие варианты",
      options: ["Рекомендации / Сарафанное радио", "Google поиск / SEO", "Соцсети (органика)", "Платная реклама", "Холодные обращения (email, звонки, DM)", "Мероприятия / Нетворкинг", "Другое"],
    },
  },
  {
    n: 9, cat: "time", type: "textarea", required: true, key: "topTimeSinks",
    en: { q: "As the founder/owner, which 3 tasks eat the most of YOUR time every week?", hint: 'Think about what pulls you away from high-value work — the things that make you say "I shouldn\'t be doing this myself."' },
    uz: { q: "Asoschi/egasi sifatida, har hafta SIZNING vaqtingizni eng ko'p oladigan TOP 3 vazifa nima?", hint: "Sizni yuqori qiymatli ishdan chalg'itadigan narsalar haqida o'ylab ko'ring — \"Buni o'zim qilmasligim kerak\" deyishingizga sabab bo'ladigan ishlar." },
    ru: { q: "Как основатель/владелец — какие 3 задачи отнимают больше всего ВАШЕГО времени каждую неделю?", hint: "Подумайте о том, что отвлекает вас от ценной работы — о том, что заставляет сказать «я не должен делать это сам»." },
  },
  {
    n: 10, cat: "time", type: "textarea", required: true, key: "magicWand",
    en: { q: "If you had a magic wand and could get back 10 hours a week instantly, which task would you remove first?", hint: "Don't worry about whether it's realistic. What one thing, if it solved itself, would change everything?" },
    uz: { q: "Agar sehrli tayoq bo'lsa va haftasiga 10 soat vaqtingizni darhol qaytarib olsangiz, qaysi vazifani birinchi bo'lib yo'q qilardingiz?", hint: "Bu real bo'lishi yoki bo'lmasligi haqida tashvishlanmang. O'z-o'zidan hal bo'lsa, hamma narsani o'zgartiradigan bitta narsa nima?" },
    ru: { q: "Если бы по волшебству вы могли вернуть себе 10 часов в неделю — какую задачу убрали бы первой?", hint: "Не думайте о том, насколько это реалистично. Что одно, если бы решалось само собой, изменило бы всё?" },
  },
  {
    n: 11, cat: "growth", type: "textarea", required: true, key: "marketingPain",
    en: { q: "When it comes to finding new clients and marketing, what's the biggest problem right now?", hint: 'For example: "no consistent lead flow", "content creation takes forever", "we\'re invisible on Google", "social media eats time with no result"' },
    uz: { q: "Yangi mijozlarni topish va marketingga kelsak, hozir sizni eng ko'p qiynayotgan muammo nima?", hint: "Masalan: \"Mijoz topishning izchil usuli yo'q\", \"Kontent yaratish abadiy davom etadi\", \"Google'da ko'rinmaymiz\", \"Ijtimoiy tarmoqlar vaqtni yutadi, lekin natija yo'q\"" },
    ru: { q: "Что касается привлечения новых клиентов и маркетинга — какая проблема сейчас стоит острее всего?", hint: "Например: «нет стабильного потока лидов», «создание контента занимает вечность», «нас не видно в Google», «соцсети съедают время без результата»" },
  },
  {
    n: 12, cat: "sales", type: "radio", required: true, key: "salesTeam",
    en: {
      q: "Do you have a sales team, or do you handle sales yourself?",
      options: ["Just me", "Me + 1-2 other people", "A dedicated sales team (3+)", 'We don\'t really have "sales" (e.g. e-commerce, self-serve)'],
    },
    uz: {
      q: "Sotuv jamoangiz bormi, yoki sotuv bilan faqat o'zingiz shug'ullanasizmi?",
      options: ["Faqat men", "Men + 1-2 boshqa odam", "Maxsus sotuv jamoasi (3+)", "Bizda \"sotuv\" deganday narsa yo'q (masalan, e-commerce, o'z-o'ziga xizmat)"],
    },
    ru: {
      q: "У вас есть отдел продаж, или продажами занимаетесь только вы?",
      options: ["Только я", "Я + 1-2 человека", "Отдельная команда продаж (3+)", "У нас нет «продаж» как таких (например, e-commerce, самообслуживание)"],
    },
  },
  {
    n: 13, cat: "sales", type: "textarea", required: true, key: "salesPain",
    en: { q: "When it comes to closing deals and sales, what's your biggest problem right now?", hint: 'For example: "low conversion rate", "leads go cold before we reach them", "the team doesn\'t use the CRM properly", "no clear sales process", "proposals take too long to prepare"' },
    uz: { q: "Bitimlarni yopish va sotuvga kelsak, hozir eng katta muammoingiz nima?", hint: "Masalan: \"Past konversiya darajasi\", \"Lidlar biz ulanmasdan oldin sovib qoladi\", \"Sotuvchilar CRM'dan to'g'ri foydalanmaydi\", \"Aniq sotuv jarayoni yo'q\", \"Takliflar tayyorlash juda uzoq vaqt oladi\"" },
    ru: { q: "Что касается закрытия сделок и продаж — какая проблема сейчас самая острая?", hint: "Например: «низкая конверсия», «лиды остывают до того, как мы связываемся», «менеджеры неправильно используют CRM», «нет чёткого процесса продаж», «коммерческие предложения готовятся слишком долго»" },
  },
  {
    n: 14, cat: "sales", type: "textarea", required: true, key: "deliveryBottleneck",
    en: { q: "When it comes to delivering your product or service, which part of the process takes the most time?", hint: 'Think about the steps between the client saying "yes" and the client being happy. Where does it slow down or turn chaotic?' },
    uz: { q: "Mahsulot yoki xizmatingizni yetkazib berishga kelsak, jarayonning eng ko'p vaqt talab qiladigan qismi qaysi?", hint: "Mijoz \"ha\" deganidan, mijoz \"mamnun\" bo'lguncha bo'lgan bosqichlarni o'ylab ko'ring. Qayerda sekinlashadi yoki tartibsizlashadi?" },
    ru: { q: "Что касается выполнения заказа или оказания услуги — какой этап отнимает больше всего времени?", hint: "Подумайте о шагах между «клиент сказал да» и «клиент доволен». Где всё замедляется или превращается в хаос?" },
  },
  {
    n: 15, cat: "time", type: "textarea", required: false, key: "recurringProblem",
    en: { q: "Is there anything in your operations you've tried to fix several times and still haven't solved?", hint: "Optional: the recurring problem that comes back no matter what you do." },
    uz: { q: "Operatsiyalaringizda bir necha marta tuzatishga harakat qilgan, lekin hali ham hal qilinmagan narsa bormi?", hint: "Ixtiyoriy: Nima qilsangiz ham, qaytib-qaytib chiqib turadigan muammo." },
    ru: { q: "Есть ли в ваших процессах что-то, что вы пытались исправить уже несколько раз, но так и не решили?", hint: "Необязательно: та повторяющаяся проблема, которая возвращается, что бы вы ни делали." },
  },
  {
    n: 16, cat: "sales", type: "textarea", required: true, key: "customerServicePain",
    en: { q: "When it comes to customer service or managing client relationships, what causes the most headaches?", hint: 'For example: "we get the same questions over and over", "hard to track client conversations", "onboarding new clients is chaotic", "we forget follow-ups"' },
    uz: { q: "Mijozlarga xizmat ko'rsatish yoki mijoz bilan munosabatlarni boshqarishga kelsak, eng ko'p bosh og'rig'ini nima keltiradi?", hint: "Masalan: \"Bir xil savollarni qaytadan-qaytadan olamiz\", \"Mijozlar bilan muloqotni kuzatib borish qiyin\", \"Yangi mijozlarni jalb qilish (onboarding) tartibsiz\", \"Keyingi muloqotlarni unutib qo'yamiz\"" },
    ru: { q: "Что касается обслуживания клиентов и отношений с ними — что доставляет больше всего проблем?", hint: "Например: «получаем одни и те же вопросы снова и снова», «трудно следить за перепиской с клиентами», «онбординг новых клиентов хаотичный», «забываем о повторных контактах»" },
  },
  {
    n: 17, cat: "ai", type: "radio", required: true, key: "aiExperience",
    en: {
      q: "Have you or your team tried using any AI tools?", hint: "ChatGPT, Notion AI, Fireflies, etc.",
      options: ["No, we haven't tried anything yet", "Yes, but inconsistently / it didn't stick", "Yes, we use several tools regularly", "Yes, we're quite experienced with AI"],
    },
    uz: {
      q: "Siz yoki jamoangiz biron-bir AI vositasidan foydalanib ko'rganmisiz?", hint: "ChatGPT, Notion AI, Fireflies va h.k.",
      options: ["Yo'q, hali hech narsa sinab ko'rmaganmiz", "Ha, lekin izchil emas / o'rnashib qolmadi", "Ha, bir nechta vositadan muntazam foydalanamiz", "Ha, biz AI'da ancha tajribaliz"],
    },
    ru: {
      q: "Пробовали ли вы или ваша команда использовать AI-инструменты?", hint: "ChatGPT, Notion AI, Fireflies и т.д.",
      options: ["Нет, пока ничего не пробовали", "Да, но непостоянно / не закрепилось", "Да, регулярно используем несколько инструментов", "Да, мы уже довольно опытны в AI"],
    },
  },
  {
    n: 18, cat: "ai", type: "textarea", required: false, key: "aiToolsTried",
    en: { q: "If yes — which tools did you try and how was the experience?", hint: "Optional" },
    uz: { q: "Agar ha bo'lsa, qaysi vositalarni sinab ko'rdingiz va tajribangiz qanday bo'ldi?", hint: "Ixtiyoriy" },
    ru: { q: "Если да — какие инструменты вы пробовали и каким был ваш опыт?", hint: "Необязательно" },
  },
  {
    n: 19, cat: "ai", type: "textarea", required: true, key: "successLooksLike",
    en: { q: "If this audit goes well and we find big opportunities, what would success look like for you?", hint: 'For example: "save 10 hours a week on admin", "stop losing leads to slow replies", "finally get my weekends back", "grow without hiring"' },
    uz: { q: "Agar bu audit yaxshi o'tsa va biz katta imkoniyatlar topsak, sizning uchun muvaffaqiyat qanday ko'rinishda bo'ladi?", hint: "Masalan: \"Haftasiga 10 soat admin ishlardan tejash\", \"Sekin javob tufayli lidlarni yo'qotishni to'xtatish\", \"Nihoyat dam olish kunlarimni qaytarib olish\", \"Yangi xodim yollamasdan o'sish imkoniyati\"" },
    ru: { q: "Если аудит пройдёт хорошо и мы найдём большие точки роста — как будет выглядеть успех для вас?", hint: "Например: «экономить 10 часов в неделю на админ-задачах», «перестать терять лиды из-за медленного ответа», «наконец вернуть себе выходные», «расти без найма новых людей»" },
  },
  {
    n: 20, cat: "ai", type: "textarea", required: false, key: "anythingSpecific",
    en: { q: "Is there anything specific you'd like me to look at during the audit?", hint: "Optional: a particular process, tool or problem you want me to dig into?" },
    uz: { q: "Audit paytida menga maxsus qarashimni xohlagan biror narsa bormi?", hint: "Ixtiyoriy: Sizni qiziqtirgan biron-bir jarayon, vosita yoki muammo bormi?" },
    ru: { q: "Есть ли что-то конкретное, на что вы хотите, чтобы я обратил внимание во время аудита?", hint: "Необязательно: какой-то конкретный процесс, инструмент или проблема, в которую вы хотите, чтобы я вник?" },
  },
];
