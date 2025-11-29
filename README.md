# To-Do List Application

A modern, responsive to-do list application built with React and Vite. Features a clean UI with component-based architecture.

**Live Demo:** [https://react-to-do-app-bilge.vercel.app/](https://react-to-do-app-bilge.vercel.app/)

## Features

- ✅ **Add Tasks** - Create new tasks with a simple input field
- ✅ **Complete Tasks** - Mark tasks as completed with checkboxes
- ✅ **Delete Tasks** - Remove individual tasks
- ✅ **Filter Tasks** - Filter by All, Active, or Completed tasks
- ✅ **Clear Completed** - Remove all completed tasks at once
- ✅ **Local Storage** - Tasks are automatically saved in browser localStorage
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Modern UI** - Clean and minimal design with smooth transitions

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features (backdrop-filter, custom scrollbar)

## Project Structure

```
src/
├── components/
│   ├── TodoInput.jsx      - Input field and add button
│   ├── FilterButtons.jsx  - Filter buttons (All/Active/Completed)
│   ├── TodoItem.jsx       - Individual todo item component
│   ├── TodoList.jsx       - List of todos with filtering
│   └── Footer.jsx         - Footer with task count and clear button
├── hooks/
│   └── useTodos.js        - Custom hook for todo state management
├── App.jsx                - Main application component
├── App.css                - Application styles
├── index.css              - Global styles
└── main.jsx               - Application entry point
```

## Installation

1. Clone the repository or download the project files

2. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

**Note for Windows PowerShell users:** If you encounter execution policy errors, use:
```bash
cmd /c npm run dev
```

Or use the alternative script:
```bash
npm run dev:cmd
```

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Usage

1. **Add a Task**: Type your task in the input field and click "Ekle" (Add) or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it as completed
3. **Delete a Task**: Click the × button on the right side of a task
4. **Filter Tasks**: Use the filter buttons (Tümü/All, Aktif/Active, Tamamlanan/Completed) to view different task categories
5. **Clear Completed**: Click "Tamamlananları Temizle" (Clear Completed) to remove all completed tasks at once

## Component Architecture

The application follows a component-based architecture:

- **TodoInput**: Handles task input and submission
- **FilterButtons**: Manages task filtering state
- **TodoItem**: Renders individual task items
- **TodoList**: Displays filtered list of tasks
- **Footer**: Shows active task count and clear completed button
- **useTodos**: Custom hook managing all todo-related state and operations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Author

Built with ❤️ using React and Vite

