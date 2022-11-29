import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import AuthContext from '../auth';
import { Box, Typography } from '@mui/material'

/*
    Our Status bar React component goes at the bottom of our UI.
    
    @author McKilla Gorilla
*/
function Statusbar() {
    const { auth } = useContext(AuthContext);
    const { store } = useContext(GlobalStoreContext);
    let text ="";
    let style = {
        visibility: "visible" 
    };
    if (auth.user == null) 
        style = {
        visibility: 'hidden'
    };
    if (store.currentList)
        text = store.currentList.name;
    return (
        <div id="playlister-statusbar"
            style={style}>
            <Typography variant="h4">{text}</Typography>
        </div>
    );
}

export default Statusbar;