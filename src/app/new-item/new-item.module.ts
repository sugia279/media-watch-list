import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MediaItemFormComponent } from "./media-item-form.component";
import { NewItemRouting } from "./new-item.routing";

@NgModule({
    imports:[
        CommonModule,        
        FormsModule,
        ReactiveFormsModule,
        NewItemRouting
    ],
    declarations:[
        MediaItemFormComponent
    ]    
})
export class NewItemModule{}