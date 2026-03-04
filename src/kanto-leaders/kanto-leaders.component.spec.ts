import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantoLeadersComponent } from './kanto-leaders.component';

describe('KantoLeadersComponent', () => {
  let component: KantoLeadersComponent;
  let fixture: ComponentFixture<KantoLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantoLeadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KantoLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
