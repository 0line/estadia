import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs';
import {Page} from './../../models/page';
import { PageService } from 'src/app/services/page.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'titulo','url','status','acciones'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  Page: Observable<Page[]>;
  constructor(private wp: PageService) {
    this.Page = this.wp.getPages();
    this.Page.subscribe(  
      x => {  
      this.dataSource = new MatTableDataSource();  
      this.dataSource.data = x;  
      this.dataSource.paginator=this.paginator;
      console.log(this.dataSource.data);
      },  
      error => {  
      console.log('There was an error while retrieving Usuarios!' + error);  
      });
  }

  ngOnInit() {
  }

  changeContentBuilder(){

  }

}
