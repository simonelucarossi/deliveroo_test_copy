import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categoriesList = [
    {
      title: "Discounts",
      imageBg:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzY291bnR8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      title: "Pizza",
      imageBg: "https://www.my-personaltrainer.it/2020/10/13/pizza-orig.jpeg",
    },
    {
      title: "Burger",
      imageBg: "https://www.my-personaltrainer.it/2020/10/13/pizza-orig.jpeg",
    },
    {
      title: "Sushi",
      imageBg: "https://www.my-personaltrainer.it/2020/10/13/pizza-orig.jpeg",
    },
    {
      title: "Indian",
      imageBg: "https://www.my-personaltrainer.it/2020/10/13/pizza-orig.jpeg",
    },
    {
      title: "Chinese",
      imageBg: "https://links.papareact.com/gn7",
    },
    {
      title: "Japanese",
      imageBg: "https://links.papareact.com/gn7",
    },
    {
      title: "Cakes",
      imageBg: "https://links.papareact.com/gn7",
    },
    {
      title: "Mexican",
      imageBg: "https://links.papareact.com/gn7",
    },
    {
      title: "Bar",
      imageBg: "https://links.papareact.com/gn7",
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
    >
      {/* Category */}
      {categoriesList.map((category, key) => (
        <CategoryCard
          key={key}
          title={category.title}
          imageBg={category.imageBg}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
