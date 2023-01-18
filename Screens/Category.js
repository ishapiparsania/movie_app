import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,FlatList } from "react-native";
import GenreCard from "../components/GenreCard";

const Category = () => {
  const [genres, setGenres] = useState();
  const [activeGenre, setActiveGenre] = useState("Adventure");
  const Genres = ["Adventure", "Action", "Comedy", "Romance", "Horror", "Sci-Fi","Family"];

  

  
  return (
<View style={styles.genreListContainer}>
<FlatList
  data={Genres}
  horizontal
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item) => item}
  
  renderItem={({ item }) => (
    <GenreCard
       genreName={item}
       active={item === activeGenre ? true : false}
       onPress={(genreName)=>setActiveGenre(genreName)}
    />
  )}
/>
</View>
       
  );
};

const styles = StyleSheet.create({
  
  
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  genreListContainer: {
    paddingVertical: 10,
  },
});



export default Category;