export type QuestionType = 'text' | 'checkbox' | 'radio';

export type Question = {
  id: number;
  question: string;
  type: QuestionType;
  options?: string[];
  answer: number | number[] | string;
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'radio',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'Home Tool Markup Language',
      'Hyper Transfer Machine Logic',
      'Hyperlink and Text Markup Language',
    ],
    answer: 0,
  },
  {
    id: 2,
    type: 'checkbox',
    question: 'Select valid CSS properties',
    options: ['padding', 'mouse', 'margin', 'flex'],
    answer: [0, 2, 3],
  },
  {
    id: 3,
    type: 'text',
    question: 'What language runs in the browser?',
    answer: 'javascript',
  },
  {
    id: 4,
    type: 'radio',
    question: 'Which HTML tag is used to include JavaScript?',
    options: ['<js>', '<script>', '<javascript>', '<code>'],
    answer: 1,
  },
  {
    id: 5,
    type: 'checkbox',
    question: 'Which are JavaScript frameworks?',
    options: ['React', 'Laravel', 'Vue', 'Angular'],
    answer: [0, 2, 3],
  },
  {
    id: 6,
    type: 'text',
    question: 'What protocol does the web primarily use?',
    answer: 'http',
  },
  {
    id: 7,
    type: 'radio',
    question: 'Which storage is key/value and persists until cleared?',
    options: ['SessionStorage', 'LocalStorage', 'Cookies', 'RAM'],
    answer: 1,
  },
  {
    id: 8,
    type: 'checkbox',
    question: 'Choose valid HTTP methods',
    options: ['GET', 'UNLOCK', 'POST', 'PUSH'],
    answer: [0, 2],
  },
  {
    id: 9,
    type: 'radio',
    question: 'Which Git command stages changes?',
    options: ['git commit', 'git add', 'git push', 'git init'],
    answer: 1,
  },
  {
    id: 10,
    type: 'text',
    question: 'What does JSON stand for?',
    answer: 'javascript object notation',
  },
  {
    id: 11,
    type: 'radio',
    question: 'Which acts as runtime for JavaScript?',
    options: ['Node.js', 'Python', 'Java', 'C#'],
    answer: 0,
  },
  {
    id: 12,
    type: 'checkbox',
    question: 'Select SQL databases',
    options: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    answer: [1, 2],
  },
  {
    id: 13,
    type: 'text',
    question: 'What does CSS stand for?',
    answer: 'cascading style sheets',
  },
  {
    id: 14,
    type: 'radio',
    question: 'React uses ___ to manage UI updates efficiently',
    options: ['Virtual DOM', 'Shadow DOM', 'Physical DOM', 'Direct DOM'],
    answer: 0,
  },
  {
    id: 15,
    type: 'checkbox',
    question: 'Which are primitives in JS?',
    options: ['String', 'Object', 'Number', 'Boolean'],
    answer: [0, 2, 3],
  },
  {
    id: 16,
    type: 'radio',
    question: 'Which HTTP status code means Not Found?',
    options: ['200', '301', '404', '500'],
    answer: 2,
  },
  {
    id: 17,
    type: 'text',
    question: 'Name the version control system often used with GitHub:',
    answer: 'git',
  },
  {
    id: 18,
    type: 'radio',
    question: 'Which HTML element contains metadata?',
    options: ['<html>', '<head>', '<meta>', '<footer>'],
    answer: 1,
  },
  {
    id: 19,
    type: 'checkbox',
    question: 'Which are valid flexbox properties?',
    options: ['justify-content', 'align-items', 'grid-template', 'display'],
    answer: [0, 1, 3],
  },
  {
    id: 20,
    type: 'text',
    question: 'Which database type uses collections instead of tables?',
    answer: 'nosql',
  },
];
