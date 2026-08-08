export interface CompanyAboutData {
  pageTitle: string;
  description: string;
  story: string;
  vision: string;
  whyTitle: string;
  ctaTitle: string;
  ctaDescription: string;
}

export const companyContent: Record<string, CompanyAboutData> = {
  spectrum: {
    pageTitle: "About Spectrum",
    description:
      "Empowering students through academic excellence and structured learning.",

    story:
      "To help every student build strong fundamentals, improve analytical thinking, and achieve academic excellence through personalized coaching.",

    vision:
      "To become the most trusted tuition centre for CBSE, ICSE, and State Board students by delivering quality education and measurable academic success.",

    whyTitle: "Why Choose Spectrum?",
    ctaTitle: "Join the Spectrum Family",
    ctaDescription:
      "Take the next step in your academic journey with our expert guidance.",
  },

  pyramid: {
    pageTitle: "About Pyramid",
    description:
      "Building communication skills and professional confidence for students and working professionals.",

    story:
      "Pyramid focuses on spoken English, communication skills, and professional development programmes designed to help students and working professionals communicate with confidence.",

    vision:
      "Our vision is to help individuals communicate confidently, develop professional skills, and achieve their personal and career goals.",

    whyTitle: "Why Choose Pyramid?",
    ctaTitle: "Join the Pyramid Family",
    ctaDescription:
      "Build your communication skills and confidence with the right guidance.",
  },
};