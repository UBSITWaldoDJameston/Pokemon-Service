import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohtoLeadersComponent } from './johto-leaders.component';

describe('JohtoLeadersComponent', () => {
  let component: JohtoLeadersComponent;
  let fixture: ComponentFixture<JohtoLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohtoLeadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JohtoLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
