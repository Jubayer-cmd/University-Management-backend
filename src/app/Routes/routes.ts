import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academic.route';
import { UserRoutes } from '../modules/users/user.route';

const router = express.Router();

const moulesRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];

moulesRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
