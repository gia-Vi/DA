import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PaySlipScreen = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState({ month: '11', year: '2023' });
  const salaryData = {
    netSalary: '11,800,000 VND',
    workDays: '21',
    baseSalary: '9,000,000 VND',
    performanceSalary: '2,000,000 VND',
    overtimeSalary: '500,000 VND',
    mealAllowance: '1,000,000 VND',
    totalIncome: '12,600,000 VND',
    insurance: '900,000 VND',
    totalDeductions: '900,000 VND'
  };


  
  const DateSelector = ({ date, onIncrement, onDecrement }) => (
    <View style={styles.dateSelector}>
      <TouchableOpacity onPress={onDecrement} style={styles.dateChangeButton}>
        <Text style={styles.dateChangeText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.dateText}>{`${date.month}/${date.year}`}</Text>
      <TouchableOpacity onPress={onIncrement} style={styles.dateChangeButton}>
        <Text style={styles.dateChangeText}>+</Text>
      </TouchableOpacity>
    </View>
  );
  
  const incrementMonth = (currentDate) => {
    // Logic to increment month
    const newDate = { ...currentDate };
    if (newDate.month === '12') {
      newDate.month = '01';
      newDate.year = (parseInt(newDate.year, 10) + 1).toString();
    } else {
      let newMonth = parseInt(newDate.month, 10) + 1;
      newDate.month = newMonth < 10 ? `0${newMonth}` : `${newMonth}`;
    }
    return newDate;
  };
  
  const decrementMonth = (currentDate) => {
    // Logic to decrement month
    const newDate = { ...currentDate };
    if (newDate.month === '01') {
      newDate.month = '12';
      newDate.year = (parseInt(newDate.year, 10) - 1).toString();
    } else {
      let newMonth = parseInt(newDate.month, 10) - 1;
      newDate.month = newMonth < 10 ? `0${newMonth}` : `${newMonth}`;
    }
    return newDate;
  };
  
  const IncomeSection = ({ salaryData }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Khoản thu</Text>
      <SalaryItem title="Ngày công" value={salaryData.workDays} />
      <SalaryItem title="Lương chính" value={salaryData.baseSalary} />
      <SalaryItem title="Lương hiệu quả" value={salaryData.performanceSalary} />
      <SalaryItem title="Lương ngoài giờ" value={salaryData.overtimeSalary} />
      <SalaryItem title="Phụ cấp cơm" value={salaryData.mealAllowance} />
      <SalaryItem title="Tổng thu" value={salaryData.totalIncome} isTotal={true} />
    </View>
  );
  
  const DeductionSection = ({ salaryData }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Khoản chi</Text>
      <SalaryItem title="BHXH, YT, TN" value={salaryData.insurance} />
      <SalaryItem title="Tổng chi" value={salaryData.totalDeductions} isTotal={true} />
    </View>
  );
  
  const SalaryItem = ({ title, value, isTotal }) => (
    <View style={styles.salaryItem}>
      <Text style={isTotal ? styles.itemTotalTitle : styles.itemTitle}>{title}</Text>
      <Text style={isTotal ? styles.itemTotalValue : styles.itemValue}>{value}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bảng lương</Text>
      </View>
      <DateSelector
        date={date}
        onIncrement={() => setDate(incrementMonth(date))}
        onDecrement={() => setDate(decrementMonth(date))}
      />
      <View style={styles.summaryBox}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Lương thực nhận</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>{salaryData.netSalary}</Text>
        </View>
    </View>
      <IncomeSection salaryData={salaryData} />
      <DeductionSection salaryData={salaryData} />
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#F6A86F',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 32,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 24,
    flex: 1,
    
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    alignSelf: 'center', // This ensures that the DateSelector is centered in its parent
    width: '50%', // This sets the width of the DateSelector to half the width of its parent
    // Adjust padding as needed
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    
  },
  dateChangeButton: {
    padding: 10,
  },
  dateChangeText: {
    fontSize: 12,
  },
  dateText: {
    fontSize: 12,
    marginHorizontal: 10,
  },
  summaryBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#FFA500', // Orange color
    padding: 20,
    
    width: '90%',
  },

  summaryItem: {
    flexDirection: 'row', // This makes the children align horizontally
  },
  summaryText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  salaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  itemTitle: {
    color: '#000',
    fontSize: 16,
  },
  itemValue: {
    color: '#000',
    fontSize: 16,
  },
  itemTotalTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemTotalValue: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateChangeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PaySlipScreen;
