import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEquipment } from '../../models/IEquipment';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  equipments: IEquipment[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.equipments = this.route.snapshot.data["equipments"];
  }

}
