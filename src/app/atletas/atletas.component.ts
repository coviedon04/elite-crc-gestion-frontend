import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-atletas',
  templateUrl: './atletas.component.html',
  styleUrls: ['./atletas.component.css']
})
export class AtletasComponent implements OnInit {
  atletas: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>('https://localhost:3000/api/clientes/D92ECA8E-06F2-4F1B-BAEE-8EC42CEC6BD7/atletas', { headers })
      .subscribe({
        next: (data) => {
          this.atletas = data;
          this.errorMessage = '';
        },
        error: (error) => {
          this.errorMessage = 'Error al cargar los atletas. Asegúrate de estar autenticado y tener los permisos necesarios.';
          console.error('Error al cargar los atletas:', error);
        }
      });
  }
}
//D92ECA8E-06F2-4F1B-BAEE-8EC42CEC6BD7