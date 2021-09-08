'use strict';

//[0No(1~), 1Word, 2Mean, 3Part, 4Change, 5Note, 6Lv, 7State, 8Sort]
let wordList = [
//    [1, "der Bruder", "兄、弟", , , "Brüder", 0, null, null],
//    [2, "die* Eltern", "両親", , , "Eltern", 0, null, null],
//    [3, "die Familie", "家族", , , "Familien", 0, null, null],
//    [4, "die Frau", "妻", , , "Frauen", 0, null, null],
    [5, "die* Geschwister", "きょうだい", , , "Geschwister", 0, null, null],
//    [6, "das Kind", "子ども", , , "Kinder", 0, null, null],
//    [7, "der Mann", "夫", , , "Männer", 0, null, null],
//    [8, "die Mutter", "母", , , "Mütter", 0, null, null],
//    [9, "die Schwester", "姉、妹", , , "Schwestern", 0, null, null],
//    [10, "der Sohn", "息子", , , "Söhne", 0, null, null],
//    [11, "die Tochter", "娘", , , "Töchter", 0, null, null],
//    [12, "der Vater", "父", , , "Väter", 0, null, null],
//    [13, "die Tante", "おば", , , "Tanten", 0, null, null],
//    [14, "der Onkel", "おじ", , , "Onkel", 0, null, null],
//    [15, "das Mädchen", "女の子", , , "Mädchen", 0, null, null],
//    [16, "der Junge", "男の子", , , "Jungen", 0, null, null],
//    [17, "der Arzt", "医者", , , "Ärzte", 0, null, null],
//    [18, "der Beruf", "職業", , , "Berufe", 0, null, null],
//    [19, "die Firma", "会社", , , "Firmen", 0, null, null],
//    [20, "der Lehrer", "教師", , , "Lehrer", 0, null, null],
//    [21, "der Professor", "教授", , , "Professoren", 0, null, null],
//    [22, "die Hausfrau", "主婦", , , "Hausfrauen", 0, null, null],
//    [23, "der Schüler", "生徒", , , "Schüler", 0, null, null],
//    [24, "der Student", "大学生", , , "Studenten", 0, null, null],
//    [25, "Deutschland", "ドイツ", , , "", 0, null, null],
//    [26, "Deutsch", "ドイツ語", , , "", 0, null, null],
//    [27, "Japan", "日本", , , "", 0, null, null],
//    [28, "Japanisch", "日本語", , , "", 0, null, null],
//    [29, "Österreich", "オーストリア", , , "", 0, null, null],
//    [30, "die Schweiz", "スイス", , , "", 0, null, null],
//    [31, "der Japaner", "日本人", , , "Japaner", 0, null, null],
//    [32, "das Ausland", "外国", , , "", 0, null, null],
    [33, "das Brot", "パン", , , "Brote", 0, null, null],
//    [34, "das Brötchen", "小さいパン", , , "Brötchen", 0, null, null],
//    [35, "die Butter", "バター", , , "", 0, null, null],
    [36, "das Ei", "卵", , , "Eier", 0, null, null],
//    [37, "das Essen", "食事", , , "", 0, null, null],
    [38, "der Essig", "酢", , , "", 0, null, null],
//    [39, "der Fisch", "魚", , , "Fische", 0, null, null],
    [40, "das Fleisch", "肉", , , "", 0, null, null],
    [41, "der Käse", "チーズ", , , "", 0, null, null],
//    [42, "der Kuchen", "ケーキ", , , "Kuchen", 0, null, null],
//    [43, "die Marmelade", "ジャム", , , "Marmeladen", 0, null, null],
//    [44, "das Öl", "油", , , "", 0, null, null],
//    [45, "der Reis", "米", , , "", 0, null, null],
//    [46, "der Salat", "サラダ", , , "Salate", 0, null, null],
//    [47, "das Salz", "塩", , , "Salze", 0, null, null],
    [48, "der Schinken", "ハム", , , "Schinken", 0, null, null],
//    [49, "die Schokolade", "チョコレート", , , "Schokoladen", 0, null, null],
//    [50, "die Suppe", "スープ", , , "Suppen", 0, null, null],
    [51, "die Wurst", "ソーセージ", , , "Würste", 0, null, null],
//    [52, "der Zucker", "砂糖", , , "", 0, null, null],
//    [53, "der Hunger", "空腹", , , "", 0, null, null],
    [54, "der Pfeffer", "コショウ", , , "", 0, null, null],
    [55, "die Shane", "クリーム", , , "", 0, null, null],
    [56, "das Frühstück", "朝食", , , "", 0, null, null],
//    [57, "das Bier", "ビール", , , "", 0, null, null],
//    [58, "der Kaffee", "コーヒー", , , "", 0, null, null],
//    [59, "die Milch", "牛乳", , , "", 0, null, null],
    [60, "der Saft", "ジュース", , , "Säfte", 0, null, null],
//    [61, "der Tee", "紅茶", , , "", 0, null, null],
//    [62, "das Wasser", "水", , , "", 0, null, null],
//    [63, "der Wein", "ワイン", , , "", 0, null, null],
//    [64, "der Durst", "のどの渇き", , , "", 0, null, null],
//    [65, "der Baum", "木", , , "Bäume", 0, null, null],
    [66, "der Berg", "山", , , "Berge", 0, null, null],
//    [67, "die Blume", "花", , , "Blumen", 0, null, null],
    [68, "das Feld", "野原、畑", , , "Felder", 0, null, null],
//    [69, "der Fluss", "川", , , "Flüsse", 0, null, null],
//    [70, "der Himmel", "空、天", , , "", 0, null, null],
//    [71, "der Hund", "犬", , , "Hunde", 0, null, null],
//    [72, "die Katze", "猫", , , "Katzen", 0, null, null],
//    [73, "die Luft", "空気", , , "", 0, null, null],
//    [74, "das Meer", "海", , , "Meere", 0, null, null],
//    [75, "der Mond", "月", , , "", 0, null, null],
//    [76, "die Natur", "自然", , , "", 0, null, null],
    [77, "die Pflanze", "植物", , , "Pflanzen", 0, null, null],
    [78, "der Regen", "雨", , , "", 0, null, null],
    [79, "der Schnee", "雪", , , "", 0, null, null],
//    [80, "der See", "湖", , , "Seen", 0, null, null],
//    [81, "die Sonne", "太陽", , , "", 0, null, null],
    [82, "der Stern", "星", , , "Sterne", 0, null, null],
//    [83, "das Tier", "動物", , , "Tiere", 0, null, null],
//    [84, "der Vogel", "鳥", , , "Vögel", 0, null, null],
//    [85, "der Wald", "森", , , "Wälder", 0, null, null],
//    [86, "das Wetter", "天気", , , "", 0, null, null],
//    [87, "der Wind", "風", , , "Winde", 0, null, null],
    [88, "das Pferd", "馬", , , "Pferde", 0, null, null],
//    [89, "die Bäckerei", "パン屋", , , "Bäckereien", 0, null, null],
    [90, "das Geschäft", "店", , , "Geschäfte", 0, null, null],
    [91, "das Kaufhaus", "デパート", , , "Kaufhäuser", 0, null, null],
//    [92, "das Kino", "映画館", , , "Kinos", 0, null, null],
//    [93, "die Kirche", "教会", , , "Kirchen", 0, null, null],
//    [94, "das Krankenhaus", "病院", , , "Krankenhäuser", 0, null, null],
//    [95, "der Markt", "市場、広場", , , "Märkte", 0, null, null],
//    [96, "der Park", "公園", , , "Parks", 0, null, null],
//    [97, "der Platz", "席、場所", , , "Plätze", 0, null, null],
//    [98, "die Polizei", "警察", , , "", 0, null, null],
//    [99, "die Post", "郵便局", , , "", 0, null, null],
    [100, "das Rathaus", "市庁舎", , , "Rathäuser", 0, null, null],
    [101, "das Schloss", "城", , , "Schlösser", 0, null, null],
//    [102, "die Stadt", "町", , , "Städte", 0, null, null],
//    [103, "die Straße", "通り", , , "Straßen", 0, null, null],
//    [104, "das Hotel", "ホテル", , , "Hotels", 0, null, null],
    [105, "die Abfahrt", "出発", , , "", 0, null, null],
    [106, "die Ankunft", "到着", , , "", 0, null, null],
//    [107, "das Auto", "車、自動車", , , "Autos", 0, null, null],
    [108, "die Autobahn", "高速道路", , , "Autobahnen", 0, null, null],
    [109, "die Bahn", "電車", , , "Bahnen", 0, null, null],
//    [110, "der Bahnhof", "駅", , , "Bahnhöfe", 0, null, null],
//    [111, "der Bus", "バス", , , "Busse", 0, null, null],
    [112, "das Fahrrad", "自転車", , , "Fahrräder", 0, null, null],
//    [113, "die Fahrkarte", "乗車券", , , "Fahrkarten", 0, null, null],
//    [114, "der Fahrplan", "時刻表", , , "Fahrpläne", 0, null, null],
    [115, "das Flugzeug", "飛行機", , , "Flugzeuge", 0, null, null],
    [116, "die Haltestelle", "停留所", , , "Haltestellen", 0, null, null],
    [117, "das Schiff", "船", , , "Schiffe", 0, null, null],
//    [118, "das Taxi", "タクシー", , , "Taxis", 0, null, null],
//    [119, "der Wagen", "自動車、車両", , , "Wagen", 0, null, null],
//    [120, "der Zug", "列車", , , "Züge", 0, null, null],
//    [121, "die Bad", "風呂", , , "", 0, null, null],
//    [122, "der Bett", "ベッド", , , "Betten", 0, null, null],
    [123, "das Dusche", "シャワー", , , "Duschen", 0, null, null],
    [124, "der Fenster", "窓", , , "Fenster", 0, null, null],
//    [125, "der Fernseher", "テレビ", , , "Fernseher", 0, null, null],
//    [126, "das Garten", "庭", , , "Gärten", 0, null, null],
//    [127, "der Haus", "家", , , "Häuser", 0, null, null],
    [128, "das Heizung", "暖房", , , "Heizungen", 0, null, null],
    [129, "die Küche", "キッチン", , , "Küchen", 0, null, null],
    [130, "das Kühlschrank", "冷蔵庫", , , "Kühlschränke", 0, null, null],
    [131, "das Schlüssel", "鍵", , , "Schlüssel", 0, null, null],
    [132, "das Regal", "棚", , , "Regale", 0, null, null],
    [133, "die Schrank", "戸棚", , , "Schränke", 0, null, null],
//    [134, "das Spiegel", "鏡", , , "Spiegel", 0, null, null],
//    [135, "der Stuhl", "椅子", , , "Stühle", 0, null, null],
//    [136, "der Telefon", "電話", , , "Telefone", 0, null, null],
//    [137, "der Tisch", "テーブル", , , "Tische", 0, null, null],
//    [138, "die Toilette", "トイレ", , , "Toiletten", 0, null, null],
//    [139, "die Tür", "ドア", , , "Türen", 0, null, null],
//    [140, "das Uhr", "時計", , , "Uhren", 0, null, null],
//    [141, "das Wand", "壁", , , "Wände", 0, null, null],
//    [142, "die Waschmaschine", "洗濯機", , , "Waschmaschinen", 0, null, null],
//    [143, "die Wohnung", "住まい", , , "Wohnungen", 0, null, null],
//    [144, "das Zimmer", "部屋", , , "Zimmer", 0, null, null],
    [145, "die Bild", "絵、写真", , , "Bilder", 0, null, null],
//    [146, "die Brief", "手紙", , , "Briefe", 0, null, null],
//    [147, "das Buch", "本", , , "Bücher", 0, null, null],
//    [148, "die Heft", "ノート", , , "Hefte", 0, null, null],
//    [149, "die Karte", "カード", , , "Karten", 0, null, null],
//    [150, "der Papier", "紙", , , "Papiere", 0, null, null],
    [151, "der Stift", "ペン", , , "Stifte", 0, null, null],
//    [152, "das Wörterbuch", "辞書", , , "Wörterbücher", 0, null, null],
//    [153, "die Fußball", "サッカー", , , "", 0, null, null],
//    [154, "der Geige", "バイオリン", , , "Geigen", 0, null, null],
//    [155, "das Klavier", "ピアノ", , , "Klaviere", 0, null, null],
//    [156, "die Museum", "博物館", , , "Museen", 0, null, null],
//    [157, "das Oper", "オペラ", , , "Opern", 0, null, null],
    [158, "das Reise", "旅行", , , "Reisen", 0, null, null],
//    [159, "der Theater", "劇場", , , "Theater", 0, null, null],
    [160, "der Urlaub", "休暇", , , "Urlaube", 0, null, null],
//    [161, "die Frage", "質問", , , "Fragen", 0, null, null],
    [162, "der Geburtstag", "誕生日", , , "Geburtstage", 0, null, null],
//    [163, "das Geld", "お金", , , "", 0, null, null],
//    [164, "die Liebe", "愛", , , "", 0, null, null],
//    [165, "der Freund", "友達", , , "Freunde", 0, null, null],
//    [166, "der Name", "名前", , , "Namen", 0, null, null],
    [167, "der Schmerz", "痛み", , , "Schmerzen", 0, null, null],
//    [168, "die Sprache", "言語", , , "Sprachen", 0, null, null],
//    [169, "die Zeit", "時間、時", , , "", 0, null, null],
    [170, "der Anfang", "始まり", , , "", 0, null, null],
//    [171, "das Ende", "終わり", , , "", 0, null, null],
//    [172, "das Wort", "語、単語", , , "Wörter", 0, null, null],
    [173, "die Zeitung", "新聞", , , "Zeitungen", 0, null, null],
//    [174, "die Schule", "学校", , , "Schulen", 0, null, null],
//    [175, "die Universität", "大学", , , "Universitäten", 0, null, null],
    [176, "der Unterricht", "授業", , , "", 0, null, null],
//    [177, "antworten", "答える", , , "", 0, null, null],
//    [178, "arbeiten", "働く", , , "", 0, null, null],
//    [179, "beginnen", "始める", , , "", 0, null, null],
//    [180, "bekommen", "もらう", , , "", 0, null, null],
    [181, "benutzen", "使う", , , "", 0, null, null],
    [182, "bestellen", "注文する", , , "", 0, null, null],
//    [183, "besuchen", "訪問する", , , "", 0, null, null],
//    [184, "bezahlen", "支払う", , , "", 0, null, null],
//    [185, "bleiben", "とどまる", , , "", 0, null, null],
    [186, "brauchen", "必要とする", , , "", 0, null, null],
//    [187, "bringen", "持ってくる", , , "", 0, null, null],
//    [188, "danken", "感謝する", , , "", 0, null, null],
//    [189, "denken", "考える", , , "", 0, null, null],
    [190, "drücken", "押す", , , "", 0, null, null],
//    [191, "finden", "見つける", , , "", 0, null, null],
//    [192, "fliegen", "飛ぶ", , , "", 0, null, null],
//    [193, "fragen", "尋ねる", , , "", 0, null, null],
    [194, "fühlen", "感じる", , , "", 0, null, null],
//    [195, "gehen", "行く", , , "", 0, null, null],
//    [196, "glauben", "信じる", , , "", 0, null, null],
    [197, "heißen", "〜という名前である", , , "", 0, null, null],
    [198, "hoffen", "望む", , , "", 0, null, null],
//    [199, "hören", "聞く", , , "", 0, null, null],
//    [200, "kaufen", "買う", , , "", 0, null, null],
//    [201, "kennen", "知っている", , , "", 0, null, null],
    [202, "kochen", "料理する", , , "", 0, null, null],
//    [203, "kommen", "来る", , , "", 0, null, null],
//    [204, "kosten", "〜の値段である", , , "", 0, null, null],
//    [205, "lachen", "笑う", , , "", 0, null, null],
//    [206, "leben", "生きている", , , "", 0, null, null],
    [207, "legen", "横たえる", , , "", 0, null, null],
//    [208, "lernen", "学ぶ", , , "", 0, null, null],
//    [209, "lieben", "愛する", , , "", 0, null, null],
    [210, "liegen", "置いてある", , , "", 0, null, null],
//    [211, "machen", "する", , , "", 0, null, null],
    [212, "mieten", "借りる", , , "", 0, null, null],
//    [213, "öffnen", "開ける", , , "", 0, null, null],
    [214, "putzen", "掃除する", , , "", 0, null, null],
//    [215, "regnen", "雨が降る", , , "", 0, null, null],
//    [216, "reservieren", "予約する", , , "", 0, null, null],
//    [217, "sagen", "言う", , , "", 0, null, null],
    [218, "schenken", "贈る", , , "", 0, null, null],
    [219, "schicken", "送る", , , "", 0, null, null],
    [220, "schließen", "閉める", , , "", 0, null, null],
//    [221, "schneiden", "切る", , , "", 0, null, null],
//    [222, "schreiben", "書く", , , "", 0, null, null],
//    [223, "schwimmen", "泳ぐ", , , "", 0, null, null],
//    [224, "singen", "歌う", , , "", 0, null, null],
//    [225, "sitzen", "座っている", , , "", 0, null, null],
//    [226, "spielen", "遊ぶ", , , "", 0, null, null],
    [227, "stehen", "立っている", , , "", 0, null, null],
    [228, "stellen", "立てる", , , "", 0, null, null],
//    [229, "studieren", "大学で学ぶ", , , "", 0, null, null],
    [230, "suchen", "探す", , , "", 0, null, null],
//    [231, "tanzen", "踊る", , , "", 0, null, null],
//    [232, "trinken", "飲む", , , "", 0, null, null],
    [233, "üben", "練習する", , , "", 0, null, null],
//    [234, "verkaufen", "売る", , , "", 0, null, null],
    [235, "verstehen", "理解する", , , "", 0, null, null],
//    [236, "warten", "待つ", , , "", 0, null, null],
    [237, "weinen", "泣く", , , "", 0, null, null],
//    [238, "wohnen", "住む", , , "", 0, null, null],
    [239, "wünschen", "願う", , , "", 0, null, null],
//    [240, "zahlen", "支払う", , , "", 0, null, null],
    [241, "zeigen", "見せる", , , "", 0, null, null],
    [242, "ziehen", "引く", , , "", 0, null, null],
    [243, "ändern", "変える", , , "", 0, null, null],
    [244, "erzählen", "物語る", , , "", 0, null, null],
    [245, "rauchen", "タバコを吸う", , , "", 0, null, null],
    [246, "reisen", "旅行する", , , "", 0, null, null],
    [247, "schneien", "雪が降る", , , "", 0, null, null],
//    [248, "tun", "する", , , "", 0, null, null],
//    [249, "fahren", "行く", , , "不規則", 0, null, null],
//    [250, "fallen", "落ちる", , , "不規則", 0, null, null],
//    [251, "gefallen", "気に入る", , , "不規則", 0, null, null],
    [252, "laufen", "走る", , , "不規則", 0, null, null],
    [253, "schlafen", "眠る", , , "不規則", 0, null, null],
    [254, "schlagen", "叩く", , , "不規則", 0, null, null],
    [255, "tragen", "身に着けている", , , "不規則", 0, null, null],
//    [256, "waschen", "洗う", , , "不規則", 0, null, null],
    [257, "fangen", "捕まえる", , , "不規則", 0, null, null],
//    [258, "essen", "食べる", , , "不規則", 0, null, null],
//    [259, "geben", "与える", , , "不規則", 0, null, null],
//    [260, "helfen", "助ける", , , "不規則", 0, null, null],
//    [261, "nehmen", "取る", , , "不規則", 0, null, null],
//    [262, "sprechen", "話す", , , "不規則", 0, null, null],
//    [263, "sterben", "死ぬ", , , "不規則", 0, null, null],
    [264, "treffen", "会う", , , "不規則", 0, null, null],
    [265, "vergessen", "忘れる", , , "不規則", 0, null, null],
    [266, "versprechen", "約束する", , , "不規則", 0, null, null],
    [267, "werfen", "投げる", , , "不規則", 0, null, null],
//    [268, "lesen", "読む", , , "不規則", 0, null, null],
//    [269, "sehen", "見る", , , "不規則", 0, null, null],
//    [270, "haben", "持っている", , , "不規則", 0, null, null],
//    [271, "sein", "（〜で）ある", , , "不規則", 0, null, null],
//    [272, "wissen", "知っている", , , "不規則", 0, null, null],
    [273, "ab|fahren", "出発する", , , "", 0, null, null],
    [274, "an|kommen", "到着する", , , "", 0, null, null],
    [275, "um|steigen", "乗り換える", , , "", 0, null, null],
    [276, "ein|steigen", "乗り込む", , , "", 0, null, null],
    [277, "aus|steigen", "降りる", , , "", 0, null, null],
    [278, "ab|holen", "受け取りにいく", , , "", 0, null, null],
    [279, "auf|stehen", "起きる", , , "", 0, null, null],
    [280, "ein|kaufen", "買い物をする", , , "", 0, null, null],
    [281, "fern|sehen", "テレビを見る", , , "", 0, null, null],
    [282, "ein|laden", "招待する", , , "", 0, null, null],
    [283, "an|rufen", "電話をかける", , , "", 0, null, null],
    [284, "vor|stellen", "紹介する", , , "", 0, null, null],
    [285, "an|fangen", "始める", , , "", 0, null, null],
    [286, "auf|hören", "終わる", , , "", 0, null, null],
    [287, "kennen|lernen", "知り合いになる", , , "", 0, null, null],
    [288, "spazieren geben", "散歩する", , , "", 0, null, null],
//    [289, "können", "〜できる", , , "不規則", 0, null, null],
//    [290, "müssen", "〜しなければならない", , , "不規則", 0, null, null],
//    [291, "dürfen", "〜してもよい", , , "不規則", 0, null, null],
//    [292, "sollen", "〜すべきだ", , , "不規則", 0, null, null],
//    [293, "möchten", "〜したい", , , "不規則", 0, null, null],
//    [294, "wollen", "〜するつもりだ", , , "不規則", 0, null, null],
//    [295, "werden", "〜になる", , , "不規則", 0, null, null],
//    [296, "mögen", "〜かもしれない", , , "不規則", 0, null, null],
//    [297, "alt", "古い", , , "", 0, null, null],
    [298, "arm", "貧しい", , , "", 0, null, null],
    [299, "billig", "安い", , , "", 0, null, null],
    [300, "dick", "厚い", , , "", 0, null, null],
    [301, "dumm", "バカな", , , "", 0, null, null],
//    [302, "dunkel", "暗い", , , "", 0, null, null],
    [303, "dünn", "薄い", , , "", 0, null, null],
    [304, "einfach", "簡単な", , , "", 0, null, null],
    [305, "eng", "狭い", , , "", 0, null, null],
    [306, "falsch", "間違った", , , "", 0, null, null],
//    [307, "faul", "怠惰な", , , "", 0, null, null],
//    [308, "fleißig", "勤勉な", , , "", 0, null, null],
//    [309, "freundlich", "親切な", , , "", 0, null, null],
    [310, "frisch", "新鮮な", , , "", 0, null, null],
//    [311, "gesund", "健康な", , , "", 0, null, null],
//    [312, "glücklich", "幸福な", , , "", 0, null, null],
//    [313, "groß", "大きい", , , "", 0, null, null],
//    [314, "gut", "良い", , , "", 0, null, null],
    [315, "heiß", "暑い", , , "", 0, null, null],
//    [316, "hoch", "高い", , , "", 0, null, null],
//    [317, "interessant", "面白い", , , "", 0, null, null],
//    [318, "jung", "若い", , , "", 0, null, null],
    [319, "kalt", "冷たい", , , "", 0, null, null],
    [320, "kaputt", "壊れている", , , "", 0, null, null],
//    [321, "klein", "小さい", , , "", 0, null, null],
//    [322, "klug", "賢い", , , "", 0, null, null],
//    [323, "krank", "病気の", , , "", 0, null, null],
//    [324, "kurz", "短い", , , "", 0, null, null],
//    [325, "lang", "長い", , , "", 0, null, null],
    [326, "laut", "大きい", , , "", 0, null, null],
    [327, "lecker", "おいしい", , , "", 0, null, null],
    [328, "leicht", "軽い", , , "", 0, null, null],
    [329, "müde", "疲れた", , , "", 0, null, null],
    [330, "nett", "親切な", , , "", 0, null, null],
//    [331, "neu", "新しい", , , "", 0, null, null],
    [332, "reich", "金持ちの", , , "", 0, null, null],
//    [333, "richtig", "正しい", , , "", 0, null, null],
    [334, "ruhig", "静かな", , , "", 0, null, null],
    [335, "satt", "満腹の", , , "", 0, null, null],
    [336, "sauber", "清潔な", , , "", 0, null, null],
    [337, "schade", "残念な", , , "", 0, null, null],
    [338, "schlank", "すらりとした", , , "", 0, null, null],
    [339, "schlecht", "悪い", , , "", 0, null, null],
    [340, "schmutzig", "汚い", , , "", 0, null, null],
    [341, "schnell", "速い", , , "", 0, null, null],
//    [342, "schön", "美しい", , , "", 0, null, null],
    [343, "schwer", "重い", , , "", 0, null, null],
    [344, "schwierig", "難しい", , , "", 0, null, null],
    [345, "stark", "強い", , , "", 0, null, null],
    [346, "süß", "甘い", , , "", 0, null, null],
//    [347, "teuer", "高い", , , "", 0, null, null],
    [348, "tief", "深い", , , "", 0, null, null],
//    [349, "viel", "多くの", , , "", 0, null, null],
//    [350, "warm", "暖かい", , , "", 0, null, null],
    [351, "wenig", "少しの", , , "", 0, null, null],
    [352, "wichtig", "重要な", , , "", 0, null, null],
    [353, "bekannt", "有名な", , , "", 0, null, null],
    [354, "beide", "両方の", , , "", 0, null, null],
//    [355, "halb", "半分の", , , "", 0, null, null],
    [356, "früh", "早い", , , "", 0, null, null],
    [357, "hell", "明るい", , , "", 0, null, null],
    [358, "klar", "はっきりした", , , "", 0, null, null],
    [359, "recht", "正しい", , , "", 0, null, null],
    [360, "schwach", "弱い", , , "", 0, null, null],
//    [361, "voll", "いっぱいの", , , "", 0, null, null],
    [362, "weit", "遠い", , , "", 0, null, null],
//    [363, "blau", "青い", , , "", 0, null, null],
    [364, "gelb", "黄色い", , , "", 0, null, null],
//    [365, "grün", "緑の", , , "", 0, null, null],
//    [366, "rot", "赤い", , , "", 0, null, null],
//    [367, "schwarz", "黒い", , , "", 0, null, null],
//    [368, "weiß", "白い", , , "", 0, null, null],
    [369, "leise", "小声で", , , "", 0, null, null],
//    [370, "pünktlich", "時間通りに", , , "", 0, null, null],
//    [371, "anders", "別の", , , "", 0, null, null],
    [372, "auch", "〜もまた", , , "", 0, null, null],
    [373, "bald", "間もなく", , , "", 0, null, null],
    [374, "da", "そこに", , , "", 0, null, null],
    [375, "doch", "やはり", , , "", 0, null, null],
    [376, "dort", "そこに", , , "", 0, null, null],
//    [377, "einmal", "一度", , , "", 0, null, null],
//    [378, "ganz", "まったく", , , "", 0, null, null],
    [379, "genug", "十分に", , , "", 0, null, null],
    [380, "gerade", "ちょうど", , , "", 0, null, null],
    [381, "gern", "好んで", , , "", 0, null, null],
    [382, "gleich", "すぐに", , , "", 0, null, null],
//    [383, "heute", "今日", , , "", 0, null, null],
//    [384, "hier", "ここに", , , "", 0, null, null],
//    [385, "immer", "いつも", , , "", 0, null, null],
    [386, "jetzt", "今", , , "", 0, null, null],
    [387, "langsam", "遅い", , , "", 0, null, null],
//    [388, "leider", "残念ながら", , , "", 0, null, null],
    [389, "lieber", "より好んで", , , "", 0, null, null],
//    [390, "links", "左に", , , "", 0, null, null],
//    [391, "mehr", "より多くの", , , "", 0, null, null],
//    [392, "morgen", "明日", , , "", 0, null, null],
    [393, "natürlich", "当然", , , "", 0, null, null],
//    [394, "nicht", "〜ない", , , "", 0, null, null],
    [395, "noch", "まだ", , , "", 0, null, null],
    [396, "nur", "ただ", , , "", 0, null, null],
//    [397, "oft", "しばしば", , , "", 0, null, null],
    [398, "rechts", "右に", , , "", 0, null, null],
//    [399, "schon", "もう", , , "", 0, null, null],
//    [400, "sehr", "とても", , , "", 0, null, null],
    [401, "selten", "まれに", , , "", 0, null, null],
    [402, "so", "そのように", , , "", 0, null, null],
    [403, "später", "後で", , , "", 0, null, null],
    [404, "ungefähr", "およそ", , , "", 0, null, null],
    [405, "vielleicht", "ひょっとしたら", , , "", 0, null, null],
    [406, "wieder", "再び", , , "", 0, null, null],
    [407, "wirklich", "本当に", , , "", 0, null, null],
//    [408, "zusammen", "一緒に", , , "", 0, null, null],
    [409, "an", "接して", , , "3/4格支配", 0, null, null],
    [410, "auf", "〜の上で", , , "3/4格支配", 0, null, null],
    [411, "aus", "〜の中から", , , "3格支配", 0, null, null],
//    [412, "bei", "〜のもとで", , , "3格支配", 0, null, null],
//    [413, "für", "〜のために", , , "4格支配", 0, null, null],
//    [414, "hinter", "〜の後ろで", , , "3/4格支配", 0, null, null],
//    [415, "in", "〜の中に", , , "3/4格支配", 0, null, null],
//    [416, "mit", "〜と一緒に", , , "3格支配", 0, null, null],
    [417, "nach", "〜の方に", , , "3格支配", 0, null, null],
    [418, "neben", "〜の横で", , , "3/4格支配", 0, null, null],
    [419, "über", "〜の上方に", , , "3/4格支配", 0, null, null],
    [420, "unter", "〜の下で", , , "3/4格支配", 0, null, null],
    [421, "vor", "〜の前に", , , "3/4格支配", 0, null, null],
//    [422, "zwischen", "〜の間に", , , "3/4格支配", 0, null, null],
//    [423, "ohne", "〜なしで", , , "4格支配", 0, null, null],
//    [424, "zu", "〜へ", , , "3格支配", 0, null, null],
//    [425, "wann", "いつ", , , "", 0, null, null],
    [426, "warum", "なぜ", , , "", 0, null, null],
//    [427, "was", "何", , , "", 0, null, null],
//    [428, "wer", "だれ", , , "", 0, null, null],
    [429, "wie", "どのように", , , "", 0, null, null],
//    [430, "wo", "どこに", , , "", 0, null, null],
    [431, "woher", "どこから", , , "", 0, null, null],
    [432, "wohin", "どこへ", , , "", 0, null, null],
//    [433, "aber", "しかし", , , "", 0, null, null],
    [434, "da", "〜だから", , , "", 0, null, null],
//    [435, "dass", "〜ということ", , , "", 0, null, null],
    [436, "denn", "というのは", , , "", 0, null, null],
//    [437, "obwohl", "〜にもかかわらず", , , "", 0, null, null],
//    [438, "oder", "または", , , "", 0, null, null],
//    [439, "und", "〜と〜", , , "", 0, null, null],
    [440, "weil", "〜だから", , , "", 0, null, null]
];

