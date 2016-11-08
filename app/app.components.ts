import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    // Use backticks in order to write complete HTML (code completion),
    // CSS goes here
    styles: [`
          .selected {
            background-color: #CFD8DC !important;
            color: white;
          }
          .clubs {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
          }
          .clubs li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
          }
          .clubs li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
          }
          .clubs li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
          }
          .clubs .text {
            position: relative;
            top: -3px;
          }
          .clubs .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
          }
    `],
    // HTML goes here
    template: `
            <h1>{{title}}</h1>
            <h2>Tennis klubbar i Stockholm</h2> 
            <h3>{{club.id}} {{club.name}}</h3>
            <div>
                <label>Klubb:</label>
                 <input [(ngModel)]="club.name" placeholder="Klubb">
                 
                 <ul class="clubs">
                     <li *ngFor="let club of clubs">
                        <span class="badge">{{club.id}}</span> {{club.name}}
                      </li>
                 </ul>
                 
            </div>
        `
})

//
// Application component
// Everything in the component goes here..
//
export class AppComponent {

    // One club
    club: Club = {
        id:1,
        name:"Mälarhöjden IK"
    };

    // Many clubs
    clubs = CLUBS;
}

/** Static content **/
const CLUBS: Club[] = [
    { id: 1, name: 'Mälarhöjden IK' },
    { id: 2, name: 'SALK' },
    { id: 3, name: 'Solna TK' },
    { id: 4, name: 'Stockholms TK' }
];

//
// Class definition
//
export class Club{
    id: number;
    name:string;
}

