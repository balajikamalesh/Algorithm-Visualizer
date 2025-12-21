# Algorithm Visualizer 🔍📊

A lightweight, browser-based visualizer that demonstrates common sorting and searching algorithms with an interactive slider and step-by-step animations. It's perfect for learners, educators, and anyone who wants to intuitively understand how algorithms operate on arrays.

---

## Features ✅

- Visualizes multiple algorithms: Bubble Sort, Cocktail Sort, Insertion Sort, Selection Sort, Quick Sort, and Searching.
- Interactive slider to control array size and animation speed.
- Step-by-step visual animation of comparisons and swaps.
- No build tooling — works in any modern browser.

---

## Demo

Open `index.html` in your browser (double-click or serve with a simple HTTP server) and interact with the UI to:

- Generate a new random array
- Change the array size and animation speed
- Select an algorithm and start the visualization

---

## Project Structure 🔧

- `index.html` — main page and UI
- `styles.css` — styling for the visualizer
- `assets/` — static assets (icons, images)
- `src/` — algorithm implementations and UI scripts
  - `bubblesort.js`
  - `cocktailsort.js`
  - `insertionsort.js`
  - `quicksort.js`
  - `searching.js`
  - `selectionsort.js`
  - `sliderEvent.js`
  - `utilityFunctions.js`

---

## How to run (local) ▶️

Option 1 — Open locally
1. Double-click `index.html` to open in your browser.

Option 2 — Serve with a simple HTTP server

---

## How to Use 💡

1. Choose an algorithm from the dropdown.
2. Use the slider to set array size.
3. Use the speed control to change animation timing.
4. Click **Start** to see the algorithm run; **Reset** to generate a new array.

---

## Contributing 🤝

Contributions are welcome! Suggestions:

- Add more algorithms (e.g., Merge Sort, Heap Sort)
- Improve performance for large arrays
- Add keyboard accessibility or touchscreen support
- Add tests for algorithm correctness

Please open an issue or submit a pull request with a clear description of your change.

---

## Acknowledgements

Inspired by common educational algorithm visualizers and built for simplicity and clarity. If you find the project useful, consider starring the repo.

