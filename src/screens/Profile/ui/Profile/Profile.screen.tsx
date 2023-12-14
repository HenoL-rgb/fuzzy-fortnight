import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import Pfp from '@shared/assets/icons/Pfp.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Action } from '@shared/ui/Action';
import { Link } from '@shared/ui/Link';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  AppRouterParams,
  AppRoutes
} from '@shared/config/router.config';

type NavigationProp = NativeStackScreenProps<AppRouterParams, AppRoutes.PROFILE>;

export default function Profile({ navigation }: NavigationProp) {

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
        <Image source={Pfp} style={{ width: 80, height: 80, borderRadius: 99 }} />
        <View style={{ rowGap: 5 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 10,
            }}
          >
            <Text style={{ fontFamily: 'Roboto-Bold', color: '#fff', fontSize: 24 }}>HenoL</Text>
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
            sasha.diret...ail.com
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
          icon={<Ionicons name="stats-chart" size={24} color="#fff" />}
          title="Statistic"
          navigateTo="main"
        />
        <Link
          index={1}
          icon={<MaterialIcons name="groups" size={24} color="#fff" />}
          title="Friends"
          navigateTo="main"
        />
        <Link
          index={2}
          icon={<MaterialCommunityIcons name="check-decagram" size={24} color="#fff" />}
          title="Achievements"
          navigateTo="main"
        />
        <Link
          index={3}
          icon={<Ionicons name="settings" size={24} color="#fff" />}
          title="Settings"
          navigateTo="main"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
