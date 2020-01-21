import React from 'react';
import { render } from '@testing-library/react';
import Login from '../containers/Login';
import ThemeDefault from "../theme-default";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

test('renders without crashing', () => {
    const { getByText } = render(<MuiThemeProvider muiTheme={ThemeDefault}><Login /></MuiThemeProvider>);
    const linkElement = getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
});
