const button = {
  baseStyle: {
    borderRadius: "full",
  },
  defaultProps: { variant: "primary" },
  variants: {
    primary: {
      bg: "primary.500",
      _text: {
        color: "main.stroke",
      },
      _pressed: {
        bg: "primary.600",
      },
      _disabled: {
        bg: "primary.250",
        color: "main.stroke",
      },
    },
    secondary: {
      bg: "main.stroke",
      _text: {
        color: "primary.500",
        fontWeight: 600,
      },
      _pressed: { bg: "primary.100" },
      _disabled: {
        bg: "primary.250",
        _text: { color: "main.stroke" },
      },
    },
    ghostPrimary: {
      bg: "transparent",
      borderColor: "primary.500",
      borderWidth: "1px",
      _text: {
        color: "primary.500",
        fontWeight: 600,
      },
    },
  },
  sizes: {
    sm: {
      fontSize: "12px",
      px: 4,
      height: "36px",
    },
    lg: {
      fontSize: "14px",
      px: 6,
      height: "42px",
    },
  },
};

export default button;
