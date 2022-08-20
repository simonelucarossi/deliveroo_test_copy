import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import Icon from "react-native-vector-icons/AntDesign";
import Test from "react-native-vector-icons/MaterialIcons";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const featuredRowsList = [
    {
      id: 1,
      title: "Featured",
      description: "Spaces bought by our partners",
      partners: [
        {
          numberOfReviews: 50,
          rating: 2,
          distance: 2.2,
          image: "https://www.vinoefocaccia.it/images/carousel-home-04.jpg",
          costOfDelivery: 1,
          title: "All'antico Vinaio",
          stimatedTime: "15 - 45",
        },
        {
          numberOfReviews: 792,
          rating: 3.92,
          distance: 2.2,
          image: "https://www.vinoefocaccia.it/images/carousel-home-04.jpg",
          costOfDelivery: 0,
          title: "Marracash",
          stimatedTime: "25 - 35",
        },
        {
          numberOfReviews: 10,
          rating: 4.2,
          distance: 10.2,
          image:
            "https://media-cdn.tripadvisor.com/media/photo-s/1a/ce/06/c4/20200202-123903-largejpg.jpg",
          costOfDelivery: 1.4,
          title: "Antico Torchio",
          stimatedTime: "15 - 20",
        },
        {
          numberOfReviews: 1,
          rating: 5,
          distance: 0.2,
          image:
            "https://media-cdn.tripadvisor.com/media/photo-s/10/59/35/d9/20170819-215308-largejpg.jpg",
          costOfDelivery: 0,
          title: "La conchiglia",
          stimatedTime: "5 - 25",
        },
      ],
    },
    {
      id: 2,
      title: "Tasty Discounts",
      description: "Oh, i don't know how write this",
      partners: [
        {
          numberOfReviews: 10000,
          rating: 4.72,
          distance: 0.1,
          image:
            "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/Stores/gnzh874hrhut6ywf9g93",
          costOfDelivery: 0,
          title: "KFC",
          stimatedTime: "30 - 45",
        },
        {
          numberOfReviews: 32,
          rating: 4.8,
          distance: 5.1,
          image:
            "https://www.euroma2.it/wp-content/uploads/2021/05/Copertina_MiNdujo.jpg",
          costOfDelivery: 2,
          title: "Mi n'dujo",
          stimatedTime: "10 - 25",
        },
        {
          numberOfReviews: 0,
          rating: undefined,
          distance: 1.92,
          image:
            "https://res.cloudinary.com/tf-lab/image/upload/restaurant/a6b41605-aa7a-4e0a-9fd1-489d08448f2b/9fa965a0-d0ab-4248-b054-00df455e2be7.jpg",
          costOfDelivery: 1.4,
          title: "Il mulino",
          stimatedTime: "15 - 45",
        },
        {
          numberOfReviews: 0,
          rating: undefined,
          distance: 0.05,
          image:
            "https://blog.italotreno.it/wp-content/uploads/2018/08/Ristoranti-con-terrazza-a-Roma-Les-etoiles-1140x660.jpg",
          costOfDelivery: 0.25,
          title: "La terrazza",
          stimatedTime: "5 - 15",
        },
      ],
    },
    {
      id: 3,
      title: "Offers near you!",
      description: "Check what are in discount",
      partners: [
        {
          numberOfReviews: 2032,
          rating: 4.2,
          distance: 0.9,
          image:
            "https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2020/07/Bicchieri-di-mousse-e-cioccolato-1200x675.jpg",
          costOfDelivery: 0,
          title: "Capani",
          stimatedTime: "02 - 05",
          menus: [
            {
              title: "Gelati",
              dishes: [
                {
                  id: 1,
                  title: "Coppa amarena",
                  image:
                    "https://www.bindidessert.it/upload/products/p_s_0881%20coppa%20Creme%20Brulee%20FdB.jpg",
                  ingredients: ["Amarena", "crema", "ciocciolato"],
                  price: 3.5,
                },
                {
                  id: 2,
                  title: "Coppa affogato al cioccolato",
                  image:
                    "https://barmanitalia.it/wp-content/uploads/2013/08/affogato.jpg",
                  ingredients: ["Cioccolato", "granella", "nocciola", "crema"],
                  price: 2.9,
                },
                {
                  id: 3,
                  title: "Tre monti",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqPBnq0vFzD6qWXt9KnPTPoYHHH7LHkErgg&usqp=CAU",
                  ingredients: [
                    "Fragola",
                    "cioccolato",
                    "crema",
                    "cioccolato fuso",
                  ],
                  price: 2.9,
                },
              ],
            },
            {
              title: "Crepes",
              dishes: [
                {
                  id: 4,
                  title: "Cioccolato",
                  image:
                    "https://www.vinoefocaccia.it/images/carousel-home-04.jpg",
                  ingredients: ["Cioccolato", "zucchero"],
                  price: 3.5,
                },
                {
                  id: 5,
                  title: "Pistacchio",
                  image:
                    "https://www.vinoefocaccia.it/images/carousel-home-04.jpg",
                  ingredients: ["Pistacchio", "zucchero"],
                  price: 2.9,
                },
                {
                  id: 6,
                  title: "B/White",
                  image:
                    "https://media-cdn.tripadvisor.com/media/photo-s/0e/85/4b/3b/crepes-black-and-white.jpg",
                  ingredients: [
                    "Zucchero",
                    "cioccolato fondente",
                    "cioccolato al latte",
                  ],
                  price: 2.9,
                },
              ],
            },
          ],
        },
        {
          numberOfReviews: 12,
          rating: 3.12,
          distance: 2.2,
          image:
            "https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2022/08/Mousse-ai-frutti-di-bosco-0D6A4850-1200x675.jpg",
          costOfDelivery: 2,
          title: "Renato",
          stimatedTime: "10 - 15",
        },
        {
          numberOfReviews: 3,
          rating: 1.75,
          distance: 2.1,
          image:
            "https://www.eatthis.com/wp-content/uploads/sites/4/2020/06/smothered-burrito.jpg?quality=82&strip=1",
          costOfDelivery: 1.4,
          title: "Desperados",
          stimatedTime: "15 - 45",
        },
        {
          numberOfReviews: 67,
          rating: 4.56,
          distance: 3.45,
          image: "https://www.vinoefocaccia.it/images/carousel-home-04.jpg",
          costOfDelivery: 1,
          title: "Vino & Focaccia",
          stimatedTime: "25 - 30",
        },
      ],
    },
  ];

  return (
    <SafeAreaView className="bg-white pt-5 mb-32">
      {/* --- HEADER --- */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://scontent.fnap4-1.fna.fbcdn.net/v/t39.30808-6/278089841_701721617633988_6086285559479583922_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=im9lPp0bmhkAX9e_P3X&_nc_ht=scontent.fnap4-1.fna&oh=00_AT8FXIZWR9enA9Sh_VR8l3AqwB3hinHuRN7bMu4b0XYeyQ&oe=63032E27",
          }}
          className="h-7 w-7 bg-gray-700 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-lg flex-row justify-center items-center">
              Current Location
            </Text>
            <TouchableOpacity>
              <Test name="keyboard-arrow-down" color="#00CCBB" size={22} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="items-center p-[9px] bg-[#f2f2f2] rounded-full">
          <Icon name="user" size={16} color="#00CCBB" />
        </View>
      </View>

      {/* --- SEARCHBAR --- */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-100 rounded-md p-2 flex-1">
          <Icon name="search1" size={20} color="#9ca3af" />
          <TextInput
            placeholder="Restaurants, dishes, pizza"
            keyboardType="default"
            className="text-gray-400 flex-1"
          />
        </View>
        {/* SETTINGS */}
        <TouchableOpacity>
          <Icon name="setting" size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      {/* --- BODY --- */}
      <ScrollView className="flex-1 bg-gray-100 pb-32">
        {/* -- Categories -- */}
        <Categories />
        {/* -- Featured Boxes -- */}
        {featuredRowsList.map((featuredRow, key) => (
          <FeaturedRow
            title={featuredRow.title}
            key={key}
            description={featuredRow.description}
            partners={featuredRow.partners}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
