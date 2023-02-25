export interface TaskInterface {
  id: number;
  name: string;
  status: boolean;
  deleteTask: (id: number) => void;
}
