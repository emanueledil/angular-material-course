import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaPaginatorComponent } from './prova-paginator.component';

describe('ProvaPaginatorComponent', () => {
  let component: ProvaPaginatorComponent;
  let fixture: ComponentFixture<ProvaPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaPaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
