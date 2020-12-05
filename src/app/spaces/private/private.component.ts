import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  constructor(private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._router.navigate([{ outlets: { drawer: ['notifications'] } }], {relativeTo: this.route})
  }

}
