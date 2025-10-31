import { Hono } from 'hono';
import { z } from 'zod';
import { gradeQuiz } from '../services/quiz';
import { Bindings } from '../types/env';

export const gradeRoute = new Hono<{ Bindings: Bindings }>();

const GradeSchema = z.object({
  answers: z.record(z.string().regex(/^\d+$/), z.unknown()),
});

gradeRoute.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const parsed = GradeSchema.safeParse(body);

    if (!parsed.success) {
      return c.json(
        {
          error: 'Invalid payload',
          details: parsed.error.flatten().fieldErrors,
        },
        400,
      );
    }

    const normalizedAnswers = Object.fromEntries(
      Object.entries(parsed.data.answers).map(([key, value]) => [
        Number(key),
        value,
      ]),
    );

    const result = gradeQuiz(normalizedAnswers);
    return c.json(result);
  } catch {
    return c.json({ error: 'Unexpected error' }, 500);
  }
});
