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
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* BLACK HOLE BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 -z-50 w-full h-full object-cover"
        poster="https://svs.gsfc.nasa.gov/vis/a010000/a014100/a014132/BHW_Disk_and_Corona.jpg"
        src="https://cdn.coverr.co/videos/coverr-black-hole-6628/1080p.mp4"
      />

      {/* OPTIONAL DARK OVERLAY FOR TEXT */}
      <div className="fixed inset-0 -z-40 bg-black/40 pointer-events-none" />

      {/* COURSE SELECTOR */}
      <CourseSelector courses={courses} selected={selectedCourse} setSelected={setSelectedCourse} />

      {/* TYPING ENGINE */}
      <TypingEngine terms={courseTerms} />
    </main>
  );
}
