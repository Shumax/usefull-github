import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  productsList: any = [];
  pagedList: any = [];
  breakpoint: number = 3; 
  length: number = 0;
  pageSize: number = 3;  
  pageSizeOptions: number[] = [3, 6, 9, 12];
  pageEvent!: PageEvent
  
  users!: any

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.allUsers().subscribe(res => {
      this.users = res
    })
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }
  
  onResize(event: any) { 
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
}
