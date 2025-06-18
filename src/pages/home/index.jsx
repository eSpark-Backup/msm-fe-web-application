import { Box, Button, Paper, Typography } from "@mui/material";
import DynamicTable from "../../components/dynamic-table";
import { columns } from "../../columns/dummyColumns";
import { tableData } from "../../constant/index.js";
import DynamicModal from "../../components/dynamic-modal.jsx";
import { useState } from "react";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Box sx={{ width: "100%" }}>
      <Paper>
        <DynamicTable
          data={tableData}
          columns={columns()}
          isLoading={false}
          total={2}
        />
        <Button
          variant="secondary"
          onClick={() => setOpenModal(true)}
          sx={{ mt: "30px" }}
        >
          Open Modal
        </Button>
        <DynamicModal
          open={openModal}
          cancelButtonText={"Cancel"}
          acceptButtonText={"Accept"}
          handleClose={() => setOpenModal(false)}
          handleCancel={() => setOpenModal(false)}
          handleAccept={() => setOpenModal(false)}
        >
          <Typography sx={{ mb: "30px" }}>Hello World</Typography>
        </DynamicModal>
      </Paper>
    </Box>
  );
};

export default Home;
