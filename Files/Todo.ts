import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Todo {
  task: string;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'] // Update with your styles
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  dialogData: Todo = { task: '', description: '' };

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // Load todos from local storage on component initialization
    this.loadTodosFromLocalStorage();
  }

  openAddDialog(): void {
    this.dialogData = { task: '', description: '' };
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { mode: 'add', todo: this.dialogData }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todos.push(result);
        this.saveTodosToLocalStorage();
        this.snackBar.open('Todo added', '', { duration: 2000 });
      }
    });
  }

  openEditDialog(todo: Todo): void {
    this.dialogData = { ...todo };
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { mode: 'edit', todo: this.dialogData }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.todos.indexOf(todo);
        this.todos[index] = result;
        this.saveTodosToLocalStorage();
        this.snackBar.open('Todo updated', '', { duration: 2000 });
      }
    });
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveTodosToLocalStorage();
      this.snackBar.open('Todo deleted', '', { duration: 2000 });
    }
  }

  private saveTodosToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private loadTodosFromLocalStorage(): void {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html', // Create this template
})
export class DialogComponent {
  constructor(private dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { mode: string, todo: Todo }) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveDialog(): void {
    this.dialogRef.close(this.data.todo);
  }
}
