import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../proyectos.model';
import { ProyectosService } from '../proyectos.service';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.page.html',
  styleUrls: ['./proyecto.page.scss'],
})
export class ProyectoPage implements OnInit {

  public loadedProyectos: Proyectos[];

  constructor(private proyectoService: ProyectosService, private router: Router) { }

  ngOnInit() {
    this.proyectoService.getProyectos().subscribe(proyectos => {
      this.loadedProyectos = proyectos;
    });
  }

  onEditProyecto(proyectoId: string, slidingItem: IonItemSliding) {
    this.router.navigate(['/', 'proyecto', 'edit', proyectoId]);
    slidingItem.close();
  }

  deleteProyecto(id: string, slidingItem: IonItemSliding) {
    this.proyectoService.deleteProyecto(id).subscribe( () => {
      slidingItem.close();
      this.ngOnInit();
    });
  }
}
