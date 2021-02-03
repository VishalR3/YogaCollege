import {Container, Grid, makeStyles} from '@material-ui/core'

const About=()=>{
    const classes = useStyles()
    return(
        <Container>
            <div className={classes.sectionWrapper}>
                <div className={classes.sectionHead}>
                    About
                </div>
                <div className={classes.sectionContent}>
                    <Grid container spacing={3}>
                        <Grid item sm={8}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Grid>
                        <Grid item sm={4}>
                            <div className={classes.imageCard}>

                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    )
}
export default About;

const useStyles = makeStyles({
    sectionWrapper:{
        marginTop:'2rem',
    },
    sectionHead:{
        fontSize:'2rem',
        lineHeight:'2.5rem',
        fontWeight:'600',
        color:'#aeaeae'
    },
    sectionContent:{
        marginTop:'1rem',
        textAlign:'justify',
        fontSize:'1rem',
        lineHeight:'2rem',
    },
    imageCard:{
        width:'250px',
        height:'250px',
        backgroundColor:'#FFE748',
        borderRadius:'0.75rem',
        boxShadow:'0 3px 9px rgba(0,0,0,0.08)',
        marginBottom:'1rem',
    }
})