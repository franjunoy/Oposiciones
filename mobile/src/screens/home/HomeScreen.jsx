import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Cards from '../../components/ReusableComponents/Cards';
import Buscador from '../../components/ReusableComponents/Buscador';
import Filtros from '../../components/ReusableComponents/Filtros';
import CardHome from '../../../assets/svg/CardHome';
import BarraDeAbajo from '../../components/ReusableComponents/BarraDeAbajo';
import CardFormaciones from '../../components/ReusableComponents/CardFormaciones';
import { getAllFormations } from '../peticiones/mobile';
import { useSelector, useDispatch } from 'react-redux';
import { setFormations } from '../redux/reducer/userReducer';
import CampanaSVG from '../../../assets/svg/CampanaSVG';

const HomeScreen = () => {
  const [isBarVisible, setIsBarVisible] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const formations = useSelector((state) => state.user.formations);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const { formacion, modulos } = useSelector((state) => state.cursoRedurcer);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        await getAllFormations({
          success: (data) => dispatch(setFormations(data)),
          error: (err) => console.log(err),
          loading: (isLoading) => console.log(isLoading)
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchFormations();
  }, [dispatch]);

  const handleClear = () => {
    setSearchValue('');
  };

  const handleSearch = () => {
    console.log('Buscando:', searchValue);
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsBarVisible(offsetY <= 0);
  };

  return (
    <View className='flex-1 bg-gray-100'>
      <ScrollView onScroll={handleScroll}>
        <View className='flex flex-col items-center p-4'>
          <View className='w-full flex-row justify-between items-center mb-4'>
            <Text className='text-xl font-bold text-teal-900'>
              Hola {user.name}!
            </Text>
            <TouchableOpacity>
              <CampanaSVG />
            </TouchableOpacity>
          </View>

          <Buscador
            value={searchValue}
            onChangeText={setSearchValue}
            onClear={handleClear}
            onSearch={handleSearch}
          />

          <View className='w-full mt-4'>
            <Text className='text-xl font-bold text-teal-900 ml-4'>
              Modulos en curso
            </Text>
            <View className=' items-center'>
              <Cards modulos={modulos} />
            </View>
          </View>

          <View className='w-full mt-8'>
            <Text className='text-xl font-bold text-teal-900 ml-4'>
              ¿Qué puedes hacer?
            </Text>
            <Filtros
              filtro1='Simulacro'
              filtro2='Reintentar fallos'
              filtro3='Estudiar teoría'
            />
          </View>

          <View className='w-full mt-12'>
            <View className='flex-row justify-between items-center ml-4'>
              <Text className='text-xl font-bold text-teal-900 mb-3'>
                Nuestra comunidad
              </Text>
              <TouchableOpacity>
                <Text className='text-sm underline text-gray-500'>
                  Ver todo
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal className='flex-row'>
              <TouchableOpacity className='mr-2'>
                <View className='w-36 h-40 p-2 bg-white rounded-lg shadow-md'>
                  <View className='items-center'>
                    <CardHome />
                  </View>

                  <View className='w-48 items-start '>
                    <Text className='text-teal-900 text-[9px] font-bold mt-1'>
                      RÉGIMEN ADMINISTRATIVO
                    </Text>
                    <Text className='text-teal-700 text-[6px] mt-0.5'>
                      El régimen administrativo de los...
                    </Text>
                    <Text className='text-teal-700 text-[6px] mt-0.5'>
                      ⭐ 4.7
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className='mr-2'>
                <View className='w-36 h-40 p-2 bg-white rounded-lg shadow-md'>
                  <View className='items-center'>
                    <CardHome />
                  </View>

                  <View className='w-48 items-start '>
                    <Text className='text-teal-900 text-[9px] font-bold mt-1'>
                      RÉGIMEN ADMINISTRATIVO
                    </Text>
                    <Text className='text-teal-700 text-[6px] mt-0.5'>
                      El régimen administrativo de los...
                    </Text>
                    <Text className='text-teal-700 text-[6px] mt-0.5'>
                      ⭐ 4.7
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className='mr-2'>
                <View className='w-36 h-40 p-2 bg-white rounded-lg shadow-md'>
                  <View className='items-center'>
                    <CardHome />
                  </View>

                  <View className='w-48 items-start '>
                    <Text className='text-teal-900 text-[9px] font-bold mt-1'>
                      RÉGIMEN ADMINISTRATIVO
                    </Text>
                    <Text className='text-teal-700 text-[6px] mt-0.5'>
                      El régimen administrativo de los...
                    </Text>
                    <Text className='text-teal-700 text-[6px] mt-0.5'>
                      ⭐ 4.7
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View className='w-full mt-12'>
            <View className='flex-row justify-between items-center ml-4'>
              <Text className='text-xl font-bold text-teal-900'>
                Todas las oposiciones
              </Text>
              <TouchableOpacity>
                <Text className='text-sm underline text-gray-500'>
                  Ver todo
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal className='flex-row'>
              <CardFormaciones formations={formations} />
            </ScrollView>
          </View>
          <View className='h-[50px]'></View>
        </View>
      </ScrollView>

      {isBarVisible && (
        <View className='absolute bottom-0 w-full'>
          <BarraDeAbajo />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
