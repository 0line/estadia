import { Component, OnInit,ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {PostService} from './../../services/post.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'titulo','url','status','acciones'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  posts: Observable<Post[]>;
  constructor(private wp:PostService) {
    this.posts = this.wp.getPost();
    this.posts.subscribe(  
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

}
