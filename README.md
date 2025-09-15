# 📋 ToDo API - DevSecOps Pipeline Project

A simple **RESTful To-Do List API** built with Node.js and Express, designed specifically for **DevSecOps pipeline testing**, CI/CD automation, security scanning, and cloud deployment.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, Delete todos
- **RESTful API**: Standard HTTP methods and status codes
- **JSON Responses**: Structured API responses with success/error handling
- **Docker Ready**: Containerized with security best practices
- **Pipeline Friendly**: Perfect for CI/CD and DevSecOps workflows

## 📋 API Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `GET` | `/` | Health check & API info | - |
| `GET` | `/todos` | Fetch all todos | - |
| `POST` | `/todos` | Create a new todo | `{"title": "string"}` |
| `PUT` | `/todos/:id` | Update a todo | `{"title": "string", "status": boolean}` |
| `DELETE` | `/todos/:id` | Delete a todo | - |

## ⚡ Quick Start

### Prerequisites
- Node.js 16+ 
- npm 8+

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd todo-api-devsecops
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Access the API**
   ```
   http://localhost:3000
   ```

## 📖 API Usage Examples

### 1. Get All Todos
```bash
curl -X GET http://localhost:3000/todos
```

### 2. Create a New Todo
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Deploy to AWS"}'
```

### 3. Update a Todo
```bash
curl -X PUT http://localhost:3000/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Deploy to AWS - Complete", "status": true}'
```

### 4. Delete a Todo
```bash
curl -X DELETE http://localhost:3000/todos/1
```

### 5. Health Check
```bash
curl -X GET http://localhost:3000/
```

## 🐳 Docker Usage

### Build Image
```bash
docker build -t todo-api:latest .
```

### Run Container
```bash
docker run -p 3000:3000 todo-api:latest
```

### Docker Compose (Optional)
```yaml
version: '3.8'
services:
  todo-api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

## 🔧 Development

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Environment Variables
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode

## 🛡️ DevSecOps Pipeline Integration

This project is designed for DevSecOps workflows:

### CI/CD Pipeline Steps:
1. **Code Quality**: ESLint, Prettier
2. **Security Scanning**: Snyk, OWASP dependency check
3. **Container Scanning**: Trivy, Clair
4. **Testing**: Unit tests, integration tests
5. **Build**: Docker image creation
6. **Deploy**: AWS ECS, EKS, or EC2

### Security Features:
- Non-root user in Docker container
- Health checks for monitoring
- Input validation
- Error handling
- Security headers (ready for helmet.js)

## 📁 Project Structure

```
todo-api-devsecops/
├── index.js          # Main application server
├── package.json      # Dependencies & scripts
├── Dockerfile        # Container configuration
├── .gitignore        # Git ignore rules
├── README.md         # Project documentation
└── .github/          # GitHub Actions (optional)
    └── workflows/
        └── ci-cd.yml  # Pipeline configuration
```

## 🌐 Deployment Options

### AWS Deployment:
- **ECS**: Containerized deployment with load balancer
- **EKS**: Kubernetes cluster deployment
- **EC2**: Direct server deployment
- **Lambda**: Serverless deployment (with serverless framework)

### Other Platforms:
- **Heroku**: `git push heroku main`
- **Digital Ocean**: App Platform deployment
- **Google Cloud Run**: Containerized serverless

## 🔍 Monitoring & Observability

Ready for integration with:
- **Logging**: Winston, Morgan
- **Metrics**: Prometheus, CloudWatch
- **Tracing**: Jaeger, X-Ray
- **Health Checks**: Built-in `/` endpoint

## 📈 Scaling Considerations

- **Horizontal**: Multiple container instances
- **Load Balancing**: ALB, NGINX
- **Database**: Replace in-memory storage with MongoDB/PostgreSQL
- **Caching**: Redis for improved performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and security checks
5. Submit a pull request

## 📄 License

MIT License - Perfect for learning and experimentation

---

**Perfect for DevSecOps learning!** 🚀 This API provides a solid foundation for implementing CI/CD pipelines, security scanning, monitoring, and cloud deployment strategies.
