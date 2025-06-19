import {
  Avatar,
  Backdrop,
  Box,
  Chip,
  LinearProgress,
  Menu,
  MenuItem,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  downArrow,
  download,
  exportIcon,
  threeVerticalDots,
  userProfileImage,
} from "../assets";
import { getValue } from "../utils";
import { useState } from "react";

const DynamicTable = ({
  handleDownload,
  handleExport,
  handleInfo,
  data,
  columns,
  isLoading,
  page,
  handlePageChange,
  total,
  ...rest
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const extendedColumns = columns?.map((column) => {
    return { ...column, key: column.key.split(".") };
  });
  const generateCell = (column, item) => {
    const cell = column.component
      ? column.component(item)
      : getValue(item, column.key);
    return column.key[0] === "action" ? (
      <Stack
        direction="row"
        justifyContent={"center"}
        justifyItems="center"
        alignItems="center"
        spacing={1}
      >
        {column.component ? (
          cell
        ) : (
          <>
            <img
              src={download}
              alt="Icon"
              style={{ cursor: "pointer" }}
              onClick={handleDownload}
            />
            <img
              src={exportIcon}
              alt="Icon"
              style={{ cursor: "pointer" }}
              onClick={handleExport}
            />
          </>
        )}
      </Stack>
    ) : column.key[0] === "action2" ? (
      <Stack
        direction="row"
        justifyContent={"center"}
        justifyItems="center"
        alignItems="center"
        spacing={1}
      >
        {column.component ? (
          cell
        ) : (
          <>
            <img
              src={threeVerticalDots}
              alt="Icon"
              style={{ cursor: "pointer" }}
              onClick={handleInfo}
            />
          </>
        )}
      </Stack>
    ) : column.key[0] === "assignee" && cell === "Non-Assign" ? (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "3px",
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "22.5px" }}>
          {cell}
        </Typography>
        <img
          src={downArrow}
          alt="Icon"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
      </Box>
    ) : column.key[0] === "chip" ? (
      <Chip label={item?.chip?.label} variant={item?.chip?.variant} />
    ) : (
      cell
    );
  };
  return (
    <>
      {data?.length === 0 && !isLoading ? (
        <Box>No Data Found</Box>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {extendedColumns?.map((column, index) => (
                  <TableCell key={`${index}`}>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      //   justifyContent={
                      //     column.key[0] === "action"
                      //       ? "flex-end"
                      //       : column.left
                      //       ? "flex-start"
                      //       : "center"
                      //   }
                      justifyContent={"center"}
                    >
                      <Stack direction="row">{column.name}</Stack>
                    </Stack>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {!isLoading && (
              <TableBody>
                {data?.map((item, index) => (
                  <TableRow key={index}>
                    {extendedColumns?.map((column) => (
                      <TableCell
                        sx={{
                          textAlign: "center",
                          pl: "0px",
                        }}
                        // sx={{ textAlign: "center" }}
                        key={column.key.join(".")}
                      >
                        {generateCell(column, item)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
          {isLoading && (
            <Box>
              <LinearProgress />
            </Box>
          )}
        </TableContainer>
      )}
      {data?.length >= 7 && !isLoading ? (
        <Stack
          sx={{ marginTop: { xs: "20px", sm: "10px" } }}
          p={{ xs: 0, sm: 2 }}
          alignItems="center"
        >
          <Pagination
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={
              handlePageChange ? (_, page) => handlePageChange(page) : () => {}
            }
            count={Math.ceil((total || 1) / 7)}
          />
        </Stack>
      ) : null}

      <Backdrop
        open={open}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(0.5px)",
          backgroundColor: "#A49D9D7A",
        }}
      >
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{ mt: "10px" }}
          PaperProps={{
            sx: {
              width: "380px",
              p: "10px 30px",
              borderRadius: "0px",
              border: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              columnGap: "10px",
            }}
          >
            <Box
              sx={{
                width: "304px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#D9D9D978",
                p: "15px",
                columnGap: "10px",
              }}
            >
              <Avatar
                src={userProfileImage}
                alt="User"
                sx={{
                  width: 57,
                  height: 57,
                  objectFit: "fill",
                }}
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", rowGap: "0px" }}
              >
                <Typography sx={{ fontSize: "22.5px", fontWeight: "400" }}>
                  John Deo
                </Typography>
                <Typography sx={{ fontSize: "13.3px", fontWeight: "400" }}>
                  Johndeo@gmail.com
                </Typography>
              </Box>
            </Box>
            <img
              src={downArrow}
              alt="Icon"
              style={{ transform: "rotate(180deg)", cursor: "pointer" }}
              onClick={handleClose}
            />
          </Box>
        </Menu>
      </Backdrop>
    </>
  );
};

export default DynamicTable;
