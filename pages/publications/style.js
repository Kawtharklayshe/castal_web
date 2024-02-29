import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

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
        display:'none',
      color: `${theme.palette.primary.main} !important`,
    },
    "& .swiper-button-prev": {
        display:'none',
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
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
    width: "80%",
    height: "600px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
  },
  // Slider class
  slider: {
    display:'flex',
    justifyContent:"center",
    borderRadius: "10px",
    padding: "8px 0px",
    height: "100%",
  },
  buttonClass: {

    position: 'absolute',
    color: theme.palette.primary.main,
    bottom: 0,
    right: 0,
    padding: 16, /* Assuming theme.spacing(2) equals 16px */
    marginTop: 72, /* Assuming theme.spacing(4) equals 32px */
  },

}));

export default useStyles;
