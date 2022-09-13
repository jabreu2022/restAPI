import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';


@Component({
  selector: 'app-precioLuz',
  templateUrl: './precioLuz.component.html',
  styleUrls: ['./precioLuz.component.css']
})
export class PrecioLuzComponent implements OnInit {

  public listPrices:Array<any>= []

  constructor(
    private RestService:RestService
  ){

  }

  ngOnInit():void{
    this.loadData();
    console.log("estoy aqui");
    console.log(this.listPrices);
  }

  public loadData(){
    this.RestService.getPrice('/v1/prices/all?zone=PCB')
    .subscribe(
      getResponse => {
        this.listPrices = getResponse;
        console.log(getResponse);
        console.log("proceso de lectura terminado");
      }
    )
  }

}
