export const MuiButton = {
  defaultProps: {
    // disableFocusRipple: true,
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      borderRadius: "8px",
      textTransform: "none",
      padding: "16px 32px 16px 32px",
      fontSize: "1rem",
      lineHeight: "28px",
      ":focus": {
        outline: "none !important",
      },
    },
    sizeSmall: {
      height: "44px",
      padding: "8px 31px 8px 31px",
    },
    sizeMedium: {
      height: "52px",
      padding: "12px 32px 12px 32px",
    },

    sizeLarge: {
      height: "60px",
      padding: "16px 32px 16px 32px",
    },
  },
};
