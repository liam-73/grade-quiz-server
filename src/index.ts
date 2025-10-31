import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { quizRoute } from './routes/quiz';
import { gradeRoute } from './routes/grade';
import { Bindings } from './types/env';

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', cors());

app.route('/quiz', quizRoute);
app.route('/grade', gradeRoute);

export default app;
