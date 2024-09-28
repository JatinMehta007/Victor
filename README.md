# Victor

- Victor is a Blogging website "Where Words Build Worlds".
- A user can delete , read and write the blogs.
- A user has only access to delete of his own blog.
- A user can only read the blog of others.
- A signup, signin and logout options.

## Tech Stack:

-Hono: A fast, lightweight web framework perfect for building APIs. It helped me create an efficient backend for managing blog posts, users, and more.

-Prisma & PostgreSQL: Prisma ORM and PostgreSQL handle all the data management behind the scenes. Prisma’s type-safe queries made interacting with the database seamless.

-Avien: Used for additional database operations, helping to optimize data interactions.

-Tailwind CSS: With Tailwind, I was able to create a modern, responsive design that looks great on any device.

## Features:

📝 Create, Edit, and Delete Blog Posts: Easily create, update, or remove your blog posts with real-time feedback.

🔍 Search and Explore: Discover blog posts from other users effortlessly.

🖋️ User Authentication: A secure system for sign-ups and log-ins, ensuring your content is safe.

🚀 Responsive Design: Tailwind CSS ensures a fluid, responsive experience across all devices.


# Setup Locally 

**Cloning the Repository**

```bash
git clone https://github.com/
cd Victor
```

**Install the dependencies**

```bash
npm install
```

**Set up Environment Variables**

```bash
cd backend
create .env file
now , write your DATABASE_URL to store a data
```

setup DB locally
```bash
create wrangler.toml
now, write your connection pool in DATABASE_URL

npx prisma migrate dev
npx prisma db seed 
npx prisma generate
```

**Run locally**
```bash
cd ../..
npm run dev
```

  
  
