import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffTopicComponent } from './off-topic.component';

describe('OffTopicComponent should', () => {
  let component: OffTopicComponent;
  let fixture: ComponentFixture<OffTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffTopicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});