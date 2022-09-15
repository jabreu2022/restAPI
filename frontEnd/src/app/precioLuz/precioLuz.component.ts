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
  { date: '15-09-2022', hour: '00-01', price: 419.51, units: '€/Mwh' },
  { date: '15-09-2022', hour: '01-02', price: 434.85, units: '€/Mwh' },
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
  ){
    this.loadData();
  }

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit():void{
    this.dataSource.paginator = this.paginator
  }

  private loadData(){
    this.RestService.getPrice('/v1/prices/all?zone=PCB')
    .subscribe(
      getResponse => {
        let valor1 = {date: getResponse["00-01"]["date"], hour: getResponse["00-01"]["hour"], price: getResponse["00-01"]["price"], units: getResponse["00-01"]["units"]};
        this.dataSource.data.push(valor1)
        let valor2 = {date: getResponse["01-02"]["date"], hour: getResponse["01-02"]["hour"], price: getResponse["01-02"]["price"], units: getResponse["01-02"]["units"]};
        this.dataSource.data.push(valor2)
        let valor3 = {date: getResponse["02-03"]["date"], hour: getResponse["02-03"]["hour"], price: getResponse["02-03"]["price"], units: getResponse["02-03"]["units"]};
        this.dataSource.data.push(valor3)
        let valor4 = {date: getResponse["03-04"]["date"], hour: getResponse["03-04"]["hour"], price: getResponse["03-04"]["price"], units: getResponse["03-04"]["units"]};
        this.dataSource.data.push(valor4)
        let valor5 = {date: getResponse["04-05"]["date"], hour: getResponse["04-05"]["hour"], price: getResponse["04-05"]["price"], units: getResponse["04-05"]["units"]};
        this.dataSource.data.push(valor5)
        let valor6 = {date: getResponse["05-06"]["date"], hour: getResponse["05-06"]["hour"], price: getResponse["05-06"]["price"], units: getResponse["05-06"]["units"]};
        this.dataSource.data.push(valor6)
        let valor7 = {date: getResponse["06-07"]["date"], hour: getResponse["06-07"]["hour"], price: getResponse["06-07"]["price"], units: getResponse["06-07"]["units"]};
        this.dataSource.data.push(valor7)
        let valor8 = {date: getResponse["07-08"]["date"], hour: getResponse["07-08"]["hour"], price: getResponse["07-08"]["price"], units: getResponse["07-08"]["units"]};
        this.dataSource.data.push(valor8)
        let valor9 = {date: getResponse["08-09"]["date"], hour: getResponse["08-09"]["hour"], price: getResponse["08-09"]["price"], units: getResponse["08-09"]["units"]};
        this.dataSource.data.push(valor9)
        let valor10 = {date: getResponse["09-10"]["date"], hour: getResponse["09-10"]["hour"], price: getResponse["09-10"]["price"], units: getResponse["09-10"]["units"]};
        this.dataSource.data.push(valor10)
        let valor11 = {date: getResponse["10-11"]["date"], hour: getResponse["10-11"]["hour"], price: getResponse["10-11"]["price"], units: getResponse["10-11"]["units"]};
        this.dataSource.data.push(valor11)
        let valor12 = {date: getResponse["11-12"]["date"], hour: getResponse["11-12"]["hour"], price: getResponse["11-12"]["price"], units: getResponse["11-12"]["units"]};
        this.dataSource.data.push(valor12)
        let valor13 = {date: getResponse["12-13"]["date"], hour: getResponse["12-13"]["hour"], price: getResponse["12-13"]["price"], units: getResponse["12-13"]["units"]};
        this.dataSource.data.push(valor13)
        let valor14 = {date: getResponse["13-14"]["date"], hour: getResponse["13-14"]["hour"], price: getResponse["13-14"]["price"], units: getResponse["13-14"]["units"]};
        this.dataSource.data.push(valor14)
        let valor15 = {date: getResponse["14-15"]["date"], hour: getResponse["14-15"]["hour"], price: getResponse["14-15"]["price"], units: getResponse["14-15"]["units"]};
        this.dataSource.data.push(valor15)
      }
    )
  }

}
