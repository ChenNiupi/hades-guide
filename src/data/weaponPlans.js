export const weaponPlans = {
  "sword-zagreus": [
    {
      name: "雷海风暴",
      duoId: "sea-storm",
      combo: [
        { god: "zeus", boon: "闪电攻击", tag: "雷普" },
        { god: "poseidon", boon: "暴风乱舞", tag: "海特" },
      ],
      core: ["海上风暴", "静电释放", "风暴闪电"],
      optionalGods: ["athena", "aphrodite", "hermes"],
      optionalNote: "雅典娜补神圣冲刺与减伤；阿弗洛狄忒补虚弱；赫尔墨斯补移速与闪避。",
      play: "普攻接雷，特殊重斩击退触发风暴；用冲刺取消三段斩后摇。",
    },
  ],
  "sword-nemesis": [
    {
      name: "爱猎暴击",
      duoId: "heart-rend",
      combo: [
        { god: "artemis", boon: "致命攻击", tag: "猎普" },
        { god: "aphrodite", boon: "心碎乱舞", tag: "爱特" },
      ],
      core: ["撕心裂肺", "直指要害", "猎人标记"],
      optionalGods: ["athena", "ares", "hermes"],
      optionalNote: "雅典娜补神圣冲刺；阿瑞斯可转仁慈解脱；赫尔墨斯补攻速与闪避。",
      play: "特殊进入暴击窗口，先挂虚弱再打普攻；别让暴击窗口空转。",
    },
  ],
  "sword-poseidon": [
    {
      name: "猎刃投弹",
      duoId: "hunting-blades",
      combo: [
        { god: "ares", boon: "旋刀射击", tag: "战投" },
        { god: "artemis", boon: "致命攻击", tag: "猎普" },
      ],
      core: ["狩猎之刃", "直指要害", "火力支援"],
      optionalGods: ["athena", "zeus", "hermes"],
      optionalNote: "雅典娜补生存；宙斯补投弹数量与雷霆射击；赫尔墨斯补移速和闪避。",
      play: "特殊打落血石，投旋刀后靠普攻收割；保持投弹回收循环。",
    },
  ],
  "sword-arthur": [
    {
      name: "仁慈解脱",
      duoId: "merciful-end",
      combo: [
        { god: "ares", boon: "致命诅咒", tag: "战普" },
        { god: "athena", boon: "神圣乱舞", tag: "雅特" },
      ],
      core: ["仁慈解脱", "灭顶之灾", "铜墙铁壁"],
      optionalGods: ["aphrodite", "demeter", "hermes"],
      optionalNote: "阿弗洛狄忒补虚弱与生存；得墨忒尔补控制；赫尔墨斯补移速。",
      play: "特殊插剑开结界，普攻上厄运，雅典娜特殊反弹引爆；尽量在圈内打重击。",
    },
  ],

  "spear-zagreus": [
    {
      name: "雷海风暴",
      duoId: "sea-storm",
      combo: [
        { god: "zeus", boon: "闪电攻击", tag: "雷普" },
        { god: "poseidon", boon: "海潮冲刺", tag: "海冲" },
      ],
      core: ["海上风暴", "静电释放", "风暴闪电"],
      optionalGods: ["athena", "artemis", "hermes"],
      optionalNote: "雅典娜补冲刺反弹；阿尔忒弥斯补暴击；赫尔墨斯补移速。",
      play: "中距离普攻触发雷，海冲击退触发风暴；特殊投矛补远程消耗。",
    },
  ],
  "spear-achilles": [
    {
      name: "狩猎之刃投弹",
      duoId: "hunting-blades",
      combo: [
        { god: "ares", boon: "旋刀射击", tag: "战投" },
        { god: "artemis", boon: "致命攻击", tag: "猎普" },
      ],
      core: ["狩猎之刃", "直指要害", "火力支援"],
      optionalGods: ["athena", "zeus", "hermes"],
      optionalNote: "雅典娜补生存；宙斯补投弹数量；赫尔墨斯补移速与闪避。",
      play: "特殊→冲锋取回拿到增伤，窗口内投旋刀，再用普攻收割。",
    },
  ],
  "spear-hades": [
    {
      name: "雷海旋击",
      duoId: "sea-storm",
      combo: [
        { god: "zeus", boon: "闪电攻击", tag: "雷普" },
        { god: "poseidon", boon: "暴风乱舞", tag: "海特" },
      ],
      core: ["海上风暴", "静电释放", "风暴闪电"],
      optionalGods: ["ares", "artemis", "athena"],
      optionalNote: "阿瑞斯补厄运；阿尔忒弥斯补暴击收尾；雅典娜补减伤与反弹。",
      play: "旋击标记密集人群，特殊击退触发风暴，再普攻补雷。",
    },
  ],
  "spear-guan-yu": [
    {
      name: "冰根回血",
      duoId: "stubborn-roots",
      combo: [
        { god: "athena", boon: "神圣攻击", tag: "雅普" },
        { god: "demeter", boon: "冷风冲刺", tag: "冰冲" },
      ],
      core: ["根深蒂固", "铜墙铁壁", "刺骨严寒"],
      optionalGods: ["aphrodite", "hermes", "ares"],
      optionalNote: "阿弗洛狄忒补虚弱与减伤；赫尔墨斯补移速；阿瑞斯补厄运输出。",
      play: "用旋击回血，雅典娜反弹与冰冲控制维持血量；残血时靠根深蒂固拖回复。",
    },
  ],

  "shield-zagreus": [
    {
      name: "雷海风暴",
      duoId: "sea-storm",
      combo: [
        { god: "zeus", boon: "闪电攻击", tag: "雷普" },
        { god: "poseidon", boon: "海潮冲刺", tag: "海冲" },
      ],
      core: ["海上风暴", "静电释放", "风暴闪电"],
      optionalGods: ["athena", "ares", "hermes"],
      optionalNote: "雅典娜补格挡与减伤；阿瑞斯补厄运；赫尔墨斯补移速。",
      play: "冲刺攻击贴身，海冲击退触发风暴；弹射盾远程补雷，格挡吃关键招。",
    },
    {
      name: "仁慈解脱",
      duoId: "merciful-end",
      combo: [
        { god: "ares", boon: "致命诅咒", tag: "战普" },
        { god: "athena", boon: "神圣乱舞", tag: "雅特" },
      ],
      core: ["仁慈解脱", "灭顶之灾", "铜墙铁壁"],
      optionalGods: ["aphrodite", "demeter", "hermes"],
      optionalNote: "阿弗洛狄忒补虚弱；得墨忒尔补控制；赫尔墨斯补移速。",
      play: "特殊弹盾触发反弹，普攻上厄运；反弹命中后立刻引爆厄运。",
    },
  ],
  "shield-chaos": [
    {
      name: "雷海弹幕",
      duoId: "sea-storm",
      combo: [
        { god: "zeus", boon: "闪电攻击", tag: "雷普" },
        { god: "poseidon", boon: "暴风乱舞", tag: "海特" },
      ],
      core: ["海上风暴", "静电释放", "风暴闪电"],
      optionalGods: ["artemis", "athena", "hermes"],
      optionalNote: "阿尔忒弥斯补暴击；雅典娜补减伤；赫尔墨斯补移速。",
      play: "冲撞后多盾齐发，每面盾击退触发风暴；普攻雷连锁清群。",
    },
    {
      name: "爱猎弹幕",
      duoId: "heart-rend",
      combo: [
        { god: "artemis", boon: "致命攻击", tag: "猎普" },
        { god: "aphrodite", boon: "心碎乱舞", tag: "爱特" },
      ],
      core: ["撕心裂肺", "直指要害", "猎人标记"],
      optionalGods: ["athena", "ares", "hermes"],
      optionalNote: "雅典娜补生存；阿瑞斯补厄运；赫尔墨斯补移速。",
      play: "多盾齐发叠虚弱，普攻暴击收割；打 BOSS 时注意贴脸。",
    },
  ],
  "shield-zeus": [
    {
      name: "雷海雷盾",
      duoId: "sea-storm",
      combo: [
        { god: "zeus", boon: "闪电攻击", tag: "雷普" },
        { god: "poseidon", boon: "海潮冲刺", tag: "海冲" },
      ],
      core: ["海上风暴", "静电释放", "风暴闪电"],
      optionalGods: ["athena", "aphrodite", "hermes"],
      optionalNote: "雅典娜补减伤；阿弗洛狄忒补虚弱；赫尔墨斯补移速。",
      play: "雷盾丢出后继续普攻，海冲击退触发风暴；别站着等盾回收。",
    },
    {
      name: "寒冰美酒盾",
      duoId: "ice-wine",
      combo: [
        { god: "demeter", boon: "冰霜攻击", tag: "冰普" },
        { god: "dionysus", boon: "致幻射击", tag: "酒投" },
      ],
      core: ["寒冰美酒", "刺骨严寒", "千杯不醉"],
      optionalGods: ["athena", "poseidon", "hermes"],
      optionalNote: "雅典娜补减伤；波塞冬补击退控制；赫尔墨斯补移速。",
      play: "雷盾维持安全区，冰普减速，酒雾持续伤害；适合边跑边打。",
    },
  ],
  "shield-beowulf": [
    {
      name: "猎刃冲撞",
      duoId: "hunting-blades",
      combo: [
        { god: "ares", boon: "旋刀射击", tag: "战投" },
        { god: "artemis", boon: "致命攻击", tag: "猎普" },
      ],
      core: ["狩猎之刃", "直指要害", "火力支援"],
      optionalGods: ["athena", "zeus", "hermes"],
      optionalNote: "雅典娜补生存；宙斯补投弹数量；赫尔墨斯补移速。",
      play: "先把血石装进盾，再冲撞引爆；旋刀清场，普攻暴击补单体。",
    },
    {
      name: "冰寒之拥",
      duoId: "cold-embrace",
      combo: [
        { god: "demeter", boon: "水晶射击", tag: "冰投" },
        { god: "aphrodite", boon: "心碎攻击", tag: "爱普" },
      ],
      core: ["冰寒之拥", "刺骨严寒", "高攀不起"],
      optionalGods: ["athena", "poseidon", "hermes"],
      optionalNote: "雅典娜补减伤；波塞冬补控制；赫尔墨斯补移速。",
      play: "装弹后冲撞引爆冰晶，虚弱放大持续伤害；适合稳扎稳打。",
    },
  ],

  "bow-zagreus": [
    {
      name: "爱猎暴击",
      duoId: "heart-rend",
      combo: [
        { god: "artemis", boon: "致命攻击", tag: "猎普" },
        { god: "aphrodite", boon: "心碎乱舞", tag: "爱特" },
      ],
      core: ["撕心裂肺", "直指要害", "猎人标记"],
      optionalGods: ["athena", "demeter", "hermes"],
      optionalNote: "雅典娜补冲刺反弹；得墨忒尔补控制；赫尔墨斯补移速。",
      play: "保持中远距离蓄满再放，先挂虚弱再接暴击箭；被贴脸先拉开。",
    },
  ],
  "bow-chiron": [
    {
      name: "酒爱战·醉酒流",
      duoId: "low-tolerance",
      combo: [
        { god: "aphrodite", boon: "心碎攻击", tag: "爱普" },
        { god: "dionysus", boon: "醉酒乱舞", tag: "酒特" },
      ],
      core: ["纵情酒色", "花前劝酒", "千杯不醉"],
      optionalGods: ["ares", "athena", "hermes"],
      optionalNote: "阿瑞斯补呕吐诅咒；雅典娜补生存；赫尔墨斯补移速与闪避。",
      play: "普攻标记→特殊追踪叠醉酒；先虚弱再醉酒，纵情酒色才会额外叠层。",
    },
  ],
  "bow-hera": [
    {
      name: "猎刃装箭",
      duoId: "hunting-blades",
      combo: [
        { god: "ares", boon: "旋刀射击", tag: "战投" },
        { god: "artemis", boon: "致命攻击", tag: "猎普" },
      ],
      core: ["狩猎之刃", "直指要害", "火力支援"],
      optionalGods: ["athena", "demeter", "hermes"],
      optionalNote: "雅典娜补生存；得墨忒尔补控制；赫尔墨斯补移速。",
      play: "先把投弹装进箭，再瞄准关键目标；投弹空了就用普攻补节奏。",
    },
  ],
  "bow-rama": [
    {
      name: "醉酒链箭",
      duoId: "splitting-headache",
      combo: [
        { god: "dionysus", boon: "醉酒攻击", tag: "酒普" },
        { god: "artemis", boon: "致命乱舞", tag: "猎特" },
      ],
      core: ["头痛欲裂", "花前劝酒", "直指要害"],
      optionalGods: ["zeus", "aphrodite", "hermes"],
      optionalNote: "宙斯补雷击；阿弗洛狄忒补虚弱；赫尔墨斯补移速。",
      play: "特殊建立链接，普攻分摊伤害；醉酒随时间结算，暴击提升上限。",
    },
  ],

  "fist-zagreus": [
    {
      name: "雷海风暴",
      duoId: "sea-storm",
      combo: [
        { god: "zeus", boon: "闪电攻击", tag: "雷普" },
        { god: "poseidon", boon: "海潮冲刺", tag: "海冲" },
      ],
      core: ["海上风暴", "静电释放", "风暴闪电"],
      optionalGods: ["dionysus", "athena", "hermes"],
      optionalNote: "狄俄尼索斯补醉酒；雅典娜补减伤；赫尔墨斯补闪避。",
      play: "贴脸高频普攻触发雷，海冲击退触发风暴；冲刺取消连段后摇。",
    },
  ],
  "fist-talos": [
    {
      name: "仁慈解脱",
      duoId: "merciful-end",
      combo: [
        { god: "ares", boon: "致命诅咒", tag: "战普" },
        { god: "athena", boon: "神圣乱舞", tag: "雅特" },
      ],
      core: ["仁慈解脱", "灭顶之灾", "铜墙铁壁"],
      optionalGods: ["aphrodite", "artemis", "hermes"],
      optionalNote: "阿弗洛狄忒补虚弱；阿尔忒弥斯补暴击；赫尔墨斯补移速。",
      play: "磁力拉近→普攻上厄运→特殊反弹引爆；把远程敌人拉进近战。",
    },
  ],
  "fist-demeter": [
    {
      name: "冰雷连拳",
      duoId: "cold-fusion",
      combo: [
        { god: "demeter", boon: "冰霜攻击", tag: "冰普" },
        { god: "zeus", boon: "静电释放", tag: "雷被动" },
      ],
      core: ["冷酷聚变", "风暴闪电", "双重雷击"],
      optionalGods: ["poseidon", "dionysus", "hermes"],
      optionalNote: "波塞冬补海冲；狄俄尼索斯补醉酒；赫尔墨斯补闪避。",
      play: "普攻叠冰冻，特殊多段触发雷击；静电释放让感电持续更久。",
    },
  ],
  "fist-gilgamesh": [
    {
      name: "爱猎致残",
      duoId: "heart-rend",
      combo: [
        { god: "artemis", boon: "致命攻击", tag: "猎普" },
        { god: "aphrodite", boon: "心碎乱舞", tag: "爱特" },
      ],
      core: ["撕心裂肺", "直指要害", "猎人标记"],
      optionalGods: ["athena", "ares", "hermes"],
      optionalNote: "雅典娜补生存；阿瑞斯补厄运；赫尔墨斯补额外冲刺。",
      play: "冲刺上勾拳致残，虚弱后集中暴击；致残结束前撤出，别硬吃反打。",
    },
  ],

  "rail-zagreus": [
    {
      name: "醉酒连射",
      duoId: "splitting-headache",
      combo: [
        { god: "dionysus", boon: "醉酒攻击", tag: "酒普" },
        { god: "artemis", boon: "致命乱舞", tag: "猎特" },
      ],
      core: ["头痛欲裂", "花前劝酒", "直指要害"],
      optionalGods: ["zeus", "poseidon", "hermes"],
      optionalNote: "宙斯补雷击；波塞冬补海冲；赫尔墨斯补移速与装弹。",
      play: "持续射击叠醉酒，特殊榴弹补暴击；管理弹匣，别在空仓时被贴脸。",
    },
  ],
  "rail-eris": [
    {
      name: "雷海风暴",
      duoId: "sea-storm",
      combo: [
        { god: "zeus", boon: "闪电攻击", tag: "雷普" },
        { god: "poseidon", boon: "海潮冲刺", tag: "海冲" },
      ],
      core: ["海上风暴", "静电释放", "风暴闪电"],
      optionalGods: ["artemis", "athena", "hermes"],
      optionalNote: "阿尔忒弥斯补暴击；雅典娜补减伤；赫尔墨斯补移速。",
      play: "特殊自爆吃增伤，开火触发雷；海冲击退触发风暴，边打边位移。",
    },
  ],
  "rail-hestia": [
    {
      name: "爱猎狙击",
      duoId: "heart-rend",
      combo: [
        { god: "artemis", boon: "致命攻击", tag: "猎普" },
        { god: "aphrodite", boon: "激情冲刺", tag: "爱冲" },
      ],
      core: ["撕心裂肺", "直指要害", "猎人标记"],
      optionalGods: ["ares", "athena", "hermes"],
      optionalNote: "阿瑞斯补厄运；雅典娜补生存；赫尔墨斯补移速与装弹。",
      play: "手动装填强化弹，冲刺挂虚弱后狙击；别把强化弹打空。",
    },
  ],
  "rail-lucifer": [
    {
      name: "雷光酒雾",
      duoId: "scintillating-feast",
      combo: [
        { god: "zeus", boon: "闪电攻击", tag: "雷普" },
        { god: "dionysus", boon: "致幻射击", tag: "酒投" },
      ],
      core: ["光芒盛宴", "静电释放", "风暴闪电"],
      optionalGods: ["poseidon", "demeter", "athena"],
      optionalNote: "波塞冬补海冲；得墨忒尔补控制；雅典娜补减伤。",
      play: "光束持续触发雷，酒雾引来天雷；地狱火封路并清群。",
    },
  ],
};
