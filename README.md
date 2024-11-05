# GOV.UK Full Service Feedback Prototype

This project provides a prototype to collect full service feedback for GOV.UK services. It enables users to provide feedback on their total experience, including aspects like satisfaction, ease of use, and suggestions for improvement. The service also supports user researchers by allowing follow-up interviews with users who opt-in via phone number or email. The data captured from this form should be kept seperately to channel specific feedback.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Service](#running-the-service)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The prototype aims to capture detailed service feedback without conflating channel-specific feedback with full-service feedback. This distinction ensures feedback relevance and actionable insights, enhancing service delivery and user satisfaction.

## Features

- **User Feedback Collection**: Capture user input on service satisfaction and usability.
- **Opt-in Follow-up**: Users can opt to provide their contact details for additional research.
- **Research Integration**: Supports user researchers with data for informed service improvements.

## Getting Started

To set up the project on your local machine, follow these instructions for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hooperstu/FullServiceFeedback.gov.git
    ```

2. Navigate to the project directory:

    ```bash
    cd FullServiceFeedback.gov
    ```

3. Install the necessary packages:

    ```bash
    npm install
    ```

### Running the Service

To start the service, run:

    ```bash
    npm start
    ```

The service will be available at `http://localhost:3000`.

## Project Structure

- `app/` - Main application files
- `.gitignore` - Specifies files to ignore in version control
- `LICENCE.txt` - Licensing information
- `README.md` - Documentation for the project
- `package.json` - Project metadata and dependencies

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