let chooseList1 = [];
let chooseList2 = [];
let chooseList3 = [];
let sortList = [];

let Qcard1 = document.getElementById('Qcard1');
let Qcard2 = document.getElementById('Qcard2');
let Acard1 = document.getElementById('Acard1');
let Acard2 = document.getElementById('Acard2');
let Acard3 = document.getElementById('Acard3');
let Acard4 = document.getElementById('Acard4');
let EcardQ = document.getElementById('EcardQ');
let EcardA = document.getElementById('EcardA');
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let rLv = document.getElementsByName('rnLv');
let rPart = document.getElementsByName('rnPart');
let rState = document.getElementsByName('rnState');
let rTimes = document.getElementsByName('rnTimes');
let rDirection = document.getElementsByName('rnDirection');
let Lv;
let Part;
let State;
let Times;
let Direction;
let now;
let play;

window.onload = load();
window.onload = numbering();

function load() {
    now = 0;
    play = 0;
    Qcard1.innerHTML = null;
    Qcard2.innerHTML = null;
    Acard1.innerHTML = null;
    Acard2.innerHTML = null;
    Acard3.innerHTML = null;
    Acard4.innerHTML = null;
    btn3.innerHTML = null;
    btn4.innerHTML = null;
    btn5.innerHTML = `開始`;
    EcardQ.innerHTML = `
        <form id="rLv">
            <input type="radio" name="rnLv">All</input>
            <input type="radio" name="rnLv">Lv.0</input>
            <input type="radio" name="rnLv">Lv.1</input>
            <input type="radio" name="rnLv">Lv.2</input>
        </form>`;
    EcardA.innerHTML = `
        <form id="rState">
            <input type="radio" name="rnState">All</input>
            <input type="radio" name="rnState">正解</input>
            <input type="radio" name="rnState">不正解</input>
            <input type="radio" name="rnState">未解答</input>
        </form>
        <hr>
        <form id="rTimes">
            <input type="radio" name="rnTimes">All</input>
            <input type="radio" name="rnTimes">10</input>
            <input type="radio" name="rnTimes">30</input>
            <input type="radio" name="rnTimes">50</input>
            <input type="radio" name="rnTimes">100</input>
        </form>`;
    if (Lv == 9) {
        rLv[0].checked = true;
    } else if (Lv <= 5) {
        rLv[Lv + 1].checked = true;
    } else {
        return;
    }
    if (State == 9) {
        rState[0].checked = true;
    } else if (State == 0) {
        rState[3].checked = true;
    } else if (State <= 2) {
        rState[State].checked = true;
    } else {
        return;
    }
    if (Times === null) {
        rTimes[0].checked = true;
    } else if (Times == 10) {
        rTimes[1].checked = true;
    } else if (Times == 30) {
        rTimes[2].checked = true;
    } else if (Times == 50) {
        rTimes[3].checked = true;
    } else if (Times == 100) {
        rTimes[4].checked = true;
    } else {
        return;
    }
    console.log(`onload`);
    console.log(`wordList length: ${wordList.length}`);
};

