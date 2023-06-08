import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSpecialitesComponent } from './liste-specialites.component';

describe('ListeSpecialitesComponent', () => {
  let component: ListeSpecialitesComponent;
  let fixture: ComponentFixture<ListeSpecialitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeSpecialitesComponent]
    });
    fixture = TestBed.createComponent(ListeSpecialitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
