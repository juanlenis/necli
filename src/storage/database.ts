import AsyncStorage from '@react-native-async-storage/async-storage';

const TRANSACTIONS_KEY = '@transactions';

export const saveTransaction = async (transaction) => {
    try {
        const existingTransactions = await getTransactions();
        const updatedTransactions = [...existingTransactions, transaction];
        await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(updatedTransactions));
    } catch (error) {
        console.error('Error saving transaction:', error);
    }
};

export const getTransactions = async () => {
    try {
        const transactionsString = await AsyncStorage.getItem(TRANSACTIONS_KEY);
        return transactionsString ? JSON.parse(transactionsString) : [];
    } catch (error) {
        console.error('Error retrieving transactions:', error);
        return [];
    }
};

export const clearTransactions = async () => {
    try {
        await AsyncStorage.removeItem(TRANSACTIONS_KEY);
    } catch (error) {
        console.error('Error clearing transactions:', error);
    }
};