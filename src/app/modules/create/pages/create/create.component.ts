import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators'
import {PostModel} from "../../../../shared/models";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  newForm!: FormGroup;


  constructor(private fb: FormBuilder,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.buildUserForm()
  }

  sendData() {
    this.http.post<{ key: string }>(
      'https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/album.json',
      this.newForm.value).subscribe(responseData => console.log(responseData))
    // https://gallery-img-default-rtdb.europe-west1.firebasedatabase.app/
  }


  buildUserForm(): FormGroup {
    return this.newForm = this.fb.group({
        id: 0,
        title: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        phone: ['', [
          Validators.required,
          Validators.pattern("[0-9]{10,15}")
        ]],

        // addressList: this.fb.array(
        //   this.user?.addressList?.map((el: Adress, i: number) => {
        //     return this.fb.group({
        //       id: "",
        //       addressType:"",
        //       address: "",
        //       city: "",
        //       country: "",
        //       postalCode:  "",
        //       editStatus: [false]
        //
        //     });
        //   })
        // ),
      },
    )
  }
}
