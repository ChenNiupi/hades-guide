export const duos = [
  {
    "id": "sea-storm",
    "gods": [
      "poseidon",
      "zeus"
    ],
    "name": "海上风暴",
    "en": "Sea Storm",
    "effect": "当你的祝福击退敌人时，敌人会被天雷击中。",
    "prereq": "暴风乱舞（海特）＋闪电攻击（雷普）",
    "tier": "S",
    "tags": [
      "输出",
      "高频"
    ],
    "note": "雷海流的核心。攻速越快、击退越频繁，额外雷击就越密。",
    "prereqGroups": [
      {
        "label": "波塞冬",
        "options": [
          {
            "name": "暴风攻击",
            "tag": "海普"
          },
          {
            "name": "暴风乱舞",
            "tag": "海特"
          },
          {
            "name": "洪水射击",
            "tag": "海投"
          },
          {
            "name": "洪水滔天",
            "tag": "海投盾"
          },
          {
            "name": "波塞冬之援",
            "tag": "海援"
          }
        ]
      },
      {
        "label": "宙斯",
        "options": [
          {
            "name": "闪电攻击",
            "tag": "雷普"
          },
          {
            "name": "雷霆乱舞",
            "tag": "雷特"
          },
          {
            "name": "雷霆射击",
            "tag": "雷投"
          },
          {
            "name": "雷鸣电闪",
            "tag": "雷投盾"
          },
          {
            "name": "雷霆冲刺",
            "tag": "雷冲"
          },
          {
            "name": "宙斯之援",
            "tag": "雷援"
          }
        ]
      }
    ]
  },
  {
    "id": "lightning-phalanx",
    "gods": [
      "athena",
      "zeus"
    ],
    "name": "闪电杀阵",
    "en": "Lightning Phalanx",
    "effect": "你的杀阵射击可在敌人之间弹射。",
    "prereq": "闪电攻击（雷普）＋杀阵射击（雅投）",
    "tier": "A",
    "tags": [
      "投弹",
      "输出"
    ],
    "note": "让雅典娜投弹从功能技变成清场技。",
    "prereqGroups": [
      {
        "label": "宙斯",
        "options": [
          {
            "name": "闪电攻击",
            "tag": "雷普"
          },
          {
            "name": "雷霆乱舞",
            "tag": "雷特"
          },
          {
            "name": "雷霆冲刺",
            "tag": "雷冲"
          },
          {
            "name": "宙斯之援",
            "tag": "雷援"
          }
        ]
      },
      {
        "label": "雅典娜",
        "options": [
          {
            "name": "杀阵射击",
            "tag": "雅投"
          }
        ]
      }
    ]
  },
  {
    "id": "vengeful-mood",
    "gods": [
      "zeus",
      "ares"
    ],
    "name": "睚眦必报",
    "en": "Vengeful Mood",
    "effect": "不需受到伤害，即可触发复仇效果。",
    "prereq": "闪电攻击（雷普）＋致命诅咒（战普）＋复仇诅咒（战反）",
    "tier": "A",
    "tags": [
      "输出",
      "反击"
    ],
    "note": "复仇祝福越多越强，适合能稳定挨打但不致命的构筑。",
    "prereqGroups": [
      {
        "label": "宙斯",
        "options": [
          {
            "name": "闪电攻击",
            "tag": "雷普"
          },
          {
            "name": "雷霆乱舞",
            "tag": "雷特"
          },
          {
            "name": "雷霆射击",
            "tag": "雷投"
          },
          {
            "name": "雷霆冲刺",
            "tag": "雷冲"
          },
          {
            "name": "宙斯之援",
            "tag": "雷援"
          },
          {
            "name": "雷鸣电闪",
            "tag": "雷投盾"
          }
        ]
      },
      {
        "label": "阿瑞斯",
        "options": [
          {
            "name": "致命诅咒",
            "tag": "战普"
          },
          {
            "name": "痛苦诅咒",
            "tag": "战特"
          },
          {
            "name": "旋刀射击",
            "tag": "战投"
          },
          {
            "name": "利刃冲刺",
            "tag": "战冲"
          },
          {
            "name": "阿瑞斯之援",
            "tag": "战援"
          },
          {
            "name": "血斩旋风",
            "tag": "战投盾"
          }
        ]
      },
      {
        "label": "反击类",
        "options": [
          {
            "name": "复仇诅咒",
            "tag": "战反"
          },
          {
            "name": "雷神惩击",
            "tag": "雷反"
          },
          {
            "name": "神圣盾卫",
            "tag": "雅反"
          },
          {
            "name": "邀宠召祸",
            "tag": "爱反"
          },
          {
            "name": "冰寒之触",
            "tag": "冰反"
          }
        ]
      }
    ]
  },
  {
    "id": "scintillating-feast",
    "gods": [
      "zeus",
      "dionysus"
    ],
    "name": "光芒盛宴",
    "en": "Scintillating Feast",
    "effect": "你的欢庆迷雾会持续引来天雷。",
    "prereq": "闪电攻击（雷普）＋致幻射击（酒投）",
    "tier": "S",
    "tags": [
      "投弹",
      "清场"
    ],
    "note": "把酒雾变成持续雷暴，群怪与多阶段 BOSS 都很好用。",
    "prereqGroups": [
      {
        "label": "宙斯",
        "options": [
          {
            "name": "闪电攻击",
            "tag": "雷普"
          },
          {
            "name": "雷霆乱舞",
            "tag": "雷特"
          },
          {
            "name": "雷霆冲刺",
            "tag": "雷冲"
          },
          {
            "name": "宙斯之援",
            "tag": "雷援"
          }
        ]
      },
      {
        "label": "狄俄尼索斯",
        "options": [
          {
            "name": "致幻射击",
            "tag": "酒投"
          }
        ]
      }
    ]
  },
  {
    "id": "lightning-rod",
    "gods": [
      "artemis",
      "zeus"
    ],
    "name": "引电血统",
    "en": "Lightning Rod",
    "effect": "掉落的血石每隔一段时间引来一次天雷。",
    "prereq": "致命攻击（猎普）＋闪电攻击（雷普）",
    "tier": "A",
    "tags": [
      "投弹",
      "自动输出"
    ],
    "note": "血石插在地上也能输出，适合投弹后继续拉扯。",
    "prereqGroups": [
      {
        "label": "阿尔忒弥斯",
        "options": [
          {
            "name": "致命攻击",
            "tag": "猎普"
          },
          {
            "name": "致命乱舞",
            "tag": "猎特"
          },
          {
            "name": "会心一击",
            "tag": "猎投"
          },
          {
            "name": "猎手之怒",
            "tag": "猎投盾"
          },
          {
            "name": "猎人冲刺",
            "tag": "猎冲"
          },
          {
            "name": "阿尔忒弥斯之援",
            "tag": "猎援"
          }
        ]
      },
      {
        "label": "宙斯",
        "options": [
          {
            "name": "闪电攻击",
            "tag": "雷普"
          },
          {
            "name": "雷霆冲刺",
            "tag": "雷冲"
          },
          {
            "name": "雷霆乱舞",
            "tag": "雷特"
          },
          {
            "name": "雷霆射击",
            "tag": "雷投"
          },
          {
            "name": "雷鸣电闪",
            "tag": "雷投盾"
          },
          {
            "name": "宙斯之援",
            "tag": "雷援"
          }
        ]
      }
    ]
  },
  {
    "id": "smoldering-air",
    "gods": [
      "zeus",
      "aphrodite"
    ],
    "name": "烟熏火燎",
    "en": "Smoldering Air",
    "effect": "你的神力槽会自动蓄积，但上限变成 25%。",
    "prereq": "心碎攻击（爱普）＋闪电攻击（雷普）",
    "tier": "S",
    "tags": [
      "求援",
      "功能"
    ],
    "note": "让求援变成可循环技能，适合求援本身强度高的构筑。",
    "prereqGroups": [
      {
        "label": "阿弗洛狄忒",
        "options": [
          {
            "name": "心碎攻击",
            "tag": "爱普"
          },
          {
            "name": "心碎乱舞",
            "tag": "爱特"
          },
          {
            "name": "倾心一箭",
            "tag": "爱投"
          },
          {
            "name": "激情冲刺",
            "tag": "爱冲"
          },
          {
            "name": "阿弗洛狄忒之援",
            "tag": "爱援"
          },
          {
            "name": "激情四射",
            "tag": "爱投盾"
          }
        ]
      },
      {
        "label": "宙斯",
        "options": [
          {
            "name": "闪电攻击",
            "tag": "雷普"
          },
          {
            "name": "雷霆冲刺",
            "tag": "雷冲"
          },
          {
            "name": "雷霆乱舞",
            "tag": "雷特"
          },
          {
            "name": "雷霆射击",
            "tag": "雷投"
          },
          {
            "name": "雷鸣电闪",
            "tag": "雷投盾"
          },
          {
            "name": "宙斯之援",
            "tag": "雷援"
          }
        ]
      }
    ]
  },
  {
    "id": "cold-fusion",
    "gods": [
      "demeter",
      "zeus"
    ],
    "name": "冷酷聚变",
    "en": "Cold Fusion",
    "effect": "身负心惊胆战效果的敌人在发起攻击时无法移除这一效果。",
    "prereq": "冰霜攻击（冰普）＋静电释放（雷被动）",
    "tier": "A",
    "tags": [
      "控制",
      "输出"
    ],
    "note": "雷与冰的持续联动，适合能稳定挂寒冷的武器。",
    "prereqGroups": [
      {
        "label": "得墨忒尔",
        "options": [
          {
            "name": "冰霜攻击",
            "tag": "冰普"
          },
          {
            "name": "冰霜乱舞",
            "tag": "冰特"
          },
          {
            "name": "冷风冲刺",
            "tag": "冰冲"
          },
          {
            "name": "得墨忒尔之援",
            "tag": "冰援"
          }
        ]
      },
      {
        "label": "宙斯",
        "options": [
          {
            "name": "静电释放",
            "tag": "雷被动"
          }
        ]
      }
    ]
  },
  {
    "id": "parting-shot",
    "gods": [
      "aphrodite",
      "athena"
    ],
    "name": "临别赠礼",
    "en": "Parting Shot",
    "effect": "你的投弹可以获得所有的背刺伤害加成。",
    "prereq": "神圣攻击（雅普）＋心碎攻击（爱普）",
    "tier": "B",
    "tags": [
      "投弹",
      "爆发"
    ],
    "note": "需要绕背，打大型 BOSS 时更容易触发。",
    "prereqGroups": [
      {
        "label": "雅典娜",
        "options": [
          {
            "name": "神圣攻击",
            "tag": "雅普"
          },
          {
            "name": "杀阵射击",
            "tag": "雅投"
          },
          {
            "name": "神圣乱舞",
            "tag": "雅特"
          },
          {
            "name": "神圣冲刺",
            "tag": "雅冲"
          },
          {
            "name": "雅典娜之援",
            "tag": "雅援"
          }
        ]
      },
      {
        "label": "阿弗洛狄忒",
        "options": [
          {
            "name": "激情冲刺",
            "tag": "爱冲"
          },
          {
            "name": "倾心一箭",
            "tag": "爱投"
          },
          {
            "name": "心碎攻击",
            "tag": "爱普"
          },
          {
            "name": "心碎乱舞",
            "tag": "爱特"
          },
          {
            "name": "阿弗洛狄忒之援",
            "tag": "爱援"
          }
        ]
      }
    ]
  },
  {
    "id": "unshakable-mettle",
    "gods": [
      "poseidon",
      "athena"
    ],
    "name": "无匹之力",
    "en": "Unshakable Mettle",
    "effect": "你不会被 Boss 击晕，同时能减免部分伤害。",
    "prereq": "神圣攻击（雅普）＋暴风攻击（海普）",
    "tier": "A",
    "tags": [
      "防御",
      "高难"
    ],
    "note": "高热度对 BOSS 的稳定保险，生存压力大时很实用。",
    "prereqGroups": [
      {
        "label": "雅典娜",
        "options": [
          {
            "name": "神圣攻击",
            "tag": "雅普"
          },
          {
            "name": "神圣乱舞",
            "tag": "雅特"
          },
          {
            "name": "杀阵射击",
            "tag": "雅投"
          },
          {
            "name": "爆裂杀阵",
            "tag": "雅投盾"
          },
          {
            "name": "雅典娜之援",
            "tag": "雅援"
          }
        ]
      },
      {
        "label": "波塞冬",
        "options": [
          {
            "name": "暴风攻击",
            "tag": "海普"
          },
          {
            "name": "暴风乱舞",
            "tag": "海特"
          },
          {
            "name": "洪水射击",
            "tag": "海投"
          },
          {
            "name": "洪水滔天",
            "tag": "海投盾"
          },
          {
            "name": "波塞冬之援",
            "tag": "海援"
          }
        ]
      }
    ]
  },
  {
    "id": "curse-of-drowning",
    "gods": [
      "poseidon",
      "ares"
    ],
    "name": "溺亡诅咒",
    "en": "Curse of Drowning",
    "effect": "洪水射击变为脉冲，攻击你身边的敌人。",
    "prereq": "致命诅咒（战普）＋洪水射击（海投）",
    "tier": "B",
    "tags": [
      "投弹",
      "近身"
    ],
    "note": "手感变化很大，先试再决定是否作为核心。",
    "prereqGroups": [
      {
        "label": "阿瑞斯",
        "options": [
          {
            "name": "致命诅咒",
            "tag": "战普"
          },
          {
            "name": "痛苦诅咒",
            "tag": "战特"
          },
          {
            "name": "利刃冲刺",
            "tag": "战冲"
          },
          {
            "name": "阿瑞斯之援",
            "tag": "战援"
          }
        ]
      },
      {
        "label": "波塞冬",
        "options": [
          {
            "name": "洪水射击",
            "tag": "海投"
          },
          {
            "name": "洪水滔天",
            "tag": "海投盾"
          }
        ]
      }
    ]
  },
  {
    "id": "exclusive-access",
    "gods": [
      "dionysus",
      "poseidon"
    ],
    "name": "专属体验",
    "en": "Exclusive Access",
    "effect": "提升接下来拿到的祝福的质量，稀有度至少为史诗。",
    "prereq": "暴风攻击（海普）＋醉酒攻击（酒普）",
    "tier": "S",
    "tags": [
      "功能",
      "成长"
    ],
    "note": "越早拿越强，是典型的滚雪球双重祝福。",
    "prereqGroups": [
      {
        "label": "波塞冬",
        "options": [
          {
            "name": "暴风攻击",
            "tag": "海普"
          },
          {
            "name": "暴风乱舞",
            "tag": "海特"
          },
          {
            "name": "洪水射击",
            "tag": "海投"
          },
          {
            "name": "洪水滔天",
            "tag": "海投盾"
          },
          {
            "name": "海潮冲刺",
            "tag": "海冲"
          },
          {
            "name": "波塞冬之援",
            "tag": "海援"
          }
        ]
      },
      {
        "label": "狄俄尼索斯",
        "options": [
          {
            "name": "醉酒攻击",
            "tag": "酒普"
          },
          {
            "name": "醉酒乱舞",
            "tag": "酒特"
          },
          {
            "name": "致幻射击",
            "tag": "酒投"
          },
          {
            "name": "致幻爆破",
            "tag": "酒投盾"
          },
          {
            "name": "醉酒冲刺",
            "tag": "酒冲"
          },
          {
            "name": "迪奥尼索司之援",
            "tag": "酒援"
          }
        ]
      }
    ]
  },
  {
    "id": "mirage-shot",
    "gods": [
      "poseidon",
      "artemis"
    ],
    "name": "蜃气射击",
    "en": "Mirage Shot",
    "effect": "投弹时会多射出一发，但这一发的伤害较低。",
    "prereq": "致命攻击（猎普）＋暴风攻击（海普）",
    "tier": "A",
    "tags": [
      "投弹",
      "输出"
    ],
    "note": "直接提高投弹数量，与投弹流相性极好。",
    "prereqGroups": [
      {
        "label": "阿尔忒弥斯",
        "options": [
          {
            "name": "致命攻击",
            "tag": "猎普"
          },
          {
            "name": "致命乱舞",
            "tag": "猎特"
          },
          {
            "name": "会心一击",
            "tag": "猎投"
          },
          {
            "name": "猎手之怒",
            "tag": "猎投盾"
          },
          {
            "name": "阿尔忒弥斯之援",
            "tag": "猎援"
          }
        ]
      },
      {
        "label": "波塞冬",
        "options": [
          {
            "name": "暴风攻击",
            "tag": "海普"
          },
          {
            "name": "暴风乱舞",
            "tag": "海特"
          },
          {
            "name": "洪水射击",
            "tag": "海投"
          },
          {
            "name": "洪水滔天",
            "tag": "海投盾"
          },
          {
            "name": "海潮冲刺",
            "tag": "海冲"
          },
          {
            "name": "波塞冬之援",
            "tag": "海援"
          }
        ]
      }
    ]
  },
  {
    "id": "sweet-nectar",
    "gods": [
      "aphrodite",
      "poseidon"
    ],
    "name": "甘甜蜜露",
    "en": "Sweet Nectar",
    "effect": "提升力量石榴的效果。",
    "prereq": "暴风攻击（海普）＋心碎攻击（爱普）",
    "tier": "A",
    "tags": [
      "功能",
      "成长"
    ],
    "note": "适合以石榴为主的成长路线，越早拿收益越高。",
    "prereqGroups": [
      {
        "label": "波塞冬",
        "options": [
          {
            "name": "暴风攻击",
            "tag": "海普"
          },
          {
            "name": "暴风乱舞",
            "tag": "海特"
          },
          {
            "name": "洪水射击",
            "tag": "海投"
          },
          {
            "name": "洪水滔天",
            "tag": "海投盾"
          },
          {
            "name": "海潮冲刺",
            "tag": "海冲"
          },
          {
            "name": "波塞冬之援",
            "tag": "海援"
          }
        ]
      },
      {
        "label": "阿弗洛狄忒",
        "options": [
          {
            "name": "激情冲刺",
            "tag": "爱冲"
          },
          {
            "name": "倾心一箭",
            "tag": "爱投"
          },
          {
            "name": "心碎攻击",
            "tag": "爱普"
          },
          {
            "name": "心碎乱舞",
            "tag": "爱特"
          },
          {
            "name": "阿弗洛狄忒之援",
            "tag": "爱援"
          },
          {
            "name": "激情四射",
            "tag": "爱投盾"
          }
        ]
      }
    ]
  },
  {
    "id": "blizzard-shot",
    "gods": [
      "poseidon",
      "demeter"
    ],
    "name": "暴雪射击",
    "en": "Blizzard Shot",
    "effect": "投弹射出的投掷物会缓慢移动，可以穿透敌人，并向其周围发射碎片。",
    "prereq": "冰霜攻击（冰普）＋洪水射击（海投）",
    "tier": "A",
    "tags": [
      "投弹",
      "控制"
    ],
    "note": "把投弹变成缓慢推进的冰霜弹幕，适合狭窄房间。",
    "prereqGroups": [
      {
        "label": "得墨忒尔",
        "options": [
          {
            "name": "冰霜攻击",
            "tag": "冰普"
          },
          {
            "name": "冰霜乱舞",
            "tag": "冰特"
          },
          {
            "name": "冷风冲刺",
            "tag": "冰冲"
          },
          {
            "name": "得墨忒尔之援",
            "tag": "冰援"
          }
        ]
      },
      {
        "label": "波塞冬",
        "options": [
          {
            "name": "洪水射击",
            "tag": "海投"
          }
        ]
      }
    ]
  },
  {
    "id": "merciful-end",
    "gods": [
      "athena",
      "ares"
    ],
    "name": "仁慈解脱",
    "en": "Merciful End",
    "effect": "当你以带有反弹效果的攻击击中厄运附身的敌人时，将立即触发厄运的伤害，并将其移除；如此触发厄运时可造成额外伤害。",
    "prereq": "致命诅咒（战普）＋神圣攻击（雅普）",
    "tier": "S",
    "tags": [
      "输出",
      "爆发"
    ],
    "note": "攻防一体的顶级组合。神圣冲刺既是防御，也是引爆器。",
    "prereqGroups": [
      {
        "label": "阿瑞斯",
        "options": [
          {
            "name": "致命诅咒",
            "tag": "战普"
          },
          {
            "name": "痛苦诅咒",
            "tag": "战特"
          }
        ]
      },
      {
        "label": "雅典娜",
        "options": [
          {
            "name": "神圣攻击",
            "tag": "雅普"
          },
          {
            "name": "神圣乱舞",
            "tag": "雅特"
          }
        ]
      }
    ]
  },
  {
    "id": "calculated-risk",
    "gods": [
      "dionysus",
      "athena"
    ],
    "name": "风险管理",
    "en": "Calculated Risk",
    "effect": "敌人的远程射击速度变慢。",
    "prereq": "神圣攻击（雅普）＋醉酒攻击（酒普）",
    "tier": "B",
    "tags": [
      "防御",
      "控制"
    ],
    "note": "面对弹幕型敌人很舒服，但需要两位神的前置。",
    "prereqGroups": [
      {
        "label": "雅典娜",
        "options": [
          {
            "name": "神圣攻击",
            "tag": "雅普"
          },
          {
            "name": "神圣乱舞",
            "tag": "雅特"
          },
          {
            "name": "神圣冲刺",
            "tag": "雅冲"
          },
          {
            "name": "雅典娜之援",
            "tag": "雅援"
          }
        ]
      },
      {
        "label": "狄俄尼索斯",
        "options": [
          {
            "name": "醉酒攻击",
            "tag": "酒普"
          },
          {
            "name": "醉酒乱舞",
            "tag": "酒特"
          },
          {
            "name": "醉酒冲刺",
            "tag": "酒冲"
          },
          {
            "name": "迪奥尼索司之援",
            "tag": "酒援"
          }
        ]
      }
    ]
  },
  {
    "id": "deadly-reversal",
    "gods": [
      "artemis",
      "athena"
    ],
    "name": "致命还击",
    "en": "Deadly Reversal",
    "effect": "反弹成功触发时，暂时提升暴击几率。",
    "prereq": "致命攻击（猎普）＋神圣攻击（雅普）",
    "tier": "A",
    "tags": [
      "输出",
      "反击"
    ],
    "note": "需要主动接弹，适合熟悉敌人弹道的玩家。",
    "prereqGroups": [
      {
        "label": "阿尔忒弥斯",
        "options": [
          {
            "name": "致命攻击",
            "tag": "猎普"
          },
          {
            "name": "致命乱舞",
            "tag": "猎特"
          },
          {
            "name": "会心一击",
            "tag": "猎投"
          },
          {
            "name": "猎手之怒",
            "tag": "猎投盾"
          },
          {
            "name": "阿尔忒弥斯之援",
            "tag": "猎援"
          }
        ]
      },
      {
        "label": "雅典娜",
        "options": [
          {
            "name": "神圣攻击",
            "tag": "雅普"
          },
          {
            "name": "神圣乱舞",
            "tag": "雅特"
          }
        ]
      }
    ]
  },
  {
    "id": "stubborn-roots",
    "gods": [
      "demeter",
      "athena"
    ],
    "name": "根深蒂固",
    "en": "Stubborn Roots",
    "effect": "当你的死里逃生耗尽时，你的生命值会缓慢恢复。",
    "prereq": "神圣攻击（雅普）＋冰霜攻击（冰普）",
    "tier": "A",
    "tags": [
      "防御",
      "续航"
    ],
    "note": "高热度下的回血保险，死亡反抗耗尽后仍能续航。",
    "prereqGroups": [
      {
        "label": "雅典娜",
        "options": [
          {
            "name": "神圣攻击",
            "tag": "雅普"
          },
          {
            "name": "神圣乱舞",
            "tag": "雅特"
          },
          {
            "name": "杀阵射击",
            "tag": "雅投"
          },
          {
            "name": "爆裂杀阵",
            "tag": "雅投盾"
          },
          {
            "name": "神圣冲刺",
            "tag": "雅冲"
          },
          {
            "name": "雅典娜之援",
            "tag": "雅援"
          }
        ]
      },
      {
        "label": "得墨忒尔",
        "options": [
          {
            "name": "冰霜攻击",
            "tag": "冰普"
          },
          {
            "name": "冷风冲刺",
            "tag": "冰冲"
          },
          {
            "name": "冰霜乱舞",
            "tag": "冰特"
          },
          {
            "name": "水晶射击",
            "tag": "冰投"
          },
          {
            "name": "冰魂素魄",
            "tag": "冰投盾"
          },
          {
            "name": "得墨忒尔之援",
            "tag": "冰援"
          }
        ]
      }
    ]
  },
  {
    "id": "hunting-blades",
    "gods": [
      "artemis",
      "ares"
    ],
    "name": "狩猎之刃",
    "en": "Hunting Blades",
    "effect": "投弹放出的剑刃旋风速度更快，且能索敌。",
    "prereq": "旋刀射击（战投）＋致命攻击（猎普）",
    "tier": "S",
    "tags": [
      "投弹",
      "自动输出"
    ],
    "note": "投弹流的顶级答案。丢出去之后专心走位即可。",
    "prereqGroups": [
      {
        "label": "阿瑞斯",
        "options": [
          {
            "name": "旋刀射击",
            "tag": "战投"
          }
        ]
      },
      {
        "label": "阿尔忒弥斯",
        "options": [
          {
            "name": "致命攻击",
            "tag": "猎普"
          },
          {
            "name": "致命乱舞",
            "tag": "猎特"
          },
          {
            "name": "猎人冲刺",
            "tag": "猎冲"
          },
          {
            "name": "阿尔忒弥斯之援",
            "tag": "猎援"
          }
        ]
      }
    ]
  },
  {
    "id": "curse-of-longing",
    "gods": [
      "ares",
      "aphrodite"
    ],
    "name": "求而不得",
    "en": "Curse of Longing",
    "effect": "处于虚弱状态的敌人如果再被施以厄运，会持续受到厄运的伤害，但每次伤害递减。",
    "prereq": "致命诅咒（战普）＋心碎攻击（爱普）",
    "tier": "A",
    "tags": [
      "输出",
      "持续伤害"
    ],
    "note": "适合打完一套就拉开距离的拉扯打法。",
    "prereqGroups": [
      {
        "label": "阿瑞斯",
        "options": [
          {
            "name": "致命诅咒",
            "tag": "战普"
          },
          {
            "name": "痛苦诅咒",
            "tag": "战特"
          }
        ]
      },
      {
        "label": "阿弗洛狄忒",
        "options": [
          {
            "name": "激情冲刺",
            "tag": "爱冲"
          },
          {
            "name": "倾心一箭",
            "tag": "爱投"
          },
          {
            "name": "心碎攻击",
            "tag": "爱普"
          },
          {
            "name": "心碎乱舞",
            "tag": "爱特"
          },
          {
            "name": "激情四射",
            "tag": "爱投盾"
          }
        ]
      }
    ]
  },
  {
    "id": "freezing-vortex",
    "gods": [
      "ares",
      "demeter"
    ],
    "name": "冰寒风暴",
    "en": "Freezing Vortex",
    "effect": "为投弹附加冷冻效果，但范围缩小，移动速度也会变慢。",
    "prereq": "旋刀射击（战投）＋冰霜攻击（冰普）",
    "tier": "A",
    "tags": [
      "控制",
      "投弹"
    ],
    "note": "把敌人锁在裂隙里，代价是范围缩小。",
    "prereqGroups": [
      {
        "label": "阿瑞斯",
        "options": [
          {
            "name": "旋刀射击",
            "tag": "战投"
          },
          {
            "name": "血斩旋风",
            "tag": "战投盾"
          }
        ]
      },
      {
        "label": "得墨忒尔",
        "options": [
          {
            "name": "冰霜攻击",
            "tag": "冰普"
          },
          {
            "name": "冷风冲刺",
            "tag": "冰冲"
          },
          {
            "name": "冰霜乱舞",
            "tag": "冰特"
          },
          {
            "name": "得墨忒尔之援",
            "tag": "冰援"
          }
        ]
      }
    ]
  },
  {
    "id": "curse-of-nausea",
    "gods": [
      "dionysus",
      "ares"
    ],
    "name": "呕吐诅咒",
    "en": "Curse of Nausea",
    "effect": "醉酒更快生效。",
    "prereq": "致命诅咒（战普）＋醉酒攻击（酒普）",
    "tier": "A",
    "tags": [
      "输出",
      "持续伤害"
    ],
    "note": "让醉酒伤害更快跳完，爆发更及时。",
    "prereqGroups": [
      {
        "label": "阿瑞斯",
        "options": [
          {
            "name": "致命诅咒",
            "tag": "战普"
          },
          {
            "name": "痛苦诅咒",
            "tag": "战特"
          },
          {
            "name": "复仇诅咒",
            "tag": "战反"
          }
        ]
      },
      {
        "label": "狄俄尼索斯",
        "options": [
          {
            "name": "醉酒攻击",
            "tag": "酒普"
          },
          {
            "name": "醉酒冲刺",
            "tag": "酒冲"
          },
          {
            "name": "醉酒乱舞",
            "tag": "酒特"
          },
          {
            "name": "迪奥尼索司之援",
            "tag": "酒援"
          }
        ]
      }
    ]
  },
  {
    "id": "low-tolerance",
    "gods": [
      "dionysus",
      "aphrodite"
    ],
    "name": "纵情酒色",
    "en": "Low Tolerance",
    "effect": "处于虚弱状态的敌人可以被叠加更多次的醉酒。",
    "prereq": "醉酒攻击（酒普）＋心碎攻击（爱普）",
    "tier": "A",
    "tags": [
      "输出",
      "持续伤害"
    ],
    "note": "先挂虚弱，再叠醉酒，是醉酒流的标准流程。",
    "prereqGroups": [
      {
        "label": "狄俄尼索斯",
        "options": [
          {
            "name": "醉酒攻击",
            "tag": "酒普"
          },
          {
            "name": "醉酒乱舞",
            "tag": "酒特"
          },
          {
            "name": "醉酒冲刺",
            "tag": "酒冲"
          },
          {
            "name": "迪奥尼索司之援",
            "tag": "酒援"
          }
        ]
      },
      {
        "label": "阿弗洛狄忒",
        "options": [
          {
            "name": "激情冲刺",
            "tag": "爱冲"
          },
          {
            "name": "倾心一箭",
            "tag": "爱投"
          },
          {
            "name": "心碎攻击",
            "tag": "爱普"
          },
          {
            "name": "心碎乱舞",
            "tag": "爱特"
          },
          {
            "name": "激情四射",
            "tag": "爱投盾"
          }
        ]
      }
    ]
  },
  {
    "id": "heart-rend",
    "gods": [
      "artemis",
      "aphrodite"
    ],
    "name": "撕心裂肺",
    "en": "Heart Rend",
    "effect": "处于虚弱状态的敌人会受到更高的暴击伤害。",
    "prereq": "致命攻击（猎普）＋心碎攻击（爱普）",
    "tier": "S",
    "tags": [
      "输出",
      "暴击"
    ],
    "note": "暴击流的顶级增伤。先虚弱，再暴击，数字非常夸张。",
    "prereqGroups": [
      {
        "label": "阿尔忒弥斯",
        "options": [
          {
            "name": "致命攻击",
            "tag": "猎普"
          },
          {
            "name": "致命乱舞",
            "tag": "猎特"
          },
          {
            "name": "会心一击",
            "tag": "猎投"
          },
          {
            "name": "猎手之怒",
            "tag": "猎投盾"
          }
        ]
      },
      {
        "label": "阿弗洛狄忒",
        "options": [
          {
            "name": "激情冲刺",
            "tag": "爱冲"
          },
          {
            "name": "倾心一箭",
            "tag": "爱投"
          },
          {
            "name": "心碎攻击",
            "tag": "爱普"
          },
          {
            "name": "心碎乱舞",
            "tag": "爱特"
          },
          {
            "name": "激情四射",
            "tag": "爱投盾"
          }
        ]
      }
    ]
  },
  {
    "id": "cold-embrace",
    "gods": [
      "aphrodite",
      "demeter"
    ],
    "name": "冰寒之拥",
    "en": "Cold Embrace",
    "effect": "你的投弹放置的水晶会向你发射光束，持续时间延长。",
    "prereq": "水晶射击（冰投）＋心碎攻击（爱普）",
    "tier": "A",
    "tags": [
      "投弹",
      "输出"
    ],
    "note": "与水晶射击绑定，把水晶变成贴身光束。",
    "prereqGroups": [
      {
        "label": "得墨忒尔",
        "options": [
          {
            "name": "水晶射击",
            "tag": "冰投"
          }
        ]
      },
      {
        "label": "阿弗洛狄忒",
        "options": [
          {
            "name": "心碎攻击",
            "tag": "爱普"
          },
          {
            "name": "激情冲刺",
            "tag": "爱冲"
          },
          {
            "name": "心碎乱舞",
            "tag": "爱特"
          },
          {
            "name": "阿弗洛狄忒之援",
            "tag": "爱援"
          }
        ]
      }
    ]
  },
  {
    "id": "ice-wine",
    "gods": [
      "demeter",
      "dionysus"
    ],
    "name": "寒冰美酒",
    "en": "Ice Wine",
    "effect": "投弹会稍作延迟，然后在目标位置造成欢庆迷雾的爆炸，对附近的敌人造成伤害并施加冷冻。",
    "prereq": "冰霜攻击（冰普）＋致幻射击（酒投）",
    "tier": "A",
    "tags": [
      "投弹",
      "控制"
    ],
    "note": "冰雾区域兼具持续伤害与减速，适合拉扯。",
    "prereqGroups": [
      {
        "label": "得墨忒尔",
        "options": [
          {
            "name": "冰霜攻击",
            "tag": "冰普"
          },
          {
            "name": "冰霜乱舞",
            "tag": "冰特"
          },
          {
            "name": "冷风冲刺",
            "tag": "冰冲"
          },
          {
            "name": "得墨忒尔之援",
            "tag": "冰援"
          }
        ]
      },
      {
        "label": "狄俄尼索斯",
        "options": [
          {
            "name": "致幻射击",
            "tag": "酒投"
          },
          {
            "name": "致幻爆破",
            "tag": "酒投盾"
          }
        ]
      }
    ]
  },
  {
    "id": "crystal-clarity",
    "gods": [
      "demeter",
      "artemis"
    ],
    "name": "冰寒射线",
    "en": "Crystal Clarity",
    "effect": "投弹更强，瞄准敌人的速度更快。",
    "prereq": "致命攻击（猎普）＋水晶射击（冰投）",
    "tier": "A",
    "tags": [
      "投弹",
      "输出"
    ],
    "note": "强化水晶射击的索敌与伤害。",
    "prereqGroups": [
      {
        "label": "阿尔忒弥斯",
        "options": [
          {
            "name": "致命攻击",
            "tag": "猎普"
          },
          {
            "name": "致命乱舞",
            "tag": "猎特"
          },
          {
            "name": "猎人冲刺",
            "tag": "猎冲"
          },
          {
            "name": "阿尔忒弥斯之援",
            "tag": "猎援"
          }
        ]
      },
      {
        "label": "得墨忒尔",
        "options": [
          {
            "name": "水晶射击",
            "tag": "冰投"
          }
        ]
      }
    ]
  },
  {
    "id": "splitting-headache",
    "gods": [
      "dionysus",
      "artemis"
    ],
    "name": "头痛欲裂",
    "en": "Splitting Headache",
    "effect": "身负醉酒的敌人更容易被暴击。",
    "prereq": "醉酒攻击（酒普）＋致命攻击（猎普）",
    "tier": "A",
    "tags": [
      "输出",
      "持续伤害"
    ],
    "note": "醉酒伤害与暴击联动，适合高频叠醉酒的武器。",
    "prereqGroups": [
      {
        "label": "狄俄尼索斯",
        "options": [
          {
            "name": "醉酒攻击",
            "tag": "酒普"
          },
          {
            "name": "醉酒冲刺",
            "tag": "酒冲"
          },
          {
            "name": "醉酒乱舞",
            "tag": "酒特"
          },
          {
            "name": "迪奥尼索司之援",
            "tag": "酒援"
          }
        ]
      },
      {
        "label": "阿尔忒弥斯",
        "options": [
          {
            "name": "致命攻击",
            "tag": "猎普"
          },
          {
            "name": "致命乱舞",
            "tag": "猎特"
          },
          {
            "name": "会心一击",
            "tag": "猎投"
          },
          {
            "name": "阿尔忒弥斯之援",
            "tag": "猎援"
          }
        ]
      }
    ]
  }
];

export const duoByGod = (godId) =>
  duos.filter((duo) => duo.gods.includes(godId));

export const duoMap = Object.fromEntries(duos.map((duo) => [duo.id, duo]));
