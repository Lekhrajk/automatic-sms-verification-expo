import { useEffect, useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import { removeListener, startOtpListener, useOtpVerify } from "react-native-otp-verify";

const useOtpReader = () => {
    const [code, setCode] = useState(null);
    const [isReading, setIsReading] = useState(true);
    const { timeoutError } = useOtpVerify();

    useEffect(() => {
        startOtpListener(message => {
            // check if message doesn't have a timeout error
            if (!message.includes("Timeout Error")) {
                const otp = /(\d{6})/g.exec(message)[1];
                setCode(otp);
                setIsReading(false);
            }
            else {
                setIsReading(false);
                showMessage({
                    message: "Timeout error!",
                    description: "Unable to detect otp. Please either enter manually or try again",
                    type: "warning",
                    icon: "auto"
                })
            }
        });
        return () => removeListener();
    }, []);


    // if timeoutError is true then this will run
    useEffect(() => {
        if (timeoutError) {
            setIsReading(false);
            showMessage({
                message: "Timeout error!",
                description: "Unable to detect otp. Please either enter manually or try again",
                type: "warning",
                icon: "auto"
            })
        }
        return () => removeListener();

    }, [timeoutError])


    return { code, isReading, setIsReading };
};

export default useOtpReader;