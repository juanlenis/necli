import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PeriodSelector from '../components/PeriodSelector';
import ExpenseCard from '../components/ExpenseCard';
import { getTransactions } from '../services/transactionService';

const DashboardScreen = () => {
    const navigation = useNavigation();
    const [transactions, setTransactions] = React.useState([]);
    const [period, setPeriod] = React.useState('monthly');

    React.useEffect(() => {
        const fetchTransactions = async () => {
            const data = await getTransactions(period);
            setTransactions(data);
        };
        fetchTransactions();
    }, [period]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <PeriodSelector selectedPeriod={period} onPeriodChange={setPeriod} />
            {transactions.map((transaction) => (
                <ExpenseCard key={transaction.id} transaction={transaction} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default DashboardScreen;