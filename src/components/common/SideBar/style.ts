import { Button, styled } from "@mui/material";

export const SideBarContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  backgroundColor: theme.palette.common.white,
  borderLeft: "solid 1px #ddd",
  padding: theme.spacing(2),
}));

export const TitleBox = styled("div")({
  height: "60px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "base-line",
  marginTop: "15px",
});

export const Title = styled("div")({
  fontSize: "22px",
  fontWeight: 800,
});

export const SubTitle = styled("div")({
  fontSize: "15px",
  color: "#888",
});

export const ControllTitle = styled("h4")({});

export const ControllContainer = styled("div")({
  width: "100%",
});

const BaseWrap = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "baseline",
});

export const PathFucWrap = styled(BaseWrap)({
  height: "200px",
});

export const NodeSizeWrap = styled(BaseWrap)({
  height: "100px",
});

export const OutLiendButton = styled(Button)({
  width: "100%",
  height: "35px",
});

export const Pos = styled("div")({
  fontSize: "13px",
  fontWeight: 580,
});
