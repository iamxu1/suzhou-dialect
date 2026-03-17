const vocabularyData = [
    {
        "id": "hello",
        "chinese": "你好",
        "pinyin": "nong hao",
        "meaning": "你好 - 问候语",
        "category": "greetings",
        "example": "你好，今天天气真好。"
    },
    {
        "id": "good_morning",
        "chinese": "早上好",
        "pinyin": "zao shang hao",
        "meaning": "早上好 - 早晨问候",
        "category": "greetings",
        "example": "早上好，吃早饭了吗？"
    },
    {
        "id": "good_evening",
        "chinese": "晚上好",
        "pinyin": "wa shang hao",
        "meaning": "晚上好 - 晚间问候",
        "category": "greetings",
        "example": "晚上好，今天辛苦了。"
    },
    {
        "id": "goodbye",
        "chinese": "再见",
        "pinyin": "zai jian",
        "meaning": "再见 - 告别语",
        "category": "greetings",
        "example": "再见，明天见。"
    },
    {
        "id": "thank_you",
        "chinese": "谢谢",
        "pinyin": "jia jia",
        "meaning": "谢谢 - 感谢语",
        "category": "greetings",
        "example": "谢谢你的帮助。"
    },
    {
        "id": "sorry",
        "chinese": "对不起",
        "pinyin": "de bu qi",
        "meaning": "对不起 - 道歉语",
        "category": "greetings",
        "example": "对不起，我迟到了。"
    },
    {
        "id": "no_problem",
        "chinese": "没关系",
        "pinyin": "me guan xi",
        "meaning": "没关系 - 宽容语",
        "category": "greetings",
        "example": "没关系，下次注意就好。"
    },
    {
        "id": "excuse_me",
        "chinese": "请问",
        "pinyin": "qing men",
        "meaning": "请问 - 礼貌询问",
        "category": "greetings",
        "example": "请问，这是什么地方？"
    },
    {
        "id": "okay",
        "chinese": "好的",
        "pinyin": "hao di",
        "meaning": "好的 - 同意",
        "category": "greetings",
        "example": "好的，我明白了。"
    },
    {
        "id": "youre_welcome",
        "chinese": "不客气",
        "pinyin": "bu ke qi",
        "meaning": "不客气 - 回应感谢",
        "category": "greetings",
        "example": "不客气，这是我应该做的。"
    },
    {
        "id": "one",
        "chinese": "一",
        "pinyin": "yih",
        "meaning": "数字一",
        "category": "numbers",
        "example": "我要一个苹果。"
    },
    {
        "id": "two",
        "chinese": "二",
        "pinyin": "nyi",
        "meaning": "数字二",
        "category": "numbers",
        "example": "我有两个朋友。"
    },
    {
        "id": "three",
        "chinese": "三",
        "pinyin": "se",
        "meaning": "数字三",
        "category": "numbers",
        "example": "今天星期三。"
    },
    {
        "id": "four",
        "chinese": "四",
        "pinyin": "sy",
        "meaning": "数字四",
        "category": "numbers",
        "example": "房间在四楼。"
    },
    {
        "id": "five",
        "chinese": "五",
        "pinyin": "ng",
        "meaning": "数字五",
        "category": "numbers",
        "example": "我五点下班。"
    },
    {
        "id": "six",
        "chinese": "六",
        "pinyin": "loh",
        "meaning": "数字六",
        "category": "numbers",
        "example": "今天六号。"
    },
    {
        "id": "seven",
        "chinese": "七",
        "pinyin": "tshih",
        "meaning": "数字七",
        "category": "numbers",
        "example": "七点见面。"
    },
    {
        "id": "eight",
        "chinese": "八",
        "pinyin": "pah",
        "meaning": "数字八",
        "category": "numbers",
        "example": "八个人一起去。"
    },
    {
        "id": "nine",
        "chinese": "九",
        "pinyin": "ciu",
        "meaning": "数字九",
        "category": "numbers",
        "example": "九月份去苏州。"
    },
    {
        "id": "ten",
        "chinese": "十",
        "pinyin": "zeh",
        "meaning": "数字十",
        "category": "numbers",
        "example": "十点钟睡觉。"
    },
    {
        "id": "father",
        "chinese": "爸爸",
        "pinyin": "ba ba",
        "meaning": "父亲",
        "category": "common",
        "example": "我爸爸在苏州工作。"
    },
    {
        "id": "mother",
        "chinese": "妈妈",
        "pinyin": "ma ma",
        "meaning": "母亲",
        "category": "common",
        "example": "妈妈做的菜很好吃。"
    },
    {
        "id": "eat",
        "chinese": "吃饭",
        "pinyin": "qih van",
        "meaning": "用餐",
        "category": "common",
        "example": "我们一起去吃饭吧。"
    },
    {
        "id": "drink",
        "chinese": "喝水",
        "pinyin": "hoh sy",
        "meaning": "饮用",
        "category": "common",
        "example": "多喝水对身体好。"
    },
    {
        "id": "sleep",
        "chinese": "睡觉",
        "pinyin": "kau ao",
        "meaning": "休息睡眠",
        "category": "common",
        "example": "该睡觉了，晚安。"
    },
    {
        "id": "read",
        "chinese": "读书",
        "pinyin": "doh sy",
        "meaning": "阅读学习",
        "category": "common",
        "example": "我喜欢读书。"
    },
    {
        "id": "work",
        "chinese": "工作",
        "pinyin": "gong zoh",
        "meaning": "职业工作",
        "category": "common",
        "example": "我在苏州工作。"
    },
    {
        "id": "friend",
        "chinese": "朋友",
        "pinyin": "pang yu",
        "meaning": "好友",
        "category": "common",
        "example": "他是我的好朋友。"
    },
    {
        "id": "home",
        "chinese": "家",
        "pinyin": "ga",
        "meaning": "家庭住所",
        "category": "common",
        "example": "我回家吃饭。"
    },
    {
        "id": "school",
        "chinese": "学校",
        "pinyin": "oh gau",
        "meaning": "教育机构",
        "category": "common",
        "example": "我在学校学习苏州话。"
    },
    {
        "id": "today",
        "chinese": "今天",
        "pinyin": "kin ti",
        "meaning": "当日",
        "category": "common",
        "example": "今天天气很好。"
    },
    {
        "id": "tomorrow",
        "chinese": "明天",
        "pinyin": "men ti",
        "meaning": "次日",
        "category": "common",
        "example": "明天我们去苏州。"
    },
    {
        "id": "yesterday",
        "chinese": "昨天",
        "pinyin": "zoh ti",
        "meaning": "前一日",
        "category": "common",
        "example": "昨天我去了苏州。"
    },
    {
        "id": "what",
        "chinese": "什么",
        "pinyin": "sa",
        "meaning": "疑问词",
        "category": "common",
        "example": "这是什么？"
    },
    {
        "id": "where",
        "chinese": "哪里",
        "pinyin": "a li",
        "meaning": "地点疑问",
        "category": "common",
        "example": "你在哪里？"
    },
    {
        "id": "how",
        "chinese": "怎么",
        "pinyin": "nang",
        "meaning": "方式疑问",
        "category": "common",
        "example": "这个怎么说？"
    },
    {
        "id": "how_much",
        "chinese": "多少",
        "pinyin": "du sy",
        "meaning": "数量疑问",
        "category": "common",
        "example": "这个多少钱？"
    },
    {
        "id": "when",
        "chinese": "什么时候",
        "pinyin": "sa zoh hou",
        "meaning": "时间疑问",
        "category": "common",
        "example": "你什么时候来？"
    },
    {
        "id": "why",
        "chinese": "为什么",
        "pinyin": "ue sa",
        "meaning": "原因疑问",
        "category": "common",
        "example": "你为什么学苏州话？"
    },
    {
        "id": "who",
        "chinese": "谁",
        "pinyin": "sa",
        "meaning": "人物疑问",
        "category": "common",
        "example": "那是谁？"
    }
];