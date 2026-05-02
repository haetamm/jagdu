export default function JagduIllustration({
  mood,
}: {
  mood: "wave" | "think" | "celebrate";
}) {
  if (mood === "wave") {
    return (
      <svg viewBox="0 0 200 220" className="w-full h-full" fill="none">
        {/* Body */}
        <ellipse cx="100" cy="160" rx="52" ry="48" fill="oklch(0.55 0.2 160)" />
        {/* Head */}
        <circle cx="100" cy="92" r="48" fill="oklch(0.85 0.15 85)" />
        {/* Eyes */}
        <ellipse cx="85" cy="88" rx="7" ry="8" fill="oklch(0.2 0.05 160)" />
        <ellipse cx="115" cy="88" rx="7" ry="8" fill="oklch(0.2 0.05 160)" />
        <circle cx="88" cy="86" r="2.5" fill="white" />
        <circle cx="118" cy="86" r="2.5" fill="white" />
        {/* Smile */}
        <path
          d="M 85 105 Q 100 118 115 105"
          stroke="oklch(0.2 0.05 160)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Blush */}
        <ellipse
          cx="76"
          cy="102"
          rx="8"
          ry="5"
          fill="oklch(0.7 0.25 20)"
          opacity="0.5"
        />
        <ellipse
          cx="124"
          cy="102"
          rx="8"
          ry="5"
          fill="oklch(0.7 0.25 20)"
          opacity="0.5"
        />
        {/* Wave arm */}
        <path
          d="M 148 120 Q 175 90 165 65"
          stroke="oklch(0.85 0.15 85)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="165" cy="63" r="10" fill="oklch(0.85 0.15 85)" />
        {/* Other arm */}
        <path
          d="M 52 120 Q 35 140 42 155"
          stroke="oklch(0.85 0.15 85)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        {/* Floating stars */}
        <text x="155" y="55" fontSize="16" fill="oklch(0.85 0.15 85)">
          ✦
        </text>
        <text
          x="30"
          y="75"
          fontSize="12"
          fill="oklch(0.65 0.22 160)"
          opacity="0.8"
        >
          ✦
        </text>
      </svg>
    );
  }

  if (mood === "think") {
    return (
      <svg viewBox="0 0 200 220" className="w-full h-full" fill="none">
        <ellipse cx="100" cy="160" rx="52" ry="48" fill="oklch(0.55 0.2 160)" />
        <circle cx="100" cy="92" r="48" fill="oklch(0.85 0.15 85)" />
        {/* Eyes - looking side */}
        <ellipse cx="85" cy="88" rx="7" ry="8" fill="oklch(0.2 0.05 160)" />
        <ellipse cx="115" cy="88" rx="7" ry="8" fill="oklch(0.2 0.05 160)" />
        <circle cx="90" cy="86" r="2.5" fill="white" />
        <circle cx="120" cy="86" r="2.5" fill="white" />
        {/* Thinking mouth */}
        <path
          d="M 88 106 Q 100 112 112 106"
          stroke="oklch(0.2 0.05 160)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse
          cx="76"
          cy="102"
          rx="8"
          ry="5"
          fill="oklch(0.7 0.25 20)"
          opacity="0.4"
        />
        <ellipse
          cx="124"
          cy="102"
          rx="8"
          ry="5"
          fill="oklch(0.7 0.25 20)"
          opacity="0.4"
        />
        {/* Chin rest arm */}
        <path
          d="M 52 130 Q 45 155 55 160"
          stroke="oklch(0.85 0.15 85)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="57" cy="162" r="10" fill="oklch(0.85 0.15 85)" />
        {/* Other arm up */}
        <path
          d="M 148 120 Q 160 110 158 100"
          stroke="oklch(0.85 0.15 85)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        {/* Thought bubbles */}
        <circle
          cx="160"
          cy="88"
          r="5"
          fill="oklch(0.65 0.22 160)"
          opacity="0.7"
        />
        <circle
          cx="168"
          cy="75"
          r="7"
          fill="oklch(0.65 0.22 160)"
          opacity="0.6"
        />
        <circle
          cx="175"
          cy="60"
          r="10"
          fill="oklch(0.65 0.22 160)"
          opacity="0.5"
        />
        <text
          x="170"
          y="64"
          fontSize="10"
          textAnchor="middle"
          fill="oklch(0.2 0.05 160)"
        >
          ?
        </text>
      </svg>
    );
  }

  // celebrate
  return (
    <svg viewBox="0 0 200 220" className="w-full h-full" fill="none">
      <ellipse cx="100" cy="160" rx="52" ry="48" fill="oklch(0.55 0.2 160)" />
      <circle cx="100" cy="92" r="48" fill="oklch(0.85 0.15 85)" />
      {/* Happy eyes - squint */}
      <path
        d="M 78 88 Q 85 82 92 88"
        stroke="oklch(0.2 0.05 160)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 108 88 Q 115 82 122 88"
        stroke="oklch(0.2 0.05 160)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Big smile */}
      <path
        d="M 82 105 Q 100 122 118 105"
        stroke="oklch(0.2 0.05 160)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse
        cx="76"
        cy="102"
        rx="9"
        ry="6"
        fill="oklch(0.7 0.25 20)"
        opacity="0.6"
      />
      <ellipse
        cx="124"
        cy="102"
        rx="9"
        ry="6"
        fill="oklch(0.7 0.25 20)"
        opacity="0.6"
      />
      {/* Both arms up */}
      <path
        d="M 52 120 Q 30 95 35 75"
        stroke="oklch(0.85 0.15 85)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="35" cy="73" r="10" fill="oklch(0.85 0.15 85)" />
      <path
        d="M 148 120 Q 170 95 165 75"
        stroke="oklch(0.85 0.15 85)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="165" cy="73" r="10" fill="oklch(0.85 0.15 85)" />
      {/* Confetti */}
      <rect
        x="25"
        y="45"
        width="8"
        height="8"
        rx="2"
        fill="oklch(0.65 0.22 160)"
        transform="rotate(25 29 49)"
      />
      <rect
        x="155"
        y="40"
        width="8"
        height="8"
        rx="2"
        fill="oklch(0.55 0.2 160)"
        transform="rotate(-15 159 44)"
      />
      <rect
        x="140"
        y="20"
        width="6"
        height="6"
        rx="1"
        fill="oklch(0.85 0.15 85)"
        transform="rotate(40 143 23)"
      />
      <rect
        x="45"
        y="25"
        width="6"
        height="6"
        rx="1"
        fill="oklch(0.65 0.22 160)"
        transform="rotate(-30 48 28)"
      />
      <text x="18" y="90" fontSize="18">
        🎉
      </text>
      <text x="162" y="90" fontSize="18">
        🎉
      </text>
    </svg>
  );
}
