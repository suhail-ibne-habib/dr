export const site = {
  doctor: {
    name: "ডাঃ মোঃ আরিফ মাসুদ চৌধুরী",
    nameShort: "ডাঃ আরিফ মাসুদ",
    englishName: "Dr. Arif Masud Chowdhury",
    honorific: "ডাঃ মোঃ আরিফ মাসুদ চৌধুরী",
    credentials: "এমবিবিএস, সিসিডি (বারডেম), পিজিটি-সার্জারি",
    extraCredentials: [
      "সিপিআর — ঢাকা মেডিকেল কলেজ",
      "ডায়াবেটিসে বিশেষ প্রশিক্ষণ",
      "বিএমডিসি নিবন্ধন: ৭৩৫৩১",
    ],
    role: "মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ",
    experienceYears: 10,
    bmdc: "৭৩৫৩১",
    photo: "/images/profile.jpg",
  },
  tagline: {
    eyebrow: "দেশ ও বিদেশে ১০ বছরের অভিজ্ঞতা",
    headline: ["মেডিসিন ও", "ডায়াবেটিস", "বিশেষজ্ঞ"],
    body: "সহানুভূতিশীল রোগনির্ণয়, আধুনিক প্রমাণভিত্তিক চিকিৎসা এবং নিয়মিত ফলোআপ — এক ছাদের নিচে।",
  },
  highlights: [
    "সরাসরি পরামর্শ",
    "জরুরি সেবার নির্দেশনা",
    "ডাক্তারের সাথে সরাসরি যোগাযোগ",
  ],
  contact: {
    phone: "+880 1700-750350",
    phoneHref: "tel:+8801700750350",
    phoneSecondary: "+880 1890-103050",
    phoneSecondaryHref: "tel:+8801890103050",
    whatsapp: "https://wa.me/8801700750350",
  },
  hospital: {
    name: "সেনাহিয়া মিলিটারি হাসপাতাল",
    role: "সাবেক মেডিকেল অফিসার",
    address: "মালে, মালদ্বীপ",
    mapHref: "https://maps.google.com/?q=Senahiya+Military+Hospital+Male+Maldives",
    tags: ["জেনারেল মেডিসিন", "ডায়াবেটিস", "ইমার্জেন্সি কেয়ার"],
    country: "দেশ ও বিদেশে চিকিৎসা অভিজ্ঞতা",
  },
  chamber: {
    name: "পরামর্শ চেম্বার",
    address: "বাড়ি ১২, রোড ৪, ধানমন্ডি, ঢাকা ১২০৫",
    hours: [
      { days: "শনি – বৃহস্পতি", time: "সন্ধ্যা ৬:০০ – ৯:৩০", tone: "open" as const },
      { days: "শুক্রবার", time: "জরুরি সেবা চালু", tone: "alert" as const },
    ],
    note: "সিরিয়াল চেম্বার ও ফোনে দেওয়া হয়। অনুগ্রহ করে ১৫ মিনিট আগে উপস্থিত হোন।",
  },
  nav: [
    { label: "হোম", href: "#home" },
    { label: "সম্পর্কে", href: "#about" },
    { label: "সেবাসমূহ", href: "#services" },
    { label: "চেম্বার", href: "#chamber" },
    { label: "যোগাযোগ", href: "#contact" },
  ],
  ui: {
    callDoctor: "ডাক্তারকে কল করুন",
    callNow: "এখনই কল করুন",
    viewHours: "চেম্বারের সময় দেখুন",
    years: "বছর",
    callAnytime: "যেকোনো সময় কল করুন",
    specialties: "বিশেষত্ব",
    servicesTitle: "বিশেষায়িত চিকিৎসা ও মনোযোগী স্বাস্থ্যসেবা",
    servicesBody:
      "জেনারেল মেডিসিন, ডায়াবেটিস ব্যবস্থাপনা, জরুরি সেবা, মাইনর প্রসিডিউর এবং প্রতিরোধমূলক স্বাস্থ্যসেবা।",
    learnMore: "আরও জানুন",
    hospitalPosting: "হাসপাতাল পোস্টিং",
    getThere: "মানচিত্রে দেখুন",
    aboutConsultant: "বিশেষজ্ঞ সম্পর্কে",
    aboutTitle: "সহানুভূতিশীল, সঠিক রোগনির্ণয় ও আধুনিক প্রমাণভিত্তিক চিকিৎসায় প্রতিশ্রুতিবদ্ধ",
    aboutBody:
      "ডাঃ মোঃ আরিফ মাসুদ চৌধুরী দেশ ও বিদেশে ১০ বছরের অভিজ্ঞতা সম্পন্ন মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ। বারডেমে সিসিডি, সার্জারিতে পিজিটি এবং ঢাকা মেডিকেল কলেজে সিপিআর প্রশিক্ষণ সম্পন্ন।",
    callDoctorNow: "এখনই কল করুন",
    chamberTitle: "সরাসরি চেম্বার পরামর্শ ও সিরিয়াল",
    chamberBody: "ধানমন্ডিতে সন্ধ্যার সিরিয়াল এবং শুক্রবারে জরুরি সেবার ব্যবস্থা।",
    eveningHours: "সন্ধ্যার সময়সূচি",
    directBooking: "সরাসরি সিরিয়াল",
    serialBooking: "চেম্বার ভিজিট ও সিরিয়াল বুকিং",
    primary: "প্রাথমিক",
    serialDesk: "সিরিয়াল ডেস্ক",
    getSerial: "সিরিয়াল নিন",
    navigate: "নেভিগেশন",
    chamberHours: "চেম্বারের সময়",
    contact: "যোগাযোগ",
    footerAbout:
      "দেশ ও বিদেশে ১০ বছরের অভিজ্ঞতা সম্পন্ন মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ — হাসপাতাল ও সন্ধ্যা চেম্বারে সেবা।",
    copyright: "সর্বস্বত্ব সংরক্ষিত।",
    disclaimer: "এই ওয়েবসাইট শুধু তথ্য ও অ্যাপয়েন্টমেন্টের জন্য — জরুরি চিকিৎসার বিকল্প নয়।",
    openMenu: "মেনু খুলুন",
    closeMenu: "মেনু বন্ধ করুন",
  },
} as const;

