import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../media-item.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems: any;  
  medium:string = '';
  constructor(private mediaItemService:MediaItemService,
              private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.getMediaItems(this.medium);
    this.activateRoute.paramMap
    .subscribe(paramMap =>{
      let medium:string = paramMap.get('medium') || '';
      medium = medium === 'all'? '': medium;      
      this.getMediaItems(medium);
    })
  }

  onMediaItemDelete(mediaItem: any) { 
    this.mediaItemService.delete(mediaItem)
    .subscribe(()=>{
      this.getMediaItems(this.medium);
    });
  }

  getMediaItems(medium: string){
    this.medium = medium;
    this.mediaItemService.get(medium)
    .subscribe(items => {
      this.mediaItems = items;      
    });
  }
}
