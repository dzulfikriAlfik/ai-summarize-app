# Synoptiq

AI-powered intelligent text summarization platform built with React, NestJS, and OpenAI.

Synoptiq helps users generate concise summaries, extract key insights, and analyze sentiment from long-form text using modern AI workflows and structured response validation.

---

# Features

- AI-powered text summarization
- Keyword extraction
- Sentiment analysis
- Structured JSON AI responses
- Prompt engineering architecture
- AI response validation with Zod
- Error handling & reliability layer
- Toast feedback interaction
- Modular frontend & backend architecture
- Environment-based configuration

---

# Tech Stack

## Frontend
- React
- TypeScript
- Vite
- TailwindCSS

## Backend
- NestJS
- TypeScript
- OpenAI SDK
- Zod

---

# Architecture

```txt
Frontend (React)
    ↓
NestJS API
    ↓
OpenAI Service
    ↓
Structured AI Response
    ↓
Validation Layer (Zod)
```

---

# AI Engineering Concepts Implemented

- Prompt Engineering
- Structured Output Enforcement
- Temperature Control
- AI Response Validation
- Error Handling
- Dependency Injection
- Modular Architecture
- Environment Configuration
- AI UX Patterns

---

# Project Structure

```txt
ai-summarize-app/
│
├── frontend/
│
├── backend/
│
└── README.md
```

---

# Environment Variables

## Frontend

```env
VITE_API_BASE_URL=http://localhost:3000
```

## Backend

```env
OPENAI_API_KEY=your_openai_api_key
```

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## Backend Setup

```bash
cd backend

npm install

npm run start:dev
```

Backend runs on:

```txt
http://localhost:3000
```

---

# Learning Objectives

This project was built to explore practical AI product engineering concepts, including:

- AI integration workflows
- Prompt engineering
- Structured AI output
- Reliability engineering
- Frontend AI UX
- Backend modular architecture
- AI response validation

---

# Future Improvements

- Streaming AI responses
- AI usage analytics
- Token consumption tracking
- Authentication & user accounts
- Summary history
- Export summaries
- Rate limiting
- AI provider abstraction layer

---

# License

MIT