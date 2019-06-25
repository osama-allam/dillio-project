import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  deleteImage(publicId: string) {
    return this.http.delete(this.baseUrl + 'images?publicId=' + publicId);
  }
  uploadImage(image) {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post(this.baseUrl + 'images', formData);
  }
}
