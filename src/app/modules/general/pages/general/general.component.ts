import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PostModel} from "../../../../shared/models";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {PostService} from "@shared/services";
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
  ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent implements OnInit {
  data: any = [];
  isFeching: boolean = false;
  error = null;
  icon = faTrashAlt;
  defaultAlbumTitleImg: string = 'https://krliman.gov.ua/content/img/parts/default-img-1x1.png'

  constructor(private http: HttpClient,
              private cdr: ChangeDetectorRef,
              private router :Router,
              private route :ActivatedRoute,
              private postServise: PostService) {
  }

  ngOnInit(): void {
    this.fetchData()
    console.log(Date.now())
  }

  private fetchData() {
    this.isFeching = true
    this.postServise.fetchPost()
      .subscribe((responseData: any) => {
          this.data = responseData;
          this.isFeching = false
          console.log(responseData)
          this.cdr.detectChanges();

        },
        (error: any) => {
          this.error = error.message;
          this.isFeching = false
          this.cdr.detectChanges();
        }
      )
  }

  navigate(i: number) {
    this.router.navigate( ['../gallery'] ,{relativeTo:this.route})
  }

  delete() {
    this.postServise.delPost('5')
      .subscribe((responseData) => {
          this.data = responseData;
          this.fetchData()
        }, error => {
          this.error = error.message

        }
      )

  }
}
