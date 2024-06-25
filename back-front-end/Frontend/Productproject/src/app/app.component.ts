import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

routeToLink(link: string) {
 this.route.navigate(['/'+ link]);
}
  title = 'Productproject';
  constructor(private route: Router)
{
}
// openPage(str: string):void
// {
//   this.route.navigate(['/'+str]);
// }

}
