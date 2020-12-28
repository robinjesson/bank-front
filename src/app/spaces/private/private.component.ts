import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.less']
})
export class PrivateComponent implements OnInit {

  public lastModified: Date =  new Date(document.lastModified);;

  constructor(private _router: Router, private route: ActivatedRoute, private _translate: TranslateService) {
    _translate.setDefaultLang('fr');
   }

  ngOnInit(): void {
    this._router.navigate([{ outlets: { drawer: ['user'] } }], {relativeTo: this.route})
  }

}
