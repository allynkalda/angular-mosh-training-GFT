import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string ): any {
    if (!value) return null;

  let newString = [];
  let newArr = value.toLowerCase().split(" ");

  for (let i = 0; i < newArr.length; i++) {
		let word = newArr[i].charAt(0).toUpperCase() + newArr[i].split("").splice(1).join("");
		newString.push(word);
	}
	let str = newString.join(" ");

return str;
  }

}