const inputField = {
  defaultProps: {
    variant: "rounded",
    placeholderTextColor: "shade.50",
    borderColor: "main.stroke-s1",
    color: "shade.600",
    selectionColor: "primary.300",
    _focus: {
      bg: "main.focus-form-dark",
      borderColor: "main.fg",
    },
  },
  variants: {
    rounded: {
      borderWidth: 0,
      borderRadius: "full",
      bg: "main.input-field-bg",
      _focus: {
        bg: "main.fg",
        borderWidth: 1,
        borderColor: "primary.500",
      },
    },
    underlined: {
      px: 0,
      pl: -1,
      fontSize: "md-2",
      placeholderTextColor: "shade.50",
    },
  },
};

export default inputField;
