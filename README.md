# Learn Regex

[![Build Status](https://travis-ci.org/gtkatakura/furb-learn-regex.svg?branch=master)](https://travis-ci.org/gtkatakura/furb-learn-regex)
[![Maintainability](https://api.codeclimate.com/v1/badges/0247f7f688f69aa90d76/maintainability)](https://codeclimate.com/github/gtkatakura/furb-learn-regex/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0247f7f688f69aa90d76/test_coverage)](https://codeclimate.com/github/gtkatakura/furb-learn-regex/test_coverage)

An interactive web application for teaching and learning regular expressions. This platform allows professors to create regex exercises and activities, while students can practice and solve them in a structured environment.

## 🚀 Features

### For Professors
- **Class Management**: Create and manage classrooms with students
- **Exercise Creation**: Design regex exercises with automatic test case generation
- **Activity Distribution**: Assign exercises to students with deadlines
- **Progress Tracking**: Monitor student progress in real-time
- **Authentication**: Secure login via Google and Facebook OAuth

### For Students
- **Interactive Learning**: Solve regex exercises step by step
- **Real-time Validation**: Instant feedback on regex solutions
- **Progress Tracking**: Track your learning journey
- **Social Login**: Easy authentication through social platforms

### Technical Features
- **Regex Validation**: Advanced regex parsing and validation using PEG.js
- **Equivalence Checking**: Verify if two regular expressions are equivalent
- **Test Case Generation**: Automatic generation of valid/invalid test cases
- **Real-time Communication**: Socket.io integration for live updates

## 🛠️ Technology Stack

### Frontend
- **React** 16.2.0 - User interface library
- **Redux** - State management
- **React Router** - Client-side routing
- **Bootstrap 4** - UI framework
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** with Mongoose - Database
- **Socket.io** - WebSocket communication
- **Passport.js** - Authentication (Google, Facebook OAuth)
- **JWT** - Token-based authentication

### Development Tools
- **Webpack** - Module bundler
- **Babel** - JavaScript transpiler
- **Jest** - Testing framework
- **ESLint** - Code linting
- **PEG.js** - Parser generator for regex parsing

## 📋 Prerequisites

- Node.js 14.15.2
- MongoDB 4.4.9+
- Google OAuth credentials (optional)
- Facebook OAuth credentials (optional)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gtkatakura/furb-learn-regex.git
   cd furb-learn-regex
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.template .env
   ```
   Edit `.env` and configure:
   - MongoDB connection string
   - OAuth credentials (Google/Facebook)
   - JWT signing key
   - Email service credentials

4. **Start MongoDB**
   ```bash
   docker-compose up -d
   ```

5. **Build the application**
   ```bash
   npm run build
   ```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 🔧 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:pegjs` - Generate PEG.js parser
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🌟 Key Features Explained

### Regex Parsing
The application uses PEG.js to parse regular expressions and extract symbols for exercise generation. This allows for sophisticated regex analysis and validation.

### Exercise Generation
Professors can create exercises by specifying:
- Exercise description
- Target regular expression
- Step-by-step progression for students

The system automatically generates test cases based on the regex patterns.

### Real-time Updates
Socket.io enables real-time communication between professors and students, allowing for live progress tracking and notifications.

---

**Learn Regex** - Making regular expressions accessible and interactive for everyone! 🎯