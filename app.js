'use strict';

let wordList = [
//[0No, 1Word, 2Mean, 3Change, 4Change, 5Note, 6Lv, 7State, 8Sort]
    [1, `L0,n`, `mean`, `noun`, `change`, `note`, 0, null, null],
    [2, `L0,v`, `mean`, `verb`, `change`, `note`, 0, null, null],
    [3, `L0,a`, `mean`, `adj`, `change`, `note`, 0, null, null],
    [4, `L1,n`, `mean`, `noun`, `change`, `note`, 1, null, null],
    [5, `L1,v`, `mean`, `verb`, `change`, `note`, 1, null, null],
    [6, `L1,a`, `mean`, `adj`, `change`, `note`, 1, null, null],
    [7, `L2,n`, `mean`, `noun`, `change`, `note`, 2, null, null],
    [8, `L2,v`, `mean`, `verb`, `change`, `note`, 2, null, null]
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
let Lv;
let Part;
let State;
let now;
let play;

window.onload = load();

function load() {
    now = 0;
    play = 0;
    Qcard1.innerHTML = null;
    Qcard2.innerHTML = null;
    Acard1.innerHTML = null;
    Acard2.innerHTML = null;
    Acard3.innerHTML = null;
    Acard4.innerHTML = null;
    Lv = null;
    Part = null;
    State = null;
    btn3.innerHTML = null;
    btn4.innerHTML = null;
    btn5.innerHTML = `開始`;
    EcardQ.innerHTML = `
        Please Choose the Lv.<br>
        <form id="rLv">
            <input type="radio" id = "Lv0" name="rnLv" value="0">Lv.0</input>
            <input type="radio" id = "Lv1" name="rnLv" value="1">Lv.1</input>
            <input type="radio" id = "Lv2" name="rnLv" value="2">Lv.2</input>
            <input type="radio" id = "LvA" name="rnLv" value="A">all</input>
        </form>
        Please Choose the Part.<br>
        <form id="rPart">
            <input type="radio" id="noun" name="rnPart" value="noun">noun</input>
            <input type="radio" id="verb" name="rnPart" value="verb">verb</input>
            <input type="radio" id="adj" name="rnPart" value="adj">adj</input>
            <input type="radio" id="PartA" name="rnPart" value="PartA">all</input>
        </form>`;
    EcardA.innerHTML = `
        Please Choose the State.<br>
        <form id="rState">
            <input type="radio" id="Co" name="rnState" value="Co">正解</input>
            <input type="radio" id="Fa" name="rnState" value="Fa">不正解</input>
            <input type="radio" id="Un" name="rnState" value="Un">未解答</input>
            <input type="radio" id="StateA" name="rnState" value="StateA">all</input>
            </form>`;
    console.log(`onload`);
    console.log(`wordList length: ${wordList.length}`);
};

btn5.onclick = function () {
    console.log(`btn5 onClick`);
    mode();
};

function mode() {
    if (rLv[0].checked == true) {
        Lv = 0;
    } else if (rLv[1].checked == true) {
        Lv = 1;
    } else if (rLv[2].checked == true) {
        Lv = 2;
    } else if (rLv[3].checked == true) {
        Lv = 9;
    } else {
        console.log(`Lv is not choosed.`)
        return reload();
    }
    if (rPart[0].checked == true) {
        Part = `noun`;
    } else if (rPart[1].checked == true) {
        Part = `verb`;
    } else if (rPart[2].checked == true) {
        Part = `adj`;
    } else if (rPart[3].checked == true) {
        Part = `PartA`;
    } else {
        console.log(`Part is not choosed.`)
        return reload();
    }
    if (rState[0].checked == true) {
        State = 1;
    } else if (rState[1].checked == true) {
        State = 2;
    } else if (rState[2].checked == true) {
        State = 0;
    } else if (rState[3].checked == true) {
        State = `StateA`;
    } else {
        console.log(`State is not choosed.`)
        return reload();
    }
    EcardQ.innerHTML = null;
    EcardA.innerHTML = null;
    btn5.innerHTML = null;
    console.log(`Started: Lv = ${Lv}, Part = ${Part}, State = ${State}`)
    chooseReset();
}

function chooseReset() {
    chooseList1 = [];
    chooseList2 = [];
    chooseList3 = [];
    sortList = [];
    chooseLv();
}

function chooseLv() {
    if (Lv == 0) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 0) {
                chooseList1.push(wordList[i]);
            }
        }
    } else if (Lv == 1) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 1) {
                chooseList1.push(wordList[i]);
            }
        }
    } else if (Lv == 2) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 2) {
                chooseList1.push(wordList[i]);
            }
        }
    } else if (Lv == 9) { //all
        for (let i = 0; i < wordList.length; i++) {
            chooseList1.push(wordList[i]);
        }
    } else {
        return reload();
    }
    console.log(`after Lv :`);
    console.log(chooseList1);
    choosePart();
}

function choosePart() {
    if (Part == `noun`) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == `noun`) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == `verb`) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == `verb`) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == `adj`) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == `adj`) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == `PartA`) { //all
        for (let i = 0; i < chooseList1.length; i++) {
            chooseList2.push(chooseList1[i]);
        }
    } else {
        return reload();
    }
    console.log(`after Part :`);
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
    } else if (State == `StateA`) { //all
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
    for (let i = 0; i < chooseList3.length + sortList.length; i++) {
        let rdm = null;
        rdm = Math.floor(Math.random() * chooseList3.length);
        sortList.push(chooseList3[rdm]);
        chooseList3.splice(rdm, 1);
    }
    console.log(`sortList :`);
    console.log(sortList);
    appear();
}

function reload() {
    console.log(`reload`);
    return load();
}

function appear() {
    if (sortList.length == 0) {
        return end();
    } else {
        console.log(`now is ${now}.`)
        play = 1;
        Qcard1.innerHTML = `No: ${sortList[now][0]}  Last: ${sortList.length - now}`;
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
    Acard2.innerHTML = `品詞： ${sortList[now][3]}`;
    Acard3.innerHTML = `変化： ${sortList[now][4]}`;
    Acard4.innerHTML = `備考： ${sortList[now][5]}`;
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