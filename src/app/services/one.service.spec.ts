import { TestBed } from '@angular/core/testing';

import { OneService } from './one.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
const z = {};
describe('OneService', () => {
  let service: OneService;
  let HttpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(OneService);
    HttpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', (dane: DoneFn) => {
    let x = 0;
    service.getData().subscribe(data => {
      expect(data).not.toBe(x)
      dane()
    })
    const res = HttpController.expectOne('https://www.postman.com/collections/9e1075da1dc1b06025cc');
    expect(res.request.url.endsWith("9e1075da1dc1b06025cc")).toBeTrue()
    expect(res.request.method).toBe('GET')
    res.flush(z);
    HttpController.verify()
  });

});
