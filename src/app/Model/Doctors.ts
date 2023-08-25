
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
export class Doctor{
    public FirstName:string="";
    public LastName:string="";
    public Address:string="";
    public Specialization:string="";
    public PhoneNumber:string="";
    public DoctorForm:FormGroup;
    constructor(){
        let formBuilder = new FormBuilder();
        this.DoctorForm = formBuilder.group({
            FirstName:['',[Validators.required]],
            LastName:['',[Validators.required]],
            Address:['',[Validators.required]],
            Specialization:['',[Validators.required]],
            PhoneNumber:['',Validators.compose([Validators.required, Validators.pattern('^[0-9]{10,10}$')])]
        });
    }

}