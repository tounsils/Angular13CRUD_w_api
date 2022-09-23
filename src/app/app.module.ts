import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // added 
// to ssolve  { can’t bind to ‘formgroup’ since it isn’t a known property of ‘form’ }     
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
   
import { PostModule } from './post/post.module';
   
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,    //import here
    ReactiveFormsModule, //import here
    BrowserModule,
    AppRoutingModule,
    PostModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }