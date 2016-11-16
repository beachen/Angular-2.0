import {Component, OnInit}  from '@angular/core';
import {ClubService}        from './club.service';
import {Club}               from './club';
import {Router}             from '@angular/router';


@Component({
    selector: 'clubs',
    // Use backticks in order to write complete HTML (code completion),
    styleUrls: ['app/club.component.css'],
    templateUrl:'app/club.component.html' ,
    providers:[ClubService] // Tell this component to use injection for the club service
})

//
// Application component
// Everything in the component goes here..
//
export class ClubComponent implements OnInit{

    // One club
    club: Club = {
        id:1,
        name:"Stockholm C"
    };

    // All the clubs
    clubs : Club[];

    selectedClub: Club;

    // Inject the clubService by the construcor
    constructor(private clubService:ClubService, private router:Router){

    }
    getClubs() : void{

        this.clubService.getClubs()
            .then(clubs => this.clubs = clubs);
    }

    // ngOnInit interface
    ngOnInit():void{
        this.getClubs();
    }



    onSelect(club: Club): void {
        this.selectedClub = club;
        console.log(club.name)
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedClub.id]);
    }
}


//
// Class definition
//
//export class Club{
//    id: number;
//    name:string;
//}

