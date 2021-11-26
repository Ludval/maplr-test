import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

type ErrorType = 'required' | 'email' | 'matchPassword' | 'minlength' | 'maxlength';

@Directive({
  selector: '[formValidator]'
})
export class FormValidatorDirective {
  @Input() public set customMessages(values: Array<{ error: string; message: string }>) {
    this._customMessages = values;
  }
  public get customMessages(): Array<{ error: string; message: string }> {
    return this._customMessages;
  }

  private _customMessages: Array<{ error: string; message: string }> = [];
  private errorsType = new Map<ErrorType, string>().set('required', 'The field is required');

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private ngControl: NgControl) {}

  @HostListener('focus')
  @HostListener('blur')
  @HostListener('ngModelChange')
  public setErrorElement(): void {
    const parentNode = this.renderer.parentNode(this.elementRef.nativeElement);
    const errorId = `error-${this.ngControl.path!.join('-')}`;

    if (this.ngControl.invalid) {
      const errorElement = parentNode.querySelector(`#${errorId}`);
      const error = Object.keys(this.ngControl.errors!)[0] as ErrorType;
      const customMessage = this.customMessages.find(customMessage => customMessage.error === error);

      const errorText = this.errorsType && customMessage ? customMessage.message : this.errorsType.get(error);

      if (!errorText) {
        return;
      }

      if (errorElement) {
        errorElement.innerHTML = errorText;

        return;
      }

      const small = this.renderer.createElement('span');
      const text = this.renderer.createText(errorText);

      this.renderer.appendChild(small, text);
      this.renderer.setProperty(small, 'id', errorId);
      this.renderer.addClass(small, 'field_error');
      this.renderer.appendChild(parentNode, small);
    } else {
      const errorElement = parentNode.querySelector(`#${errorId}`);

      if (errorElement) {
        this.renderer.removeChild(parentNode, errorElement);
      }
    }
  }
}
