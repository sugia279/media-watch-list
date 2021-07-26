import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MediaItemService } from '../media-item.service';
import { lookupListToken } from '../provider';
import { Router } from '@angular/router'
//Reactive approach removes the core validation logic from the template and hence makes the template code quite clean. 
//From a unit testing perspective, it is easier to write unit tests with Reactive forms, since the logic is contained inside our component.
@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, 
              private mediaItemService:MediaItemService,
              @Inject(lookupListToken) public lookupLists:any,              
              private route: Router) {   
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidatior)
    });
  }
  get fControls() { return this.form.controls; }

  yearValidatior(control: AbstractControl) {
    if(control.value.trim().length===0){
      return null;      
    }
    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2500;
    if(year >= minYear && year <= maxYear){
      return null;
    }
    else{
      return{
        year: {
          min: minYear,
          max: maxYear
        }
      }
    }
  }
  onSubmit(mediaItem:any){
    this.mediaItemService.add(mediaItem)
    .subscribe(()=>{
      this.route.navigate(['/', mediaItem.medium])
    });    
  }
}
