import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogryViewComponent } from './cateogry-view.component';

describe('CateogryViewComponent', () => {
  let component: CateogryViewComponent;
  let fixture: ComponentFixture<CateogryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateogryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateogryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
