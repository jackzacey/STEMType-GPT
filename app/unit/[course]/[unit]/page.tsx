import ClientInteractive from "./ClientInteractive"; // <<< ADD THIS

export async function generateStaticParams() {
  // compute all { course, unit } combinations
  return [
    { course: "math", unit: "1" },
    { course: "science", unit: "2" },
  ];
}

export default async function UnitPage({ params }) {
  const { course, unit } = params;
  return (
    <div>
      <h1>Unit {unit} in {course}</h1>
      <ClientInteractive part={{course,unit}} />
    </div>
  );
}
