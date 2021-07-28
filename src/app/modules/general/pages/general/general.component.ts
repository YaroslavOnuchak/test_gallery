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
  data: PostModel[]=[]

  constructor(private http: HttpClient,
              private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.http.get<{ [key: string]: PostModel }>(
      'https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/album.json')
      .pipe(
        map(responseData => {
            const postArray = [];
            for (let key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postArray.push({...responseData[key], id: key})
              }
            }
            return postArray;
          }
        )
      )
      .subscribe(responseData => {
          this.data = responseData;
        this.cdr.detectChanges();
          // console.log(' this.data ==> ', this.data)
        }
      )
  }
}
