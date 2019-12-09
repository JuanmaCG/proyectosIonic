import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProyectosService } from '../proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Proyectos } from '../proyectos.model';

@Component({
  selector: 'app-proyecto-edit',
  templateUrl: './proyecto-edit.page.html',
  styleUrls: ['./proyecto-edit.page.scss'],
})
export class ProyectoEditPage implements OnInit {

  form: FormGroup;
  loadedProyecto: Proyectos;
  id: string;


  constructor(
    private proyectoService: ProyectosService,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private router: Router
    ) { this.loadedProyecto = new Proyectos() }

  ngOnInit() {
    this.id = this.route.snapshot.params['proyectoId'];
    this.proyectoService.getProyectoById(this.id).subscribe(proyecto => {
      this.loadedProyecto = proyecto;
    });
  }
  editProyecto() {
    this.proyectoService.updateProyecto(this.loadedProyecto)
    .subscribe( () => {
      this.toastController.create({
        animated: true,
        duration: 4000,
        position: 'top',
        showCloseButton: true,
        message: 'El proyecto se edito correctamente'
      }).then(toastEl => {
        toastEl.present();
        this.router.navigate(['/proyecto']);
      })
    });
  }
}
