# 📚 Book Vibe

**Book Vibe** is a modern, fully responsive web application built with React that empowers users to discover books, view deep-dive details, and curate their own reading journey. It features a clean, tabbed interface to manage books you've read versus books you want to read, complete with dynamic sorting, persistent notifications, and a polished UI.

![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-green?style=for-the-badge) 
*(https://musabbir-book-vibe.netlify.app/)*

## ✨ Key Features

* **Interactive Book Curation:** Seamlessly add books to a "Read List" or a "Wishlist" with dedicated action buttons on the details page.
* **Smart State Management & Validation:** Prevents duplicate entries. If a book is already on the wishlist, a responsive toast notification alerts the user immediately.
* **Dynamic Sorting:** The "Listed Books" dashboard includes a functional dropdown menu allowing users to sort their curated lists by specific metrics, such as **Number of Pages** or **Rating**.
* **Tabbed Navigation:** A clean UI component allows users to toggle instantly between their Read List and Wishlist without reloading the page.
* **Graceful Empty States:** Beautifully styled fallback UI prompts the user to start exploring if they visit their lists before adding any books.
* **Fully Responsive Design:** Carefully crafted to ensure a seamless experience across desktop monitors, tablets, and mobile devices.
* **Custom 404 Handling:** A dedicated error page elegantly catches broken links or missing routes and guides users back to the homepage.

## 🛠️ Technology Stack

### Core Frontend
* **[React (v18)](https://react.dev/):** Component-driven UI development.
* **[Vite](https://vitejs.dev/):** Lightning-fast local development server and optimized production build tool.

### Routing & State
* **[React Router DOM (v6)](https://reactrouter.com/):** Utilizing the modern Data Router API (`createBrowserRouter`) for seamless Single Page Application (SPA) navigation and error boundary handling.
* **Context API:** Used for managing the global state of the user's saved books across different components and browser sessions.

### Styling & UI Libraries
* **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework used for all responsive layouts and custom component styling.
* **[DaisyUI](https://daisyui.com/):** Tailwind CSS component library used to rapidly build beautiful, accessible UI elements like buttons, dropdowns, and cards.
* **[React Icons](https://react-icons.github.io/react-icons/):** Providing clean, scalable SVG icons throughout the application interface.
* **React Tabs:** Used for the accessible layout switching on the Listed Books page.
* **React Toastify / React Hot Toast:** Used for rendering smooth success and warning alert popups.

### Deployment
* **[Netlify](https://www.netlify.com/):** Live production hosting, configured with a `_redirects` file to perfectly manage client-side routing.

## 🚀 Getting Started (Local Development)

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/musabbirrahman/book-vibe](https://github.com/musabbirrahman/book-vibe)