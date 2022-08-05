import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import AppUtillTest from '../../../AppUtilTest';
import Layout from './Layout';

describe('Checking Layout Component', () => {
  it('Testing Layout component render to DOM', async () => {
    render(
      <AppUtillTest>
        <Layout />
      </AppUtillTest>
    );
    const baseComponent = screen.getByTestId('home-wrapper');
    const baseComponentStyles = getComputedStyle(baseComponent);
    expect(baseComponentStyles.display).toBe('flex');
    expect(baseComponentStyles.flexDirection).toBe('column');
    expect(baseComponentStyles.justifyContent).toBe('center');
    expect(baseComponentStyles.alignItems).toBe('center');
  });
});
