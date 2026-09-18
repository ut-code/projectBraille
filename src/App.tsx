import { useState } from 'react'
import './App.css'

const englishBraille: Record<string, string> = {
    "a": "⠁",
    "b": "⠃",
    "c": "⠉",
    "d": "⠙",
    "e": "⠑",
    "f": "⠋",
    "g": "⠛",
    "h": "⠓",
    "i": "⠊",
    "j": "⠚",
    "k": "⠅",
    "l": "⠇",
    "m": "⠍",
    "n": "⠝",
    "o": "⠕",
    "p": "⠏",
    "q": "⠟",
    "r": "⠗",
    "s": "⠎",
    "t": "⠞",
    "u": "⠥",
    "v": "⠧",
    "w": "⠺",
    "x": "⠭",
    "y": "⠽",
    "z": "⠵",
    "A": "⠠⠁",
    "B": "⠠⠃",
    "C": "⠠⠉",
    "D": "⠠⠙",
    "E": "⠠⠑",
    "F": "⠠⠋",
    "G": "⠠⠛",
    "H": "⠠⠓",
    "I": "⠠⠊",
    "J": "⠠⠚",
    "K": "⠠⠅",
    "L": "⠠⠇",
    "M": "⠠⠍",
    "N": "⠠⠝",
    "O": "⠠⠕",
    "P": "⠠⠏",
    "Q": "⠠⠟",
    "R": "⠠⠗",
    "S": "⠠⠎",
    "T": "⠠⠞",
    "U": "⠠⠥",
    "V": "⠠⠧",
    "W": "⠠⠺",
    "X": "⠠⠭",
    "Y": "⠠⠽",
    "Z": "⠠⠵",
    ",": "⠂",
    ";": "⠆",
    ":": "⠒",
    ".": "⠲",
    "!": "⠖",
    "(": "⠐⠣",
    ")": "⠐⠜",
    "?": "⠦",
    "\"": "⠠⠶",
    "*": "⠐⠔",
    "'": "⠄",
    "-": "⠤",
    "1": "⠼⠁",
    "2": "⠼⠃",
    "3": "⠼⠉",
    "4": "⠼⠙",
    "5": "⠼⠑",
    "6": "⠼⠋",
    "7": "⠼⠛",
    "8": "⠼⠓",
    "9": "⠼⠊",
    "0": "⠼⠚"
  };
  const japaneseBraille: Record<string, string> = {
    "あ": "⠁",
    "い": "⠃",
    "う": "⠉",
    "え": "⠋",
    "お": "⠊",
    "か": "⠡",
    "き": "⠣",
    "く": "⠩",
    "け": "⠫",
    "こ": "⠪",
    "さ": "⠱",
    "し": "⠳",
    "す": "⠹",
    "せ": "⠻",
    "そ": "⠺",
    "た": "⠕",
    "ち": "⠗",
    "つ": "⠝",
    "て": "⠟",
    "と": "⠞",
    "な": "⠅",
    "に": "⠇",
    "ぬ": "⠍",
    "ね": "⠏",
    "の": "⠎",
    "は": "⠥",
    "ひ": "⠧",
    "ふ": "⠭",
    "へ": "⠯",
    "ほ": "⠮",
    "ま": "⠵",
    "み": "⠷",
    "む": "⠽",
    "め": "⠿",
    "も": "⠾",
    "や": "⠌",
    "ゆ": "⠬",
    "よ": "⠜",
    "ら": "⠑",
    "り": "⠓",
    "る": "⠙",
    "れ": "⠛",
    "ろ": "⠚",
    "わ": "⠄",
    "を": "⠔",
    "ん": "⠴",
    "っ": "⠂",
    "ー": "⠒",
    "、": "⠰",
    "。": "⠲",
    "！": "⠖",
    "？": "⠢",
    "「": "⠤",
    "」": "⠤",
    "（": "⠶",
    "）": "⠶",
    "１": "⠼⠁",
    "２": "⠼⠃",
    "３": "⠼⠉",
    "４": "⠼⠙",
    "５": "⠼⠑",
    "６": "⠼⠋",
    "７": "⠼⠛",
    "８": "⠼⠓",
    "９": "⠼⠊",
    "０": "⠼⠪",
    "が": "⠐⠡",
    "ぎ": "⠐⠣",
    "ぐ": "⠐⠩",
    "げ": "⠐⠫",
    "ご": "⠐⠪",
    "ざ": "⠐⠱",
    "じ": "⠐⠳",
    "ず": "⠐⠹",
    "ぜ": "⠐⠻",
    "ぞ": "⠐⠺",
    "だ": "⠐⠕",
    "ぢ": "⠐⠗",
    "づ": "⠐⠝",
    "で": "⠐⠟",
    "ど": "⠐⠞",
    "ば": "⠐⠥",
    "び": "⠐⠧",
    "ぶ": "⠐⠭",
    "べ": "⠐⠯",
    "ぼ": "⠐⠮",
    "ぱ": "⠠⠥",
    "ぴ": "⠠⠧",
    "ぷ": "⠠⠭",
    "ぺ": "⠠⠯",
    "ぽ": "⠠⠮",
    "ゔ": "⠐⠉",
    "きゃ": "⠈⠡",
    "きゅ": "⠈⠩",
    "きょ": "⠈⠪",
    "ぎゃ": "⠘⠡",
    "ぎゅ": "⠘⠩",
    "ぎょ": "⠘⠪",
    "しゃ": "⠈⠱",
    "しゅ": "⠈⠹",
    "しょ": "⠈⠺",
    "じゃ": "⠘⠱",
    "じゅ": "⠘⠹",
    "じょ": "⠘⠺",
    "ちゃ": "⠈⠕",
    "ちゅ": "⠈⠝",
    "ちょ": "⠈⠞",
    "ぢゃ": "⠘⠕",
    "ぢゅ": "⠘⠝",
    "ぢょ": "⠘⠞",
    "にゃ": "⠈⠅",
    "にゅ": "⠈⠍",
    "にょ": "⠈⠎",
    "ひゃ": "⠈⠥",
    "ひゅ": "⠈⠭",
    "ひょ": "⠈⠮",
    "びゃ": "⠘⠥",
    "びゅ": "⠘⠭",
    "びょ": "⠘⠮",
    "ぴゃ": "⠨⠥",
    "ぴゅ": "⠨⠭",
    "ぴょ": "⠨⠮",
    "みゃ": "⠈⠵",
    "みゅ": "⠈⠽",
    "みょ": "⠈⠾",
    "りゃ": "⠈⠑",
    "りゅ": "⠈⠙",
    "りょ": "⠈⠚",
  };

