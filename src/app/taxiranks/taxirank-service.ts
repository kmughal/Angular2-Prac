import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {Place} from './place';
import {ITaxiRankService} from './itaxirank-service'

@Injectable()
export class TaxiRankService 
    implements ITaxiRankService
{
    
    constructor(private http:Http) {
        
    }
    
    getUrl = (stopPointId ='940GZZLULVT') => `https://api.tfl.gov.uk/StopPoint/${stopPointId}/TaxiRanks`
    
    get(stopPointId):Observable<Place[]> {
       return this.http.get(this.getUrl(stopPointId)).map(response => <Place[]>(response.json()) );
    }
    
}


