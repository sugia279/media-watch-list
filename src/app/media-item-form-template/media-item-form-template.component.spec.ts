import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemFormTemplateComponent } from './media-item-form-template.component';

describe('MediaItemFormTemplateComponent', () => {
  let component: MediaItemFormTemplateComponent;
  let fixture: ComponentFixture<MediaItemFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaItemFormTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaItemFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
