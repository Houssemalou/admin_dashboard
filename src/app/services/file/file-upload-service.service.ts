import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor() { }

  upload(file: File): Observable<string> {
    const reader = new FileReader();

    return new Observable(observer => {
      reader.onload = () => {
    
        const filePath = `assets/img/${file.name}`;
        localStorage.setItem(filePath, reader.result as string); 
        observer.next(filePath);
        observer.complete();
      };
      reader.onerror = (error) => {
        observer.error(error);
      };

      reader.readAsDataURL(file);
    });
  }

  getFile(filePath: string): string | null {
    return localStorage.getItem(filePath);
  }
}
