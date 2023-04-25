import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
function News() {
    return (
        <>
            <h1>Tin tức</h1>
            <Button sx={{ width: 300 }} onClick={() => alert('hello')} variant="outlined" color="error">
                hello
            </Button>
            <AcUnitOutlinedIcon></AcUnitOutlinedIcon>
        </>
    );
}

export default News;
