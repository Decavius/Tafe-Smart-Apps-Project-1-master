import {StyleSheet} from 'react-native'; 
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const theme = StyleSheet.create({
    label:{
        fontWeight:'bold',
        fontFamily: 'Trebuchet MS'
    },
    viewStyle:{
        backgroundColor:'#D9D9D9',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    userTile:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:2,
        padding:5,
        margin:5,
        backgroundColor: '#D9D9D9',
    },
    userTileButtonContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor: '#262626',
        backgroundColor: '#fff'
    },
    userTileButton:{
        backgroundColor:'#cb6d4f',
        padding:5,
        marginLeft:2.5,
        minWidth:55,

    },
    userTileButtonText:{
        fontFamily: 'Trebuchet MS',
        color:'#fff',
        textAlign:'center',
        fontWeight: 'bold'
    },
    addContactButton:{
        fontFamily: 'Trebuchet MS',
        backgroundColor:'#c64c38',
        padding:5
    },
    addContactButtonText:{
        fontFamily: 'Trebuchet MS',
        color:'#fff',
        textAlign:'center'
    },
    deleteContactButton:{
        fontFamily: 'Trebuchet MS',
        backgroundColor:'#941a1d',
        padding:5
    },
    deleteContactButtonText:{
        fontFamily: 'Trebuchet MS',
        color:'#fff',
        textAlign:'center'
    },
    saveButton:{
        fontFamily: 'Trebuchet MS',
        backgroundColor:'#c64c38',
        padding:5,
        marginTop:5
    },
    saveButtonText:{
        fontFamily: 'Trebuchet MS',
        color:'#fff',
        textAlign:'center'
    },
    cancelButton:{
        fontFamily: 'Trebuchet MS',
        backgroundColor:'red',
        padding:5,
        marginTop:5
    },
    cancelButtonText:{
        fontFamily: 'Trebuchet MS',
        color:'#fff',
        textAlign:'center'
    },  
    textInput:{
        fontFamily: 'Trebuchet MS',
        backgroundColor:'#fff',
        borderColor:'#3b3b3b',
        borderWidth:1,
        margin:2.5,
        padding:2.5
    },
    deletePrompt:{
        textAlign:'center',
        fontFamily: 'Trebuchet MS',
        fontStyle: 'italic'
    },
    addressLabel:{
        fontWeight:'bold',
        fontFamily: 'Trebuchet MS',
        textAlign:'center'
    }
}); 

export default theme; 