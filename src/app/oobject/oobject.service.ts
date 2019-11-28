import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
@Injectable()

export class OobjectService { 
    constructor (private http: HttpClient){} 
    getOobjects(){ 
        return this.http.get('http://localhost:54460/api/oobject'); 
    }
    addOobject( Type_object:string, Adress:string, Ploshad: number, Prise: number){
        const data ={
            Type_object: Type_object,
            Adress : Adress,
            Ploshad: Ploshad, 
            Prise: Prise
        }
        return this.http.post('http://localhost:54460/api/oobject', (data));
    }
    changeOobject(oobject : any){     
        console.log('service change', oobject.ObjectID);
        let url=`http://localhost:54460/api/oobject/${oobject.ObjectID}`;
        let prom = this.http.put(url, oobject)
        console.log(prom);
        return prom;
    }
    delOobject(ObjectID : number){
        console.log('service delete', ObjectID);
        let url=`http://localhost:54460/api/oobject/${ObjectID}`;
        let prom =  this.http.delete(url);
        console.log(prom);
        return prom;
    }

}