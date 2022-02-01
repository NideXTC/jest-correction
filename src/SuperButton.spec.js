import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AwesomeButton from "./SuperButton";

configure({ adapter: new Adapter() });

test("Super Button", () => {
  // Shallow the component and store it into a variable
  // https://enzymejs.github.io/enzyme/docs/api/shallow.html
  const wrapper = shallow(<AwesomeButton />);

  // Test if the text is "I'm an awesome button"
  // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/text.html
  // https://jestjs.io/docs/expect#toequalvalue
  expect(wrapper.text()).toEqual("I'm an awesome button");

  // Simulate a click
  // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/find.html
  // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html

  wrapper.find("button").simulate("click");

  // Test if the text is "I'm not a super awesome button?"
  expect(wrapper.text()).toEqual("I'm not a super awesome button?");

  // (check if the color is red)
  // Find the button - https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/find.html
  // Check the prop (style) - https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/prop.html
  // Check (with toHaveProperty) if the background is red
  // https://jestjs.io/docs/expect#tohavepropertykeypath-value

  expect(wrapper.find("button").prop("style")).toHaveProperty(
    "background",
    "red"
  );
});
