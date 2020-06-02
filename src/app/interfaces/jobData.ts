// export interface IjobData {
//     id: string,
//     title: string,
//     type: string,
//     description: string,
//     createdDate: string
//   }

  export class jobData {
    constructor(public id: number, public title: string, public type: string,
       public description: string, public createdDate: string) {}
  }