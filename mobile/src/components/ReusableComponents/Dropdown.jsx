import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView  } from 'react-native';
import CustomToggle from './CustomToggle';

const Dropdown = ({ options, selectedOption, onSelect, supporting, setDisabled }) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsToggled(previousState => !previousState);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setDisabled ? setDisabled(false) : null
    setIsOpen(false);
  };  

  return (
    
    <View className='flex-col w-[100%] '>
      <TouchableOpacity className='bg-white w-[100%] relative p-[10] border  border-gray-300 rounded flex-row justify-between items-center' onPress={toggleDropdown}>
        <Text className={`textSelected font-latoRegular text-sm leading-6 ${selectedOption ? "text-[#23254C]" : "text-stone-500"}`}>{selectedOption ? selectedOption : supporting }</Text>
        <CustomToggle onToggle={toggleDropdown} value={isToggled} />
      </TouchableOpacity>
      {isOpen && (
        <ScrollView className='z-50 bg-white top-[95%] min-w-[100%] absolute flex-1 bg-white flex mt-2 max-h-[230px] left-0 border border-gray-300 rounded' >          
          {options.map((option) => (
            <TouchableOpacity
            key={option}
            className={`h-11 w-full px-3.5 py-2.5 justify-start ${selectedOption === option ? 'bg-zinc-100' : 'bg-white'}`}
            onPress={() => handleOptionClick(option)}
            >
              <Text className='option font-latoRegular text-sm leading-5 text-[#23254C]'>{option}</Text>              
            </TouchableOpacity>
          ))}          
        </ScrollView>
      )}
    </View>
    
  )
}

export default Dropdown;