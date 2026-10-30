export default function GodIcon({ id, size = 40, className = "" }) {
  return (
    <img
      className={`god-icon ${className}`}
      src={`/icons/gods/${id}.png`}
      width={size}
      height={size}
      alt=""
      draggable="false"
      decoding="async"
    />
  );
}
