import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	ScrollView,
	SafeAreaView,
	Dimensions
} from 'react-native';

import ComponentSlider from './ComponentSlider.js';

export default class App extends React.Component {
	renderImages = (image, index) => {
		const imageObject = typeof image === 'string' ? { uri: image } : image;
		return <Image key={index} source={imageObject} style={styles.image} />;
	};

	render() {
		const images = [
			'https://placeimg.com/640/640/nature',
			'https://placeimg.com/640/640/people',
			'https://placeimg.com/640/640/animals',
			'https://placeimg.com/640/640/beer'
		];

		return (
			<SafeAreaView style={styles.container}>
				<View style={{ height: 300 }}>
					<ComponentSlider
						data={images}
						renderComponent={this.renderImages}
						style={styles.componentSlider}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF'
	},
	componentSlider: {
		backgroundColor: '#000',
		height: 150,
		width: '100%'
	},
	content1: {
		width: '100%',
		height: 50,
		marginBottom: 10,
		backgroundColor: '#000',
		justifyContent: 'center',
		alignItems: 'center'
	},
	content2: {
		width: '100%',
		height: 100,
		marginTop: 10,
		backgroundColor: '#000',
		justifyContent: 'center',
		alignItems: 'center'
	},
	contentText: { color: '#fff' },
	buttons: {
		zIndex: 1,
		height: 15,
		marginTop: -25,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	button: {
		margin: 3,
		width: 15,
		height: 15,
		opacity: 0.9,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonSelected: {
		opacity: 1,
		color: 'red'
	},
	customSlide: {
		backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center'
	},
	customImage: {
		width: 100,
		height: 100
	},
	image: {
		width: Dimensions.get('window').width,
		height: '100%'
	}
});
