import { QUESTIONS } from '../data/questions';

export function seededShuffle<T>(arr: T[], seed = 123): T[] {
  const res = [...arr];
  let m = 123456789;
  let s = seed;

  for (let i = res.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % m;
    const j = s % (i + 1);
    [res[i], res[j]] = [res[j], res[i]];
  }

  return res;
}

export function gradeQuiz(answers: Record<number, unknown>) {
  let score = 0;

  const results = QUESTIONS.map((q) => {
    const userAnswer = answers[q.id];

    let correct = false;

    switch (q.type) {
      case 'text':
        correct =
          typeof userAnswer === 'string' &&
          userAnswer.trim().toLowerCase() ===
            (q.answer as string).trim().toLowerCase();
        break;

      case 'radio':
        correct = userAnswer === q.answer;
        break;

      case 'checkbox':
        if (!Array.isArray(userAnswer)) break;
        const expected = [...(q.answer as number[])].sort();
        const received = [...userAnswer].sort();
        correct =
          expected.length === received.length &&
          expected.every((i, idx) => i === received[idx]);
        break;
    }

    if (correct) score++;
    return { id: q.id, correct };
  });

  return {
    score,
    total: QUESTIONS.length,
    results,
  };
}
