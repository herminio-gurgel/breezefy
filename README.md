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

- **[Laravel Breeze](https://laravel.com/docs/11.x/starter-kits#laravel-breeze)**: Simple and robust authentication
  implementation.
- **[Inertia.js](https://inertiajs.com/)**: Adapter that allows building single-page applications (SPAs) using
  traditional backend frameworks.
- **[Vue.js](https://vuejs.org/)**: Progressive JavaScript framework for building user interfaces.
- **[Vuetify](https://vuetifyjs.com/en/)**: Vue.js component library based on Material Design, replacing Tailwind CSS.
- **Responsive Design**: The application is fully responsive, utilizing Vuetify's breakpoints based on the Material
  Design specification, to support small screens (`sm` breakpoint), medium screens (`md` breakpoint), and large
  screens (`lg` breakpoint).
- **Pre-configured Docker Compose**: Includes [MySQL](https://www.mysql.com/) for storage
  and [Mailpit](https://mailpit.axllent.org/) for
  testing email sending.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Docker**: To run Laravel Sail (https://www.docker.com/)
- **Docker Compose**: Comes with Docker Desktop

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

- **Application**: [http://localhost](http://localhost)
- **Mailpit**: [http://localhost:8025](http://localhost:8025)
- **MySQL**:
    - **Using external clients**: You can connect to the MySQL database with the following default
      credentials:
        - **Host**: `localhost`
        - **Port**: `3306`
        - **Username**: `sail`
        - **Password**: `password`
    - **Using Laravel Sail**: To access the MySQL database directly, use the Sail command:
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
    {title: "Dashboard", namedRoute: "dashboard", method: ""},
    {title: "Your Route", namedRoute: "route-name", method: ""},
]);
```

The `MenuLinks.vue` file stores links for the dropdown menu, which is typically used for user configuration and actions.
You can customize these links as needed:

```javascript
const menuLinks = ref([
    {title: "Profile", namedRoute: "profile.edit", method: ""},
    {title: "Preferences", namedRoute: "preference.index", method: ""},
    {title: "Log Out", namedRoute: "logout", method: "post"},
]);
```

### Vuetify Global Configuration

The global configuration for Vuetify includes important customization options to maintain the consistent layout of the project. These settings can be adjusted in `resources/js/app.js` to better meet the needs of your project. Now, the maximum width of the application is controlled by a `.width` class defined in `resources/css/main.scss`, allowing for flexible width control across different viewports:

```scss
.width {
    max-width: 450px !important;

    @media screen and (min-width: 600px) and (max-width: 959px) {
        max-width: 600px !important;
    }

    @media screen and (min-width: 960px) and (max-width: 1279px) {
        max-width: 960px !important;
    }

    @media screen and (min-width: 1280px) {
        max-width: 1280px !important;
    }
}
```

To apply this new width control, the layout components have been updated to use the .width class instead of a fixed maxWidth variable. You can easily modify the .width class in the SCSS file to better suit your project's specific requirements.

By following these steps, you can start customizing Breezefy to better fit your specific requirements and build your application on top of this robust starter kit.

## Contributing

We welcome contributions to Breezefy! To make the process as smooth as possible, please follow these guidelines:

### Reporting Issues

If you encounter any issues or bugs, please report them by opening a new issue on
the [GitHub repository](https://github.com/herminio-gurgel/breezefy/issues). Provide as much detail as possible,
including:

- A clear description of the problem
- Steps to reproduce the issue
- Any relevant error messages or logs

## License

Breezefy is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
