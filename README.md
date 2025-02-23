# fedd
(Still learning...)
## Overview
This project is a Next.js application with TypeScript, integrating authentication, database connectivity, email verification, and API handling. It follows a modular structure for better maintainability and scalability.

## Features
- **User Authentication**: Includes sign-up, sign-in, and email verification.
- **Database Connection**: Manages user data with a database connection.
- **API Routes**: Handles authentication and user-related operations.
- **Email Services**: Sends verification emails to users.
- **Schema Validation**: Ensures data integrity using validation schemas.
- **Tailwind CSS**: Used for styling.

## Folder Structure
```
.
├── emails                  # Email templates
│   └── VarificationEmail.tsx
├── lib                     # Utility functions and database connection
│   ├── dbConnect.ts        # Database connection logic
│   └── resend.ts           # Email handling logic
├── public                  # Static assets (SVGs, icons, etc.)
├── src
│   ├── app                 # Main application
│   │   ├── api             # API routes
│   │   │   └── sign-up
│   │   │       └── route.ts
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page component
│   ├── helpers             # Helper functions
│   │   └── sendVarificationEmail.ts
│   ├── model               # Database models
│   │   └── user.ts
│   ├── schemas             # Validation schemas
│   ├── types               # Type definitions
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Installation
1. Clone the repository:
   ```sh
   git clone <repository_url>
   ```
2. Navigate to the project folder:
   ```sh
   cd <project_name>
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   Create a `.env.local` file and add necessary environment variables.

5. Run the development server:
   ```sh
   npm run dev
   ```
6. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Scripts
- `npm run dev` - Start the development server.
- `npm run build` - Build the project for production.
- `npm run start` - Start the production server.

## Tech Stack
- **Framework**: Next.js
- **Language**: TypeScript
- **Database**: MongoDB (via Mongoose)
- **Styling**: Tailwind CSS
- **Authentication**: Custom authentication with email verification
- **API Handling**: Next.js API routes

## Contribution
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any issues or contributions, please open an issue in the repository.

