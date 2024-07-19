import { axiosConfig } from "./configure";
export interface TodoI{
    id?:string;
    title:string;
    description:string;
    dueDate:Date;
    isCompleted?:boolean;
}

export const getMyTodos = async () => {
    const response = await axiosConfig.get("/todos");
    return (response.data as TodoI[]).map(todo=>({
        ...todo,
        dueDate:new Date(todo.dueDate)
    })) as TodoI[];
}
export  const createTodo = async (todo:TodoI) => {
    const response = await axiosConfig.post("/todos", todo);
    return response.data as TodoI;
}
export const markCompleted = async (id:string) => {
    const response = await axiosConfig.put(`/todos/${id}/complete`);
    return response.data as TodoI;
}
export const markUncompleted = async (id:string) => {
    const response = await axiosConfig.put(`/todos/${id}/uncomplete`);
    return response.data as TodoI;
}