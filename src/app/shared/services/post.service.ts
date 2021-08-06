import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  createPost(data: any) {
    this.http.post<{ name: string }>(
      'https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/album.json',
      data)
      .pipe(map(res => {
        data.id = res.name
        console.log(data)
      })).subscribe()
    // https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/
  }

}
