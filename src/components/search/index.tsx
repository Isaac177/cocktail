import React, {useEffect} from 'react';
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import {Box} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import {searchByName} from "../../features/search/search";
import {setResults} from "../../features/search/searchSlice";



const SearchBar = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(searchByName())
    }, [dispatch]);

    const {result, loading} = useAppSelector(state => state.search);

    const handleSearchByName = (e: any) => {
        const filtered = Object.values(result).map((item: any) => {
            return item.filter((item: any) => item.strDrink.toLowerCase().includes(e.target.value.toLowerCase()))
        })
        dispatch(setResults(filtered))
        console.log(filtered)
    }
    console.log(typeof result);
    return (
        <div className="flex flex-col items-center justify-center py-2 mt-20">
            <h1 className="text-3xl font-bold">Search...</h1>
            <div className="flex flex-col items-center justify-center mt-10">
                <Box>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                    <InputBase
                        sx={{ml: 2, flex: 1}}
                        placeholder="Search..."
                        onChange={(e) => handleSearchByName(e)}
                    />
                    <IconButton type="button" sx={{p: 1}}>
                        <SearchIcon />
                    </IconButton>
                    </Paper>
                </Box>
            </div>
        </div>
    );
};

export default SearchBar;