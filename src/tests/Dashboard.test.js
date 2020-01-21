import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../containers/Dashboard';
import ThemeDefault from "../theme-default";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

test('renders Dashboard without crashing', () => {
    expect(render(<MuiThemeProvider muiTheme={ThemeDefault}><Dashboard /></MuiThemeProvider>));
});
