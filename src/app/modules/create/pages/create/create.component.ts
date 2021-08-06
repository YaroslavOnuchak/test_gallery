import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "@shared/services";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {
  newForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.buildUserForm()
  }

  sendData() {
    this.postService.createPost(this.newForm.value)
  }


  buildUserForm(): FormGroup {
    return this.newForm = this.fb.group({
        id: ``,
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
