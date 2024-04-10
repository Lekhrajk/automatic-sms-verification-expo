import HomeScreen from "../screens/home/HomeScreen";

const bottomTabsList = [
    {
        id: "bottomTabsList01",
        name: "Analytics",
        component: HomeScreen,
        icon: "bar-chart-outline",
        activeIcon: "bar-chart"
    },
    {
        id: "bottomTabsList01",
        name: "Wallet",
        component: HomeScreen,
        icon: "wallet-outline",
        activeIcon: "wallet",
    },
    {
        id: "bottomTabsList03",
        name: "History",
        component: HomeScreen,
        icon: "layers-outline",
        activeIcon: "layers",
    },
    {
        id: "bottomTabsList04",
        name: "Settings",
        component: HomeScreen,
        icon: "options-outline",
        activeIcon: "options"
    }
]

const TABS = {
    bottomTabsList
}

export default TABS;