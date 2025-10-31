export const treatments = [
  { id: 1, title: 'Ear Infection' },
  { id: 2, title: 'Ear Injury' },
  { id: 3, title: 'Hearing Loss' },
  { id: 4, title: 'Tinnitus (Ringing in the Ears)' },
  { id: 5, title: 'Dizziness & Vertigo' },
  { id: 6, title: 'Sinusitis (Sinus Infection)' },
  { id: 7, title: 'Allergy Rhinitis' },
  { id: 8, title: 'Nasal Fractures' },
  { id: 9, title: 'Nose Bleeding' },
  { id: 10, title: 'Nasal Polyps' },
  { id: 11, title: 'Tonsillitis' },
  { id: 12, title: 'Throat Cancer' },
  { id: 13, title: 'Voice Disorders' },
  { id: 14, title: 'Swallowing Disorders' },
  { id: 15, title: 'Sore Throat (Pharyngitis)' },
  { id: 16, title: 'Head and Neck Cancer' },
  { id: 17, title: 'Thyroid Disorders' },
];

export const surgeryList = [
  {
    id: 1,
    url: '#',
    icon: 'FaGlobe',
    src: null,
    title: 'Global Distribution Network',
    description: 'Leveraging a robust global network to ensure timely and secure delivery of pharmaceutical products worldwide.',
  },
  {
    id: 2,
    url: '#',
    icon: 'FaCube',
    src: null,
    title: 'Supply Chain Optimization',
    description: 'Implementing advanced logistics and supply chain strategies for maximum efficiency and cost-effectiveness.',
  },
  {
    id: 3,
    url: '#',
    icon: 'FaShieldAlt',
    src: null,
    title: 'Quality Assurance & Compliance',
    description: 'Adhering to the highest industry standards and regulatory compliance for all our pharmaceutical operations.',
  },
  {
    id: 4,
    url: '#',
    icon: 'FaChartLine',
    src: null,
    title: 'Market Access & Expansion',
    description: 'Facilitating market entry and expansion for pharmaceutical manufacturers into diverse global markets.',
  },
];

export const aboutUs = [
  { id: 1, title: 'Dr. Jack Smith', url: '#' },
  { id: 2, title: 'Gallery', url: '#' },
];

export const aboutUsFooter = [
  { id: 1, title: 'Home', url: '#' },
  { id: 2, title: 'About Us', url: '#' },
  { id: 3, title: 'Our Services', url: '#' },
  { id: 4, title: 'Contact Us', url: '#' },
];

export const treatmentsFooter = [
  { id: 1, title: 'Hearing Loss' },
  { id: 2, title: 'Ear Infection' },
  { id: 3, title: 'Dizziness & Vertigo' },
  { id: 4, title: 'Allergy Rhinitis' },
  { id: 5, title: 'Swallowing Disorders' },
];

export const surgery = [
  {
    id: 1,
    title: 'Ear Surgery',
    children: [
      { id: '1-1', title: 'Tympanoplasty Surgery' },
      { id: '1-2', title: 'Mastoid Surgery' },
      { id: '1-3', title: 'Stapes Surgery' },
      { id: '1-4', title: 'Myringotomy Surgery' },
    ],
  },
  {
    id: 2,
    title: 'Nose Surgery',
    children: [
      { id: '2-1', title: 'Adenoidectomy Surgery' },
      { id: '2-2', title: 'Septoplasty Surgery' },
      { id: '2-3', title: 'Sinus Surgery' },
      { id: '2-4', title: 'Skull Base Surgery' },
      { id: '2-5', title: 'Pituitary Surgery' },
      { id: '2-6', title: 'Endonasal Dacryocystorhinostomy Surgery' },
    ],
  },
  {
    id: 3,
    title: 'Throat Surgery',
    children: [
      { id: '3-1', title: 'Tonsillectomy Surgery' },
      { id: '3-2', title: 'Thyroid Surgery' },
      { id: '3-3', title: 'Parotid Surgery' },
      { id: '3-4', title: 'Microlaryngeal Surgery' },
      { id: '3-5', title: 'Bronchoscopy Surgery' },
      { id: '3-6', title: 'Direct Laryngoscopy & Biopsy Surgery' },
    ],
  },
  {
    id: 4,
    title: 'Head & Neck Surgery',
    children: [], // keeps structure consistent
  },
];
