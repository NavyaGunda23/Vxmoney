import Header from "./components/Header/Header";
import Stack from '@mui/material/Stack';
import Grpah from "./components/Graph/Graph";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card"
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import GiftCatd from "./assest/GiftCard.png"
import offettag from "./assest/offertag.png"
import share from "./assest/Share.png"
import creditcard from "./assest/creditcard.png"
import cashback from "./assest/cashback.png"
import Footer from "./components/Footer/Footer";
import Grid from '@mui/material/Grid';
import ImgHolder1 from "./assest/ImgHolder1.png"
import logo from "./assest/metavoeux.png"
import {useState} from "react"
import Website from "./assest/Website.svg"
import Divider from '@mui/material/Divider';
import PrimaryButton from "./components/Button/PrimaryButton";
import telegram from "./assest/telegram.svg"
import {Routes, Route, useNavigate} from 'react-router-dom';
  function IndividualAppDetail() {
    const games = [
        {imageURL:require("./assest/ImgHolder1.png"),title:"Voeux Token Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder2.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder3.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder4.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder5.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder6.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder1.png"),title:"Voeux Token Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder2.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder3.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder4.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder5.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder6.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder1.png"),title:"Voeux Token Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder2.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder3.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder4.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder5.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder6.png"),title:"Infinity Games Airdrop",availableFor:false}
    ]
    const vediosData = [
        {imageURL:require("./assest/ImgHolder1.png"),title:"Voeux Token Airdrop"},
        {imageURL:require("./assest/ImgHolder2.png"),title:"Infinity Games Airdrop"},
        {imageURL:require("./assest/ImgHolder3.png"),title:"Infinity Games Airdrop"},
        {imageURL:require("./assest/ImgHolder4.png"),title:"Infinity Games Airdrop"},
        {imageURL:require("./assest/ImgHolder5.png"),title:"Infinity Games Airdrop"},
        {imageURL:require("./assest/ImgHolder6.png"),title:"Infinity Games Airdrop"}
    ]
    const Music = [
        {imageURL:require("./assest/ImgHolder1.png"),title:"Voeux Token Airdrop",followers:true},
        {imageURL:require("./assest/ImgHolder2.png"),title:"Infinity Games Airdrop",followers:true},
        {imageURL:require("./assest/ImgHolder3.png"),title:"Infinity Games Airdrop",followers:true},
        {imageURL:require("./assest/ImgHolder4.png"),title:"Infinity Games Airdrop",followers:true},
        {imageURL:require("./assest/ImgHolder5.png"),title:"Infinity Games Airdrop",followers:true},
        {imageURL:require("./assest/ImgHolder6.png"),title:"Infinity Games Airdrop",followers:true}
    ]
    const airdrop1 = [
        {imageURL:require("./assest/ImgHolder1.png"),title:"Voeux Token Airdrop",availableFor:true},
        {imageURL:require("./assest/ImgHolder2.png"),title:"Infinity Games Airdrop",availableFor:true},
        {imageURL:require("./assest/ImgHolder3.png"),title:"Infinity Games Airdrop",availableFor:true},
        {imageURL:require("./assest/ImgHolder4.png"),title:"Infinity Games Airdrop",availableFor:true},
        {imageURL:require("./assest/ImgHolder5.png"),title:"Infinity Games Airdrop",availableFor:true},
        {imageURL:require("./assest/ImgHolder6.png"),title:"Infinity Games Airdrop",availableFor:true}
    ]
    const offerdata = [
        {imageURL:GiftCatd,title:"Gift Card"},
        {imageURL:creditcard,title:"Vouchers"},
        {imageURL:cashback,title:"Cask Back"},
        {imageURL:offettag,title:"Offers"},
        {imageURL:share,title:"Refferal"}
    ]
    const [value, setValue] = useState('airdrop');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/full');
    }
 
    return (
    //   <button disabled={disabled}>{title}</button>
    <div className="w-100">
<Stack  direction="column" spacing={2} className="p-40" >
  <Header type="2"/>    
  <Stack direction="row" spacing={1}>
      
       
      <KeyboardArrowLeftIcon fontSize="large" className="arrow-left"/>
  
    <a className="breadcrumb-title" onClick={()=> handleBack()}>Back</a>
  </Stack>
  <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
    <Stack spacing={2}>
        <img src={ImgHolder1} className="individual-app-image"/>
        <Stack direction="row"  alignItems="center" spacing={2}>
           <Stack  direction="column" justifyContent="center" alignItems="center" className="app-logo-individual" ><img src={logo}/></Stack> <span className="app-title">Voeux Token Airdrop   (VXT)</span>
        </Stack>
        <p className="individual-desc">Let's join the airdrop of Voeux to have a chance to get $5,000 in stable coin and tokens. Note that, rewards will be airdropped to your METAONE WALLET, NOT MetaMask.</p>
        <Stack direction="row" alignItems="flex-start" columnGap="10px">
            <img src={Website}/>
            <span className="individual-desc">www.faizandesign.com</span>
        </Stack>
        <Stack direction="row" alignItems="flex-start"  columnGap="10px">
            <img src={Website}/>
            <span className="individual-desc">Live time: 4th Dec - 16th Dec 2023</span>
        </Stack>
        <Stack direction="row" alignItems="flex-start"  columnGap="10px">
            <img src={Website}/>
            <span className="individual-desc">    Reward rule: Rewards will be only transferred to MetaOne wallet accounts that own TomoOne pet</span>
        </Stack>
        <Stack direction="row" alignItems="flex-start"  columnGap="10px">
            <img src={Website}/>
            <span className="individual-desc"> Reward distribution: Rewards will be airdropped to your METAONE WALLET, NOT MetaMask
*** Lucky draw stablecoin:{'\n'}
- 40 slots, each gets 25${'\n'}
- 60 slots, each gets 10${'\n'}
- 80 slots, each gets 5${'\n'}
*** AAG token lucky draw{'\n'}
- 100 slots, each gets 15$ in $AAG{'\n'}
- 100 slots, each gets 10$ in $AAG{'\n'}
- 100 slots, each gets 5$ in $AAG{'\n'}
Note:{'\n'}
- Rewards will be airdropped to your submitted METAONE WALLET, NOT MetaMask</span>
        </Stack>

        
    </Stack>
    </Grid>
    <Grid item xs={12} md={5}>
        <Stack className="banner-lve-cards"  spacing={1} >
            <Stack alignItems="center"  spacing={1}>
            <Stack className="live-container" direction="row" alignItems="center">
                <span></span>
                <p>LIVE</p>
            </Stack>
            </Stack>
            <Stack direction="row" spacing={1}  divider={<Divider orientation="vertical" className="divider" flexItem />}>
                <Stack className="live-container-details" spacing={1}>
                    <h6>START</h6>
                    <p>16 Nov 2023, 13:45</p>
                </Stack>
                <Stack className="live-container-details" spacing={1}>
                    <h6>END</h6>
                    <p>16 Jan 2024, 19:45</p>
                </Stack>
            </Stack>
        </Stack>
        <h6 className="task-style">Tasks</h6>
        <Stack className="banner-lve-cards"  spacing={2} direction="column" >
            <Stack direction="row" alignItems="center" justifyContent="space-between" className="task-detail-container">
            <img src={telegram} />
           <span>Follow @ undeadscom  on Twitter</span>
           <PrimaryButton text="Connect "/>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between" className="task-detail-container">
            <img src={telegram} />
           <span>Follow @ undeadscom  on Twitter</span>
           <PrimaryButton text="Connect "/>
            </Stack> <Stack direction="row" alignItems="center" justifyContent="space-between" className="task-detail-container">
            <img src={telegram} />
           <span>Follow @ undeadscom  on Twitter</span>
           <PrimaryButton text="Connect "/>
            </Stack> <Stack direction="row" alignItems="center" justifyContent="space-between" className="task-detail-container">
            <img src={telegram} />
           <span>Follow @ undeadscom  on Twitter</span>
           <PrimaryButton text="Connect "/>
            </Stack> <Stack direction="row" alignItems="center" justifyContent="space-between" className="task-detail-container">
            <img src={telegram} />
           <span>Follow @ undeadscom  on Twitter</span>
           <PrimaryButton text="Connect "/>
            </Stack>
        </Stack>
    </Grid>
</Grid>

</Stack>

<Footer />
</div>

    );
  }
  
  export default IndividualAppDetail
