# 🧾 React Native Expense Tracker

A cross-platform expense tracking app built with React Native and Supabase. Easily add, edit, and delete personal expenses with a clean and intuitive UI and persist them to the cloud. With authentication powered by Supabase! Each user can only see, edit, and delete their own expenses.

## 📱 Features

- User authentication using Supabase Auth
- Secure access: each user sees only their own expenses
- Add new expenses with amount, description, and date
- Edit or delete existing expenses
- View recent expenses in a summary (past 7 days)
- Supabase backend for real-time storage and retrieval
- Styled UI with platform-specific tweaks
- Built using Context API and `useReducer` for state management

## ⚙️ Tech Stack

- [React Native](https://reactnative.dev/) (Expo)
- [Supabase](https://supabase.com/) (PostgreSQL, REST API)
- Context API for global state
- React Navigation
- JavaScript
- AsyncStorage (for session persistence)
- JavaScript

##  Authentication

This app now supports full authentication via Supabase:
- Users must sign in or sign up before accessing the app
- All expense actions (create, update, delete, fetch) are scoped to the logged-in user via Supabase's Row Level Security (RLS) policies

##  Row Level Security (RLS)

This app uses Supabase's Row Level Security (RLS) to ensure each user can only access their own data.

### Required RLS policy for expenses table:

```sql
-- Enable RLS
alter table expenses enable row level security;

-- Allow read/update/delete only for the owner
create policy "Users can access their own expenses only"
  on expenses
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
```

If you're using your own Supabase project, make sure to apply the same RLS policies to your expenses table for correct and secure functionality.

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

### 4. Set up your Supabase project

Create a new Supabase project and then:

#### 4.1 Create the expenses table:

```sql
create table expenses (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users not null,
  amount numeric not null,
  description text not null,
  date date not null,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```
Make sure the user_id column matches auth.uid() as that’s what’s used in RLS and the app logic.

#### 4.2 Enable RLS and apply the policy:

```sql
alter table expenses enable row level security;

create policy "Users can access their own expenses only"
  on expenses
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
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
