'use strict';

//[0No(1~), 1Word, 2Mean, 3Part, 4Change, 5Note, 6Lv, 7State, 8Sort]
let wordList = [
[1, "焼く", "不定形　　：<b>backen</b><br>過去基本形：<b>backte</b><br>接続法２式：backte<br>過去分詞　：<b>gebacken</b>", , ,"", 1, null, null],
[2, "命じる", "不定形　　：<b>befehlen</b><br>直接法現在：befiehlt<br>過去基本形：<b>befahl</b><br>接続法２式：beföhle / befähle<br>過去分詞　：<b>befohlen</b>", , ,"0, null, null],
[3, "始める", "不定形　　：<b>beginnen</b><br>過去基本形：<b>begann</b><br>接続法２式：begänne / begönne<br>過去分詞　：<b>begonnen</b>", , ,"", 0, null, null],
[4, "かむ", "不定形　　：<b>beißen</b><br>過去基本形：<b>biss</b><br>接続法２式：bisse<br>過去分詞　：<b>gebissen</b>", , ,"", 1, null, null],
[5, "救い出す", "不定形　　：<b>bergen</b><br>直接法現在：birgt<br>過去基本形：<b>barg</b><br>接続法２式：bärge<br>過去分詞　：<b>geborgen</b>", , ,"", 1, null, null],
[6, "（地面・壁などが）割れる", "不定形　　：<b>bersten</b><br>直接法現在：birst<br>過去基本形：<b>barst</b><br>接続法２式：bärste<br>過去分詞　：<b>geborsten</b>", , ,"", 1, null, null],
[7, "（〜する）気にさせる", "不定形　　：<b>bewegen*</b><br>過去基本形：<b>bewog</b><br>接続法２式：bewöge<br>過去分詞　：<b>bewogen</b>", , ,"", 1, null, null],
[8, "曲げる", "不定形　　：<b>biegen</b><br>過去基本形：<b>bog</b><br>接続法２式：böge<br>過去分詞　：<b>gebogen</b>", , ,"", 1, null, null],
[9, "提供する", "不定形　　：<b>bieten</b><br>過去基本形：<b>bot</b><br>接続法２式：böte<br>過去分詞　：<b>geboten</b>", , ,"", 0, null, null],
[10, "結ぶ", "不定形　　：<b>binden</b><br>過去基本形：<b>band</b><br>接続法２式：bände<br>過去分詞　：<b>gebunden</b>", , ,"", 0, null, null],
[11, "頼む", "不定形　　：<b>bitten</b><br>過去基本形：<b>bat</b><br>接続法２式：bäte<br>過去分詞　：<b>gebeten</b>", , ,"", 0, null, null],
[12, "（風が）強く吹く", "不定形　　：<b>blasen</b><br>直接法現在：bläst<br>過去基本形：<b>blies</b><br>接続法２式：bliese<br>過去分詞　：<b>geblasen</b>", , ,"", 1, null, null],
[13, "とどまる", "不定形　　：<b>bleiben</b><br>過去基本形：<b>blieb</b><br>接続法２式：bliebe<br>過去分詞　：<b>geblieben</b>", , ,"", 0, null, null],
[14, "焼く", "不定形　　：<b>braten</b><br>直接法現在：brät<br>過去基本形：<b>briet</b><br>接続法２式：briete<br>過去分詞　：<b>gebraten</b>", , ,"", 1, null, null],
[15, "折る", "不定形　　：<b>brechen</b><br>直接法現在：bricht<br>過去基本形：<b>brach</b><br>接続法２式：bräche<br>過去分詞　：<b>gebrochen</b>", , ,"", 0, null, null],
[16, "燃える", "不定形　　：<b>brennen</b><br>過去基本形：<b>brannte</b><br>接続法２式：brennte<br>過去分詞　：<b>gebrannt</b>", , ,"", 1, null, null],
[17, "持ってくる", "不定形　　：<b>bringen</b><br>過去基本形：<b>brachte</b><br>接続法２式：brächte<br>過去分詞　：<b>gebracht</b>", , ,"", 0, null, null],
[18, "考える", "不定形　　：<b>denken</b><br>過去基本形：<b>dachte</b><br>接続法２式：dächte<br>過去分詞　：<b>gedacht</b>", , ,"", 0, null, null],
[19, "金で雇う", "不定形　　：<b>dingen</b><br>過去基本形：<b>dingte / dang</b><br>接続法２式：dingte<br>過去分詞　：<b>gedungen</b>", , ,"", 1, null, null],
[20, "打穀する", "不定形　　：<b>dreschen</b><br>直接法現在：drischt<br>過去基本形：<b>drosch</b><br>接続法２式：drösche<br>過去分詞　：<b>gedroschen</b>", , ,"", 1, null, null],
[21, "染み通る", "不定形　　：<b>dringen</b><br>過去基本形：<b>drang</b><br>接続法２式：dränge<br>過去分詞　：<b>gedrungen</b>", , ,"", 1, null, null],
[22, "思われる", "不定形　　：<b>dünken*</b><br>直接法現在：deucht<br>過去基本形：<b>deuchte</b><br>接続法２式：deuchte<br>過去分詞　：<b>gedeucht</b>", , ,"", 1, null, null],
[23, "〜してもよい", "不定形　　：<b>dürfen</b><br>直接法現在：darf<br>過去基本形：<b>durfte</b><br>接続法２式：dürfte<br>過去分詞　：<b>gedurft / dürfen</b>", , ,"", 0, null, null],
[24, "受け取る", "不定形　　：<b>empfangen</b><br>直接法現在：empfängt<br>過去基本形：<b>empfing</b><br>接続法２式：empfinge<br>過去分詞　：<b>empfangen</b>", , ,"", 1, null, null],
[25, "勧める", "不定形　　：<b>empfehlen</b><br>直接法現在：empfiehlt<br>過去基本形：<b>empfahl</b><br>接続法２式：empföhle / empfähle<br>過去分詞　：<b>empfohlen</b>", , ,"", 1, null, null],
[26, "感じる", "不定形　　：<b>empfinden</b><br>過去基本形：<b>empfand</b><br>接続法２式：empfände<br>過去分詞　：<b>empfunden</b>", , ,"", 1, null, null],
[27, "（火・明かりなどが）消える", "不定形　　：<b>erlöschen</b><br>直接法現在：erlischt<br>過去基本形：<b>erlosch</b><br>接続法２式：erlösche<br>過去分詞　：<b>erloschen</b>", , ,"", 1, null, null],
[28, "（不意の出来事に）驚く", "不定形　　：<b>erschrecken*</b><br>直接法現在：erschrickt<br>過去基本形：<b>erschrak</b><br>接続法２式：erschräke<br>過去分詞　：<b>erschrocken</b>", , ,"", 1, null, null],
[29, "食べる", "不定形　　：<b>essen</b><br>直接法現在：isst<br>過去基本形：<b>aß</b><br>接続法２式：äße<br>過去分詞　：<b>gegessen</b>", , ,"", 0, null, null],
[30, "（乗り物で）行く", "不定形　　：<b>fahren</b><br>直接法現在：fährt<br>過去基本形：<b>fuhr</b><br>接続法２式：führe<br>過去分詞　：<b>gefahren</b>", , ,"", 0, null, null],
[31, "落ちる", "不定形　　：<b>fallen</b><br>直接法現在：fällt<br>過去基本形：<b>fiel</b><br>接続法２式：fiele<br>過去分詞　：<b>gefallen</b>", , ,"", 0, null, null],
[32, "捕える", "不定形　　：<b>fangen</b><br>直接法現在：fängt<br>過去基本形：<b>fing</b><br>接続法２式：finge<br>過去分詞　：<b>gefangen</b>", , ,"", 0, null, null],
[33, "フェンシングをする", "不定形　　：<b>fechten</b><br>直接法現在：ficht<br>過去基本形：<b>focht</b><br>接続法２式：föchte<br>過去分詞　：<b>gefochten</b>", , ,"", 1, null, null],
[34, "見つける", "不定形　　：<b>finden</b><br>過去基本形：<b>fand</b><br>接続法２式：fände<br>過去分詞　：<b>gefunden</b>", , ,"", 0, null, null],
[35, "編む", "不定形　　：<b>flechten</b><br>直接法現在：flicht<br>過去基本形：<b>flocht</b><br>接続法２式：flöchte<br>過去分詞　：<b>geflochten</b>", , ,"", 1, null, null],
[36, "飛ぶ", "不定形　　：<b>fliegen</b><br>過去基本形：<b>flog</b><br>接続法２式：flöge<br>過去分詞　：<b>geflogen</b>", , ,"", 0, null, null],
[37, "逃げる", "不定形　　：<b>fliehen</b><br>過去基本形：<b>floh</b><br>接続法２式：flöhe<br>過去分詞　：<b>geflohen</b>", , ,"", 1, null, null],
[38, "流れる", "不定形　　：<b>fließen</b><br>過去基本形：<b>floss</b><br>接続法２式：flösse<br>過去分詞　：<b>geflossen</b>", , ,"", 1, null, null],
[39, "（動物が）食べる", "不定形　　：<b>fressen</b><br>直接法現在：frisst<br>過去基本形：<b>fraß</b><br>接続法２式：fräße<br>過去分詞　：<b>gefressen</b>", , ,"", 1, null, null],
[40, "寒がる", "不定形　　：<b>frieren</b><br>過去基本形：<b>fror</b><br>接続法２式：fröre<br>過去分詞　：<b>gefroren</b>", , ,"", 1, null, null],
[41, "発酵する", "不定形　　：<b>gären</b><br>過去基本形：<b>gor</b><br>接続法２式：göre<br>過去分詞　：<b>gegoren</b>", , ,"", 1, null, null],
[42, "産む", "不定形　　：<b>gebären</b><br>過去基本形：<b>gebar</b><br>接続法２式：gebäre<br>過去分詞　：<b>geboren</b>", , ,"", 1, null, null],
[43, "与える", "不定形　　：<b>geben</b><br>直接法現在：gibt<br>過去基本形：<b>gab</b><br>接続法２式：gäbe<br>過去分詞　：<b>gegeben</b>", , ,"", 0, null, null],
[44, "育つ", "不定形　　：<b>gedeihen</b><br>過去基本形：<b>gedieh</b><br>接続法２式：gediehe<br>過去分詞　：<b>gediehen</b>", , ,"", 1, null, null],
[45, "行く", "不定形　　：<b>gehen</b><br>過去基本形：<b>ging</b><br>接続法２式：ginge<br>過去分詞　：<b>gegangen</b>", , ,"", 0, null, null],
[46, "（物事が）成功する", "不定形　　：<b>gelingen</b><br>過去基本形：<b>gelang</b><br>接続法２式：gelänge<br>過去分詞　：<b>gelungen</b>", , ,"", 1, null, null],
[47, "通用する", "不定形　　：<b>gelten</b><br>直接法現在：gilt<br>過去基本形：<b>galt</b><br>接続法２式：gölte / gälte<br>過去分詞　：<b>gegolten</b>", , ,"", 0, null, null],
[48, "快復する", "不定形　　：<b>genesen</b><br>過去基本形：<b>genas</b><br>接続法２式：genäse<br>過去分詞　：<b>genesen</b>", , ,"", 1, null, null],
[49, "楽しむ", "不定形　　：<b>genießen</b><br>過去基本形：<b>genoss</b><br>接続法２式：genösse<br>過去分詞　：<b>genossen</b>", , ,"", 0, null, null],
[50, "起こる", "不定形　　：<b>geschehen</b><br>直接法現在：geschieht<br>過去基本形：<b>geschah</b><br>接続法２式：geschähe<br>過去分詞　：<b>geschehen</b>", , ,"", 0, null, null],
[51, "獲得する", "不定形　　：<b>gewinnen</b><br>過去基本形：<b>gewann</b><br>接続法２式：gewönne / gewänne<br>過去分詞　：<b>gewonnen</b>", , ,"", 0, null, null],
[52, "注ぐ", "不定形　　：<b>gießen</b><br>過去基本形：<b>goss</b><br>接続法２式：gösse<br>過去分詞　：<b>gegossen</b>", , ,"", 1, null, null],
[53, "似ている", "不定形　　：<b>gleichen</b><br>過去基本形：<b>glich</b><br>接続法２式：gliche<br>過去分詞　：<b>geglichen</b>", , ,"", 1, null, null],
[54, "滑る", "不定形　　：<b>gleiten</b><br>過去基本形：<b>glitt</b><br>接続法２式：glitte<br>過去分詞　：<b>geglitten</b>", , ,"", 1, null, null],
[55, "ほのかに光る", "不定形　　：<b>glimmen</b><br>過去基本形：<b>glomm</b><br>接続法２式：glömme<br>過去分詞　：<b>geglommen</b>", , ,"", 1, null, null],
[56, "掘る", "不定形　　：<b>graben</b><br>直接法現在：gräbt<br>過去基本形：<b>grub</b><br>接続法２式：grübe<br>過去分詞　：<b>gegraben</b>", , ,"", 1, null, null],
[57, "つかむ", "不定形　　：<b>greifen</b><br>過去基本形：<b>griff</b><br>接続法２式：griffe<br>過去分詞　：<b>gegriffen</b>", , ,"", 0, null, null],
[58, "持っている", "不定形　　：<b>haben</b><br>直接法現在：hat<br>過去基本形：<b>hatte</b><br>接続法２式：hätte<br>過去分詞　：<b>gehabt</b>", , ,"", 0, null, null],
[59, "保つ", "不定形　　：<b>halten</b><br>直接法現在：hält<br>過去基本形：<b>hielt</b><br>接続法２式：hielte<br>過去分詞　：<b>gehalten</b>", , ,"", 0, null, null],
[60, "掛かっている", "不定形　　：<b>hängen*</b><br>過去基本形：<b>hing</b><br>接続法２式：hinge<br>過去分詞　：<b>gehangen</b>", , ,"", 0, null, null],
[61, "殴る", "不定形　　：<b>hauen</b><br>過去基本形：<b>hieb / haute</b><br>接続法２式：hiebe / haute<br>過去分詞　：<b>gehauen</b>", , ,"", 1, null, null],
[62, "持ち上げる", "不定形　　：<b>heben</b><br>過去基本形：<b>hob</b><br>接続法２式：höbe / hübe<br>過去分詞　：<b>gehoben</b>", , ,"", 0, null, null],
[63, "〜とよばれる", "不定形　　：<b>heißen</b><br>過去基本形：<b>hieß</b><br>接続法２式：hieße<br>過去分詞　：<b>geheißen</b>", , ,"", 0, null, null],
[64, "助ける", "不定形　　：<b>helfen</b><br>直接法現在：hilft<br>過去基本形：<b>half</b><br>接続法２式：hülfe / hälfe<br>過去分詞　：<b>geholfen</b>", , ,"", 0, null, null],
[65, "知っている", "不定形　　：<b>kennen</b><br>過去基本形：<b>kannte</b><br>接続法２式：kennte<br>過去分詞　：<b>gekannt</b>", , ,"", 0, null, null],
[66, "よじ登る", "不定形　　：<b>klimmen</b><br>過去基本形：<b>klomm / klimmte</b><br>接続法２式：klömme<br>過去分詞　：<b>geklommen / geklimmt</b>", , ,"", 1, null, null],
[67, "鳴る", "不定形　　：<b>klingen</b><br>過去基本形：<b>klang</b><br>接続法２式：klänge<br>過去分詞　：<b>geklungen</b>", , ,"", 1, null, null],
[68, "つねる", "不定形　　：<b>kneifen</b><br>過去基本形：<b>kniff</b><br>接続法２式：kniffe<br>過去分詞　：<b>gekniffen</b>", , ,"", 1, null, null],
[69, "来る", "不定形　　：<b>kommen</b><br>過去基本形：<b>kam</b><br>接続法２式：käme<br>過去分詞　：<b>gekommen</b>", , ,"", 0, null, null],
[70, "〜できる", "不定形　　：<b>können</b><br>直接法現在：kann<br>過去基本形：<b>konnte</b><br>接続法２式：könnte<br>過去分詞　：<b>gekonnt / können</b>", , ,"", 0, null, null],
[71, "はう", "不定形　　：<b>kriechen</b><br>過去基本形：<b>kroch</b><br>接続法２式：kröche<br>過去分詞　：<b>gekrochen</b>", , ,"", 1, null, null],
[72, "積み込む", "不定形　　：<b>laden</b><br>直接法現在：lädt<br>過去基本形：<b>lud</b><br>接続法２式：lüde<br>過去分詞　：<b>geladen</b>", , ,"", 0, null, null],
[73, "〜させる", "不定形　　：<b>lassen</b><br>直接法現在：lässt<br>過去基本形：<b>ließ</b><br>接続法２式：ließe<br>過去分詞　：<b>gelassen / lassen</b>", , ,"", 0, null, null],
[74, "走る", "不定形　　：<b>laufen</b><br>直接法現在：läuft<br>過去基本形：<b>lief</b><br>接続法２式：liefe<br>過去分詞　：<b>gelaufen</b>", , ,"", 0, null, null],
[75, "（病気に）かかっている", "不定形　　：<b>leiden</b><br>過去基本形：<b>litt</b><br>接続法２式：litte<br>過去分詞　：<b>gelitten</b>", , ,"", 1, null, null],
[76, "貸す", "不定形　　：<b>leihen</b><br>過去基本形：<b>lieh</b><br>接続法２式：liehe<br>過去分詞　：<b>geliehen</b>", , ,"", 0, null, null],
[77, "読む", "不定形　　：<b>lesen</b><br>直接法現在：liest<br>過去基本形：<b>las</b><br>接続法２式：läse<br>過去分詞　：<b>gelesen</b>", , ,"", 0, null, null],
[78, "横たわっている", "不定形　　：<b>liegen</b><br>過去基本形：<b>lag</b><br>接続法２式：läge<br>過去分詞　：<b>gelegen</b>", , ,"", 0, null, null],
[79, "うそをつく", "不定形　　：<b>lügen</b><br>過去基本形：<b>log</b><br>接続法２式：löge<br>過去分詞　：<b>gelogen</b>", , ,"", 1, null, null],
[80, "ひく", "不定形　　：<b>mahlen</b><br>過去基本形：<b>mahlte</b><br>接続法２式：mahlte<br>過去分詞　：<b>gemahlen</b>", , ,"", 1, null, null],
[81, "避ける", "不定形　　：<b>meiden</b><br>過去基本形：<b>mied</b><br>接続法２式：miede<br>過去分詞　：<b>gemieden</b>", , ,"", 1, null, null],
[82, "乳を搾る", "不定形　　：<b>melken</b><br>直接法現在：melkt / milkt<br>過去基本形：<b>melkte / molk</b><br>接続法２式：melkte / mölke<br>過去分詞　：<b>gemolken / gemelkt</b>", , ,"", 1, null, null],
[83, "測る", "不定形　　：<b>messen</b><br>直接法現在：misst<br>過去基本形：<b>maß</b><br>接続法２式：mäße<br>過去分詞　：<b>gemessen</b>", , ,"", 1, null, null],
[84, "（物事が）失敗する", "不定形　　：<b>misslingen</b><br>過去基本形：<b>misslang</b><br>接続法２式：misslänge<br>過去分詞　：<b>misslungen</b>", , ,"", 1, null, null],
[85, "〜かもしれない", "不定形　　：<b>mögen</b><br>直接法現在：mag<br>過去基本形：<b>mochte</b><br>接続法２式：möchte<br>過去分詞　：<b>gemocht / mögen</b>", , ,"", 0, null, null],
[86, "〜しなければならない", "不定形　　：<b>müssen</b><br>直接法現在：muss<br>過去基本形：<b>musste</b><br>接続法２式：müsste<br>過去分詞　：<b>gemusst / müssen</b>", , ,"", 0, null, null],
[87, "取る", "不定形　　：<b>nehmen</b><br>直接法現在：nimmt<br>過去基本形：<b>nahm</b><br>接続法２式：nähme<br>過去分詞　：<b>genommen</b>", , ,"", 0, null, null],
[88, "名付ける", "不定形　　：<b>nennen</b><br>過去基本形：<b>nannte</b><br>接続法２式：nennte<br>過去分詞　：<b>genannt</b>", , ,"", 0, null, null],
[89, "口笛を吹く", "不定形　　：<b>pfeifen</b><br>過去基本形：<b>pfiff</b><br>接続法２式：pfiffe<br>過去分詞　：<b>gepfiffen</b>", , ,"", 1, null, null],
[90, "賞賛する", "不定形　　：<b>preisen</b><br>過去基本形：<b>pries</b><br>接続法２式：priese<br>過去分詞　：<b>gepriesen</b>", , ,"", 1, null, null],
[91, "わき出る", "不定形　　：<b>quellen*</b><br>直接法現在：quillt<br>過去基本形：<b>quoll</b><br>接続法２式：quölle<br>過去分詞　：<b>gequollen</b>", , ,"", 1, null, null],
[92, "忠告する", "不定形　　：<b>raten</b><br>直接法現在：rät<br>過去基本形：<b>riet</b><br>接続法２式：riete<br>過去分詞　：<b>geraten</b>", , ,"", 0, null, null],
[93, "こする", "不定形　　：<b>reiben</b><br>過去基本形：<b>rieb</b><br>接続法２式：riebe<br>過去分詞　：<b>gerieben</b>", , ,"", 1, null, null],
[94, "引きちぎる", "不定形　　：<b>reißen</b><br>過去基本形：<b>riss</b><br>接続法２式：risse<br>過去分詞　：<b>gerissen</b>", , ,"", 1, null, null],
[95, "（馬に）乗る", "不定形　　：<b>reiten</b><br>過去基本形：<b>ritt</b><br>接続法２式：ritte<br>過去分詞　：<b>geritten</b>", , ,"", 1, null, null],
[96, "走る", "不定形　　：<b>rennen</b><br>過去基本形：<b>rannte</b><br>接続法２式：rennte<br>過去分詞　：<b>gerannt</b>", , ,"", 1, null, null],
[97, "においがする", "不定形　　：<b>riechen</b><br>過去基本形：<b>roch</b><br>接続法２式：röche<br>過去分詞　：<b>gerochen</b>", , ,"", 1, null, null],
[98, "格闘する", "不定形　　：<b>ringen</b><br>過去基本形：<b>rang</b><br>接続法２式：ränge<br>過去分詞　：<b>gerungen</b>", , ,"", 1, null, null],
[99, "流れる", "不定形　　：<b>rinnen</b><br>過去基本形：<b>rann</b><br>接続法２式：ränne / rönne<br>過去分詞　：<b>geronnen</b>", , ,"", 1, null, null],
[100, "呼ぶ", "不定形　　：<b>rufen</b><br>過去基本形：<b>rief</b><br>接続法２式：riefe<br>過去分詞　：<b>gerufen</b>", , ,"", 0, null, null],
[101, "塩をふりかける", "不定形　　：<b>salzen</b><br>過去基本形：<b>salzte</b><br>接続法２式：salzte<br>過去分詞　：<b>gesalzen</b>", , ,"", 1, null, null],
[102, "（動物が）飲む", "不定形　　：<b>saufen</b><br>直接法現在：säuft<br>過去基本形：<b>soff</b><br>接続法２式：söffe<br>過去分詞　：<b>gesoffen</b>", , ,"", 1, null, null],
[103, "吸う", "不定形　　：<b>saugen*</b><br>過去基本形：<b>sog / saugte</b><br>接続法２式：söge<br>過去分詞　：<b>gesogen / gesaugt</b>", , ,"", 1, null, null],
[104, "創造する", "不定形　　：<b>schaffen*</b><br>過去基本形：<b>schuf</b><br>接続法２式：schüfe<br>過去分詞　：<b>geschaffen</b>", , ,"", 0, null, null],
[105, "響く", "不定形　　：<b>schallen*</b><br>過去基本形：<b>scholl</b><br>接続法２式：schölle<br>過去分詞　：<b>geschollen</b>", , ,"", 1, null, null],
[106, "分ける", "不定形　　：<b>scheiden</b><br>過去基本形：<b>schied</b><br>接続法２式：schiede<br>過去分詞　：<b>geschieden</b>", , ,"", 0, null, null],
[107, "輝く", "不定形　　：<b>scheinen</b><br>過去基本形：<b>schien</b><br>接続法２式：schiene<br>過去分詞　：<b>geschienen</b>", , ,"", 0, null, null],
[108, "くそをする", "不定形　　：<b>scheißen</b><br>過去基本形：<b>schiss</b><br>接続法２式：schisse<br>過去分詞　：<b>geschissen</b>", , ,"", 1, null, null],
[109, "しかる", "不定形　　：<b>schelten</b><br>直接法現在：schilt<br>過去基本形：<b>schalt</b><br>接続法２式：schölte<br>過去分詞　：<b>gescholten</b>", , ,"", 1, null, null],
[110, "毛を刈る", "不定形　　：<b>scheren</b><br>過去基本形：<b>schor / scherte</b><br>接続法２式：schöre<br>過去分詞　：<b>geschoren / geschert</b>", , ,"", 1, null, null],
[111, "押す", "不定形　　：<b>schieben</b><br>過去基本形：<b>schob</b><br>接続法２式：schöbe<br>過去分詞　：<b>geschoben</b>", , ,"", 0, null, null],
[112, "撃つ", "不定形　　：<b>schießen</b><br>過去基本形：<b>schoss</b><br>接続法２式：schösse<br>過去分詞　：<b>geschossen</b>", , ,"", 0, null, null],
[113, "酷使する", "不定形　　：<b>schinden</b><br>過去基本形：<b>schindete / schund</b><br>接続法２式：schindete / schünde<br>過去分詞　：<b>geschunden</b>", , ,"", 1, null, null],
[114, "眠っている", "不定形　　：<b>schlafen</b><br>直接法現在：schläft<br>過去基本形：<b>schlief</b><br>接続法２式：schliefe<br>過去分詞　：<b>geschlafen</b>", , ,"", 0, null, null],
[115, "打つ", "不定形　　：<b>schlagen</b><br>直接法現在：schlägt<br>過去基本形：<b>schlug</b><br>接続法２式：schlüge<br>過去分詞　：<b>geschlagen</b>", , ,"", 0, null, null],
[116, "忍足で歩く", "不定形　　：<b>schleichen</b><br>過去基本形：<b>schlich</b><br>接続法２式：schliche<br>過去分詞　：<b>geschlichen</b>", , ,"", 1, null, null],
[117, "研ぐ", "不定形　　：<b>schleifen*</b><br>過去基本形：<b>schliff</b><br>接続法２式：schliffe<br>過去分詞　：<b>geschliffen</b>", , ,"", 1, null, null],
[118, "閉める", "不定形　　：<b>schließen</b><br>過去基本形：<b>schloss</b><br>接続法２式：schlösse<br>過去分詞　：<b>geschlossen</b>", , ,"", 0, null, null],
[119, "巻きつける", "不定形　　：<b>schlingen</b><br>過去基本形：<b>schlang</b><br>接続法２式：schlänge<br>過去分詞　：<b>geschlungen</b>", , ,"", 1, null, null],
[120, "投げる", "不定形　　：<b>schmeißen</b><br>過去基本形：<b>schmiss</b><br>接続法２式：schmisse<br>過去分詞　：<b>geschmissen</b>", , ,"", 1, null, null],
[121, "溶ける", "不定形　　：<b>schmelzen</b><br>直接法現在：schmilzt<br>過去基本形：<b>schmolz</b><br>接続法２式：schmölze<br>過去分詞　：<b>geschmolzen</b>", , ,"", 1, null, null],
[122, "切る", "不定形　　：<b>schneiden</b><br>過去基本形：<b>schnitt</b><br>接続法２式：schnitte<br>過去分詞　：<b>geschnitten</b>", , ,"", 0, null, null],
[123, "驚く", "不定形　　：<b>schrecken*</b><br>直接法現在：schrickt<br>過去基本形：<b>schrak</b><br>接続法２式：schräke<br>過去分詞　：<b>geschreckt</b>", , ,"", 1, null, null],
[124, "書く", "不定形　　：<b>schreiben</b><br>過去基本形：<b>schrieb</b><br>接続法２式：schriebe<br>過去分詞　：<b>geschrieben</b>", , ,"", 0, null, null],
[125, "叫ぶ", "不定形　　：<b>schreien</b><br>過去基本形：<b>schrie</b><br>接続法２式：schriee<br>過去分詞　：<b>geschrien</b>", , ,"", 0, null, null],
[126, "歩く", "不定形　　：<b>schreiten</b><br>過去基本形：<b>schritt</b><br>接続法２式：schritte<br>過去分詞　：<b>geschritten</b>", , ,"", 0, null, null],
[127, "黙っている", "不定形　　：<b>schweigen</b><br>過去基本形：<b>schwieg</b><br>接続法２式：schwiege<br>過去分詞　：<b>geschwiegen</b>", , ,"", 0, null, null],
[128, "腫れる", "不定形　　：<b>schwellen*</b><br>直接法現在：schwillt<br>過去基本形：<b>schwoll</b><br>接続法２式：schwölle<br>過去分詞　：<b>geschwollen</b>", , ,"", 1, null, null],
[129, "泳ぐ", "不定形　　：<b>schwimmen</b><br>過去基本形：<b>schwamm</b><br>接続法２式：schwömme / schwämme<br>過去分詞　：<b>geschwommen</b>", , ,"", 0, null, null],
[130, "（次第に）減る", "不定形　　：<b>schwinden</b><br>過去基本形：<b>schwand</b><br>接続法２式：schwände<br>過去分詞　：<b>geschwunden</b>", , ,"", 1, null, null],
[131, "振る", "不定形　　：<b>schwingen</b><br>過去基本形：<b>schwang</b><br>接続法２式：schwänge<br>過去分詞　：<b>geschwungen</b>", , ,"", 1, null, null],
[132, "誓う", "不定形　　：<b>schwören</b><br>過去基本形：<b>schwor</b><br>接続法２式：schwüre / schwöre<br>過去分詞　：<b>geschworen</b>", , ,"", 1, null, null],
[133, "見る", "不定形　　：<b>sehen</b><br>直接法現在：sieht<br>過去基本形：<b>sah</b><br>接続法２式：sähe<br>過去分詞　：<b>gesehen</b>", , ,"", 0, null, null],
[134, "〜である", "不定形　　：<b>sein</b><br>直接法現在：ist<br>過去基本形：<b>war</b><br>接続法２式：wäre<br>過去分詞　：<b>gewesen</b>", , ,"", 0, null, null],
[135, "送る", "不定形　　：<b>senden*</b><br>過去基本形：<b>sandte</b><br>接続法２式：sendete<br>過去分詞　：<b>gesandt</b>", , ,"", 0, null, null],
[136, "沸騰する", "不定形　　：<b>sieden*</b><br>過去基本形：<b>sott</b><br>接続法２式：söte<br>過去分詞　：<b>gesotten</b>", , ,"", 1, null, null],
[137, "歌う", "不定形　　：<b>singen</b><br>過去基本形：<b>sang</b><br>接続法２式：sänge<br>過去分詞　：<b>gesungen</b>", , ,"", 0, null, null],
[138, "沈む", "不定形　　：<b>sinken</b><br>過去基本形：<b>sank</b><br>接続法２式：sänke<br>過去分詞　：<b>gesunken</b>", , ,"", 0, null, null],
[139, "思案する", "不定形　　：<b>sinnen</b><br>過去基本形：<b>sann</b><br>接続法２式：sänne<br>過去分詞　：<b>gesonnen</b>", , ,"", 1, null, null],
[140, "座っている", "不定形　　：<b>sitzen</b><br>過去基本形：<b>saß</b><br>接続法２式：säße<br>過去分詞　：<b>gesessen</b>", , ,"", 0, null, null],
[141, "〜すべきである", "不定形　　：<b>sollen</b><br>直接法現在：soll<br>過去基本形：<b>sollte</b><br>接続法２式：sollte<br>過去分詞　：<b>gesollt / sollen</b>", , ,"", 0, null, null],
[142, "割る", "不定形　　：<b>spalten</b><br>過去基本形：<b>spaltete</b><br>接続法２式：spaltete<br>過去分詞　：<b>gespalten / gespaltet</b>", , ,"", 1, null, null],
[143, "（食べ物を）吐く", "不定形　　：<b>speien</b><br>過去基本形：<b>spie</b><br>接続法２式：spiee<br>過去分詞　：<b>gespien</b>", , ,"", 1, null, null],
[144, "紡ぐ", "不定形　　：<b>spinnen</b><br>過去基本形：<b>spann</b><br>接続法２式：spönne / spänne<br>過去分詞　：<b>gesponnen</b>", , ,"", 1, null, null],
[145, "話す", "不定形　　：<b>sprechen</b><br>直接法現在：spricht<br>過去基本形：<b>sprach</b><br>接続法２式：spräche<br>過去分詞　：<b>gesprochen</b>", , ,"", 0, null, null],
[146, "（種・草などが）芽を吹く", "不定形　　：<b>sprießen</b><br>過去基本形：<b>spross</b><br>接続法２式：sprösse<br>過去分詞　：<b>gesprossen</b>", , ,"", 1, null, null],
[147, "跳ぶ", "不定形　　：<b>springen</b><br>過去基本形：<b>sprang</b><br>接続法２式：spränge<br>過去分詞　：<b>gesprungen</b>", , ,"", 0, null, null],
[148, "刺す", "不定形　　：<b>stechen</b><br>直接法現在：sticht<br>過去基本形：<b>stach</b><br>接続法２式：stäche<br>過去分詞　：<b>gestochen</b>", , ,"", 1, null, null],
[149, "立っている", "不定形　　：<b>stehen</b><br>過去基本形：<b>stand</b><br>接続法２式：stünde / stände<br>過去分詞　：<b>gestanden</b>", , ,"", 0, null, null],
[150, "盗む", "不定形　　：<b>stehlen</b><br>直接法現在：stiehlt<br>過去基本形：<b>stahl</b><br>接続法２式：stähle / stöhle<br>過去分詞　：<b>gestohlen</b>", , ,"", 0, null, null],
[151, "登る", "不定形　　：<b>steigen</b><br>過去基本形：<b>stieg</b><br>接続法２式：stiege<br>過去分詞　：<b>gestiegen</b>", , ,"", 0, null, null],
[152, "死ぬ", "不定形　　：<b>sterben</b><br>直接法現在：stirbt<br>過去基本形：<b>starb</b><br>接続法２式：stürbe<br>過去分詞　：<b>gestorben</b>", , ,"", 0, null, null],
[153, "（火花などが）飛び散る", "不定形　　：<b>stieben</b><br>過去基本形：<b>stob / stiebte</b><br>接続法２式：stöbe<br>過去分詞　：<b>gestoben / gestiebt</b>", , ,"", 1, null, null],
[154, "臭い", "不定形　　：<b>stinken</b><br>過去基本形：<b>stank</b><br>接続法２式：stänke<br>過去分詞　：<b>gestunken</b>", , ,"", , null, null],
[155, "突く", "不定形　　：<b>stoßen</b><br>直接法現在：stößt<br>過去基本形：<b>stieß</b><br>接続法２式：stieße<br>過去分詞　：<b>gestoßen</b>", , ,"", 0, null, null],
[156, "塗る", "不定形　　：<b>streichen</b><br>過去基本形：<b>strich</b><br>接続法２式：striche<br>過去分詞　：<b>gestrichen</b>", , ,"", 1, null, null],
[157, "争う", "不定形　　：<b>streiten</b><br>過去基本形：<b>stritt</b><br>接続法２式：stritte<br>過去分詞　：<b>gestritten</b>", , ,"", 0, null, null],
[158, "運ぶ", "不定形　　：<b>tragen*</b><br>直接法現在：trägt<br>過去基本形：<b>trug</b><br>接続法２式：trüge<br>過去分詞　：<b>getragen</b>", , ,"", 0, null, null],
[159, "会う", "不定形　　：<b>treffen</b><br>直接法現在：trifft<br>過去基本形：<b>traf</b><br>接続法２式：träfe<br>過去分詞　：<b>getroffen</b>", , ,"", 0, null, null],
[160, "駆り立てる", "不定形　　：<b>treiben</b><br>過去基本形：<b>trieb</b><br>接続法２式：triebe<br>過去分詞　：<b>getrieben</b>", , ,"", 0, null, null],
[161, "歩む", "不定形　　：<b>treten</b><br>直接法現在：tritt<br>過去基本形：<b>trat</b><br>接続法２式：träte<br>過去分詞　：<b>getreten</b>", , ,"", 0, null, null],
[162, "滴る", "不定形　　：<b>triefen*</b><br>過去基本形：<b>troff</b><br>接続法２式：tröffe<br>過去分詞　：<b>getroffen</b>", , ,"", 1, null, null],
[163, "飲む", "不定形　　：<b>trinken</b><br>過去基本形：<b>trank</b><br>接続法２式：tränke<br>過去分詞　：<b>getrunken</b>", , ,"", 0, null, null],
[164, "（記憶が）欺く", "不定形　　：<b>trügen</b><br>過去基本形：<b>trog</b><br>接続法２式：tröge<br>過去分詞　：<b>getrogen</b>", , ,"", 1, null, null],
[165, "する", "不定形　　：<b>tun</b><br>直接法現在：tut<br>過去基本形：<b>tat</b><br>接続法２式：täte<br>過去分詞　：<b>getan</b>", , ,"", 0, null, null],
[166, "（色が）褪せる", "不定形　　：<b>verbleichen</b><br>過去基本形：<b>verblich</b><br>接続法２式：verbliche<br>過去分詞　：<b>verblichen</b>", , ,"", 1, null, null],
[167, "（食品が）痛む", "不定形　　：<b>verderben</b><br>直接法現在：verdirbt<br>過去基本形：<b>verdarb</b><br>接続法２式：verdürbe<br>過去分詞　：<b>verdorben</b>", , ,"", 1, null, null],
[168, "腹立たしい気分にする", "不定形　　：<b>verdrießen</b><br>過去基本形：<b>verdross</b><br>接続法２式：verdrösse<br>過去分詞　：<b>verdrossen</b>", , ,"", 1, null, null],
[169, "忘れる", "不定形　　：<b>vergessen</b><br>直接法現在：vergisst<br>過去基本形：<b>vergaß</b><br>接続法２式：vergäße<br>過去分詞　：<b>vergessen</b>", , ,"", 0, null, null],
[170, "失う", "不定形　　：<b>verlieren</b><br>過去基本形：<b>verlor</b><br>接続法２式：verlöre<br>過去分詞　：<b>verloren</b>", , ,"", 0, null, null],
[171, "（火・明かりなどが）消える", "不定形　　：<b>verlöschen</b><br>直接法現在：verlischt<br>過去基本形：<b>verlosch / verlöschte</b><br>接続法２式：verlösche<br>過去分詞　：<b>verloschen / verlöscht</b>", , ,"", 1, null, null],
[172, "すり減る", "不定形　　：<b>verschleißen</b><br>過去基本形：<b>verschliss</b><br>接続法２式：verschlisse<br>過去分詞　：<b>verschlissen</b>", , ,"", 1, null, null],
[173, "成長する", "不定形　　：<b>wachsen*</b><br>直接法現在：wächst<br>過去基本形：<b>wuchs</b><br>接続法２式：wüchse<br>過去分詞　：<b>gewachsen</b>", , ,"", 0, null, null],
[174, "よく考える", "不定形　　：<b>wägen*</b><br>過去基本形：<b>wog</b><br>接続法２式：wöge<br>過去分詞　：<b>gewogen</b>", , ,"", 1, null, null],
[175, "洗う", "不定形　　：<b>waschen</b><br>直接法現在：wäscht<br>過去基本形：<b>wusch</b><br>接続法２式：wüsche<br>過去分詞　：<b>gewaschen</b>", , ,"", 0, null, null],
[176, "織る", "不定形　　：<b>weben</b><br>過去基本形：<b>wob / webte</b><br>接続法２式：wöbe<br>過去分詞　：<b>woben / gewebt</b>", , ,"", 1, null, null],
[177, "屈する", "不定形　　：<b>weichen</b><br>過去基本形：<b>wich</b><br>接続法２式：wiche<br>過去分詞　：<b>gewichen</b>", , ,"", 1, null, null],
[178, "指し示す", "不定形　　：<b>weisen</b><br>過去基本形：<b>wies</b><br>接続法２式：wiese<br>過去分詞　：<b>gewiesen</b>", , ,"", 0, null, null],
[179, "向ける", "不定形　　：<b>wenden*</b><br>過去基本形：<b>wandte</b><br>接続法２式：wendete<br>過去分詞　：<b>gewandt</b>", , ,"", 0, null, null],
[180, "募る", "不定形　　：<b>werben</b><br>直接法現在：wirbt<br>過去基本形：<b>warb</b><br>接続法２式：würbe<br>過去分詞　：<b>geworben</b>", , ,"", 0, null, null],
[181, "〜になる", "不定形　　：<b>werden</b><br>直接法現在：wird<br>過去基本形：<b>wurde / ward</b><br>接続法２式：würde<br>過去分詞　：<b>worden / geworden</b>", , ,"", 0, null, null],
[182, "投げる", "不定形　　：<b>werfen</b><br>直接法現在：wirft<br>過去基本形：<b>warf</b><br>接続法２式：würfe / wärfe<br>過去分詞　：<b>geworfen</b>", , ,"", 0, null, null],
[183, "重さを量る", "不定形　　：<b>wiegen*</b><br>過去基本形：<b>wog</b><br>接続法２式：wöge<br>過去分詞　：<b>gewogen</b>", , ,"", 1, null, null],
[184, "身をよじる", "不定形　　：<b>winden</b><br>過去基本形：<b>wand</b><br>接続法２式：wände<br>過去分詞　：<b>gewunden</b>", , ,"", 1, null, null],
[185, "知っている", "不定形　　：<b>wissen</b><br>直接法現在：weiß<br>過去基本形：<b>wusste</b><br>接続法２式：wüsste<br>過去分詞　：<b>gewusst</b>", , ,"", 0, null, null],
[186, "〜するつもりである", "不定形　　：<b>wollen</b><br>直接法現在：will<br>過去基本形：<b>wollte</b><br>接続法２式：wollte<br>過去分詞　：<b>gewollt / wollen</b>", , ,"", 0, null, null],
[187, "絞る", "不定形　　：<b>wringen</b><br>過去基本形：<b>wrang</b><br>接続法２式：wränge<br>過去分詞　：<b>gewrungen</b>", , ,"", 1, null, null],
[188, "責める", "不定形　　：<b>zeihen</b><br>過去基本形：<b>zieh</b><br>接続法２式：ziehe<br>過去分詞　：<b>geziehen</b>", , ,"", 1, null, null],
[189, "引く", "不定形　　：<b>ziehen</b><br>過去基本形：<b>zog</b><br>接続法２式：zöge<br>過去分詞　：<b>gezogen</b>", , ,"", 0, null, null],
[190, "強いる", "不定形　　：<b>zwingen</b><br>過去基本形：<b>zwang</b><br>接続法２式：zwänge<br>過去分詞　：<b>gezwungen</b>", , ,"", 0, null, null]
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
window.onload = numbering();

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
