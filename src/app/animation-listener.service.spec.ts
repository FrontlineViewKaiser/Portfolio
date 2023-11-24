import { TestBed } from '@angular/core/testing';

import { AnimationListenerService } from './animation-listener.service';

describe('AnimationListenerService', () => {
  let service: AnimationListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
