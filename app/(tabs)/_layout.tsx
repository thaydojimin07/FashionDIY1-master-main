import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle:{
                backgroundColor: '#000',
            },
            headerStyle: {
                backgroundColor: '#000',
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: '',
                    headerTitle: 'Home',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            
    <Tabs.Screen
                name="criação"
                options={{
                    title: '',
                    headerTitle: 'Criação de Roupas',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="edit" color={color} />,
                }}
            />

            <Tabs.Screen
                name="setting"
                options={{
                    title: '',
                    headerTitle: 'Meu Perfil',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />

            
        </Tabs>
    );
}