import { Button, styled } from "@mui/material";

export const RootContainer = styled("div")({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

export const TreeContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

export const DownloadButton = styled(Button)({
  width: "100%",
  height: "45px",
  borderRadius: 0,
});

export const TreeCapture = styled("div")({
  width: "100%",
  height: "100%",
});
