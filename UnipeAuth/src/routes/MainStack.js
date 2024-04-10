import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import IIcon from "react-native-vector-icons/Ionicons";
import TABS from '~constants/menu';
import { COLORS, SIZES } from '~constants/theme';
const Tab = createBottomTabNavigator();
const { bottomTabsList } = TABS;

const MainStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: COLORS.appPrimary,
                tabBarInactiveTintColor: COLORS.appGray,
                headerShown: false,
                tabBarShowLabel: true,
                tabBarIconStyle: {
                    marginBottom: -10
                },
                tabBarStyle: {
                    backgroundColor: COLORS.appSecondary,
                    paddingBottom: 10,
                    height: Platform.OS === 'android' ? SIZES.HEIGHT * 0.09 : SIZES.HEIGHT * 0.1,
                    shadowColor: COLORS.appPrimary,
                    borderTopWidth: 0,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    }
                },
                tabBarLabelStyle: {
                    fontSize: SIZES.smd,
                },
                tabBarHideOnKeyboard: true,
            }}
            
        >
            {
                bottomTabsList &&
                bottomTabsList.map((tab) => {
                    return (
                        <Tab.Screen
                            key={tab.id}
                            name={tab.name}
                            component={tab.component}
                            options={{
                                tabBarIcon: ({ focused }) => (
                                    <IIcon
                                        name={focused ? tab.activeIcon : tab.icon}
                                        size={SIZES.s3xl}
                                        color={focused ? COLORS.appPrimary : COLORS.appGray}
                                    />
                                )
                            }}
                        />
                    )
                })
            }

        </Tab.Navigator>
    );
}

export default MainStack;
