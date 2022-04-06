const textArea = {
  defaultProps: { variant: "rounded" },
  variants: {
    rounded: {
      borderWidth: 0,
      borderRadius: 2,
      bg: "main.input-field-bg",
      _focus: {
        borderWidth: 1,
        bg: "main.fg",
        borderColor: "primary.500",
      },
    },
    underlined: {},
  },
};

export default textArea;
