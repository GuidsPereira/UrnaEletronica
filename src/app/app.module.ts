
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import  localePt  from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatFormFieldModule, } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CadastroCandidatoComponent } from './views/cadastro-candidato/cadastro-candidato.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';





@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    CadastroCandidatoComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,




  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
