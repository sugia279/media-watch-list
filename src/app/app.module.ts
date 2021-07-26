import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
// import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
// import { MediaItemFormTemplateComponent } from './media-item-form-template/media-item-form-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { lookupListToken, lookupLists } from './provider';
import { HttpClientModule, HttpXhrBackend} from '@angular/common/http';
import { MockXHRBackend } from './mock-xhr-backend';
import { CategoryListComponent } from './category-list.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ReactiveFormsModule,
    HttpClientModule    
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    CategoryListComponent
    // MediaItemFormComponent,
    // MediaItemFormTemplateComponent
  ],  
  providers: [    
    { provide: lookupListToken, useValue:lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
