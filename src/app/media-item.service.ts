import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MediaItemService {  
  constructor(private http: HttpClient) { }

  get(medium: string){    
    const getOptions = {
      params :{medium}
    };
    return this.http.get<MediaItemResponse>('mediaitems',getOptions)
      .pipe(
        map(response => {
          return response.mediaItems;
        }),
        catchError(this.handleError)
      );
  }

  add(mediaItem: any){
    return this.http.post('mediaitems', mediaItem)
    .pipe(catchError(this.handleError));
  }

  delete(mediaItem:any){
    return this.http.delete(`mediaItems/${mediaItem.id}`)
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    console.log(error.message);
    return throwError('A data error occurs. Please try again.')
  }
}

interface MediaItem{
  id: number;
  name: string;
  medium: string;
  category: string;
  year: string;
  watchedOn: string;
  isFavorite: string;
}

interface MediaItemResponse{
  mediaItems: MediaItem[];
}