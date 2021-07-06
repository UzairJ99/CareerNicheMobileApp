import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { updateUser } from '../../services/UserService';
import ProfileField from './ProfileField';
// state flows
import Context from '../auth/context';

const ProfileCard = (props) => {
  const context = React.useContext(Context);
  const [profile, setProfile] = React.useState(props.profile);
  const [renderCount, setCount] = React.useState(1);

  /**
   * @TODO make this more efficient... really messy right now.
   */

  React.useEffect(() => {
    // props.loadProfile;
    if (renderCount < 10) {
      setProfile(props.profile);
      setCount(renderCount + 1);
    }
  });

  /**
   * Save the profile changes and upload to database.
   * @param context context api for global state access
   */
  const saveChanges = async (context) => {
    // ignore if there are no changes to the profile
    if (profile === {}) return;

    let user = context.getUser();
    await updateUser(user, profile);
    console.log('updated profile.');
  }

  return (
    <View>
      <ProfileField 
        text = {context.getUser()}
        placeholder = "Email"
        disabled = {true}
        type="grey"
      />
      <ProfileField 
        text = {profile.name}
        placeholder = "Name"
        disabled = {false}
        type="green"
        changeProperty={value => setProfile({...profile, name: value})}
      />
      <ProfileField 
        text = {profile.profession}
        placeholder = "Profession"
        disabled = {false}
        type="grey"
        changeProperty={value => setProfile({...profile, profession: value})}
      />
      <ProfileField 
        text = {profile.city}
        placeholder = "City"
        disabled = {false}
        type="green"
        changeProperty={value => setProfile({...profile, city: value})}
      />
      <ProfileField 
        text = {profile.birthdate}
        placeholder = "Date of Birth"
        disabled = {false}
        type="grey"
        changeProperty={value => setProfile({...profile, birthdate: value})}
      />
      <Button 
        title='Save Changes' 
        onPress={() => {saveChanges(context)}} 
        buttonStyle={{
          backgroundColor: 'rgb(146, 212, 57)',
          borderRadius: 25,
          margin: 30
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 0,
    marginBottom: -25
  },
  inputContainer: {
    borderBottomColor: 'transparent'
  },
  inputCard1: {
    borderLeftColor: '#98CE00',
    borderLeftWidth: 5,
    padding: 5
  },
  inputCard2: {
    borderLeftColor: '#6e6e6e',
    borderLeftWidth: 5,
    padding: 5
  }
});

export default ProfileCard;