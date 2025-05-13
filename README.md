# Tasker - Task Management Application

A modern task management application built with React and Vite.

![Tasker App](https://via.placeholder.com/800x400?text=Tasker+App)

## 📋 Features

- Create, edit, and delete tasks
- Search functionality to find specific tasks
- Task organization with status tracking
- Responsive design for all devices
- Clean and intuitive user interface

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Icon library

## 📦 Project Structure

```
tasker/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── components/  # React components
│   │   ├── AddTaskModal.jsx    # Modal for adding new tasks
│   │   ├── Footer.jsx          # Application footer
│   │   ├── Header.jsx          # Application header
│   │   ├── HeroSection.jsx     # Hero section component
│   │   ├── NoTaskFound.jsx     # Empty state component
│   │   ├── SearchTask.jsx      # Search functionality component
│   │   ├── TaskAction.jsx      # Task action buttons component
│   │   ├── TaskBoard.jsx       # Main task board component
│   │   └── TaskList.jsx        # List of tasks component
│   ├── App.jsx      # Main application component
│   ├── index.css    # Global styles
│   └── main.jsx     # Application entry point
├── index.html       # HTML entry point
└── vite.config.js   # Vite configuration
```

## 🛠️ Setup & Installation

1. **Clone the repository**

   ```
   git clone https://github.com/JoyTarafder/tasker2.0.git
   cd tasker2.0
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Start development server**
   ```
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run push` - Git add, commit, and push changes

## 🔧 Configuration

The application uses ESLint for code quality. Configuration can be found in `eslint.config.js`.

## 🚢 Deployment

To deploy the application:

1. Build the project

   ```
   npm run build
   ```

2. Deploy the contents of the `dist` folder to your hosting provider

Currently, two official plugins are available:

## 📄 License

This project is licensed under the LWS License - see the LICENSE file for details.
