import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';
// import uploadConfig from '../config/upload';

// const upload = multer(uploadConfig);
const usersRouter = Router();

usersRouter.post('/login', async (request, response) => {
  const { phone_id } = request.body;
  const usersRepository = getCustomRepository(UsersRepository);
  const user = await usersRepository.findOne({ where: { phone_id } });
  if (user?.permission === false) {
    return response.json('This User has no permission');
  }
  return response.json(user);
});

usersRouter.post('/newuser', async (request, response) => {
  const createUser = new CreateUserService();
  const {
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
  } = request.body;

  const user = await createUser.execute({
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
  });

  return response.json(user);
});

// transactionsRouter.delete('/:id', async (request, response) => {
//   const { id } = request.body;
//   console.log('\n\n\n\n\n\n\n\n', request);
//   const deleteTransactionService = new DeleteTransactionService();
//   const deletedTransaction = await deleteTransactionService.execute(id);
//   return response.json(deletedTransaction);
// });

// transactionsRouter.post(
//   '/import',
//   upload.single('file'),
//   async (request, response) => {
//     const importTransaction = new ImportTransactionsService();

//     const transactions = await importTransaction.execute(request.file.path);
//     return response.json(transactions);
//   },
// );

export default usersRouter;
