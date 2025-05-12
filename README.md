# Good Friends Gallery

A modern gallery website built with Next.js, Prisma, and Cloudinary.

## Features

- Modern, responsive design with theme toggle
- Artist submission form with image upload
- Admin dashboard for managing submissions
- About page with founder profiles
- Cloudinary integration for image management
- PostgreSQL database with Prisma ORM

## Prerequisites

- Node.js 18.x or later
- PostgreSQL database
- Cloudinary account
- npm or yarn package manager

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/gfg_db"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# Admin Authentication
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your_secure_password"
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/good-friends-gallery.git
cd good-friends-gallery
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up the database:
```bash
npx prisma migrate dev
```

4. Generate Prisma client:
```bash
npx prisma generate
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Deployment

1. Build the application:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm run start
# or
yarn start
```

## Project Structure

```
├── prisma/              # Database schema and migrations
├── public/             # Static assets
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── api/       # API routes
│   │   ├── components/# React components
│   │   └── ...        # Page components
│   └── styles/        # Global styles
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
