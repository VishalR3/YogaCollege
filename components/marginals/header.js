import {Button, makeStyles} from '@material-ui/core'

const Header = () => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}> 
            <div className={classes.logo}>
                Yoga College
            </div>
            <div className={classes.navMenu}>
                <ul className={classes.navList}>
                    <li className={classes.navItem}>Home</li>
                    <li className={classes.navItem}>About Us</li>
                    <li className={classes.navItem}>Gallery</li>
                    <li className={classes.navItem}>Study in Yoga</li>
                    <li className={classes.navItem}>Contact Us</li>
                </ul>
                <Button variant='contained' color='primary'>Book Seat</Button>
            </div>
        </div>
    )
}

export default Header;

const useStyles = makeStyles({
    wrapper:{
        width:'100%',
        padding:'0.5rem 1rem',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        boxShadow:'0 4px 20px rgba(0,0,0,0.08)',
    },
    logo:{
        fontSize:'1.5rem',
        lineHeight:'2rem',
        fontWeight:'700',
    },
    navMenu:{
    },
    navList:{
        listStyle:'none',
        display:'inline',
        marginRight:'2rem'
    },
    navItem:{
        display:'inline',
        paddingLeft:'1rem',
        paddingRight:'1rem',
        cursor :'pointer',
    }
})

