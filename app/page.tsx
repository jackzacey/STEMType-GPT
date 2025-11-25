// app/page.tsx
'use client';

import { Course } from "./../data/terms";
import CourseSelector from "./components/CourseSelector";
import { useRouter } from "next/navigation";

const courses: Course[] = [
  "FreshmanBio",
  "SophomoreChem",
  "APBio",
  "APChem",
  "APPhys",
  "APPhysC",
  "APPhysMech",
  "APES",
  "APPhys2",
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-6xl my-8">Select a Course</h1>
      <CourseSelector
        courses={courses}
        selected=""
        setSelected={(c) => router.push(`/course/${c}`)}
      />
    </main>
  );
}
