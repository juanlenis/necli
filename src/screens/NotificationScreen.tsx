import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Notification } from '../services/notificationService';
import { categories } from '../data/categories';

const NotificationScreen = ({ route }) => {
    const navigation = useNavigation();
    const { message } = route.params;

    useEffect(() => {
        // Show notification with the message received
        Notification.show({
            title: 'Nuevo mensaje de Nequi',
            body: message,
            onPress: () => handleNotificationPress(),
        });
    }, [message]);

    const handleNotificationPress = () => {
        Alert.alert(
            'Clasificar Gasto/Ingreso',
            '¿Cómo clasificar este gasto o ingreso?',
            categories.map(category => ({
                text: category.name,
                onPress: () => classifyTransaction(category),
            })),
            { cancelable: true }
        );
    };

    const classifyTransaction = (category) => {
        // Logic to classify the transaction and save it
        Alert.alert(`Transacción clasificada como: ${category.name}`);
        navigation.navigate('DashboardScreen'); // Navigate back to the dashboard
    };

    return (
        <View>
            <Text>Notificación Recibida</Text>
            <Text>{message}</Text>
            <Button title="Clasificar" onPress={handleNotificationPress} />
        </View>
    );
};

export default NotificationScreen;