import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksheetComponent } from './marksheet.component';

describe('MarksheetComponent', () => {
  let component: MarksheetComponent;
  let fixture: ComponentFixture<MarksheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarksheetComponent]
    });
    fixture = TestBed.createComponent(MarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
