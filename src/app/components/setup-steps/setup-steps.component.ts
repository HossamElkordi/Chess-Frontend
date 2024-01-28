import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setup-steps',
  templateUrl: './setup-steps.component.html',
  styleUrls: ['./setup-steps.component.css']
})
export class SetupStepsComponent {

  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<SetupStepsComponent>) {}

  firstFormGroup: FormGroup = this._formBuilder.group({
    firstCtrl: ['Single Player', Validators.required],
  });

  secondFormGroup: FormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    thirdCtrl: ['', Validators.required],
    fourthCtrl: ['easy', Validators.required]
  });

  isLinear = false;

  onBtnClick(){
    let single: boolean = this.firstFormGroup.controls['firstCtrl'].value == 'Single Player';
    let multi: boolean = this.firstFormGroup.controls['firstCtrl'].value == 'Multi-Player';

    let wname: boolean = this.secondFormGroup.controls['secondCtrl'].value != '';
    let bname: boolean = this.secondFormGroup.controls['thirdCtrl'].value != '';

    if(single && wname) {
      this.dialogRef.close(
        [
          'Single Player',
          this.secondFormGroup.controls['secondCtrl'].value,
          this.secondFormGroup.controls['fourthCtrl'].value
        ]
      )
    }
    if(multi && wname && bname) {
      this.dialogRef.close(
        [
          'Multi-Player', 
          [
            this.secondFormGroup.controls['secondCtrl'].value, 
            this.secondFormGroup.controls['thirdCtrl'].value
          ]
        ]
      )
    }
  }

}
