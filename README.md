# Grade Quiz Backend

A **serverless backend** for the Full-Stack Quiz Challenge, built with **Hono (TypeScript)** and deployable to **Cloudflare Workers**.  
Provides endpoints for fetching quiz questions and grading answers using **mock data** (no database).

---

## 🚀 Features

- **GET /api/quiz** – returns 8–12 mock quiz questions
- **POST /api/grade** – accepts answers and returns score and per-question results
- Handles multiple question types: `text`, `radio`, `checkbox`
- Input validation with proper error handling (400 status for invalid payloads)
- Fully serverless, optimized for Cloudflare Workers

---

## 🏗️ Architecture

- **Backend**: Hono (TypeScript) running on Cloudflare Workers
- **Routing**: Modular route handlers (`quizRoute`, `gradeRoute`)
- **Validation**: Simple runtime validation for POST payloads
- **Deployment target**: Cloudflare Workers

## Worker Structure:

```
/src
├── index.ts # Main Hono app, mounts routes
├── routes/
│ ├── quiz.ts # GET /quiz
│ └── grade.ts # POST /grade
└── types/
└── env.ts # Worker environment bindings
```

---

## ⚡ Installation

```bash
# Clone the repo
git clone git@github.com:liam-73/grade-quiz-server.git
cd grade-quiz-server

# Install dependencies (pnpm)
pnpm install
```

## 🔧 Running Locally

# Start the worker locally

```
wrangler dev
```

- Default local URL: http://localhost:8787

## ⚡ Deployment

### Login to Cloudflare

```
wrangler login
```

### Deploy worker

```
wrangler deploy
```

## 📝 Design Decisions

- Hono: lightweight, fast, and perfect for serverless endpoints.
- Mock data: simplifies deployment, aligns with challenge constraints (no DB).
- TypeScript types for Bindings: ensured type safety with index signature [key: string]: any to satisfy Hono v3 requirements.
- Validation: returns 400 for invalid payloads to prevent server errors.

## 📦 Libraries Used

- Hono – Serverless backend framework
- TypeScript – Type safety
- Wrangler – Deployment to Cloudflare Workers
