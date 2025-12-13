import { useState } from "react";
import { QRCodeCanvas  } from "qrcode.react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <div className="card">
        <input type="text" placeholder="Enter text or URL" value={text} onChange={(e) => setText(e.target.value)} />
        {text && (
          <div className="qr-box">
            <QRCodeCanvas  value={text} size={200} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;