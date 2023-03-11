import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdivComponent } from './ndiv.component';

describe('NdivComponent', () => {
  let component: NdivComponent;
  let fixture: ComponentFixture<NdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
