import { IProduct } from './../../../_models/product';
import { AlertifyService } from './../../../services/alertify.service';
import { Image } from './../../../_model/image';
import { environment } from './../../../../environments/environment';
import { Category } from 'src/app/_models/category';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormArray} from '@angular/forms';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductResolved } from 'src/app/_models/product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  images: Array<Image> = [];
  hasDiscount = true;
  isLinear = false;
  productForm: FormGroup;
  categories: Category[];
  uploader: FileUploader;
  errorMessage: string;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  get formArray(): AbstractControl | null {
    return this.productForm.get('formArray');
  }
  get specsArray(): FormArray | null {
    return this.formArray.get([1]).get('specsArray') as FormArray;
  }
  get isDirty(): boolean {
    return JSON.stringify(this.originalProduct) !== JSON.stringify(this.currentProduct);
  }

  private currentProduct: IProduct;
  private originalProduct: IProduct;

  get product(): IProduct {
    return this.currentProduct;
  }
  set product(value: IProduct) {
    this.currentProduct = value;
    // Clone the object to retain a copy
    this.originalProduct = value ? { ...value } : null;
  }
  constructor(private _formBuilder: FormBuilder,
              private _categoryService: CategoryService,
              private _imageUploadService: ImageUploadService,
              private _alertify: AlertifyService,
              private route: ActivatedRoute,
              private router: Router) {
    this.categories = _categoryService.getall();
  }

  ngOnInit() {
    this.initializeForm();
    this.initializeUploader();
    this.getProductResolvedData();
  }
  // Resolve Data
  getProductResolvedData() {
    this.route.data.subscribe(data => {
      const resolvedData: ProductResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onProductRetrieved(resolvedData.product);
    });
  }
  onProductRetrieved(product: IProduct): void {
    this.product = product;
    if (!this.product) {
      this.router.navigate(['/page-not-found']);
    } else {
      if (this.product.id === 0) {
        // this.pageTitle = 'Add Product';
      } else {
        // this.pageTitle = `Edit Product: ${this.product.productName}`;
        // fill form with data
        console.log(JSON.stringify(product));
      }
    }
  }
  // Product Form Section
  initializeForm() {
    this.productForm = this._formBuilder.group(
      {
        formArray: this._formBuilder.array(
        [
          // basic information step
          this._formBuilder.group({
            productNameFormCtrl: ['', Validators.required],
            priceFormCtrl: ['', Validators.required],
            discountFormCtrl: [{value: '', disabled: true}, Validators.required],
            discountToggleFormCtrl: false,
            categoryFormCtrl: ['', Validators.required],
            fileUploadFormCtrl: [null]
          }),
          // specs and description step
          this._formBuilder.group({
            productDescriptionFormCtrl: ['', Validators.required],
            specsArray: this._formBuilder.array([
              this.buildSpecsGroup()
            ])

          }),
          // upload product images step
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

  saveProduct() {

  }
  // End of product Form Section

  // Image Uploader section
  deleteSpecFormGroup(index: number): void {
    this.specsArray.removeAt(index);
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'images?folder=products', // api url
      // authToken: 'Bearer ', // append token here
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Image = JSON.parse(response);
        const image = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          publicId: res.publicId,
        };
        this.images.push(image);
        // if (photo.isMain) {
        //   this.authService.changeMemberPhoto(photo.url);
        //   this.authService.currentUser.photoUrl = photo.url;
        //   localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
        }
      };
  }
  deleteImage(publicId: string): void {
    this._alertify.confirm('Are you sure you want to delete this image?', () => {
      this._imageUploadService.deleteImage(publicId).subscribe(() => {
        this.images.splice(this.images.findIndex(i => i.publicId === publicId), 1);
        this._alertify.success('image has been deleted');
      }, error => {
        this._alertify.error('Failed to delete the photo');
      });
    });
  }
  // End image Uploader section
}
