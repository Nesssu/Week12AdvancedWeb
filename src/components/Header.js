import { AppBar, Toolbar} from "@mui/material";
import { Outlet } from "react-router-dom";

const Header = () =>
{
    return (
        <>
            <AppBar position="static" color="primary" enableColorOnDark>
                <Toolbar>
                    
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    )
}

export default Header;