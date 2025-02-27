import { Box, Button, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface PanelHeaderProps {
    title: string;
    closeAction: () => void;
}

const PanelHeader: React.FC<PanelHeaderProps> = ({ title, closeAction }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='h6' sx={{ padding: 1 }} >{title}</Typography>
            <Button
                variant="text"
                color="inherit"
                onClick={closeAction}
                sx={{ padding: 1, minWidth: 10 }}
            >
                <CloseIcon />
            </Button>
        </Box>
    )
}

export default PanelHeader;