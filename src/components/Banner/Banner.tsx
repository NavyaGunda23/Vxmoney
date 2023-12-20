import Stack from '@mui/material/Stack';
import BannerImg from "../../assest/banner.png"
  function Banner() {
    return (
    //   <button disabled={disabled}>{title}</button>
<Stack  direction="column" 
  sx={{ 
    width: { xs: "100%", md: 'unset' },
    padding:1
}}
>
 <img src={BannerImg}  />
</Stack>

    );
  }
  
  export default Banner
