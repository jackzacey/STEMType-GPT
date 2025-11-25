export type Course =
  | 'FreshmanBio'
  | 'SophomoreChem'
  | 'APBio'
  | 'APChem'
  | 'APPhys'
  | 'APPhysC'
  | 'APPhysMech'
  | 'APES'
  | 'APPhys2';

export type Term = {
  course: Course;
  term: string;
  definition: string;
};

export const allTerms: Term[] = [
  { course: 'FreshmanBio', term: 'Mitosis', definition: 'Cell division producing identical daughter cells' },
  { course: 'SophomoreChem', term: 'Covalent Bond', definition: 'Bond formed by sharing electrons' },
  { course: 'APBio', term: 'Photosynthesis', definition: 'Process converting light to chemical energy' },
  // Add thousands more here...
];
