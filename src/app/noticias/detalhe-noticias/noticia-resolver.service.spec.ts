import { TestBed, inject } from '@angular/core/testing';

import { NoticiaResolverService } from './noticia-resolver.service';

describe('NoticiaResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticiaResolverService]
    });
  });

  it('should be created', inject([NoticiaResolverService], (service: NoticiaResolverService) => {
    expect(service).toBeTruthy();
  }));
});
