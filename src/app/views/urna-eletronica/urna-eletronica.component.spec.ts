import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrnaEletronicaComponent } from './urna-eletronica.component';

describe('UrnaEletronicaComponent', () => {
  let component: UrnaEletronicaComponent;
  let fixture: ComponentFixture<UrnaEletronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrnaEletronicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrnaEletronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
