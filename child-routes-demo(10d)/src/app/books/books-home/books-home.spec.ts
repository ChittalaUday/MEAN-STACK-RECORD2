import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksHome } from './books-home';

describe('BooksHome', () => {
  let component: BooksHome;
  let fixture: ComponentFixture<BooksHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
