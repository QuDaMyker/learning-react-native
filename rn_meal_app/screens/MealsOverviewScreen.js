import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../Components/MealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../Components/MealsList/MealsList";
function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  // function renderMealItem(itemData) {
  //   const item = itemData.item;
  //   const mealItemProps = {
  //     navigation: navigation,
  //     mealId: item.id,
  //     title: item.title,
  //     imageUrl: item.imageUrl,
  //     duration: item.duration,
  //     complexity: item.complexity,
  //     affordability: item.affordability,
  //   };
  //   return <MealItem {...mealItemProps} />;
  // }

  // return (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={displayedMeals}
  //       keyExtractor={(item) => item.id}
  //       renderItem={renderMealItem}
  //     />
  //   </View>
  // );

  return <MealsList items={displayedMeals} />;
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
