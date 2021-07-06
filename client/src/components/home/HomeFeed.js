import { StylesContext } from '@material-ui/styles';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import CourseCard from './CourseCard';
import Loading from '../Loading';
// services
import * as UserServices from '../../services/UserService';


const HomeFeed = (props) => {
  // replace with real data from database later
  // structure for each course is similar to the gurucan API
  // https://gurucan.stoplight.io/docs/gurucan-api/models/Course.v1.yaml
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Course 1',
      description: 'short brief description...',
      fullDescription: 'full description about the course.',
      img: 'filepath for image',
      isFree: true,
      status: 'In Progress...',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Course 2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Course 3',
    },
  ];

  const [courseList, setCourses] = React.useState([]);
  const [userID, setUserID] = React.useState(props.user);
  const [isLoaded, load] = React.useState(false);
  const [renderCount, setCount] = React.useState(1);

  React.useEffect(() => {
    // check for user id updates constantly
    setUserID(props.contextAPI.getID());
    console.log(userID);
  });
  
  React.useEffect(() => {
    // only search for courses when the user has logged in
    if (userID) {
      getCourses(userID);
    }
  });

  /**
   * Fetches the user's purchased courses from Gurucan
   * @param {string} id user id
   */
  const getCourses = async (id) => {
    if (renderCount < 2) {
      // allow for time in between each request to avoid crashing server
      setTimeout(async () => {
        console.log('searching for courses...');
        let data = await UserServices.getCourses(id);
        setCourses(data);
        load(true);
        setCount(renderCount + 1);
      }, 600);
    }
  }
  

  /**
   * Maps an object to an Item component
   * @param {object} item - the object storing the items information 
   * @returns {ItemComponent}
   */
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  /**
   * creates a view wrapper around the course preview card
   * @param {object} item - object information for the course 
   * @returns {ViewComponent}
   */
  const Item = ({ title }) => (
    <View style={styles.item}>
      <CourseCard title={title} />
    </View>
  );

  return (
    isLoaded ? (
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={courseList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    ) : ( 
      // show loading component while data is being retreived
      <Loading text='Loading courses...' />
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '100%'
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 26,
  },
});

export default HomeFeed;