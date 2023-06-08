import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePraticiensComponent } from './liste-praticiens.component';

describe('ListePraticiensComponent', () => {
  let component: ListePraticiensComponent;
  let fixture: ComponentFixture<ListePraticiensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePraticiensComponent]
    });
    fixture = TestBed.createComponent(ListePraticiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
