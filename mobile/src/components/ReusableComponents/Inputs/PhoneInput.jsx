import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ChevronSVG from '../../../assets/icons/ChevronSVG';
import ErrorExclSVG from '../../../assets/icons/ErrorExclSVG';
import QuestionMarkSVG from '../../../assets/icons/QuestionMarkSVG';
import TelephoneSVG from '../../../assets/icons/TelephoneSVG';

const countries = [
  { name: 'VE', code: '+58' },
  { name: 'PAN', code: '+507' },
  { name: 'US', code: '+1' },
  { name: 'MX', code: '+52' },
  { name: 'CO', code: '+57' },
  { name: 'PE', code: '+51' },
  { name: 'BR', code: '+55' },
  { name: 'AR', code: '+54' },
];

const countryFlags = {
  AR: '🇦🇷',
  US: '🇺🇸',
  BR: '🇧🇷',
  CO: '🇨🇴',
  MX: '🇲🇽',
  PE: '🇵🇪',
  VE: '🇻🇪',
  PAN: '🇵🇦',
};

const validateTelephone = (telephone) => {
  const telephoneRegex = /^[0-9]+$/;
  return telephoneRegex.test(telephone);
};

const PhoneInput = ({ value, setValue, hintp, placeholder }) => {
  const [hint, setHint] = useState(hintp || 'Ingresa un número de teléfono para contactarte.');
  const [phone, setPhone] = useState('');
  const [visible, setVisible] = useState(true);
  const [error, setError] = useState('');
  const [prefix, setPrefix] = useState('+58');
  const [isValid, setIsValid] = useState(true);
  const [divBlue, setDivBlue] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  
  useEffect(() => {
    if (hintp) {
      setHint(hintp);
    }
  }, [hintp]);

  const showHint = () => {
    setVisible(!visible);
  };

  const onFocusDivBlue = () => {
    setDivBlue(true);
  };

  const onBlurDivBlue = () => {
    setDivBlue(false);
  };

  const onChange = (e) => {
    const newTelephone = e;
    const valid = validateTelephone(newTelephone);
    setIsValid(valid);
    setError(valid ? '' : 'Ingresa un número de teléfono válido');
    setPhone(newTelephone);
    if (valid) {
      setValue(`${prefix} ${newTelephone}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, divBlue ? styles.inputContainerFocused : styles.inputContainerBlurred]}>
        <TelephoneSVG />
        <SelectDropdown
          data={countries}
          defaultValueByIndex={0}
          onSelect={(selectedItem) => {
            setPrefix(selectedItem.code);
            setSelectedCountry(selectedItem);
          }}
          buttonStyle={error ? styles.dropdown3BtnStyleError : styles.dropdown3BtnStyle}
          renderCustomizedButtonChild={(selectedItem) => (
            <View style={styles.dropdownButton}>
              <Text style={styles.dropdownButtonText}>
                {selectedItem ? countryFlags[selectedItem.name] : 'Select country'}
              </Text>
              <ChevronSVG />
            </View>
          )}
          dropdownStyle={styles.dropdown3DropdownStyle}
          rowStyle={styles.dropdown3RowStyle}
          selectedRowStyle={styles.dropdown1SelectedRowStyle}
          renderCustomizedRowChild={(item) => (
            <View style={styles.dropdownRow}>
              <Text style={styles.dropdownRowText}>
                {countryFlags[item.name]} {item.name} {item.code}
              </Text>
            </View>
          )}
        />
        <TextInput
          onChangeText={onChange}
          style={styles.textInput}
          placeholder={placeholder}
          keyboardType='numeric'
          value={phone}
          textContentType='telephoneNumber'
          onBlur={onBlurDivBlue}
          onFocus={onFocusDivBlue}
        />
        <View style={styles.iconContainer}>
          {error ? (
            <ErrorExclSVG />
          ) : (
            <TouchableHighlight onPress={showHint} underlayColor='#FFFFF'>
              <QuestionMarkSVG />
            </TouchableHighlight>
          )}
        </View>
      </View>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        !visible && <Text style={styles.hintText}>{hint}</Text>
      )}
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    gap: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    height: 44,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainerFocused: {
    borderColor: '#00f',
  },
  inputContainerBlurred: {
    borderColor: '#ccc',
  },
  dropdown3BtnStyle: {
    display: 'flex',
    width: 60,
    height: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  dropdown3BtnStyleError: {
    display: 'flex',
    width: 70,
    height: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  dropdown3DropdownStyle: {
    backgroundColor: 'white',
    width: 100,
  },
  dropdown3RowStyle: {
    backgroundColor: 'white',
    width: 100,
    height: 40,
  },
  dropdown1SelectedRowStyle: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownButtonText: {
    color: '#23254C',
    fontSize: 16,
    fontWeight: 'normal',
  },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  dropdownRowText: {
    color: '#888',
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    color: '#23254C',
    fontSize: 16,
  },
  iconContainer: {
    paddingRight: 7,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontWeight: '300',
  },
  hintText: {
    color: '#888',
    fontSize: 12,
    fontWeight: '300',
  },
});
