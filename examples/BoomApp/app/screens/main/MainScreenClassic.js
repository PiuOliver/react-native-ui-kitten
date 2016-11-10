import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar
} from 'react-native';

import Icon from '../../../node_modules/react-native-vector-icons/Ionicons';
import ScreenService from '../../util/ScreenService';
import {RkConfig, RkBarBg, RkTabView} from 'react-native-ui-kit';

export default class MainScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'newsTab'
    };
    this._screens = {
      profile: ScreenService.getProfileScreen(),
      news: ScreenService.getNewsScreen(),
      chat: ScreenService.getChatListScreen(),
      settings: ScreenService.getSettingsScreen(),
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          />
        <TabBarIOS>
          <Icon.TabBarItemIOS
            title="Profile"
            iconName="ios-person"
            selected={this.state.selectedTab === 'profileTab'}
            onPress={() => {
            this.setState({
              selectedTab: 'profileTab',
            });
          }}>
            {<this._screens.profile navigator={this.props.navigator} />}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="News"
            iconName="ios-paper-outline"
            selected={this.state.selectedTab === 'newsTab'}
            onPress={() => {
            this.setState({
              selectedTab: 'newsTab',
            });
          }}>
            {<this._screens.news navigator={this.props.navigator} />}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Chats"
            iconName="ios-chatboxes"
            badge={1}
            selected={this.state.selectedTab === 'chatTab'}
            onPress={() => {
            this.setState({
              selectedTab: 'chatTab',
            });
          }}>
            {<this._screens.chat navigator={this.props.navigator} />}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Settings"
            iconName="ios-settings-outline"
            selectedIconName="ios-settings"
            selected={this.state.selectedTab === 'settingsTab'}
            onPress={() => {
            this.setState({
              selectedTab: 'settingsTab',
            });
          }}>
            {<this._screens.settings navigator={this.props.navigator} />}
          </Icon.TabBarItemIOS>
        </TabBarIOS>
        <RkBarBg/>
      </View>
    );
  }
}
var styles = StyleSheet.create({

});

