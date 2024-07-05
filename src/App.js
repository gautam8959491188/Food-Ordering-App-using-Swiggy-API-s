import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/ProfileClass.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import store from "./utils/Store.js"
import Cart from "./components/Cart.js";


//import Instamart from "./components/Instanart.js";
// This is the normal way to import the component but now we need to iport in a lazy way to p[erform chunking.

const Instamart = lazy(() => import("./components/Instanart.js"));

const AppLayout = () => {

   const [user,setUser] = useState({
    name: "Gautam Upadhyay",
    email: "123@gmail.com",
   });
    return(
        <Provider store={store}>
    
    <UserContext.Provider value={{
        user: user,
        setUser: setUser,
    }}>
    <Header />
    <Outlet />
    <Footer />
    </UserContext.Provider>
    </Provider>
    );

  
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children:[{
                    path: "profile",
                    element: <Profile />
                },
            ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense>
                    <Instamart />
                    </Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ]
    },
  


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

