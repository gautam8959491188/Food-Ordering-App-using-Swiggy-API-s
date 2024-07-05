import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import "@testing-library/jest-dom";
import { MENU_DATA } from "../../../mocks/data";
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header";

global.fetch(()=>{
 return Promise.resolve({
    json: ()=>{
        return Promise.resolve(MENU_DATA)//This data we need to create by taking the response from the API.
                                         // Refer notes for more explaination.
    }
 })
});


test('Add items to Cart', async () => {
    const body = render(
      <StaticRouter>
    <Provider store={store}>
        <Header />
      <RestaurantMenu />
      </Provider>
      </StaticRouter>
      );
      
      await waitFor(()=>expect(body.getByTestId("menu")));
      const addBtn = body.getAllByTestId("addBtn");
      fireEvent.click(addBtn[0]);
      const cart = body.getByTestId("cart");
      expect(cart.innerHTML).toBe("Cart - 1 Item") //Here we put 15 for now but at our end we always need to check that how
                                               // many are coming on the page because it always changes with time.
  })