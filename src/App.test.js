import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const buttonColor = screen.getByRole('button', { name: "Change to blue" });
  //expect the bgcolor to be red
  expect(buttonColor).toHaveStyle({ backgroundColor: "red" })
  //click button
  fireEvent.click(buttonColor)
  //expect bgcolor to be blue
  expect(buttonColor).toHaveStyle({ backgroundColor: "blue" })
  //expect the button text to be "Change to red"
  expect(buttonColor.textContent).toBe("Change to red")

});

test('button turns to blue when clicked', () => {

})
