import { getCustomRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import Users from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  phone_id: string;
  phone_model: string;
  name: string;
  permission: boolean;
  delaySearch: string;
  delayAccept: string;
  s_x0: string;
  s_y0: string;
  s_x1: string;
  s_y1: string;
}

class CreateUserService {
  public async execute({
    phone_id,
    phone_model,
    name,
    permission,
    delaySearch,
    delayAccept,
    s_x0,
    s_y0,
    s_x1,
    s_y1,
  }: Request): Promise<Users> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = usersRepository.create({
      phone_id,
      phone_model,
      permission,
      name,
      delaySearch,
      delayAccept,
      s_x0,
      s_y0,
      s_x1,
      s_y1,
    });
    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
