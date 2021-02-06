import {
    makeStyles
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
    image: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    header: {
        backgroundColor: "#000",
        width: '100%',
        flex: 'center',
        alignItems: 'center'
    },
    mainFeaturedPost: {
        width: '100%',
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        alignItems: "center",
        justifyContent: "center",
    },
    headerAppBar: {
        background: 'transparent',
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
    },
    textButton: {
        margin: 10,
        font: 'Arial',
        theme: theme
    },
    footer: {
        backgroundColor: theme.palette.grey[800],
        padding: theme.spacing(6, 0),
    },
}));

export default styles;