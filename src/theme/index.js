import PropTypes from 'prop-types'
import { useMemo } from "react";
import palette from "./palette";
import typography from "./typography";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

const ThemeProvider = (props) => {
  const { children } = props;

  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider>
      <MUIThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider

