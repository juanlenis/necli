import { Alert } from 'react-native';

export const parseSms = (sms: string) => {
    const regex = /(\d+(\.\d{1,2})?)/; // Regex to extract the amount
    const amountMatch = sms.match(regex);
    const amount = amountMatch ? parseFloat(amountMatch[0]) : null;

    // Example of extracting other relevant information from the SMS
    const messageParts = sms.split(' ');
    const description = messageParts.slice(1).join(' '); // Assuming the first part is the amount

    if (amount !== null) {
        // Trigger a notification to classify the expense or income
        Alert.alert(
            'Nueva transacción',
            `Has recibido un mensaje de Nequi: ${description}. Monto: ${amount}`,
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Clasificar', onPress: () => {/* Navigate to classification screen */} },
            ]
        );
    }
};