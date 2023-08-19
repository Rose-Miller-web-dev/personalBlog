import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit{
    ngOnInit(): void {
      this.addPost()

      this.fetchPosts()
      this.fetchCategories()
    }

    postCategories: any
    postList: any
    constructor (private apiChild: ApiService) {}

    fetchPosts() {
      this.apiChild.getPosts().subscribe(response => {
        this.postList = response
        console.log(this.postList, '#posts')
      })
    }

    fetchCategories() {
      this.apiChild.getCategories().subscribe(response => {
        this.postCategories = response.data
        console.log(this.postCategories, '#categories')
      })
    }

    addPost () {
      this.apiChild.addPost({"username": "rose", "password":"123"})
    }
}
