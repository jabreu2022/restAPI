import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

//angular componentes
import { PrecioLuzComponent } from './precioLuz/precioLuz.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [			
    AppComponent,
    PrecioLuzComponent,
    LoginComponent
   ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
