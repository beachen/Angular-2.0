import { Component, OnInit} from '@angular/core';
import {Club} from './club';
import {ClubService} from './club.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: '/app/dashboard.component.html'
})
export class DashboardComponent {
    clubs : Club[] = []; // empty

    constructor(private clubService: ClubService) { }

    ngOnInit(): void {
        this.clubService.getClubs()
            .then(clubs => this.clubs = clubs.slice(1, 5));
    }
}