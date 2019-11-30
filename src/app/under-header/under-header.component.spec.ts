import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderHeaderComponent } from './under-header.component';

describe('UnderHeaderComponent', () => {
  let component: UnderHeaderComponent;
  let fixture: ComponentFixture<UnderHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
