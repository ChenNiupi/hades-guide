import { gods, SLOTS } from "./gods";
import { duos } from "./duos";

const slotLabels = Object.fromEntries(SLOTS.map((slot) => [slot.id, slot.label]));

const godTags = {
  zeus: "雷",
  poseidon: "海",
  athena: "雅",
  aphrodite: "爱",
  artemis: "猎",
  ares: "战",
  demeter: "冰",
  dionysus: "酒",
  hermes: "赫",
};

const slotTags = {
  attack: "普",
  special: "特",
  cast: "投",
  dash: "冲",
  call: "援",
};

const boonLookup = new Map(
  gods.flatMap((god) =>
    (god.boons ?? []).map((boon) => [
      boon.name,
      {
        ...boon,
        godId: god.id,
        slotLabel: slotLabels[boon.slot] ?? boon.slot,
      },
    ]),
  ),
);

const duoLookup = new Map(duos.map((duo) => [duo.name, duo]));

const extraBoons = {
  洪水滔天: {
    en: "Flood Flare",
    slotLabel: "投弹 · 盾",
    tag: "海投盾",
    effect: "投弹会化作脉冲，对周围敌人造成伤害并将其击退。",
    note: "贝奥武夫形态装弹后的投弹变体。",
    godId: "poseidon",
  },
  雷鸣电闪: {
    en: "Thunder Flare",
    slotLabel: "投弹 · 盾",
    tag: "雷投盾",
    effect: "投弹会引来一道天雷，轰击邻近的敌人。",
    note: "贝奥武夫形态装弹后的投弹变体。",
    godId: "zeus",
  },
  血斩旋风: {
    en: "Slicing Flare",
    slotLabel: "投弹 · 盾",
    tag: "战投盾",
    effect: "投弹会向前射出大型剑刃旋风，持续较短时间。",
    note: "贝奥武夫形态装弹后的投弹变体。",
    godId: "ares",
  },
  复仇诅咒: {
    en: "Curse of Vengeance",
    slotLabel: "反击",
    tag: "战反",
    effect: "受到伤害后，向周围敌人施加厄运。",
    note: "反击类祝福，需要主动接弹或受击触发，适合熟悉敌人弹道的玩家。",
    godId: "ares",
  },
  雷神惩击: {
    en: "Heaven's Vengeance",
    slotLabel: "反击",
    tag: "雷反",
    effect: "受到伤害时以天雷还击。",
    note: "反击类祝福，需要主动接弹或受击触发，适合熟悉敌人弹道的玩家。",
    godId: "zeus",
  },
  邀宠召祸: {
    en: "Wave of Despair",
    slotLabel: "反击",
    tag: "爱反",
    effect: "受到伤害后，对附近敌人造成伤害并施加虚弱。",
    note: "反击类祝福，需要主动接弹或受击触发，适合熟悉敌人弹道的玩家。",
    godId: "aphrodite",
  },
  冰寒之触: {
    en: "Frozen Touch",
    slotLabel: "反击",
    tag: "冰反",
    effect: "受到伤害后，对敌人造成伤害并将其完全冷冻。",
    note: "反击类祝福，需要主动接弹或受击触发，适合熟悉敌人弹道的玩家。",
    godId: "demeter",
  },
  猎手之怒: {
    en: "Hunter's Flare",
    slotLabel: "投弹 · 盾",
    tag: "猎投盾",
    effect: "投弹对周围敌人造成伤害，并有几率造成暴击。",
    note: "贝奥武夫形态装弹后的投弹变体。",
    godId: "artemis",
  },
  激情四射: {
    en: "Passion Flare",
    slotLabel: "投弹 · 盾",
    tag: "爱投盾",
    effect: "投弹对周围敌人造成伤害，并施加虚弱。",
    note: "贝奥武夫形态装弹后的投弹变体。",
    godId: "aphrodite",
  },
  爆裂杀阵: {
    en: "Phalanx Flare",
    slotLabel: "投弹 · 盾",
    tag: "雅投盾",
    effect: "投弹对周围敌人造成伤害，并可反弹攻击。",
    note: "贝奥武夫形态装弹后的投弹变体。",
    godId: "athena",
  },
  致幻爆破: {
    en: "Trippy Flare",
    slotLabel: "投弹 · 盾",
    tag: "酒投盾",
    effect: "投弹对周围敌人造成伤害，并留下一团云雾。",
    note: "贝奥武夫形态装弹后的投弹变体。",
    godId: "dionysus",
  },
  冰魂素魄: {
    en: "Icy Flare",
    slotLabel: "投弹 · 盾",
    tag: "冰投盾",
    effect: "投弹对周围敌人造成伤害并施加冷冻。",
    note: "贝奥武夫形态装弹后的投弹变体。",
    godId: "demeter",
  },
  高压雷击: {
    en: "High Voltage",
    slotLabel: "被动",
    tag: "",
    effect: "增加天雷的伤害范围。",
    godId: "zeus",
  },
  精彩还击: {
    en: "Brilliant Riposte",
    slotLabel: "被动",
    tag: "",
    effect: "提升反弹造成的伤害。",
    godId: "athena",
  },
  怅然若失: {
    en: "Empty Inside",
    slotLabel: "被动",
    tag: "",
    effect: "延长虚弱效果的持续时间。",
    godId: "aphrodite",
  },
  拜倒裙下: {
    en: "Sweet Surrender",
    slotLabel: "被动",
    tag: "",
    effect: "处于虚弱状态的敌人会受到更高伤害。",
    godId: "aphrodite",
  },
  心旌荡漾: {
    en: "Broken Resolve",
    slotLabel: "被动",
    tag: "",
    effect: "强化虚弱对伤害的减免效果。",
    godId: "aphrodite",
  },
  拔箭留疮: {
    en: "Exit Wounds",
    slotLabel: "投弹",
    tag: "猎投",
    effect: "血石从敌人身上掉落时，造成伤害。",
    godId: "artemis",
  },
  求生意志: {
    en: "Ravenous Will",
    slotLabel: "被动",
    tag: "",
    effect: "当你没有血石可用时，受到的伤害降低，且对敌人造成更高伤害。",
    godId: "demeter",
  },
};

