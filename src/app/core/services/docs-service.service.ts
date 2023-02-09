import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FoodNode } from '../tree';

@Injectable({
  providedIn: 'root',
})
export class DocsServiceService {
  constructor(private http: HttpClient) {}

  public getDocs(): Observable<any> {
    return this.http
      .get('http://ec2-54-236-45-255.compute-1.amazonaws.com:8080')
      .pipe(
        map((response) => {
          debugger;
          return this.organizeJson(response);
        })
      );
  }

  public organizeJson(json: any, children: any = []): FoodNode[] {
    Object.keys(json).forEach((key) => {
      if (typeof json[key] === 'object') {
        children.push({ name: key, children: [] });
        this.organizeJson(json[key], children[children.length - 1].children);
      } else {
        children.push({ name: key, children: [{ name: json[key] }] });
      }
    });
    return children;
  }
}
