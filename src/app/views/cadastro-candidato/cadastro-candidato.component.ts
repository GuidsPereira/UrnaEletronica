import { CadastroCandidatoService } from './../../services/cadastro-candidato.services';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './../../components/dialog/dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Candidato } from 'src/app/models/candidado';

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.css'],
  providers: [CadastroCandidatoService],
})
export class CadastroCandidatoComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = [
    'id',
    'nomeCompleto',
    'nomeVice',
    'dataRegistro',
    'legenda',
    'action',
  ];
  dataSource: Candidato[] = [];

  constructor(
    public dialog: MatDialog,
    public cadastroCandidatoService: CadastroCandidatoService
  ) {}

  ngOnInit(): void {
    this.cadastroCandidatoService.getCandidatos().subscribe((resp) => {
      this.dataSource = resp;
    });
  }
  openDialog(candidato: Candidato | null): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data:
        candidato === null
          ? {
              id: '',
              candidato: '',
              vice: '',
              dataRegistro: '',
              legenda: '',
            }
          : candidato,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        console.log(result);
        if (
          this.dataSource
            .map((c) => c.nomeCompleto)
            .includes(result.nomeCompleto)
        ) {
          this.dataSource[result.candidato - 1] = result;
          this.table.renderRows();
        } else {
          this.cadastroCandidatoService
            .creatCandidato(result)
            .subscribe((data: Candidato) => {
              this.dataSource.push(result);
              this.table.renderRows();
            });
        }
      }
    });
  }
  deleteCandidato(id: string): void {
    this.cadastroCandidatoService.deleteCandidato(id).subscribe(() => {
      this.dataSource = this.dataSource.filter((p) => p.id !== p.id);
    });
  }
  getDateString(registro: Candidato) {
    return new Date(registro.dataRegistro).toLocaleDateString('pt-BR');
  }
}
