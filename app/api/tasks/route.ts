import { index, create, update, remove } from "@/controllers/task";

//create new task
export const POST = create;

//Get all tasks
export const GET = index;

//update task
export const PUT = update;

//delete task
export const DELETE = remove;
