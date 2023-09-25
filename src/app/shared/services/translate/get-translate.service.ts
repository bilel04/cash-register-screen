import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTranslateService {
  translateLang$: BehaviorSubject<string> = new BehaviorSubject('fr');
  constructor(public translateService: TranslateService) {
  }

  get translateLang() {
    return this.translateLang$.asObservable();
  }

  updateLang(val: string) {
    this.translateLang$.next(val);
  }
}
