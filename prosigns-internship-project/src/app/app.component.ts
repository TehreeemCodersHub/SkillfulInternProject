import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'; //destructring

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'prosigns-internship-project';
  myForm !: FormGroup;

  constructor(private fb : FormBuilder) {

  }
  ngOnInit(): void {
    this.form()

  }

  form(){
    this.myForm=this.fb.group ({ // to create a model

      user_email: new FormControl('', [Validators.required, Validators.email]),
      user_password: new FormControl('',[Validators.required, Validators.minLength(8)]  )

    });
}

get password() {
  return this.myForm.get('user_password')
}

onSubmit() {
    console.log(this.myForm.value)
    // alert('hello i am clicked');
    // console.log('valid?', form.valid );
    // console.log('Email', form.value.user_email );
    // console.log('Password', form.value.user_password);
    // console.log('form submitted');
  }


}
