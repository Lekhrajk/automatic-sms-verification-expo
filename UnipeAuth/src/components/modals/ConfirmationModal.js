import { AlertDialog, Button, PortalProvider, XStack, YStack } from "tamagui";
import { COLORS } from "~constants/theme";

const ConfirmationModal = (props) => {
    const { show, title, message, onAction, onClose } = props;

    return (
        <PortalProvider>
            <AlertDialog open={show}>
                <AlertDialog.Portal>
                    <AlertDialog.Overlay
                        key="overlay"
                        animation="quick"
                        opacity={0.5}
                        enterStyle={{ opacity: 0 }}
                        exitStyle={{ opacity: 0 }}
                    />
                    <AlertDialog.Content
                        bordered
                        elevate
                        key="content"
                        animation={[
                            "quick",
                            {
                                opacity: {
                                    overshootClamping: true,
                                },
                            },
                        ]}
                        enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                        exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                        x={0}
                        scale={1}
                        opacity={1}
                        y={0}
                    >
                        <YStack>
                            <AlertDialog.Title>{title || ""}</AlertDialog.Title>
                            <AlertDialog.Description>{message || ""}</AlertDialog.Description>
                            <XStack gap="$3" justifyContent="flex-end" marginTop={30}>
                                <AlertDialog.Cancel asChild onPress={onClose}>
                                    <Button>Cancel</Button>
                                </AlertDialog.Cancel>
                                <AlertDialog.Action asChild onPress={onAction}>
                                    <Button
                                        theme="active"
                                        backgroundColor={COLORS.appPrimary}
                                        color={COLORS.white}
                                    >
                                        Confirm
                                    </Button>
                                </AlertDialog.Action>
                            </XStack>
                        </YStack>
                    </AlertDialog.Content>
                </AlertDialog.Portal>
            </AlertDialog>
        </PortalProvider>
    );
};

export default ConfirmationModal;
