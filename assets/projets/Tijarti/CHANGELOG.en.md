# Changelog

History of changes made since development resumed on the `Reprise-2026` branch.

## Context

The project was initially developed by a team. Starting from the `Reprise-2026` branch, I resumed active development, including backend fixes, code reorganization, connection to the new database, and integration of backend data into the Flutter application.

This changelog documents the main changes made since development resumed.

## 2026-10-01

### Frontend

- Fixed the day offset in the calendar and added scrolling to the date selector on shorter screens.
- Refreshed merchant order history when returning to the tab and added pull-to-refresh.
- Fixed employee-side order display by using the supplier ID and supporting fields returned by the API.
- Improved mobile layouts for order cards and the product selection action bar, and fixed overflow issues.
- Added widget tests for calendar dates and narrow layouts.

## 2026-09-26

### Frontend

- Unified search filters and improved their usability in the administrator and merchant areas.
- Added the ability to reorder a previous order and combine products in the merchant's cart.
- Updated the notifications screen, splash screen, and application logo.
- Translated the application text into French.

### Backend

- Fixed order management.

## 2026-09-25

### Product administration and management

- Added administrator management of reports and fixed how they are displayed.
- Implemented product moderation workflows for administrators and suppliers, including support for disabled products.
- Improved the display of disabled products and refreshed pages after re-enabling them.
- Added skeleton loading to category management in the administrator area.

## 2026-09-24

### Frontend

- Redesigned and fixed the merchant, supplier, administrator, and profile interfaces.
- Improved form validation and added field-level error and success messages.
- Added the time to order dates.

### Backend

- Fixed supplier order processing.
- Added support for rejecting merchant and supplier accounts.

## 2026-09-23

### Notifications

- Set up Firebase Cloud Messaging push notifications, including support for Chrome and the web.
- Added push notifications for application events and notification preference management.
- Removed the FCM token on sign-out and correctly associated tokens with users.
- Added Firebase configuration and a backend service for sending push notifications.

### Frontend

- Fixed the display and data in merchant order history.
- Removed debug output.

## 2026-09-22

### Accounts and profiles

- Added supplier-side employee management, retrieving data from the database and securing the workflow.
- Added an employee profile and improved profile editing for merchants, suppliers, and employees.
- Added a waiting screen for new accounts pending approval and fixed commercial registration validation.
- Updated profile information across the different screens.

### Supplier and merchant areas

- Fixed and improved order management for suppliers and employees.
- Added and improved supplier statistics and unified their presentation.
- Improved the display of favorite products on the merchant home screen.
- Completed onboarding flows tailored to merchants and suppliers.

## 2026-09-19

### Supplier area

- Added supplier product and variant creation and editing.
- Fixed product and variant detail displays, and added skeleton loading when editing a product.
- Added statistics pages and improved the supplier dashboard.

### Frontend

- Centralized application colors and removed hard-coded color values.

## 2026-09-18

### Backend and features

- Implemented maintenance mode and version management through the administrator area and database.
- Integrated categories into products and fixed retrieval of supplier products and variants.
- Improved the rating system and fixed favorites and product pages without variants.

### Frontend

- Improved the responsiveness of administrator screens.
- Removed large images embedded directly in the code.

## 2026-09-17

### Backend

- Added complete administrator-side category management.
- Added the categories table and model, the associated controller, and CRUD routes.
- Updated routes and validations related to products and categories.
- Adjusted image and product controllers to support these changes.

### Frontend

- Created the category management screen in the administrator area.
- Added the Flutter category management service and integrated the section into the administrator menu.
- Updated supplier product forms and controllers to support categories.
- Created a reusable skeleton-loading architecture with page-specific adapters.
- Added skeletons for the administrator home, cart, categories, history, notifications, orders, products, reports, suppliers, and users screens.
- Updated the API client, category service, and image upload service for the new workflows.

## 2026-09-16

### Backend and security

- Fixed and strengthened route protection and access controls.
- Added an administrator table and model, removing hard-coded administrator logic.
- Added Helmet and improved request rate limiting to better protect against abuse.
- Fixed several inconsistencies in orders, favorites, notifications, reports, routes, and validations.
- Added the data and endpoints required for reports displayed in the administrator area.

