import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput 
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		flex: 2,
		fontSize: 18,
		lineHeight: 23,
		paddingLeft: 5,
		paddingRight: 5
	},
	labelStyle: {
		fontSize: 18,
		flex: 1,
		paddingLeft: 20
	},
	containerStyle: {
		alignItems: 'center',
		flex: 1,
			flexDirection: 'row',
		height: 40
	}
};

export { Input };