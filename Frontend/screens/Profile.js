import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { fetchAPI } from '../apiConfig.js'; 





//console.log(user.ngaysinh);


const ProfileScreen = ({route}) => {
  const navigation = useNavigation();
  const [data, setData] = useState({});
  const {id} = route.params;
  useEffect(() => {
    // fetch(`http://192.168.1.8:7218/api/Nguoidung/${id}`)
    // .then((response) => response.json())
    // .then(data => {
    //   setData(data);
    // })
    const fetchData = async () => {
      try {
        const data = await fetchAPI(`Nguoidung/${id}`);
        setData(data);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };
    fetchData();

  },[id])
  const dataUser = [
    { label: 'Ngày sinh', placeholder: 'Ngày sinh', value: data.ngaysinh },
    { label: 'Giới tính', placeholder: 'Giới tính', value:  data.gioitinh == 1 ? 'Nam' : 'Nữ' },
    { label: 'CMND', placeholder: 'CMND', value: data.cangcuoccongdan},
    { label: 'Ngày cấp', placeholder: 'Nơi cấp', value: data.ngaycap},
    { label: 'Quốc tịch', placeholder: 'Quốc tịch', value: data.noicap},
    { label: 'Dân tộc', placeholder: 'Dân tộc', value: data.dantoc},
    { label: 'Tôn giáo', placeholder: 'Tôn giáo', value: data.tongiao},
    { label: 'Hôn nhân', placeholder: 'Hôn nhân', value: data.ngaysinh},
    { label: 'Học vấn', placeholder: 'Học vấn', value: data.hocvan},
    { label: 'Điện thoại', placeholder: 'Điện thoại', value: data.sodienthoai},
    { label: 'Email cá nhân', placeholder: 'Email cá nhân', value: data.emailcanhan},
    { label: 'Email công ty', placeholder: 'Email công ty', value: data.emailcongty},
    { label: 'Địa chỉ thường trú', placeholder: 'Địa chỉ thường trú', value: data.diachi},
    // ... more requests
  ];
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={25} color="#fff" />
      </TouchableOpacity>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URI
        />
        <Text style={styles.profileName}>{data.hoten}</Text>
      </View>
      <View style={styles.form}>
        {dataUser.map((request, index) => (
            <ProfileField key={index} label={request.label} placeholder={request.placeholder} value={request.value} />
        )
        )}
      </View>
    </ScrollView>
  );
};

const ProfileField = ({ label, placeholder, value }) => (
  <View style={styles.profileField}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <TextInput
      style={styles.fieldInput}
      placeholder={placeholder}
      placeholderTextColor="#A1A1A1"
      value= {value}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 60,
    backgroundColor: '#F6A86F',
  },
  backButton: {
    position: 'absolute',
    top: 50, // Adjust the position as needed
    left: 10, // Adjust the position as needed
    zIndex: 10, // Make sure this is above all other view elements
    padding: 8
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E2E8F0',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
  form: {
    paddingHorizontal: 20,
  },
  profileField: {
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 16,
    color: '#EF7720',
    marginBottom: 5,
  },
  fieldInput: {
    backgroundColor: '#FFFFFF',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    color: '#000',
    padding: 10,
  },
});

export default ProfileScreen;
