import { Category } from 'src/app/_models/category';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormArray} from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  hasDiscount = true;
  isLinear = false;
  productForm: FormGroup;
  categories: Category[];
  uploader: FileUploader;
  hasBaseDropZoneOver = false;

  get formArray(): AbstractControl | null {
    return this.productForm.get('formArray');
  }
  get specsArray(): FormArray | null {
    return this.formArray.get([1]).get('specsArray') as FormArray;
  }
  constructor(private _formBuilder: FormBuilder,
              private _categoryService: CategoryService) {
                this.categories = _categoryService.getall();
              }

  ngOnInit() {
    this.productForm = this._formBuilder.group(
      {
        formArray: this._formBuilder.array(
        [
          //basic information step
          this._formBuilder.group({
            productNameFormCtrl: ['', Validators.required],
            priceFormCtrl: ['', Validators.required],
            discountFormCtrl: [{value: '', disabled: true}, Validators.required],
            discountToggleFormCtrl: false,
            categoryFormCtrl: ['', Validators.required],
            fileUploadFormCtrl: [null],
            // storeFormCtrl: ['', Validators.required],
            // uploaderFormCtrl: ['', Validators.required]
          }),
          //specs and description step
          this._formBuilder.group({
            productDescriptionFormCtrl: ['', Validators.required],
            specsArray: this._formBuilder.array([
              this.buildSpecsGroup()
            ])

          }),
          //upload product images step
          // this._formBuilder.group({

          // }),
        ])
      }
    );
    const discountToggleControl = ( this.formArray.get([0]) as FormGroup).controls.discountToggleFormCtrl;
    const discountControl = ( this.formArray.get([0]) as FormGroup).controls.discountFormCtrl;
    discountToggleControl.valueChanges.subscribe(
      value => {
        value ? discountControl.enable() : discountControl.disable();

    }
    );
    this.initializeUploader();
  }
  buildSpecsGroup(): FormGroup {
    return this._formBuilder.group({
      productSpecNameFormCtrl: ['', Validators.required],
      productSpecValueFormCtrl: ['', Validators.required]
    });
  }
  addSpecFormGroup(): void {
    this.specsArray.push(this.buildSpecsGroup());
  }
  deleteSpecFormGroup(index: number): void {
    this.specsArray.removeAt(index);
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  initializeUploader() {
    this.uploader = new FileUploader({
      url: '', //api url
      authToken: 'Bearer', // append token here
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
  }
  saveProduct() {

  }
}
