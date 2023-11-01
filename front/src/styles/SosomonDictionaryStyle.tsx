import {StyleSheet} from "react-native"
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";

const SosomonDictionaryStyle = StyleSheet.create({
    modalBack:{
        width:"100%",
        height:"100%",
        backgroundColor:"#000",
        opacity:0.7,
        position:"absolute",
        zIndex:9998,
    },
    modalMain:{
        width:responsiveWidth(60),
        padding:20,
        position:"absolute",
        top:"20%",
        left:responsiveWidth(40)/2,
        backgroundColor:"#E8F3FE",
        zIndex:9999,
    },
    collectionTitleWrap:{
        paddingTop:14,
    },
    collectionTitle:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"900",
        color:"#000000",
    },
    collectionTitleDescription:{
        textAlign:"center",
        fontSize:14,
        fontWeight:"400",
        color:"#9FA8AF",
    },

    characterCard:{
        
    },
    characterScrollView:{
        width:responsiveWidth(50),
    },
    collectionCategory:{
        marginTop:21,
    },
    collectionCategoryTitle:{
        fontSize:12,
        fontWeight:"700",
        color:"#32312F",
    },
    categoryFlexWrap:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    categoryWrap:{
        width:60,
        height:60,
        backgroundColor:"#FFF",
        marginTop:9,
        marginLeft:6,
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    categoryImg:{
        width:30,
        height:30,
        color:"#989898",
    },
    categoryText:{
        fontSize:10,
        fontWeight:"500",
        color:"#989898",
        marginTop:2,
    },
});

export default SosomonDictionaryStyle;