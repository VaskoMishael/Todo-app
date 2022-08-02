export class Todo {
  id: number;
  title: string;
  description: string;
  complete: boolean = false;
  tillTime: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
