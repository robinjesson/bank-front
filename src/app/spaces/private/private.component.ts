import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  constructor(private _router: Router, private route: ActivatedRoute, private _translate: TranslateService) {
    _translate.setDefaultLang('fr');
   }

  ngOnInit(): void {
    this._router.navigate([{ outlets: { drawer: ['notifications'] } }], {relativeTo: this.route})
  }

}