function trueFalse(isTrue: boolean, setIsTrue: (isTrue: boolean) => void): void {
  if (isTrue) {
    setIsTrue(false);
  } else {
    setIsTrue(true);
  }
}

function englishToBraille(plainText: string): string {
  const brailleText: string = plainText.split('').map((char) => {return (englishBraille[char] ?? char)}).join(''); // englishBraille[char]がnullやundefinedならcharを返す
  return brailleText;
}

function brailleToEnglish(brailleText: string): string {
  let plainText: string[] = brailleText.split('');
  for (let i = 0; i < brailleText.length - 1; i++) {
    if (plainText[i] === "⠠" || plainText[i] === "⠐" || plainText[i] === "⠼") {
      plainText.splice(i, 2, Object.values(englishBraille).find((value) => value === (plainText[i] + plainText[i + 1])) ?? (plainText[i] + plainText[i + 1]));
    }
  } //２文字分の点字の処理
  plainText = plainText.map((braille) => {return (Object.keys(englishBraille).find((key) => englishBraille[key] === braille) ?? braille)});
  return plainText.join('');
}

function japaneseToBraille(plainText: string): string {
  let brailleText: string[] = plainText.split('');
  for (let i = 0; i < brailleText.length - 1; i++) {
    if (brailleText[i + 1] === "ゃ" || brailleText[i + 1] === "ゅ" || brailleText[i + 1] === "ょ") {
      const combined = japaneseBraille[brailleText[i] + brailleText[i + 1]];
      if (combined !== undefined) {
        brailleText.splice(i, 2, combined);
      }
    }
  } //拗音の処理
  brailleText = brailleText.map((char) => {return (japaneseBraille[char] ?? char)});
  return brailleText.join('');
}

function brailleToJapanese(brailleText: string): string {
  let plainText: string[] = brailleText.split('');
  for (let i = 0; i < brailleText.length - 1; i++) {
    if (plainText[i] === "⠼" || plainText[i] === "⠐" || plainText[i] === "⠠" || plainText[i] === "⠈" || plainText[i] === "⠘" || plainText[i] === "⠨") {
      plainText.splice(i, 2, Object.values(japaneseBraille).find((value) => value === (plainText[i] + plainText[i + 1])) ?? (plainText[i] + plainText[i + 1]));
    }
  } //２文字分の点字の処理
  plainText = plainText.map((braille) => {return (Object.keys(japaneseBraille).find((key) => japaneseBraille[key] === braille) ?? braille)});
  return plainText.join('');
}