### Frontend

- Preserved the user session after closing and reopening the application.
- Improved the API client and authentication, favorites, orders, suppliers, and reports services.
- Redesigned the administrator home page and improved statistics and system status displays.
- Improved reports, user management, and user detail pages.
- Improved loading states and expanded shared skeleton components.
- Cleaned up and replaced the avatar image, removing unused assets.

## 2026-09-15

### Backend and frontend

- Unified variable names across backend controllers, models, routes, validations, and utilities.
- Unified Flutter models and related services to keep naming consistent between the frontend and backend.
- Updated backend and frontend dependencies and lockfiles.

## 2026-09-13

### Backend and security

- Protected routes requiring authentication and removed redundant checks.
- Fixed token handling and sign-out and profile workflows.
- Fixed logic involving variants, carts, suppliers, and orders.
- Improved order, cart, and variant controllers and routes.
- Replaced imgBB with Cloudinary for image management.
- Added Cloudinary configuration, image routes, and image upload and deletion operations.
- Updated backend dependencies and lockfile for image management.

### Frontend

- Fixed the Settings and Login pages and authentication and profile workflows.
- Integrated the new image management into Flutter services and controllers.
- Fixed communication between the cart address screen and the order service.
- Centralized the color palette and extracted reusable widgets from views.
- Removed unused widgets, redundant utilities, and debug output.

## 2026-09-12

### Backend

- Fixed notification management and recipient relationships.
- Fixed and reorganized backend controllers, models, and routes.
- Added and unified validations for users, orders, products, favorites, notifications, reports, and variants.
- Moved database configuration to `backend/config/db.js`.
- Removed old backend scripts and temporary test files.
- Removed locally generated crash and diagnostic files.
- Fixed the reports route and retrieval of reported data.
- Added retrieval of variants associated with a supplier.
- Added backend methods for retrieving and managing orders and products.
- Added the required fields and relationships to order and product models.
- Updated routes, the authentication controller, and server initialization.

### Frontend

- Clarified the separation of responsibilities between Flutter controllers and services.
- Created a dedicated administrator controller for user management.
- Created and centralized the API configuration in `frontend/lib/services/api_config.dart`.
- Added a profile service and fixed user management calls.
- Fixed search, profile, supplier product, and administrator management controllers.
- Removed controllers made unnecessary by the services/controllers separation.
- Replaced hard-coded demo data with calls to backend services.
- Added services for categories, orders, and suppliers.
- Connected category, order history, merchant home, supplier, and product screens to backend data.
- Updated administrator, profile, login, order, and product management screens.
- Removed old merchant test data files.
- Added the required fields to the user model.
- Created and unified missing Flutter models for employees, ratings, favorites, suppliers, notifications, carts, products, reports, statistics, and variants.
- Consolidated user and order models and added JSON conversion utilities.
- Removed redundant old models and reorganized merchant models.
- Separated the user service from the administrator controller, adding a user service and an authentication result model.
- Fixed sign-in, registration, profile management, and employee creation to align the frontend with the backend and database.
- Fixed inconsistencies across several services, controllers, views, and Flutter widgets.
- Formatted and unified Flutter code in the affected services, controllers, views, and widgets.

### Configuration and security

- Added authentication middleware to protect routes that require a user session.
- Added request rate-limiting middleware.
- Strengthened authentication with password hashing and verification.

## 2026-09-11

### Backend and database

- Performed initial cleanup of the cart, supplier, product, and recipient models.
- Updated the database connection configuration.
- Connected the backend to the new database.
- Updated Node.js dependencies and their lockfile in `package.json` and `package-lock.json`.
- Fixed checkout and communication between backend routes and the frontend.
- Fixed retrieval of supplier variants.
- Fixed configuration of the backend application used by suppliers.

### Frontend

- Fixed checkout and the cart address screen.
- Updated the order service and the required Android configuration.
- Fixed the sign-in process and authentication service calls.
- Updated the login page and application initialization.

### Configuration and security

- Strengthened the project's and backend's `.gitignore` rules.
- Removed the backend environment file from the repository to avoid versioning sensitive information.
- Updated `frontend/pubspec.lock`.
