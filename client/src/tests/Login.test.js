import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Login from '../components/Login';

// TODO: list the test required


describe('Login page renders correctly', () => {
  test('Page loads with header, circle, some user instructions, and a login button', () => {
    const { getByTestId } = render(
      <Login />,
    );

    // get root node created by Login
    const vc = getByTestId('Login');

    // should have class "habit-tracker"
    expect(vc.classList).toContain('habit-tracker');

    // should fail
    expect(vc.childElementCount).toBe(16);
  });
});
