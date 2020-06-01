import { EntityRepository, Repository } from 'typeorm';

// import { request } from 'express';
import User from '../models/User';

interface Request {
  phone_id: string;
}

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  // public async finder(phone_id: Request): Promise<User> {
  //   //   const transactions = await this.find();
  //   const user = this.find({ where: { phone_id } });
  //   console.log(user);
  // return user;
  // }
}
export default UsersRepository;
