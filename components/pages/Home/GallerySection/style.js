import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // root class
  root: (props) => ({
    paddingTop: "8px",
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }),
  // Inner Container class
  innerContainer: {
    maxWidth: "95%",
  },
  // Title class
  title: {
    color: theme.palette.onBackground.light,
    margin: "8px 0px !important",
  },
  // SubTitle class
  subTitle: {
    color: theme.palette.onBackground.main,
    margin: "8px 0px !important",
    fontWeight: "600 !important",
  },
  // Swiper class
  swiperRoot: {
    paddingBottom: "40px",
    "& .swiper-button-next": {
      color: `${theme.palette.primary.main} !important`,
    },
    "& .swiper-button-prev": {
      color: `${theme.palette.primary.main} !important`,
    },
    "& .swiper-pagination-bullet": {
      opacity: "1",
      backgroundColor: "#bcbcbc !important",
      width: "10px !important",
      height: "10px !important",
      color: "inherit !important",
    },
    "& .swiper-pagination-bullet-active": {
      opacity: "1",
      color: `${theme.palette.primary.main} !important`,
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
  },
  // Slider class
  slider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "340px",
  },
  // Slider image class
  sliderImage: {
    width: "100%",
    minWidth: "300px",
    height: "100%",
    objectPosition: "center",
    objectFit: "cover",
    borderRadius: "20px",
  },
}));

export default useStyles;
