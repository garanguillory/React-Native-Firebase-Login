import React from 'react';
import { Text, View } from 'react-native';


// Make a component

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>
				{props.headerText}
			</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center', // up and down positioning
		alignItems: 'center',			// left and right positioning
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

export { Header };