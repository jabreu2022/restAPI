import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface PriceElements {
  date: string;
  hour: string;
  price: number;
  units: string;
}

const ELEMENT_DATA: PriceElements[] = [
  { date: '15-09-2022', hour: '00', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '01', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '02', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '03', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '04', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '05', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '06', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '07', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '08', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '09', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '10', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '11', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '12', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '13', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '14', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '15', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '16', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '17', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '18', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '19', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '20', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '21', price: 434.85, units: '€/Mwh' },
  { date: '15-09-2022', hour: '22', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '23', price: 434.85, units: '€/Mwh' },
];


@Component({
  selector: 'app-precioLuz',
  templateUrl: './precioLuz.component.html',
  styleUrls: ['./precioLuz.component.css']
})

export class PrecioLuzComponent implements AfterViewInit {

  displayedColumns: string[] = ['date','hour', 'price','units'];
  dataSource = new MatTableDataSource<PriceElements>;


  constructor(
    private RestService:RestService
  ){}

  @ViewChild(MatPaginator) paginator: any;

  ngOnInit(): void {
    this.loadData();
  }
  
  ngAfterViewInit():void{
    this.dataSource.paginator = this.paginator
  }

  private loadData(){
    const priceData: PriceElements[] =[];

    this.RestService.getPrice('/v1/prices/all?zone=PCB')
    .subscribe(
      getResponse => {
        //Testeo del primer valor
        let valor1 = {date: getResponse["00-01"]["date"], hour: getResponse["00-01"]["hour"], price: getResponse["00-01"]["price"], units: getResponse["00-01"]["units"]};
        this.dataSource.data.push(valor1)
        
        //
        let valor2 = {date: getResponse["01-02"]["date"], hour: getResponse["01-02"]["hour"], price: getResponse["01-02"]["price"], units: getResponse["01-02"]["units"]};
        priceData.push(valor2)
        let valor3 = {date: getResponse["02-03"]["date"], hour: getResponse["02-03"]["hour"], price: getResponse["02-03"]["price"], units: getResponse["02-03"]["units"]};
        priceData.push(valor3)
        let valor4 = {date: getResponse["03-04"]["date"], hour: getResponse["03-04"]["hour"], price: getResponse["03-04"]["price"], units: getResponse["03-04"]["units"]};
        priceData.push(valor4)
        let valor5 = {date: getResponse["04-05"]["date"], hour: getResponse["04-05"]["hour"], price: getResponse["04-05"]["price"], units: getResponse["04-05"]["units"]};
        priceData.push(valor5)
        let valor6 = {date: getResponse["05-06"]["date"], hour: getResponse["05-06"]["hour"], price: getResponse["05-06"]["price"], units: getResponse["05-06"]["units"]};
        priceData.push(valor6)
        let valor7 = {date: getResponse["06-07"]["date"], hour: getResponse["06-07"]["hour"], price: getResponse["06-07"]["price"], units: getResponse["06-07"]["units"]};
        priceData.push(valor7)
        let valor8 = {date: getResponse["07-08"]["date"], hour: getResponse["07-08"]["hour"], price: getResponse["07-08"]["price"], units: getResponse["07-08"]["units"]};
        priceData.push(valor8)
        let valor9 = {date: getResponse["08-09"]["date"], hour: getResponse["08-09"]["hour"], price: getResponse["08-09"]["price"], units: getResponse["08-09"]["units"]};
        priceData.push(valor9)
        let valor10 = {date: getResponse["09-10"]["date"], hour: getResponse["09-10"]["hour"], price: getResponse["09-10"]["price"], units: getResponse["09-10"]["units"]};
        priceData.push(valor10)
        let valor11 = {date: getResponse["10-11"]["date"], hour: getResponse["10-11"]["hour"], price: getResponse["10-11"]["price"], units: getResponse["10-11"]["units"]};
        priceData.push(valor11)
        let valor12 = {date: getResponse["11-12"]["date"], hour: getResponse["11-12"]["hour"], price: getResponse["11-12"]["price"], units: getResponse["11-12"]["units"]};
        priceData.push(valor12)
        let valor13 = {date: getResponse["12-13"]["date"], hour: getResponse["12-13"]["hour"], price: getResponse["12-13"]["price"], units: getResponse["12-13"]["units"]};
        priceData.push(valor13)
        let valor14 = {date: getResponse["13-14"]["date"], hour: getResponse["13-14"]["hour"], price: getResponse["13-14"]["price"], units: getResponse["13-14"]["units"]};
        priceData.push(valor14)
        let valor15 = {date: getResponse["14-15"]["date"], hour: getResponse["14-15"]["hour"], price: getResponse["14-15"]["price"], units: getResponse["14-15"]["units"]};
        priceData.push(valor15)
        let valor16 = {date: getResponse["15-16"]["date"], hour: getResponse["15-16"]["hour"], price: getResponse["15-16"]["price"], units: getResponse["15-16"]["units"]};
        priceData.push(valor16)
        let valor17 = {date: getResponse["16-17"]["date"], hour: getResponse["16-17"]["hour"], price: getResponse["16-17"]["price"], units: getResponse["16-17"]["units"]};
        priceData.push(valor17)
        let valor18 = {date: getResponse["17-18"]["date"], hour: getResponse["17-18"]["hour"], price: getResponse["17-18"]["price"], units: getResponse["17-18"]["units"]};
        priceData.push(valor18)
        let valor19 = {date: getResponse["18-19"]["date"], hour: getResponse["18-19"]["hour"], price: getResponse["18-19"]["price"], units: getResponse["18-19"]["units"]};
        priceData.push(valor19)
        let valor20 = {date: getResponse["19-20"]["date"], hour: getResponse["19-20"]["hour"], price: getResponse["19-20"]["price"], units: getResponse["19-20"]["units"]};
        priceData.push(valor20)
        let valor21 = {date: getResponse["20-21"]["date"], hour: getResponse["20-21"]["hour"], price: getResponse["20-21"]["price"], units: getResponse["20-21"]["units"]};
        priceData.push(valor21)
        let valor22 = {date: getResponse["21-22"]["date"], hour: getResponse["21-22"]["hour"], price: getResponse["21-22"]["price"], units: getResponse["21-22"]["units"]};
        priceData.push(valor22)
        let valor23 = {date: getResponse["22-23"]["date"], hour: getResponse["22-23"]["hour"], price: getResponse["22-23"]["price"], units: getResponse["22-23"]["units"]};
        priceData.push(valor23)
      }
    )
  }

}
