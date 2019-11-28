import { Component, OnInit } from '@angular/core';
import { OobjectService } from './oobject.service'

interface ArrayOfOobject {
  ObjectID: number;
  Type_object: string;
  Adress: string;
  Ploshad: number;
  Prise: number;
}
@Component({
  selector: 'app-oobject',
  templateUrl: './oobject.component.html',
  styleUrls: ['./oobject.component.less']
})


export class OobjectComponent {
  Type_object: string = ' ';
  Adress: string = ' ';
  Ploshad: number = 0;
  Prise: number =0;

  arrayOfOobject: ArrayOfOobject[] = [];
  constructor(private oobjectService: OobjectService) {
    this.LoadOobjects();

  }
  LoadOobjects() {
    this.oobjectService.getOobjects().subscribe((arrayOfOobject: ArrayOfOobject[]) => {
      this.arrayOfOobject = arrayOfOobject;
      console.log(this.arrayOfOobject);
    });
  }
  addOobject() {
    this.oobjectService.addOobject(this.Type_object, this.Adress, this.Ploshad, this.Prise)
      .subscribe((arrayOfOobject: ArrayOfOobject[]) => {
        console.log(this.arrayOfOobject);
      }),
    this.Type_object = '';
    this.Adress = '';
    this.Ploshad = 0;
    this.Prise = 0;
  }
  setNewPloshad(oobject: ArrayOfOobject) {
    console.log("compon change")
    this.Type_object = oobject.Type_object;
    this.Adress = oobject.Adress;
    this.Ploshad = oobject.Ploshad;
    this.Prise = oobject.Prise;    
  }

  setNewOobject(oobject : ArrayOfOobject){
    console.log("compon setNewOobject")
    oobject.Type_object = this.Type_object;
    oobject.Adress = this.Adress;
    oobject.Ploshad= this.Ploshad;
    oobject.Prise = this.Prise;
    this.oobjectService.changeOobject(oobject).subscribe(data=>console.log(data))

  }

  delOobject(ObjectID: number) {
    console.log("compon delete")
    this.oobjectService.delOobject(ObjectID).subscribe(data=>console.log(data))
  }
}