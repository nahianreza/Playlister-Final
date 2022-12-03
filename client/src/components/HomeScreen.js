import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../store'
import ListCard from './ListCard.js'
import MUIDeleteModal from './MUIDeleteModal'
import Search from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import List from '@mui/material/List';
import Box from '@mui/material/Box'

/*
    This React component lists all the top5 lists in the UI.
    
    @author McKilla Gorilla
*/
const HomeScreen = () => {
    const { store } = useContext(GlobalStoreContext);

    useEffect(() => {
        store.loadIdNamePairs();
    }, []);

    function handleCreateNewList() {
        store.createNewList();
    }
    function handleClickHome(){
        console.log("Home")
    }
    function handleClickAll()
    {
        console.log("All")
    }
    function handleClickUser()
    {
        console.log("user")
    }
    function handleSearch()
    {
        console.log("Search");
    }
    let listCard = "";
    if (store) {
        if (store.currentList != null){
            store.idNamePairs.forEach((pair) => {
                if (pair._id == store.currentList._id)
                {
                    pair.selected = true;
                }
                else
                {
                    pair.selected = false;
                }
            })
        }
        listCard = 
        <List sx={{ width: '100%', mb: '20px' }}>
            {
                store.idNamePairs.map((pair) => (
                    <ListCard
                        key={pair._id}
                        idNamePair={pair}
                        selected={pair.selected}
                    />
                ))
            }
            </List>;
    }
    return (
        <div id="playlist-selector">
            <div id="list-selector-heading">
                <div id="list-selector-heading-left">

                    <div id="list-selector-home" onClick={handleClickHome}>
                    </div>
                    <div id="list-selector-all" onClick={handleClickAll}>
                    </div>
                    <div id="list-selector-user" onClick={handleClickUser}>
                    </div>
                </div>
                <div id="list-selector-heading-center">  
                    <input placeholder="Search..."></input>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div id="list-selector-heading-right">
                    test2
                </div>  
            </div>
            <Box id="list-selector-list">
                {
                    listCard
                }
                <MUIDeleteModal />
            </Box>

            <Fab sx={{transform:"translate(-20%, 0%)"}}
                    color="primary" 
                    aria-label="add"
                    id="add-list-button"
                    onClick={handleCreateNewList}
                >
                    <AddIcon />
            </Fab>

        </div>)
}

export default HomeScreen;