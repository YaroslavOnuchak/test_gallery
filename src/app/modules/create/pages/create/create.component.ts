import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "@shared/services";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit, OnDestroy {
  errorSub: Subscription;
  error: any = null;

  newForm!: FormGroup;

  user: any = {
    id: 1,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: 1,
    password: "",
    albumList: [{
      id: "",
      title: "",
      usersAccess: "",
      titleImg: "",
      photoList: []
    }]
  }


  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private postService: PostService,
              private cdr: ChangeDetectorRef,) {
    this.errorSub = this.postService.error.subscribe(er => {
      this.error = er
    })
  }

  ngOnInit(): void {

    this.buildUserForm()
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe()
  }

  sendData() {
    this.postService.createPost(this.newForm.value)
    this.newForm.reset()
  }


  addNewAlbum(): void {
    const albumItem = this.fb.group({
      id: [this.user.albumList.length ? (this.user?.albumList[this.user.albumList.length - 1]?.id + 1) : 1],
      title: "",
      usersAccess: "",
      titleImg: "",
      photoList: this.fb.array(
        this.user.albumList[0]?.photoList?.map((el: any, i: number) => {
          return this.fb.group({
            id: "",
            url: "",
            usersAccess: "",
            titleImg: false
          })
        })
      )
    })
    this.albumListArray.push(albumItem);
    this.user = this.newForm.value
  }

  addNewPhoto(): void {
    const photoItem = this.fb.group({
      id: "",
      url: "",
      usersAccess: "",
    })
    this.photoListArray.push(photoItem);
    this.user = this.newForm.value;
    // console.log(this.albumListArray)
    // console.log(this.photoListArray)
  }

  get albumListArray(): FormArray {
    return this.newForm.get('albumList') as FormArray;
  }

  get photoListArray(): FormArray | any {

    if (this.albumListArray.length < 1) {
      this.addNewAlbum()
    }
    // console.log('=>>', this.albumListArray.controls[0])
    return this.albumListArray.controls[0].get('photoList') as FormArray;
  }

  deleteAlbum(id: number): void {
    this.albumListArray.removeAt(id);
  }

  deletePhoto(id: number): void {
    this.photoListArray.removeAt(id);
  }

  buildUserForm(): FormGroup {
    return this.newForm = this.fb.group({
        id: ``,
        firstName: ['', Validators.required],
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
        albumList: this.fb.array(
          this.user.albumList.map((el: any, i: number) => {
            return this.fb.group({
              id: "",
              title: "",
              usersAccess: "",
              titleImg: "",
              photoList: this.fb.array(
                this.user.albumList[0]?.photoList?.map((el: any, i: number) => {
                  return this.fb.group({
                    id: "",
                    url: "",
                    usersAccess: "",
                    titleImg: false
                  })
                })
              )
            });
          })
        ),
      },
    )
  }
}
