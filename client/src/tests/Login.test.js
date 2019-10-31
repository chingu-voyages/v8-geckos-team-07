import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Login from '../components/Login';

// TODO: componentDidMount test ?
// TODO: const buttonList / provider information ?
// TODO: this.props.history.push('/dashboard')
// TODO: the button has proper class and renders branding .svg

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
    // should be HEADER
    expect(LOGIN.childNodes[0].tagName).toEqual('HEADER');
    // TODO: refactor CIRCLE into separate component
    expect(LOGIN.childNodes[1].tagName).toEqual('DIV');
    expect(LOGIN.childNodes[1].classList).toContain('circle');
    // should have multiple childNodes
    expect(LOGIN.childNodes[1].childElementCount).toBe(4);
    expect(LOGIN.childNodes[1].childNodes[0].tagName).toEqual('H2');
    expect(LOGIN.childNodes[1].childNodes[1].tagName).toEqual('OL');
    expect(LOGIN.childNodes[1].childNodes[2].tagName).toEqual('P');
    expect(LOGIN.childNodes[1].childNodes[3].tagName).toEqual('DIV');
    expect(LOGIN.childNodes[1].childNodes[3].classList).toContain('btn__social--list');
    // should be google button image
    expect(LOGIN.childNodes[1].childNodes[3].childElementCount).toBe(1);
    expect(LOGIN.childNodes[1].childNodes[3].childNodes[0].tagName).toEqual('BUTTON');
    expect(LOGIN.childNodes[1].childNodes[3].childNodes[0].childNodes[0].tagName).toBe('IMG');
    expect(LOGIN.childNodes[1].childNodes[3].childNodes[0].textContent).toContain('Sign in using Google');
    // should be a FOOTER
    expect(LOGIN.childNodes[2].tagName).toEqual('FOOTER');  
      

  });
});
