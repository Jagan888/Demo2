import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { service } from './services/service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ProjectsComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    [
AngularFireModule.initializeApp(environment.firebase),
    ],
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [service],
  bootstrap: [AppComponent]
})
export class AppModule { }
