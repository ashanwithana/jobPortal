import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  constructor(public themeService: ThemeService) { }

  // This method will now call the service to change the theme globally
  toggleAppTheme() {
    this.themeService.toggleTheme();
  }
}
