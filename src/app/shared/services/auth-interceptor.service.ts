import {HttpHandler, HttpInterceptor, HttpRequest,} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpEvent} from "@angular/common/http"
import {tap} from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const modifiedRequest = req.clone(
      {headers: req.headers.append("Auth", 'zyx')})
    console.log("==> HttpInterceptor", modifiedRequest.url)
    return next.handle(modifiedRequest).pipe(
      tap(event => {
        console.log(event)
      })
    )

  }

}
