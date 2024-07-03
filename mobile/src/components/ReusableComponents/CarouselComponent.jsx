import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from './Buttons/Button';

const CARD_MARGIN_VERTICAL = 10;

export const CarouselComponent = ({
  data,
  page,
  handleNext,
  navigateToOption
}) => {
  const isLastPage = page === data.length - 1;

  const handleNextOrNavigate = () => {
    if (isLastPage) {
      navigateToOption();
    } else {
      handleNext();
    }
  };

  return (
    <View className='relative w-[347px] h-[602px] justify-center items-center flex-col'>
      {data.map((item, i) =>
        page === i ? (
          <View key={i} className='justify-center items-center flex-1'>
            <View
              className='w-[320px] h-[210px] justify-center items-center'
              style={{ marginVertical: CARD_MARGIN_VERTICAL }}
            >
              {item.image}
            </View>

            <View className='w-[347px] h-[80px] justify-center items-center'>
              <Text className='text-center text-teal-900 text-3xl font-bold'>
                {item.title}
              </Text>
            </View>

            <View className='w-[312px] h-[65px] justify-center items-center'>
              <Text className='text-center text-gray-500 text-base'>
                {item.subtitle}
              </Text>
            </View>

            <View className='flex flex-row justify-center items-center top-2'>
              {data.map((_, index) => (
                <View
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    index === i ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  style={{
                    backgroundColor: index === i ? '#00707E' : '#CCCCCC'
                  }}
                />
              ))}
            </View>

            <View className='w-[225px] h-[50px] top-10 justify-center items-center'>
              <Button text='Siguiente' onPress={handleNextOrNavigate} />
            </View>

            <TouchableOpacity>
              <View className='w-[40px] h-[18px] top-16'>
                <Text
                  onPress={navigateToOption}
                  className='text-[#6C6C6C] underline'
                >
                  Saltar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null
      )}
    </View>
  );
};
