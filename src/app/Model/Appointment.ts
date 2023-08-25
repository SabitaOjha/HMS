import { FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
export class Appointments{
    public FirstName:string = "";
    public LastName:string="";
    public Address:string="";
    public Age:any="";
    public PhoneNumber:string="";
    public Symptoms:string="";
    public Date:string="";
    public AppointmentForm:FormGroup;

    constructor(){
        let formBuilder = new FormBuilder();
        this.AppointmentForm = formBuilder.group({
            FirstName:['',[Validators.required]],
            LastName:['',[Validators.required]],
            Address:['',[Validators.required]],
            Age:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
            PhoneNumber:['',Validators.compose([Validators.required, Validators.pattern('^[0-9]{10,10}$')])],
            Symptoms:['',[Validators.required]],
            Date:['',[Validators.required]]
        });
    
     }
    
}