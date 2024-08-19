import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DickNavbarComponent } from './dick-navbar.component';

describe('DickNavbarComponent', () => {
  let component: DickNavbarComponent;
  let fixture: ComponentFixture<DickNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DickNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DickNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
