export interface RecruiterItem {
  id: string;
  name: string;
  type: 'meesho' | 'lotte' | 'pratilipi' | 'tata' | 'setu';
}

export const recruitersData: RecruiterItem[] = [
  { id: 'meesho', name: 'Meesho', type: 'meesho' },
  { id: 'lotte-1', name: 'LOTTE INDIA', type: 'lotte' },
  { id: 'pratilipi', name: 'Pratilipi', type: 'pratilipi' },
  { id: 'lotte-2', name: 'LOTTE INDIA', type: 'lotte' },
  { id: 'tata-housing', name: 'TATA HOUSING', type: 'tata' },
  { id: 'setu', name: 'SETU', type: 'setu' },
];
