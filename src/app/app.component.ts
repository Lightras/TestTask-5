import { Component } from '@angular/core';
import {WordFormat} from './word-format';
import {Word} from './file/word';
import {WordService} from './word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Text Editor';
}
