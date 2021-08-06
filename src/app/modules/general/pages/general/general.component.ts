import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PostModel} from "../../../../shared/models";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
  , changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent implements OnInit {
  data: any = []
  isFeching: boolean = false

  constructor(private http: HttpClient,
              private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.fetchData()
  }

  private fetchData() {
    this.isFeching = true
    this.http.get<{ [key: string]: any }>(
      'https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/album.json')
      .pipe(
        map(responseData => {
            const postArray = [];
            for (let key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postArray.push({...responseData[key]})
              }
            }
            return postArray;
          }
        )
      )
      .subscribe(responseData => {
          this.data = responseData;
          this.isFeching = false
          this.cdr.detectChanges();
          console.log(' this.data ==> ', this.data)
        }
      )
  }
}
