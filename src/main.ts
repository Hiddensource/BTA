import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
  document.onreadystatechange=function(){
    if(document.readyState==="complete"){
  var b=document.getElementById("btn");
  var a=document.getElementById("myModal");
  b.addEventListener("click",function(){
     a.style.display="block";
     
  });    
}}

