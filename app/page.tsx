'use client';
import { useState } from 'react';
import { allTerms, Term } from '../data/terms';
import CourseSelector from './components/CourseSelector';
import TypingEngine from './components/TypingEngine';

const courses = [
  'FreshmanBio',
  'SophomoreChem',
  'APBio',
  'APChem',
  'APPhys',
  'APPhysC',
  'APPhysMech',
  'APES',
  'APPhys2',
];

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const courseTerms = allTerms.filter(t => t.course === selectedCourse);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start">
      <CourseSelector courses={courses} selected={selectedCourse} setSelected={setSelectedCourse} />
      <TypingEngine terms={courseTerms} />
    </main>
  );
}
