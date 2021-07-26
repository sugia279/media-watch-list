import { Component, OnInit } from '@angular/core';
//The template-driven approach would be familiar to those coming from AngularJS 1 background 
//and thus makes it easy for migrating their app to the latest Angular version
@Component({
  selector: 'app-media-item-form-template',
  templateUrl: './media-item-form-template.component.html',
  styleUrls: ['./media-item-form-template.component.css']
})
export class MediaItemFormTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(mediaItem:any){
    console.log(mediaItem);
  }
}
