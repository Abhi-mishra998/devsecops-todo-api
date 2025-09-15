const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// In-memory storage for todos
let todos = [
  { id: 1, title: "Sample todo", status: false },
  { id: 2, title: "Learn DevSecOps", status: true }
];
let nextId = 3;

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'ToDo API running...', 
    version: '1.0.0',
    endpoints: {
      'GET /todos': 'Fetch all todos',
      'POST /todos': 'Add a new todo',
      'PUT /todos/:id': 'Update a todo',
      'DELETE /todos/:id': 'Delete a todo'
    }
  });
});

// GET /todos - Fetch all todos
app.get('/todos', (req, res) => {
  res.json({
    success: true,
    count: todos.length,
    data: todos
  });
});

// POST /todos - Add a new todo
app.post('/todos', (req, res) => {
  const { title } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      error: 'Title is required'
    });
  }

  const newTodo = {
    id: nextId++,
    title: title.trim(),
    status: false,
    createdAt: new Date().toISOString()
  };

  todos.push(newTodo);
  
  res.status(201).json({
    success: true,
    message: 'Todo created successfully',
    data: newTodo
  });
});

// PUT /todos/:id - Update a todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, status } = req.body;
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }

  // Update fields if provided
  if (title !== undefined) {
    if (title.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Title cannot be empty'
      });
    }
    todos[todoIndex].title = title.trim();
  }
  
  if (status !== undefined) {
    todos[todoIndex].status = Boolean(status);
  }

  todos[todoIndex].updatedAt = new Date().toISOString();

  res.json({
    success: true,
    message: 'Todo updated successfully',
    data: todos[todoIndex]
  });
});

// DELETE /todos/:id - Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Todo not found'
    });
  }

  const deletedTodo = todos.splice(todoIndex, 1)[0];
  
  res.json({
    success: true,
    message: 'Todo deleted successfully',
    data: deletedTodo
  });
});

// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 ToDo API running on http://localhost:${PORT}`);
  console.log(`📋 Ready for DevSecOps pipeline testing!`);
});
