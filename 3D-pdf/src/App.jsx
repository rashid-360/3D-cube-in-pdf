import React, { useState, useEffect } from "react"
import Template from "./components/Template"
import { Github } from "lucide-react"
function App() {
  const [r, setR] = useState(0)
  const [g, setG] = useState(0)
  const [b, setB] = useState(0)
  const [side1, setSide1] = useState("<>")
  const [side2, setSide2] = useState("??")
  const [side3, setSide3] = useState("||||")
  const [side4, setSide4] = useState("** ")
  const [side5, setSide5] = useState("##")
  const [side6, setSide6] = useState("$$")
  const [baseSpeed, setBaseSpeed] = useState(1)
  const [isReversed, setIsReversed] = useState(false)
  const [diagonalDirection, setDiagonalDirection] = useState("right")
  const [cubesize, setCubesize] = useState(10)
  const [inputWarning, setInputWarning] = useState("")

  const speedMarks = Array.from({ length: 10 }, (_, i) => i + 1)
  const sizeMarks = Array.from({ length: 20 }, (_, i) => i + 1)

  const Xrotationspeed = baseSpeed * (isReversed ? -1 : 1)
  const Yrotationspeed = 1
  const diagonal = diagonalDirection === "right" ? [250, 250] : [0, 250]

  const validateSideText = (text, setter) => {
    setter(text) // Always update the text
    if (text.length < 1) {
      setInputWarning("Text must be at least 1 character")
    } else if (text.length > 4) {
      setInputWarning("Text cannot be longer than 4 characters")
    } else {
      setInputWarning("")
    }
  }

  const handleSliderChange = (value, setter, max) => {
    const snappedValue = Math.round(value)
    setter(Math.min(Math.max(1, snappedValue), max))
  }
  useEffect(() => {
    const isChromiumBrowser = () => {
      const userAgent = navigator.userAgent
      const vendor = navigator.vendor

      // Check for "Chrome" in the user agent and "Google Inc." as the vendor
      const isChromium = userAgent.includes("Chrome") && vendor === "Google Inc."

      // Exclude other Chromium-based browsers (like Brave or Edge) if needed
      const isNotEdge = !userAgent.includes("Edg")
      const isNotBrave = !navigator.brave

      return isChromium && isNotEdge && isNotBrave
    }

    if (!isChromiumBrowser()) {
      alert("Your browser is not Chromium-based.Please use Chromium based browser for best result ")
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className=" bg-gray-800/50 text-white p-8 max-w-4xl mx-auto space-y-8">
        {/* Main Title */}
        <h1 className="text-6xl font-bold text-center mb-4 font-mono">WE CUBE</h1>

        {/* Subtitle centered under the title */}
        <p className="text-gray-400 text-center mt-2">
          [Create your 3D cube for PDFs - Best viewed in Chromium browsers ]
        </p>

        {/* Flex container for content and GitHub link */}
        <div className="flex justify-between items-center mt-12">
          <div>
            see the result:
            <a href="/3D-cube-in-pdf/default.pdf" target="_blank" rel="noreferrer">
              example
            </a>
          </div>
          <a
            href="https://github.com/rashid-360/3D-cube-in-pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Cube Sides */}
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Cube Sides</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Side 1", value: side1, setter: setSide1 },
              { label: "Side 2", value: side2, setter: setSide2 },
              { label: "Side 3", value: side3, setter: setSide3 },
              { label: "Side 4", value: side4, setter: setSide4 },
              { label: "Side 5", value: side5, setter: setSide5 },
              { label: "Side 6", value: side6, setter: setSide6 },
            ].map(({ label, value, setter }) => (
              <div key={label} className="space-y-1">
                <label className="block text-sm">{label}</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => validateSideText(e.target.value, setter)}
                  className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500 text-white"
                  placeholder="1-4 chars recommended"
                />
              </div>
            ))}
            {inputWarning && <div className="col-span-full text-red-400 text-sm mt-2">{inputWarning}</div>}
          </div>
        </div>

        {/* Color Configuration */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Color Configuration</h2>
          <div className="flex flex-wrap items-center gap-4">
            <label>Pick Color:</label>
            <input
              type="color"
              onChange={(e) => {
                const color = e.target.value
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
                if (result) {
                  setR(Number.parseInt(result[1], 16) / 255)
                  setG(Number.parseInt(result[2], 16) / 255)
                  setB(Number.parseInt(result[3], 16) / 255)
                }
              }}
              className="w-20 h-10 rounded cursor-pointer bg-transparent"
            />
            <div className="ml-4 space-x-4 font-mono">
              <span>R: {r.toFixed(3)}</span>
              <span>G: {g.toFixed(3)}</span>
              <span>B: {b.toFixed(3)}</span>
            </div>
          </div>
        </div>

        {/* Cube Size with Scale */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Cube Size (1-20)</h2>
          <div className="relative pt-6">
            <input
              type="range"
              value={cubesize}
              onChange={(e) => handleSliderChange(Number(e.target.value), setCubesize, 20)}
              min={1}
              max={20}
              step={1}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between px-2 mt-2">
              {sizeMarks.map((mark) => (
                <div key={mark} className="flex flex-col items-center" style={{ width: "1px" }}>
                  <div className="h-2 w-px bg-white/40"></div>
                  {mark % 5 === 0 && <span className="text-xs mt-1">{mark}</span>}
                </div>
              ))}
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm">{cubesize}</div>
          </div>
        </div>

        {/* Rotation Settings with Scale */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Rotation Speed</h2>
          <div className="space-y-6">
            <div className="relative pt-6">
              <input
                type="range"
                value={baseSpeed}
                onChange={(e) => handleSliderChange(Number(e.target.value), setBaseSpeed, 10)}
                min={1}
                max={10}
                step={1}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between px-2 mt-2">
                {speedMarks.map((mark) => (
                  <div key={mark} className="flex flex-col items-center" style={{ width: "1px" }}>
                    <div className="h-2 w-px bg-white/40"></div>
                    <span className="text-xs mt-1">{mark}</span>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm">{baseSpeed}</div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isReversed}
                onChange={(e) => setIsReversed(e.target.checked)}
                id="reverse"
                className="w-5 h-5"
              />
              <label htmlFor="reverse">Reverse Rotation</label>
            </div>
          </div>
        </div>

        {/* Diagonal Direction */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Diagonal Direction</h2>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="left"
                checked={diagonalDirection === "left"}
                onChange={(e) => setDiagonalDirection(e.target.value)}
                name="diagonal"
                className="w-5 h-5"
              />
              Left Diagonal
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="right"
                checked={diagonalDirection === "right"}
                onChange={(e) => setDiagonalDirection(e.target.value)}
                name="diagonal"
                className="w-5 h-5"
              />
              Right Diagonal
            </label>
          </div>
        </div>

        {/* Cube Preview */}
        <div className="bg-white/10 p-6 rounded-lg flex justify-center">
          <Template
            r={r}
            g={g}
            b={b}
            side1={side1}
            side2={side2}
            side3={side3}
            side4={side4}
            side5={side5}
            side6={side6}
            Xrotationspeed={Xrotationspeed}
            Yrotationspeed={Yrotationspeed}
            diagonal={diagonal}
            cubesize={cubesize}
          />
        </div>
      </div>
    </div>
  )
}

export default App

