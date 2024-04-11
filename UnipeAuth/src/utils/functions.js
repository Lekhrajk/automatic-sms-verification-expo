export const generateToken = (username, password) => {
    // Simple hashing function
    function simpleHash(input) {
        let hash = 0;
        for (let i = 0; i < input.length; i++) {
            const char = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    // Combine username and password
    const combined = username + password;

    // Generate a token by hashing the combined string
    const token = simpleHash(combined).toString(36);

    return token;
}