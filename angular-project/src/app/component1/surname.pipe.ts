import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'surname'
})
export class SurnamePipe implements PipeTransform {
    transform(str: String): String {
        var index = str.indexOf(" ");
        return str.substring(index);
    }
}