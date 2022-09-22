import { Palette, ThemeOptions } from "@mui/material";

export function components(palette) {
  return {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: `1px solid ${palette.divider}`,
          boxShadow: "none",
        },
      },
    },
  };
}
