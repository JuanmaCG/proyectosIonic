import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProyectosService } from '../proyectos.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-proyecto-create',
  templateUrl: './proyecto-create.page.html',
  styleUrls: ['./proyecto-create.page.scss'],
})
export class ProyectoCreatePage implements OnInit {

  form: FormGroup;
  id: string;
  name: string;
  technology: string;
  developers: number;


  constructor(private proyectoService: ProyectosService, private toastController: ToastController, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      technology: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      developers: ['', [Validators.required, Validators.min(1), Validators.max(3)]]
    });
  }
  createProyecto() {
    if (typeof(this.proyectoService.getProyectoById(this.id)) !== 'undefined') {
      this.toastController.create({
        animated: true,
        duration: 4000,
        position: 'top',
        showCloseButton: true,
        message: 'El proyecto con este id ya existe'
      }).then(toastEl => {
        toastEl.present();
      });
    } else {
      this.proyectoService.createProyecto(this.id, this.name, this.technology, this.developers).subscribe( () => {
        this.toastController.create({
          animated: true,
          duration: 4000,
          position: 'top',
          showCloseButton: true,
          message: 'El proyecto se creo correctamente'
        }).then(toastEl => {
          toastEl.present();
          this.router.navigate(['/proyecto']);
        });
      });
    }
  }
}
