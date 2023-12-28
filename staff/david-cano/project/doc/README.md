## Functional Description

### Data Model

User
- id (string, unique, required)
- name (string, required)
- email (string, unique, required)
- password (string, required)

Product
- id (string, unique, required)
- brand (string, required)
- model (string, required)
- price (number, required)
- image (string, required)
- description (string, required)
- sizes (['xs', 's', 'm', 'l', 'xl'], required)
- stock (number, required)

Item
- id (string, unique, required)
- product (Product.id, required)
- quantity (number, required)
- size (string, required)
- price (number, required)

Cart
- id (string, unique, required)
- items ([Item.id], required)

Order
- id (string, unique, required)
- cart (Cart.id, required)
- date (Date, required)
- paymentMethod (['card', 'cash', 'paypal', ...])