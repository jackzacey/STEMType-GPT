// app/unit/[course]/[unit]/page.tsx
import ClientInteractive from "./ClientInteractive"; // <<< THIS WAS MISSING

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
      <ClientInteractive part={{ course, unit }} />
    </div>
  );
}
