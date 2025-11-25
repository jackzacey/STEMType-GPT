import React from 'react';

type Props = {
  term: string;
  chars: string[];
  states: ('untyped' | 'correct' | 'incorrect')[];
  cursor: number;
  extra: string;
  isPerfect: boolean;
};

export default function TypingDisplay({ term, chars, states, cursor, extra }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-8 font-mono select-none">
      <div className="text-4xl md:text-6xl lg:text-8xl text-center">
        {chars.map((ch, i) => (
          <span
            key={i}
            className={`relative inline-block ${
              states[i] === 'correct'
                ? 'text-green-400 font-bold'
                : states[i] === 'incorrect'
                ? 'text-red-500 underline decoration-red-500/70 decoration-2'
                : 'text-gray-400'
            }`}
          >
            {ch === ' ' ? '\u00A0' : ch}
            {i === cursor && (
              <span className="absolute -left-1 top-0 h-full w-1.5 bg-cyan-400 animate-pulse" />
            )}
          </span>
        ))}
        {extra.split('').map((ch, i) => (
          <span key={`extra-${i}`} className="text-red-500 bg-red-500/20 px-1 rounded font-bold">
            {ch}
          </span>
        ))}
      </div>
    </div>
  );
}
