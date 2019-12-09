import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProyectoCreatePage } from './proyecto-create.page';

describe('ProyectoCreatePage', () => {
  let component: ProyectoCreatePage;
  let fixture: ComponentFixture<ProyectoCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectoCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
