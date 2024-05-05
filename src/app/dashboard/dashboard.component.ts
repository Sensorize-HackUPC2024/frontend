import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../enviroments/enviroment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  
})
export class DashboardComponent implements OnInit {
  grafanaPanelUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Asegúrate de ajustar la URL base y los parámetros según tu configuración específica de Grafana
    const baseDashboardUrl = environment.grafanaUrl + "/d/adkoln1fgd0jka/new-dashboard";
    const queryParams = "?orgId=1&from=1714817788390&to=1714839388390&theme=light&kiosk&embed=true&refresh=5s";
    const panelUrl = baseDashboardUrl + queryParams;
    this.grafanaPanelUrl = this.sanitizer.bypassSecurityTrustResourceUrl(panelUrl);
  }
  
}
