import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoennLeadersComponent } from './hoenn-leaders.component';

describe('HoennLeadersComponent', () => {
  let component: HoennLeadersComponent;
  let fixture: ComponentFixture<HoennLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoennLeadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoennLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
