import {makeStyles, Typography} from '@material-ui/core'


const TeacherCard = () => {
  const classes= useStyles()
  return(
    <div className={classes.wrapper}>
      <div className={classes.card}>
      </div>
      <div className={classes.details}>
        <Typography variant='h6'>Anjali Raghav</Typography>
        <Typography variant='subtitle1'>Yoga Instructor</Typography>
      </div>
    </div>
  )

}

export default TeacherCard;

const useStyles = makeStyles({
  wrapper:{
    marginRight:'1.5rem'
  },
  card:{
    width:'300px',
    height:'300px',
    borderRadius:'32px',
    boxShadow:'0 3px 48px rgba(0,0,0,0.08)',
    backgroundColor:'#ffffff',
  },
  details:{
    paddingTop:'1rem',
    paddingBottom:'1rem',
    textAlign:'center'
  }
})