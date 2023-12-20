import Header from "./components/Header/Header";
import Stack from '@mui/material/Stack';
import Grpah from "./components/Graph/Graph";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card"
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GiftCatd from "./assest/GiftCard.png"
import offettag from "./assest/offertag.png"
import share from "./assest/Share.png"
import creditcard from "./assest/creditcard.png"
import cashback from "./assest/cashback.png"
import Footer from "./components/Footer/Footer";
// import { useNavigate } from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom';

  function GameLandinPage() {
    const games = [
        {imageURL:require("./assest/ImgHolder1.png"),title:"Voeux Token Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder2.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder3.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder4.png"),title:"Infinity Games Airdrop",availableFor:false},
        {imageURL:require("./assest/ImgHolder5.png"),title:"Infinity Games Airdrop",availableFor:false}
       
    ]
    const vediosData = [
        {imageURL:require("./assest/ImgHolder1.png"),title:"Voeux Token Airdrop"},
        {imageURL:require("./assest/ImgHolder2.png"),title:"Infinity Games Airdrop"},
        {imageURL:require("./assest/ImgHolder3.png"),title:"Infinity Games Airdrop"},
        {imageURL:require("./assest/ImgHolder4.png"),title:"Infinity Games Airdrop"},
        {imageURL:require("./assest/ImgHolder5.png"),title:"Infinity Games Airdrop"}
    ]
    const Music = [
        {imageURL:require("./assest/ImgHolder1.png"),title:"Voeux Token Airdrop",followers:true},
        {imageURL:require("./assest/ImgHolder2.png"),title:"Infinity Games Airdrop",followers:true},
        {imageURL:require("./assest/ImgHolder3.png"),title:"Infinity Games Airdrop",followers:true},
        {imageURL:require("./assest/ImgHolder4.png"),title:"Infinity Games Airdrop",followers:true},
        {imageURL:require("./assest/ImgHolder5.png"),title:"Infinity Games Airdrop",followers:true}
    ]
    const airdrop1 = [
        {imageURL:require("./assest/ImgHolder1.png"),title:"Voeux Token Airdrop",availableFor:true},
        {imageURL:require("./assest/ImgHolder2.png"),title:"Infinity Games Airdrop",availableFor:true},
        {imageURL:require("./assest/ImgHolder3.png"),title:"Infinity Games Airdrop",availableFor:true},
        {imageURL:require("./assest/ImgHolder4.png"),title:"Infinity Games Airdrop",availableFor:true},
        {imageURL:require("./assest/ImgHolder5.png"),title:"Infinity Games Airdrop",availableFor:true}
      
    ]
    const offerdata = [
        {imageURL:GiftCatd,title:"Gift Card"},
        {imageURL:creditcard,title:"Vouchers"},
        {imageURL:cashback,title:"Cask Back"},
        {imageURL:offettag,title:"Offers"},
        {imageURL:share,title:"Refferal"}
    ]
    // const navigate = useNavigate();
    const navigate = useNavigate();
    const handleViewAll = () => {
        navigate('/full');
    }
    const handleFullDetails = () => {
        navigate('/individual');
    }
 
 
    return (
    //   <button disabled={disabled}>{title}</button>
    <div className="w-100">
<Stack  direction="column" spacing={6} className="p-40" >
  <Header type="1" />
  <Grpah />
  <Banner />
  <Card type="offer" data={offerdata}/>
  <Stack direction="column" spacing={1} >

  <Stack direction="row" justifyContent="space-between" className="card-Headers">
    <h6 className="card-header-title">Airdrops</h6>
    <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }}>
        <a className="card-header-title">View All</a>
        <IconButton size="small" className="buttin-icon" onClick={() => handleViewAll()}>
        <ArrowForwardIosIcon fontSize="small" className="arrow-forward"/>
      </IconButton>
    </Stack>
  </Stack>

  <Card type="cardstyle1"  data={airdrop1} onClickAction={() => handleFullDetails()}/>
  </Stack>

  <Stack direction="column" spacing={1} >
  <Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" className="card-Headers">
    <h6 className="card-header-title">Games</h6>
    <Stack direction="row" spacing={1}>
        <a className="card-header-title" >View All</a>
        <IconButton size="small" className="buttin-icon" onClick={() => handleViewAll()}>
        <ArrowForwardIosIcon fontSize="small" className="arrow-forward"/>
      </IconButton>
    </Stack>
  </Stack>
  
  <Card type="cardstyle1" data={games} onClickAction={() => handleFullDetails()}/>
    </Stack>

 
    <Stack direction="column" spacing={1} >
    <Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" className="card-Headers">
    <h6 className="card-header-title">Vedios</h6>
    <Stack direction="row" spacing={1}>
        <a className="card-header-title" >View All</a>
        <IconButton size="small" className="buttin-icon" onClick={() => handleViewAll()}>
        <ArrowForwardIosIcon fontSize="small" className="arrow-forward"/>
      </IconButton>
    </Stack>
  </Stack>
  
  <Card type="cardstyle1" data={vediosData} onClickAction={() => handleFullDetails()}/>

        </Stack>

  
  <Stack  direction="column" spacing={1}>
  <Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" className="card-Headers">
    <h6 className="card-header-title">Music</h6>
    <Stack direction="row" spacing={1}>
        <a className="card-header-title" >View All</a>
        <IconButton size="small" className="buttin-icon" onClick={() => handleViewAll()}>
        <ArrowForwardIosIcon fontSize="small" className="arrow-forward"/>
      </IconButton>
    </Stack>
  </Stack>
  
  <Card type="cardstyle1" data={Music} onClickAction={() => handleFullDetails()}/>
  </Stack>

  <Stack  direction="column" spacing={1}>
  <Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" className="card-Headers">
    <h6 className="card-header-title">Sign Up</h6>
    <Stack direction="row" spacing={1}>
        <a className="card-header-title" >View All</a>
        <IconButton size="small" className="buttin-icon" onClick={() => handleViewAll()}>
        <ArrowForwardIosIcon fontSize="small" className="arrow-forward"/>
      </IconButton>
    </Stack>
  </Stack>
  
  <Card type="cardstyle1" data={Music} onClickAction={() => handleFullDetails()}/>

    </Stack>
    
 <Stack  direction="column" spacing={1}>

 <Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" className="card-Headers">
    <h6 className="card-header-title">App Download</h6>
    <Stack direction="row" spacing={1}>
        <a className="card-header-title" >View All</a>
        <IconButton size="small" className="buttin-icon" onClick={() => handleViewAll()}>
        <ArrowForwardIosIcon fontSize="small" className="arrow-forward"/>
      </IconButton>
    </Stack>
  </Stack>
  
  <Card type="cardstyle1" data={Music} onClickAction={() => handleFullDetails()}/>
 </Stack>


 <Stack  direction="column" spacing={1}>
 <Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" className="card-Headers">
    <h6 className="card-header-title">Surevys</h6>
    <Stack direction="row" spacing={1}>
        <a className="card-header-title" >View All</a>
        <IconButton size="small" className="buttin-icon" onClick={() => handleViewAll()}>
        <ArrowForwardIosIcon fontSize="small" className="arrow-forward"/>
      </IconButton>
    </Stack>
  </Stack>
  
  <Card type="cardstyle1" data={Music} onClickAction={() => handleFullDetails()}/>


 </Stack>


<Stack direction="column" spacing={1}>

<Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" className="card-Headers">
    <h6 className="card-header-title">Shop & Earn</h6>
    <Stack direction="row" spacing={1}>
        <a className="card-header-title" >View All</a>
        <IconButton size="small" className="buttin-icon" onClick={() => handleViewAll()}>
        <ArrowForwardIosIcon fontSize="small" className="arrow-forward"/>
      </IconButton>
    </Stack>
  </Stack>
  
  <Card type="cardstyle1" data={Music} onClickAction={() => handleFullDetails()}/>
</Stack>





</Stack>

<Footer />
</div>

    );
  }
  
  export default GameLandinPage
