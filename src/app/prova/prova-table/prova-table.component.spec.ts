import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaTableComponent } from './prova-table.component';

describe('ProvaTableComponent', () => {
  let component: ProvaTableComponent;
  let fixture: ComponentFixture<ProvaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
