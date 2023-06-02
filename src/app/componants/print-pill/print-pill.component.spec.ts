import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPillComponent } from './print-pill.component';

describe('PrintPillComponent', () => {
  let component: PrintPillComponent;
  let fixture: ComponentFixture<PrintPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintPillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
