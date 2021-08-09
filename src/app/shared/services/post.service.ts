import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";
import {PostModel} from "../models";
import {Subject, throwError} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  error = new Subject<string>()

  constructor(private http: HttpClient,
              // private cdr: ChangeDetectorRef
  ) {
  }

  createPost(data: PostModel) {
    this.http.post<{ name: string }>(
      'https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/album.json',
      data,
      {
        observe:'response'
      })
      // .pipe(map(res => {
      //   data.id = res.name
      //
      // }))
      .subscribe(res => {
        console.log(res)
    }, error => {
      this.error.next(error.message)
    })
    // https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/
  }

  fetchPost(): any {
    let searchParaam = new HttpParams()
    searchParaam = searchParaam.append('print', 'pretty1')
    searchParaam = searchParaam.append('custom', 'key')
    return this.http.get<{ [key: string]: PostModel }>(
      'https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/album.json',
      {
        headers: new HttpHeaders({
          'Custom-Header': "Kyky",
          'Custom-Headera': "Kyky"
        })
      ,
        // params:new HttpParams().set('print', 'pretty')
        params:searchParaam
      })
      .pipe(
        map(responseData => {
          const postArray = [];
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], id: key})
            }
          }
          return postArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes)
          // console.log(error)
        })
      );
  }

  delPost(id: string) {
    return this.http.delete(
      'https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/album.json',
      {
        observe:"events"
      })
      .pipe(
        tap( event=>{
          console.log(event)
          if(event.type===HttpEventType.Sent){

          }
        })
      )
  }
}
