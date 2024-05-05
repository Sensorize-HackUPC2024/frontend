import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrige el nombre de la propiedad aquí de 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'frontend';
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  toggleMenu() {
    console.log("Toggling menu");
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate(path: string) {
    this.router.navigate([path]);
    this.isMenuOpen = false; // Opcional: cierra el menú después de navegar
  }
}
