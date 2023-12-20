
import GrpahIcon from "../../assest/grpah.svg"
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

import Stack from '@mui/material/Stack';
import "./Graph.css"
function Grpah() {
    return (
    //   <button disabled={disabled}>{title}</button>
    
<Stack
 direction={{ xs: 'column', sm: 'column',md:"column",lg:"row",xl:"row" }}
 spacing={2}

>
  <Stack  direction="row"   justifyContent="center" spacing={2}
  alignItems="center">

  <img src={GrpahIcon} className="graph-cion" />
  <Stack direction="column" className="graph-details" spacing={1}>
    <span>23,768</span>
    <span>BTC/USDT</span>
  </Stack>
  <SparkLineChart
          data={[3, -10, -2, 5, 7, -2, 4, 6]}
          height={41}
          width={70}
          curve="natural"
          area
        />
  </Stack>
  <Stack  direction="row"   justifyContent="center" spacing={2}
  alignItems="center">

  <img src={GrpahIcon} className="graph-cion" />
  <Stack direction="column" className="graph-details" spacing={1}>
    <span>23,768</span>
    <span>BTC/USDT</span>
  </Stack>
  <SparkLineChart
          data={[3, -10, -2, 5, 7, -2, 4, 6]}
          height={41}
          width={70}
          curve="natural"
          area
        />
  </Stack>
  <Stack  direction="row"   justifyContent="center" spacing={2}
  alignItems="center">

  <img src={GrpahIcon} className="graph-cion" />
  <Stack direction="column" className="graph-details" spacing={1}>
    <span>23,768</span>
    <span>BTC/USDT</span>
  </Stack>
  <SparkLineChart
          data={[3, -10, -2, 5, 7, -2, 4, 6]}
          height={41}
          width={70}
          curve="natural"
          area
        />
  </Stack>

  <Stack  direction="row"   justifyContent="center" spacing={2}
  alignItems="center">

  <img src={GrpahIcon} className="graph-cion" />
  <Stack direction="column" className="graph-details" spacing={1}>
    <span>23,768</span>
    <span>BTC/USDT</span>
  </Stack>
  <SparkLineChart
          data={[3, -10, -2, 5, 7, -2, 4, 6]}
          height={41}
          width={70}
          curve="natural"
          area
        />
  </Stack>  <Stack  direction="row"   justifyContent="center" spacing={2}
  alignItems="center">

  <img src={GrpahIcon} className="graph-cion" />
  <Stack direction="column" className="graph-details" spacing={1}>
    <span>23,768</span>
    <span>BTC/USDT</span>
  </Stack>
  <SparkLineChart
          data={[3, -10, -2, 5, 7, -2, 4, 6]}
          height={41}
          width={70}
          curve="natural"
          area
        />
  </Stack>  <Stack  direction="row"   justifyContent="center" spacing={2}
  alignItems="center">

  <img src={GrpahIcon} className="graph-cion" />
  <Stack direction="column" className="graph-details" spacing={1}>
    <span>23,768</span>
    <span>BTC/USDT</span>
  </Stack>
  <SparkLineChart
          data={[3, -10, -2, 5, 7, -2, 4, 6]}
          height={41}
          width={70}
          curve="natural"
          area
        />
  </Stack>  <Stack  direction="row"   justifyContent="center" spacing={2}
  alignItems="center">

  <img src={GrpahIcon} className="graph-cion" />
  <Stack direction="column" className="graph-details" spacing={1}>
    <span>23,768</span>
    <span>BTC/USDT</span>
  </Stack>
  <SparkLineChart
          data={[3, -10, -2, 5, 7, -2, 4, 6]}
          height={41}
          width={70}
          curve="natural"
          area
        />
  </Stack>
</Stack>

    );
  }
  
  export default Grpah
