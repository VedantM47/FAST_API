# FastAPI CRUD Operations Demo

A simple demonstration of CRUD (Create, Read, Update, Delete) operations using FastAPI backend and vanilla JavaScript frontend.

## 🚀 Features

- ✅ All 5 HTTP methods: GET, POST, PUT, PATCH, DELETE
- ✅ Proper error handling
- ✅ Loading states and user feedback
- ✅ CORS configuration
- ✅ Request body support for POST/PUT/PATCH
- ✅ Beautiful, responsive UI
- ✅ Connection status checking

## 📋 Prerequisites

- Python 3.7+
- pip (Python package manager)

## 🛠️ Installation

1. **Install FastAPI and Uvicorn:**

```bash
pip install fastapi uvicorn
```

Or if you prefer using requirements.txt:

```bash
pip install -r requirements.txt
```

## 🏃 Running the Application

### Step 1: Start the FastAPI Server

Open a terminal in the project directory and run:

```bash
uvicorn main:app --reload
```

You should see output like:
```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

### Step 2: Open the Frontend

Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Your browser, or
- Drag and drop into browser window

Alternatively, you can serve it with Python:

```bash
python -m http.server 8080
```

Then visit: `http://localhost:8080`

## 🧪 Testing the API

### Using the Web Interface

1. Click any of the operation buttons (GET, POST, PUT, PATCH, DELETE)
2. Watch the result section update with the response
3. Errors will be displayed if the server is not running

### Using cURL

```bash
# GET request
curl http://127.0.0.1:8000/crud

# POST request
curl -X POST http://127.0.0.1:8000/crud \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "description": "Testing POST"}'

# PUT request
curl -X PUT http://127.0.0.1:8000/crud \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "description": "Testing PUT"}'

# PATCH request
curl -X PATCH http://127.0.0.1:8000/crud \
  -H "Content-Type: application/json" \
  -d '{"name": "Test"}'

# DELETE request
curl -X DELETE http://127.0.0.1:8000/crud
```

### Using Python requests

```python
import requests

# GET
response = requests.get("http://127.0.0.1:8000/crud")
print(response.json())

# POST
response = requests.post(
    "http://127.0.0.1:8000/crud",
    json={"name": "Test", "description": "Testing POST"}
)
print(response.json())
```

## 📁 Project Structure

```
.
├── main.py          # FastAPI backend
├── index.html       # Frontend HTML
├── script.js        # Frontend JavaScript
└── README.md        # This file
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/crud`  | Retrieve operation |
| POST   | `/crud`  | Create operation |
| PUT    | `/crud`  | Full update operation |
| PATCH  | `/crud`  | Partial update operation |
| DELETE | `/crud`  | Delete operation |

## 🐛 Troubleshooting

### "Cannot connect to API server"

**Problem:** The frontend can't reach the backend.

**Solutions:**
1. Make sure the FastAPI server is running (`uvicorn main:app --reload`)
2. Check that the server is running on port 8000
3. Verify no firewall is blocking the connection

### "CORS error"

**Problem:** Browser blocks the request due to CORS policy.

**Solutions:**
- The CORS middleware is already configured in `main.py`
- Make sure you're using the updated `main.py` file
- Clear browser cache and try again

### "Module not found: fastapi"

**Problem:** FastAPI is not installed.

**Solution:**
```bash
pip install fastapi uvicorn
```

### Port 8000 already in use

**Problem:** Another application is using port 8000.

**Solutions:**
1. Stop the other application, or
2. Use a different port:
```bash
uvicorn main:app --reload --port 8001
```
Then update `API_URL` in `script.js` to `http://127.0.0.1:8001/crud`

## 📝 Notes

- This is a demonstration project for learning purposes
- No database is connected - responses are static
- Data sent in requests is logged but not persisted
- CORS is set to allow all origins (`*`) - restrict this in production

## 🚀 Next Steps

To expand this project, you could:
1. Add a database (SQLite, PostgreSQL, etc.)
2. Implement actual data persistence
3. Add authentication and authorization
4. Create a proper data model with validation
5. Add more complex business logic
6. Deploy to a production server

## 📄 License

This project is open source and available for educational purposes.