export function getBoonTag(name, explicitTag) {
  if (explicitTag) return explicitTag;
  const core = boonLookup.get(name);
  if (core) {
    if (core.slot === "passive" || core.slot === "legendary") return "";
    return `${godTags[core.godId] ?? ""}${slotTags[core.slot] ?? ""}`;
  }
  return extraBoons[name]?.tag ?? "";
}

export function getBoonInfo(name, explicitTag) {
  const core = boonLookup.get(name);
  const extra = extraBoons[name];
  const duo = duoLookup.get(name);
  const tag = getBoonTag(name, explicitTag);

  if (core) {
    return {
      name,
      en: core.en,
      effect: core.effect,
      note: core.note,
      godIds: [core.godId],
      details: [core.slotLabel, tag].filter(
        (value, index, list) => value && list.indexOf(value) === index,
      ),
      tag,
      fixedEffect: core.slot === "legendary",
    };
  }

  if (extra) {
    return {
      name,
      en: extra.en,
      effect: extra.effect,
      note: extra.note,
      godIds: [extra.godId],
      details: [extra.slotLabel, tag].filter(
        (value, index, list) => value && list.indexOf(value) === index,
      ),
      tag,
      fixedEffect: false,
    };
  }

  if (duo) {
    return {
      name,
      en: duo.en,
      effect: duo.effect,
      note: "由两位神明的祝福组合解锁。",
      godIds: duo.gods,
      details: ["双重祝福"],
      tag: "",
      fixedEffect: true,
    };
  }

  return {
    name,
    en: "",
    effect: "该祝福的详细说明暂未收录，可在游戏内查看。",
    note: "",
    godIds: [],
    details: [tag].filter(Boolean),
    tag,
    fixedEffect: false,
  };
}
