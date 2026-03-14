export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'design-and-build',
    number: '01',
    title: 'Design & Build',
    description: 'End-to-end from architectural concept through construction completion, all under one roof.'
  },
  {
    id: 'extensions-basements',
    number: '02',
    title: 'Extensions & Basement Construction',
    description: 'Custom extensions, home offices, living areas, and basements with full planning permissions management.'
  },
  {
    id: 'refurbishments',
    number: '03',
    title: 'Complete Refurbishments',
    description: 'Property transformation — structural upgrades, layout optimization, detailed finishes; contemporary or traditional.'
  },
  {
    id: 'planning-structural',
    number: '04',
    title: 'Planning & Structural Drawings',
    description: 'CAD/BIM/CGI services; site analysis, feasibility studies, structural detailing, high-quality 3D visualizations.'
  },
  {
    id: 'interior-designing',
    number: '05',
    title: 'Interior Designing & Imaging',
    description: 'Tailored interiors with 3D rendering; material selection, lighting design, layout optimization.'
  },
  {
    id: 'commercial-civil',
    number: '06',
    title: 'Commercial Civil Engineering',
    description: 'Large-scale commercial projects — warehouses, office spaces; site preparation, structural engineering, infrastructure.'
  },
  {
    id: 'landscaping',
    number: '07',
    title: 'Landscaping Designs, Imaging & Construction',
    description: 'Bespoke outdoor spaces — gardens, patios, driveways; 3D visualization; sustainable and premium materials.'
  }
];
