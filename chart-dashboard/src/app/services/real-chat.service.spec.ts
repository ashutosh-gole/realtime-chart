import { TestBed } from '@angular/core/testing';

import { RealChatService } from './real-chat.service';

describe('RealChatService', () => {
  let service: RealChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
