# Fullstack Image Upload and Download

Integrate a NextJS frontend with an AWS CDK backend, offering a simple solution for handling image uploads and downloads.

## Overview

This project is structured into two main parts:

- **Frontend**: A NextJS application at the root of the project.
- **Backend**: An AWS CDK backend located in the `_backend` directory.

### Key Features

- **Amazon Cognito Authentication**: Secure user authentication process.
- **Amazon S3 Integration**: Handles file uploads and downloads.
- **AWS Amplify Libraries**: Allow the frontend to communicate with AWS

## Getting Started

### Backend Setup

1. **Navigate to Backend Directory**: Change to the `_backend` directory.
2. **Install Dependencies**: Run `npm i` to install necessary packages.

### Frontend Setup

1. **Root Directory**: Stay at the root of the project.
2. **Install Dependencies**: Run `npm i` to set up the NextJS application.

### User Interface

- The UI is basic!
- Uses `withAuthenticator` for straightforward authentication.
- `StorageManager` and `StorageImage` for handling image files.

## Deploying the Backend

1. **Navigate to Backend Directory**: Ensure you're in the `_backend` directory.
2. **Deploy Resources**: Execute `npx aws-cdk deploy --outputs-file output.json`.
   - This command deploys necessary resources and generates an `output.json` file.

### Configuration

- The frontend's `awsconfig.ts` file reads the `output.json` to create a configuration for AWS Amplify.

## Contributing

Your contributions are highly appreciated. Whether it's suggesting new features, improving documentation, or fixing bugs, your input helps make this project better.

## Further Assistance

For any questions or issues, please feel free to open an issue in the repository.
