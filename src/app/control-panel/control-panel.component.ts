import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WordService} from '../word.service';
import {Word} from '../file/word';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent implements OnInit {
  currentWord: Word;

  constructor(
    private wordService: WordService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.wordService.currentWord.subscribe(value => {
      this.currentWord = value;
      if (value.content) {
        this.cdr.detectChanges();
      }
    });
  }

  updateFormat(formatPart: string) {
    this.currentWord.format[formatPart] = !this.currentWord.format[formatPart];
    this.wordService.setCurrentWord(this.currentWord);
  }
}

