import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(mediaItems: any): any {
    const categories: any = [];    
    mediaItems.forEach((item:any) => {
      if(categories.indexOf(item.category) <= -1){
        categories.push(item.category);
      }
    });
    return categories;
  }

}
