import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import coin from "../../assest/coin.svg"
import PC from "../../assest/pc.svg"
import apple from "../../assest/apple.svg"
import android from "../../assest/android.svg"
import Profile from "../../assest/profile.svg"
import "./Card.css"
interface MyCardProps {
    /** The text to display inside the button */
    type: string;
    data:Item[]
    cardresize?:boolean
    onClickAction?:() => void
  }
  interface Item {
    imageURL: string;
    title: string;
    availableFor?:boolean
    followers?:boolean
    
  }
  function Card({ type,data,cardresize,onClickAction}: MyCardProps) {
 
  
    return (
    //   <button disabled={disabled}>{title}</button>
    <>
    {type == "offer" && 
    <Grid container className='offer-grid-paremt'
    
    >
 
    {data.map(x => (
        <Grid item  className='offer-grid'
        xs={12} sm ={4} md={2}
        
        >
         <Stack  direction="column"
  spacing={{ xs: 1, sm: 2, md: 4 }}

  justifyContent="space-between"
  alignItems="center"> 
         <img src={x.imageURL}/>
         <p>{x.title}</p>
     </Stack>
     </Grid>
    ))}
</Grid>
    }
    {type == "cardstyle1" && 
    <Grid container className={cardresize ? 'offer-grid-game-container individual-cards' : 'offer-grid-game-container'} >
 
    {data.map(x => (
        <Grid item  className='offer-grid-game'    xs={12}   sm ={4}   md={cardresize? 3 : 2}>
         <Stack  direction="column"

  justifyContent="space-between"
  alignItems="left"
  > 
         <img src={x.imageURL}/>
         <Stack  direction="column" spacing={1} sx={{marginTop:"0px !important",padding:"10px"}}>
         <p className='title' onClick={onClickAction}>{x.title}</p>
         {x.availableFor == false && <Stack  direction="row" spacing={1}
         >
            <div className='device-tage'>
                <img src={PC}  />
                <span>PC</span>
            </div>
            <div className='device-tage'>
                <img src={android}  />
                <span>Android</span>
            </div>
            <div className='device-tage'>
                <img src={apple}  />
                <span>Apple</span>
            </div>
            </Stack>}
            {x.followers == true && 
            <Stack direction="row" spacing={1}>
                <div className='followers'>
                <img src={Profile}  />
                <span>+2.8k Members</span>
            </div>
                </Stack>
            }
         <div className='coinsContainer'>
            <img src={coin}/>
            <p className='coins-count'>2000 VXP</p>
         </div>
         {x.availableFor == true && <div className='endingitimecontainer'>
            <h6>Ending In</h6>
            <p className='timer'>08:04:30:2</p>
            <Stack direction="row" spacing={3} className='timer-format'>
                <p>Day</p>
                <p>Hours</p>
                <p>Minutes</p>
                <p>Seconds</p>
            </Stack>
         </div>}
         
         </Stack>
         
     </Stack>
     </Grid>
    ))}
</Grid>
    }
    </>


    );
  }
  
  export default Card
