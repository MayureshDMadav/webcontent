import React from 'react'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';


const Modal = ({ data }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    console.log(data);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
                Open Popover
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
        </div>
    )
}

export default Modal