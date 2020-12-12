import { Component, OnInit } from '@angular/core';
import { IdService } from 'src/app/shared/services/id.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public idToRemove: number;
  constructor(
    private idService: IdService
  ) { }

  ngOnInit(): void {
  }

  onNew() {
    this.idService.nextId
  }

  onRemove() {
    this.idService.removeId(this.idToRemove);
  }


}
