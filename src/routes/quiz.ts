import { Hono } from 'hono';
import { seededShuffle } from '../services/quiz';
import { QUESTIONS } from '../data/questions';
import { Bindings } from '../types/env';

export const quizRoute = new Hono<{ Bindings: Bindings }>();

quizRoute.get('/', (c) => {
  const seed = Number(c.req.query('seed')) || Number(c.env?.QUIZ_SEED || 2025);

  return c.json({
    questions: seededShuffle(QUESTIONS, seed),
  });
});
