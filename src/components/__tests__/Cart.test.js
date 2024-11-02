import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA_NAME from '../../../mocks/resMenuMock.json';
import RestaurantMenu from "../../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore.js';
import { BrowserRouter } from "react-router-dom";
import Cart from '../Cart.js';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_NAME)
    }
  })
})


it("Should load the restaurant menu component ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  })

  //querying

  const addButtons = screen.getAllByTestId("addBtns")
  fireEvent.click(addButtons[0]);
  const cartItems = screen.getAllByTestId("food-items");
  expect(cartItems.length).toBe(5);
})