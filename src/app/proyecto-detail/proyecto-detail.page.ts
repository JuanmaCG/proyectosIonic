import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../proyectos.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Proyectos } from '../proyectos.model';

@Component({
  selector: 'app-proyecto-detail',
  templateUrl: './proyecto-detail.page.html',
  styleUrls: ['./proyecto-detail.page.scss'],
})
export class ProyectoDetailPage implements OnInit {

  public loadedProyecto: Proyectos;
  id: string;
  
  constructor(private proyectoService: ProyectosService, private route: ActivatedRoute) {
    this.loadedProyecto = new Proyectos();
  }


  ngOnInit() {
    this.id = this.route.snapshot.params['proyectoId'];
    this.proyectoService.getProyectoById(this.id).subscribe(proyecto => {
      this.loadedProyecto = proyecto;
    });
  }
}
