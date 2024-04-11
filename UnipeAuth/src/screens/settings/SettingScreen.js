import { StyleSheet } from 'react-native'
import { View, YStack, Button, Card, XStack, H2, Paragraph, Avatar } from "tamagui";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { COLORS, STYLES } from '~constants/theme';
import IIcon from "react-native-vector-icons/Ionicons";
import ConfirmationModal from '~components/modals/ConfirmationModal';
import { logOut, removeUser } from '~store/reducers/userSlice';

const SettingScreen = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector((state => state.user.userData));


    // function to remove user account from redux
    const handleRemoveUser = () => {
        dispatch(removeUser())
        setShowConfirmModal(false);
    }

    return (
        <View flex={1}>
            <View style={STYLES.contentContainer}>
                {
                    userData && userData !== null &&
                    <View marginBottom={30}>
                        <Card
                            elevate
                            size="$4"
                            paddingHorizontal={20}
                            paddingVertical={10}
                            bordered
                        >
                            <XStack alignItems="center">
                                <View>
                                    <Avatar circular size="$8">
                                        <Avatar.Image
                                            accessibilityLabel={userData?.username}
                                            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
                                        />
                                        <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
                                    </Avatar>
                                </View>
                                <Card.Header padded>
                                    <H2>{userData?.username}</H2>
                                    <Paragraph theme="alt2">{userData?.phone}</Paragraph>
                                </Card.Header>
                            </XStack>
                        </Card>
                    </View>
                }
                <YStack
                    gap={20}
                >
                    <Button
                        iconAfter={<IIcon name="log-out-outline" size={26} />}
                        size="$6"
                        backgroundColor={COLORS.red}
                        color={COLORS.white}
                        onPress={() => dispatch(logOut())}
                    >
                        Logout
                    </Button>
                    <Button
                        size="$3"
                        onPress={() => setShowConfirmModal(true)}
                    >
                        Delete Account
                    </Button>
                </YStack>
            </View>

            {/* confirmation modal if user choose to delete account */}
            <ConfirmationModal
                show={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                onAction={handleRemoveUser}
                title="Are you sure?"
                message="Your want to delete this account?. This action is isreversible and your account will no longer be available!"
            />
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({})