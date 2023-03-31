
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any,searchTerm: any): any {

    if(searchTerm.length===0){
      return value
    }
    return value.filter((search: any) => search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1  
    // search.id.toString().indexOf(searchTerm)> -1 || 
    // search.address.toString().indexOf(searchTerm)> -1 ||
    //  search.age.toString().indexOf(searchTerm)> -1 ||
    //   search.address.toLowerCase().indexOf(searchTerm.toLowerCase())> -1 ||
    //     search.technology.toLowerCase().indexOf(searchTerm.toLowerCase())> -1  )
    )
  }
}
