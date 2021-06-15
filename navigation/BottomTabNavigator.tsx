/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import * as React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Colors from "../constants/Colors";
import ActivityScreen from "../screens/activity/ActivityScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ObjectiveMainScreen from "../screens/home/create-objective/ObjectiveMainScreen";
import Objective1Screen from "../screens/home/create-objective/Objective1Screen";
import Objective2Screen from "../screens/home/create-objective/Objective2Screen";
import Objective3Screen from "../screens/home/create-objective/Objective3Screen";
import Objective4Screen from "../screens/home/create-objective/Objective4Screen";
import CreationSuccessScreen from "../screens/home/create-objective/CreationSuccessScreen";
import ObjectiveSummaryScreen from "../screens/home/create-objective/ObjectiveSummaryScreen";
import ObjectiveDetailScreen from "../screens/home/objective-details/ObjectiveDetailScreen";
import ChatScreen from "../screens/home/objective-details/ChatScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import EditProfileScreen from "../screens/profile/EditProfileScreen";
import SettingsScreen from "../screens/profile/SettingsScreen";
import {
  BottomTabParamList,
  ActivityParamList,
  HomeParamList,
  ProfileParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ showLabel: false }}
    >
      <BottomTab.Screen
        name="Activity"
        component={ActivityNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "receipt" : "receipt-outline"}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return (
    <Ionicons
      size={30}
      style={{ marginBottom: -10, marginTop: 5 }}
      {...props}
    />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ActivityStack = createStackNavigator<ActivityParamList>();

function ActivityNavigator() {
  return (
    <ActivityStack.Navigator screenOptions={{ headerShown: false }}>
      <ActivityStack.Screen name="ActivityScreen" component={ActivityScreen} />
    </ActivityStack.Navigator>
  );
}

const HomeStack = createSharedElementStackNavigator<HomeParamList>();

const objectiveDetailScreenOptions = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="ObjectiveMainScreen"
        component={ObjectiveMainScreen}
      />
      <HomeStack.Screen
        name="Objective1Screen"
        component={Objective1Screen}
        options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
      />
      <HomeStack.Screen name="Objective2Screen" component={Objective2Screen} />
      <HomeStack.Screen name="Objective3Screen" component={Objective3Screen} />
      <HomeStack.Screen name="Objective4Screen" component={Objective4Screen} />
      <HomeStack.Screen
        name="CreationSuccessScreen"
        component={CreationSuccessScreen}
      />
      <HomeStack.Screen
        name="ObjectiveSummaryScreen"
        component={ObjectiveSummaryScreen}
      />
      <HomeStack.Screen
        name="ObjectiveDetailScreen"
        component={ObjectiveDetailScreen}
        options={() => objectiveDetailScreenOptions}
      />
      <HomeStack.Screen name="ChatScreen" component={ChatScreen} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
      <ProfileStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
}
