import { Container, makeStyles, Typography } from "@material-ui/core";
import TeacherCard from "./teacherCard";

const TeacherGroup = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant="h4">Say 'Namaste' to the Teachers</Typography>
      </Container>
      <div className={classes.teacherGrid}>
        {[0, 1, 2, 3, 4, 5, 6].map((val) => {
          return <TeacherCard key={val} />;
        })}
      </div>
    </div>
  );
};

export default TeacherGroup;

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#e8e8e8",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    overflow: "hidden",
  },
  teacherGrid: {
    marginTop: "0.5rem",
    display: "flex",
    alignItems: "center",
    overflowX: "scroll",
    paddingTop: "2rem",
    paddingLeft: "9rem",
  },
});
