# Federal Budget Simulator

An interactive web application that allows users to explore and simulate the United States federal budget. Adjust revenue and spending categories, project future deficits, and analyze policy impacts over time.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/reaganstock/federal-budget-simulator)

## Features

- **Budget Overview**: View total revenue, spending, and deficit at a glance.
- **Interactive Charts**: Pie charts show where money comes from (revenue) and where it goes (spending).
- **Category Sliders**: Adjust each category between –50% and +50% of its baseline value.
- **Time Machine**: Simulate year-by-year changes in national debt and debt per capita.
- **Trend Analysis**: Compare historical deficits with projections over the next 10 years.
- **Policy Impact Analysis**: Highlight short- and long-term impacts when category changes exceed ±5%.
- **Reset & Save**: Reset all adjustments or save your scenario for later.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Charts**: @nivo/pie, @nivo/line
- **Icons**: Lucide React

## Installation

### Prerequisites

- Node.js (>= 16)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/reaganstock/federal-budget-simulator.git
cd federal-budget-simulator

# Install dependencies
npm install
# or
yarn install
```

## Available Scripts

In the project directory, you can run:

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint to catch code issues
```

## Project Structure

```
src/
├─ components/      # UI components (charts, sliders, analysis panels)
├─ data/            # Static historical data
├─ store/           # Zustand global state
├─ types/           # TypeScript interfaces and types
├─ utils/           # Helper functions (formatters, etc.)
├─ App.tsx          # Main application entry
└─ index.css        # Global Tailwind styling
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

---

*This project is for educational and illustrative purposes only.*