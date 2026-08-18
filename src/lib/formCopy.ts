/** UI chrome for the audit form, in all three languages. */

import type { Lang } from "./content";
import type { QuestionCategory } from "./questions";

type FormCopy = {
  heroTitle: string;
  heroSub: string;
  progressCount: (a: number, t: number) => string;
  submitNote1: string;
  submitBtn: string;
  submitting: string;
  submitNote2: string;
  thanksTitle: string;
  thanksBody: string;
  optional: string;
  placeholderText: string;
  backHome: string;
  errorRequired: string;
  errorEmail: string;
  errorNetwork: string;
  cats: Record<QuestionCategory, string>;
};

export const formCopy: Record<Lang, FormCopy> = {
  en: {
    heroTitle: "Pre-audit<br>questionnaire",
    heroSub:
      "These 20 questions help us understand your business in depth and find the biggest opportunities before the audit. It saves your time — on audit day we already have the context and go straight to the result.",
    progressCount: (a, t) => `${a} / ${t} completed`,
    submitNote1:
      "All your answers go directly to the 1is4me team and are reviewed before our audit call.",
    submitBtn: "Submit questionnaire",
    submitting: "Sending...",
    submitNote2: "Never send passwords or payment details through this form.",
    thanksTitle: "Thank you!",
    thanksBody:
      "Your answers have been received. The 1is4me team will review them and get in touch before the audit call.",
    optional: "(Optional)",
    placeholderText: "Type your answer...",
    backHome: "Back to site",
    errorRequired: "Please answer all required questions.",
    errorEmail: "Please enter a valid email address.",
    errorNetwork: "Could not send. Please check your connection and try again.",
    cats: {
      identity: "Introduction",
      business: "Business",
      time: "Time & Operations",
      growth: "Growth & Marketing",
      sales: "Sales & Delivery",
      ai: "AI & Results",
    },
  },
  uz: {
    heroTitle: "Audit oldi<br>so'rovnomasi",
    heroSub:
      "Quyidagi 20 savol bizga sizning biznesingizni chuqur tushunish va auditda eng katta imkoniyatlarni topishga yordam beradi. Bu sizning vaqtingizni tejaydi — audit kuni biz allaqachon kontekstni bilib, to'g'ridan-to'g'ri natijaga o'tamiz.",
    progressCount: (a, t) => `${a} / ${t} to'ldirildi`,
    submitNote1:
      "Barcha javoblaringiz 1is4me jamoasiga to'g'ridan-to'g'ri yetib boradi va audit qo'ng'irog'imizdan oldin ko'rib chiqiladi.",
    submitBtn: "So'rovnomani yuborish",
    submitting: "Yuborilmoqda...",
    submitNote2:
      "Hech qachon parol yoki to'lov ma'lumotlarini bu shaklda yubormang.",
    thanksTitle: "Rahmat!",
    thanksBody:
      "Javoblaringiz qabul qilindi. 1is4me jamoasi ularni ko'rib chiqib, audit qo'ng'irog'idan oldin sizga aloqaga chiqadi.",
    optional: "(Ixtiyoriy)",
    placeholderText: "Javobingizni yozing...",
    backHome: "Saytga qaytish",
    errorRequired: "Iltimos, barcha majburiy savollarga javob bering.",
    errorEmail: "Iltimos, to'g'ri email manzil kiriting.",
    errorNetwork: "Yuborilmadi. Internetni tekshirib, qayta urinib ko'ring.",
    cats: {
      identity: "Tanishuv",
      business: "Biznes",
      time: "Vaqt & Operatsiya",
      growth: "O'sish & Marketing",
      sales: "Sotuv & Yetkazib berish",
      ai: "AI & Natija",
    },
  },
  ru: {
    heroTitle: "Анкета перед<br>аудитом",
    heroSub:
      "Эти 20 вопросов помогут нам глубже понять ваш бизнес и найти главные точки роста ещё до аудита. Это экономит ваше время — в день звонка мы уже будем в контексте и сразу перейдём к делу.",
    progressCount: (a, t) => `${a} / ${t} заполнено`,
    submitNote1:
      "Все ваши ответы напрямую попадают команде 1is4me и будут изучены перед звонком по аудиту.",
    submitBtn: "Отправить анкету",
    submitting: "Отправка...",
    submitNote2: "Никогда не указывайте пароли или платёжные данные в этой форме.",
    thanksTitle: "Спасибо!",
    thanksBody:
      "Ваши ответы получены. Команда 1is4me изучит их и свяжется с вами перед звонком по аудиту.",
    optional: "(Необязательно)",
    placeholderText: "Введите ваш ответ...",
    backHome: "Вернуться на сайт",
    errorRequired: "Пожалуйста, ответьте на все обязательные вопросы.",
    errorEmail: "Пожалуйста, введите корректный email.",
    errorNetwork: "Не удалось отправить. Проверьте соединение и попробуйте снова.",
    cats: {
      identity: "Знакомство",
      business: "Бизнес",
      time: "Время & Операции",
      growth: "Рост & Маркетинг",
      sales: "Продажи & Доставка",
      ai: "AI & Результат",
    },
  },
};
