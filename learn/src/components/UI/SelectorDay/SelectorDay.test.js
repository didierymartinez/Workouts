import { render, screen, fireEvent } from "@testing-library/react";
import SelectorDay from "./SelectorDay";

const today = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const day = today.getDate();
const month = monthNames[today.getMonth()];
const year = today.getFullYear();
const txtDate = `${day} ${month} ${year}`


test("render selector day", () => {
  render(<SelectorDay></SelectorDay>);

  const sel = screen.getByText(new RegExp(txtDate, 'ig'));
  expect(sel).toBeInTheDocument();
});

test("previous day", async () => {
  render(<SelectorDay></SelectorDay>);

  const btnPrev = screen.getByRole('button', { name: /previous/ig});
  fireEvent.click(btnPrev);
  const txtDate = `${day-1} ${month} ${year}`
  await screen.findAllByText(new RegExp(txtDate, 'ig'));

})

test("next day", async () => {
  render(<SelectorDay></SelectorDay>);

  const btnNext = screen.getByRole('button', { name: /last/ig});
  fireEvent.click(btnNext);
  const txtDate = `${day+1} ${month} ${year}`
  await screen.findAllByText(new RegExp(txtDate, 'ig'));

})