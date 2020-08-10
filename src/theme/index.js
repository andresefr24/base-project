import { createMuiTheme } from "@material-ui/core/styles";
import { rem, darken } from "polished";

export const mainTheme = {
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      light: "#aed2f5",
      main: "#3675b3",
      dark: "#11365a",
      contrastText: "#f2f8fd",
    },
    darker: {
      main: "#112031",
      contrastText: "#aed2f5",
    },
    lighter: {
      main: "#f2f8fd",
    },
    error: {
      light: "#fd908a",
      main: "#d3594f",
      dark: darken(0.2, "#d3594f"),
    },
    success: { light: "#5cc85c", main: "#5cb85c" },
    warning: { light: "#ffd279", main: "#f0ad4e" },
    google: { main: "#DB4437", dark: darken(0.05, "#DB4437") },
  },
  typography: {
    fontFamily: "'Open sans', sans-serif",
    h1: { fontSize: rem("49px", "16px") },
    h2: { fontSize: rem("39px", "16px") },
    h3: { fontSize: rem("31px", "16px") },
    h4: { fontSize: rem("25px", "16px") },
    h5: { fontSize: rem("20px", "16px") },
    caption: { fontSize: rem("13px", "16px") },
    button: { textTransform: "none" },
  },
};

export const theme = createMuiTheme({
  ...mainTheme,
});
