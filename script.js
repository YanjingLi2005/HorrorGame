const NODES = [
  {
    "id": "n1",
    "chapter": 0,
    "title": "开馆公告",
    "type": "公开展厅 / 首页",
    "time": "06:12",
    "body": "白桦小学数字纪念馆将于今日 08:00 自动开馆。\n\n本次维护内容：校史页面、照片目录、课堂复原模型、留言系统。馆方要求先修复公开展区，内部档案暂不开放。",
    "footerNote": "若首页跳转失败，请从“校史时间轴”进入。",
    "objective": "首页跳转脚本失效。",
    "puzzle": {
      "type": "text",
      "answers": [
        "校史时间轴"
      ],
      "unlock": "n2",
      "clue": "校史时间轴"
    },
    "hints": [
      "看公告最后一段。",
      "找带引号的页面名。",
      "校史时间轴"
    ]
  },
  {
    "id": "n2",
    "chapter": 0,
    "title": "校史时间轴",
    "type": "公开展厅 / 校史页面",
    "time": "06:16",
    "body": "1912：白桦小学成立。\n1931：二号教学楼扩建。\n1946：学校列入战后教育恢复计划。\n\n1946 年 9 月 1 日被标为“复课展示日”。鼠标移过该日期时，页面短暂显示：照片目录待修复。\n\n管理员备注：如果需要进入维护后台，临时密码为“建校年份 + 展示月日”。",
    "objective": "维护后台需要临时口令。口令来自这页最早的年份和被标记的日期。",
    "puzzle": {
      "type": "text",
      "answers": [
        "19120901"
      ],
      "unlock": "n3",
      "clue": "维护后台密码：19120901"
    },
    "hints": [
      "页面上有一个建校年份。",
      "展示日期是 9 月 1 日。",
      "19120901"
    ]
  },
  {
    "id": "n3",
    "chapter": 0,
    "title": "照片目录",
    "type": "维护后台 / 公开照片",
    "time": "06:20",
    "body": "照片目录：\n17  校门修缮\n18  操场东侧\n19  复课第一日\n20  教师办公室\n\n系统提示：第 19 项说明文字存在两个版本。请先选择需要修复的照片编号。",
    "puzzle": {
      "type": "choice",
      "options": [
        "17",
        "18",
        "19",
        "20"
      ],
      "answer": "19",
      "unlock": "n4",
      "clue": "照片编号：19"
    },
    "hints": [
      "看目录备注。",
      "冲突项是第 19 项。",
      "选择 19"
    ]
  },
  {
    "id": "n4",
    "chapter": 0,
    "title": "复课第一日",
    "type": "公开照片 / 说明页",
    "time": "06:23",
    "body": "公开说明：\n九月一日清晨，白桦小学二年甲班教室整洁明亮，复课展示顺利完成。黑板、课桌与学习用品共同呈现出战后教育恢复的精神。\n\n这段说明很正常，但它太像宣传稿。页面下方显示：说明文字修订记录可读取。",
    "objective": "公开说明下方还有一份版本记录。",
    "puzzle": {
      "type": "text",
      "answers": [
        "说明文字修订记录",
        "修订记录"
      ],
      "unlock": "n5",
      "clue": "说明文字有多版"
    },
    "hints": [
      "看正文最后一句。",
      "它是一份修订记录。",
      "说明文字修订记录"
    ]
  },
  {
    "id": "n5",
    "chapter": 0,
    "title": "说明文字修订记录",
    "type": "维护后台 / 版本记录",
    "time": "06:27",
    "body": "第一版：孩子们已经回到课堂。\n第二版：孩子们即将回到课堂。\n第三版：课堂已具备复课条件。\n第四版：教室呈现复课状态。\n\n四版文字越来越安全，也越来越没有人。系统要求维护员标记“被删掉的主语”。",
    "objective": "四版说明的变化很小，但有一个词被慢慢拿掉了。",
    "puzzle": {
      "type": "text",
      "answers": [
        "孩子们",
        "孩子"
      ],
      "unlock": "n6",
      "clue": "主语被删除：孩子们"
    },
    "hints": [
      "比较第一版和第四版。",
      "谁从句子里消失了？",
      "孩子们"
    ]
  },
  {
    "id": "n6",
    "chapter": 1,
    "title": "照片修复工具",
    "type": "照片修复 / 工具启动",
    "time": "06:31",
    "body": "照片修复工具已启动。\n\n工具说明：公开照片可能经过裁剪、调光、文字替换。维护员需要依次检查：光线、裁剪、黑板日期。\n\n系统打开了一张低清预览图。它看上去只是一间普通教室。",
    "objective": "修复工具没有说明哪里异常。你需要自己检查照片上最像“被处理过”的区域。",
    "puzzle": {
      "type": "photo",
      "targets": [
        "light",
        "board",
        "crop"
      ],
      "unlock": "n7",
      "clue": "照片三处异常：光线、黑板、裁剪"
    },
    "hints": [
      "看光、日期、裁剪。",
      "窗边、黑板、下半部分。",
      "选光线、黑板、裁剪"
    ]
  },
  {
    "id": "n7",
    "chapter": 1,
    "title": "光线记录",
    "type": "照片修复 / 元数据",
    "time": "06:35",
    "body": "元数据显示：照片公开日期为 1946 年 9 月 1 日，公开说明称“清晨”。\n\n但灯光设备记录显示，两盏补光灯在 1946 年 8 月 31 日 23:20 借出，用途为“教室照片补光”。\n\n这不一定说明照片是假的，但至少说明“清晨”并不是自然发生的。",
    "objective": "元数据里有一个日期和公开说法不一致。",
    "puzzle": {
      "type": "text",
      "answers": [
        "19460831"
      ],
      "unlock": "n8",
      "clue": "拍摄准备日期：1946-08-31"
    },
    "hints": [
      "不是公开日期。",
      "看补光灯借出日期。",
      "19460831"
    ]
  },
  {
    "id": "n8",
    "chapter": 1,
    "title": "黑板日期",
    "type": "照片修复 / 局部放大",
    "time": "06:38",
    "body": "黑板上写着：九月一日，开学第一天。\n\n放大后能看到日期笔画边缘更亮，像被重新描过。工具提示：请对比三处改动，找出唯一与“时间”有关的改动。",
    "objective": "三处改动里，只有一处直接影响照片发生的时间。",
    "puzzle": {
      "type": "choice",
      "options": [
        "窗帘方向被调整",
        "黑板日期被重描",
        "桌面作业本被翻开"
      ],
      "answer": "黑板日期被重描",
      "unlock": "n9",
      "clue": "黑板日期被重描"
    },
    "hints": [
      "看黑板上写的内容。",
      "日期被重新描过。",
      "黑板日期被重描"
    ]
  },
  {
    "id": "n9",
    "chapter": 1,
    "title": "裁剪线",
    "type": "照片修复 / 裁剪记录",
    "time": "06:42",
    "body": "裁剪记录显示：公开照片保留桌面以上，去掉椅面和地面。\n\n工具里有一条旧批注：不要拍太低。\n\n这句话目前仍像普通构图建议。系统要求输入这条批注以调用被裁掉的区域。",
    "objective": "有一句摄影批注能打开照片被删掉的区域。",
    "puzzle": {
      "type": "text",
      "answers": [
        "不要拍太低"
      ],
      "unlock": "n10",
      "clue": "摄影批注：不要拍太低"
    },
    "hints": [
      "批注只有五个字。",
      "它和镜头角度有关。",
      "不要拍太低"
    ]
  },
  {
    "id": "n10",
    "chapter": 1,
    "title": "被裁掉的下半部分",
    "type": "照片修复 / 残片",
    "time": "06:46",
    "body": "残片显示课桌下方：椅腿、地面拖痕、几双摆得很整齐的鞋。\n\n没有明显血迹，没有怪物，也没有鬼影。只有一个很奇怪的事实：每双鞋都像被摆出来给镜头看的。\n\n残片归档备注：鞋尖朝门。",
    "objective": "残片里最奇怪的不是痕迹，而是摆放方向。",
    "puzzle": {
      "type": "text",
      "answers": [
        "鞋尖朝门"
      ],
      "unlock": "n11",
      "clue": "鞋尖朝门"
    },
    "hints": [
      "看最后一句。",
      "鞋的方向。",
      "鞋尖朝门"
    ]
  },
  {
    "id": "n11",
    "chapter": 2,
    "title": "二年甲班索引",
    "type": "馆藏索引 / 班级资料",
    "time": "06:49",
    "body": "你进入二年甲班索引。\n\n公开页面只展示课堂模型，不展示具体学生信息。馆藏系统显示三类资料可以修复：座位表、物品清点、名册残页。\n\n系统先打开座位表。",
    "objective": "班级索引里有三类资料。先打开最像空间结构的那一类。",
    "puzzle": {
      "type": "text",
      "answers": [
        "座位表"
      ],
      "unlock": "n12",
      "clue": "进入二年甲班"
    },
    "hints": [
      "不是名册，也不是清点。",
      "教室位置关系。",
      "座位表"
    ]
  },
  {
    "id": "n12",
    "chapter": 2,
    "title": "座位表",
    "type": "馆藏索引 / 座位图",
    "time": "06:51",
    "body": "二年甲班教室为 5 排，每排 8 座。系统提示：有 5 个座位的物品状态异常，需要手动标记。\n\n异常座位：A3、B7、C4、D2、E8。",
    "objective": "座位图需要按残留标记恢复。",
    "puzzle": {
      "type": "grid",
      "targets": [
        "A3",
        "B7",
        "C4",
        "D2",
        "E8"
      ],
      "unlock": "n13",
      "clue": "五个异常座位"
    },
    "hints": [
      "正文已经给出五个格子。",
      "A3、B7、C4、D2、E8。",
      "点亮 A3 B7 C4 D2 E8"
    ]
  },
  {
    "id": "n13",
    "chapter": 2,
    "title": "物品清点",
    "type": "馆藏索引 / 清点表",
    "time": "06:55",
    "body": "清点表恢复：\n书包 40\n姓名牌 40\n作业本 40\n校服 40\n鞋 40\n\n系统结论：座位完整度 100%。\n\n它没有显示学生人数。它只显示物件数量。",
    "objective": "系统给出了一个评价词。它把物品数量当成完整。",
    "puzzle": {
      "type": "text",
      "answers": [
        "座位完整度"
      ],
      "unlock": "n14",
      "clue": "座位完整度 100%"
    },
    "hints": [
      "看系统结论。",
      "不是学生人数。",
      "座位完整度"
    ]
  },
  {
    id: "n14",
    chapter: 2,
    title: "名册残页",
    type: "馆藏索引 / 残缺名册",
    time: "06:58",
    body:
  `名册残页烧损严重，姓名栏只剩四处空白。
  
  纸边有四句旧灯谜，像是孩子们课间写在本子背面的谜语：
  
  一、眼树相对看，双木不成林。
  二、一只黑狗，不叫不吼。
  三、种花要除草，一人来一刀。
  四、行字分两边，双土堆中间。
  
  系统提示：请依次输入四个谜底，恢复名册边角。`,
    objective: "根据四句灯谜，依次输入四个字。",
    puzzle: {
      type: "text",
      answers: [
        "相默化街",
        "相 默 化 街",
        "相，默，化，街",
        "相、默、化、街"
      ],
      unlock: "n15",
      clue: "残页可还原四个字"
    },
    hints: [
      "四句谜语分别猜一个字。",
      "第一句看“目”和“木”；第四句看“行”和“土”。",
      "答案按谜语顺序输入。"
    ]
  },
  {
    "id": "n15",
    "chapter": 2,
    "title": "姓名牌盒",
    "type": "馆藏索引 / 物件盒",
    "time": "07:00",
    "body": "姓名牌盒里有 40 枚姓名牌。每枚背后都刻着座位号。\n\n公开展陈使用空白复制件，但内部扫描件保留了名字。系统提示：姓名信息未公开，需查看公开口径来源。\n\n来源指向：宣传科审批。",
    "objective": "姓名没有消失，只是被交给了另一个部门。",
    "puzzle": {
      "type": "text",
      "answers": [
        "宣传科审批",
        "宣传科"
      ],
      "unlock": "n16",
      "clue": "姓名被转入宣传科口径"
    },
    "hints": [
      "看最后一句。",
      "来源是一个审批部门。",
      "宣传科审批"
    ]
  },
  {
    "id": "n16",
    "chapter": 3,
    "title": "宣传科登录",
    "type": "受限后台 / 登录",
    "time": "07:02",
    "body": "宣传科后台需要账号。\n\n用户名提示：部门名称。\n密码提示：照片编号 + 座位数量 + 开门时间。\n\n你已经得到过：照片编号 19，座位数量 40，开门时间 0800。",
    "objective": "受限后台需要用前面收集到的三个数字。",
    "puzzle": {
      "type": "login",
      "user": "宣传科",
      "pass": [
        "19400800",
        "19-40-0800",
        "19 40 0800"
      ],
      "unlock": "n17",
      "clue": "宣传科后台已打开"
    },
    "hints": [
      "用户名是部门名。",
      "密码是 19 + 40 + 0800。",
      "宣传科 / 19400800"
    ]
  },
  {
    "id": "n17",
    "chapter": 3,
    "title": "宣传科审批",
    "type": "受限后台 / 审批单",
    "time": "07:05",
    "body": "审批单写：复课照片应优先发布，以稳定镇民情绪。具体学生信息暂不公布，统一答复为资料核对中。\n\n页面中有三处被涂黑。点击涂黑处可恢复关键词。",
    "objective": "涂黑处可以点开。恢复完整短语后再提交。",
    "puzzle": {
      "type": "redact",
      "words": [
        "名单",
        "暂缓",
        "公布"
      ],
      "answer": "名单暂缓公布",
      "unlock": "n18",
      "clue": "名单暂缓公布"
    },
    "hints": [
      "先点黑块。",
      "三个词会组成审批短语。",
      "名单暂缓公布"
    ]
  },
  {
    "id": "n18",
    "chapter": 3,
    "title": "替换词表",
    "type": "受限后台 / 语言规范",
    "time": "07:08",
    "body": "宣传科替换词表：\n“死亡” → “失联”\n“遗物” → “学习用品”\n“无人教室” → “复课场景”\n“名单暂缓” → “资料核对”\n\n系统要求维护员找出被替换成“复课场景”的原词。",
    "objective": "替换表里有一个原词被改成了看起来正常的展陈词。",
    "puzzle": {
      "type": "text",
      "answers": [
        "无人教室"
      ],
      "unlock": "n19",
      "clue": "无人教室 → 复课场景"
    },
    "hints": [
      "找“复课场景”的左边。",
      "它原本不是场景。",
      "无人教室"
    ]
  },
  {
    "id": "n19",
    "chapter": 3,
    "title": "报纸排版",
    "type": "受限后台 / 报纸样张",
    "time": "07:12",
    "body": "报纸样张中，照片标题占据整页上方：《白桦小学战后复课第一日》。\n\n下方说明经过三次删改。系统要求你按删改顺序排列：\n1. 孩子们回到课堂\n2. 课堂恢复秩序\n3. 复课场景完整",
    "objective": "三句话不是任选，它们记录了人如何从说明里消失。",
    "puzzle": {
      "type": "order",
      "items": [
        "孩子们回到课堂",
        "课堂恢复秩序",
        "复课场景完整"
      ],
      "answer": [
        "孩子们回到课堂",
        "课堂恢复秩序",
        "复课场景完整"
      ],
      "unlock": "n20",
      "clue": "主语被一步步清除"
    },
    "hints": [
      "从最有人到最没人。",
      "孩子们 → 课堂 → 场景。",
      "孩子们回到课堂 → 课堂恢复秩序 → 复课场景完整"
    ]
  },
  {
    "id": "n20",
    "chapter": 3,
    "title": "电话答复模板",
    "type": "受限后台 / 家属答复",
    "time": "07:16",
    "body": "电话答复模板：\nA. 感谢关注，照片说明以公开资料为准。\nB. 战后资料混乱，名单仍在核对。\nC. 学校已恢复秩序，请勿传播未经证实消息。\n\n模板下方有一条转交备注：若询问陈守一，请不要提供校工室三号终端记录。",
    "objective": "模板刻意避开了一份校工记录。",
    "puzzle": {
      "type": "text",
      "answers": [
        "校工室三号终端",
        "三号终端"
      ],
      "unlock": "n21",
      "clue": "校工室三号终端"
    },
    "hints": [
      "看最后一行。",
      "不要提供的记录名。",
      "校工室三号终端"
    ]
  },
  {
    "id": "n21",
    "chapter": 4,
    "title": "校工室三号终端",
    "type": "终端记录 / CLEANER-03",
    "time": "07:20",
    "body": "终端记录：\n06:30 清扫走廊\n07:10 整理二年甲班\n07:40 擦黑板\n08:00 开门\n\n这些任务原本只为拍摄准备。可是拍摄结束后，任务继续运行了 413 天。",
    "objective": "终端一天的顺序藏在正文记录里。",
    "puzzle": {
      "type": "order",
      "items": [
        "擦黑板",
        "开门",
        "清扫走廊",
        "整理二年甲班"
      ],
      "answer": [
        "清扫走廊",
        "整理二年甲班",
        "擦黑板",
        "开门"
      ],
      "unlock": "n22",
      "clue": "陈守一的循环"
    },
    "hints": [
      "按时间排。",
      "06:30、07:10、07:40、08:00。",
      "清扫走廊 → 整理二年甲班 → 擦黑板 → 开门"
    ]
  },
  {
    "id": "n22",
    "chapter": 4,
    "title": "每日循环",
    "type": "终端记录 / 413 天",
    "time": "07:24",
    "body": "第 1 天：完成。\n第 27 天：完成。\n第 103 天：今天很安静。\n第 219 天：他们快来了。\n第 413 天：不要开学。\n\n系统提示：第 413 天的记录被标记为异常语句。",
    "objective": "第 413 天留下了一句不属于系统流程的话。",
    "puzzle": {
      "type": "text",
      "answers": [
        "不要开学"
      ],
      "unlock": "n23",
      "clue": "不要开学"
    },
    "hints": [
      "看最后一行。",
      "它不是完成状态。",
      "不要开学"
    ]
  },
  {
    "id": "n23",
    "chapter": 4,
    "title": "墙角缓存",
    "type": "照片缓存 / 修图前",
    "time": "07:28",
    "body": "修图前的墙角有粉笔字：不要开学。\n\n修图后，同一位置被横幅遮住。横幅写：欢迎开学。\n\n这不是简单修图。它像把一句警告改成一句命令。",
    "objective": "修图把一句警告改成了另一句话。",
    "puzzle": {
      "type": "text",
      "answers": [
        "欢迎开学"
      ],
      "unlock": "n24",
      "clue": "欢迎开学"
    },
    "hints": [
      "看修图后。",
      "横幅上的话。",
      "欢迎开学"
    ]
  },
  {
    "id": "n24",
    "chapter": 4,
    "title": "失物招领箱",
    "type": "校工室 / 物件箱",
    "time": "07:32",
    "body": "失物招领箱里有铅笔、红领巾、碎纸、鞋带、半张座位表。\n\n箱盖内侧写着：不要把它们叫展品。\n\n系统要求从四个选项里选择陈守一真正想保护的东西。",
    "objective": "这不是问物品，而是问陈守一到底在保住什么。",
    "puzzle": {
      "type": "choice",
      "options": [
        "照片的名誉",
        "纪念馆展陈",
        "孩子作为人的名字",
        "宣传科审批"
      ],
      "answer": "孩子作为人的名字",
      "unlock": "n25",
      "clue": "陈守一保护的是名字"
    },
    "hints": [
      "他不保护宣传，也不保护展陈。",
      "他保护名字。",
      "孩子作为人的名字"
    ]
  },
  {
    "id": "n25",
    "chapter": 4,
    "title": "给教育署的退件",
    "type": "校工室 / 未发送邮件",
    "time": "07:36",
    "body": "我不能再继续这样做。\n\n你们说只是拍一次，可照片拍完以后，终端还是亮，广播还是响，门还是要开。每天早上我都要把他们的东西摆回去，像他们只是迟到了。\n\n最后一行没有写完，只留下三个字：摆回去。",
    "objective": "邮件最后没有写完，只剩一个动作。",
    "puzzle": {
      "type": "text",
      "answers": [
        "摆回去"
      ],
      "unlock": "n26",
      "clue": "摆回去"
    },
    "hints": [
      "最后三个字。",
      "他每天都在做。",
      "摆回去"
    ]
  },
  {
    "id": "n26",
    "chapter": 5,
    "title": "最终归档",
    "type": "最高权限 / 归档锁",
    "time": "07:45",
    "body": "最终归档需要三枚校验值：\n照片编号：19\n座位数量：40\n开门时间：0800\n\n输入后，系统将恢复照片原始说明。",
    "objective": "最终归档需要把三个关键数字连起来。",
    "puzzle": {
      "type": "text",
      "answers": [
        "19400800",
        "19-40-0800",
        "19 40 0800"
      ],
      "unlock": "n27",
      "clue": "最终归档已打开"
    },
    "hints": [
      "照片编号、座位数量、开门时间。",
      "19、40、0800。",
      "19400800"
    ]
  },
  {
    "id": "n27",
    "chapter": 5,
    "title": "照片原件",
    "type": "最高权限 / 原始说明",
    "time": "07:50",
    "body": "原始说明：本照片由遗物复原拍摄，教室内无学生。\n\n那天没有复课。\n\n白桦镇需要一张照片证明学校已经恢复秩序。于是他们让陈守一把书包、姓名牌、作业本、校服和鞋放回座位。镜头拍到了一间看起来即将上课的教室。\n\n但教室里没有学生。\n\n只有他们的东西，被摆成他们还在上课的样子。",
    "objective": "原始说明已经恢复。最后还剩一个系统页面。",
    "puzzle": {
      "type": "text",
      "answers": [
        "发布页面",
        "最终发布页面"
      ],
      "unlock": "n28",
      "clue": "真相已恢复"
    },
    "hints": [
      "正文说继续打开发布页。",
      "它叫最终发布页面。",
      "最终发布页面 / 发布页面"
    ]
  },
  {
    "id": "n28",
    "chapter": 5,
    "title": "最终发布页面",
    "type": "系统发布 / 08:00 自动开馆",
    "time": "07:58",
    "body": "系统提示：\n\n感谢馆员完成修复。\n二年甲班缺失档案已恢复。\n座位完整度：100%。\n复课展示状态：可公开。\n\n你以为自己在揭露真相。可是系统把你整理出的真相重新排版成一场展览。\n\n08:00 自动开馆程序已启动。",
    "objective": "系统等待你处理修复后的展厅。",
    "puzzle": {
      "type": "final",
      "unlockA": "n29",
      "unlockB": "n30",
      "clue": "你已经进入结局选择"
    },
    "hints": [
      "这是结局选择。",
      "两个选择都会通向结局。",
      "发布或取消"
    ]
  },
  {
    "id": "n29",
    "chapter": 5,
    "title": "结局 A：发布",
    "type": "结局",
    "time": "08:00",
    "body": "你点击了发布。\n\n新版展厅准时开放。访客看到更完整的照片、更完整的说明、更完整的座位表。\n\n系统评价：维护成功。\n\n屏幕最后显示：\n二年甲班归档完成。\n座位完整度：100%。\n\n你把真相整理得太完整了。于是它又变成了一次展览。",
    "objective": "结局已达成。",
    "puzzle": {
      "type": "end"
    }
  },
  {
    "id": "n30",
    "chapter": 5,
    "title": "结局 B：取消",
    "type": "结局",
    "time": "08:00",
    "body": "你点击了取消。\n\n系统提示：维护员权限不足。\n\n08:00 自动开馆程序不可中止。新版展厅将在无人确认的情况下发布。\n\n屏幕暗下去之前，你看见校工室终端又亮了一次：\n06:30 清扫走廊。\n07:10 整理二年甲班。\n07:40 擦黑板。\n08:00 开门。",
    "objective": "结局已达成。",
    "puzzle": {
      "type": "end"
    }
  }
];
const CHAPTERS = [
  "第一章：公开展厅",
  "第二章：照片修复",
  "第三章：二年甲班",
  "第四章：宣传科后台",
  "第五章：校工室三号终端",
  "终章：08:00 自动开馆"
];

let unlocked = new Set(JSON.parse(localStorage.getItem("baihua_v5_unlocked") || '["n1"]'));
let visited = new Set(JSON.parse(localStorage.getItem("baihua_v5_visited") || '[]'));
let clues = JSON.parse(localStorage.getItem("baihua_v5_clues") || "[]");
let currentId = localStorage.getItem("baihua_v5_current") || "n1";

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

window.addEventListener("load", () => {
  setTimeout(() => {
    $("#boot").classList.add("hidden");
    $("#app").classList.remove("hidden");
    render();
  }, 900);
});

$("#resetBtn").onclick = () => {
  localStorage.removeItem("baihua_v5_unlocked");
  localStorage.removeItem("baihua_v5_visited");
  localStorage.removeItem("baihua_v5_clues");
  localStorage.removeItem("baihua_v5_current");
  unlocked = new Set(["n1"]);
  visited = new Set();
  clues = [];
  currentId = "n1";
  render();
};

function save() {
  localStorage.setItem("baihua_v5_unlocked", JSON.stringify([...unlocked]));
  localStorage.setItem("baihua_v5_visited", JSON.stringify([...visited]));
  localStorage.setItem("baihua_v5_clues", JSON.stringify(clues));
  localStorage.setItem("baihua_v5_current", currentId);
}

