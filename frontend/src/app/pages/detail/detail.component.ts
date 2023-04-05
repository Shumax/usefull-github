import { GithubService } from './../../services/github.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  $user!: any
  $repos!: any

  displayedColumns: string[] = ['id', 'name', 'url'];
  dataSource: Array<any> = [];
  sizeListTable!: number 

  constructor(
    private userService: UserService, 
    private router: Router,
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.userService.getValueUser().subscribe(data => {
      this.$user = data
      if(!Object.keys(data).length) this.router.navigate([''])
      this.sizeListTable = data?.data?.public_repos
    })

    this.handleFormatTable()
  }

  formatDate(date: string): string {
    return new Date(date).toDateString()
  }

  handlePageEvent(e: PageEvent) {
    this.githubService.repositories(this.$user.data.login,e.pageIndex,10).subscribe(res => {
      this.userService.setValueRepos(res)
    })
    console.log(e)
    this.handleFormatTable()
  }

  handleFormatTable(): void {
    this.userService.getValueRepos().subscribe(data => {
      this.$repos = data

      this.dataSource = []

      this.$repos?.data?.map((el:any) => {
        this.dataSource.push({
          id: el.id,
          name: el.full_name,
          url: el.html_url
        })
      })
    })
    
  }
}
