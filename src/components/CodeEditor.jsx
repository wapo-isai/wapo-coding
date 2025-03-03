import React, {useState} from "react";
import "./CodeEditor.css";

const code = `<html>
    <head>
        <title>Login Page</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Login">
        </form>
    </body>
</html>
<html>
<html>
    <head>`;

const androidProps = ``;

function CodeEditor() {
  const [selectedFile, setSelectedFile] = useState("index.html");

  return (
    <div className="code-editor-wrapper">
      {/* Circuit Decorations */}
      <div className="circuit-decorations">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,50 H20 L25,45 H40 L45,50 H55 L60,45 H75 L80,50 H100"
            stroke="#1a4a1a"
            strokeWidth="0.5"
            fill="none"
          />
          <circle cx="20" cy="50" r="1" fill="#2d8a2d" />
          <circle cx="80" cy="50" r="1" fill="#2d8a2d" />
        </svg>
      </div>

      {/* Code Editor Container */}
      <div className="code-editor-container fade-in">
        {/* Title Bar */}
        <div className="title-bar">
          <span className="title-text">TheProgrammer</span>
        </div>

        {/* Editor Layout */}
        <div className="editor-layout">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="explorer-header">
              <div className="explorer-icon" />
              <span className="explorer-text">Explorer</span>
            </div>
            <div
              className={`file-item ${
                selectedFile === "index.html" ? "active" : ""
              }`}
              onClick={() => setSelectedFile("index.html")}
            >
              index.html
            </div>
          </div>

          {/* Main Editor */}
          <div className="main-editor">
            <div className="editor-content">
              {/* Line Numbers */}
              <div className="line-numbers">
                {code.split("\n").map((_, i) => (
                  <div key={i} className="line-number">
                    {i + 1}
                  </div>
                ))}
              </div>
              {/* Code Content */}
              <pre className="code-content">
                <code
                  dangerouslySetInnerHTML={{
                    __html: code
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")
                      .replace(
                        /(["'].*?["'])/g,
                        '<span class="string">$1</span>'
                      )
                      .replace(
                        /(&lt;\/?[a-z]+(&gt;)?)/g,
                        '<span class="tag">$1</span>'
                      ),
                  }}
                />
              </pre>
            </div>
          </div>

          {/* Properties Panel */}
          <div className="properties-panel">
            <div className="android-props">{androidProps}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CodeEditor;
