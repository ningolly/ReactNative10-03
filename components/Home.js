import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../assets/computador.jpg';

export default function Home(props) {
    return (
        <ImageBackground source={backgroundImage} style={styles.image}>
        <SafeAreaView style={styles.container}>
            <View style={styles.principal}>
                <Text style={styles.titulo}> Partes do Computador </Text>
                <Text style={styles.subTitulo}> As partes mais importantes do PC </Text>
            </View>

                <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate('placaMae')}}>
                    <Text style={styles.textButton}> Placa-Mãe </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate('placaVideo')}}>
                    <Text style={styles.textButton}> Placa de Vídeo </Text>
                </TouchableOpacity>
            <StatusBar style="auto" />
        </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize:30,
        color: 'white'
    },

    subTitulo: {
        fontSize: 15,
        color: 'white'
    },

    button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
    },

    textButton: {
        fontSize: 20,
        color: 'white',
    },

    principal: {
        alignItems: 'center',
        marginBottom: 50,
        borderWidth: 2,
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 10,
    }
});
