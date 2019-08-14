import {WordFormat} from '../word-format';

export class Word {
  content: string;
  format: WordFormat;

  constructor(word: string) {
    this.content = word;
    this.format = {
      bold: false,
      italic: false,
      underline: false
    };
  }

  setFormat(key, value) {
    if (this.format.hasOwnProperty(key)) {
      this.format[key] = value;
    }
  }
}
