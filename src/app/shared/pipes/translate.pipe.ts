import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from '../services/translator.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(
    private _translator: TranslatorService) {}

  /**
   * Get the translation of a translation key.
   * @param translateKey Translation key
   */
  transform(translateKey: string): string {
    return this._translator.translate(translateKey);
  }

}
