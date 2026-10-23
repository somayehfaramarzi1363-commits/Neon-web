(() => {
  "use strict";

  const translations = {
    fa: {
      navServices:"خدمات",navWork:"نمونه‌کارها",navProcess:"مراحل کار",navFaq:"سؤالات",navContact:"شروع پروژه",
      eyebrow:"استودیوی طراحی دیجیتال نسل بعد",heroTitle:'ایده‌های بزرگ،<br><span class="gradient-text">تجربه‌های درخشان.</span>',
      heroDescription:"برای برندت فقط یک وب‌سایت نساز؛ یک تجربه‌ی سریع، خوش‌ساخت و به‌یادماندنی خلق کن.",
      heroCta:"پروژه‌ات را شروع کن",heroSecondary:"دیدن سبک طراحی",proofTitle:"طراحی با فکر، نه فقط ظاهر",proofDesc:"تجربه کاربری، سرعت و جزئیات در کنار هم",
      chipDesign:"طراحی اختصاصی",chipSpeed:"سرعت و عملکرد",metricOne:"شناخت هدف",metricTwo:"طراحی دقیق",metricThree:"ساخت اصولی",metricFour:"انتشار مطمئن",
      servicesTitle:'راهکارهایی برای <span class="gradient-text">رشد دیجیتال</span>',servicesIntro:"از معرفی برند تا تجربه‌های اختصاصی؛ هر جزئیات با هدفی روشن طراحی می‌شود.",
      serviceOneTitle:"وب‌سایت شرکتی",serviceOneDesc:"معرفی حرفه‌ای برند، خدمات و داستان کسب‌وکارت با ساختاری شفاف و قابل اعتماد.",
      serviceTwoTitle:"فروشگاه آنلاین",serviceTwoDesc:"تجربه خرید ساده و منظم؛ از نمایش محصول تا مسیر سفارش و پرداخت.",
      serviceThreeTitle:"طراحی اختصاصی",serviceThreeDesc:"راهکار متناسب با ایده، فرایند و نیازهای خاص پروژه‌ی تو.",learnMore:"بیشتر بدان",popular:"پیشنهاد ویژه",
      workTitle:'طراحی که <span class="gradient-text">دیده می‌شود</span>',workIntro:"چند کانسپت نمایشی از سبک بصری ما؛ این‌ها نمونه‌های مفهومی هستند، نه پروژه‌های مشتری.",
      portfolioOne:"برندت،<br>با نگاهی تازه.",portfolioTwo:"سادگی،<br>در اوج خودش.",concept:"کانسپت طراحی",portfolioTypeOne:"هویت دیجیتال / شرکتی",portfolioTitleOne:"فرم و هویت",portfolioTypeTwo:"تجربه خرید / فروشگاهی",portfolioTitleTwo:"نوا استور",
      processTitle:'مسیر روشن، <span class="gradient-text">نتیجه بهتر</span>',processIntro:"از اولین گفتگو تا انتشار، هر مرحله شفاف و قابل پیگیری است.",
      stepOneTitle:"کشف نیاز",stepOneDesc:"هدف، مخاطب و اولویت‌های پروژه را مشخص می‌کنیم.",stepTwoTitle:"طراحی تجربه",stepTwoDesc:"ساختار و ظاهر را بر اساس نیاز واقعی می‌سازیم.",stepThreeTitle:"توسعه و تست",stepThreeDesc:"جزئیات فنی و نمایش در موبایل و دسکتاپ بررسی می‌شود.",stepFourTitle:"انتشار و رشد",stepFourDesc:"نسخه نهایی منتشر می‌شود و مسیر توسعه باز می‌ماند.",
      faqTitle:'چند سؤال <span class="gradient-text">پرتکرار</span>',faqIntro:"اگر سؤال دیگری داری، از فرم سفارش برای توضیح پروژه استفاده کن.",
      faqOneQ:'طراحی سایت چقدر زمان می‌برد؟ <span>＋</span>',faqOneA:"زمان اجرا به امکانات و اندازه پروژه بستگی دارد؛ بعد از بررسی نیازها زمان‌بندی دقیق‌تری ارائه می‌شود.",
      faqTwoQ:'آیا سایت روی موبایل هم درست کار می‌کند؟ <span>＋</span>',faqTwoA:"بله، طراحی واکنش‌گرا در نظر گرفته شده تا چیدمان با موبایل، تبلت و دسکتاپ سازگار باشد.",
      faqThreeQ:'چطور درخواست پروژه را ثبت کنم؟ <span>＋</span>',faqThreeA:"فرم پایین صفحه را تکمیل کن. اگر سرویس سمت سرور و دیتابیس تنظیم باشند، درخواست ذخیره می‌شود.",
      orderTitle:'ایده‌ات را به <span class="gradient-text">تجربه‌ای واقعی</span> تبدیل کن.',orderIntro:"کمی درباره پروژه‌ات بگو. درخواستت از طریق سرور ارسال می‌شود و در دیتابیس ثبت خواهد شد.",
      orderNoteTitle:"شروع با یک گفتگو",orderNoteDesc:"جزئیات پروژه را می‌خوانیم و برای قدم بعدی هماهنگ می‌کنیم.",formTitle:"درخواست طراحی سایت",requiredNote:"* موارد ضروری",
      labelName:"نام و نام خانوادگی *",labelContact:"راه ارتباطی *",labelType:"نوع سایت *",labelBudget:"بودجه حدودی",labelDetails:"توضیحات پروژه *",
      optionCorporate:"سایت شرکتی",optionStore:"فروشگاه اینترنتی",optionPersonal:"سایت شخصی / رزومه",optionCustom:"سایت اختصاصی",
      budgetUnknown:"هنوز مشخص نیست",budgetBasic:"اقتصادی",budgetMedium:"متوسط",budgetAdvanced:"پیشرفته",submit:"ارسال درخواست",
      formHint:"اطلاعات فقط برای پیگیری درخواست پروژه استفاده می‌شود.",footerText:"طراحی دیجیتال با تمرکز بر تجربه، عملکرد و آینده.",backTop:"بازگشت به بالا",footerRights:"ساخته‌شده برای ایده‌های بزرگ.",footerStatus:"آماده برای پروژه بعدی",
      placeholderName:"مثلاً علی رضایی",placeholderContact:"ایمیل یا شماره تماس",placeholderDetails:"چه امکاناتی نیاز داری؟",
      submitting:"در حال ارسال درخواست…",success:"درخواستت با موفقیت ثبت شد. ممنون از اعتمادت!",genericError:"ارسال درخواست ناموفق بود. لطفاً دوباره تلاش کن.",networkError:"ارتباط برقرار نشد. اتصال اینترنت را بررسی و دوباره تلاش کن.",requiredError:"لطفاً همه فیلدهای ضروری را کامل کن."
    },
    en: {
      navServices:"Services",navWork:"Portfolio",navProcess:"Process",navFaq:"FAQ",navContact:"Start a project",
      eyebrow:"Next-generation digital design studio",heroTitle:'Big ideas,<br><span class="gradient-text">brilliant experiences.</span>',
      heroDescription:"Don't just build a website for your brand. Create a fast, thoughtful, and memorable digital experience.",
      heroCta:"Start your project",heroSecondary:"Explore our style",proofTitle:"Thoughtful design, beyond looks",proofDesc:"User experience, speed, and details in harmony",
      chipDesign:"Custom design",chipSpeed:"Speed & performance",metricOne:"Discover goals",metricTwo:"Design with care",metricThree:"Build it right",metricFour:"Launch with confidence",
      servicesTitle:'Solutions for <span class="gradient-text">digital growth</span>',servicesIntro:"From brand presence to custom experiences, every detail is designed with purpose.",
      serviceOneTitle:"Business websites",serviceOneDesc:"Present your brand, services, and story with a clear and trustworthy structure.",
      serviceTwoTitle:"Online stores",serviceTwoDesc:"A smooth shopping journey, from product discovery to ordering and checkout.",
      serviceThreeTitle:"Custom development",serviceThreeDesc:"A solution tailored to your idea, workflow, and project requirements.",learnMore:"Learn more",popular:"Featured",
      workTitle:'Design that <span class="gradient-text">stands out</span>',workIntro:"A glimpse of our visual direction. These are concept pieces, not client projects.",
      portfolioOne:"Your brand,<br>reimagined.",portfolioTwo:"Simplicity,<br>at its finest.",concept:"Design concept",portfolioTypeOne:"Digital identity / Business",portfolioTitleOne:"Form & identity",portfolioTypeTwo:"Shopping experience / Retail",portfolioTitleTwo:"Nova Store",
      processTitle:'A clear path, <span class="gradient-text">better results</span>',processIntro:"From the first conversation to launch, every step stays clear and trackable.",
      stepOneTitle:"Discover",stepOneDesc:"We define your goals, audience, and project priorities.",stepTwoTitle:"Design the experience",stepTwoDesc:"We shape the structure and visuals around real needs.",stepThreeTitle:"Build & test",stepThreeDesc:"We check the technical details and layouts across devices.",stepFourTitle:"Launch & grow",stepFourDesc:"Your final version goes live, with room to evolve.",
      faqTitle:'Frequently asked <span class="gradient-text">questions</span>',faqIntro:"Have another question? Tell us about it in the project form.",
      faqOneQ:'How long does a website take? <span>＋</span>',faqOneA:"Timing depends on the scope and features. We'll provide a clearer estimate after reviewing your needs.",
      faqTwoQ:'Will the site work on mobile? <span>＋</span>',faqTwoA:"Yes. The responsive layout is designed to work across phones, tablets, and desktop screens.",
      faqThreeQ:'How do I submit a project request? <span>＋</span>',faqThreeA:"Complete the form below. Your request will be saved when the server and database are configured.",
      orderTitle:'Turn your idea into a <span class="gradient-text">real experience.</span>',orderIntro:"Tell us a little about your project. Your request is sent securely through the server and saved to the database.",
      orderNoteTitle:"It starts with a conversation",orderNoteDesc:"We'll review the details and coordinate the next step.",formTitle:"Website project request",requiredNote:"* Required fields",
      labelName:"Full name *",labelContact:"Email or phone *",labelType:"Website type *",labelBudget:"Estimated budget",labelDetails:"Project details *",
      optionCorporate:"Business website",optionStore:"Online store",optionPersonal:"Personal / portfolio",optionCustom:"Custom website",
      budgetUnknown:"Not sure yet",budgetBasic:"Basic",budgetMedium:"Mid-range",budgetAdvanced:"Advanced",submit:"Send request",
      formHint:"Your information is used only to follow up on this project request.",footerText:"Digital design focused on experience, performance, and what's next.",backTop:"Back to top",footerRights:"Made for big ideas.",footerStatus:"Ready for the next project",
      placeholderName:"e.g. Alex Morgan",placeholderContact:"Email or phone number",placeholderDetails:"Tell us what you need...",
      submitting:"Sending your request…",success:"Your request was submitted successfully. Thank you!",genericError:"Could not submit your request. Please try again.",networkError:"Connection failed. Check your internet and try again.",requiredError:"Please complete all required fields."
    }
  };

  const root = document.documentElement;
  const languageButton = document.querySelector("#language-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  const form = document.querySelector("#order-form");
  const statusEl = document.querySelector("#form-status");
  let currentLanguage = "fa";

  function applyLanguage(language) {
    currentLanguage = language === "en" ? "en" : "fa";
    const t = translations[currentLanguage];
    root.lang = currentLanguage;
    root.dir = currentLanguage === "fa" ? "rtl" : "ltr";
    document.title = currentLanguage === "fa" ? "NEON WEB — طراحی دیجیتال آینده‌نگر" : "NEON WEB — Future-focused digital design";
    document.querySelector('meta[name="description"]').content = currentLanguage === "fa"
      ? "NEON WEB — طراحی سایت‌های مدرن، سریع و واکنش‌گرا برای برندهای آینده‌نگر."
      : "NEON WEB — Modern, fast, responsive websites for forward-thinking brands.";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = t[element.dataset.i18n];
      if (value !== undefined) element.innerHTML = value;
    });
    const name = document.querySelector("#name");
    const contact = document.querySelector("#contact");
    const details = document.querySelector("#details");
    name.placeholder = currentLanguage === "fa" ? name.dataset.placeholderFa : name.dataset.placeholderEn;
    contact.placeholder = t.placeholderContact;
    details.placeholder = t.placeholderDetails;
    document.querySelectorAll(".order-form input,.order-form textarea").forEach(el => {
      el.dir = currentLanguage === "fa" ? "auto" : "auto";
    });
    languageButton.innerHTML = currentLanguage === "fa" ? 'EN <span>↗</span>' : 'فا <span>↗</span>';
    languageButton.setAttribute("aria-label", currentLanguage === "fa" ? "Switch to English" : "تغییر زبان به فارسی");
    try { localStorage.setItem("neon-web-language", currentLanguage); } catch (_) {}
  }

  languageButton?.addEventListener("click", () => applyLanguage(currentLanguage === "fa" ? "en" : "fa"));
  try {
    const saved = localStorage.getItem("neon-web-language");
    if (saved === "en") applyLanguage("en");
  } catch (_) {}

  function closeMenu() {
    nav?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", currentLanguage === "fa" ? "باز کردن منو" : "Open menu");
  }
  menuButton?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open") ?? false;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? (currentLanguage === "fa" ? "بستن منو" : "Close menu") : (currentLanguage === "fa" ? "باز کردن منو" : "Open menu"));
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
  document.querySelector("#year").textContent = String(new Date().getFullYear());

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".service-card,.portfolio-card,.process-grid article").forEach(el => observer.observe(el));
  }

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const t = translations[currentLanguage];
    if (!form.reportValidity()) {
      statusEl.textContent = t.requiredError;
      statusEl.className = "form-status error";
      return;
    }
    const button = form.querySelector('button[type="submit"]');
    const submitLabel = button.querySelector("[data-i18n='submit']");
    const originalLabel = submitLabel.textContent;
    const payload = Object.fromEntries(new FormData(form).entries());
    if (payload.website) return;
    button.disabled = true;
    submitLabel.textContent = t.submitting;
    statusEl.textContent = "";
    statusEl.className = "form-status";
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          customer_name: String(payload.name || "").trim(),
          customer_email: String(payload.contact || "").trim(),
          service_type: payload.site_type || "",
          budget: payload.budget || "unknown",
          project_details: String(payload.details || "").trim(),
          website: payload.website || ""
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || t.genericError);
      form.reset();
      statusEl.textContent = t.success;
      statusEl.className = "form-status success";
    } catch (error) {
      console.error("Order submission failed:", error);
      statusEl.textContent = error instanceof TypeError ? t.networkError : (error.message || t.genericError);
      statusEl.className = "form-status error";
    } finally {
      button.disabled = false;
      submitLabel.textContent = originalLabel;
    }
  });
})();
