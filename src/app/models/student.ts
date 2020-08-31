export class Student {
    constructor(
       _id='',id=0,name='',age=0 
    ){
        this._id=_id;
        this.id=id
        this.name=name;
        this.age=age;
    }
    _id:String;
    id:number;
    name:String;
    age:number;
}
