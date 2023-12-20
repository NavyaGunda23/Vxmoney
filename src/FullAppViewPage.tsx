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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Banner1 from "./assest/banner1.png"
import {useState} from "react"
import {Routes, Route, useNavigate} from 'react-router-dom';
  function FullAppViewPage() {
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
    const navigate = useNavigate();
    const handleBack = () => {
        console.log("kljhgf")
        // window.location.href='/full'
        // navigate("/full")
        navigate('/');
    }
 
    const handleFullDetails = () => {
        navigate('/individual');
    }
 

    const [value, setValue] = useState('airdrop');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };
    return (
    //   <button disabled={disabled}>{title}</button>
    <div className="w-100">
<Stack  direction="column" spacing={2} className="p-40">
  <Header type="2"/>    
  <Stack direction="row" spacing={1}>
      
       
        <KeyboardArrowLeftIcon fontSize="large" className="arrow-left" onClick={() => handleBack()}/>
    
      <a className="breadcrumb-title" >Back</a>
    </Stack>
    <Grid container spacing={1} md={12}>
  <Grid item xs={12} md={3}  >
    <Stack className="filterBy-Section" spacing={2} direction="column">
        <h6>Filter BY</h6>
        <h6>Category</h6>
        <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="airdrop"
    name="radio-buttons-group"
    onChange={(e) => handleChange(e)}
  >
    <FormControlLabel value="airdrop" control={<Radio />} label="Airdrops" />
    <FormControlLabel value="game" control={<Radio />} label="Games" />
    <FormControlLabel value="video" control={<Radio />} label="Video" />
    <FormControlLabel value="music" control={<Radio />} label="Music" />
    <FormControlLabel value="sign" control={<Radio />} label="Sign up" />
    <FormControlLabel value="app" control={<Radio />} label="App Download" />
    <FormControlLabel value="survey" control={<Radio />} label="Surveys" />
    <FormControlLabel value="shop" control={<Radio />} label="Shop & Earn" />
  </RadioGroup>
        </Stack>
        <Stack direction="column" spacing={2}>
        <img src={Banner1} className="banner1-size" style={{marginTop:"20px"}}/>
        <img src={Banner1} className="banner1-size"/>
        </Stack>
       
  </Grid>
  <Grid item xs={12} md={9}>
  <Card type="cardstyle1" data={games} cardresize={true} onClickAction={() => handleFullDetails()}/>

  </Grid>
  </Grid>
 


</Stack>

<Footer />
</div>

    );
  }
  
  export default FullAppViewPage
