import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../translate';

@Pipe({
    name: 'translate',
    pure: false
})

export class TranslatePipe implements PipeTransform {

    constructor(private _translate: TranslateService) { }

    transform(value: string, _args: any[]): any {
        if (!value) return;
        return this._translate.instant(value);
    }
}
