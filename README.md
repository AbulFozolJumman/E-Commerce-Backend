# E-Commerce-Backend

## Live Server Link: https://e-commerce-backend-nu-three.vercel.app

## Api endpoints:

1. Create a New Product
   Endpoint: /api/products
   Method: POST

2. Retrieve a List of All Products
   Endpoint: /api/products
   Method: GET

3. Retrieve a Specific Product by ID
   Endpoint: /api/products/:productId
   Method: GET

4. Update Product Information
   Endpoint: /api/products/:productId
   Method: PUT

5. Delete a Product
   Endpoint: /api/products/:productId
   Method: DELETE

6. Search a product
   Endpoint: /api/products?searchTerm=iphone
   Method: GET

7. Create a New Order
   Endpoint: /api/orders
   Method: POST

8. Retrieve All Orders
   Endpoint: /api/orders
   Method: GET

9. Retrieve Orders by User Email
   Endpoint: /api/orders?email=level2@programming-hero.com
   Method: GET

## Instruction of how to run this application locally:

1. Clone the repository
2. Open the project in Code editor
3. Run the command "npm install"
4. Create a .env file and put PORT value and the MongoDB URL value as DB_URL
5. Run the command "npm run build"
6. Run the command "npm run start:dev"
