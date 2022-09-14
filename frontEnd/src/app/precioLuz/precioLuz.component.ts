import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';


@Component({
  selector: 'app-precioLuz',
  templateUrl: './precioLuz.component.html',
  styleUrls: ['./precioLuz.component.css']
})
export class PrecioLuzComponent implements OnInit {

  columnas: string[] = ['Horario', 'Precio', 'Poner Labadora'];

  listPrices:Array<any> =[]

  constructor(
    private RestService:RestService
  ){

  }

  ngOnInit():void{
    this.loadData();
  }

  public loadData(){
    this.RestService.getPrice('/v1/prices/all?zone=PCB')
    .subscribe(
      getResponse => {
        let valor1 = getResponse["00-01"];
        this.listPrices.push(valor1)
        let valor2 = getResponse["01-02"];
        this.listPrices.push(valor2)
        let valor3 = getResponse["02-03"];
        this.listPrices.push(valor3)
        let valor4 = getResponse["03-04"];
        this.listPrices.push(valor4)
        let valor5 = getResponse["04-05"];
        this.listPrices.push(valor5)
        let valor6 = getResponse["05-06"];
        this.listPrices.push(valor6)
        let valor7 = getResponse["06-07"];
        this.listPrices.push(valor7)
        let valor8 = getResponse["07-08"];
        this.listPrices.push(valor8)
        let valor9 = getResponse["09-10"];
        this.listPrices.push(valor9)
        let valor10 = getResponse["10-11"];
        this.listPrices.push(valor10)
        let valor11 = getResponse["11-12"];
        this.listPrices.push(valor11)
        let valor12 = getResponse["12-13"];
        this.listPrices.push(valor12)
        let valor13 = getResponse["13-14"];
        this.listPrices.push(valor13)
        let valor14 = getResponse["14-15"];
        this.listPrices.push(valor14)
        let valor15 = getResponse["15-16"];
        this.listPrices.push(valor15)
        let valor16 = getResponse["16-17"];
        this.listPrices.push(valor16)
        let valor17 = getResponse["17-18"];
        this.listPrices.push(valor17)
        let valor18 = getResponse["18-19"];
        this.listPrices.push(valor18)
        let valor19 = getResponse["19-20"];
        this.listPrices.push(valor19)
        let valor20 = getResponse["20-21"];
        this.listPrices.push(valor20)
        let valor21 = getResponse["21-22"];
        this.listPrices.push(valor21)
        let valor22 = getResponse["22-23"];
        this.listPrices.push(valor22)
        let valor23 = getResponse["23-24"];
        this.listPrices.push(valor23)
      }
    )
  }

}
