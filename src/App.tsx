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
  const plainText: string = brailleText.split('').map((char) => {return (Object.keys(englishBraille).find((key) => englishBraille[key] === char) ?? char)}).join('');
  return plainText;
}

function japaneseToBraille(plainText: string): string {
  let brailleText: string[] = plainText.split('');
  for (let i = 0; i < brailleText.length - 1; i++) {
    if (brailleText[i + 1] === "ゃ" || brailleText[i + 1] === "ゅ" || brailleText[i + 1] === "ょ") {
      brailleText.splice(i, 2, japaneseBraille[brailleText[i] + brailleText[i + 1]]);
    }
  } //拗音の処理
  brailleText = brailleText.map((char) => {return (japaneseBraille[char] ?? char)});
  return brailleText.join('');
}

function brailleToJapanese(brailleText: string): string {
  const plainText: string = brailleText.split('').map((char) => {return (Object.keys(japaneseBraille).find((key) => japaneseBraille[key] === char) ?? char)}).join('');
  return plainText;
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
  for (let i = 0x2800; i <= 0x28FF; i++) {
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
      <h1>点字変換アプリ</h1>
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
    </>
  )
}
