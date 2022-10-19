import { Router } from 'express';
import {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} from '../controllers/todos';

const todoRouter = Router();

todoRouter.post('/', createTodo);
todoRouter.get('/', getTodos);
todoRouter.patch('/:id', updateTodo);
todoRouter.delete('/:id', deleteTodo);

export default todoRouter;
