import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { PilotService } from './services/pilot.service';
import { PilotDto } from './models/PilotDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  maxLaps: number = 50;
  selectedPilotId: number | null = null;
  pilots: PilotDto[] = [];
  error: string | null = null;
  currentRoute: string = '';

  constructor(private pilotService: PilotService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {
    this.loadPilots();
  }

  loadPilots() {
    this.pilotService.getPilots().subscribe({
      next: (pilots) => {
        this.pilots = pilots;
      },
      error: (err) => {
        this.error = 'Error al cargar los pilotos: ' + (err.message || 'Unknown error');
        console.error(err);
      }
    });
  }

  selectPilot(pilotId: number) {
    this.selectedPilotId = pilotId;
    this.navigateToStrategies();
  }

  navigateToStrategies() {
    if (!this.selectedPilotId || this.maxLaps <= 0) {
      this.error = 'Por favor selecciona un piloto y un número de vueltas válido';
      console.error(this.error);
      return;
    }

    this.error = null;
    this.router.navigate(['/strategies'], {
      queryParams: { maxLaps: this.maxLaps, pilotId: this.selectedPilotId }
    });
  }

  isHomeRoute(): boolean {
    return this.currentRoute === '/' || this.currentRoute === '';
  }
}