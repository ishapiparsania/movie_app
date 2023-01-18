import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, View } from "react-native";
import { wp,hp } from "./Dimensons";

const GenreCard = ({genreName,active,onPress}) => {
  return (

    <TouchableOpacity 
    style={{...styles.container,backgroundColor:active?'blue':'white'}} 
    activeOpacity={0.5}
    onPress={()=>onPress(genreName)}
    
    > 
        <Text>{genreName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 5,
    marginLeft:10,
    backgroundColor: "white",
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    paddingRight:10,
    width: wp('30%'),
  },
  genreText: {
    fontSize: 13,
    // color: COLORS.ACTIVE,
    // fontFamily: FONTS.BOLD,
  },
});

export default GenreCard;
