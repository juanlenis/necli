import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { categories } from '../data/categories';

const CategorySelector = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Selecciona una categoría:</Text>
            <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                style={styles.picker}
            >
                {categories.map((category) => (
                    <Picker.Item key={category.name} label={category.name} value={category.name} />
                ))}
            </Picker>
            {selectedCategory && (
                <>
                    <Text style={styles.label}>Selecciona una subcategoría:</Text>
                    <Picker
                        selectedValue={selectedCategory.subcategory}
                        onValueChange={(itemValue) => setSelectedCategory({ ...selectedCategory, subcategory: itemValue })}
                        style={styles.picker}
                    >
                        {categories.find(cat => cat.name === selectedCategory)?.subcategories.map((subcategory) => (
                            <Picker.Item key={subcategory} label={subcategory} value={subcategory} />
                        ))}
                    </Picker>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    picker: {
        height: 50,
        width: '100%',
    },
});

export default CategorySelector;