export interface RecruiterItem {
  id: string;
  name: string;
  type: string;
  category?: string;
}

export const recruitersData: RecruiterItem[] = [
  { id: 'meesho', name: 'Meesho', type: 'meesho', category: 'E-commerce & Logistics' },
  { id: 'lotte-1', name: 'LOTTE INDIA', type: 'lotte', category: 'Manufacturing & FMCG' },
  { id: 'pratilipi', name: 'Pratilipi', type: 'pratilipi', category: 'Digital Media' },
  { id: 'tata-housing', name: 'TATA HOUSING', type: 'tata-housing', category: 'Infrastructure & Projects' },
  { id: 'setu', name: 'SETU', type: 'setu', category: 'Financial Technology' },
  { id: 'tata-motors', name: 'TATA MOTORS', type: 'tata-motors', category: 'Automotive & Heavy Industry' },
  { id: 'maruti-suzuki', name: 'MARUTI SUZUKI', type: 'maruti-suzuki', category: 'Automotive Engineering' },
  { id: 'hero-motocorp', name: 'Hero MotoCorp', type: 'hero-motocorp', category: 'Two-Wheeler Manufacturing' },
  { id: 'mahindra', name: 'Mahindra', type: 'mahindra', category: 'Automotive & Farm Equipment' },
  { id: 'schneider', name: 'Schneider Electric', type: 'schneider', category: 'Energy & Electrical' },
  { id: 'havells', name: 'HAVELLS', type: 'havells', category: 'Electrical & Power Equipment' },
  { id: 'lt', name: 'Larsen & Toubro', type: 'lt', category: 'Engineering & Construction' },
  { id: 'bhel', name: 'BHEL', type: 'bhel', category: 'Heavy Electricals' },
  { id: 'honda', name: 'HONDA', type: 'honda', category: 'Automotive Precision' },
  { id: 'bajaj', name: 'BAJAJ AUTO', type: 'bajaj', category: 'Automotive & Power' },
  { id: 'voltas', name: 'VOLTAS', type: 'voltas', category: 'A TATA Enterprise • HVAC & RAC' },
];

