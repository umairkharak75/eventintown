import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../serivice/artist.service';
import { NgxSpinnerService } from "ngx-spinner";
import { IArtists, IEvents } from '../../interfaces/events';
import { URLS } from '../../constant';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  /**
     * @ignore
     */
  allEvents:IEvents[]=[]
  /**
     * @ignore
     */
  artistDetails:IArtists
  /**
     * @ignore
     */
  hasSpinner:boolean=true
  constructor(private activatedRoute: ActivatedRoute,public artist:ArtistService ,public location:  Location,public spinner:NgxSpinnerService) { 
  }
 /**
 * in ngOnInit method .api to fetch all event is being called 
 * for artist
 */
  ngOnInit(): void {
   
    this.spinner.show();
    this.artistDetails =this.artist.getArtistDetails()  
    const name=this.activatedRoute.snapshot.params.name; 
   const url=URLS.FETCH_EVENTS(name)
   this.artist.getEvents(url).subscribe(events=>{
    events.forEach(event => {
  
      this.allEvents.push({
        city:event.venue.city,
        country:event.venue.country,
        name:event.venue.country,
        datetime:event.datetime
      })
});
    
    this.spinner.hide();
    this.hasSpinner=false
   })

  }
  /**
 * this function will return to previous activated route
 * 
 */
  backToSearch(){
this.location.back()
  }

}
