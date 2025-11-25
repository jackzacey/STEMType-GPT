import TypingDisplay from './TypingDisplay';
import { useTypingTest } from './useTypingTest';
import { Term } from '../data/terms';

export default function TypingEngine({ terms }: { terms: Term[] }) {
  const { term, chars, states, cursor, extra, isPerfect } = useTypingTest(terms);

  if (!term) return <div className="flex min-h-screen items-center justify-center text-white text-6xl">ALL DONE 🎉</div>;

  return <TypingDisplay term={term.definition} chars={chars} states={states} cursor={cursor} extra={extra} isPerfect={isPerfect} />;
}
