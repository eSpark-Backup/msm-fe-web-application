import { useState } from "react";
import { Box, Menu, MenuItem, Paper, Stack, Typography } from "@mui/material";
import {
  ComponentHeader,
  DynamicTable,
  DropdownFilterMenu,
} from "../../components";
import { columns } from "../../columns/alarm-columns";
import { alarmData } from "../../constant";
import { downArrow, userProfileImage } from "../../assets";
import AlarmModal from "./alarm-modal";

const usersToSelect = [
  {
    id: 1,
    userImage: userProfileImage,
    name: "John Deo",
    email: "Johndeo@gmail.com",
  },
  {
    id: 2,
    userImage: userProfileImage,
    name: "John Deo",
    email: "Johndeo@gmail.com",
  },
  {
    id: 3,
    userImage: userProfileImage,
    name: "John Deo",
    email: "Johndeo@gmail.com",
  },
];

const Alarms = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter1El, setFilter1El] = useState(null);
  const [filter2El, setFilter2El] = useState(null);
  const [filterValue1, setFilterValue1] = useState("last");
  const [filterValue2, setFilterValue2] = useState("filter");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleClickFilter1 = (event) => {
    setFilter1El(event.currentTarget);
  };

  const handleClickFilter2 = (event) => {
    setFilter2El(event.currentTarget);
  };

  return (
    <>
      <Paper>
        <Box sx={{ mb: 2 }}>
          <ComponentHeader
            onInputChange={(e) => console.log(e.target.value)}
            handleRefresh={() => {}}
          >
            <Stack direction="row" gap={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  columnGap: "10px",
                  cursor: "pointer",
                }}
                onClick={handleClickFilter1}
              >
                <Typography
                  sx={{
                    color: "#454545",
                    fontSize: "24.1px",
                    fontWeight: "400",
                  }}
                >
                  {filterValue1.slice(0, 1).toUpperCase() +
                    filterValue1.slice(1)}
                </Typography>
                <img src={downArrow} alt="Icon" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  columnGap: "10px",
                  cursor: "pointer",
                }}
                onClick={handleClickFilter2}
              >
                <Typography
                  sx={{
                    color: "#454545",
                    fontSize: "24.1px",
                    fontWeight: "400",
                  }}
                >
                  {filterValue2.slice(0, 1).toUpperCase() +
                    filterValue2.slice(1)}
                </Typography>
                <img src={downArrow} alt="Icon" />
              </Box>
            </Stack>
          </ComponentHeader>
        </Box>
        <DynamicTable
          data={alarmData}
          columns={columns(usersToSelect)}
          onRowClick={(item) => setSelectedRow(item)}
          handleSelectAssign={(item) => console.log(item)}
          handleInfo={handleClick}
        />
      </Paper>
      <AlarmModal
        open={selectedRow}
        handleClose={() => setSelectedRow(null)}
        handleCancel={() => console.log("clear")}
        handleAccept={() => console.log("acknowledge")}
        options={usersToSelect?.map((item) => {
          return { label: item?.name, value: item?.email };
        })}
      />
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
            width: "284px",
            padding: "0 !important",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Acknowledge</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
      <DropdownFilterMenu
        anchorEl={filter1El}
        setAnchorEl={setFilter1El}
        options={["Last Day", "weekly", "monthly"]}
        handleSelect={(item) => setFilterValue1(item)}
      />
      <DropdownFilterMenu
        anchorEl={filter2El}
        setAnchorEl={setFilter2El}
        options={["filter", "By Date / Time", "By Status", "By Severity"]}
        handleSelect={(item) => setFilterValue2(item)}
      />
    </>
  );
};

export default Alarms;
