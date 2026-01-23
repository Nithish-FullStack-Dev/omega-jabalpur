export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  points: string[];
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Digital PET-CT – Artificial Intelligence (AI) Powered",
    subtitle: "INDIA'S FIRST & WORLD'S BEST",
    points: [
      "A revolution in imaging for cancer diagnosis.",
      "India’s first true digital PET-CT with LYSO digital PET detector.",
      "AI-driven imaging for accurate diagnosis and staging of cancer.",
      "65% less radiation exposure compared to analog PET-CT.",
      "Whole body scan in just a few minutes.",
      "Detection of tiny lesions for rapid diagnosis.",
      "Superior resolution & shortest scan acquisition time.",
      "One-stop solution for cardiac imaging including CT coronary angio.",
      "320-slice CT useful for early cardiology diagnosis.",
    ],
    image: "/images/expert-treatment/Section Image.png",
  },
  {
    id: 2,
    title: "Brachytherapy",
    points: [
      "Brachytherapy, or internal radiation therapy, is an important modality of treatment for cancers. It can be used alone or with external beam radiation therapy (done on linear accelerators). Brachy in Greek means short",
    ],
    image: "/images/expert-treatment/Section Image-1.png",
  },
  {
    id: 3,
    title: "CyberKnife VSI - Artificial Intelligence (AI) Powered",
    subtitle:
      "Only State of art Robotic Radiosurgery System in twin Telugu States",
    points: [
      "A revolution in Cancer treatment.",
      "The only whole body (100% of the body covered robotic radiosurgery system in the world, designed to treat tumors anywhere in the body",
      "Best treatment for specific conditions such as trigeminal neuralgia and vascular malformations.",
      "Shortest treatment duration of 1-5 days as against 30-40 days for traditional radiation freatment.",
      "Delivers high cancer-killing dose of radiation with minimal side effects.",
      "Provides a better, less invasive method of treatment for benign lesions.",
      "Motion adaptive delivery technology accommodates all forms of patient and tumor motion during treatment.",
    ],
    image: "/images/expert-treatment/Section Image-3.png",
  },
  {
    id: 4,
    title: "Digital PET-MR - Artificial Intelligence (AI) Powered",
    subtitle: "INDIA'S FIRST & WORLD'S BEST",
    points: [
      "A revolution in imaging for Cancer diagnosis.",
      "Al driven imaging for accurate diagnosis and staging of cancer.",
      "Best treatment for specific conditions such as trigeminal neuralgia and vascular malformations.",
      "90% less radiation exposure compared to analog PET-CT.",
      "Superior resolution & Shortest Scan acquisition time.",
      "One-stop shop for accurate imaging evaluation of Brain, Head and Neck tumor, HCC, lymphoma, melanoma.prostate gland tumor, pelvic malignancy, bone & soft tissue tumors,",
      "Most useful in evaluation for suspected tumor recurrence and newly developed distant metastasis.",
      "In addition to traditional F-18FDG. PET-MR imaging new agents such as FDOPA, Gallium-68 PSMA, Gallium-68 DOTANOC, Galium-68 DOTATATE & Gallium-68 FAPI are used to diagnose and stage various types of cancers.",
    ],
    image: "/images/expert-treatment/Section Image-3.png",
  },
  {
    id: 5,
    title: "ETHOS - Artificial Intelligence (AI) Powered",
    subtitle: "INDIA'S FIRST & WORLD'S BEST",
    points: [
      "A revolution in cancer radiation treatment",
      "Al driven adaptive radiation therapy enabling personalized patient treatment",
      "Diagnostic quality images during planning and treatment.",
      "On couch adaptive planning, ensures precise dose delivery.",
      "ETHOS a machine which sees, thinks, adapts, plans & delivers. treatment in a few minutes. (POWER OF AI)",
      "Designed to deliver cancer care Precisely, Quickly & Comfortably.",
    ],
    image: "/images/expert-treatment/Section Image-3.png",
  },
  {
    id: 6,
    title: "AngioTab 9030DRF",
    subtitle:
      "A Truly dual capability Digital Radio Fluoro system. AngioTAB DRF is highly efficient system for conducting a variety of examinations with exceptional image quality at very low dose.",
    points: [
      "Versatile applications capability: Interventional procedures, ERCP, Myelography, Venography. Cholangiography, etc.",
      "Complete Radiography and Fluoroscopy with single fixed Detector.",
      "Excellent image quality with substantial dose reduction.",
      "Advanced pre and post-processing features.",
      "Head-to-toe coverage with remote and tableside control.",
    ],
    image: "/images/expert-treatment/Section Image-3.png",
  },
];

export { slides };
