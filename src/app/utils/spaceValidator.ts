import { AbstractControl, ValidationErrors } from '@angular/forms';
  
export class UsernameValidator {
    readonly NoWhitespaceRegExp: RegExp = new RegExp("\\S");
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        /*
        if((control.value as string).indexOf(' ') >= 0){
            return {cannotContainSpace: true}
        }
        */

        if((control.value as string).indexOf(' ') == 0){
            return {cannotContainSpace: true}
        }
        if((control.value as string).trim().length == 0){
            return {cannotContainSpace: true}
        }

        return null;
    }
}