import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneComponent } from './one.component';
import { OnePipe } from '../../pipe/one.pipe';

describe('OneComponent', () => {
  let component: OneComponent;
  let fixture: ComponentFixture<OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneComponent, OnePipe],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (dane:DoneFn) => {
    fixture.detectChanges()
     let ele:HTMLElement=fixture.debugElement.nativeElement.querySelector('selector');
     ele.dispatchEvent(new MouseEvent('click'))
     ele.dispatchEvent(new KeyboardEvent('keyUp'))
     fixture.whenStable().then(() => {
      dane()
    }).catch(() => {

    })
  });
});
