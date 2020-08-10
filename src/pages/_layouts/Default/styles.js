import { makeStyles } from "@material-ui/styles";
import { mainTheme } from "~/theme";

export const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    minHeight: "100%",
  },
  reducedHeight: {
    display: "flex",
    minHeight: "calc(100% - 64px)",
  },
  mobileReduction: { minHeight: "calc(100% - 56px)" },
  darker: {
    backgroundColor: mainTheme.palette.darker.main,
  },
});
