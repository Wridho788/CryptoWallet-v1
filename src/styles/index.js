import { extendTheme } from "native-base";
import button from "./button";
import mainTheme from "./theme/main";
import typography from "./typography";
import radius from "./border/radius";
import textArea from "./input/text-area";
import inputField from "./input/input-field";

const styles = extendTheme({
  fontConfig: {
    Poppins: {
      400: {
        normal: "RobotoRegular",
      },
      500: {
        normal: "RobotoMedium",
      },
      600: {
        normal: "RobotoSemiBold",
      },
      700: {
        normal: "RobotoBold",
      },
    },
  },
  colors: mainTheme,
  ...typography,
  radii: radius,
  components: {
    Button: button,
    Text: {
      defaultProps: {
        fontSize: "md-2",
        fontWeight: 500,
        color: "shade.600",
      },
    },
    TextArea: textArea,
    Input: inputField,
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
});

export default styles;
