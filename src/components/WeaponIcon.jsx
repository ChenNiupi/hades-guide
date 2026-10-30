export default function WeaponIcon({ id, size = 48, className = "" }) {
  return (
    <img
      className={`weapon-icon ${className}`}
      src={`/icons/weapons/${id}.png`}
      width={size}
      height={size}
      alt=""
      loading="lazy"
      decoding="async"
      draggable="false"
    />
  );
}
