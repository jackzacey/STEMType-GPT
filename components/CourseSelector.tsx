export default function CourseSelector({
  courses,
  selected,
  setSelected,
}: {
  courses: string[];
  selected: string;
  setSelected: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center my-8">
      {courses.map(course => (
        <button
          key={course}
          onClick={() => setSelected(course)}
          className={`px-6 py-3 rounded-xl border-2 ${
            selected === course ? 'bg-cyan-500/20 border-cyan-400 text-white' : 'border-gray-400 text-gray-300'
          }`}
        >
          {course}
        </button>
      ))}
    </div>
  );
}
