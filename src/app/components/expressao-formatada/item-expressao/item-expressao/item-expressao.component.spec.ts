import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExpressaoComponent } from './item-expressao.component';

describe('ItemExpressaoComponent', () => {
  let component: ItemExpressaoComponent;
  let fixture: ComponentFixture<ItemExpressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemExpressaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemExpressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
