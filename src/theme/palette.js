import {alpha} from '@mui/material/styles';

// SETUP COLORS

const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#040404',
    900: '#161C24',
  }

const PRIMARY = {
    main:'#4F46BA',
    contrastText:'#FFFFFF',
}

const palette = {
    common: {
        black: '#000000',
        white: '#FFFFFF',
        grey: '#757095',
    },
    primary: PRIMARY,
    grey: GREY,
    divider : alpha(GREY[500], 0.24),
    text: {
        primary: '#000000',
        secondary: '#64607D',
        info: '#757095',
        
    },
    background:{
        paper: '#fff',
        default: '#fbfafa',
        neutral: '#F5F8FF',
    }
}

export default palette;