function currentNode() {
  return NODES.find(n => n.id === currentId) || NODES[0];
}

function render() {
  const node = currentNode();
  visited.add(node.id);
  save();

  $("#chapterLabel").textContent = CHAPTERS[node.chapter] || "";
  $("#pageTitle").textContent = node.title;
  $("#clock").textContent = node.time || "08:00";
  $("#fileType").textContent = node.type;
  $("#bodyText").innerHTML = `
    <div>${escapeHtml(node.body).replace(/\n/g, "<br>")}</div>

    ${
      node.footerNote
        ? `<div class="footer-note">${escapeHtml(node.footerNote)}</div>`
        : ""
    }
  `;
  const objectiveBox = $("#objective");

  if (node.objective) {
    objectiveBox.textContent = node.objective;
    objectiveBox.parentElement.style.display = "";
  } else {
    objectiveBox.parentElement.style.display = "none";
  }

  renderPuzzle(node);
  renderHintBox(node);
  renderSidebar();
  renderClues();
  updateProgress();
}


function renderHintBox(node) {
  const task = $("#taskCard");
  let old = document.getElementById("hintArea");
  if (old) old.remove();

  const hints = node.hints || [];
  if (!hints.length) return;

  const area = document.createElement("div");
  area.id = "hintArea";
  area.className = "hint-area";
  let used = Number(sessionStorage.getItem("hint_" + node.id) || 0);

  area.innerHTML = `
    <button id="hintBtn">请求提示（${Math.min(used + 1, hints.length)}/${hints.length}）</button>
    <div id="hintText" class="hint-text">${used > 0 ? escapeHtml(hints[used - 1]) : "提示是可选的。先自己读正文和线索板。"}</div>
  `;
  task.appendChild(area);

  $("#hintBtn").onclick = () => {
    used = Math.min(used + 1, hints.length);
    sessionStorage.setItem("hint_" + node.id, used);
    $("#hintText").textContent = hints[used - 1];
    $("#hintBtn").textContent = `请求提示（${Math.min(used + 1, hints.length)}/${hints.length}）`;
  };
}