function convertText(plainText: string, brailleText: string, isPlain: boolean, isEnglish: boolean, setPlainText: (text: string) => void, setBrailleText: (text: string) => void): void {
  if (isPlain && isEnglish) {
    const convertedText: string = englishToBraille(plainText);
    setBrailleText(convertedText);
  } else if (isPlain && !isEnglish) {
    const convertedText: string = japaneseToBraille(plainText);
    setBrailleText(convertedText);
  } else if (!isPlain && isEnglish) {
    const convertedText: string = brailleToEnglish(brailleText);
    setPlainText(convertedText);
  } else if (!isPlain && !isEnglish) {
    const convertedText: string = brailleToJapanese(brailleText);
    setPlainText(convertedText);
  }
}

function brailleInputButtons(isPlain: boolean, brailleText: string, setBrailleText: (text: string) => void): React.ReactElement | undefined {
  const brailleList: string[] = [];
  for (let i = 0x2800; i <= 0x283F; i++) {
    brailleList.push(String.fromCodePoint(i));
  }
  if (!isPlain) {
    return (
      <div className="brailleInputButtons">
        <div className="brailleInputButtonsRow">ボタンを押して点字を入力</div>
        <div className="brailleInputButtonsRow">
          <button onClick={() => setBrailleText(brailleText + brailleList[0])}>
            {brailleList[0]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[1])}>
            {brailleList[1]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[2])}>
            {brailleList[2]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[3])}>
            {brailleList[3]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[4])}>
            {brailleList[4]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[5])}>
            {brailleList[5]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[6])}>
            {brailleList[6]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[7])}>
            {brailleList[7]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[8])}>
            {brailleList[8]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[9])}>
            {brailleList[9]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[10])}>
            {brailleList[10]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[11])}>
            {brailleList[11]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[12])}>
            {brailleList[12]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[13])}>
            {brailleList[13]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[14])}>
            {brailleList[14]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[15])}>
            {brailleList[15]}
          </button>
        </div>
        <div className="brailleInputButtonsRow">
          <button onClick={() => setBrailleText(brailleText + brailleList[16])}>
            {brailleList[16]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[17])}>
            {brailleList[17]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[18])}>
            {brailleList[18]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[19])}>
            {brailleList[19]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[20])}>
            {brailleList[20]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[21])}>
            {brailleList[21]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[22])}>
            {brailleList[22]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[23])}>
            {brailleList[23]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[24])}>
            {brailleList[24]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[25])}>
            {brailleList[25]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[26])}>
            {brailleList[26]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[27])}>
            {brailleList[27]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[28])}>
            {brailleList[28]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[29])}>
            {brailleList[29]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[30])}>
            {brailleList[30]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[31])}>
            {brailleList[31]}
          </button>
        </div>
        <div className="brailleInputButtonsRow">
          <button onClick={() => setBrailleText(brailleText + brailleList[32])}>
            {brailleList[32]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[33])}>
            {brailleList[33]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[34])}>
            {brailleList[34]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[35])}>
            {brailleList[35]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[36])}>
            {brailleList[36]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[37])}>
            {brailleList[37]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[38])}>
            {brailleList[38]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[39])}>
            {brailleList[39]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[40])}>
            {brailleList[40]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[41])}>
            {brailleList[41]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[42])}>
            {brailleList[42]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[43])}>
            {brailleList[43]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[44])}>
            {brailleList[44]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[45])}>
            {brailleList[45]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[46])}>
            {brailleList[46]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[47])}>
            {brailleList[47]}
          </button>
        </div>
        <div className="brailleInputButtonsRow">
          <button onClick={() => setBrailleText(brailleText + brailleList[48])}>
            {brailleList[48]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[49])}>
            {brailleList[49]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[50])}>
            {brailleList[50]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[51])}>
            {brailleList[51]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[52])}>
            {brailleList[52]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[53])}>
            {brailleList[53]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[54])}>
            {brailleList[54]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[55])}>
            {brailleList[55]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[56])}>
            {brailleList[56]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[57])}>
            {brailleList[57]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[58])}>
            {brailleList[58]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[59])}>
            {brailleList[59]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[60])}>
            {brailleList[60]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[61])}>
            {brailleList[61]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[62])}>
            {brailleList[62]}
          </button>
          <button onClick={() => setBrailleText(brailleText + brailleList[63])}>
            {brailleList[63]}
          </button>
        </div>
      </div>
    )
  }
}

