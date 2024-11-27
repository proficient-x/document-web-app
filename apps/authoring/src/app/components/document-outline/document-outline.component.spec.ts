import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentOutlineComponent } from './document-outline.component';

describe('DocumentOutlineComponent', () => {
  let component: DocumentOutlineComponent;
  let fixture: ComponentFixture<DocumentOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentOutlineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
