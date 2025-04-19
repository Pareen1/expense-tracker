# 🧾 React Native Expense Tracker

A cross-platform expense tracking app built with React Native and Supabase. Easily add, edit, and delete personal expenses with a clean and intuitive UI and persist them to the cloud.

## 📱 Features

- Add new expenses with amount, description, and date
- Edit or delete existing expenses
- View recent expenses in a summary
- Supabase backend for real-time storage and retrieval
- Styled UI with platform-specific tweaks
- Built using Context API and `useReducer` for state management

## ⚙️ Tech Stack

- [React Native](https://reactnative.dev/) (Expo)
- [Supabase](https://supabase.com/) (PostgreSQL, REST API)
- Context API for global state
- React Navigation
- JavaScript

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Pareen1/expense-tracker.git
cd expense-tracker
```

### 2. Installl dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file in the root of your project based on `.env.example`:

```bash
cp .env.example .env
```

## Screenshots

### Recent expenses (past 7 days) vs. all expenses

<img width="370" alt="image" src="https://github.com/user-attachments/assets/9349531f-36a4-4dce-9220-9a94b534f3c3" />

<img width="376" alt="image" src="https://github.com/user-attachments/assets/69268900-9113-4b82-9488-9186d05a2e15" />

### Adding / Editing an expense

<img width="380" alt="image" src="https://github.com/user-attachments/assets/35c08c96-bf29-4ae7-8dde-7b417d0b9a9d" />

<img width="370" alt="image" src="https://github.com/user-attachments/assets/d6586e55-dcbf-4ae2-95cf-2abaaf105533" />

### Error handling view

<img width="366" alt="image" src="https://github.com/user-attachments/assets/910dff07-1d36-4acf-9acc-2b837e5de613" />
