import {View, Text, Image, TouchableOpacity} from "react-native"

import {SvgXml} from "react-native-svg";
import {backIcon, hamburgerMenu} from "@/assets/icons/icons";

import "@/styles/HeaderStyle";
import HeaderStyle from "@/styles/HeaderStyle";


const Header = () => {
    return(
        <>
            <View style={HeaderStyle.headerWrap}>
                <TouchableOpacity activeOpacity={0.7}>
                    <SvgXml
                      xml={backIcon}
                      width={32}
                      height={32}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={HeaderStyle.serviceName}>LOGO</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <SvgXml
                      xml={hamburgerMenu}
                      width={30}
                      height={30}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Header;