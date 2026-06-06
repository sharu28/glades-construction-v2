export interface Service {
  id: string;
  number: string;
  title: string;
  image: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'design-and-build',
    number: '01',
    title: 'Design & Build',
    image: 'https://lh3.googleusercontent.com/d/1Vey_tdb0TQL1JURlbvfQ29DfkuA1vPVd=w1200',
    description: 'End-to-end from architectural concept through construction completion, all under one roof.'
  },
  {
    id: 'extensions-basements',
    number: '02',
    title: 'Extensions & Basement Construction',
    image: 'https://lh3.googleusercontent.com/d/1fmqC3BFNX1Wc28CPJv6CCThq4vQVpCmL=w1200',
    description: 'Custom extensions, home offices, living areas, and basements with full planning permissions management.'
  },
  {
    id: 'refurbishments',
    number: '03',
    title: 'Complete Refurbishments',
    image: 'https://lh3.googleusercontent.com/d/1vPNS00_fTf8TZmRCifJpF0sDhW5tR0Ao=w1200',
    description: 'Property transformation — structural upgrades, layout optimization, detailed finishes; contemporary or traditional.'
  },
  {
    id: 'planning-structural',
    number: '04',
    title: 'Planning & Structural Drawings',
    image: 'https://lh3.googleusercontent.com/d/1fub7fkvWttmEro0T3Szfb_q0ZYbKlJzl=w1200',
    description: 'CAD/BIM/CGI services; site analysis, feasibility studies, structural detailing, high-quality 3D visualizations.'
  },
  {
    id: 'interior-designing',
    number: '05',
    title: 'Interior Designing & Imaging',
    image: 'https://lh3.googleusercontent.com/d/1RPpSG0RXgZD5NcfqtXOPdJYWan3w8yN7=w1200',
    description: 'Tailored interiors with 3D rendering; material selection, lighting design, layout optimization.'
  },
  {
    id: 'commercial-civil',
    number: '06',
    title: 'Commercial Civil Engineering',
    image: 'https://lh3.googleusercontent.com/d/13MUoFz-zxeJhVhEPq_KgvGLc-_JZFEwh=w1200',
    description: 'Large-scale commercial projects — warehouses, office spaces; site preparation, structural engineering, infrastructure.'
  },
  {
    id: 'landscaping',
    number: '07',
    title: 'Landscaping Designs, Imaging & Construction',
    image: 'https://lh3.googleusercontent.com/d/1LqmM3qCu-NAdfcxCeBNz_gt2Riqg8zCg=w1200',
    description: 'Bespoke outdoor spaces — gardens, patios, driveways; 3D visualization; sustainable and premium materials.'
  }
];