function renderSidebar() {
  const chapterList = $("#chapterList");
  chapterList.innerHTML = "";
  CHAPTERS.forEach((ch, idx) => {
    const hasUnlocked = NODES.some(n => n.chapter === idx && unlocked.has(n.id));
    const active = currentNode().chapter === idx;
    const btn = document.createElement("button");
    btn.className = "chapter-btn" + (active ? " active" : "") + (!hasUnlocked ? " locked" : "");
    btn.textContent = ch;
    btn.onclick = () => {
      if (!hasUnlocked) return;
      const first = NODES.find(n => n.chapter === idx && unlocked.has(n.id));
      currentId = first.id;
      render();
    };
    chapterList.appendChild(btn);
  });

  const nodeList = $("#nodeList");
  nodeList.innerHTML = "";
  NODES.filter(n => unlocked.has(n.id)).forEach(n => {
    const btn = document.createElement("button");
    btn.className = "node-btn" + (n.id === currentId ? " active" : "");
    btn.textContent = n.title;
    btn.onclick = () => {
      currentId = n.id;
      render();
    };
    nodeList.appendChild(btn);
  });
}

function renderClues() {
  const box = $("#clues");
  if (!clues.length) {
    box.innerHTML = '<span class="dim">暂无线索。</span>';
    return;
  }
  box.innerHTML = clues.map(c => `<span class="clue">${escapeHtml(c)}</span>`).join("");
}

