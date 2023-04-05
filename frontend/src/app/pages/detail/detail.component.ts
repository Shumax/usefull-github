import { Component, OnInit, AfterViewInit } from '@angular/core';
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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getValueUser().subscribe(data => {
      this.$user = data
      console.log(data)

      if(!Object.keys(data).length) this.router.navigate([''])

    })

    this.userService.getValueRepos().subscribe(data => {
      this.$repos = data
      
      this.$repos?.data?.map((el:any) => {
        console.log(el.id)
        this.dataSource.push({
          id: el.id,
          name: el.full_name,
          url: el.html_url
        })
      })
    })

  }


  formatDate(date: string): string {
    return new Date(date).toDateString()
  }
}
