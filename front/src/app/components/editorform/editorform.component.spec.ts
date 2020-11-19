import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorformComponent } from './editorform.component';

describe('EditorformComponent', () => {
  let component: EditorformComponent;
  let fixture: ComponentFixture<EditorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
