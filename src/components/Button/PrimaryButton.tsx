import "./PrimaryButton.css"
import Button from '@mui/material/Button';
import WalletIcon from '@mui/icons-material/Wallet';

interface MyButtonProps {
    /** The text to display inside the button */
    text: string;
  }
  
  function PrimaryButton({ text}: MyButtonProps) {
    return (
    <Button className="primary-button" variant="outlined" startIcon={<WalletIcon />}>
      {text}
    </Button>
);
  }
  
  export default PrimaryButton