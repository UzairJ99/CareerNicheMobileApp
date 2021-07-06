import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Content from './auth/context';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label='MAIN MENU' />
      <DrawerItemList activeTintColor={'green'} {...props} />
      {/* EXTRA BUTTONS THAT DON'T REQUIRE PAGE NAV GO HERE */}
      <Content.Consumer>
        {content => (
          <DrawerItem label="Logout" onPress={() => { content.logoutUser() }} />
        )}
      </Content.Consumer>

    </DrawerContentScrollView>
  )
}



export default DrawerContent;