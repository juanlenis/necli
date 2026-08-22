import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ExpenseCardProps {
  amount: number;
  category: string;
  date: string;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ amount, category, date }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.amount}>${amount.toFixed(2)}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 10,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default ExpenseCard;