function updateProgress() {
  const maxIndex = Math.max(...[...visited].map(id => NODES.findIndex(n => n.id === id) + 1), 1);
  const total = NODES.length;
  $("#progressText").textContent = `${Math.min(maxIndex, total)}/${total}`;
  $("#progressBar").style.width = `${Math.min(maxIndex, total) / total * 100}%`;
}

function unlock(id, clue) {
  if (id) unlocked.add(id);
  if (clue && !clues.includes(clue)) clues.push(clue);
  save();
  const target = NODES.find(n => n.id === id);
  const result = document.createElement("div");
  result.className = "result";
  result.innerHTML = target ? `校验通过。已恢复新档案：<strong>${escapeHtml(target.title)}</strong><br><br><button id="goNext">打开新档案</button>` : "已完成。";
  $("#puzzle").appendChild(result);
  const go = $("#goNext");
  if (go) go.onclick = () => {
    currentId = id;
    render();
  };
  renderSidebar();
  renderClues();
}

function renderPuzzle(node) {
  const p = node.puzzle || {"type":"end"};
  const box = $("#puzzle");
  box.innerHTML = "";
  const wrap = document.createElement("div");
  wrap.className = "puzzle-box";
  box.appendChild(wrap);

  if (p.type === "text") return puzzleText(wrap, p);
  if (p.type === "choice") return puzzleChoice(wrap, p);
  if (p.type === "photo") return puzzlePhoto(wrap, p);
  if (p.type === "grid") return puzzleGrid(wrap, p);
  if (p.type === "pair") return puzzlePair(wrap, p);
  if (p.type === "login") return puzzleLogin(wrap, p);
  if (p.type === "redact") return puzzleRedact(wrap, p);
  if (p.type === "order") return puzzleOrder(wrap, p);
  if (p.type === "final") return puzzleFinal(wrap, p);
  wrap.innerHTML = '<div class="result">本节点已完成。</div>';
}

