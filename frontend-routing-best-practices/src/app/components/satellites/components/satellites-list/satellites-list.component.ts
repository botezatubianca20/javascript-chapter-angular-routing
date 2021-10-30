import { Component, OnInit } from '@angular/core';
import { ISatellite } from '../../models/ISatellite';
import { SatellitesService } from '../../services/satellites.service';

@Component({
  selector: 'app-satellites-list',
  templateUrl: './satellites-list.component.html',
  styleUrls: ['./satellites-list.component.scss']
})
export class SatellitesListComponent implements OnInit {

  satellites: ISatellite[] = [];

  constructor(private satellitesService: SatellitesService) { }

  ngOnInit(): void {
    this.getAllSatellites();
  }

  private async getAllSatellites() {
    this.satellitesService.getAllSatellites().subscribe((res: any) => {
      this.satellites = res;
    })
  }

}
