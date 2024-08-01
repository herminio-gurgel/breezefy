# Breezefy

Breezefy is a starter kit based on Laravel Breeze, Inertia.js, and Vue.js, but with a significant difference: all components have been refactored to use Vuetify instead of Tailwind CSS. This project provides a solid foundation for quickly starting modern web applications with a well-defined structure and powerful styling.

## Key Features

- **Laravel Breeze**: Simple and robust authentication implementation.
- **Inertia.js**: Framework that allows building single-page applications (SPAs) using traditional backend frameworks.
- **Vue.js**: Progressive JavaScript framework for building user interfaces.
- **Vuetify**: Vue.js component library based on Material Design, replacing Tailwind CSS.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Docker**: To run Laravel Sail (https://www.docker.com/)
- **Docker Compose**: Comes with Docker Desktop

## Installation

Follow these steps to install and set up the project using Laravel Sail:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/breezefy.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd breezefy
    ```

3. **Install PHP dependencies**:

    ```bash
    composer install
    ```

4. **Install Node.js dependencies**:

    ```bash
    npm install
    ```

5. **Build frontend assets**:

    ```bash
    npm run build
    ```

6. **Copy the `.env.example` file to `.env`**:

    ```bash
    cp .env.example .env
    ```

7. **Configure your environment variables in the `.env` file**:
    - Set your database connection settings.
    - Set any other necessary environment variables, including Mailpit settings.

8. **Start the Laravel Sail environment**:

    ```bash
    ./vendor/bin/sail up -d
    ```

9. **Generate the application key**:

    ```bash
    ./vendor/bin/sail artisan key:generate
    ```

10. **Run database migrations**:

    ```bash
    ./vendor/bin/sail artisan migrate
    ```

11. **Access the application**:

    After running these commands, you should be able to access the application at `http://localhost`.

## Contributing

We welcome contributions to Breezefy! To make the process as smooth as possible, please follow these guidelines:

### Reporting Issues

If you encounter any issues or bugs, please report them by opening a new issue on the GitHub repository. Provide as much detail as possible, including:

- A clear description of the problem
- Steps to reproduce the issue
- Any relevant error messages or logs

Thank you for contributing to Breezefy!

## License

Breezefy is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### MIT License

