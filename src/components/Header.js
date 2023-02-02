import { AppBar, Toolbar} from "@mui/material";
import { Outlet } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = () =>
{
    return (
        <>
            <AppBar position="static" color="primary" enableColorOnDark>
                <Toolbar>
                    <Button href="/" style={{color: "#fff"}}>
                        Home
                    </Button>
                    <Button href="/about" style={{color: "#fff"}}>
                        About
                    </Button>
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    )
}

export default Header;