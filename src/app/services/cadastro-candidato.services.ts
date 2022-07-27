import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from '../models/candidado';

@Injectable()
export class CadastroCandidatoService {
  urnaEletronicaApiUrl=' https://localhost:7113/candidato'
  constructor(private http: HttpClient) { }

  getCandidatos():Observable<Candidato[]>{
    return this.http.get<Candidato[]>(this.urnaEletronicaApiUrl)
  }
  creatCandidato(candidato:Candidato):Observable<Candidato>{
    return this.http.post<Candidato>(this.urnaEletronicaApiUrl,candidato);
  }

  deleteCandidato(id:string):Observable<any>{
    return this.http.delete<any>(`${this.urnaEletronicaApiUrl}?id=${id}`);
  }
}
