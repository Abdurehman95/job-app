import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES } from '../theme/theme';
import { ChevronLeft, Settings, Mail, Phone, MapPin, Briefcase, GraduationCap, ChevronRight, Award } from 'lucide-react-native';

const ProfileScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('About');

  const userData = {
    name: 'Alex Rivera',
    role: 'Senior Product Designer',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    email: 'alex.rivera@design.com',
    phone: '+1 (555) 000-0000',
    bio: 'Experienced Product Designer with over 6 years of expertise in creating user-centric digital experiences. Passionate about design systems and mobile-first approach.',
    skills: ['UI/UX Design', 'Figma', 'Prototyping', 'React Native', 'Design Strategy', 'User Research'],
    experience: [
      { id: '1', role: 'Senior Designer', company: 'Google', period: '2021 - Present' },
      { id: '2', role: 'Product Designer', company: 'Spotify', period: '2018 - 2021' }
    ]
  };

  const renderContent = () => {
    if (activeTab === 'About') {
      return (
        <View style={styles.tabContent}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bioText}>{userData.bio}</Text>

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Skills</Text>
          <View style={styles.skillsContainer}>
            {userData.skills.map((skill, index) => (
              <View key={index} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    }
    return (
      <View style={styles.tabContent}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        {userData.experience.map((exp) => (
          <View key={exp.id} style={styles.expCard}>
            <View style={styles.expIcon}>
              <Briefcase size={20} color={COLORS.primary} />
            </View>
            <View style={styles.expDetails}>
              <Text style={styles.expRole}>{exp.role}</Text>
              <Text style={styles.expCompany}>{exp.company} • {exp.period}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color={COLORS.textMain} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Settings size={24} color={COLORS.textMain} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileHero}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: userData.avatar }} style={styles.avatar} />
            <TouchableOpacity style={styles.editBadge}>
              <Text style={styles.editBadgeText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userRole}>{userData.role}</Text>
          <View style={styles.userLocation}>
            <MapPin size={14} color={COLORS.textSecondary} />
            <Text style={styles.locationText}>{userData.location}</Text>
          </View>
        </View>

        <View style={styles.contactSection}>
          <View style={styles.contactItem}>
            <Mail size={20} color={COLORS.textLight} />
            <Text style={styles.contactText}>{userData.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Phone size={20} color={COLORS.textLight} />
            <Text style={styles.contactText}>{userData.phone}</Text>
          </View>
        </View>

        <View style={styles.tabsSection}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'About' && styles.activeTab]}
            onPress={() => setActiveTab('About')}
          >
            <Text style={[styles.tabLabel, activeTab === 'About' && styles.activeTabLabel]}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Experience' && styles.activeTab]}
            onPress={() => setActiveTab('Experience')}
          >
            <Text style={[styles.tabLabel, activeTab === 'Experience' && styles.activeTabLabel]}>Experience</Text>
          </TouchableOpacity>
        </View>

        {renderContent()}

        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <FileText size={20} color={COLORS.textSecondary} />
              <Text style={styles.menuText}>My Resume</Text>
            </View>
            <ChevronRight size={20} color={COLORS.textLight} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <Award size={20} color={COLORS.textSecondary} />
              <Text style={styles.menuText}>Certifications</Text>
            </View>
            <ChevronRight size={20} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
  },
  profileHero: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: COLORS.white,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: COLORS.primaryLight,
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  editBadgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontFamily: FONTS.interBold,
  },
  userName: {
    fontSize: 22,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
  },
  userRole: {
    fontSize: 14,
    fontFamily: FONTS.interMedium,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  userLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  locationText: {
    fontSize: 12,
    fontFamily: FONTS.interRegular,
    color: COLORS.textLight,
  },
  contactSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: COLORS.white,
    marginTop: 2,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contactText: {
    fontSize: 13,
    fontFamily: FONTS.interMedium,
    color: COLORS.textMain,
  },
  tabsSection: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginTop: 10,
    paddingHorizontal: SIZES.padding,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },
  tabLabel: {
    fontSize: 15,
    fontFamily: FONTS.interSemiBold,
    color: COLORS.textLight,
  },
  activeTabLabel: {
    color: COLORS.primary,
  },
  tabContent: {
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
    marginBottom: 10,
  },
  bioText: {
    fontSize: 14,
    fontFamily: FONTS.interRegular,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillTag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  skillText: {
    fontSize: 12,
    fontFamily: FONTS.interMedium,
    color: COLORS.textMain,
  },
  expCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  expIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  expDetails: {
    flex: 1,
  },
  expRole: {
    fontSize: 15,
    fontFamily: FONTS.interBold,
    color: COLORS.textMain,
  },
  expCompany: {
    fontSize: 12,
    fontFamily: FONTS.interRegular,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  menuSection: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  menuText: {
    fontSize: 15,
    fontFamily: FONTS.interMedium,
    color: COLORS.textMain,
  },
});

export default ProfileScreen;
