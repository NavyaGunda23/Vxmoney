import PrimaryButton from "../Button/PrimaryButton";
import logo from "../../assest/logo.png"
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Profile from "../../assest/profile.svg"
import "./Header.css"
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
  
  ];

  interface MyHeaderProps {
    /** The text to display inside the button */
    type: string
  }
function Header({ type}: MyHeaderProps) {
    return (
    //   <button disabled={disabled}>{title}</button>

<Stack  
  direction={{ xs: 'column', sm: 'row',md:"row",xl:"row" }}
  spacing={{ xs: 2, sm: 2, md: 4 }}

  justifyContent="space-between"
  alignItems="center"
//   spacing={2} 
  sx={{ 
    width: { xs: "100%", md: 'unset', xl:1400,lg:1400 },
    padding:"20px 0px"
}}
  >
    <Stack
 direction={{ xs: 'column', sm: 'column',md:"column",lg:"row",xl:"row" }}
 spacing={2}

>
<img src={logo} className="header-logo"/>
      <Autocomplete
      className="seachData"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        sx={{ width: 300 }}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
              
            }}
          />
        )}
      />

</Stack>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
      >

      <NotificationsNoneIcon sx={{ color:"white" }}/>
      {type =="2"  ? <img src={Profile} /> : <PrimaryButton text={"connect Wallet"} /> }
  
      </Stack>
    </Stack>

    );
  }
  
  export default Header
