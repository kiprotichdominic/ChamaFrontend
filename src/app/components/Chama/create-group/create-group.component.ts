import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../Services/Post/post.service';
import { Group } from './../../../Models/group';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  createGroupForm: FormGroup;
  // groups:Group[];
  // group = new Group();
  submitted = false;

  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private postService:PostService) {}
 
  ngOnInit() {
    this.createGroupForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required]),
      numberOfMembers: new FormControl(null,[Validators.required]),
  });
    // this.refreshGroups()
  }

  get f() { return this.createGroupForm.controls; }
 
  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.createGroupForm.invalid) {
      console.log(this.createGroupForm.value)
      return;
    }
    this.postService.createGroup(this.createGroupForm.value)
    // .pipe(first())
    //   .subscribe(data => {
    //     console.log(data)
        // this.refreshGroups();
      // }) 
  //  this.postService.createGroup(this.createGroupForm.value)
  //  .pipe(first())
  //     .subscribe(data => {
  //       console.log(data)
  //       // this.refreshGroups();
  //     }) 

    // this.loading = true;
//     this.postService.createGroup(this.createGroupForm.value)
//         .pipe(first())
//         .subscribe(
//             data => {
//               console.log(data)
//                 // this.router.navigate([this.returnUrl]);
//             },
//             error => {
//               console.log(error)
//                 // this.alertService.error(error);
//                 // this.loading = false;
//             });
// }
  // refreshGroups() {
  //   this.postService.getGroups()
  //     .subscribe(data => {
  //       console.log(data)
  //       this.groups=data;
  //     })      
 
  // }
 
  // createGroup() {
  //   this.postService.createGroup(this.group)
  //     .subscribe(data => {
  //       console.log(data)
  //       this.refreshGroups();
  //     })      
  // }
 
}
}