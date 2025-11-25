// app/unit/[course]/[unit]/page.tsx
'use client';

import { allTerms } from "../../../../data/terms";
import TypingEngine from "../../../components/TypingEngine";

export function generateStaticParams() {
  return allTerms.map(t => ({
    course: t.course,
    unit: encodeURIComponent(t.unit),
  }));
}

export default function UnitPage({
  params,
}: {
  params: { course: string; unit: string };
}) {
  const { course, unit } = params;

  const realUnit = decodeURIComponent(unit);

  const termsForUnit = allTerms.filter(
    (t) => t.course === course && t.unit === realUnit
  );

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-5xl my-8">
        {course} — {realUnit}
      </h1>

      <TypingEngine terms={termsForUnit} />
    </main>
  );
}
