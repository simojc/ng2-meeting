import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1: return 'Half Hour';
      case 2: return 'One Hour';
      case 3: return 'Half Day';
      case 4: return 'Full Day';
      default: return value.toString();
    }
  }
}

@Pipe({
    name: 'dateFormatPipe',
})
export class DateFormatPipe implements PipeTransform {
    transform(value: string) {
       const datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'MMM-dd-yyyy');
        return value;
    }
}
