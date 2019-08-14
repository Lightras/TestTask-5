import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { TextService } from '../text-service/text.service';
import {Log} from '@angular/core/testing/src/logger';
import {Word} from './word';
import {WordFormat} from '../word-format';
import {WordService} from '../word.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  text$: Promise<string>;
  textWords: Word[];
  currentWord: Word;

  constructor(
    private textService: TextService,
    private wordService: WordService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText();
    this.text$.then(text => {
      const words = text.split(' ');
      this.textWords = words.map(v => new Word(v));
    });

    this.wordService.currentWord.subscribe(value => {
      this.currentWord = value;
      if (value.content) {
        this.cdr.detectChanges();
      }
    });
  }

  selectWord(word: Word) {
    this.wordService.setCurrentWord(word);
  }
}
