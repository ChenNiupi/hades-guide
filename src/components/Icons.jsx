const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function SearchIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g {...base}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </g>
    </svg>
  );
}

export function CloseIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path {...base} d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function MenuIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g {...base}>
        <path d="M3 6h18M3 12h18M3 18h18" />
      </g>
    </svg>
  );
}

export function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g {...base}>
        <path d="M4 12h15M13 6l6 6-6 6" />
      </g>
    </svg>
  );
}

export function ChevronIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path {...base} d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function SparkIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g {...base}>
        <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" />
      </g>
    </svg>
  );
}

export function ScrollIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g {...base}>
        <path d="M6 4h12v13a3 3 0 0 0 3 3H8a2 2 0 0 1-2-2Z" />
        <path d="M18 4a2 2 0 0 1 2 2v2h-2M9 8h6M9 12h6" />
      </g>
    </svg>
  );
}

export function ExternalIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g {...base}>
        <path d="M14 4h6v6M20 4l-9 9" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </g>
    </svg>
  );
}
