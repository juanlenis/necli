import { Transaction } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TRANSACTION_STORAGE_KEY = '@transactions';

export const addTransaction = async (transaction: Transaction) => {
    try {
        const existingTransactions = await getTransactions();
        const updatedTransactions = [...existingTransactions, transaction];
        await AsyncStorage.setItem(TRANSACTION_STORAGE_KEY, JSON.stringify(updatedTransactions));
    } catch (error) {
        console.error('Error adding transaction:', error);
    }
};

export const getTransactions = async (): Promise<Transaction[]> => {
    try {
        const transactionsString = await AsyncStorage.getItem(TRANSACTION_STORAGE_KEY);
        return transactionsString ? JSON.parse(transactionsString) : [];
    } catch (error) {
        console.error('Error retrieving transactions:', error);
        return [];
    }
};

export const updateTransaction = async (updatedTransaction: Transaction) => {
    try {
        const existingTransactions = await getTransactions();
        const updatedTransactions = existingTransactions.map(transaction =>
            transaction.id === updatedTransaction.id ? updatedTransaction : transaction
        );
        await AsyncStorage.setItem(TRANSACTION_STORAGE_KEY, JSON.stringify(updatedTransactions));
    } catch (error) {
        console.error('Error updating transaction:', error);
    }
};