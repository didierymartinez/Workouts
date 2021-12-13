import { render, screen } from "@testing-library/react";
import SelectorDay from "./SelectorDay";

test("render selector day", () => {
  render(<SelectorDay></SelectorDay>);
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

  const sel = screen.getByText(new RegExp(txtDate, 'ig'));
  expect(sel).toBeInTheDocument();
});
