import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfrecerVehiculoPage } from './ofrecer-vehiculo.page';

describe('OfrecerVehiculoPage', () => {
  let component: OfrecerVehiculoPage;
  let fixture: ComponentFixture<OfrecerVehiculoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OfrecerVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
