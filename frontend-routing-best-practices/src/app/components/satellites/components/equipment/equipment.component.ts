import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEquipment } from '../../models/IEquipment';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  equipment: IEquipment;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.equipment = this.route.snapshot.data["equipment"];
  }

}