function puzzleText(wrap, p) {
  wrap.innerHTML = '<input id="answerInput" placeholder="输入你推断出的内容"><button id="submitBtn">提交</button>';
  $("#submitBtn").onclick = () => {
    const v = normalize($("#answerInput").value);
    const ok = p.answers.some(a => normalize(a) === v);
    if (!ok) return flash("答案不对。重新看当前任务和正文。");
    unlock(p.unlock, p.clue);
  };
}

function puzzleChoice(wrap, p) {
  wrap.innerHTML = p.options.map(o => `<button class="option" data-v="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join("") + '<br><button id="submitBtn">提交</button>';
  let selected = "";
  wrap.querySelectorAll(".option").forEach(btn => btn.onclick = () => {
    wrap.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selected = btn.dataset.v;
  });
  $("#submitBtn").onclick = () => {
    if (normalize(selected) !== normalize(p.answer)) return flash("选择不对。");
    unlock(p.unlock, p.clue);
  };
}

function puzzlePhoto(wrap, p) {
  wrap.innerHTML = `
    <div class="photo-box">
      <div class="photo-title">照片预览：二年甲班教室</div>
      <div class="blackboard">九月一日　开学第一天</div>
      <div class="desk d1"></div><div class="desk d2"></div><div class="desk d3"></div>
      <div class="desk d4"></div><div class="desk d5"></div><div class="desk d6"></div>
      <div class="floor-note">公开照片裁剪线以下区域不可见</div>
      <button class="hot hot-light" data-v="light" title="窗边光线"></button>
      <button class="hot hot-board" data-v="board" title="黑板日期"></button>
      <button class="hot hot-crop" data-v="crop" title="下方裁剪"></button>
    </div>
    <button id="submitBtn">提交检查区域</button>
  `;
  wrap.querySelectorAll(".hot").forEach(btn => btn.onclick = () => btn.classList.toggle("selected"));
  $("#submitBtn").onclick = () => {
    const selected = [...wrap.querySelectorAll(".hot.selected")].map(b => b.dataset.v).sort();
    const target = p.targets.slice().sort();
    if (JSON.stringify(selected) !== JSON.stringify(target)) return flash("还没有选中全部异常区域。");
    unlock(p.unlock, p.clue);
  };
}

function puzzleGrid(wrap, p) {
  let cells = [];
  ["A","B","C","D","E"].forEach(r => {
    for (let i=1;i<=8;i++) cells.push(r+i);
  });
  wrap.innerHTML = '<div class="grid">' + cells.map(c => `<button class="grid-btn" data-v="${c}">${c}</button>`).join("") + '</div><button id="submitBtn">提交座位图</button>';
  wrap.querySelectorAll(".grid-btn").forEach(btn => btn.onclick = () => btn.classList.toggle("selected"));
  $("#submitBtn").onclick = () => {
    const selected = [...wrap.querySelectorAll(".grid-btn.selected")].map(b => b.dataset.v).sort();
    const target = p.targets.slice().sort();
    if (JSON.stringify(selected) !== JSON.stringify(target)) return flash("座位标记不对。");
    unlock(p.unlock, p.clue);
  };
}

function puzzlePair(wrap, p) {
  const keys = Object.keys(p.pairs);
  const vals = Object.values(p.pairs);
  wrap.innerHTML = keys.map(k => `
    <div>
      <span>${escapeHtml(k)} → </span>
      <select data-k="${escapeHtml(k)}">
        <option value="">选择作业本姓名</option>
        ${vals.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("")}
      </select>
    </div>`).join("") + '<button id="submitBtn">提交配对</button>';
  $("#submitBtn").onclick = () => {
    let ok = true;
    wrap.querySelectorAll("select").forEach(s => {
      if (s.value !== p.pairs[s.dataset.k]) ok = false;
    });
    if (!ok) return flash("配对不对。看残字和完整名字的最后一个字。");
    unlock(p.unlock, p.clue);
  };
}

function puzzleLogin(wrap, p) {
  wrap.innerHTML = '<input id="userInput" placeholder="用户名"><input id="passInput" placeholder="密码"><button id="submitBtn">登录</button>';
  $("#submitBtn").onclick = () => {
    const u = normalize($("#userInput").value);
    const pass = normalize($("#passInput").value);
    const ok = u === normalize(p.user) && p.pass.some(x => normalize(x) === pass);
    if (!ok) return flash("账号或密码不对。");
    unlock(p.unlock, p.clue);
  };
}

function puzzleRedact(wrap, p) {
  wrap.innerHTML = `
    <div class="redact-line">审批意见：<span class="redact" data-word="${p.words[0]}"></span> <span class="redact" data-word="${p.words[1]}"></span> <span class="redact" data-word="${p.words[2]}"></span>，以免影响复课照片传播。</div>
    <input id="answerInput" placeholder="输入恢复出的关键短语"><button id="submitBtn">提交</button>
  `;
  wrap.querySelectorAll(".redact").forEach(r => r.onclick = () => {
    r.classList.add("revealed");
    r.textContent = r.dataset.word;
  });
  $("#submitBtn").onclick = () => {
    if (normalize($("#answerInput").value) !== normalize(p.answer)) return flash("短语不对。先点开涂黑处。");
    unlock(p.unlock, p.clue);
  };
}

function puzzleOrder(wrap, p) {
  let seq = [];
  wrap.innerHTML = p.items.map(i => `<button class="order" data-v="${escapeHtml(i)}">${escapeHtml(i)}</button>`).join("") + '<div id="seqText" class="dim"></div><button id="submitBtn">提交顺序</button><button id="clearBtn">清空</button>';
  wrap.querySelectorAll(".order").forEach(btn => btn.onclick = () => {
    seq.push(btn.dataset.v);
    btn.classList.add("selected");
    $("#seqText").textContent = "当前顺序：" + seq.join(" → ");
  });
  $("#clearBtn").onclick = () => {
    seq = [];
    wrap.querySelectorAll(".order").forEach(b => b.classList.remove("selected"));
    $("#seqText").textContent = "";
  };
  $("#submitBtn").onclick = () => {
    if (JSON.stringify(seq.map(normalize)) !== JSON.stringify(p.answer.map(normalize))) return flash("顺序不对。");
    unlock(p.unlock, p.clue);
  };
}

function puzzleFinal(wrap, p) {
  wrap.innerHTML = `
    <div class="final-choice">
      <button id="publishBtn">发布新版展厅</button>
      <button id="cancelBtn">取消发布</button>
    </div>
  `;
  $("#publishBtn").onclick = () => unlock(p.unlockA, p.clue);
  $("#cancelBtn").onclick = () => unlock(p.unlockB, p.clue);
}

function flash(msg) {
  const r = document.createElement("div");
  r.className = "result bad";
  r.textContent = msg;
  $("#puzzle").appendChild(r);
  setTimeout(() => r.remove(), 1800);
}

function normalize(s) {
  return String(s || "").trim().toLowerCase().replace(/\s+/g, "").replace(/[：:，,。.\-]/g, "");
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
