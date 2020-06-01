import { Router } from 'express';

import usersRoutes from './users.routes';

const routes = Router();

routes.use('/validate', usersRoutes);

export default routes;
