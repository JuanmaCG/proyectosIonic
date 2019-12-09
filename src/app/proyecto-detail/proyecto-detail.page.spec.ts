import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProyectoDetailPage } from './proyecto-detail.page';

describe('ProyectoDetailPage', () => {
  let component: ProyectoDetailPage;
  let fixture: ComponentFixture<ProyectoDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
