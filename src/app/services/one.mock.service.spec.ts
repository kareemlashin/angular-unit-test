import { TestBed } from '@angular/core/testing';

import { OneService } from './one.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// Mock 
const z = {};
describe('OneService', () => {
    let service: OneService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
        });
        service = TestBed.inject(OneService);
    });

});
