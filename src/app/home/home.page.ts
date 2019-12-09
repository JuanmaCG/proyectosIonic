import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: User = {username: 'admin', password: 'admin'};
  userForm: User;
  wrongCredentials: boolean;

  constructor(private router: Router, public alertController: AlertController) { 
    this.userForm = new User();
  }

  ngOnInit() {

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario y/o contraseña incorrecta',
      buttons: ['OK']
    });

    await alert.present();
  }

  onSubmit() {
    if (this.user.username === this.userForm.username && this.user.password === this.userForm.password) {
      this.router.navigate(['proyecto']);
    } else {
      this.presentAlert();
    }
  }

}
