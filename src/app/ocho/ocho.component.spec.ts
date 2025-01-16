import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OchoComponent } from './ocho.component';

describe('OchoComponent', () => {
  let component: OchoComponent;
  let fixture: ComponentFixture<OchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OchoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
