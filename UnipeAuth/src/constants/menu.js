import SettingScreen from "~screens/settings/SettingScreen";
import HomeScreen from "../screens/analytics/HomeScreen";
import WalletScreen from "~screens/wallet/WalletScreen";
import HistoryScreen from "~screens/history/HistoryScreen";

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
        component: WalletScreen,
        icon: "wallet-outline",
        activeIcon: "wallet",
    },
    {
        id: "bottomTabsList03",
        name: "History",
        component: HistoryScreen,
        icon: "layers-outline",
        activeIcon: "layers",
    },
    {
        id: "bottomTabsList04",
        name: "Settings",
        component: SettingScreen,
        icon: "options-outline",
        activeIcon: "options"
    }
]

const TABS = {
    bottomTabsList
}

export default TABS;