"use client"

import { useState, useEffect, FormEvent } from "react"

function AnimatedGraph() {
  const [searchText, setSearchText] = useState("")
  const [showYouNode, setShowYouNode] = useState(false)
  const [showLayer1, setShowLayer1] = useState(false)
  const [showLayer2, setShowLayer2] = useState(false)
  const [showLayer3, setShowLayer3] = useState(false)
  const [showDegrees, setShowDegrees] = useState(false)
  const targetName = "Reid Hoffman"

  useEffect(() => {
    setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= targetName.length) {
          setSearchText(targetName.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setTimeout(() => setShowYouNode(true), 300)
          setTimeout(() => setShowLayer1(true), 1100)
          setTimeout(() => setShowLayer2(true), 1900)
          setTimeout(() => {
            setShowLayer3(true)
            setShowDegrees(true)
          }, 2700)
        }
      }, 150)

      return () => clearInterval(interval)
    }, 500)
  }, [])

  return (
    <div className="h-full flex flex-col items-center justify-center gap-12 px-8">
      <div style={{ width: "600px", maxWidth: "90%" }}>
        <input
          type="text"
          value={searchText}
          readOnly
          style={{
            width: "600px",
            maxWidth: "100%",
            height: "64px",
            fontSize: "20px",
            padding: "0 28px",
            border: "2px solid oklch(0.85 0.01 150)",
            borderRadius: "16px",
            backgroundColor: "oklch(0.995 0.008 145 / 0.5)",
            color: "oklch(0.25 0.01 150)",
            outline: "none",
            boxSizing: "border-box",
            fontFamily: "inherit",
            display: "block",
          }}
        />
      </div>

      <div className="relative w-full h-80">
        <svg className="w-full h-full" viewBox="0 0 500 320">
          {showYouNode && (
            <>
              <circle
                cx="50"
                cy="160"
                r="24"
                fill="oklch(0.98 0.01 150)"
                stroke="oklch(0.75 0.06 150)"
                strokeWidth="2.5"
                className="animate-in fade-in zoom-in-95 duration-500"
              />
              <text x="50" y="166" textAnchor="middle" style={{ fontSize: "12px", fontWeight: 500, fill: "oklch(0.25 0.01 150)" }}>
                You
              </text>
            </>
          )}

          {showLayer1 && (
            <>
              <path
                d="M 74 160 Q 115 140, 155 120"
                fill="none"
                stroke="oklch(0.75 0.06 150 / 0.4)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-in fade-in duration-500"
              />
              <circle
                cx="165"
                cy="115"
                r="18"
                fill="oklch(0.995 0.008 145)"
                stroke="oklch(0.82 0.05 155)"
                strokeWidth="2"
                className="animate-in fade-in zoom-in-95 duration-500"
              />

              <path
                d="M 74 160 Q 115 160, 155 160"
                fill="none"
                stroke="oklch(0.75 0.06 150 / 0.4)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-in fade-in duration-500"
              />
              <circle
                cx="165"
                cy="160"
                r="18"
                fill="oklch(0.995 0.008 145)"
                stroke="oklch(0.82 0.05 155)"
                strokeWidth="2"
                className="animate-in fade-in zoom-in-95 duration-500"
              />

              <path
                d="M 74 160 Q 115 180, 155 205"
                fill="none"
                stroke="oklch(0.75 0.06 150 / 0.4)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-in fade-in duration-500"
              />
              <circle
                cx="165"
                cy="210"
                r="18"
                fill="oklch(0.995 0.008 145)"
                stroke="oklch(0.78 0.06 145)"
                strokeWidth="2"
                className="animate-in fade-in zoom-in-95 duration-500"
              />
            </>
          )}

          {showLayer2 && (
            <>
              <path
                d="M 183 115 Q 235 115, 287 120"
                fill="none"
                stroke="oklch(0.82 0.05 155 / 0.4)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-in fade-in duration-500"
              />
              <circle
                cx="297"
                cy="122"
                r="18"
                fill="oklch(0.995 0.008 145)"
                stroke="oklch(0.78 0.06 145)"
                strokeWidth="2"
                className="animate-in fade-in zoom-in-95 duration-500"
              />

              <path
                d="M 183 160 Q 235 162, 287 165"
                fill="none"
                stroke="oklch(0.82 0.05 155 / 0.4)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-in fade-in duration-500"
              />
              <circle
                cx="297"
                cy="167"
                r="18"
                fill="oklch(0.995 0.008 145)"
                stroke="oklch(0.78 0.06 145)"
                strokeWidth="2"
                className="animate-in fade-in zoom-in-95 duration-500"
              />

              <path
                d="M 183 160 Q 235 185, 287 198"
                fill="none"
                stroke="oklch(0.82 0.05 155 / 0.4)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-in fade-in duration-500"
              />

              <path
                d="M 183 210 Q 235 208, 287 203"
                fill="none"
                stroke="oklch(0.82 0.05 155 / 0.4)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-in fade-in duration-500"
              />
              <circle
                cx="297"
                cy="200"
                r="18"
                fill="oklch(0.995 0.008 145)"
                stroke="oklch(0.78 0.06 145)"
                strokeWidth="2"
                className="animate-in fade-in zoom-in-95 duration-500"
              />
            </>
          )}

          {showLayer3 && (
            <>
              <path
                d="M 315 122 Q 365 135, 405 148"
                fill="none"
                stroke="oklch(0.78 0.06 145 / 0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-in fade-in duration-500"
              />
              <path
                d="M 315 167 Q 365 160, 405 155"
                fill="none"
                stroke="oklch(0.78 0.06 145 / 0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-in fade-in duration-500"
              />
              <path
                d="M 315 200 Q 365 180, 405 162"
                fill="none"
                stroke="oklch(0.78 0.06 145 / 0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-in fade-in duration-500"
              />

              <circle
                cx="415"
                cy="155"
                r="22"
                fill="oklch(0.98 0.01 150)"
                stroke="oklch(0.78 0.06 145)"
                strokeWidth="2"
                className="animate-in fade-in zoom-in-95 duration-500"
              />
              <text x="415" y="161" textAnchor="middle" style={{ fontSize: "11px", fontWeight: 500, fill: "oklch(0.25 0.01 150)" }}>
                Reid
              </text>
            </>
          )}
        </svg>

        {showDegrees && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center animate-in fade-in duration-700">
            <p className="text-lg font-medium" style={{ color: "oklch(0.25 0.01 150)" }}>3 degrees away</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")
    setSuccessMessage("")

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 409) {
          // Duplicate email - show as success with different message
          setSuccessMessage("You're already on the waitlist! <3")
          setIsSubmitted(true)
          setEmail("")
          setTimeout(() => {
            setIsSubmitted(false)
            setSuccessMessage("")
          }, 5000)
        } else {
          setErrorMessage(data.error || "Something went wrong. Please try again.")
        }
        setIsSubmitting(false)
        return
      }

      // Success!
      setSuccessMessage("You're on the list. We'll let you know when we're ready! <3")
      setIsSubmitted(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setSuccessMessage("")
      }, 5000)
    } catch (error) {
      console.error('Error:', error)
      setErrorMessage("Unable to join waitlist. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: "oklch(1 0 0)" }}>
      {/* Logo - fixed position */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 z-10">
        <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center" style={{ backgroundColor: "oklch(0.85 0.06 150 / 0.3)" }}>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "oklch(0.65 0.08 150)" }} />
        </div>
        <span className="text-base md:text-lg font-medium" style={{ color: "oklch(0.25 0.01 150)" }}>dotproduct</span>
      </div>

      <main className="flex-1 flex flex-col md:grid md:grid-cols-2">
        {/* Content Section */}
        <div className="flex flex-col justify-center px-6 pt-16 pb-6 md:px-16 lg:px-24 md:py-0 space-y-3 md:space-y-6">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium leading-tight text-balance" style={{ color: "oklch(0.25 0.01 150)" }}>
            See how close you really are
          </h1>
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-pretty max-w-lg" style={{ color: "oklch(0.40 0.01 150)" }}>
            Technology should help us see how we're already all connected. We are already far apart enough.
          </p>
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-pretty max-w-lg" style={{ color: "oklch(0.40 0.01 150)" }}>
            Find the shortest path to anyone on LinkedIn.
          </p>

          {/* Waitlist Form */}
          <div className="w-full max-w-lg">
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full h-12 md:h-14 px-4 md:px-6 pr-28 md:pr-36 text-sm md:text-base rounded-full transition-all focus:border-[oklch(0.75_0.06_150)]"
                  style={{
                    border: "2px solid oklch(0.85 0.01 150)",
                    backgroundColor: "oklch(0.995 0.008 145 / 0.5)",
                    color: "oklch(0.25 0.01 150)",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  disabled={!email || isSubmitting}
                  className="absolute right-1 top-1/2 -translate-y-1/2 px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:opacity-90 text-xs md:text-sm"
                  style={{
                    backgroundColor: "oklch(0.65 0.08 150)",
                    color: "white",
                    fontWeight: 500,
                    border: "none",
                    cursor: email && !isSubmitting ? "pointer" : "not-allowed",
                    opacity: email && !isSubmitting ? 1 : 0.5,
                    transition: "all 0.2s",
                  }}
                >
                  {isSubmitting ? "Joining..." : "Join waitlist"}
                </button>
              </div>

              {isSubmitted && (
                <div
                  className="animate-in fade-in p-3 md:p-4 rounded-2xl"
                  style={{
                    backgroundColor: "oklch(0.95 0.06 150 / 0.3)",
                    border: "1px solid oklch(0.85 0.06 150)",
                  }}
                >
                  <p className="text-xs md:text-sm" style={{ color: "oklch(0.30 0.08 150)" }}>
                    {successMessage}
                  </p>
                </div>
              )}

              {errorMessage && (
                <div
                  className="animate-in fade-in p-3 md:p-4 rounded-2xl"
                  style={{
                    backgroundColor: "oklch(0.95 0.08 10 / 0.2)",
                    border: "1px solid oklch(0.85 0.08 10)",
                  }}
                >
                  <p className="text-xs md:text-sm" style={{ color: "oklch(0.35 0.08 10)" }}>
                    {errorMessage}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Animated Graph Section */}
        <div className="flex-1 md:border-l flex items-center justify-center relative py-6 md:py-0" style={{
          backgroundColor: "oklch(0.98 0.008 145 / 0.3)",
          borderColor: "oklch(0.90 0.01 150 / 0.4)",
          minHeight: "250px"
        }}>
          <div className="scale-75 md:scale-100">
            <AnimatedGraph />
          </div>
        </div>
      </main>

      <footer className="border-t py-3 md:py-4" style={{ borderColor: "oklch(0.90 0.01 150 / 0.4)" }}>
        <p className="text-center text-xs md:text-sm" style={{ color: "oklch(0.50 0.01 150)" }}>
          built to remind you that you're closer than what you think
        </p>
      </footer>
    </div>
  )
}
