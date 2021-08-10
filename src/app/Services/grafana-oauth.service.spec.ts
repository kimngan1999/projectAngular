import { TestBed } from '@angular/core/testing';

import { GrafanaOAuthService } from './grafana-oauth.service';

describe('GrafanaOAuthService', () => {
  let service: GrafanaOAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrafanaOAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
