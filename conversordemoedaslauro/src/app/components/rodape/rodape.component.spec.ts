import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeComponent } from './rodape.component';

describe('RodapeComponent', () => {
  let component: RodapeComponent;
  let fixture: ComponentFixture<RodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapeComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

function expect(component: RodapeComponent) {
  throw new Error('Function not implemented.');
}

