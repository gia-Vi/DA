import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../components/UserContext.js';


const App = () => {
  const [checked, setChecked] = useState('first');
  const { user } = useUser();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.headerText}>Số giờ làm tích lũy (01/09 - 30/09)</Text>
        <Text style={styles.timeText}>24:60</Text>
        <View style={styles.dateInfo}>
          <View style={styles.dateBadge}>
            <Text style={styles.monthText}>Tháng 9/2021</Text>
            <Text style={styles.dayText}>14</Text>
            <Text style={styles.dayOftheWeeksText}>Thứ 3</Text>

          </View>
          <View style={styles.workdayInfo}>
            <Text style={styles.workdayText}>Ngày làm việc</Text>
            <Text style={styles.workdayHours}>Giờ làm việc: 08:00 - 17:00</Text>
            <Text style={styles.checkInText}>Check-in: 07:50</Text>
            <Text style={styles.checkOutText}>Check-out: 13:52</Text>
          </View>
        </View>
      </View>
      <View style={styles.hrProfile}>
        <Text style={styles.hrText}> HỒ SƠ NHÂN SỰ</Text>
        <View style={styles.featureSection}>
            <FeatureButton imageSource={require('../assets/images/ion_folder-outline.jpg')} label="Hồ sơ nhân sự" targetScreen="ProfileScreen"/>
            <FeatureButton imageSource={require('../assets/images/profile.jpg')} label="Hợp đồng" />
        </View>
      </View>
    
      <View style={styles.job}>
        <Text style={styles.hrText}> CÔNG-PHÉP-LƯƠNG</Text>
        <View style={styles.featureSection}>
            <FeatureButton imageSource={require('../assets/images/checkin.jpg')} label="Điểm danh" targetScreen="TimeCheckingScreen"/>
            <FeatureButton imageSource={require('../assets/images/ChamCong.jpg')} label="Chấm công" targetScreen="TimeKeeping"/>
            <FeatureButton imageSource={require('../assets/images/business1.jpg')} label="Đk phép/ C. tác"  targetScreen="BussinessScreen"/>
            <FeatureButton imageSource={require('../assets/images/task.jpg')} label="Nhiệm vụ" />
            <FeatureButton imageSource={require('../assets/images/OT.jpg')} label="Đăng kí OT" targetScreen="OTScreen"/>
            <FeatureButton imageSource={require('../assets/images/salary.jpg')} label="Bảng lương" targetScreen="SalaryScreen"/>

        </View>
      </View>
      
    </ScrollView>
  );
};

const FeatureButton = ({ imageSource, label, targetScreen }) => {
    const navigation = useNavigation();
    return (
    <TouchableOpacity style={styles.featureButton} onPress={() => navigation.navigate(targetScreen)}>
      <Image source={imageSource} style={{width: 60, height: 60}} />
      <Text style={styles.featureLabel}>{label}</Text>
    </TouchableOpacity>
    );
};

const StatisticBox = ({ icon, label, value }) => (
  <View style={styles.statisticBox}>
    <Icon name={icon} size={20} color="#EF4444" />
    <Text style={styles.statisticValue}>{value}</Text>
    <Text style={styles.statisticLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#F6A86F',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 16

  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  dateInfo: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  dateBadge: {
    backgroundColor: '#FEF3C7',
    padding: 6,
    borderRadius: 6,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EF7720',
  },
  workdayInfo: {
    justifyContent: 'center',
  },
  workdayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  dayOftheWeeksText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  workdayHours: {
    fontSize: 16,
    color: '#000',
  },
  checkInText: {
    fontSize: 16,
    color: '#000',
  },
  checkOutText: {
    fontSize: 16,
    color: '#000',
  },

  featureSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-between',
  },

  hrText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EF7720',
    textAlign: 'center',
    marginTop: 10,
  },

  featureButton: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  featureLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#EF7720',
    marginTop: 8,
  },
  statisticsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statisticBox: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  statisticValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EF4444',
    marginTop: 8,
  },
  statisticLabel: {
    fontSize: 14,
    color: '#374151',
    marginTop: 4,
  },

  job: {
    alignItems: 'center',
    borderRadius: 24,
    marginTop: -15,
  },
  footer: {
    // Define your footer styles here
  },
});

export default App;
