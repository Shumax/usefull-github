import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  breakpoint: number = 3;

  users!: any
  loading!: boolean

  pg: number = 0
  limit: number = 12

  constructor(private githubService: GithubService) {
    if(window.screen.width < 780) this.breakpoint = 1
  }

  ngOnInit(): void {
    this.githubService.allUsers(this.pg, this.limit).subscribe(res => {
      this.users = res
      this.loading = true
    })
  }

}
