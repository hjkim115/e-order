# Food Ordering Website for Restaurant Employees

This website is food ordering website for restaurant employees. Users can select tables, add items to cart and place orders. Once orders are placed, they are sent cloud so that it can be sent to POS (Point of Sale) system and processed.

## URL

**Available at:** <a href='https://e-order-nine.vercel.app/'>https://e-order-nine.vercel.app/</a>

## Technologies Used

![Diagram](https://github.com/hjkim115/e-order/blob/main/public/readMeImage/diagram.png)

- Developed user interface of the website using **Next.js (React.js)** and **TypeScript**.
- Connected user interface with **Firestore** cloud database and added user **authentication** features using **Firebase SDK**.
- Used **AWS S3 bucket** and **Cloudfront CDN** to dynamically serve food images.

## Features

### Home

![Home](https://github.com/hjkim115/e-order/blob/main/public/readMeImage/home.png)

- On the homepage restaurant's logo and table number are displayed, and users can go to the menus page by clicking the 'order now' button.

### Menus

![Menus](https://github.com/hjkim115/e-order/blob/main/public/readMeImage/menus.png)

- Users can filter menus by category using the scroll buttons at the top of the 'menus' page.
- When users select menu they want, they will be taken to the page, where they can select options and quantity and add to cart.
- Once users have added menu to the cart, they can move to the cart page by clicking the cart button at the bottom of the 'menus' page.

### Cart

![Cart](https://github.com/hjkim115/e-order/blob/main/public/readMeImage/cart.png)

- On the 'cart' page, users can delete or change the quantity of selected items before placing the order.
- Once an order is completed, order details are displayed with button to return to home.
