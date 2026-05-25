# TeamFlow – Internal Project & Task Management Platform

A modern web application that helps teams manage projects, tasks, and collaboration in one place.

## Features

### Core Features
- **User Authentication**: Signup, login, logout
- **Dashboard**: Overview of projects and tasks
- **Project Management**: Create, edit, archive, and delete projects
- **Task Management**: Create, assign, and track tasks
- **Task Statuses**: To Do, In Progress, Review, Done
- **Priority Levels**: High, Medium, Low
- **Due Dates**: Set deadlines for tasks
- **Team Member Management**: Add and manage team members
- **Activity Timeline**: Track project updates
- **Search and Filter**: Projects and tasks
- **Responsive UI**: Dark/light mode support

### Technical Stack
- **Frontend**: Next.js (React), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, REST APIs
- **Authentication**: JWT-based
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Docker support

## Installation

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Docker (optional)
- Supabase account (for database)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/anirudhkotla/fleet_work.git
   cd fleet_work
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   JWT_SECRET=your-jwt-secret
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

5. **Access the app**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Support

To run the application using Docker:

1. **Build the Docker image**
   ```bash
   docker build -t teamflow .
   ```

2. **Run the Docker container**
   ```bash
   docker run -p 3000:3000 teamflow
   ```

## API Documentation

### Authentication
- **POST /api/auth/login**: Login user
- **POST /api/auth/register**: Register user

### Projects
- **GET /api/projects**: List all projects
- **POST /api/projects**: Create a project
- **PUT /api/projects/:id**: Update a project
- **DELETE /api/projects/:id**: Delete a project

### Tasks
- **GET /api/tasks**: List all tasks
- **POST /api/tasks**: Create a task
- **PUT /api/tasks/:id**: Update a task
- **DELETE /api/tasks/:id**: Delete a task

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
