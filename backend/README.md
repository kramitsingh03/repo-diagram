Backend for RepoLens Phase 1, built with Python and FastAPI.

## Features

- Accept a GitHub repository URL
- Clone the repository
- Scan repository files and directories
- Detect programming languages
- Detect frameworks
- Detect package files
- Detect test files
- Return repository analysis as JSON

## Tech Stack

- Python
- FastAPI
- Uvicorn
- Pydantic
- Git

## Project Structure

```text
backend/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── scanner.py
│   └── schemas.py
│
├── repositories/
├── requirements.txt
└── .gitignore
```

## Setup

### 1. Create virtual environment

```bash
python3 -m venv venv
```

### 2. Activate virtual environment

macOS/Linux:

```bash
source venv/bin/activate
```

Windows:

```bash
venv\\Scripts\\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the server

```bash
uvicorn app.main:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

## API Documentation

Open:

```text
http://127.0.0.1:8000/docs
```

## API

### Health Check

```http
GET /health
```

### Analyze Repository

```http
POST /repositories/analyze
```

Request:

```json
{
  "repo_url": "https://github.com/expressjs/express"
}
```

The API clones the repository, scans it, and returns information such as:

```text
File count
Directory count
Languages
Frameworks
Package files
Test files
File tree
Directory tree
```

## Phase 1 Flow

```text
GitHub URL
     ↓
FastAPI
     ↓
Validate URL
     ↓
Git Clone
     ↓
Repository Scanner
     ↓
Repository Analysis
     ↓
JSON Response
```

## Phase 1 Status

- [x] FastAPI setup
- [x] GitHub repository cloning
- [x] Repository scanning
- [x] Language detection
- [x] Framework detection
- [x] Package file detection
- [x] Test file detection
- [x] API response