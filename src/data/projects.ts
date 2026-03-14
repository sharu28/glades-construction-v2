export interface Project {
  id: string;
  title: string;
  type: string;
  location: string;
  servicesUsed: string[];
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'greenhill-close',
    title: 'Greenhill Close — New Build & Design',
    type: 'NEW BUILD',
    location: 'London',
    servicesUsed: ['Design & Build', 'Interior Designing & Imaging'],
    description: 'A comprehensive new build project focusing on structural integrity and modern design.',
    image: '/images/project-cards/greenhill-close.jpg'
  },
  {
    id: 'sandy-lodge-road',
    title: 'Sandy Lodge Road — Remodelling',
    type: 'REMODEL',
    location: 'Middlesex',
    servicesUsed: ['Complete Refurbishments', 'Extensions & Basement Construction'],
    description: 'Extensive remodelling of an existing property, including structural upgrades and layout optimization.',
    image: '/images/project-cards/sandy-lodge-road.jpg'
  },
  {
    id: 'the-manor-house',
    title: 'The Manor House',
    type: 'ARCHITECTURE & DESIGN',
    location: 'Surrey',
    servicesUsed: ['Planning & Structural Drawings', 'Design & Build'],
    description: 'Architectural design and structural planning for a luxury manor house.',
    image: '/images/project-cards/the-manor-house.jpg'
  },
  {
    id: 'swyncombe-avenue',
    title: 'Swyncombe Avenue — Remodelling',
    type: 'REMODEL',
    location: 'London',
    servicesUsed: ['Complete Refurbishments'],
    description: 'Full property transformation with contemporary finishes and structural enhancements.',
    image: '/images/project-cards/swyncombe-avenue.jpeg'
  },
  {
    id: 'russell-road',
    title: 'Russell Road — Interior Designing',
    type: 'INTERIOR DESIGN',
    location: 'London',
    servicesUsed: ['Interior Designing & Imaging'],
    description: 'Tailored interior design featuring custom 3D rendering and material selection.',
    image: '/images/project-cards/russell-road.jpg'
  },
  {
    id: 'copsewood-way',
    title: 'Copsewood Way — New Build',
    type: 'NEW BUILD',
    location: 'Middlesex',
    servicesUsed: ['Design & Build', 'Planning & Structural Drawings'],
    description: 'A ground-up residential new build engineered to exacting specifications.',
    image: '/images/project-cards/copsewood-way.jpg'
  },
  {
    id: 'bedford-road-new-build',
    title: 'Bedford Road — New Build & Landscaping',
    type: 'MIXED',
    location: 'London',
    servicesUsed: ['Design & Build', 'Landscaping Designs, Imaging & Construction'],
    description: 'Integrated new build and bespoke landscaping project.',
    image: '/images/project-cards/bedford-road-new-build.jpg'
  },
  {
    id: 'park-royal',
    title: 'Park Royal — Commercial',
    type: 'COMMERCIAL',
    location: 'London',
    servicesUsed: ['Commercial Civil Engineering'],
    description: 'Large-scale commercial civil engineering project including site preparation and infrastructure.',
    image: '/images/project-cards/park-royal.jpg'
  },
  {
    id: 'bedford-road-remodelling',
    title: 'Bedford Road — Remodelling',
    type: 'REMODEL',
    location: 'London',
    servicesUsed: ['Complete Refurbishments', 'Extensions & Basement Construction'],
    description: 'Structural upgrades and basement construction for an existing residential property.',
    image: '/images/project-cards/bedford-road-remodelling.jpg'
  }
];
