import {  ElementRef } from '@angular/core';
import { OneDirective } from './one.directive';

describe('OneDirective', () => {
let elementRef: ElementRef<HTMLElement>
  it('should create an instance', () => {
    const directive = new OneDirective( elementRef);
    elementRef?.nativeElement?.click();
    directive.onClick()
    expect(directive.type).toBe('blue');
  });
});
// https://codecraft.tv/courses/angular/unit-testing/directives/
// https://stackoverflow.com/questions/61359262/unit-testing-directive-with-arguments-in-angular-2
// https://riptutorial.com/angular2/example/32506/testing-a-custom-directive 
// https://danielk.tech/home/how-to-test-angular-attribute-directives 
/* 

    import { DebugElement, ElementRef } from '@angular/core';
    import { OneDirective } from './one.directive';
    import { TestBed, ComponentFixture } from '@angular/core/testing';
    import { OneComponent } from '../components/one/one.component';
    import { By } from '@angular/platform-browser';
    
    describe('OneDirective', () => {
      let elementRef: ElementRef<HTMLElement>
      let component: OneComponent;
      let fixture: ComponentFixture<OneComponent>;
      let OneDirective:OneDirective;
      beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [OneDirective, OneComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(OneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it('should create an instance', () => {
        
        const directive = new OneDirective(ele);
        let ele=fixture.debugElement.query(By.css('.class'));
        ele.triggerEventHandler('click',null);
        fixture.detectChanges();
        OneDirective.onClick()
        expect(OneDirective.type).toBe('blue');
      });
    });
*/