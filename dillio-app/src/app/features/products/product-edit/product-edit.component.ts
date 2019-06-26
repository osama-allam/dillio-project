import { Subscription } from 'rxjs/internal/Subscription';
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
import { ProductService } from 'src/app/services/product.service';
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
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  private subscription: Subscription;
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
              private _productService: ProductService,
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
    this.subscription = this.route.data.subscribe(data => {
      const resolvedData: ProductResolved = data.resolvedData;
      // this._alertify.error(resolvedData.error);
      this.onProductRetrieved(resolvedData.product);
    });
  }
  onProductRetrieved(product: IProduct): void {
    this.product = product;
    if (!this.product) {
      this.router.navigate(['/page-not-found']);
    } else {
      this.displayData(product);
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
      name: ['', Validators.required],
      value: ['', Validators.required]
    });
  }
  mapFormDataToProduct(): IProduct {
    let basicInfo: FormGroup = this.formArray.get([0]) as FormGroup;
    let specsAndDesc: FormGroup = this.formArray.get([1]) as FormGroup;
    const mappedProduct: IProduct = {
      id: this.product.id,
      name: basicInfo.get('productNameFormCtrl').value,
      price: +basicInfo.get('priceFormCtrl').value,
      discount: +basicInfo.get('discountFormCtrl').value,
      categoryId: +basicInfo.get('categoryFormCtrl').value,
      description: specsAndDesc.get('productDescriptionFormCtrl').value,
      specs: specsAndDesc.get('specsArray').value,
      images: this.images
    }
    return mappedProduct;
  }
  addSpecFormGroup(): void {
    this.specsArray.push(this.buildSpecsGroup());
  }
  displayData(product: IProduct): void {

    if (this.productForm) {
      this.productForm.reset();
    }
    if (this.product.id === 0) {
      // add new product
    } else {
      // fill form with data
      this.images = product.images;
      const specs = new FormArray([]);
      for (const spec of this.product.specs) {
        specs.push(
          this._formBuilder.group({
            name: [spec.name, Validators.required],
            value: [spec.value, Validators.required]
          })
        );
      }
      this.productForm = this._formBuilder.group(
        {
          formArray: this._formBuilder.array(
          [
            // basic information step
            this._formBuilder.group({
              productNameFormCtrl: [this.product.name, Validators.required],
              priceFormCtrl: [this.product.price, Validators.required],
              discountFormCtrl: [{value: this.product.discount, disabled: this.product.discount ? false : true}, Validators.required],
              discountToggleFormCtrl: !this.product.discount ? false : true,
              categoryFormCtrl: [this.product.categoryId, Validators.required],
            }),
            // specs and description step
            this._formBuilder.group({
              productDescriptionFormCtrl: [this.product.description, Validators.required],
              specsArray: specs
            })
          ])
        }
      );
    }
  }
  saveProduct() {
    if (this.productForm.valid) {
      if (this.product.id === 0) {
        this._productService.createProduct(this.mapFormDataToProduct())
            .subscribe(
              (res) => {
                this.onSaveComplete( res, `The updated ${this.product.name} was saved`);
            },
              (error: any) => {
                // this._alertify.error(error);
              }
            );
      } else {
        this._productService.updateProduct(this.mapFormDataToProduct())
        .subscribe(
          (res) => {
            this.onSaveComplete( res, `The updated ${this.product.name} was updated`);
        },
          (error: any) => {
            // this._alertify.error(error);
          }
        );
      }
    }
  }
  onSaveComplete(response: IProduct, message?: string): void {
    if (message) {
      this._alertify.success(message);
    }
    this.productForm.reset();

    this.router.navigate(['/products', response.id]);
  }
  // End of product Form Section

  // Image Uploader section
  deleteSpecFormGroup(index: number): void {
    this.specsArray.removeAt(index);
    if(this.product.id !== 0) {
      this.product.specs.splice(index, 1);
    }
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
