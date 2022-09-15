import { Paper } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import Statistics from '../Statistics';
import styles from './Home.styles';

const Home: React.FC = () => {

  const {counter:{value}} = useAppSelector(state => state)
  console.log(value)

  return (
    <>
      <Statistics />
      {/* <Paper elevation={24} sx={styles.paper}>
        home
      </Paper> */}
    </>
  );
};

export default Home;
