import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMultiplierComponent } from './vehicle-multiplier.component';

describe('VehicleMultiplierComponent', () => {
  let component: VehicleMultiplierComponent;
  let fixture: ComponentFixture<VehicleMultiplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleMultiplierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleMultiplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