function numbering() {
    for (let i = 0; i < wordList.length; i++) {
        wordList[i].push(wordList[i][0]);
        wordList[i][0] = i + 1;
    }
    console.log(wordList);
};

toTop.onclick = function () {
    console.log(`toTop onclick`);
    return reload();
}

function reload() {
    console.log(`reload`);
    return load();
}

btn5.onclick = function () {
    console.log(`btn5 onclick`);
    mode();
};

function mode() {
    if (rLv[0].checked == true) {
        Lv = 9;
    } else if (rLv[1].checked == true) {
        Lv = 0;
    } else if (rLv[2].checked == true) {
        Lv = 1;
    } else if (rLv[3].checked == true) {
        Lv = 2;
    } else {
        console.log(`Lv is not choosed.`)
        return reload();
    }
    if (rState[0].checked == true) {
        State = 9;
    } else if (rState[1].checked == true) {
        State = 1;
    } else if (rState[2].checked == true) {
        State = 2;
    } else if (rState[3].checked == true) {
        State = 0;
    } else {
        console.log(`State is not choosed.`)
        return reload();
    }
    if (rTimes[0].checked == true) {
        Times = null;
    } else if (rTimes[1].checked == true) {
        Times = 10;
    } else if (rTimes[2].checked == true) {
        Times = 30;
    } else if (rTimes[3].checked == true) {
        Times = 50;
    } else if (rTimes[4].checked == true) {
        Times = 100;
    } else {
        console.log(`Times is not choosed.`)
        return reload();
    }
    EcardQ.innerHTML = null;
    EcardA.innerHTML = null;
    btn5.innerHTML = null;
    console.log(`Started: Lv = ${Lv}, State = ${State}, Times = ${Times}`);
    chooseReset();
}

