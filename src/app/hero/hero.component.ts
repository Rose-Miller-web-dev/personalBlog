import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{

  heroPost: any
  sidePosts: any
  ngOnInit(): void {
      this.fetchPosts()

      this.sidePosts = this.stringifyDates(this.sidePosts)
  }

  constructor(private apiChild: ApiService) {}

  fetchPosts() {
    this.apiChild.getPosts().subscribe(response => {
      this.heroPost = response.data[0]

      this.sidePosts = response.data.slice(1, 3)

      console.log(this.sidePosts, '#hero')
    })
  }

  stringifyDates(obj: any) {
    for(let i = 0 ; i < obj.length ; i++) {

      obj[i].created_at = "ok"

    }

    return obj
  }
}
