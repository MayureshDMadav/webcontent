import React from 'react'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';


const Modal = ({ data ,value}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <span >
            <Button aria-describedby={id}  onClick={handleClick}>
               {value}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
            >
                {data}
            </Popover>
        </span>
    )
}

export default Modal