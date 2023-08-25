
import { FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
export class Register{
        public Username:string = "";
        public Password:string = "";
        public RegisterForm: FormGroup;

        constructor(){
            let formBuilder = new FormBuilder();
            this.RegisterForm = formBuilder.group({
                Username:['', [Validators.required]],
                Password:['',Validators.compose([Validators.required,  Validators.pattern ('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ])]
            });
        
         }
 }