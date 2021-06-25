import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FlatList, View } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import {ListDivider} from '../../components/ListDivider'
import {Appointment} from '../../components/Appointment'
import {Background} from '../../components/Background';
import {ListHeader} from '../../components/ListHeader'
import {Profile} from '../../components/Profile'

import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('');
    const navigation = useNavigation();

    const appointment = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'

        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'

        },
    ]

    function handleAppointmentDetails (){
        navigation.navigate('AppointmentDetails');
    }
    function handleAppointmentCreate (){
        navigation.navigate('AppointmentCreate');
    }

    function handleCategorySelect (categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return(
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>

            <CategorySelect
                categorySelect={category}
                setCategory={handleCategorySelect}
            />

            <ListHeader
                title='Partidas Agendadas'
                subtitle= 'Total 6'
            />
            
            <FlatList
                data={appointment}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Appointment 
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={()=> <ListDivider/>}
                contentContainerStyle={{paddingBottom: 69}}
                style={styles.matches}
                showsHorizontalScrollIndicator={false}
            />
        </Background>
            
    );
}