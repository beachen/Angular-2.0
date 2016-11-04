import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    // Use backticks in order to write complete HTML (code completion)
    template: `
        <h1>{{title}}</h1>
        <h2>Tennis klubbar i Stockholm</h2> 
        <h3>{{club.id}} {{club.name}}</h3>
        <div>
            <label>Klubb:</label>
             <input [(ngModel)]="club.name" placeholder="Klubb">
        </div>
        `
})
//
// Application component
//
export class AppComponent {

    club: Club = {
        id:1,
        name:"Mälarhöjden IK"
    };
}
//
// Class definition
//
export class Club{
    id: number;
    name:string;
}
