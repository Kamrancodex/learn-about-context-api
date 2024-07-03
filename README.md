# Elegant Context

Elegant Context is a React-based application that showcases a product listing with a shopping cart feature. The project demonstrates the use of various React hooks and features, including `useRef`, `forwardRef`, and `useImperativeHandle`. Additionally, it includes a game timer with different difficulty levels.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Game timer with multiple difficulty levels
- Product listing with detailed descriptions and images
- Shopping cart functionality with modal for cart display
- Modern UI design with responsive layout

## Tech Stack

- **Frontend:** React, JavaScript
- **Build Tool:** Vite
- **Styling:** CSS, Google Fonts

### React Features Used

- **State Management:**

  - Initially implemented using React `useState` for state management.
  - Faced challenges with prop drilling and managing state across multiple components.

- **Context API:**

  - Transitioned to using Context API for better state management.
  - Created a centralized state management solution, eliminating the need for prop drilling.
  - Further modified and optimized the Context API usage for enhanced performance and scalability.

- **React Hooks:**
  - Utilized `useRef`, `forwardRef`, and `useImperativeHandle` for managing references and imperative methods.
  - Implemented various other hooks like `useEffect` and `useContext` to manage component lifecycle and context.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. Clone the repo
   ```
   git clone https://github.com/your-username/elegant-context.git
   ```

```

2.Navigate to the project directory

```

```
cd elegant-context

```

3.Install NPM packages

```
npm install
```

#### scripts

**In the project directory, you can run:**

```

npm run dev: Runs the app in the development mode.
npm run build: Builds the app for production.
npm run lint: Lints the project for code quality.

```
