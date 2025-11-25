import { useEffect, useState } from 'react';
import { Term } from '../data/terms';

type CharState = 'untyped' | 'correct' | 'incorrect';

export function useTypingTest(terms: Term[]) {
  const [termIndex, setTermIndex] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [states, setStates] = useState<CharState[]>([]);
  const [extra, setExtra] = useState('');

  const current = terms[termIndex];
  const chars = current?.definition.split('') || [];

  useEffect(() => {
    setCursor(0);
    setStates(chars.map(() => 'untyped'));
    setExtra('');
  }, [termIndex, current]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (!current) return;

      if (e.key === 'Backspace') {
        if (extra) setExtra(extra.slice(0, -1));
        else if (cursor > 0) {
          setStates(prev => {
            const next = [...prev];
            next[cursor - 1] = 'untyped';
            return next;
          });
          setCursor(c => c - 1);
        }
        return;
      }

      if (e.key === 'Enter') {
        if (cursor === chars.length && states.every(s => s === 'correct') && extra === '') {
          setTermIndex(i => i + 1);
        }
        return;
      }

      if (e.key.length === 1) {
        if (cursor < chars.length) {
          const correct = e.key === chars[cursor];
          setStates(prev => {
            const next = [...prev];
            next[cursor] = correct ? 'correct' : 'incorrect';
            return next;
          });
          setCursor(c => c + 1);
        } else {
          setExtra(prev => prev + e.key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cursor, states, extra, current]);

  const isPerfect = cursor === chars.length && states.every(s => s === 'correct') && extra === '';

  return { term: current, chars, states, cursor, extra, termIndex, totalTerms: terms.length, isPerfect };
}
