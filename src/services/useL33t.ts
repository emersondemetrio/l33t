const CHAR_REPLACE_MAP = {
  a: "4",
  b: "8",
  e: "3",
  g: "6",
  l: "1",
  o: "0",
  s: "5",
  t: "7",
  æ: "43",
  ø: "03",
  å: "44",
};

const convert = (str: string) => {
  str = str || "";
  str = str.replace(/cks/g, "x");

  for (let letter in CHAR_REPLACE_MAP) {
    if (CHAR_REPLACE_MAP.hasOwnProperty(letter)) {
      // @ts-ignore
      str = str.replace(new RegExp(letter, "g"), CHAR_REPLACE_MAP[letter]);
    }
  }

  return str.toUpperCase();
};

type CharType = "OTHER" | "VOWEL" | "SPECIAL";
const IS_VOWEL_CHAR_REGEX = /^[4I30U]$/i;
const IS_SPECIAL_CHAR_REGEX = /^[!?.,\-]$/i;

const getCharType = (character: string): CharType => {
  if (IS_VOWEL_CHAR_REGEX.test(character)) {
    return "VOWEL";
  }

  if (IS_SPECIAL_CHAR_REGEX.test(character)) {
    return "SPECIAL";
  }

  return "OTHER";
};

export const toL33t = (str: string) => {
  str = convert(str);
  if ("" === str) {
    return str;
  }

  const last = str[str.length - 1];

  const charType = getCharType(last);

  if (charType === "SPECIAL") {
    return str.substr(0, str.length - 1) + last;
  }

  return str;
};
