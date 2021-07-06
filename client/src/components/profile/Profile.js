import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import MainMenu from '../headers/MainMenu';
import { getUserProfile } from '../../services/UserService';
import Loading from '../Loading';
import ProfileCard from './ProfileCard';
import AchievementCard from './AchievementCard';
// state flows
import Context from '../auth/context';

const Profile = (props) => {
  // setup states
  const contextAPI = React.useContext(Context);
  const [profile, setProfile] = React.useState({});
  const [userID, setUserID] = React.useState(contextAPI.user);
  const [isLoaded, load] = React.useState(false);
  const [renderCount, setCount] = React.useState(1);

  React.useEffect(() => {
    // check for user id updates constantly
    setUserID(contextAPI.getID());
  });
  
  React.useEffect(() => {
    // only search for profile info when the user has logged in
    if (userID) {
      loadProfile(userID);
    }
  });

  /**
   * Fetches the user's profile from the database
   * @param {string} id user id
   */
  const loadProfile = async (id) => {
    if (renderCount < 2 && id != null) {
      // allow for time in between each request to avoid crashing server
      setTimeout(async () => {
        console.log('loading profile...');
        let data = await getUserProfile(id);
        setProfile(data);
        load(true);
        setCount(renderCount + 1);
      }, 600);
    }
  }

  return (
    <View style={styles.container}>
      <MainMenu navigator={props.navigation} />
      <View style={{flex:1}}>
        <View style={[styles.headerView]}>
          <Text style={styles.welcomeText}>PROFILE</Text>
        </View>
        <ScrollView style={{flex:1}}>
        { isLoaded ? (
          <Card>
            <Text style={styles.label}>Personal Info</Text>
            <Card.Divider style={{marginTop: 15}}/>
            <ProfileCard profile={profile} />
            <Text style={styles.label}>Achievements</Text>
            <Card.Divider style={{marginTop: 15}} />
            <AchievementCard title="Total Points" score={200} />
            <AchievementCard title="Courses Completed" score={2} />
            <AchievementCard title="Jobs Applied" score={4} />
          </Card>
          ) : ( 
            // show loading component while data is being retreived
            <Loading text='Loading profile...' />
          )
        }
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    width: '100%'
  },
  welcomeText: {
    fontSize: 25,
    marginBottom: 15,
    marginTop: -30,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 20
  },
  headerView: {
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    backgroundColor: '#98CE00',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Profile;