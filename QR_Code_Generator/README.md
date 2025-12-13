## QR_Code_Generator 📱

A simple React app to generate QR codes from any text or URL.  
Part of the [React Mini Projects](../README.md) collection.

---

## Features

- Generate QR codes dynamically from text or URLs
- Real-time preview
- Responsive and mobile-friendly design
- Lightweight and easy to extend

---

## How to Run

1. Clone the repository or navigate inside your main repo:

```bash
cd QR_Code_Generator
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser at:

http://localhost:5173

---

## Usage

1. Type any text or URL in the input box.
2. The QR code will generate instantly below the input.
3. Scan it using your phone or QR scanner to test.

---

## Project Structure

QR_Code_Generator/
├─ public/          # Static assets, optional screenshots
├─ src/             # React source code
│  ├─ App.jsx       # Main component
│  ├─ App.css       # Styling
│  └─ main.jsx      # App entry
├─ package.json
├─ package-lock.json
├─ node_modules/    # Ignored in Git
└─ README.md        # Project documentation

---

## Example

- Type: https://example.com
- The QR code appears below
- Scan it to open the link