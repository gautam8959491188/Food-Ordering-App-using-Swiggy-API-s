import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header",()=>{
    const header = render(
    <StaticRouter>
    <Provider store={store}>
        <Header />
        </Provider>
        </StaticRouter>
    )
    const logo = header.getAllByAltText("logo");
    expect(logo[0].src).toBe("http://localhost/dummy.png"); 
     
});

test("Status should be onine while rendering header",()=>{
    const header = render(
    <StaticRouter>
    <Provider store={store}>
        <Header />
        </Provider>
        </StaticRouter>
    )
    const onlineStatus = header.getByAltText("online-status");
    expect(onlineStatus.innerHTML).toBe("✔️");  //I haven't implement this functionality yet in my code.
     
});

test("SCart should be 0 while rendering header",()=>{
    const header = render(
    <StaticRouter>
    <Provider store={store}>
        <Header />
        </Provider>
        </StaticRouter>
    )
    const cart = header.getByAltText("cart");
    expect(cart.innerHTML).toBe("Cart - 0 Items");  //I haven't implement this functionality yet in my code.
     
});