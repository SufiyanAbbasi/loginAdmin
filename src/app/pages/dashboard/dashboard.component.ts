import { CommonModule, DecimalPipe} from '@angular/common';
import { Component, PipeTransform } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook, faBorderAll, faClipboardUser, faContactBook, faDashboard, faDollar, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons';
import { Observable, } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
interface List {
  id: number;
  icon: any; // Replace 'any' with the correct type for 'this.dollor'
  color: string;
  title: string;
  numbers: string;
}
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}
interface Ioverlist {
  icon: any;
  numbers: string,
  type: string,
  color: string,
  bgcolor: string
}
// function search(text: string, pipe: PipeTransform, countries: Country[]): Country[] {
//   return countries.filter((country) => {
//     const term = text.toLowerCase();
//     return (
//       country.name.toLowerCase().includes(term) ||
//       pipe.transform(country.area).includes(term) ||
//       pipe.transform(country.population).includes(term)
//     );
//   });
// }
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, NgbHighlight, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DecimalPipe],  // <-- Add DecimalPipe here
})
export class DashboardComponent {

  dashboard = faDashboard;
  dollor = faDollar;
  contact = faContactBook;
  tool = faToolbox;
  book = faBook;
  user = faUser;
  orders = faBorderAll;
  timer = faClipboardUser
  i: any = 0;


  countries$: Observable<Country[]>;
  filter = new FormControl('', { nonNullable: true });

  constructor(private decimalPipe: DecimalPipe) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => this.search(text, this.decimalPipe, this.countries)),
    );
  }
  list: List[] = [
    {
      id: 1,
      icon: this.dollor,
      color: '#FF6A99',
      title: 'Income',
      numbers: 'AED4252.5'
    },
    {
      id: 2,
      icon: this.contact,
      color: '#FEC000',
      title: 'Users',
      numbers: '668'
    },
    {
      id: 3,
      icon: this.book,
      color: '#1CC9FF',
      title: 'products',
      numbers: '48'
    },
    {
      id: 4,
      icon: this.tool,
      color: '#40E5D4',
      title: 'services',
      numbers: '30'
    },
  ]

  overviewList : Ioverlist[] = [
    {
      icon: this.user,
      numbers: '668',
      type: 'Users',
      color: '#A968FF',
      bgcolor: '#EEE1FF'
    },
    {
      icon: this.orders,
      numbers: '14',
      type: 'Orders',
      color: '#40E5D4',
      bgcolor: '#E1FFFC'
    },
    {
      icon: this.timer,
      numbers: '44',
      type: 'Pending',
      color: '#FF6B99',
      bgcolor: '#FFECF2'
    },
    {
      icon: this.user,
      numbers: '668',
      type: 'Users',
      color: '#A968FF',
      bgcolor: '#EEE1FF'
    },
    {
      icon: this.orders,
      numbers: '14',
      type: 'Orders',
      color: '#40E5D4',
      bgcolor: '#E1FFFC'
    },
    {
      icon: this.timer,
      numbers: '44',
      type: 'Pending',
      color: '#FF6B99',
      bgcolor: '#FFECF2'
    },
  ]


  countries : Country[] = [
    {
      name: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754,
    },
    {
      name: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199,
    },
    {
      name: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463,
    },
    {
      name: 'China',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397,
    },
  ];
  search(text: string, pipe: PipeTransform, countries: Country[]): Country[] {
    return countries.filter((country) => {
      const term = text.toLowerCase();
      return (
        country.name.toLowerCase().includes(term) ||
        pipe.transform(country.area).includes(term) ||
        pipe.transform(country.population).includes(term)   

      );
    });
  }
}