function chooseReset() {
    chooseList2 = [];
    chooseList3 = [];
    sortList = [];
    chooseLv();
}

function chooseLv() {
    if (Lv == 0) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 0) {
                chooseList2.push(wordList[i]);
            }
        }
    } else if (Lv == 1) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 1) {
                chooseList2.push(wordList[i]);
            }
        }
    } else if (Lv == 2) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 2) {
                chooseList2.push(wordList[i]);
            }
        }
    } else if (Lv == 9) { //all
        for (let i = 0; i < wordList.length; i++) {
            chooseList2.push(wordList[i]);
        }
    } else {
        return reload();
    }
    console.log(`after Lv :`);
    console.log(chooseList2);
    chooseState();
}

function chooseState() {
    if (State == 1) {
        for (let i = 0; i < chooseList2.length; i++) {
            if (chooseList2[i][7] == 1) {
                chooseList3.push(chooseList2[i]);
            }
        }
    } else if (State == 2) {
        for (let i = 0; i < chooseList2.length; i++) {
            if (chooseList2[i][7] == 2) {
                chooseList3.push(chooseList2[i]);
            }
        }
    } else if (State == 0) {
        for (let i = 0; i < chooseList2.length; i++) {
            if (chooseList2[i][7] == (0 || null)) {
                chooseList3.push(chooseList2[i]);
            }
        }
    } else if (State == 9) { //all
        for (let i = 0; i < chooseList2.length; i++) {
            chooseList3.push(chooseList2[i]);
        }
    } else {
        return reload();
    }
    console.log(`after State :`);
    console.log(chooseList3);
    sort();
}

