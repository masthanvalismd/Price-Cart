import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="cardHead">
          <p className="free">
            {" "}
            <Box sx={{ fontWeight: "light", m: 1 }}>FREE</Box>
          </p>
          <h1 className="cardPrice">
            $0<span className="duration">/month</span>
          </h1>
        </div>
        <hr />
        <div className="cardBody"></div>
        <ul className="ulList" type="none">
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Single User
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              5GB Storage
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Unlimited Public Projects
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Community Access
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "light", m: 0.5 }}>
              <ClearIcon color="disabled" />
              Unlimited Private Projects
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "light", m: 0.5 }}>
              <ClearIcon color="disabled"/>
              Dedicated Phone Support
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "light", m: 0.5 }}>
              <ClearIcon color="disabled" />
              Free Subdomain
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "light", m: 0.5 }}>
              <ClearIcon color="disabled" />
              Monthly Status Reports
            </Box>
          </li>
        </ul>
        <div className="button">
        <Button variant="contained" sx={{width: "95%", borderRadius: "20px"}}>Button</Button>
        </div>
      </div>

      <div className="card">
        <div className="cardHead">
          <p className="plus">
            <Box sx={{ fontWeight: "light", m: 1 }}> PLUS</Box>
          </p>
          <h1 className="cardPrice">
            $9<span className="duration">/month</span>
          </h1>
        </div>
        <hr />
        <div className="cardBody"></div>
        <ul className="ulList" type="none">
          <li>
            <Box sx={{ fontWeight: "bold", m: 0.5 }}>
              <CheckIcon />5 Users
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              50GB Storage
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Unlimited Public Projects
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Community Access
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Unlimited Private Projects
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Dedicated Phone Support
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Free Subdomain
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "light", m: 0.5 }}>
              <ClearIcon color="disabled" />
              Monthly Status Reports
            </Box>
          </li>
        </ul>
        <div className="button">
        <Button variant="contained" sx={{width: "95%", borderRadius: "20px"}}>Button</Button>
        </div>
      </div>
      <div className="card">
        <div className="cardHead">
          <p className="pro">
            <Box sx={{ fontWeight: "light", m: 1 }}> PRO</Box>
          </p>
          <h1 className="cardPrice">
            $49<span className="duration">/month</span>
          </h1>
        </div>
        <hr />
        <div className="cardBody"></div>
        <ul className="ulList" type="none">
          <li>
            <Box sx={{ fontWeight: "bold", m: 0.5 }}>
              <CheckIcon />
              Unlimited Users
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              150GB Storage
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Unlimited Public Projects
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Community Access
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Unlimited Private Projects
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Dedicated Phone Support
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              <strong>Unlimited </strong>Free Subdomain
            </Box>
          </li>
          <li>
            <Box sx={{ fontWeight: "regular", m: 0.5 }}>
              <CheckIcon />
              Monthly Status Reports
            </Box>
          </li>
        </ul>
        <div className="button">
        <Button variant="contained" sx={{width: "95%", borderRadius: "20px"}}>Button</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
