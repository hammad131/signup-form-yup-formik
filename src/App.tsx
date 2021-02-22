import './App.css';
import UserFormWithFormikValidationContext from './components/signupForm';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: 30,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
             <Toolbar>
                        
                 <Typography variant="h6" className={classes.title}>
                   SIGNUP FORM
                  </Typography>
                        
                  </Toolbar>
      <UserFormWithFormikValidationContext />
    </div>
  );
}

export default App;
