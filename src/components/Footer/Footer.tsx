import Stack from '@mui/material/Stack';
import logo from "../../assest/logo.png"
import appleStore from "../../assest/applestore.svg"
import androidStore from "../../assest/googleplay.svg"
import scanner from "../../assest/scanner.png"
import "./Footer.css"
  function Footer() {
    const lanList = ["English","Español (España)","Español (España)","عَرَبِيّ, ʿarabīc","日本語","Türkçe","中文（中国）"]
    const highlist = ["Gift Card","Vouchers","Cash Back","offers","Referals"]
    const about = ["Terms of Service","Privacy Policy"]
    return (
    //   <button disabled={disabled}>{title}</button>
    <>
    <Stack   className='footer-container'
justifyContent={'space-between'}
direction={{ xs: 'column', sm: 'row',md:"row",xl:"row" }}
spacing={2}
>
    <Stack spacing={2}>
        <img src={logo} className='logo-footer'/>
        <span className='footer-info'>Scan to download the MetaVoeux app.</span>
        <Stack  direction="row" spacing={1}>
            <Stack  direction="column" spacing={1}>
            <img src={androidStore} className='android-logo' />
            <img src={appleStore} className='apple-logo'/>
            </Stack>
            <img src={scanner}  className='scanner-imag'/>
        </Stack>
    </Stack>
    <Stack className='language-list'>
        <h6>Languagae</h6>
{lanList.map(x => (
    <span>{x}</span>
))}
    </Stack>
    <Stack className='language-list'>
        <h6>Highlights</h6>
{highlist.map(x => (
    <span>{x}</span>
))}
    </Stack>
    <Stack className='language-list'>
        <h6>About</h6>
{about.map(x => (
    <span>{x}</span>
))}
    </Stack>
    
</Stack>
<Stack className='copyright'>
        <span>Voeux IT Solution LLC © 2023. All Rights Reserved</span>
    </Stack>
    </>

    );
  }
  
  export default Footer
