import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import Pfp from '@shared/assets/icons/Pfp.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Action } from '@shared/ui/Action';
import { Link } from '@shared/ui/Link';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';
import { imaginaryFriends } from '@screens/Friends/ui/Friends.screen';

type NavigationProp = NativeStackScreenProps<AppRouterParams, AppRoutes.USER>;

export default function Profile({ navigation, route }: NavigationProp) {
  const { id } = route.params;
  const user = imaginaryFriends.find((user) => user.id === id);

  if (!user) {
    return <Text style={{ fontSize: 24, color: '#ffffff' }}>User not found</Text>;
  }

  return (
    <SafeAreaView style={{ rowGap: 20 }}>
      <Pressable style={{ paddingLeft: 20 }}>
        <MaterialCommunityIcons
          name="chevron-left"
          color={'#fff'}
          size={32}
          onPress={() => navigation.goBack()}
        />
      </Pressable>
      <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20, padding: 20 }}>
        <Image source={{ uri: user.avatar }} style={{ width: 80, height: 80, borderRadius: 99 }} />
        <View style={{ rowGap: 5 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 10,
            }}
          >
            <Text style={{ fontFamily: 'Roboto-Bold', color: '#fff', fontSize: 24 }}>
              {user.name}
            </Text>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
                height: 25,
                borderRadius: 5,
                backgroundColor: '#e86e16',
              }}
            >
              <Text
                style={{ fontFamily: 'Roboto-Bold', color: '#fff', fontSize: 14, opacity: 0.8 }}
              >
                VIP
              </Text>
            </View>
          </View>
          <Text style={{ fontFamily: 'Roboto-Bold', color: '#fff', fontSize: 16, opacity: 0.8 }}>
            {user.email}
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, columnGap: 10 }}
        decelerationRate={'fast'}
        snapToInterval={210}
      >
        <Action title="1000$" subtitle="Wallet" bgColor="rgba(255,0,255,0.8)" />
        <Action title="100" subtitle="Total games" bgColor="rgba(255,255,0,0.8)" />
        <Action title="0$" subtitle="Total won" bgColor="rgba(0,255,255,0.8)" />
      </ScrollView>
      <ScrollView
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          rowGap: 5,
        }}
      >
        <Link
          index={0}
          icon={<Ionicons name="chatbubble" size={24} color="#fff" />}
          title="Chat"
          navigateTo="main"
        />
        <Link
          index={1}
          icon={<MaterialIcons name="groups" size={24} color="#fff" />}
          title="Friends"
          navigateTo="main"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
