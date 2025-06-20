import { Stack, Typography } from "@mui/material";
import { Dropdown, DynamicModal, OutlinedInput } from "../../components";

const AlarmModal = ({
  open,
  handleClose,
  handleCancel,
  handleAccept,
  options,
}) => {
  const inputStyle = { width: { xs: "100%", md: "49%" } };
  return (
    <DynamicModal
      open={open}
      handleClose={handleClose}
      cancelButtonText="Clear"
      acceptButtonText="Acknowledge"
      handleCancel={handleCancel}
      handleAccept={handleAccept}
    >
      <Typography color="#147FCC" fontSize={34} fontWeight={900}>
        Alarm Details
      </Typography>
      <Typography fontSize={26} fontWeight={"normal"}>
        Device Details
      </Typography>
      <Stack
        pb="26px"
        pt="31px"
        direction="row"
        flexWrap="wrap"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <OutlinedInput
          placeholder={"Originator"}
          name="originator"
          value={"Originator"}
          sx={inputStyle}
        />
        <OutlinedInput
          placeholder={"Severity"}
          name="severity"
          value={"Severity"}
          sx={inputStyle}
        />
        <OutlinedInput
          placeholder={"Start Time"}
          name="startTime"
          value={"Start Time"}
          sx={inputStyle}
        />
        <OutlinedInput
          placeholder={"Duration"}
          name="duration"
          value={"Duration"}
          sx={inputStyle}
        />
        <OutlinedInput
          placeholder={"Type"}
          name="type"
          value={"Type"}
          sx={inputStyle}
        />
        <OutlinedInput
          placeholder={"Status"}
          name="status"
          value={"Status"}
          sx={inputStyle}
        />
        <Dropdown
          name="assigne"
          variant="outlined"
          noLabel
          options={options}
          placeholder="Assigned"
          value="Assigned"
          sx={inputStyle}
        />
        <OutlinedInput
          placeholder={"Activity"}
          name="activity"
          value={"Activity"}
          sx={inputStyle}
        />
      </Stack>
    </DynamicModal>
  );
};

export default AlarmModal;
