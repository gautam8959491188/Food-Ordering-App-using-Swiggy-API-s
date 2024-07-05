import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import "@testing-library/jest-dom";
import { RESTAUTAMT_DATA } from "../../../mocks/data";

global.fetch(()=>{
 return Promise.resolve({
    json: ()=>{
        return Promise.resolve(RESTAUTAMT_DATA)//This data we need to create by taking the response from the API.
                                               // Refer notes for more explaination.
    }
 })
});

test('Shimmer loading on Homepage', () => {
  const body = render(
    <StaticRouter>
  <Provider store={store}>
    <Body />
    </Provider>
    </StaticRouter>
    );
    const shimmer = body.getByTestId("shimmer");
    //expect(shimmer).toBeInDocument(); //This function checks weather the component is load in DOM or not.
                                      // To use this function we need to install a new library and import it and the name
                                      // of library is jest-dom
    expect(shimmer.children.length).toBe(10);
})


test('Restaurant shoule load on Homepage', async () => {
    const body = render(
      <StaticRouter>
    <Provider store={store}>
      <Body />
      </Provider>
      </StaticRouter>
      );
      
      await waitFor(()=>expect(body.getByTestId("search-btn")));
      const resList = body.getByTestId("res-list");
      expect(resList.children.length).toBe(15) //Here we put 15 for now but at our end we always need to check that how
                                               // many are coming on the page because it always changes with time.
  })
  

  
test('Search for string(food) on Homepage', async () => {
    const body = render(
      <StaticRouter>
    <Provider store={store}>
      <Body />
      </Provider>
      </StaticRouter>
      );
      
      await waitFor(()=>expect(body.getByTestId("search-btn")));
      const input = body.getByTestId("search-input");
      fireEvent.change(input, {
        target:{
            value: "food",
        },
      });
      const searchBtn = body.getByTestId("search-btn")
      fireEvent.click(searchBtn);
      const resList = body.getByTestId("res-list")
      expect(resList.children.length).toBe(4) //Here we put 4 for now because after writting food we are getting 4 items
                                               // otherwise it should change according to the searches.
  })