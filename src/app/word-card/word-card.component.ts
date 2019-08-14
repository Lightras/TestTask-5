import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WordService} from '../word.service';
import {Word} from '../file/word';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss']
})
export class WordCardComponent implements OnInit{
  currentWord: Word;
  wordSynonyms: any[] = [];

  constructor(
    private wordService: WordService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.wordService.currentWord.subscribe(value => {
      this.currentWord = value;
      this.wordService.getSynonym(value.content).subscribe((r: any[]) => {
        this.wordSynonyms = r;
        this.cdr.detectChanges();
      });
    });
  }
}
