# 🎓 Student Management System (ASP.NET Core 9 + Angular 20)

A full-stack **Student Management System** built using **ASP.NET Core 9 Web API**, **Angular 20**, and **SQL Server** following modern enterprise development practices.

The application demonstrates a complete CRUD workflow with a RESTful API backend and a responsive Angular frontend. It is designed as a learning project while implementing concepts commonly used in real-world enterprise applications.

---

# 🚀 Tech Stack

## Backend

- ASP.NET Core 9 Web API
- C#
- Entity Framework Core
- SQL Server
- REST API
- Dependency Injection
- Swagger / OpenAPI

## Frontend

- Angular 20
- TypeScript
- Angular Material
- Reactive Forms
- RxJS
- Standalone Components

## Database

- Microsoft SQL Server

## Tools

- Visual Studio 2022
- VS Code
- Git
- GitHub
- Postman

---

# 📂 Project Structure

```
Student_FullStack_API
│
├── Student.API
│   ├── Controllers
│   ├── Data
│   ├── Models
│   ├── Migrations
│   ├── Program.cs
│   └── appsettings.json
│
├── Student.UI
│   ├── src
│   ├── public
│   ├── angular.json
│   ├── package.json
│   └── ...
│
└── StudentBackendApi.sln
```

---

# ✨ Features

## Backend

- RESTful API
- Entity Framework Core
- SQL Server Integration
- CRUD Operations
- Dependency Injection
- Swagger Documentation
- Asynchronous Programming
- Clean Folder Structure

## Frontend

- Responsive UI
- Angular Material
- Reactive Forms
- HTTP Client
- Routing
- Standalone Components
- Form Validation
- CRUD Operations
- Search
- Responsive Layout

---

# 📌 REST API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/Student` | Get all students |
| GET | `/api/Student/{id}` | Get student by ID |
| POST | `/api/Student` | Create student |
| DELETE | `/api/Student/{id}` | Delete student |

---

# 📦 Student Model

```json
{
  "id": 1,
  "name": "John Doe",
  "age": 22,
  "email": "john@example.com"
}
```

---

# 🛠 Backend Setup

## Clone Repository

```bash
git clone https://github.com/tapan0810/DotNet_Angular_App_1_StudentAPI.git
```

---

## Navigate to Backend

```bash
cd Student.API
```

---

## Restore Packages

```bash
dotnet restore
```

---

## Update Connection String

Open

```
appsettings.json
```

Update

```json
"ConnectionStrings": {
  "Con": "Your SQL Server Connection String"
}
```

---

## Apply Migrations

```bash
dotnet ef database update
```

---

## Run API

```bash
dotnet run
```

Swagger

```
https://localhost:{PORT}/swagger
```

---

# 💻 Frontend Setup

Navigate

```bash
cd Student.UI
```

Install Packages

```bash
npm install
```

Run Angular

```bash
ng serve
```

Application

```
http://localhost:4200
```

---

# 🧠 Concepts Implemented

## ASP.NET Core

- Web API
- Dependency Injection
- Controllers
- Routing
- Entity Framework Core
- SQL Server
- LINQ
- Async/Await
- Swagger
- CRUD APIs

---

## Angular

- Standalone Components
- Routing
- Angular Material
- Reactive Forms
- HTTP Client
- Services
- RxJS
- Observables
- Form Validation
- Component Communication

---

# 📸 Screenshots

Add screenshots here after completing the UI.

```
Dashboard

Student List

Add Student

Student Details

Delete Confirmation
```

---

# 🔮 Future Enhancements

- Update Student
- Authentication & Authorization
- JWT Authentication
- Role Based Access
- Pagination
- Sorting
- Search
- File Upload
- Student Profile Image
- Dashboard Analytics
- Export to Excel
- Export to PDF
- Dark Theme
- Unit Testing
- Docker Support
- Azure Deployment
- CI/CD Pipeline

---

# 📚 Learning Outcomes

This project demonstrates practical implementation of:

- Full Stack Development
- RESTful API Development
- Angular Application Development
- Entity Framework Core
- SQL Server Integration
- Reactive Forms
- CRUD Operations
- Client-Server Communication
- Clean Architecture
- Git & GitHub Workflow

---

# 👨‍💻 Author

**Tapan Ray**

Software Developer

### Connect with me

GitHub

https://github.com/tapan0810

LinkedIn

(Add your LinkedIn URL)

---

# ⭐ If you found this project helpful

Please consider giving it a ⭐ on GitHub.
