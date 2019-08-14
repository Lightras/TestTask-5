import {Injectable} from '@angular/core';
import {Word} from './file/word';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(
    private http: HttpClient
  ) {}

  private currentWord$ = new BehaviorSubject<Word>(new Word(''));
  currentWord = this.currentWord$.asObservable();

  setCurrentWord(word: Word) {
    this.currentWord$.next(word);
  }

  getSynonym(word: string) {
    const apiUrl = 'https://api.datamuse.com/words';
    const requestParams = new HttpParams({
      fromObject: {
        rel_syn: word,
        max: '5'
      }
    });

    return this.http.get(apiUrl, {params: requestParams});
  }
}
