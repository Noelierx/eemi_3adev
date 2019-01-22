import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articlesFilter'
})
export class ArticlesFilterPipe implements PipeTransform {

  transform(value: any, limit: number = 10, search: string = null): any {
    let list = value;

    if (list !== null) {

      if (search != null) {
        list = list.filter((item) => {
          return item.title.indexOf(search) === 0;
        });
      }

      list = list.splice(0,limit);
    }

    return list;
  }

}
