// Task Schema
export interface Task {
  id: string;
  text: string;
  status: boolean;
}

export interface Response {
  status?: boolean;
  message?: string;
}
