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
          columnGap: "10px",
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
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "separate !important",
          borderSpacing: 0,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          ".MuiTableCell-root": {
            color: "#000000",
            borderRadius: "6px",
            borderBottom: "none",
            fontSize: "22.5px",
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "initial",
            padding: "20px 0px",
          },
          "& .MuiTableRow-root": {
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              border: "1px solid #00000066",
              borderRadius: 12,
              pointerEvents: "none",
            },
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            borderBottom: "none",
            color: "#000000",
            fontSize: "22.5px",
            padding: "10px 16px",
          },
          // position: "relative",
          // "&::after": {
          //   content: '""',
          //   position: "absolute",
          //   inset: 0,
          //   border: "1px solid #00000066",
          //   borderRadius: "0 0 12px 12px",
          //   pointerEvents: "none",
          // },
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: "green" },
          style: {
            paddingTop: "3.41px",
            paddingRight: "14px",
            paddingBottom: "3.41px",
            paddingLeft: "14px",
            backgroundColor: "#A9F49A",
            border: "0.57px solid #30F408",
            borderRadius: "10.5px",
            color: "#22A309",
            textTransform: "capitalize",
            height: "21px",
          },
        },
        {
          props: { variant: "red" },
          style: {
            paddingTop: "7px",
            paddingRight: "14px",
            paddingBottom: "3.41px",
            paddingLeft: "14px",
            backgroundColor: "#E434153B",
            border: "0.57px solid #E43415",
            borderRadius: "10.5px",
            color: "#E43415",
            textTransform: "capitalize",
            height: "27px",
          },
        },
        {
          props: { variant: "yellow" },
          style: {
            paddingTop: "7px",
            paddingRight: "14px",
            paddingBottom: "3.41px",
            paddingLeft: "14px",
            backgroundColor: "#E4D3153B",
            border: "0.57px solid #E4AD15",
            borderRadius: "10.5px",
            color: "#E4AD15",
            textTransform: "capitalize",
            height: "27px",
          },
        },
      ],
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#e0e0e0",
        },
        bar: {
          borderRadius: 5,
          backgroundColor: "#0C89E2",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#fff",
          borderRadius: "12px !important",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
          border: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          padding: "8px 16px",
          color: "#000",
          backgroundColor: "#fff !important",
          "&:hover": {
            color: "#00000066",
            backgroundColor: "#fff !important",
          },
        },
      },
    },
  },
});
