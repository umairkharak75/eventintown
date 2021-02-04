import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/service/api.service';
import { IArtists } from '../interfaces/events';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  artistDetails:IArtists
  constructor(public api:ApiService) { }

  getArtist(url:string) :Observable<any>{
return this.api.getData(url)
  }
  getEvents(url): Observable<any>{
    return this.api.getData(url)
  }
 
 
setArtist(artist) {
  this.artistDetails=artist
  
}
getArtistDetails(){
  return this.artistDetails
}
}