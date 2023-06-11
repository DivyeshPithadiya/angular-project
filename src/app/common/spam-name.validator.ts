import { AbstractControl } from "@angular/forms";

// export function spamNameValidator(control:AbstractControl) {
//     if(/admin/.test(control.value)) {
//         return {"spam":control.value};
//     } else {
//         return null;
//     }
// }

export function spamNameValidator(regex: RegExp) {
    return (control:AbstractControl)=>{
        if(regex.test(control.value)) {
            return {"spam":control.value};
        } else {
            return null;
        }
    }

}