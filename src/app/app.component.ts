import { Component } from '@angular/core';
import { faSquareXTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChefKnifeStudios.com';
  faSquareXTwitter = faSquareXTwitter;
  faSquareInstagram = faSquareInstagram;
}
