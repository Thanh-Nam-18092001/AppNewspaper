import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { NewspaperContext } from '../NewspaperContext';

export default function Detail(props) {
  const { navigation, route: { params: { _id } } } = props;
  const { onGetNewspaperByID, newspaper } = useContext(NewspaperContext);

  useEffect( () => {
    const fetch = async () => {
      await onGetNewspaperByID(_id);
    }
    fetch().then();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.Top_Container}>
        <View
          style={styles.Top}>
          <Text style={styles.Title_Top}>
            Article Information
          </Text>
        </View>

      </View>

      {newspaper && (
        <>
          <ScrollView>
            <Image
              source={{ uri: newspaper.image }}
              resizeMode={"cover"}
              style={styles.image}
            />
            <View style={styles.Center_Container}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{newspaper.name}</Text>
              </View>

              {
                newspaper.category_id && (
                  <Text>{newspaper.category_id.name}</Text>
                )
              }
              <View style={styles.Date_Time_Container}>
                <Text>{newspaper.date}</Text>
                <Text style={styles.time}>{newspaper.time}</Text>
              </View>

              <View>
                <Text style={styles.Title_Content}>Content: </Text>
                <Text>{newspaper.contents}</Text>
              </View>
            </View>
          </ScrollView>
        </>
      )}

      <View style={styles.Bottom_Container}>
        <TouchableOpacity onPress={() => navigation.goBack()}
          style={styles.btn_Bottom}>
          <Text style={styles.txt_Bottom}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txt_Bottom: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  },
  btn_Bottom: {
    width: '100%',
    height: '100%',
    backgroundColor: '#27B6D7',
    borderRadius: 15,
    justifyContent: 'center'
  },
  Bottom_Container: {
    width: '100%',
    height: 40,
    borderRadius: 15
  },
  Title_Content: {
    fontSize: 16,
    fontWeight: '600'
  },
  time: {
    marginLeft: 230
  },
  Date_Time_Container: {
    flexDirection: 'row'
  },
  name: {
    fontSize: 24,
    fontWeight: '600'
  },
  nameContainer: {
    width: '100%',
    marginTop: 8
  },
  Center_Container: {
    marginHorizontal: 12
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 8
  },
  Title_Top: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 'bold',
    marginVertical: 12,
    marginHorizontal: 8
  },
  Top: {
    marginTop: 16,
    width: 200,
    height: 50,
    backgroundColor: "#27B6D7",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  Top_Container: {
    marginTop: 16
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EEEFF3'
  },
})