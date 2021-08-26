import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvmarceService {
  
  profesional: any[] = [];
  educacion: any[] = [];

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    
   }
   private CargarProfesional(){
    this.http.get('https://cv-marcela-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp: any) => {
        this.profesional = resp;
        console.log(resp);
    });
  }
  private CargarEducacion() {
    this.http.get('https://cv-marcela-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp: any) => {
         this.educacion = resp;
         console.log(resp);

      });



}
 
}
