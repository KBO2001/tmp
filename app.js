'use strict';

let wordList = [
//[0No, 1Word, 2Mean, 3Change, 4Change, 5Note, 6Lv, 7State, 8Sort]
    [1, `L0,n`, `mean`, `noun`, `change`, `note`, 0, null, null],
    [2, `L0,v`, `mean`, `verb`, `change`, `note`, 0, null, null],
    [3, `L0,a`, `mean`, `adj`, `change`, `note`, 0, null, null],
    [4, `L1,n`, `mean`, `noun`, `change`, `note`, 1, null, null],
    [5, `L1,v`, `mean`, `verb`, ``, `note`, 1, null, null],
    [6, `L1,a`, `mean`, `adj`, `change`, ``, 1, null, null],
    [7, `L2,n`, `mean`, `noun`, ``, ``, 2, null, null],
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
        <form id="rLv">
            <input type="radio" name="rnLv" checked>All</input>
            <input type="radio" name="rnLv">Lv.0</input>
            <input type="radio" name="rnLv">Lv.1</input>
            <input type="radio" name="rnLv">Lv.2</input>
            <!--
            <input type="radio" name="rnLv">Lv.3</input>
            <input type="radio" name="rnLv">Lv.4</input>
            <input type="radio" name="rnLv">Lv.5</input>
            -->
        </form>
        <hr>
        <form id="rPart">
            <input type="radio" name="rnPart" checked>All</input>
            <input type="radio" name="rnPart">名詞</input>
            <input type="radio" name="rnPart">動詞</input>
            <input type="radio" name="rnPart">副詞</input>
            <br>
            <input type="radio" name="rnPart">形容詞</input>
            <input type="radio" name="rnPart">前置詞</input>
            <input type="radio" name="rnPart">接続詞</input>
            <!--
            <br>
            <input type="radio" name="rnPart">冠詞</input>
            <input type="radio" name="rnPart">代名詞</input>
            <input type="radio" name="rnPart">数詞</input>
            <input type="radio" name="rnPart">間投詞</input>
            -->
        </form>`;
    EcardA.innerHTML = `
        <form id="rState">
            <input type="radio" name="rnState" checked>All</input>
            <input type="radio" name="rnState">正解</input>
            <input type="radio" name="rnState">不正解</input>
            <input type="radio" name="rnState">未解答</input>
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
        Lv = 9;
    } else if (rLv[1].checked == true) {
        Lv = 0;
    } else if (rLv[2].checked == true) {
        Lv = 1;
    } else if (rLv[3].checked == true) {
        Lv = 2;
/*
    } else if (rLv[4].checked == true) {
        Lv = 3;
    } else if (rLv[5].checked == true) {
        Lv = 4;
    } else if (rLv[6].checked == true) {
        Lv = 5;
*/
    } else {
        console.log(`Lv is not choosed.`)
        return reload();
    }
    //0All, 1名詞, 2動詞, 3副詞, 4形容詞, 5前置詞, 6接続詞, 7冠詞, 8代名詞 ,9数詞, 10間投詞
    if (rPart[0].checked == true) {
        Part = 0;
    } else if (rPart[1].checked == true) {
        Part = 1;
    } else if (rPart[2].checked == true) {
        Part = 2;
    } else if (rPart[3].checked == true) {
        Part = 3;
    } else if (rPart[4].checked == true) {
        Part = 4;
    } else if (rPart[5].checked == true) {
        Part = 5;
    } else if (rPart[6].checked == true) {
        Part = 6;
/*
    } else if (rPart[7].checked == true) {
        Part = 7;
    } else if (rPart[8].checked == true) {
        Part = 8;
    } else if (rPart[9].checked == true) {
        Part = 9;
    } else if (rPart[10].checked == true) {
        Part = 10;
*/
    } else {
        console.log(`Part is not choosed.`)
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
    //0All, 1名詞, 2動詞, 3副詞, 4形容詞, 5前置詞, 6接続詞, 7冠詞, 8代名詞 ,9数詞, 10間投詞
    if (Part == 1) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 1) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 2) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 2) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 3) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 3) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 4) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 4) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 5) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 5) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 6) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 6) {
                chooseList2.push(chooseList1[i]);
            }
        }
    /*
    } else if (Part == 7) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 7) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 8) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 8) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 9) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 9) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 10) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 10) {
                chooseList2.push(chooseList1[i]);
            }
        }
    */
    } else if (Part == 0) { //all
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
    if(!(sortList[now][4] == ``)){
        Acard3.innerHTML = `変化： ${sortList[now][4]}`;
    };
    if(!(sortList[now][5] == ``)){
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