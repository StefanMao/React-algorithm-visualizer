export type ThaiWord = {
  id: string;
  category: '低子音' | '中子音' | '高子音';
  thaiWord: string; // 泰文單字
  thaiLetters: string; // 泰文字母
  englishPronunciation: string; // 英文拼音
  chineseDefinition: string; // 中文解釋
};