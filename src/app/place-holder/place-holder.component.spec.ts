import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHolderComponent } from './place-holder.component';

describe('PlaceHolderComponent', () => {
  let component: PlaceHolderComponent;
  let fixture: ComponentFixture<PlaceHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
