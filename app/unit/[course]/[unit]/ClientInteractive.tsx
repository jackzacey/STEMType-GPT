// app/unit/[course]/[unit]/ClientInteractive.tsx
"use client";

import { useState } from "react";

export default function ClientInteractive({ part }: { part: { course: string; unit: string } }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Interactive UI for <strong>{part.course}</strong> / <strong>{part.unit}</strong>
      </p>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
