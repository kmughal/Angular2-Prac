import { Observable } from 'rxjs/Observable';
import {Place} from './place';

export interface ITaxiRankService {
    get(stopPointId:string):Observable<Place[]>;
}