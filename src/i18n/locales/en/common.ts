import { type Resources } from "../types";

const messages: Resources["common"] = {
  login: {
    title: "Вход",
    emailLabel: "Имейл",
    passwordLabel: "Парола",
    submitButton: "Вход",
    forgotPasswordButton: "Забравена парола?",
    registerButton: "Регистрация",
  },
  register: {
    title: "Регистрация",
    submitButton: "Регистрирай се",
    loginButton: "Вход",
    checkYourEmailForConfirmation: "Провери имейла си за потвърждение",
  },
  resetPassword: {
    title: "Възстановяване на парола",
    emailLabel: "Имейл",
    resetButton: "Възстанови",
    checkYourEmailToReset: "Провери имейла си, за да възстановиш паролата",
    checkYourEmail: "Провери имейла си",
    passwordChangedSuccesfully: "Паролата беше променена успешно",
  },
  commonValidation: {
    required: "Това поле е задължително",
    email: "Това поле трябва да съдържа валиден имейл адрес",
    passwordConfirm: "Паролите трябва да съвпадат",
  },
  common: {
    emailLabel: "Имейл",
    passwordLabel: "Парола",
    passwordConfirmLabel: "Потвърдете паролата",
    backButton: "Назад",
    noTranslation: "Няма превод",
    passwordSpecialCharacterValidation:
      "Паролата трябва да съдържа специален символ",
    passwordLengthValidation: "Паролата трябва да бъде поне 8 символа дълга",
    passwordUppercaseValidation: "Паролата трябва да съдържа главна буква",
    passwordLowercaseValidation: "Паролата трябва да съдържа малка буква",
    passwordConfirmationValidation: "Паролите трябва да съвпадат",
    confirmYourEmail: "Потвърдете имейла си",
  },
  dashboard: {
    title: "Меню",
    headingText: "Създавайте и управлявайте вашите менюта.",
    createMenu: "Създайте меню",
    noMenusCreated: "Няма създадени менюта",
    noMenusCreatedDescription: "Още не сте създали менюта",
  },
  dashboardSidenav: {
    menus: "Меню",
    billing: "Фактуриране",
    affiliates: "Партньори",
    settings: "Настройки",
  },
  settingsPage: {
    headerDescription: "Управлявайте настройките на акаунта си",
  },
  createMenu: {
    header: "Създайте",
    title: "Създайте своето заведение",
  },
  editMenu: {
    header: "Редактиране",
    title: "Редактирайте своето заведение",
  },
  menuOperations: {
    editMenu: "Редактиране на меню",
    deleteMenu: "Изтриване на меню",
    areYouSureYouWantToDeleteThisMenu:
      "Сигурни ли сте, че искате да изтриете това меню?",
    itCannotBeUndone: "Тази операция не може да бъде отменена",
    cancel: "Отказ",
    delete: "Изтриване",
    open: "Отвори",
    menuDeleted: "Менюто беше изтрито",
    menuDeletedDescription: "Менюто ви беше успешно изтрито",
  },
  addCategoryButton: {
    addCategory: "Добавете категория",
    editCategory: "Редактирайте категория",
    edit: "Редактиране",
  },
  addDishButton: {
    addDish: "Добавете ястие",
    editDish: "Редактирайте ястие",
    edit: "Редактиране",
  },
  categoryForm: {
    save: "Запази",
  },
  deleteDishButton: {
    delete: "Изтриване",
    deleteDish: "Изтриване на ястие",
    areYouSureYouWantToDeleteThisDish:
      "Сигурни ли сте, че искате да изтриете това ястие?",
    cancel: "Отказ",
  },
  deleteVariantButton: {
    delete: "Изтриване",
    deleteVariant: "Изтриване на вариант",
    areYouSureYouWantToDeleteThisVariant:
      "Сигурни ли сте, че искате да изтриете този вариант?",
    cancel: "Отказ",
  },
  dishForm: {
    descriptionPlaceholder: "Руски кнедли с пържен лук и бекон.",
    dishName: "Име на ястието",
    dishDescription: "Описание на ястието",
    priceInPLN: "Цена (PLN)",
    dishPhoto: "Снимка на ястието",
    categoryLabel: "Категория",
    macronutrientsButton: "Макронутриенти",
    calories: "Калории",
    protein: "Протеини (г)",
    carbs: "Въглехидрати (г)",
    fat: "Мазнини (г)",
    weight: "Тегло (г)",
    macronutrientsDescription:
      "Тези полета са по избор. Потребителите ще ги оценят!",
    tagsLabel: "Тагове",
  },
  menuForm: {
    save: "Запази",
    menuLogoImage: "Лого на ресторанта",
    backgroundImage: "Фонова снимка на ресторанта",
    nameOfRestaurant: "Име на ресторанта",
    city: "Град",
    streetAndNumber: "Улица и номер на сграда",
    phoneNumber: "Телефонен номер",
  },
  userAccountNav: {
    dashboard: "Табло",
    settings: "Настройки",
    billing: "Фактуриране",
    logout: "Изход",
  },
  navbar: {
    login: "Вход",
    home: "Начало",
    dashboard: "Моят Профил",
  },
  menuCreator: {
    changeLanguage: "Смяна на езика",
    noDishes: "Няма ястия",
    noDishesDescription:
      "Още не сте създали ястия за тази категория.",
    AddDishesToCategory: "Добавете ястия към категорията",
    noCategory: "Няма категория",
    dishesList: "Списък с ястия",
    categoryNotTranslated: "Категорията не е преведена",
    dishNotTranslated:
      "Ястието не е преведено. Моля, добавете преводи за всички езици преди публикуването на менюто.",
    variantsNotTranslated: "Един от вариантите не е преведен",
    variantNotTranslated: "Вариантът не е преведен",
    variants: "Варианти",
  },
  menuPdfGenerator: {
    menu: "МЕНЮ",
    generatePDFToPrint: "Генерирайте PDF за печат",
  },
  languageSelector: {
    saved: "Запазено",
    changesSaved: "Промените са запазени",
    save: "Запази",
  },
  sidebar: {
    menu: "Меню",
    restaurant: "Ресторант",
    QRMenu: "QR меню",
    edit: "Редактиране",
  },
  restaurantDashboard: {
    menuNotFound: "Менюто не е намерено",
    restaurant: "Ресторант",
    publish: "Публикувай",
    unpublish: "Не публикувай",
    manageMenu: "Управление на менюто",
    settings: "Настройки",
    availableLanguages: "Достъпни езици на менюто:",
    yourQRCode: "Вашият QR код",
    menuPreview: "Преглед на менюто",

    menuPublished: "публикувано",
    menuNotPublished: "не е публикувано",
    defaultLanguage: "Основен език на менюто",
    upgradeAccount: "Абонирайте се за план, за да активирате менюто си",
    menuUnpublishedNotification: "Менюто е отменено",
    menuUnpublishedNotificationDescription:
      "Вашето меню е отменено. Потребителите няма да могат да видят менюто ви.",
    menuPublishedNotification: "Менюто е публикувано",
    menuPublishedNotificationDescription:
      "Менюто ви е публикувано. Потребителите ще могат да видят менюто ви.",
  },
  languageToggle: {
    toggleLanguage: "Превключете езика",
  },
  imageUploadInput: {
    restore: "Възстанови",
  },
  cropImageModal: {
    adjustImage: "Регулирайте изображението",
    close: "Затвори",
  },
  colorModeToggle: {
    toggleTheme: "Превключване на тема",
    light: "Светла",
    dark: "Тъмна",
    system: "Системна",
  },
  landingPage: {
    backgroundAlt: "Фоново изображение на началната страТова е пълният превод на вашия код на български език. Той включва всички ключови части, като заглавия, етикети за форми, съобщения за състоянието на менюто и съобщения за грешки.",
    section1: {
      header: "Иновативно Онлайн",
      headerHighlight: "Меню",
      headerSuffix: "за вашето заведение",
      description:
        "Създавайте и персонализирайте онлайн менюта и получавайте свои собствени QR кодове, за да предложите на клиентите удобство и бързо поръчване.",
      getStarted: "Започни",
      learnMore: "Научи Повече",
      featuredOn: "Използвани от",
      productHunt: "фирма",
      heroImageAlt: "Hero image",
      credit: "Платформа номер 1",
    },
    section2: {
      showcaseAlt: "Showcase image",
      featuresTitle: "Нашите Иновации -",
      restaurantSuccess: "Вашият Успех в Бизнеса!",
      discoverWhy:
        "Разбери защо SNAPY е перфектното решение за твоят бизнес",
      createCustomize: "Създай и редактирай",
      onlineMenus: "Онлайн Меню",
      onlineMenusDescription:
        "Създавайте привлекателни онлайн менюта за няколко лесни стъпки. Персонализирайте ги спрямо вашия стил и сезонни промени в менюто, без да се нуждаете от технически познания.",
      generateQR: "Генерирай",
      qrCodes: "QR кодове",
      streamlinedOrders: "за опростени поръчки",
      qrCodesDescription:
        "Генерирайте уникални QR кодове, които позволяват на клиентите ви да сканират менюто и да правят поръчки. Това ускорява и улеснява обслужването.",
      easyMenu: "Лесно управление",
      priceManagement: "на менюто и цените",
      menuPriceManagementDescription:
        "Контролирайте менюто и цените си отвсякъде. Актуализирайте ги в реално време, спрямо сезонни промени.",
      manageOnlineOrders: "Управлявайте онлайн поръчките",
      manageOnlineOrdersDescription:
        "Чрез събиране на данни за поръчките и предпочитанията на клиентите, можете да персонализирате менюта, промоционални оферти и услуги според техните нужди, което води до лоялност и печалби.",
      enhanceCustomerService: "Подобрете обслужването на клиентите",
      enhanceCustomerServiceDescription:
        "Подобрете качеството на обслужване с по-лесно и интуитивно онлайн меню. Вашите клиенти получават по-бърз и персонализиран достъп до ястията.",
      showcaseMobileAlt: "Showcase mobile image",
    },
    section3: {
      pricingTitle: "Нашите Планове",
      planPro: "План PRO",
      oneMonthFree: "(1 безплатен месец)",
      enterprise: "VIP",
      contactUs: "(Свържи се с нас)",
    },
    pricing: {
      toggle: {
        monthly: "Месечнос",
        annually: "Годишнп",
      },
      standard: {
        name: "Стандарт",
        description: "Иновирайте преживяването си при хранене с онлайн менюта.",
        feature1: "Създайте меню за вашия ресторант",
        feature2: "Показвайте макронутриенти, алергени и други",
        feature3: "Преводи на менюто",
      },
      enterprise: {
        name: "VIP",
        price: "Свържи се с нас",
        yearlyPrice: "Свържи се с нас",
        description:
          "Управлявайте всички ресторанти с нашите мощни функции и интеграции.",
        feature1: "Собствен Домейн",
        feature2: "Персонализиран брандинг",
        feature3: "24/7 Поддръжка",
        extraBenefits: "Всичко в стандартният план плюс",
      },
    },
  },
  defaultLanguageSelector: {
    changeSavedTitle: "Saved",
    changeSavedDescription: "Changes have been saved",
    save: "Save",
  },
  notFound: {
    title: "Page not found",
    goBack: "Go back to main page",
  },
  errorPage: {
    title: "An Error Occurred",
    description: "We apologize! If the problem persists, please contact us at",
    tryAgain: "Try Again",
    goBack: "Go back to the main page",
  },
  tags: {
    keto: "Keto",
    vegan: "Vegan",
    vegetarian: "Vegetarian",
    glutenFree: "Gluten Free",
    lactoseFree: "Lactose Free",
    lowCarb: "Low Carb",
    highProtein: "High Protein",
    lowFat: "Low Fat",
    highFiber: "High Fiber",
    sugarFree: "Sugar Free",
    organic: "Organic",
  },
  dishVariantForm: {
    variantName: "Variant Name",
    variantDescription: "Variant Description",
    priceInPLN: "Price (PLN)",
    variantNamePlaceholder: "Combo box",
    variantDescriptionPlaceholder: "Combo box includes fries and a drink.",
  },
  addDishVariantButton: {
    edit: "Edit",
    addVariant: "Add Variant",
    editVariant: "Edit Variant",
  },
  globalMetadata: {
    title: "Online Menu for Your Restaurant",
    description:
      "Create and customize online menus and generate your own QR codes to provide customers with convenience and quick ordering.",
    keywords:
      "menu, restaurant, online, QR, orders, dining, restaurants, food, restaurant, dining",
    category: "Restaurant",
    openGraph: {
      title: "Online Menu for Your Restaurant",
      description:
        "Create and customize online menus and generate your own QR codes to provide customers with convenience and quick ordering.",
      type: "website",
      url: "https://www.feastqr.com/",
      image: "https://www.feastqr.com/og-image.png",
      siteName: "Snapy - create your online menu",
      locale: "pl_PL",
    },
    twitter: {
      title: "Online Menu for Your Restaurant",
      description:
        "Create and customize online menus and generate your own QR codes to provide customers with convenience and quick ordering.",
    },
  },
  googleReviewGuideModal: {
    title: "How to add a Google review link to your menu?",
    step: "Step {step}",
    description:
      "Utwórz link do recenzji Google dla swojej restauracji i dodaj go do swojego menu. Dzięki temu Twoi klienci będą mogli zostawić recenzję Twojej restauracji w Google.",
    googleMaps: {
      name: "Google Maps",
      step1: "1. Find your restaurant on Google Maps",
      step2: "2. Click on 'Write a review'",
      step3:
        "3. Copy the link from the address bar and paste it in the 'Google Review Link' field in the 'Restaurant' tab of the menu editor",
    },
    googleDashboard: {
      name: "Google My Business Dashboard",
      step1: "Go to Google My Business dashboard",
      step2:
        "If you have multiple locations, select the location you want to add a review link to.",
      step3: "Click on 'Home' in the left menu",
      step4: "Click on 'Get more reviews'",
      step5: "Copy the link from the address bar. ",
      step6:
        "Paste the link in the 'Google Review Link' field in the 'Restaurant' tab of the menu editor",
    },
    ready: "Ready!",
  },
  socialMediaForm: {
    title: "Social Media",
    facebookPlaceholder: "Facebook Link",
    instagramPlaceholder: "Instagram Link",
    googlePlaceholder: "Google Review Link",
    save: "Save",
    description:
      "Add links to your social media to increase the reach of your restaurant.",
    updatedToastTitle: "Social media links updated",
    updatedToastDescription:
      "Your social media links have been updated successfully",
  },
  toastCommon: {
    errorTitle: "Error",
    errorDescription: "Something went wrong",
  },
  menuPrintCreator: {
    title: "QR Code Card Creator",
    socialMediaLabel: "Social Media",
    socialMediaDescription:
      "Add your social media handles to your menu to increase your followers.",
    instagramHandlePlaceholder: "Instagram Handle",
    facebookHandlePlaceholder: "Facebook Handle",
    wifiPasswordLabel: "Wifi Password",
    wifiPasswordDescription:
      "If you have a wifi password, add it to your menu to make it easier for your customers to connect.",
    wifiPasswordPlaceholder: "Your wifi password",
    restaurantNameLabel: "Add Restaurant Name",
    qrCodeEnabledLabel: "Include Logo in QR Code",
  },
  billing: {
    heading: "Billing",
    description: "Manage your billing information and subscription plan.",
    cancel: "Cancel",
    areYouSureYouWantToCancelSubscription:
      "Are you sure you want to cancel your subscription?",
    sadToSeeYouGo:
      "We are sad to see you go :(, if you have any feedback that can help us improve, please write to us at: support@feastqr.com",
    continue: "Continue",
    subscriptionPlan: "Subscription Plan",
    subscriptionDescription:
      "Online menu and QR Code for your customers to scan.",
    youAreCurrentlyOn: {
      firstPart: "Your plan: ",
      premium: "premium",
      free: "free",
    },
    customerPortal: {
      goTo: "Go to your customer portal to manage your subscription.",
      description:
        "View payment history, download invoices, and manage subscriptions and payment methods.",
      title: "Customer portal",
    },
  },
  contactUsCard: {
    title: `Provide us with your current menu, and we'll handle everything—from design and integration to setup.`,
    subtitle:
      "Our team stands ready to assist you. Trust in our Menu QR Creator service; we'll do it all for you, crafting the ultimate menu experience with seamless QR integration and real-time updates.",
    contactUs: "Contact us:",
  },
  affiliates: {
    title: "Affiliates",
    description: "Manage your affiliates system",
    comingSoon: "Coming soon!",
  },
  notifications: {
    menuNotFound: "Menu not found",
    subscriptionCancelled: "Subscription cancelled",
    subscriptionCancelledDescription:
      "Feel free to give us feedback on how can we improve! support@feastqr.com",
    somethingWentWrong: "Something went wrong.",
    tryAgainLater: "Try again later.",
  },
};

export default messages;
