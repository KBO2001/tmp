'use strict';

//[0No(1~), 1Word, 2Mean, 3Part, 4Change, 5Note, 6Lv, 7State, 8Sort]
let wordList = [
    [1, "Bruder", "性別： der Bruder<br>複数： Brüder<br>意味： 兄、弟", , ,"", 0, null, null],
    [2, "Eltern", "性別： die* Eltern<br>意味： 両親", , ,"", 0, null, null],
    [3, "Familie", "性別： die Familie<br>複数： Familien<br>意味： 家族", , ,"", 0, null, null],
    [4, "Frau", "性別： die Frau<br>複数： Frauen<br>意味： 妻", , ,"", 0, null, null],
    [5, "Geschwister", "性別： die* Geschwister<br>意味： きょうだい", , ,"", 0, null, null],
    [6, "Kind", "性別： das Kind<br>複数： Kinder<br>意味： 子ども", , ,"", 0, null, null],
    [7, "Mann", "性別： der Mann<br>複数： Männer<br>意味： 夫", , ,"", 0, null, null],
    [8, "Mutter", "性別： die Mutter<br>複数： Mütter<br>意味： 母", , ,"", 0, null, null],
    [9, "Schwester", "性別： die Schwester<br>複数： Schwestern<br>意味： 姉、妹", , ,"", 0, null, null],
    [10, "Sohn", "性別： der Sohn<br>複数： Söhne<br>意味： 息子", , ,"", 0, null, null],
    [11, "Tochter", "性別： die Tochter<br>複数： Töchter<br>意味： 娘", , ,"", 0, null, null],
    [12, "Vater", "性別： der Vater<br>複数： Väter<br>意味： 父", , ,"", 0, null, null],
    [13, "Tante", "性別： die Tante<br>複数： Tanten<br>意味： おば", , ,"", 0, null, null],
    [14, "Onkel", "性別： der Onkel<br>複数： Onkel<br>意味： おじ", , ,"", 0, null, null],
    [15, "Mädchen", "性別： das Mädchen<br>複数： Mädchen<br>意味： 女の子", , ,"", 0, null, null],
    [16, "Junge", "性別： der Junge<br>複数： Jungen<br>意味： 男の子", , ,"", 0, null, null],
    [17, "Arzt", "性別： der Arzt<br>複数： Ärzte<br>意味： 医者", , ,"", 0, null, null],
    [18, "Beruf", "性別： der Beruf<br>複数： Berufe<br>意味： 職業", , ,"", 0, null, null],
    [19, "Firma", "性別： die Firma<br>複数： Firmen<br>意味： 会社", , ,"", 0, null, null],
    [20, "Lehrer", "性別： der Lehrer<br>複数： Lehrer<br>意味： 教師", , ,"", 0, null, null],
    [21, "Professor", "性別： der Professor<br>複数： Professoren<br>意味： 教授", , ,"", 0, null, null],
    [22, "Hausfrau", "性別： die Hausfrau<br>複数： Hausfrauen<br>意味： 主婦", , ,"", 0, null, null],
    [23, "Schüler", "性別： der Schüler<br>複数： Schüler<br>意味： 生徒", , ,"", 0, null, null],
    [24, "Student", "性別： der Student<br>複数： Studenten<br>意味： 大学生", , ,"", 0, null, null],
    [25, "Deutschland", "性別： Deutschland<br>意味： ドイツ", , ,"", 0, null, null],
    [26, "Deutsch", "性別： Deutsch<br>意味： ドイツ語", , ,"", 0, null, null],
    [27, "Japan", "性別： Japan<br>意味： 日本", , ,"", 0, null, null],
    [28, "Japanisch", "性別： Japanisch<br>意味： 日本語", , ,"", 0, null, null],
    [29, "Österreich", "性別： Österreich<br>意味： オーストリア", , ,"", 0, null, null],
    [30, "Schweiz", "性別： die Schweiz<br>意味： スイス", , ,"", 0, null, null],
    [31, "Japaner", "性別： der Japaner<br>複数： Japaner<br>意味： 日本人", , ,"", 0, null, null],
    [32, "Ausland", "性別： das Ausland<br>意味： 外国", , ,"", 0, null, null],
    [33, "Brot", "性別： das Brot<br>複数： Brote<br>意味： パン", , ,"", 0, null, null],
    [34, "Brötchen", "性別： das Brötchen<br>複数： Brötchen<br>意味： 小さいパン", , ,"", 0, null, null],
    [35, "Butter", "性別： die Butter<br>意味： バター", , ,"", 0, null, null],
    [36, "Ei", "性別： das Ei<br>複数： Eier<br>意味： 卵", , ,"", 0, null, null],
    [37, "Essen", "性別： das Essen<br>意味： 食事", , ,"", 0, null, null],
    [38, "Essig", "性別： der Essig<br>意味： 酢", , ,"", 0, null, null],
    [39, "Fisch", "性別： der Fisch<br>複数： Fische<br>意味： 魚", , ,"", 0, null, null],
    [40, "Fleisch", "性別： das Fleisch<br>意味： 肉", , ,"", 0, null, null],
    [41, "Käse", "性別： der Käse<br>意味： チーズ", , ,"", 0, null, null],
    [42, "Kuchen", "性別： der Kuchen<br>複数： Kuchen<br>意味： ケーキ", , ,"", 0, null, null],
    [43, "Marmelade", "性別： die Marmelade<br>複数： Marmeladen<br>意味： ジャム", , ,"", 0, null, null],
    [44, "Öl", "性別： das Öl<br>意味： 油", , ,"", 0, null, null],
    [45, "Reis", "性別： der Reis<br>意味： 米", , ,"", 0, null, null],
    [46, "Salat", "性別： der Salat<br>複数： Salate<br>意味： サラダ", , ,"", 0, null, null],
    [47, "Salz", "性別： das Salz<br>複数： Salze<br>意味： 塩", , ,"", 0, null, null],
    [48, "Schinken", "性別： der Schinken<br>複数： Schinken<br>意味： ハム", , ,"", 0, null, null],
    [49, "Schokolade", "性別： die Schokolade<br>複数： Schokoladen<br>意味： チョコレート", , ,"", 0, null, null],
    [50, "Suppe", "性別： die Suppe<br>複数： Suppen<br>意味： スープ", , ,"", 0, null, null],
    [51, "Wurst", "性別： die Wurst<br>複数： Würste<br>意味： ソーセージ", , ,"", 0, null, null],
    [52, "Zucker", "性別： der Zucker<br>意味： 砂糖", , ,"", 0, null, null],
    [53, "Hunger", "性別： der Hunger<br>意味： 空腹", , ,"", 0, null, null],
    [54, "Pfeffer", "性別： der Pfeffer<br>意味： コショウ", , ,"", 0, null, null],
    [55, "Shane", "性別： die Shane<br>意味： クリーム", , ,"", 0, null, null],
    [56, "Frühstück", "性別： das Frühstück<br>意味： 朝食", , ,"", 0, null, null],
    [57, "Bier", "性別： das Bier<br>意味： ビール", , ,"", 0, null, null],
    [58, "Kaffee", "性別： der Kaffee<br>意味： コーヒー", , ,"", 0, null, null],
    [59, "Milch", "性別： die Milch<br>意味： 牛乳", , ,"", 0, null, null],
    [60, "Saft", "性別： der Saft<br>複数： Säfte<br>意味： ジュース", , ,"", 0, null, null],
    [61, "Tee", "性別： der Tee<br>意味： 紅茶", , ,"", 0, null, null],
    [62, "Wasser", "性別： das Wasser<br>意味： 水", , ,"", 0, null, null],
    [63, "Wein", "性別： der Wein<br>意味： ワイン", , ,"", 0, null, null],
    [64, "Durst", "性別： der Durst<br>意味： のどの渇き", , ,"", 0, null, null],
    [65, "Baum", "性別： der Baum<br>複数： Bäume<br>意味： 木", , ,"", 0, null, null],
    [66, "Berg", "性別： der Berg<br>複数： Berge<br>意味： 山", , ,"", 0, null, null],
    [67, "Blume", "性別： die Blume<br>複数： Blumen<br>意味： 花", , ,"", 0, null, null],
    [68, "Feld", "性別： das Feld<br>複数： Felder<br>意味： 野原、畑", , ,"", 0, null, null],
    [69, "Fluss", "性別： der Fluss<br>複数： Flüsse<br>意味： 川", , ,"", 0, null, null],
    [70, "Himmel", "性別： der Himmel<br>意味： 空、天", , ,"", 0, null, null],
    [71, "Hund", "性別： der Hund<br>複数： Hunde<br>意味： 犬", , ,"", 0, null, null],
    [72, "Katze", "性別： die Katze<br>複数： Katzen<br>意味： 猫", , ,"", 0, null, null],
    [73, "Luft", "性別： die Luft<br>意味： 空気", , ,"", 0, null, null],
    [74, "Meer", "性別： das Meer<br>複数： Meere<br>意味： 海", , ,"", 0, null, null],
    [75, "Mond", "性別： der Mond<br>意味： 月", , ,"", 0, null, null],
    [76, "Natur", "性別： die Natur<br>意味： 自然", , ,"", 0, null, null],
    [77, "Pflanze", "性別： die Pflanze<br>複数： Pflanzen<br>意味： 植物", , ,"", 0, null, null],
    [78, "Regen", "性別： der Regen<br>意味： 雨", , ,"", 0, null, null],
    [79, "Schnee", "性別： der Schnee<br>意味： 雪", , ,"", 0, null, null],
    [80, "See", "性別： der See<br>複数： Seen<br>意味： 湖", , ,"", 0, null, null],
    [81, "Sonne", "性別： die Sonne<br>意味： 太陽", , ,"", 0, null, null],
    [82, "Stern", "性別： der Stern<br>複数： Sterne<br>意味： 星", , ,"", 0, null, null],
    [83, "Tier", "性別： das Tier<br>複数： Tiere<br>意味： 動物", , ,"", 0, null, null],
    [84, "Vogel", "性別： der Vogel<br>複数： Vögel<br>意味： 鳥", , ,"", 0, null, null],
    [85, "Wald", "性別： der Wald<br>複数： Wälder<br>意味： 森", , ,"", 0, null, null],
    [86, "Wetter", "性別： das Wetter<br>意味： 天気", , ,"", 0, null, null],
    [87, "Wind", "性別： der Wind<br>複数： Winde<br>意味： 風", , ,"", 0, null, null],
    [88, "Pferd", "性別： das Pferd<br>複数： Pferde<br>意味： 馬", , ,"", 0, null, null],
    [89, "Bäckerei", "性別： die Bäckerei<br>複数： Bäckereien<br>意味： パン屋", , ,"", 0, null, null],
    [90, "Geschäft", "性別： das Geschäft<br>複数： Geschäfte<br>意味： 店", , ,"", 0, null, null],
    [91, "Kaufhaus", "性別： das Kaufhaus<br>複数： Kaufhäuser<br>意味： デパート", , ,"", 0, null, null],
    [92, "Kino", "性別： das Kino<br>複数： Kinos<br>意味： 映画館", , ,"", 0, null, null],
    [93, "Kirche", "性別： die Kirche<br>複数： Kirchen<br>意味： 教会", , ,"", 0, null, null],
    [94, "Krankenhaus", "性別： das Krankenhaus<br>複数： Krankenhäuser<br>意味： 病院", , ,"", 0, null, null],
    [95, "Markt", "性別： der Markt<br>複数： Märkte<br>意味： 市場、広場", , ,"", 0, null, null],
    [96, "Park", "性別： der Park<br>複数： Parks<br>意味： 公園", , ,"", 0, null, null],
    [97, "Platz", "性別： der Platz<br>複数： Plätze<br>意味： 席、場所", , ,"", 0, null, null],
    [98, "Polizei", "性別： die Polizei<br>意味： 警察", , ,"", 0, null, null],
    [99, "Post", "性別： die Post<br>意味： 郵便局", , ,"", 0, null, null],
    [100, "Rathaus", "性別： das Rathaus<br>複数： Rathäuser<br>意味： 市庁舎", , ,"", 0, null, null],
    [101, "Schloss", "性別： das Schloss<br>複数： Schlösser<br>意味： 城", , ,"", 0, null, null],
    [102, "Stadt", "性別： die Stadt<br>複数： Städte<br>意味： 町", , ,"", 0, null, null],
    [103, "Straße", "性別： die Straße<br>複数： Straßen<br>意味： 通り", , ,"", 0, null, null],
    [104, "Hotel", "性別： das Hotel<br>複数： Hotels<br>意味： ホテル", , ,"", 0, null, null],
    [105, "Abfahrt", "性別： die Abfahrt<br>意味： 出発", , ,"", 0, null, null],
    [106, "Ankunft", "性別： die Ankunft<br>意味： 到着", , ,"", 0, null, null],
    [107, "Auto", "性別： das Auto<br>複数： Autos<br>意味： 車、自動車", , ,"", 0, null, null],
    [108, "Autobahn", "性別： die Autobahn<br>複数： Autobahnen<br>意味： 高速道路", , ,"", 0, null, null],
    [109, "Bahn", "性別： die Bahn<br>複数： Bahnen<br>意味： 電車", , ,"", 0, null, null],
    [110, "Bahnhof", "性別： der Bahnhof<br>複数： Bahnhöfe<br>意味： 駅", , ,"", 0, null, null],
    [111, "Bus", "性別： der Bus<br>複数： Busse<br>意味： バス", , ,"", 0, null, null],
    [112, "Fahrrad", "性別： das Fahrrad<br>複数： Fahrräder<br>意味： 自転車", , ,"", 0, null, null],
    [113, "Fahrkarte", "性別： die Fahrkarte<br>複数： Fahrkarten<br>意味： 乗車券", , ,"", 0, null, null],
    [114, "Fahrplan", "性別： der Fahrplan<br>複数： Fahrpläne<br>意味： 時刻表", , ,"", 0, null, null],
    [115, "Flugzeug", "性別： das Flugzeug<br>複数： Flugzeuge<br>意味： 飛行機", , ,"", 0, null, null],
    [116, "Haltestelle", "性別： die Haltestelle<br>複数： Haltestellen<br>意味： 停留所", , ,"", 0, null, null],
    [117, "Schiff", "性別： das Schiff<br>複数： Schiffe<br>意味： 船", , ,"", 0, null, null],
    [118, "Taxi", "性別： das Taxi<br>複数： Taxis<br>意味： タクシー", , ,"", 0, null, null],
    [119, "Wagen", "性別： der Wagen<br>複数： Wagen<br>意味： 自動車、車両", , ,"", 0, null, null],
    [120, "Zug", "性別： der Zug<br>複数： Züge<br>意味： 列車", , ,"", 0, null, null],
    [121, "Bad", "性別： die Bad<br>複数： Bäder<br>意味： 風呂", , ,"", 0, null, null],
    [122, "Bett", "性別： der Bett<br>複数： Betten<br>意味： ベッド", , ,"", 0, null, null],
    [123, "Dusche", "性別： das Dusche<br>複数： Duschen<br>意味： シャワー", , ,"", 0, null, null],
    [124, "Fenster", "性別： der Fenster<br>複数： Fenster<br>意味： 窓", , ,"", 0, null, null],
    [125, "Fernseher", "性別： der Fernseher<br>複数： Fernseher<br>意味： テレビ", , ,"", 0, null, null],
    [126, "Garten", "性別： das Garten<br>複数： Gärten<br>意味： 庭", , ,"", 0, null, null],
    [127, "Haus", "性別： der Haus<br>複数： Häuser<br>意味： 家", , ,"", 0, null, null],
    [128, "Heizung", "性別： das Heizung<br>複数： Heizungen<br>意味： 暖房", , ,"", 0, null, null],
    [129, "Küche", "性別： die Küche<br>複数： Küchen<br>意味： キッチン", , ,"", 0, null, null],
    [130, "Kühlschrank", "性別： das Kühlschrank<br>複数： Kühlschränke<br>意味： 冷蔵庫", , ,"", 0, null, null],
    [131, "Schlüssel", "性別： das Schlüssel<br>複数： Schlüssel<br>意味： 鍵", , ,"", 0, null, null],
    [132, "Regal", "性別： das Regal<br>複数： Regale<br>意味： 棚", , ,"", 0, null, null],
    [133, "Schrank", "性別： die Schrank<br>複数： Schränke<br>意味： 戸棚", , ,"", 0, null, null],
    [134, "Spiegel", "性別： das Spiegel<br>複数： Spiegel<br>意味： 鏡", , ,"", 0, null, null],
    [135, "Stuhl", "性別： der Stuhl<br>複数： Stühle<br>意味： 椅子", , ,"", 0, null, null],
    [136, "Telefon", "性別： der Telefon<br>複数： Telefone<br>意味： 電話", , ,"", 0, null, null],
    [137, "Tisch", "性別： der Tisch<br>複数： Tische<br>意味： テーブル", , ,"", 0, null, null],
    [138, "Toilette", "性別： die Toilette<br>複数： Toiletten<br>意味： トイレ", , ,"", 0, null, null],
    [139, "Tür", "性別： die Tür<br>複数： Türen<br>意味： ドア", , ,"", 0, null, null],
    [140, "Uhr", "性別： das Uhr<br>複数： Uhren<br>意味： 時計", , ,"", 0, null, null],
    [141, "Wand", "性別： das Wand<br>複数： Wände<br>意味： 壁", , ,"", 0, null, null],
    [142, "Waschmaschine", "性別： die Waschmaschine<br>複数： Waschmaschinen<br>意味： 洗濯機", , ,"", 0, null, null],
    [143, "Wohnung", "性別： die Wohnung<br>複数： Wohnungen<br>意味： 住まい", , ,"", 0, null, null],
    [144, "Zimmer", "性別： das Zimmer<br>複数： Zimmer<br>意味： 部屋", , ,"", 0, null, null],
    [145, "Bild", "性別： die Bild<br>複数： Bilder<br>意味： 絵、写真", , ,"", 0, null, null],
    [146, "Brief", "性別： die Brief<br>複数： Briefe<br>意味： 手紙", , ,"", 0, null, null],
    [147, "Buch", "性別： das Buch<br>複数： Bücher<br>意味： 本", , ,"", 0, null, null],
    [148, "Heft", "性別： die Heft<br>複数： Hefte<br>意味： ノート", , ,"", 0, null, null],
    [149, "Karte", "性別： die Karte<br>複数： Karten<br>意味： カード", , ,"", 0, null, null],
    [150, "Papier", "性別： der Papier<br>複数： Papiere<br>意味： 紙", , ,"", 0, null, null],
    [151, "Stift", "性別： der Stift<br>複数： Stifte<br>意味： ペン", , ,"", 0, null, null],
    [152, "Wörterbuch", "性別： das Wörterbuch<br>複数： Wörterbücher<br>意味： 辞書", , ,"", 0, null, null],
    [153, "Fußball", "性別： die Fußball<br>意味： サッカー", , ,"", 0, null, null],
    [154, "Geige", "性別： der Geige<br>複数： Geigen<br>意味： バイオリン", , ,"", 0, null, null],
    [155, "Klavier", "性別： das Klavier<br>複数： Klaviere<br>意味： ピアノ", , ,"", 0, null, null],
    [156, "Museum", "性別： die Museum<br>複数： Museen<br>意味： 博物館", , ,"", 0, null, null],
    [157, "Oper", "性別： das Oper<br>複数： Opern<br>意味： オペラ", , ,"", 0, null, null],
    [158, "Reise", "性別： das Reise<br>複数： Reisen<br>意味： 旅行", , ,"", 0, null, null],
    [159, "Theater", "性別： der Theater<br>複数： Theater<br>意味： 劇場", , ,"", 0, null, null],
    [160, "Urlaub", "性別： der Urlaub<br>複数： Urlaube<br>意味： 休暇", , ,"", 0, null, null],
    [161, "Frage", "性別： die Frage<br>複数： Fragen<br>意味： 質問", , ,"", 0, null, null],
    [162, "Geburtstag", "性別： der Geburtstag<br>複数： Geburtstage<br>意味： 誕生日", , ,"", 0, null, null],
    [163, "Geld", "性別： das Geld<br>意味： お金", , ,"", 0, null, null],
    [164, "Liebe", "性別： die Liebe<br>意味： 愛", , ,"", 0, null, null],
    [165, "Freund", "性別： der Freund<br>複数： Freunde<br>意味： 友達", , ,"", 0, null, null],
    [166, "Name", "性別： der Name<br>複数： Namen<br>意味： 名前", , ,"", 0, null, null],
    [167, "Schmerz", "性別： der Schmerz<br>複数： Schmerzen<br>意味： 痛み", , ,"", 0, null, null],
    [168, "Sprache", "性別： die Sprache<br>複数： Sprachen<br>意味： 言語", , ,"", 0, null, null],
    [169, "Zeit", "性別： die Zeit<br>意味： 時間、時", , ,"", 0, null, null],
    [170, "Anfang", "性別： der Anfang<br>意味： 始まり", , ,"", 0, null, null],
    [171, "Ende", "性別： das Ende<br>意味： 終わり", , ,"", 0, null, null],
    [172, "Wort", "性別： das Wort<br>複数： Wörter<br>意味： 語、単語", , ,"", 0, null, null],
    [173, "Zeitung", "性別： die Zeitung<br>複数： Zeitungen<br>意味： 新聞", , ,"", 0, null, null],
    [174, "Schule", "性別： die Schule<br>複数： Schulen<br>意味： 学校", , ,"", 0, null, null],
    [175, "Universität", "性別： die Universität<br>複数： Universitäten<br>意味： 大学", , ,"", 0, null, null],
    [176, "Unterricht", "性別： der Unterricht<br>意味： 授業", , ,"", 0, null, null]
];


let chooseList1 = [];
let chooseList2 = [];
let chooseList3 = [];
let sortList = [];

let Qcard1 = document.getElementById('Qcard1');
let Qcard2 = document.getElementById('Qcard2');
let AcardSP = document.getElementById('AcardSP');
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

function load() {
    now = 0;
    play = 0;
    Qcard1.innerHTML = null;
    Qcard2.innerHTML = null;
    AcardSP.innerHTML = null;
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
    if (realTimes > chooseList3.length){
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
        Qcard1.innerHTML = `No: ${sortList[now][0]}  Last: ${sortList.length - now}`;
        Qcard2.innerHTML = sortList[now][1];
        AcardSP.innerHTML = `<br>`;
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
        AcardSP.innerHTML = sortList[now][2];
    if (!(sortList[now][5] == ``)) {
        Acard4.innerHTML = `意味： ${sortList[now][5]}`;
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
    AcardSP.innerHTML = null;
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