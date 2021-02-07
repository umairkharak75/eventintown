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
  /**
     * @ignore
     */
  artists:IArtists[]
  constructor(public artist:ArtistService,public router:Router) {
    this.artists=[]
   }

  ngOnInit(): void {
    const artist=this.artist.getArtistDetails()
    if(artist){
      this.artists.push(artist)
    }
      }


  /**
 * this function will be triggerd when input is made of search component 
 * and will hit api to fetch artist for searh keywords
 * @params artist:string
 */
  findEvents(artist:string){
    const url=URLS.FETCH_ARTIST+artist
    console.log(artist)
  this.artist.getArtist(url).subscribe(data=>{
    this.artists=[]
this.artists.push(data)
this.artist.setArtist(data)
    console.log(data)})
}

/**
 * this function will navigate to component to show events details for selected artist 
 * @params name:string
 */
seeEventDetails(name:string){
  this.router.navigateByUrl(`/events/${name}`)
}

}
