import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressaoFormatadaComponent } from './expressao-formatada.component';

describe('ExpressaoFormatadaComponent', () => {
  let component: ExpressaoFormatadaComponent;
  let fixture: ComponentFixture<ExpressaoFormatadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressaoFormatadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressaoFormatadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
