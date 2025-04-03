import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiExecutiveChatComponent } from './ai-executive-chat.component';

describe('AiExecutiveChatComponent', () => {
  let component: AiExecutiveChatComponent;
  let fixture: ComponentFixture<AiExecutiveChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiExecutiveChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiExecutiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
