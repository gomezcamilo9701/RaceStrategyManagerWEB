import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StrategyDto } from 'src/app/models/StrategyDto';
import { PilotService } from 'src/app/services/pilot.service';
import { StrategyService } from 'src/app/services/strategy.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {
  maxLaps: number = 50;
  pilotName: string = '';
  strategies: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private strategyService: StrategyService,
    private pilotService: PilotService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.maxLaps = +params['maxLaps'] || 0;
      const pilotId = +params['pilotId'] || 0;

      console.log(this.maxLaps)
      console.log(pilotId)
      if (pilotId && this.maxLaps > 0) {
        this.getPilotName(pilotId);
        this.getStrategies(pilotId);
      } else {
        this.error = 'Parametros incorrectos'
      }
    });
  }

  getPilotName(pilotId: number)
  {
    this.pilotService.getPilots().subscribe({ 
      next: (pilots) => {
        const pilot = pilots.find((p: any) => p.id === pilotId);
        this.pilotName = pilot ? pilot.name : '';
      },
      error: () =>{
        this.error = 'Error al obtener el nombre del piloto';
      }
    })
  }

  getStrategies(pilotId: number)
  {
    this.loading = true;
    this.error = null;

    this.strategyService.getOptimalStrategies(this.maxLaps, pilotId).subscribe({
      next: (strategies) => {
        console.log(strategies);
        this.strategies = strategies;
        this.loading = false;
      },
      error:() => {
        this.error = 'Error al obtener las estrategias';
      }
    })
  }

  goBack()
  {
    this.router.navigate(['/'])
  }
}
