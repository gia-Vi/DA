import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useUser } from '../components/UserContext.js';


//console.log(user.ngaysinh);


const ProfileScreen = () => {
  const { user } = useUser();
  const requests = [
    { label: 'Ngày sinh', placeholder: 'Ngày sinh', value: user.ngaysinh },
    { label: 'Giới tính', placeholder: 'Giới tính', value:  user.gioitinh == 1 ? 'Nam' : 'Nữ' },
    { label: 'CMND', placeholder: 'CMND', value: user.cangcuoccongdan},
    { label: 'Ngày cấp', placeholder: 'Nơi cấp', value: user.ngaycap},
    { label: 'Quốc tịch', placeholder: 'Quốc tịch', value: user.noicap},
    { label: 'Dân tộc', placeholder: 'Dân tộc', value: user.dantoc},
    { label: 'Tôn giáo', placeholder: 'Tôn giáo', value: user.tongiao},
    { label: 'Hôn nhân', placeholder: 'Hôn nhân', value: user.ngaysinh},
    { label: 'Học vấn', placeholder: 'Học vấn', value: user.hocvan},
    { label: 'Điện thoại', placeholder: 'Điện thoại', value: user.sodienthoai},
    { label: 'Email cá nhân', placeholder: 'Email cá nhân', value: user.emailcanhan},
    { label: 'Email công ty', placeholder: 'Email công ty', value: user.emailcongty},
    { label: 'Địa chỉ thường trú', placeholder: 'Địa chỉ thường trú', value: user.diachi},
    // ... more requests
  ];
  return (
    <ScrollView style={styles.container}>
      {/* <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity> */}
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URI
        />
        <Text style={styles.profileName}>Tiêu Viết Khánh</Text>
      </View>
      <View style={styles.form}>
        {requests.map((request, index) => (
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
