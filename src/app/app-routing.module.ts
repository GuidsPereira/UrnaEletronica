import { CadastroCandidatoComponent } from './views/cadastro-candidato/cadastro-candidato.component';
import { UrnaEletronicaComponent } from './views/urna-eletronica/urna-eletronica.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UrnaEletronicaComponent },
  { path: 'urna-eletronica',component: UrnaEletronicaComponent },
  {path:'candidato-cadastro',component:CadastroCandidatoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
