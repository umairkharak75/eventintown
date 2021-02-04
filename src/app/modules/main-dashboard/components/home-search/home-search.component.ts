import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from '../../constant';
import { IArtists } from '../../interfaces/events';
import { ArtistService } from '../../serivice/artist.service';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
  options:IArtists[]
  constructor(public artist:ArtistService,public router:Router) {
    this.options=[]
   }

  ngOnInit(): void {
    const artist=this.artist.getArtistDetails()
    if(artist){
      this.options.push(artist)
    }
      }
  
  findEvents(artist:string){
    const url=URLS.FETCH_ARTIST+artist
    console.log(artist)
  this.artist.getArtist(url).subscribe(data=>{
    this.options=[]
this.options.push(data)
this.artist.setArtist(data)
    console.log(data)})
}
seeEventDetails(name:string){
  this.router.navigateByUrl(`/events/${name}`)
}

}
