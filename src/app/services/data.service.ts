import { Tpair } from '../model/tpair.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    favTranslations: Tpair[] = [];
    saveTranslation(english: string, spanish: string): void {
        const translatePair = new Tpair(english, spanish);
        this.favTranslations.push(translatePair);
    }
    getAllTranslations(): Tpair[] {
        return this.favTranslations;
    }
}
