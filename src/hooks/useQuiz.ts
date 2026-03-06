import { useState, useEffect, useCallback } from 'react';

import { storage } from '@/lib/storage';

/**
 * Manage quiz state for a module via IndexedDB.
 * Tracks answered questions and scores.
 */
export function useQuiz(module: string) {
  const [stats, setStats] = useState({ correct: 0, total: 0, accuracy: 0 });
  const [answeredMap, setAnsweredMap] = useState<Map<string, string>>(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      storage.quiz.getModuleStats(module),
      storage.quiz.getLatestAttempts(module),
    ]).then(([s, attempts]) => {
      if (!cancelled) {
        setStats(s);
        const map = new Map<string, string>();
        for (const [qId, attempt] of attempts) {
          map.set(qId, attempt.selectedAnswer);
        }
        setAnsweredMap(map);
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, [module]);

  const recordAnswer = useCallback(
    async (questionId: string, selectedAnswer: string, correctAnswer: string, correct: boolean) => {
      await storage.quiz.record(module, questionId, selectedAnswer, correctAnswer, correct);
      setStats((prev) => ({
        correct: prev.correct + (correct ? 1 : 0),
        total: prev.total + 1,
        accuracy: Math.round(((prev.correct + (correct ? 1 : 0)) / (prev.total + 1)) * 100),
      }));
      setAnsweredMap((prev) => new Map(prev).set(questionId, selectedAnswer));
    },
    [module],
  );

  const isAnswered = useCallback(
    (questionId: string) => answeredMap.has(questionId),
    [answeredMap],
  );

  return { stats, recordAnswer, isAnswered, loading };
}
