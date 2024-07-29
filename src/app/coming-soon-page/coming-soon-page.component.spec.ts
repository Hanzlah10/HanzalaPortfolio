import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonPageComponent } from './coming-soon-page.component';

describe('ComingSoonPageComponent', () => {
  let component: ComingSoonPageComponent;
  let fixture: ComponentFixture<ComingSoonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingSoonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComingSoonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
