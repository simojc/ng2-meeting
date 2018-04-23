import {Injectable} from '@angular/core';

@Injectable()
export class LookupService {
  getStates(): string[] {
    return ['IA', 'CA', 'MN','SD','NY','FL', 'AK'];
  }
}