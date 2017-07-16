import { Input , Component,HostBinding,HostListener } from '@angular/core';
import {TaxiRankService} from './taxirank-service';
import {ITaxiRankService} from './itaxirank-service';

import {Place} from './Place';


@Component({
    selector : 'taxi-rank',
    templateUrl :'taxirank-view.html',
    providers : [TaxiRankService] ,
    styleUrls : ["./taxi-rank.css"]
})
export class TaxiRankComponent {
    taxiRanks:Array<Place>;
    stopPointId:string;
    @HostBinding("class.isVisible")
    @Input() controlName : string;
    
    
    constructor(private tr:TaxiRankService) {
        
    }
    @HostListener("click" ,["$event.target"])
    onClick(e){
        console.log("--i am clicked --",e);
    }
    getTaxiRank() {
        this.tr.get(this.stopPointId).subscribe(response => {this.taxiRanks = response;});
    }
}
