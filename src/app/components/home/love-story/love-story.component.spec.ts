import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveStoryComponent } from './love-story.component';

describe('LoveStoryComponent', () => {
  let component: LoveStoryComponent;
  let fixture: ComponentFixture<LoveStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
