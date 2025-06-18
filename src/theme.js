import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 769,
      lg: 1281,
      xl: 1921,
    },
  },
  palette: {
    primary: {
      main: "#F2F8FD",
      light: "#FFFFFF",
      dark: "#000000",
    },
  },
  typography: {
    fontFamily: "'Gilroy', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          fontSize: "20px",
          fontWeight: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          lineHeight: "0px",
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            background: "#147FCC",
            height: "54px",
            color: "#FFFFFF",
            borderRadius: "10.36px",
            padding: "14px 19.93px 10.87px 49px",
            "&:hover": {
              background: "#147FCC",
              color: "#FFF",
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            background: "#FFFFFF",
            height: "54px",
            color: "#0C89E2",
            borderRadius: "10.36px",
            border: "1px solid #0C89E2",
            padding: "14px 19.93px 10.87px 49px",
            "&:hover": {
              background: "#FFFFFF",
            },
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "16px 25px",
          boxShadow: "0px 4px 4px 0px #00000040",
          backgroundColor: "#FFFFFF",
          border: "1px solid #00000054",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "#00000087",
            fontWeight: "400",
            opacity: 1,
            fontSize: "19.2px",
          },
        },
        root: {
          opacity: 1,
          border: "1px solid #147FCC",
          width: "100%",
          outline: "none",
          padding: "0px 10px",
          fontSize: "19.2px",
          color: "#00000087",
          fontWeight: 400,
          borderRadius: "11px",
          backgroundColor: "#D9D9D9",
          height: "69px",
          ":focus": {
            border: "1px solid #147FCC",
          },
          fieldset: {
            border: 0,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 2.83px 2.83px 0px #00000040",
          padding: "0px 10px",
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:first-of-type": {
            backgroundColor: "transparent",
          },
          paddingBottom: "10px",
        },
      },
    },
  },
});

// box-shadow: ;
