export class Goal {

showDescription:Boolean;

constructor(
    public id:Number,
    public name:string,
    public description:string,
    public completeDate:Date
)
{this.showDescription = false;}
   
}
