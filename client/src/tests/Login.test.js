import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Login from '../components/Login';

// TODO: list the test required


describe('Login page renders correctly', () => {
  test('Page loads with header, circle, some user instructions, and a login button', () => {
    const { getByTestId } = render(
      <Login />,
    );

    // get root node created by Login
    const LOGIN = getByTestId('Login');

    // should have class "habit-tracker"
    expect(LOGIN.classList).toContain('habit-tracker');

    // should be 3 elements: header; circle; footer
    expect(LOGIN.childElementCount).toBe(3);
    expect(LOGIN.childNodes[0].tagName).toEqual('HEADER');
    // TODO: refactor CIRCLE into separate component
    expect(LOGIN.childNodes[1].tagName).toEqual('DIV');
    expect(LOGIN.childNodes[2].tagName).toEqual('FOOTER');
  });
});
