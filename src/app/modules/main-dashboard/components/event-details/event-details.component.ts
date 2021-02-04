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
  allEvents:IEvents[]=[]
  artistDetails:IArtists
  hasSpinner:boolean=true
  constructor(private activatedRoute: ActivatedRoute,public artist:ArtistService ,public location:  Location,public spinner:NgxSpinnerService) { 
  }

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
  backToSearch(){
this.location.back()
  }

}
