import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.headerWrapper}>
            <Image
                style={styles.image}
                source={require('../img/littleLemonHeader.png')}
            />
            <Text style={styles.headerText}>Little Lemon, your local Mediterranean Bistro</Text>
            <Pressable onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.buttonText}>View Menu</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    },
    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 18,
        padding: 20,
        marginVertical: 8,
        color: 'gray',
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 20,
        paddingTop: 20,
        //marginVertical: 8,
        color: 'gray',
        textAlign: 'center',
        fontWeight:'bold'
    },
    image: {
        width: 300,
        height: 100,
        resizeMode:'contain',
        marginLeft:10

       // borderRadius: 10,
    },
});

export default WelcomeScreen;