export default function App() {
  const [isPlain, setIsPlain] = useState(true);
  const [isEnglish, setIsEnglish] = useState(true);
  const [plainText, setPlainText] = useState("");
  const [brailleText, setBrailleText] = useState("");
  return (
    <>
      <div className = "header">
        <div id = "title">点字変換アプリ</div>
        <div id = "utCode">by ut.code();</div>
      </div>
      <div className="isPlainButtons">
        <button className={isPlain ? "buttonBlack" : "buttonWhite"} onClick={() => trueFalse(isPlain, setIsPlain)}>平文→点字</button>
        <button className={isPlain ? "buttonWhite" : "buttonBlack"} onClick={() => trueFalse(isPlain, setIsPlain)}>点字→平文</button>
      </div>
      <div className="isEnglishButtons">
        <button className={isEnglish ? "buttonBlack" : "buttonWhite"} onClick={() => trueFalse(isEnglish, setIsEnglish)}>英語</button>
        <button className={isEnglish ? "buttonWhite" : "buttonBlack"} onClick={() => trueFalse(isEnglish, setIsEnglish)}>日本語</button>
      </div>
      <div className="inputBoxes">
        <textarea 
          id="inputBoxPlain" 
          placeholder={isEnglish ? "ここに半角で英文を入力" : "ここに日本語ひらがなを全角で入力"} 
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
        />
        <textarea 
          id="inputBoxBraille" 
          placeholder='ここに点字を入力' 
          value={brailleText}
          onChange={(e) => setBrailleText(e.target.value)}
        />
      </div>
      <div className="copyButtons">
        <button className="plainCopyButton" onClick={() => navigator.clipboard.writeText(plainText)}>平文をコピー</button>
        <button className="brailleCopyButton" onClick={() => navigator.clipboard.writeText(brailleText)}>点字をコピー</button>
      </div>
      {brailleInputButtons(isPlain, brailleText, setBrailleText)}
      <button id="convertButton" onClick={() => convertText(plainText, brailleText, isPlain, isEnglish, setPlainText, setBrailleText)}>変換</button>
      <hr />
      <div className = "brailleDetail">
        <h2>点字について</h2>
        <div>基本的に、点字は、縦3点・横2列の6つの点を組み合わせて文字を表します。</div>
        <div>このアプリでは日本語と英語の２つの点字に対応しています。</div>
        <h3>日本語の点字について</h3>
        <div>日本語の点字の特徴は以下の通りです。</div>
        <ul>
          <li>基本的に、漢字を読みへ直してかなとして表現します。</li>
          <li>五十音は、母音を表す点と子音を表す点の組み合わせが基本です。</li>
          <li>濁音・半濁音・拗音は、前に専用の符号を付けます。</li>
          <li>数字の前には「数符」、アルファベットの前には「外字符」を置きます。</li>
          <li>大文字には「大文字符」を使用します。</li>
          <li>日本語文中の英単語や英文は、原則として「外国語引用符」で囲みます。</li>
          <li>読みやすくするため、文節などのまとまりごとにマスを空ける「分かち書き」を行います。</li>
          <li>句読点やカッコにも専用の点字符号があります。</li>
        </ul>
        <div>日本語の場合、点字は単純な文字の置き換えではなく、読み方、分かち書き、数字や外国語への切り替えなどを含む独自の表記体系です。そのため、実際の日本語文を点字に変換する際には、漢字を読みに直したり、分かち書きをする等の正規化処理が必要です。</div>
        <h3>英語の点字について</h3>
        <div>英語の点字の特徴は以下の通りです。</div>
         <ul>
          <li>アルファベットごとに対応する点字があります。</li>
          <li>大文字の前には大文字符⠠を付けます。</li>
          <li>数字の前には数符⠼を付け、a〜jと同じ形を数字として読みます。</li>
          <li>ピリオド、コンマ、疑問符などにも専用の点字があります。</li>
          <li>フルスペルで表す第１級点字と、よく使う単語や文字列を短縮する第２級点字、第３級点字があります。</li>
          <li>現在は、英語圏で表記を統一したUEB（Unified English Braille）が広く使用されています。</li>
        </ul>
        <div>英語の場合、第１級点字であれば単純な点字への置き換えで済みますが、第２級以降だと特定の単語を省略する処理が必要になります。</div>
      </div>
      <hr />
      <div className = "appDetail">
        <h2>このアプリについて</h2>
        <div>英語・日本語の平文とUnicode点字を相互に変換する、ブラウザ上のシンプルな学習用アプリです。</div>
        <div>現在の仕様は以下の通りです。</div>
        <ul>
          <li>日本語入力は全角ひらがなを前提としています。また、対応している点字は50音に加えて、数字、促音（っ）、撥音（ん）、長音（ー）、読点（、）句点（。）、疑問符（？）、感嘆符（！）、括弧（（））、鉤括弧（「」）です。</li>
          <li>英語入力は第１級点字にのみ対応し、第２級以降で用いられる特定の単語の略（例：but→bなど）には対応していません。</li>
          <li>対応表にない文字は変換せず、そのまま出力します。</li>
          <li>日本語の分かち書き（文のまとまりごとに区切ること）や、文章中に日本語と英語が混在していた場合の自動判定には対応していません。</li>
        </ul>
      </div>
      <div className = "footer">このアプリでは一部の機械的な処理や点字の仕様の調査にCodexを用いています。</div>
    </>
  )
}
