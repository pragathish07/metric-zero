# Metric Zero

## Overview
This project is a B2B web application built using **React (Vite)** for the frontend and **Django DRF** for the backend. The app supports **SSO authentication**, onboarding flows, and a scalable dashboard system with dynamically generated navigation based on database items.

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Django DRF, PostgreSQL
- **Authentication:** Clerk (SSO, Google Sign-In)
- **Database:** PostgreSQL (hosted on Railway)
- **Deployment:** Docker, Railway, Vercel

## Installation & Setup

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo/backend
   ```
2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run database migrations:
   ```sh
   python manage.py migrate
   ```
5. Copy static files:
   ```sh
   python manage.py collectstatic --noinput
   ```
6. Run the development server:
   ```sh
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server with Hot Module Replacement (HMR):
   ```sh
   npm run dev
   ```
   **Ensure HMR is enabled by checking** `vite.config.js`:
   ```js
   export default defineConfig({
     server: {
       hot: true,
     },
   });
   ```

## Deployment

### Backend (Production)
1. Set `DEBUG = False` in `settings.py`:
   ```python
   DEBUG = False
   ```
2. Apply migrations and collect static files:
   ```sh
   python manage.py migrate
   python manage.py collectstatic --noinput
   ```
3. Run the server using **Gunicorn**:
   ```sh
   gunicorn project.wsgi:application --bind 0.0.0.0:8000
   ```

### Frontend (Production)
1. Build the project:
   ```sh
   npm run build
   ```
2. Serve the build folder using a static server (e.g., Vercel, Nginx, or Railway):
   ```sh
   npm install -g serve
   serve -s dist
   ```

## Features
- 🔒 **SSO Authentication** (Clerk integration)
- 🚀 **Hot Module Replacement (HMR) for Development**
- 🏗 **Scalable Architecture with Dynamic Dashboard Navigation**
- 🔄 **Admin User Management**



## License
This project is licensed under the **MIT License**.