export const stats = [
  { value: 10, suffix: "+", label: "বছরের অভিজ্ঞতা", animate: true },
  { value: "সিসিডি", suffix: "", label: "বারডেম, ডায়াবেটিস", animate: false },
  { value: "৭৩৫৩১", suffix: "", label: "বিএমডিসি নিবন্ধন", animate: false },
  { value: "দেশ-বিদেশ", suffix: "", label: "চিকিৎসা অভিজ্ঞতা", animate: false },
] as const;

export const services = [
  {
    id: "internal",
    title: "জেনারেল মেডিসিন",
    description: "জ্বর, সংক্রমণ, উচ্চ রক্তচাপ ও সাধারণ অসুস্থতার সঠিক রোগনির্ণয় ও চিকিৎসা।",
    icon: "stethoscope" as const,
    tint: "sky" as const,
  },
  {
    id: "diabetes",
    title: "ডায়াবেটিস ব্যবস্থাপনা",
    description: "ইনসুলিন পরিকল্পনা, গ্লুকোজ নিয়ন্ত্রণ এবং দীর্ঘমেয়াদি ডায়াবেটিস ফলোআপ।",
    icon: "droplet" as const,
    tint: "teal" as const,
  },
  {
    id: "emergency",
    title: "ইমার্জেন্সি ও ক্যাজুয়ালটি কেয়ার",
    description: "জরুরি মূল্যায়ন, স্থিতিশীলকরণ এবং প্রয়োজনে দ্রুত রেফারেল।",
    icon: "activity" as const,
    tint: "coral" as const,
  },
  {
    id: "procedures",
    title: "মাইনর প্রসিডিউর",
    description: "চেম্বারে ক্ষত পরিচর্যা, সেলাই ও ছোটখাটো প্রসিডিউর।",
    icon: "bandage" as const,
    tint: "green" as const,
  },
  {
    id: "preventive",
    title: "প্রতিরোধমূলক স্বাস্থ্যসেবা",
    description: "নিয়মিত চেকআপ, জীবনযাত্রার পরামর্শ এবং রোগ প্রতিরোধে সচেতনতা।",
    icon: "heart" as const,
    tint: "teal" as const,
  },
] as const;

export const aboutPoints = [
  {
    title: "রোগীকে অগ্রাধিকার",
    body: "প্রতিটি পরামর্শ শুরু হয় মন দিয়ে শোনা এবং রোগীর প্রেক্ষাপট বোঝার মধ্য দিয়ে।",
  },
  {
    title: "প্রমাণভিত্তিক চিকিৎসা",
    body: "পরীক্ষা ও ওষুধ নির্ধারণ হয় চলতি ক্লিনিক্যাল গাইডলাইন অনুসারে।",
  },
  {
    title: "২৪/৭ নির্দেশনা",
    body: "জরুরি পরামর্শ ও চেম্বার ফলোআপ একই বিশেষজ্ঞের তত্ত্বাবধানে থাকে।",
  },
] as const;

export const bookingSteps = [
  { title: "সিরিয়াল নিন", body: "চেম্বার নম্বরে কল করুন অথবা সন্ধ্যা ৬টার আগে ডেস্কে আসুন।" },
  { title: "চেম্বারে আসুন", body: "আগের রিপোর্ট, ওষুধের তালিকা এবং প্রয়োজনে এনআইডি সাথে আনুন।" },
  { title: "পরামর্শ নিন", body: "স্পষ্ট চিকিৎসা পরিকল্পনা, প্রেসক্রিপশন ও পরবর্তী সাক্ষাৎ নিয়ে ফিরে যান।" },
] as const;
