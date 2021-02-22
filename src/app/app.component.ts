import { Component } from '@angular/core';
import { LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasksCount = 0;
  genderCode: number;
  today = Date.now();
  amount = 1000000.10;
  string: string = $localize`:@@string:string from .ts`;
  langMap: Map<string, string> = new Map([['ru', 'русский'], ['en-US', 'english']]);

  constructor(@Inject(LOCALE_ID) public locale: string) {
  }

  male() { this.genderCode = 0; }
  female() { this.genderCode = 1; }
  other() { this.genderCode = 2; }
}

