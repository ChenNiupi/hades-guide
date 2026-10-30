export const SLOTS = [
  {
    "id": "attack",
    "label": "攻击",
    "hint": "普攻"
  },
  {
    "id": "special",
    "label": "特殊",
    "hint": "特殊攻击"
  },
  {
    "id": "cast",
    "label": "投弹",
    "hint": "血石 / 投弹"
  },
  {
    "id": "dash",
    "label": "冲刺",
    "hint": "冲刺"
  },
  {
    "id": "call",
    "label": "求援",
    "hint": "神明求援"
  },
  {
    "id": "passive",
    "label": "被动",
    "hint": "被动强化"
  },
  {
    "id": "legendary",
    "label": "传说",
    "hint": "传说祝福"
  }
];

export const gods = [
  {
    "id": "zeus",
    "name": "宙斯",
    "en": "Zeus",
    "title": "雷霆之主",
    "domain": "雷电 · 连锁",
    "tags": [
      "输出",
      "功能"
    ],
    "rating": "S",
    "difficulty": "中",
    "color": "#8fb8ff",
    "colorSoft": "rgba(104, 151, 255, 0.16)",
    "tagline": "让每一次命中，都变成一场小型风暴。",
    "overview": "宙斯的祝福把单次命中扩展成连锁雷击，擅长在多目标与高攻速武器上滚雪球。静电释放提供的感电状态，是整套雷电流派的伤害发动机。",
    "playstyle": "优先把攻击或特殊换成雷击，再补静电释放、风暴闪电，把连锁次数和触发频率堆起来。拳套、狮鹫坚炮、弓 2 这类高攻速武器最舒服。",
    "core": "先拿一个高频输出槽（攻击/特殊），再拿静电释放。雷电流不怕敌人多，怕的是打得慢。",
    "pros": [
      "清群效率极高",
      "高攻速武器收益夸张",
      "连锁伤害可覆盖远处敌人"
    ],
    "cons": [
      "单体爆发依赖触发频率",
      "低攻速武器手感偏弱",
      "怕护甲与雷抗环境"
    ],
    "boons": [
      {
        "name": "闪电攻击",
        "en": "Lightning Strike",
        "slot": "attack",
        "effect": "普通攻击命中时，射出连环闪电。",
        "tier": "A",
        "note": "雷电流的起手式，优先配高攻速武器。"
      },
      {
        "name": "雷霆乱舞",
        "en": "Thunder Flourish",
        "slot": "special",
        "effect": "特殊攻击引来一道天雷，打击目标附近的敌人。",
        "tier": "A",
        "note": "适合特殊攻击频率高的形态。"
      },
      {
        "name": "雷霆射击",
        "en": "Electric Shot",
        "slot": "cast",
        "effect": "投弹射出连环闪电，在敌人之间弹射。",
        "tier": "B"
      },
      {
        "name": "雷霆冲刺",
        "en": "Thunder Dash",
        "slot": "dash",
        "effect": "冲刺引来一道天雷，打击邻近的敌人。",
        "tier": "B"
      },
      {
        "name": "宙斯之援",
        "en": "Zeus' Aid",
        "slot": "call",
        "effect": "使用求援后的一段时间内，用天雷快速轰击附近的敌人。",
        "tier": "A"
      },
      {
        "name": "静电释放",
        "en": "Static Discharge",
        "slot": "passive",
        "effect": "所有雷电效果都将施加心惊胆战。",
        "tier": "S",
        "note": "「心惊胆战」会让受击的敌人向周围放电，是雷电流的核心增伤。"
      },
      {
        "name": "风暴闪电",
        "en": "Storm Lightning",
        "slot": "passive",
        "effect": "增加连环闪电的弹射次数。",
        "tier": "A"
      },
      {
        "name": "双重雷击",
        "en": "Double Strike",
        "slot": "passive",
        "effect": "闪电球技能将有几率袭击两次。",
        "tier": "B"
      },
      {
        "name": "无边神力",
        "en": "Billowing Strength",
        "slot": "passive",
        "effect": "求援后，提高你造成的所有伤害。持续一段时间。",
        "tier": "A"
      },
      {
        "name": "闪电裂变",
        "en": "Splitting Bolt",
        "slot": "legendary",
        "effect": "每次以雷电击伤敌人时，产生一次额外雷击。",
        "tier": "S",
        "prereqGroups": [
          {
            "label": "任选其一",
            "options": ["风暴闪电", "高压雷击", "双重雷击"]
          }
        ],
        "note": "雷电流成型后的额外雷击，连锁越密收益越高。"
      }
    ]
  },
  {
    "id": "poseidon",
    "name": "波塞冬",
    "en": "Poseidon",
    "title": "撼海者",
    "domain": "击退 · 撞墙",
    "tags": [
      "控制",
      "输出"
    ],
    "rating": "S",
    "difficulty": "低",
    "color": "#65d9cf",
    "colorSoft": "rgba(74, 205, 195, 0.14)",
    "tagline": "把整座冥界，变成你的撞墙试验场。",
    "overview": "波塞冬用击退改写敌人的站位：撞墙、破裂、再被海浪卷回去。海潮冲刺既是位移也是清场手段，是游戏里最泛用的冲刺祝福之一。",
    "playstyle": "把敌人往墙角和地形上推，靠撞墙与破裂打额外伤害。海潮冲刺可以独立撑起一套安全输出，适合所有武器；配合宙斯的海上风暴能直接补足雷击伤害。",
    "core": "有墙就打墙，没墙就制造墙。海潮冲刺优先，其次才是攻击/特殊。",
    "pros": [
      "控制强、容错高",
      "海潮冲刺泛用",
      "撞墙伤害可观"
    ],
    "cons": [
      "开阔地形收益下降",
      "会把敌人推出近战范围",
      "单体 BOSS 依赖撞墙机会"
    ],
    "boons": [
      {
        "name": "暴风攻击",
        "en": "Tempest Strike",
        "slot": "attack",
        "effect": "普通攻击更强，可以击退敌人。",
        "tier": "A"
      },
      {
        "name": "暴风乱舞",
        "en": "Tempest Flourish",
        "slot": "special",
        "effect": "特殊攻击更强，可以击退敌人。",
        "tier": "A"
      },
      {
        "name": "洪水射击",
        "en": "Flood Shot",
        "slot": "cast",
        "effect": "投弹命中时，对一定范围内的敌人造成伤害并击退。",
        "tier": "B"
      },
      {
        "name": "海潮冲刺",
        "en": "Tidal Dash",
        "slot": "dash",
        "effect": "冲刺时可以伤害并击退附近的敌人。",
        "tier": "S",
        "note": "攻防一体的顶级冲刺，几乎所有构筑都能用。"
      },
      {
        "name": "波塞冬之援",
        "en": "Poseidon's Aid",
        "slot": "call",
        "effect": "求援后，进入无敌状态，可以撞击敌人。持续一段时间。",
        "tier": "B"
      },
      {
        "name": "浪如刀割",
        "en": "Razor Shoals",
        "slot": "passive",
        "effect": "能造成击退效果的祝福还可以崩裂敌人。",
        "tier": "A"
      },
      {
        "name": "怒浪滔天",
        "en": "Breaking Wave",
        "slot": "passive",
        "effect": "击退敌人撞击到障碍物时，会产生波浪，造成区域伤害。",
        "tier": "B"
      },
      {
        "name": "飓风怒吼",
        "en": "Typhoon's Fury",
        "slot": "passive",
        "effect": "击退敌人撞到障碍物时，会造成更高伤害。",
        "tier": "A"
      },
      {
        "name": "汪洋之力",
        "en": "Hydraulic Might",
        "slot": "passive",
        "effect": "在遭遇战最初的一段时间内，普通攻击与特殊攻击会变得更强。",
        "tier": "B"
      },
      {
        "name": "滔滔不绝",
        "en": "Second Wave",
        "slot": "legendary",
        "effect": "具有击退效果的祝福可以将敌人多次击退。",
        "tier": "S",
        "prereqGroups": [
          {
            "label": "强化击退",
            "options": ["飓风怒吼", "怒浪滔天"]
          },
          {
            "label": "波塞冬祝福",
            "options": ["暴风攻击", "海潮冲刺", "洪水射击", "暴风乱舞", "波塞冬之援"]
          }
        ],
        "note": "击退流的终极强化，适合海潮冲刺与怒浪滔天。"
      }
    ]
  },
  {
    "id": "athena",
    "name": "雅典娜",
    "en": "Athena",
    "title": "明眸女神",
    "domain": "反弹 · 护盾",
    "tags": [
      "生存",
      "功能"
    ],
    "rating": "S",
    "difficulty": "低",
    "color": "#f2d28b",
    "colorSoft": "rgba(238, 200, 126, 0.14)",
    "tagline": "最好的进攻，是让敌人的攻击原路返回。",
    "overview": "雅典娜不负责堆伤害，她负责让你活着把伤害打完。反弹能化解弹幕，神圣冲刺提供无敌帧与反弹，是新手与高热度逃亡最可靠的保险。",
    "playstyle": "绝大多数构筑只需要一个神圣冲刺。若想做成体系，可以用反弹触发暴露、配合阿瑞斯的仁慈解脱或阿尔忒弥斯的致命还击，把防御动作转成进攻窗口。",
    "core": "先拿神圣冲刺。它既是位移，也是防御，也是部分双重祝福的钥匙。",
    "pros": [
      "容错率极高",
      "反弹克制弹幕怪",
      "神圣冲刺万金油"
    ],
    "cons": [
      "纯输出增益较少",
      "反弹需要预判",
      "近战对拼收益一般"
    ],
    "boons": [
      {
        "name": "神圣攻击",
        "en": "Divine Strike",
        "slot": "attack",
        "effect": "普通攻击更强，可以反弹。",
        "tier": "B"
      },
      {
        "name": "神圣乱舞",
        "en": "Divine Flourish",
        "slot": "special",
        "effect": "特殊攻击更强，可以反弹。",
        "tier": "B"
      },
      {
        "name": "杀阵射击",
        "en": "Phalanx Shot",
        "slot": "cast",
        "effect": "投弹会造成小范围伤害，还可以反弹。",
        "tier": "B"
      },
      {
        "name": "神圣冲刺",
        "en": "Divine Dash",
        "slot": "dash",
        "effect": "冲刺可以造成伤害，并可以反弹。",
        "tier": "S",
        "note": "全游戏最强保命祝福之一，闭眼拿。"
      },
      {
        "name": "雅典娜之援",
        "en": "Athena's Aid",
        "slot": "call",
        "effect": "求援会让你无敌并反弹所有攻击。",
        "tier": "A"
      },
      {
        "name": "神圣盾卫",
        "en": "Holy Shield",
        "slot": "passive",
        "effect": "受到伤害后，会对附近的敌人造成伤害，并产生短暂的反弹效果。",
        "tier": "A"
      },
      {
        "name": "铜墙铁壁",
        "en": "Bronze Skin",
        "slot": "passive",
        "effect": "抵御来自敌人攻击的伤害。",
        "tier": "B"
      },
      {
        "name": "炫目之光",
        "en": "Blinding Flash",
        "slot": "passive",
        "effect": "带有反弹效果的攻击会让敌人进入暴露状态。",
        "tier": "A"
      },
      {
        "name": "神圣保护",
        "en": "Divine Protection",
        "slot": "legendary",
        "effect": "获得一层护盾，可以用于抵消一次伤害。",
        "tier": "S",
        "prereqGroups": [
          {
            "label": "需要",
            "options": ["精彩还击"]
          }
        ],
        "note": "高热度下最稳的一次容错，配合反弹祝福使用。"
      }
    ]
  },
  {
    "id": "aphrodite",
    "name": "阿弗洛狄忒",
    "en": "Aphrodite",
    "title": "爱与美之神",
    "domain": "虚弱 · 生存",
    "tags": [
      "生存",
      "输出"
    ],
    "rating": "A",
    "difficulty": "低",
    "color": "#ff9fc4",
    "colorSoft": "rgba(255, 132, 178, 0.14)",
    "tagline": "最致命的力量，往往披着最温柔的外衣。",
    "overview": "爱神的祝福提供高额基础伤害加成，并用虚弱压低敌人的输出。她的投弹爆发高、近身收益大，适合慢速重击武器与需要稳定生存的构筑。",
    "playstyle": "用虚弱覆盖主要目标，再靠高基础倍率打单次重击。高攀不起提供近身减伤，适合贴脸武器；倾心一箭则是投弹流的高爆发选项。",
    "core": "虚弱不是可选项，是爱神流的基础。先确保主输出槽能挂虚弱。",
    "pros": [
      "虚弱减伤显著",
      "单次伤害倍率高",
      "适合 BOSS 战"
    ],
    "cons": [
      "清群速度一般",
      "投弹射程短",
      "依赖命中率"
    ],
    "boons": [
      {
        "name": "心碎攻击",
        "en": "Heartbreak Strike",
        "slot": "attack",
        "effect": "普通攻击更强，可以施加虚弱。",
        "tier": "A"
      },
      {
        "name": "心碎乱舞",
        "en": "Heartbreak Flourish",
        "slot": "special",
        "effect": "特殊攻击更强，可以施加虚弱。",
        "tier": "A"
      },
      {
        "name": "倾心一箭",
        "en": "Crush Shot",
        "slot": "cast",
        "effect": "投弹射出一道短距离、宽幅的冲击波，并施加虚弱。",
        "tier": "A"
      },
      {
        "name": "激情冲刺",
        "en": "Passion Dash",
        "slot": "dash",
        "effect": "冲刺时，对终点附近的敌人造成伤害，并施加虚弱。",
        "tier": "B"
      },
      {
        "name": "阿弗洛狄忒之援",
        "en": "Aphrodite's Aid",
        "slot": "call",
        "effect": "求援射出一发跟踪箭，命中时施加魅惑。",
        "tier": "B"
      },
      {
        "name": "一生相伴",
        "en": "Life Affirmation",
        "slot": "passive",
        "effect": "提升生命房间奖励的数额。",
        "tier": "A"
      },
      {
        "name": "高攀不起",
        "en": "Different League",
        "slot": "passive",
        "effect": "抵御附近敌人攻击产生的部分伤害。",
        "tier": "S",
        "note": "近战武器的高热度保命神技。"
      },
      {
        "name": "走火入魔",
        "en": "Unhealthy Fixation",
        "slot": "legendary",
        "effect": "施加虚弱时，有一定几率施加魅惑。",
        "tier": "S",
        "prereqGroups": [
          {
            "label": "核心祝福",
            "options": ["心碎攻击", "激情冲刺", "倾心一箭", "心碎乱舞", "激情四射"]
          },
          {
            "label": "被动强化",
            "options": ["怅然若失", "拜倒裙下", "心旌荡漾"]
          }
        ]
      }
    ]
  },
  {
    "id": "artemis",
    "name": "阿尔忒弥斯",
    "en": "Artemis",
    "title": "荒野猎手",
    "domain": "暴击 · 追踪",
    "tags": [
      "输出"
    ],
    "rating": "S",
    "difficulty": "中",
    "color": "#b7e08a",
    "colorSoft": "rgba(158, 214, 116, 0.14)",
    "tagline": "瞄准、放箭，然后让命运自己追上目标。",
    "overview": "猎神的祝福围绕暴击与追踪。她的单次增益看似朴素，但火力支援、直指要害和猎人标记能把任何高频武器变成持续输出的火力网。",
    "playstyle": "高攻速武器优先拿火力支援，让每次命中都追加追踪箭；慢速武器则拿致命攻击与干净利落堆暴击伤害。投弹流可以走会心一击与冰寒射线。",
    "core": "火力支援适合高频，暴击倍率适合重击。先想清楚武器是哪种节奏。",
    "pros": [
      "暴击上限高",
      "火力支援全武器通用",
      "追踪箭提升命中"
    ],
    "cons": [
      "暴击看脸",
      "缺少生存手段",
      "部分祝福需要高等级"
    ],
    "boons": [
      {
        "name": "致命攻击",
        "en": "Deadly Strike",
        "slot": "attack",
        "effect": "普通攻击更强，有一定几率造成暴击。",
        "tier": "A"
      },
      {
        "name": "致命乱舞",
        "en": "Deadly Flourish",
        "slot": "special",
        "effect": "特殊攻击更强，有一定几率造成暴击。",
        "tier": "A"
      },
      {
        "name": "会心一击",
        "en": "True Shot",
        "slot": "cast",
        "effect": "投弹可以追踪敌人，有一定几率造成暴击。",
        "tier": "A"
      },
      {
        "name": "猎人冲刺",
        "en": "Hunter Dash",
        "slot": "dash",
        "effect": "冲刺攻击造成更高伤害。",
        "tier": "B"
      },
      {
        "name": "阿尔忒弥斯之援",
        "en": "Artemis' Aid",
        "slot": "call",
        "effect": "求援发射一枚追踪箭，有几率造成暴击。",
        "tier": "A"
      },
      {
        "name": "火力支援",
        "en": "Support Fire",
        "slot": "passive",
        "effect": "当你投弹时，或者以普通攻击 / 特殊攻击击中目标时，射出一支跟踪箭。",
        "tier": "S",
        "note": "高频武器的通用增伤，优先级极高。"
      },
      {
        "name": "猎人标记",
        "en": "Hunter's Mark",
        "slot": "passive",
        "effect": "你对敌人造成暴击伤害时，附近的一个敌人也会被标记。",
        "tier": "A"
      },
      {
        "name": "直指要害",
        "en": "Pressure Points",
        "slot": "passive",
        "effect": "你造成的所有伤害都有几率暴击。",
        "tier": "S",
        "note": "不看武器，不看攻速，拿到就有效。"
      },
      {
        "name": "全副武装",
        "en": "Fully Loaded",
        "slot": "legendary",
        "effect": "增加血石数量上限，供投弹使用。",
        "tier": "S",
        "prereqGroups": [
          {
            "label": "任意两项",
            "options": ["拔箭留疮", "火力支援", "直指要害"]
          }
        ]
      }
    ]
  },
  {
    "id": "ares",
    "name": "阿瑞斯",
    "en": "Ares",
    "title": "战争狂徒",
    "domain": "厄运 · 剑刃",
    "tags": [
      "输出",
      "控制"
    ],
    "rating": "A",
    "difficulty": "中",
    "color": "#ff8d7a",
    "colorSoft": "rgba(255, 110, 90, 0.14)",
    "tagline": "不必追着敌人跑，厄运会自己找上门。",
    "overview": "阿瑞斯把伤害写进敌人的死亡倒计时。厄运延迟爆发，适合打一套就走；剑刃旋风提供持续区域伤害，与投弹和拉扯打法天然契合。",
    "playstyle": "重击武器用厄运打周期爆发，配合雅典娜的仁慈解脱可以立刻引爆；投弹流用剑刃旋风铺场，再补冰寒风暴或狩猎之刃把区域伤害拉满。",
    "core": "厄运要打得准、打得重；剑刃要铺得久、铺得密。别把两套混成四不像。",
    "pros": [
      "延迟伤害适合拉扯",
      "剑刃旋风持续输出强",
      "双重祝福质量高"
    ],
    "cons": [
      "爆发有延迟",
      "清群依赖裂隙",
      "对移动快的敌人容易空"
    ],
    "boons": [
      {
        "name": "痛苦诅咒",
        "en": "Curse of Pain",
        "slot": "special",
        "effect": "特殊攻击施加厄运。",
        "tier": "A"
      },
      {
        "name": "致命诅咒",
        "en": "Curse of Agony",
        "slot": "attack",
        "effect": "普通攻击施加厄运。",
        "tier": "A"
      },
      {
        "name": "旋刀射击",
        "en": "Slicing Shot",
        "slot": "cast",
        "effect": "投弹向前射出剑刃旋风。",
        "tier": "A"
      },
      {
        "name": "利刃冲刺",
        "en": "Blade Dash",
        "slot": "dash",
        "effect": "冲刺在起点生成剑刃旋风。",
        "tier": "B"
      },
      {
        "name": "阿瑞斯之援",
        "en": "Ares' Aid",
        "slot": "call",
        "effect": "求援时变身为无敌的剑刃旋风，持续一段时间。",
        "tier": "A"
      },
      {
        "name": "灭顶之灾",
        "en": "Dire Misfortune",
        "slot": "passive",
        "effect": "使厄运可以叠加，进而提高伤害。",
        "tier": "A"
      },
      {
        "name": "血战狂怒",
        "en": "Battle Rage",
        "slot": "passive",
        "effect": "杀死敌人后，提升下一次普通攻击或特殊攻击的伤害。",
        "tier": "B"
      },
      {
        "name": "战患轮回",
        "en": "Vicious Cycle",
        "slot": "passive",
        "effect": "剑刃旋风每次连续击中目标时，可以提高伤害。",
        "tier": "A"
      },
      {
        "name": "漩涡吞噬",
        "en": "Engulfing Vortex",
        "slot": "passive",
        "effect": "延长剑刃旋风的持续时间，并拉近附近的敌人。",
        "tier": "B"
      }
    ]
  },
  {
    "id": "dionysus",
    "name": "狄俄尼索斯",
    "en": "Dionysus",
    "title": "宴会之神",
    "domain": "醉酒 · 迷雾",
    "tags": [
      "输出",
      "控制"
    ],
    "rating": "A",
    "difficulty": "低",
    "color": "#c99cff",
    "colorSoft": "rgba(176, 122, 255, 0.15)",
    "tagline": "痛饮吧。宿醉会在敌人身上停留很久。",
    "overview": "酒神的祝福以醉酒为核心，持续伤害稳定、覆盖率极高，特别适合需要边跑边打的构筑。致幻射击提供区域控制，也能成为寒冰美酒、光芒盛宴的载体。",
    "playstyle": "用高频攻击或特殊把醉酒叠满，再靠烂醉如泥与花前劝酒让醉酒减速、传染。投弹流则围绕致幻射击展开，配合得墨忒尔的寒冰美酒做成冰雾区域。",
    "core": "醉酒伤害不看单次爆发，看覆盖。先保证每个目标身上都有醉酒。",
    "pros": [
      "持续伤害稳定",
      "适合风筝与群怪",
      "双重祝福方向多"
    ],
    "cons": [
      "爆发力不足",
      "对醉酒免疫或高抗性目标乏力",
      "需要时间生效"
    ],
    "boons": [
      {
        "name": "醉酒攻击",
        "en": "Drunken Strike",
        "slot": "attack",
        "effect": "普通攻击施加醉酒。",
        "tier": "A"
      },
      {
        "name": "醉酒乱舞",
        "en": "Drunken Flourish",
        "slot": "special",
        "effect": "特殊攻击施加醉酒。",
        "tier": "A"
      },
      {
        "name": "致幻射击",
        "en": "Trippy Shot",
        "slot": "cast",
        "effect": "投弹掷出一朵爆炸性的大型欢庆迷雾。",
        "tier": "A"
      },
      {
        "name": "醉酒冲刺",
        "en": "Drunken Dash",
        "slot": "dash",
        "effect": "冲刺时，对起点附近的敌人多次施加醉酒。",
        "tier": "B"
      },
      {
        "name": "迪奥尼索司之援",
        "en": "Dionysus' Aid",
        "slot": "call",
        "effect": "求援向身边所有敌人施加醉酒，持续一段时间。",
        "tier": "B"
      },
      {
        "name": "千杯不醉",
        "en": "High Tolerance",
        "slot": "passive",
        "effect": "你站在欢庆迷雾范围内可以减少所受伤害。",
        "tier": "B"
      },
      {
        "name": "醇香美酒",
        "en": "Premium Vintage",
        "slot": "passive",
        "effect": "捡起仙酒时，获得生命上限；现在立即获得 1 瓶仙酒。",
        "tier": "A"
      },
      {
        "name": "宴后再聚",
        "en": "After Party",
        "slot": "passive",
        "effect": "如果遭遇战后你的生命低于某个阈值，就回复至这个值。",
        "tier": "B"
      },
      {
        "name": "烂醉如泥",
        "en": "Numbing Sensation",
        "slot": "passive",
        "effect": "使醉酒的敌人移动速度降低。",
        "tier": "A"
      },
      {
        "name": "花前劝酒",
        "en": "Peer Pressure",
        "slot": "passive",
        "effect": "处于醉酒状态的敌人每 4 秒就会将其传染给附近的敌人。",
        "tier": "A"
      }
    ]
  },
  {
    "id": "demeter",
    "name": "得墨忒尔",
    "en": "Demeter",
    "title": "四季之母",
    "domain": "寒冷 · 控制",
    "tags": [
      "控制",
      "生存"
    ],
    "rating": "S",
    "difficulty": "低",
    "color": "#a8e6ff",
    "colorSoft": "rgba(126, 216, 255, 0.14)",
    "tagline": "让敌人的脚步，停在冬天来临之前。",
    "overview": "得墨忒尔用寒冷把敌人的动作拖慢，再用冰射线与冰暴把区域封死。罕见收获提供跨神明的稀有度成长，是少数能直接提升构筑上限的辅助祝福。",
    "playstyle": "任何能稳定挂寒冷的构筑都能吃到控制收益。投弹流用水晶射击持续输出，配合寒冰美酒或暴雪射击做成冰霜区域；辅助位优先罕见收获。",
    "core": "寒冷负责让你有时间输出，罕见收获负责提升祝福稀有度。两者都拿。",
    "pros": [
      "控制稳定",
      "罕见收获成长性极高",
      "冰射线适合安全输出"
    ],
    "cons": [
      "伤害偏慢",
      "对冻结免疫敌人收益低",
      "需要时间叠层"
    ],
    "boons": [
      {
        "name": "冰霜攻击",
        "en": "Frost Strike",
        "slot": "attack",
        "effect": "普通攻击更强，可以施加冷冻。",
        "tier": "A"
      },
      {
        "name": "冰霜乱舞",
        "en": "Frost Flourish",
        "slot": "special",
        "effect": "特殊攻击更强，可以施加冷冻。",
        "tier": "A"
      },
      {
        "name": "水晶射击",
        "en": "Crystal Beam",
        "slot": "cast",
        "effect": "投弹放下一颗水晶向敌人发射光线，持续一段时间。",
        "tier": "A"
      },
      {
        "name": "冷风冲刺",
        "en": "Mistral Dash",
        "slot": "dash",
        "effect": "冲刺时会向前刮起一阵狂风，并施加冷冻。",
        "tier": "B"
      },
      {
        "name": "得墨忒尔之援",
        "en": "Demeter's Aid",
        "slot": "call",
        "effect": "求援生成一阵凛冬旋风，可以施加冷冻，持续一段时间。",
        "tier": "B"
      },
      {
        "name": "罕见收获",
        "en": "Rare Crop",
        "slot": "passive",
        "effect": "若干祝福变为普通，然后每场遭遇战提升稀有度。",
        "tier": "S",
        "note": "跨神明提升稀有度，越早拿越赚。"
      },
      {
        "name": "刺骨严寒",
        "en": "Killing Freeze",
        "slot": "passive",
        "effect": "当所有敌人同时处于冷冻状态时，他们的速度会变慢并开始腐朽。",
        "tier": "A"
      },
      {
        "name": "极地风暴",
        "en": "Arctic Blast",
        "slot": "passive",
        "effect": "冷冻叠加至一定层数时，形成一阵冲击波，并清空冷冻状态。",
        "tier": "A"
      },
      {
        "name": "严冬收割",
        "en": "Winter Harvest",
        "slot": "legendary",
        "effect": "处于冷冻状态的敌人的生命值较低时，会爆裂而死，爆炸会施予冷冻。",
        "tier": "S",
        "prereqGroups": [
          {
            "label": "任意两项",
            "options": ["极地风暴", "刺骨严寒", "求生意志"]
          }
        ]
      }
    ]
  },
  {
    "id": "hermes",
    "name": "赫尔墨斯",
    "en": "Hermes",
    "title": "神行之使",
    "domain": "速度 · 闪避",
    "tags": [
      "功能",
      "生存"
    ],
    "rating": "S",
    "difficulty": "低",
    "color": "#ffe08a",
    "colorSoft": "rgba(255, 213, 112, 0.13)",
    "tagline": "速度，就是最优雅的防御。",
    "overview": "赫尔墨斯不占用奥林匹斯众神的核心槽位，却能给任何构筑补上速度、闪避与冲刺次数。他的祝福看似不起眼，实际决定了整套构筑的操作上限。",
    "playstyle": "所有构筑都可以拿。极速反应与大步流星提供机动性，迅捷攻击/重击提升出手频率，欲速则达把移速直接转成伤害。",
    "core": "不知道拿什么时，拿赫尔墨斯。多一次冲刺，往往就是多一条命。",
    "pros": [
      "与任何构筑兼容",
      "提升操作上限",
      "移速可转伤害"
    ],
    "cons": [
      "不提供直接状态伤害",
      "部分祝福需要特定动作",
      "高热度下收益被稀释"
    ],
    "boons": [
      {
        "name": "迅捷攻击",
        "en": "Swift Strike",
        "slot": "passive",
        "effect": "你的普通攻击变得更快。",
        "tier": "A"
      },
      {
        "name": "迅捷乱舞",
        "en": "Swift Flourish",
        "slot": "passive",
        "effect": "你的特殊攻击变得更快。",
        "tier": "A"
      },
      {
        "name": "快速装弹",
        "en": "Quick Reload",
        "slot": "cast",
        "effect": "敌人更快地掉落血石。",
        "tier": "A"
      },
      {
        "name": "极速反应",
        "en": "Greatest Reflex",
        "slot": "dash",
        "effect": "增加可连续冲刺的次数。",
        "tier": "S",
        "note": "多一次冲刺，等于多一次容错。"
      },
      {
        "name": "大步流星",
        "en": "Hyper Sprint",
        "slot": "dash",
        "effect": "使用冲刺后，暂时获得坚韧效果，移动速度提高。",
        "tier": "S"
      },
      {
        "name": "闪躲腾挪",
        "en": "Greater Evasion",
        "slot": "passive",
        "effect": "每当你被击中时，都有一定几率自动发动闪避。",
        "tier": "A"
      },
      {
        "name": "欲速则达",
        "en": "Rush Delivery",
        "slot": "passive",
        "effect": "你会根据当前的移动速度加成获得伤害加成。",
        "tier": "S"
      },
      {
        "name": "自动填弹",
        "en": "Auto Reload",
        "slot": "cast",
        "effect": "让血石自动回复的速度更快。",
        "tier": "B"
      },
      {
        "name": "越战越勇",
        "en": "Second Wind",
        "slot": "passive",
        "effect": "求援后，提升闪避几率和移动速度，持续一段时间。",
        "tier": "A"
      }
    ]
  },
  {
    "id": "chaos",
    "name": "卡俄斯",
    "en": "Chaos",
    "title": "原初虚空",
    "domain": "诅咒 · 祝福",
    "tags": [
      "功能",
      "输出"
    ],
    "rating": "A",
    "difficulty": "中",
    "color": "#b9a6ff",
    "colorSoft": "rgba(151, 122, 255, 0.16)",
    "tagline": "先付出代价，再拿走远超代价的回报。",
    "overview": "混沌祝福以「诅咒换祝福」为核心：先承受数场遭遇的负面效果，诅咒结束后转化为永久增益。它不占用奥林匹斯槽位，越早拿，收益覆盖越久。",
    "playstyle": "在生命与资源充足时进入混沌门。早期拿攻击/特殊/投弹类增益，后期拿移速、闪避或资源收益。血量偏低或热度较高时，不要为了贪祝福硬闯。",
    "core": "混沌是投资，不是即时战力。先算清楚这几场遭遇能不能扛过去。",
    "pros": [
      "不占奥林匹斯槽位",
      "长期收益高",
      "可反复获取"
    ],
    "cons": [
      "短期有负面效果",
      "需要额外房间",
      "高热度下风险放大"
    ],
    "chaos": {
      "intro": "卡俄斯的祝福成对出现：前半段是诅咒，会在指定场次内影响你；诅咒结束后，后半段永久生效。稀有度只影响最终的祝福部分。",
      "steps": [
        "在混沌之门处进入虚空，与卡俄斯对话并选择祝福。",
        "诅咒会持续若干场遭遇，界面左侧会显示剩余场次。",
        "诅咒结束后，对应的永久祝福自动生效，可与其他同类祝福叠加。",
        "混沌祝福不能出售，也不能用力量石榴升级，选择前想清楚构筑方向。"
      ],
      "examples": [
        {
          "curse": "降低生命上限",
          "blessing": "提高攻击或特殊伤害",
          "note": "早期最划算，前提是当前血量能撑过诅咒期。"
        },
        {
          "curse": "减少金币收益",
          "blessing": "提高黑暗或宝石收益",
          "note": "资源型选择，适合不依赖商店的逃亡。"
        },
        {
          "curse": "增加受到的伤害",
          "blessing": "提高移动速度或闪避",
          "note": "操作自信时可选，高热度慎选。"
        },
        {
          "curse": "减少投弹数量",
          "blessing": "提高投弹伤害",
          "note": "投弹流可用，但会改变手感与节奏。"
        }
      ]
    }
  }
];

export const godMap = Object.fromEntries(gods.map((god) => [god.id, god]));

export const getGod = (id) => godMap[id];

export const totalBoons = gods.reduce(
  (sum, god) => sum + (god.boons?.length ?? 0),
  0,
);

export const slotLabel = (id) =>
  SLOTS.find((slot) => slot.id === id)?.label ?? id;
