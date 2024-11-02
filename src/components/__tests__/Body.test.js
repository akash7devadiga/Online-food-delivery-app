import { fireEvent, getByRole, getByTestId, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../../../mocks/resListDataMock.json';
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  })
});

it("Should render the body component with the Search button", async () => {

  await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));

  //querying 
  const searchButton = screen.getByRole("button", { name: "Search" });

  expect(searchButton).toBeInTheDocument()
});


// it("Should load the Body component and search input, and also check if the search input functionality is working as expected for pizza ", async () => {

//   await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));

//   //querying 
//   const searchInput = screen.getByTestId("searchInput");
//   const searchButton = screen.getByRole("button", { name: "Search" });
//   const cards = screen.getAllByTestId("resCard");
//   console.log(searchInput);

//   //Assert
//   fireEvent.change(searchInput, { target: { value: "pizza" } });

//   fireEvent.click(searchButton);
//   //expect(searchInput).toBeInTheDocument();
//   expect(cards.length).toBe(20);
// });


it("Should load the Body component/top rated restaurants filter and filter should work accordingly", async () => {
  await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))
  //querying 

  const topRatedBtn = screen.getByRole("button", { name: "Top rated restaurants" })

  //assert
  expect(topRatedBtn).toBeInTheDocument();

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(3);
});