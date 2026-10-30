import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import GodIcon from "./GodIcon";
import { CloseIcon } from "./Icons";
import { godMap } from "../data/gods";
import { getBoonInfo, getBoonTag } from "../data/boonInfo";

const BoonInfoContext = createContext(null);

function BoonInfoModal({ info, onClose }) {
  useEffect(() => {
    if (!info) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [info, onClose]);

  if (!info) return null;
  const linkedGods = (info.godIds ?? [])
    .map((id) => godMap[id])
    .filter(Boolean);

  return (
    <div className="boon-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="boon-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="boon-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="boon-modal-close"
          onClick={onClose}
          aria-label="关闭祝福说明"
          autoFocus
        >
          <CloseIcon size={15} />
        </button>
        <span className="kicker">BOON INFO</span>
        <div className="boon-modal-god">
          <span className="boon-modal-gods">
            {linkedGods.map((god) => (
              <span
                className="boon-modal-god-icon"
                style={{ "--tone": god.color }}
                key={god.id}
              >
                <GodIcon id={god.id} size={24} />
              </span>
            ))}
          </span>
          <span>
            {linkedGods.map((god) => god.name).join(" × ") || "祝福"}
          </span>
          <div className="boon-modal-chips">
            {info.details.map((detail) => (
              <span className="boon-modal-chip" key={detail}>
                {detail}
              </span>
            ))}
          </div>
        </div>
        <h3 id="boon-modal-title">{info.name}</h3>
        {info.en && <span className="boon-modal-en">{info.en}</span>}
        <div className="boon-modal-effect">
          <span>官方效果</span>
          <p>{info.effect}</p>
        </div>
        {info.note && <p className="boon-modal-note">{info.note}</p>}
        <p className="boon-modal-foot">
          {info.fixedEffect
            ? "该祝福效果固定，具体以游戏内为准。"
            : "数值会随稀有度与等级提升，具体以游戏内为准。"}
        </p>
      </div>
    </div>
  );
}

export function BoonInfoProvider({ children }) {
  const [info, setInfo] = useState(null);

  const openBoonInfo = useCallback((name, tag) => {
    setInfo(getBoonInfo(name, tag));
  }, []);

  const closeBoonInfo = useCallback(() => setInfo(null), []);

  return (
    <BoonInfoContext.Provider value={{ openBoonInfo }}>
      {children}
      <BoonInfoModal info={info} onClose={closeBoonInfo} />
    </BoonInfoContext.Provider>
  );
}

export function useBoonInfo() {
  return useContext(BoonInfoContext);
}

export function BoonChip({
  name,
  tag,
  className = "",
  children,
  showTag = true,
}) {
  const { openBoonInfo } = useBoonInfo();
  const displayTag = tag ?? getBoonTag(name);

  return (
    <button
      type="button"
      className={className}
      onClick={() => openBoonInfo(name, tag)}
      aria-label={`查看${name}的祝福说明`}
    >
      {children ?? name}
      {showTag && displayTag && <em>{displayTag}</em>}
    </button>
  );
}

export function BoonTerm({ name, tag, className = "", children }) {
  const { openBoonInfo } = useBoonInfo();

  return (
    <button
      type="button"
      className={`boon-term ${className}`}
      onClick={() => openBoonInfo(name, tag)}
      aria-label={`查看${name}的祝福说明`}
    >
      {children ?? name}
    </button>
  );
}
