import { IUser } from "./user.interface";

export class User implements IUser {
  constructor(
    public id: number,
    public title: string,
    public price: string,
    public date: string,
    public check: boolean,
    public checkMoney: boolean,
    public status: boolean,
  ) {}
}