function sort() {
    let realTimes
    if (Times === null) {
        realTimes = chooseList3.length;
    } else {
        realTimes = Times;
    }
    if (realTimes > chooseList3.length) {
        realTimes = chooseList3.length;
    }
    for (let i = 0; i < realTimes; i++) {
        let rdm = null;
        rdm = Math.floor(Math.random() * chooseList3.length);
        sortList.push(chooseList3[rdm]);
        chooseList3.splice(rdm, 1);
    }
    console.log(`sortList :`);
    console.log(sortList);
    appear();
}

function appear() {
    if (sortList.length == 0) {
        return end();
    } else {
        console.log(`now is ${now}.`)
        play = 1;
        Qcard1.innerHTML = `No: ${sortList[now][9]}  Last: ${sortList.length - now}`;
        Qcard2.innerHTML = sortList[now][1];
        Acard1.innerHTML = `<br>`;
        Acard2.innerHTML = null;
        Acard3.innerHTML = null;
        Acard4.innerHTML = null;
        btn3.innerHTML = `解答を表示`;
    }
}

btn3.onclick = function () {
    open();
    btn3.innerHTML = null;
};

function open() {
    Acard1.innerHTML = sortList[now][2];
    if (!(sortList[now][5] == ``)) {
        Acard4.innerHTML = `備考： ${sortList[now][5]}`;
    }
}

btn0.onclick = function () {
    if (play == 0) {
        return;
    }
    wordList[sortList[now][0] - 1][7] = 0;
    console.log(wordList[sortList[now][0] - 1]);
    next()
};

btn1.onclick = function () {
    if (play == 0) {
        return;
    }
    wordList[sortList[now][0] - 1][7] = 1;
    console.log(wordList[sortList[now][0] - 1]);
    next()
};

btn2.onclick = function () {
    if (play == 0) {
        return;
    }
    wordList[sortList[now][0] - 1][7] = 2;
    console.log(wordList[sortList[now][0] - 1]);
    next()
};

function next() {
    if (now + 1 < sortList.length) {
        now++;
        appear();
    } else {
        play = 0;
        end();
    }
};

function end() {
    Qcard1.innerHTML = `Last: 0`;
    Qcard2.innerHTML = null;
    Acard1.innerHTML = null;
    Acard2.innerHTML = null;
    Acard3.innerHTML = null;
    Acard4.innerHTML = null;
    EcardQ.innerHTML = `<br>`;
    EcardA.innerHTML = `<br>`;
    btn3.innerHTML = null;
    btn4.innerHTML = `トップに戻る`;
}

btn4.onclick = function () {
    console.log(`End and relode.`)
    reload();
}
