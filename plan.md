# JobConnect 📱

A mobile job application platform built with **React Native** that connects job seekers with employers.

---

## 🚀 Features

### 👤 Job Seeker

* Register & Login
* Create Profile (CV, Skills, Experience)
* Search & Filter Jobs
* Apply for Jobs
* Track Application Status

### 🏢 Employer

* Register & Login
* Post Jobs
* Edit/Delete Job Listings
* View Applicants
* Accept/Reject Applications

---

## 🛠️ Tech Stack

* **Frontend:** React Native (Expo / CLI)
* **Backend:** Node.js + Express
* **Database:** MongoDB / Firebase
* **Authentication:** JWT / Firebase Auth

---

## 📂 Project Structure

```
JobConnect/
│── src/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── services/
│   └── utils/
│── assets/
│── App.js
│── package.json
```

---

## 🔌 API Endpoints

### Auth

* `POST /api/register`
* `POST /api/login`

### Jobs

* `GET /api/jobs`
* `POST /api/jobs`
* `PUT /api/jobs/:id`
* `DELETE /api/jobs/:id`

### Applications

* `POST /api/apply`
* `GET /api/applications`

---

## ⚙️ Installation

```bash
# Clone repo
git clone https://github.com/your-username/jobconnect.git

# Navigate into project
cd job-app

# Install dependencies
npm install

# Start app
npx expo start
```

---

## 📱 Screens

* Splash Screen
* Login/Register
* Home (Job Feed)
* Job Details
* Apply Screen
* Profile Screen
* Employer Dashboard

---

## 🔒 Non-Functional Requirements

* Secure authentication
* Fast performance
* Scalable architecture
* User-friendly UI/UX

---

## 🚧 Future Improvements

* AI Job Recommendations
* In-app Chat
* Push Notifications
* Resume Builder
* Multi-language Support

---

## 👨‍💻 Author

**Abdurehman**

---

## 📄 License

This project is licensed for educational purposes.
