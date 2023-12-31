import {StyleSheet} from "react-native"
import { responsiveWidth } from "react-native-responsive-dimensions";

const CreateHelpStyle = StyleSheet.create({
    createHelpTitleWrap:{
        marginHorizontal:responsiveWidth(4),
        marginTop:28,
    },
    createHelpTitle:{
        fontSize:22,
        fontWeight:"900",
        color:"#4B4B4B",
    },
    createHelpFlexWrap:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:27,
    },
    helpWriteWrap:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    helpContentInput:{
        width:responsiveWidth(60),
        height:40,
        borderWidth:1,
        borderColor:"#E2DCDE",
        padding:10,
        borderRightWidth:0,
    },
    micImgWrap:{
        width:responsiveWidth(10),
        height:40,
        textAlign:"right",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#E2DCDE",
        borderLeftWidth:0,
    },
    micImg:{
        width:18,
        height:18,
    },
    submitButton:{
        width:responsiveWidth(20),
        height:40,
        backgroundColor:"#E2DCDE",
        borderRadius:8,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

    recommendWrap:{
        paddingHorizontal:responsiveWidth(4),
        backgroundColor:"#F7F7F7",
        paddingTop:23,
    },
    recommendTitlewrap:{
        paddingLeft:8,
    },
    recommendTitle:{
        fontSize:13,
        fontWeight:"700",
        color:"#7C7C88",
    },
    recommendPointText:{
        fontWeight:"900",
        color:"#7773BF",
    },
    helpDetailWrap: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

    detailInputWrap:{
        marginHorizontal:responsiveWidth(4),
    },
    inputTitle:{
        marginTop:10,
        marginBottom:4,
    },
    inputTitleText:{
        fontSize:16,
        fontWeight:"900",
        color:"#7C7C88",
    },
    categoryWrap:{
        marginTop:16,
    },
    categoryTitle:{

    },
    categoryTitleText:{
        fontSize:14,
        fontWeight:"700",
        color:"#7C7C88",
    },
    submitButtonWrap:{
        width:"100%",
        height:50,
        backgroundColor:"#B6B2C0",
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:30,
    },
    submitButtonActive: {
        backgroundColor:"#9D9AF9",
    },
    submitButtonText:{
        fontSize:16,
        fontWeight:"700",
        color:"#FFF",
    },

})

export default CreateHelpStyle;
