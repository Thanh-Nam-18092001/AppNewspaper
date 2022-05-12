import { StyleSheet, Text, View, FlatList, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useContext, useEffect, useRef } from 'react'
import { NewspaperContext } from "../NewspaperContext";

import Icons from "react-native-vector-icons/Fontisto";
import Icons1 from "react-native-vector-icons/AntDesign";
import Swiper from 'react-native-swiper'

export default function Newspaper(props) {
  const { navigation } = props;
  const { newspapers, onGetNewspapers } = useContext(NewspaperContext);

  useEffect(() => {
    const fetch = async () => {
      await onGetNewspapers();
    }
    fetch().then();
  }, []);

  const renderItem = ({ item }) => {
    const { _id, name, category_id, date, time, image } = item;
    return (
      <View style={styles.List_Newspaper_Container}>
        <View style={styles.Category_Container}>
          <View style={styles.Newspaper_Container}>
            <TouchableOpacity style={styles.btn_Newspaper} onPress={() => navigation.navigate('Detail', { _id: _id })} >
              <View>
                <View style={styles.Image_Container}>
                  <Image style={styles.Image}
                    resizeMode='cover'
                    source={{ uri: image }} />
                </View>
              </View>
              <View style={styles.right}>
                <View style={styles.Name_Container}>
                  <Text style={styles.Name} numberOfLines={1}>{name}</Text>
                </View>
                <View style={styles.Category_Id_Container}>
                  <Text numberOfLines={1}>{category_id.name}</Text>
                </View>
                <View style={styles.Date_Time_Container}>
                  <View style={styles.Date_Container}>
                    <Text>{date}</Text>
                    <Icons name='date' style={styles.Icon_Date} />
                  </View>
                  <View style={styles.Time_Container}>
                    <Text>{time}</Text>
                    <Icons1 name='clockcircleo' style={styles.Icon_Time} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.Top_Container}>
        <View style={styles.Top_Title}>
          <View style={styles.Title_Container}>
            <Text style={styles.Title}>Newspaper Homepage</Text>
          </View>
        </View>

        <View style={styles.slide}>
          <Swiper autoplay={true}>
            <View>
              <Image style={styles.Slide_Image}
                source={{ uri: 'https://24hdansuneredaction.com/wp-content/uploads/2012/11/presse14.jpg' }} />
            </View>
            <View>
              <Image style={styles.Slide_Image}
                source={{ uri: 'https://vnn-imgs-f.vgcloud.vn/2020/12/22/03/trach-nhiem-lon-nhat-cua-bao-chi-la-kiem-chung-va-xac-tin-thong-tin.jpg' }} />
            </View>
            <View>
              <Image style={styles.Slide_Image}
                source={{ uri: 'https://brandcom.vn/wp-content/uploads/2020/02/quang-cao-bao-dien-tu-brandcom-2.png' }} />
            </View>
          </Swiper>
        </View>
      </View>

      <View style={styles.List_Container}>
        {
          newspapers.length == 0 ?
            <View style={styles.emptyContainer}>
              <Text style={styles.empty}>Loading...</Text>
            </View> :
            <FlatList
              data={newspapers}
              renderItem={renderItem}
              keyExtractor={() => Math.random()} />
        }
      </View>
    </View>
  );
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  Icon_Time: {
    fontSize: 16,
    marginLeft: 8
  },
  Time_Container: {
    flexDirection: 'row'
  },
  Icon_Date: {
    fontSize: 16,
    marginLeft: 8
  },
  Date_Container: {
    flexDirection: 'row'
  },
  Date_Time_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "50%"
  },
  Category_Id_Container: {
    width: '100%'
  },
  Name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  Name_Container: {
    width: 150,
    height: 40
  },
  right: {
    justifyContent: 'center',
    width: '100%',
    marginLeft: 5
  },
  Image: {
    width: 150,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  Image_Container: {
    width: 150,
    height: 100,
  },
  btn_Newspaper: {
    flexDirection: 'row',
  },
  Newspaper_Container: {
    margin: 5,
    backgroundColor: "#ffff",
    marginHorizontal: 10,
    borderRadius: 10
  },
  Category_Container: {
    width: '100%',
  },
  List_Newspaper_Container: {
    backgroundColor: "#C0C0C0"
  },
  // ==========================================
  List_Container: {
    flex: 1
  },
  Slide_Image: {
    width: "100%",
    height: 250
  },
  slide: {
    width: '100%',
    height: 250,
    marginTop: 15,
  },
  Title: {
    fontSize: 17,
    color: "#fff",
    fontWeight: 'bold',
    marginVertical: 12,
    marginHorizontal: 8
  },
  Title_Container: {
    marginTop: 3,
    width: 200,
    height: 50,
    backgroundColor: "#27B6D7",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  Top_Title: {
    flexDirection: "row",
    marginTop: 16
  },
  Top_Container: {
    height: "40%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F8F8',
  },
})