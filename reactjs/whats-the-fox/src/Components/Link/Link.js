import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function MyLink({ href, children, ...props }) {
    return (
        <Button disableRipple disableElevation component={Link} to={href} {...props}>
            {children}
        </Button>
    );
}

export default MyLink;
