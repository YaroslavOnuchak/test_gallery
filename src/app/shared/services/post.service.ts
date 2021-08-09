import {ChangeDetectorRef, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {PostModel} from "../models";
import {Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
error = new Subject()
  constructor(private http: HttpClient,
              // private cdr: ChangeDetectorRef
  ) {
  }

  createPost(data: PostModel) {
    this.http.post<{ name: string }>(
      'https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/album.json',
      data)
      .pipe(map(res => {
        data.id = res.name
        console.log(data)
      })).subscribe(res=>{},error=>{
      this.error.next(error.message)
    })
    // https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/
  }

  fetchPost() {
    return this.http.get<{ [key: string]: PostModel }>(
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
  }

  delPost(id: string) {
    return this.http.delete(
      'https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/album.json')
  }
}
