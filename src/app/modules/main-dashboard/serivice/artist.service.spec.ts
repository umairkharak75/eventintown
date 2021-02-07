import { TestBed } from '@angular/core/testing';

import { ArtistService } from './artist.service';
import { HttpClient, HttpClientModule, HttpRequest } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { URLS } from '../constant';
import { environment } from 'src/environments/environment';

describe('ArtistService', () => {
  let httpClient: HttpClient;

  let artistService: ArtistService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      
    providers: [ArtistService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    artistService = TestBed.inject(ArtistService);   


  });
 
  fit('getEvents() should call http Get method for the given route', () => {
    
    //Arrange
    //Set Up Data 
    let event = [
      {
        "id": "13722599",
        "artist_id": "438314",
        "url": "http://www.bandsintown.com/event/13722599?app_id=foo&artist=Skrillex&came_from=67",
        "on_sale_datetime": "2017-03-01T18:00:00",
        "datetime": "2017-03-19T11:00:00",
        "description": "This is a description",
        "venue": {
          "name": "Encore Beach Club",
          "latitude": "36.12714",
          "longitude": "-115.1629562",
          "city": "Las Vegas",
          "region": "NV",
          "country": "United States"
        },
        "offers": [
          {
            "type": "Tickets",
            "url": "http://www.bandsintown.com/event/13722599/buy_tickets?app_id=foo&artist=Skrillex&came_from=67",
            "status": "available"
          }
        ],
        "lineup": [
          "string"
        ]
      }
    ] 
    //Act
    artistService.getEvents('/artists/xyz/events').subscribe((res)=>{
      //Assert-1
      expect(res).toEqual(event);
 
    });
     
    //Assert -2
    const req = httpTestingController.expectOne(`${environment.backEndUrl}/artists/xyz/events?app_id=${environment.app_id}`);
   expect(req.request.method).toEqual('GET')
    //Assert -3
    req.flush(event)
    httpTestingController.verify();
 
  });

  fit('getArtists() should call http Get method for the given route', () => {
    
    //Arrange
    //Set Up Data 
    let artsit = {
      "id": 510,
      "name": "Maroon 5",
      "url": "http://www.bandsintown.com/Maroon5?came_from=67",
      "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
      "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
      "facebook_page_url": "https://www.facebook.com/maroon5",
      "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
      "tracker_count": 0,
      "upcoming_event_count": 0
    }
    //Act
    artistService.getEvents('/artists/xyz').subscribe((res)=>{
      //Assert-1
      expect(res).toEqual(artsit);
 
    });
     
    //Assert -2
    const req = httpTestingController.expectOne(`${environment.backEndUrl}/artists/xyz?app_id=${environment.app_id}`);
   expect(req.request.method).toEqual('GET')
    //Assert -3
    req.flush(artsit)
    httpTestingController.verify();
 
  });

});
