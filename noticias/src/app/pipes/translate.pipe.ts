import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  values = {
    business: 'Negocios', 
    entertainment: 'Entretenimiento',
    general: 'General', 
    health: 'Salud',
    science: 'Ciencia',
    sport: 'Deportes',
    technology: 'Tecnología'
  }

  transform(value: string): string {
    return this.values[value];
  }

}
