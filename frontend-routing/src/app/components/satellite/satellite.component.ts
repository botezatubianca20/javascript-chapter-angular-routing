import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISatellite } from '../../models/ISatellite';

@Component({
  selector: 'app-satellite',
  templateUrl: './satellite.component.html',
  styleUrls: ['./satellite.component.scss']
})
export class SatelliteComponent implements OnInit {

  satellite: ISatellite;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("on init", this.route)
    this.satellite = this.route.snapshot.data["satellite"];
  }

}
