import React from 'react';
import { View, Text, Button } from 'react-native';

const PeriodSelector = ({ selectedPeriod, onPeriodChange }) => {
  const periods = ['Weekly', 'Monthly', 'Annually'];

  return (
    <View>
      <Text>Select Period:</Text>
      {periods.map((period) => (
        <Button
          key={period}
          title={period}
          onPress={() => onPeriodChange(period)}
          color={selectedPeriod === period ? 'blue' : 'gray'}
        />
      ))}
    </View>
  );
};

export default PeriodSelector;