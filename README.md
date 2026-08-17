# GitHub Profile Searcher

A React + Vite app for searching GitHub usernames and browsing a user's public repositories. Built primarily as hands-on practice with React hooks rather than as a portfolio centerpiece.

## Features

- **Debounced search** — search GitHub profiles by username with a 300ms debounce, so a request isn't fired on every keystroke
- **Repo browsing** — view a searched user's public repos as cards, each showing name, description, primary language, star count, fork count, and visibility
- **Load more pagination** — repos are revealed 5 at a time via a "Load more" button rather than rendering the full list at once
- **Responsive grid** — repo cards reflow in a responsive CSS grid, styled with Tailwind CSS

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) — autocomplete component
- [Lucide](https://lucide.dev/) — icons
- [Lottie](https://lottiefiles.com/) — animations
- [GitHub REST API](https://docs.github.com/en/rest)

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd <your-project-folder>
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

## How It Works

1. Type a GitHub username into the search box.
2. The input is debounced (300ms) before hitting the GitHub API, so partial keystrokes don't each trigger a request.
3. Matching profiles are shown, capped at 5 results.
4. Selecting a profile fetches and displays their public repositories as cards.
5. Only 5 repos are shown at first — click **Load more** to reveal 5 more at a time.

## What I Practiced

This project's main goal was strengthening React hooks fundamentals:

- `useState` — coordinating search input, results, selected profile, and visible repo count
- `useRef` — persisting mutable values across renders
- `useMemo` — computing the debounced search value

## Screenshots

![App screenshot](./screenshot/screenshotDemo.png)
