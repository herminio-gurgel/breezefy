# Breezefy

![License](https://img.shields.io/github/license/herminio-gurgel/breezefy)
![Version](https://img.shields.io/github/v/release/herminio-gurgel/breezefy)
![Responsive Design](https://img.shields.io/badge/Responsive-yes-brightgreen)
![Docker Ready](https://img.shields.io/badge/Docker-ready-brightgreen)

Breezefy is a starter kit based on [Laravel Breeze](https://laravel.com/docs/11.x/starter-kits#laravel-breeze)
, [Inertia.js](https://inertiajs.com/), and [Vue.js](https://vuejs.org/), with a significant difference: all components
have been refactored to use [Vuetify](https://vuetifyjs.com/en/) instead of Tailwind CSS. This project provides a solid
foundation for quickly starting modern web applications with a well-defined structure and powerful styling.

## Key Features

-   **[Laravel Breeze](https://laravel.com/docs/11.x/starter-kits#laravel-breeze)**: Simple and robust authentication
    implementation.
-   **[Inertia.js](https://inertiajs.com/)**: Adapter that allows building single-page applications (SPAs) using
    traditional backend frameworks.
-   **[Vue.js](https://vuejs.org/)**: Progressive JavaScript framework for building user interfaces.
-   **[Vuetify](https://vuetifyjs.com/en/)**: Vue.js component library based on Material Design, replacing Tailwind CSS.
-   **Responsive Design**: The application is fully responsive, utilizing Vuetify's breakpoints based on the Material
    Design specification, to support small screens (`sm` breakpoint), medium screens (`md` breakpoint), and large
    screens (`lg` breakpoint).
-   **Pre-configured Docker Compose**: Includes [MySQL](https://www.mysql.com/) for storage
    and [Mailpit](https://mailpit.axllent.org/) for
    testing email sending.
-   **Automated Code Quality Tools**: Configured with [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
    , [Laravel Pint](https://laravel.com/docs/11.x/pint), and [Commitlint](https://commitlint.js.org/), all managed
    by [Husky](https://typicode.github.io/husky/) to ensure code quality and commit message consistency.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   **Docker**: To run Laravel Sail (https://www.docker.com/)
-   **Docker Compose**: Comes with Docker Desktop

## Installation

Follow these steps to install and set up the project
using [Laravel Sail](https://laravel.com/docs/11.x#docker-installation-using-sail):

1. **Clone the repository**:

    ```bash
    git clone https://github.com/herminio-gurgel/breezefy.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd breezefy
    ```

3. **Copy the `.env.example` file to `.env`**:

    ```bash
    cp .env.example .env
    ```

4. **Install PHP dependencies**:

    ```bash
    docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs
    ```

5. **Start the Laravel Sail environment**:

    ```bash
    ./vendor/bin/sail up -d
    ```

6. **Install Node.js dependencies**:

    ```bash
    ./vendor/bin/sail npm install
    ```

7. **Build frontend assets**:

    ```bash
    ./vendor/bin/sail npm run build
    ```

8. **Generate the application key**:

    ```bash
    ./vendor/bin/sail artisan key:generate
    ```

9. **Run database migrations**:

    ```bash
    ./vendor/bin/sail artisan migrate
    ```

10. **Access the Application**

After running these commands, you should be able to access the following:

-   **Application**: [http://localhost](http://localhost)
-   **Mailpit**: [http://localhost:8025](http://localhost:8025)
-   **MySQL**:
    -   **Using external clients**: You can connect to the MySQL database with the following default
        credentials:
        -   **Host**: `localhost`
        -   **Port**: `3306`
        -   **Username**: `sail`
        -   **Password**: `password`
    -   **Using Laravel Sail**: To access the MySQL database directly, use the Sail command:
        ```bash
        ./vendor/bin/sail mysql
        ```

## Customization

To customize the project, follow these guidelines:

### Application Links

The application's main navigation is defined in two files located
in `resources/js/Layouts/AuthenticatedLayout/Partials/`.

The `NavigationLinks.vue` file stores links for navigating through the application bar. You can add, remove, or modify
these
navigation links to suit your needs:

```javascript
const navigationLinks = ref([
    { title: "Dashboard", namedRoute: "dashboard", method: "" },
    { title: "Your Route", namedRoute: "route-name", method: "" },
]);
```

The `MenuLinks.vue` file stores links for the dropdown menu, which is typically used for user configuration and actions.
You can customize these links as needed:

```javascript
const menuLinks = ref([
    { title: "Profile", namedRoute: "profile.edit", method: "" },
    { title: "Preferences", namedRoute: "preference.index", method: "" },
    { title: "Log Out", namedRoute: "logout", method: "post" },
]);
```

### Vuetify Global Configuration

The global configuration for Vuetify includes essential customization options, such as props, classes, and styles
defined in the createVuetify object. These settings maintain the project’s consistent layout and can be adjusted in
`resources/js/app.js` to better align with your project’s needs.

Additionally, the application's maximum width is controlled by a `.breezefy-container-width` class defined in
`resources/css/main.scss`. This class provides flexible width control across different viewports, with the configured
classes being applied globally in Vuetify options.

### Code Quality Tools

Automated tools are integrated for maintaining code quality, triggered by [Husky](https://typicode.github.io/husky/)
pre-commit hooks. For more details, refer to the documentation of each tool:

-   [Laravel Pint](https://laravel.com/docs/11.x/pint)
-   [Prettier](https://prettier.io/)
-   [ESLint](https://eslint.org/)
-   [Commitlint](https://commitlint.js.org/)

By following these guidelines, you can easily customize Breezefy to better suit your project requirements, building on
top of this robust starter kit.

## Contributing

We welcome contributions to Breezefy! To make the process as smooth as possible, please follow these guidelines:

### Reporting Issues

If you encounter any issues or bugs, please report them by opening a new issue on
the [GitHub repository](https://github.com/herminio-gurgel/breezefy/issues). Provide as much detail as possible,
including:

-   A clear description of the problem
-   Steps to reproduce the issue
-   Any relevant error messages or logs

## License

Breezefy is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
