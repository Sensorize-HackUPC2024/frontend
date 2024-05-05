import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { ActuatorsService } from '../actuators.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { environment } from '../../enviroments/enviroment';


@Component({
  selector: 'app-devices',
  standalone: true,
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  imports: [MatCardModule, MatIconModule, HttpClientModule, CommonModule] // Añade HttpClientModule aquí
})
export class DevicesComponent implements OnInit {
  windowOpen: boolean = false;
  fanOn: boolean = false;
  heatOn: boolean = false;
  lightsOn: boolean = false;
  partyOn: boolean = false;
  constructor(private actuatorService: ActuatorsService) {}

  ngOnInit() {
    
  }

  onLightsClick() {
    let lightState = 0;
    if (this.lightsOn) {
      lightState = 0;
      this.lightsOn = false;
    } else {
      lightState = 1;
      this.lightsOn = true;
    }
    this.actuatorService.actuate('lights', 1, lightState).subscribe({
      next: (response) => {
        console.log('Lights', response);
      },
      error: (error) => {
        console.error('Error starting lights:', error);
      }
    });     
  }

  onFanClick() {
    let fanState = 0;
    if (this.fanOn) {
      fanState = 0;
      this.fanOn = false;
    } else {
      fanState = 1;
      this.fanOn = true;
    }
    this.actuatorService.actuate('fans', 1, fanState).subscribe({
      next: (response) => {
        console.log('Fans:', response);
      },
      error: (error) => {
        console.error('Error starting fans:', error);
      }
    });
  }

  onHeatClick() {
    let heatState = 0;
    if (this.heatOn) {
      heatState = 0;
      this.heatOn = false;
    } else {
      heatState = 1;
      this.heatOn = true;
    }
    this.actuatorService.actuate('heat', 1, heatState).subscribe({
      next: (response) => {
        console.log('Heat', response);
      },
      error: (error) => {
        console.error('Error starting heat:', error);
      }
    });
  }

  onPartyClick() {
    let partyState = 0;
    if (this.partyOn) {
      partyState = 0;
      this.partyOn = false;
    } else {
      partyState = 1;
      this.partyOn = true;
    }
    this.actuatorService.actuate('party', 1, partyState).subscribe({
      next: (response) => {
        console.log('Party', response);
      },
      error: (error) => {
        console.error('Error starting party:', error);
      }
    });
  }
}
