import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';
import FilesController from './app/controllers/FilesController';
import MeetupController from './app/controllers/MeetupController';
import SubscriptionController from './app/controllers/SubscriptionController';
import OrganizerController from './app/controllers/OrganizerController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);

routes.put('/users', UserController.update);

routes.put('/meetup/:id', MeetupController.update);
routes.post('/meetup', MeetupController.store);
routes.get('/meetup', MeetupController.index);
routes.delete('/meetup/:id', MeetupController.delete);

routes.get('/organizer', OrganizerController.index);

routes.post('/meetup/:meetupId/subscriptions', SubscriptionController.store);

routes.post('/files', upload.single('file'), FilesController.store);
routes.get('/subscriptions', SubscriptionController.index);

export default routes;
