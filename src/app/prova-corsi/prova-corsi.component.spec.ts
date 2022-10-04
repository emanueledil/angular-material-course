import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaCorsiComponent } from './prova-corsi.component';

describe('ProvaCorsiComponent', () => {
  let component: ProvaCorsiComponent;
  let fixture: ComponentFixture<ProvaCorsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaCorsiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaCorsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
