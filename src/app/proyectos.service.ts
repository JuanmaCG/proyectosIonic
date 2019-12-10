import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Proyectos } from './proyectos.model';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://192.168.0.24:8080/proyectoapp-0.0.1-SNAPSHOT/app';
  }

  public getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.url}/proyectos`);
  }

  public getProyectoById(id: string): Observable<Proyectos> {
    return this.http.get<Proyectos>(`${this.url}/proyecto/${id}`);
  }

  public createProyecto(id: string, name: string, technology: string, developers: number) {
    const proyecto: Proyectos = new Proyectos(id, name, technology, developers);
    return this.http.post(`${this.url}/proyectos`, proyecto);
  }

  public deleteProyecto(id: string) {
    return this.http.delete(`${this.url}/proyecto/${id}`);
  }
  public updateProyecto(proyecto: Proyectos) {
    return this.http.put(`${this.url}/proyecto/${proyecto.id}`, proyecto);
  }
}
