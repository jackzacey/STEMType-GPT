// app/unit/[course]/[unit]/page.tsx
export async function generateStaticParams() {
  // compute all { course, unit } combinations
  return [
    { course: "math", unit: "1" },
    { course: "science", unit: "2" },
  ];
}

export default async function UnitPage({ params }) {
  const { course, unit } = params;
  // this part runs on server
  return (
    <div>
      <h1>Unit {unit} in {course}</h1>
      <ClientInteractive part={{course,unit}} />
    </div>
  );
}

// app/unit/[course]/[unit]/ClientInteractive.tsx
"use client";
import { useState } from "react";
export default function ClientInteractive({ part }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Interactive UI for {part.course} / {part.unit}</p>
      <button onClick={() => setCount(count+1)}>Clicked {count} times</button>
    </div>
  );
}
