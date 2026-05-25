# Architecture Document

## 1. Overview
TeamFlow is a **full-stack web application** built using **Next.js** for both frontend and backend. The architecture follows a **modular design** with clear separation of concerns between UI, API, and data layers.

---

## 2. System Architecture
### 2.1 High-Level Architecture
```
┌───────────────────────────────────────────────────────────────┐
│                        Client (Browser)                       │
└───────────────────────┬───────────────────────┬───────────────┘
                        │                       │
                        ▼                       ▼
┌───────────────────────────────────────────────────────────────┐
│                        Next.js Application                     │
│  ┌─────────────┐    ┌─────────────┐    ┌───────────────────┐  │
│  │   Frontend  │    │    API     │    │   Authentication  │  │
│  └─────────────┘    └─────────────┘    └───────────────────┘  │
└───────────────────────┬───────────────────────┬───────────────┘
                        │                       │
                        ▼                       ▼
┌───────────────────────────────────────────────────────────────┐
│                        Database (Supabase)                     │
│  ┌─────────────┐    ┌─────────────┐    ┌───────────────────┐  │
│  │   Users     │    │  Projects   │    │     Tasks        │  │
│  └─────────────┘    └─────────────┘    └───────────────────┘  │
└───────────────────────────────────────────────────────────────┘
```

### 2.2 Frontend
- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Components**: Reusable UI components (e.g., `ProjectCard`, `TaskList`)

### 2.3 Backend
- **Framework**: Next.js API Routes
- **Authentication**: JWT-based
- **Database**: Supabase (PostgreSQL)
- **Validation**: Zod for input validation
- **Error Handling**: Custom error middleware

### 2.4 Database Schema
#### 2.4.1 Users Table
| Column      | Type       | Description                     |
|-------------|------------|---------------------------------|
| id          | UUID       | Primary key                     |
| email       | String     | Unique                          |
| password    | String     | Hashed                          |
| role        | String     | Admin, Manager, Member          |
| created_at  | Timestamp  | Auto-generated                  |

#### 2.4.2 Projects Table
| Column      | Type       | Description                     |
|-------------|------------|---------------------------------|
| id          | UUID       | Primary key                     |
| name        | String     | Project name                    |
| description | Text       | Project description             |
| created_by  | UUID       | Foreign key (Users)             |
| created_at  | Timestamp  | Auto-generated                  |

#### 2.4.3 Tasks Table
| Column      | Type       | Description                     |
|-------------|------------|---------------------------------|
| id          | UUID       | Primary key                     |
| title       | String     | Task title                      |
| description | Text       | Task description                |
| status      | String     | To Do, In Progress, Review, Done|
| priority    | String     | Low, Medium, High               |
| due_date    | Date       | Task due date                   |
| project_id  | UUID       | Foreign key (Projects)          |
| assignee_id | UUID       | Foreign key (Users)             |
| created_at  | Timestamp  | Auto-generated                  |

---

## 3. Data Flow
### 3.1 User Authentication Flow
1. User submits login credentials.
2. Backend validates credentials and issues a JWT.
3. JWT is stored in the client and used for API requests.

### 3.2 Project Creation Flow
1. User submits project details via the UI.
2. Frontend sends a `POST /api/projects` request.
3. Backend validates input and creates a project in the database.
4. Database returns the project ID.
5. Frontend updates the UI with the new project.

### 3.3 Task Assignment Flow
1. User assigns a task to a team member.
2. Frontend sends a `PUT /api/tasks/:id` request.
3. Backend updates the task in the database.
4. Database logs the update in the activity timeline.
5. Frontend updates the UI to reflect the change.

---

## 4. API Design
### 4.1 Authentication
- `POST /api/auth/register` – User registration
- `POST /api/auth/login` – User login
- `POST /api/auth/logout` – User logout

### 4.2 Projects
- `GET /api/projects` – List all projects
- `POST /api/projects` – Create a project
- `PUT /api/projects/:id` – Update a project
- `DELETE /api/projects/:id` – Delete a project

### 4.3 Tasks
- `GET /api/tasks` – List all tasks
- `POST /api/tasks` – Create a task
- `PUT /api/tasks/:id` – Update a task
- `DELETE /api/tasks/:id` – Delete a task

---

## 5. Folder Structure
```
/fleet_work
├── /public              # Static assets
├── /src
│   ├── /app             # Next.js App Router
│   │   ├── /api         # API Routes
│   │   │   ├── /auth    # Authentication endpoints
│   │   │   ├── /projects # Project endpoints
│   │   │   └── /tasks   # Task endpoints
│   │   ├── /dashboard   # Dashboard page
│   │   ├── /projects    # Projects page
│   │   └── /tasks       # Tasks page
│   ├── /components     # Reusable UI components
│   ├── /lib            # Utility functions
│   ├── /styles         # Global styles
│   ├── /types          # TypeScript types
│   └── /utils          # Helper functions
├── /tests              # Unit and integration tests
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

---

## 6. Deployment
- **Containerization**: Docker
- **Hosting**: Vercel (Frontend + API)
- **Database**: Supabase (PostgreSQL)
- **CI/CD**: GitHub Actions
