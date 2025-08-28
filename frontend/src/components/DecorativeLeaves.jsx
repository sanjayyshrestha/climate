import React from 'react'

export const DecorativeLeaves = () => {
  const leaves = [
    { top: "10%", left: "5%", rotation: "15deg", size: "w-28 h-28", opacity: "opacity-30" },
    { top: "20%", left: "15%", rotation: "-20deg", size: "w-20 h-20", opacity: "opacity-40" },
    { top: "15%", right: "10%", rotation: "45deg", size: "w-16 h-16", opacity: "opacity-25" },
    { top: "30%", right: "5%", rotation: "-15deg", size: "w-28 h-28", opacity: "opacity-35" },
    { top: "45%", left: "8%", rotation: "30deg", size: "w-20 h-20", opacity: "opacity-30" },
    { top: "60%", left: "12%", rotation: "-45deg", size: "w-28 h-28", opacity: "opacity-25" },
    { top: "70%", right: "15%", rotation: "20deg", size: "w-16 h-16", opacity: "opacity-40" },
    { top: "80%", right: "8%", rotation: "-30deg", size: "w-20 h-20", opacity: "opacity-35" },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {leaves.map((leaf, index) => (
        <div
          key={index}
          className={`absolute ${leaf.size} ${leaf.opacity} text-green-400`}
          style={{
            top: leaf.top,
            left: leaf.left,
            right: leaf.right,
            transform: `rotate(${leaf.rotation})`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7.5 13.5 17 8 17 8Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
