import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaItemExpressaoComponent } from './linha-item-expressao.component';

describe('LinhaItemExpressaoComponent', () => {
  let component: LinhaItemExpressaoComponent;
  let fixture: ComponentFixture<LinhaItemExpressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinhaItemExpressaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinhaItemExpressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
