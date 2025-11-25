

import { allTerms } from "../../../data/terms";
import UnitSelector from "../../components/UnitSelector";
import { useRouter } from "next/navigation";

export function generateStaticParams() {
  const courses = Array.from(new Set(allTerms.map(t => t.course)));
  return courses.map(course => ({ course }));
}

export default function CoursePage({ params }: { params: { course: string } }) {
  const { course } = params;
  const router = useRouter();

  const units = Array.from(
    new Set(
      allTerms
        .filter(t => t.course === course)
        .map(t => t.unit)
    )
  );

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-6xl my-8">{course} — Select a Unit</h1>
      <UnitSelector
        units={units}
        selected=""
        setSelected={(u) =>
          router.push(`/unit/${course}/${encodeURIComponent(u)}`)
        }
      />
    </main>
  );
}
