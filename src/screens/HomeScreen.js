import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import { COLORS, FONTS, SIZES } from '../theme/theme';
import { Search, SlidersHorizontal, Bell, Bookmark, ArrowRight, Home as HomeIcon, Briefcase, FileText, User } from 'lucide-react-native';
import { RECOMMENDED_JOBS } from '../data/mockData';

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Recommended');

  const renderJobItem = ({ item }) => (
    <TouchableOpacity
      style={styles.jobCard}
      onPress={() => navigation.navigate('JobDetails', { job: item })}
    >
      <View style={styles.jobHeader}>
        <View style={[styles.jobLogoContainer, { backgroundColor: item.color || COLORS.primaryLight }]}>
          <Image source={{ uri: item.logo }} style={styles.jobLogo} />
        </View>
        <View style={styles.jobInfo}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.jobCompany}>{item.company} • {item.location}</Text>
        </View>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Bookmark size={20} color={COLORS.textLight} />
        </TouchableOpacity>
      </View>

      <View style={styles.tagRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.type}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.workplace}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.salary}</Text>
        </View>
      </View>

      <View style={styles.jobFooter}>
        <Text style={styles.postedTime}>Posted {item.postedTime}</Text>
        <View style={styles.applyNowContainer}>
          <Text style={styles.applyNowText}>Apply Now</Text>
          <ArrowRight size={16} color={COLORS.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.welcomeText}>Welcome back,</Text>
              <Text style={styles.userName}>Alex Rivera</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Bell size={24} color={COLORS.textMain} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Search size={20} color={COLORS.textLight} />
            <TextInput
              placeholder="Search jobs, companies..."
              style={styles.searchInput}
              placeholderTextColor={COLORS.textLight}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <SlidersHorizontal size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/* Categories Tab */}
        <View style={styles.tabSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Recommended', 'Recent', 'Popular'].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[styles.tabItem, activeTab === tab && styles.activeTab]}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Recommended Jobs List */}
      <FlatList
        data={RECOMMENDED_JOBS}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <HomeIcon size={24} color={COLORS.primary} />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Search size={24} color={COLORS.textLight} />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('EmployerDashboard')}>
          <Briefcase size={24} color={COLORS.textLight} />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <User size={24} color={COLORS.textLight} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
    paddingBottom: 15,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
  },
  welcomeText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontFamily: FONTS.interRegular,
  },
  userName: {
    fontSize: 18,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
  },
  notificationBtn: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.danger,
    borderWidth: 1.5,
    borderColor: COLORS.white,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: COLORS.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    fontFamily: FONTS.interRegular,
  },
  filterBtn: {
    width: 52,
    height: 52,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  tabSection: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  tabItem: {
    marginRight: 25,
    paddingBottom: 10,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    fontFamily: FONTS.interSemiBold,
  },
  activeTabText: {
    color: COLORS.primary,
    fontFamily: FONTS.interBold,
  },
  listContainer: {
    padding: SIZES.padding,
    paddingBottom: 100,
  },
  jobCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: COLORS.cardShadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  jobHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  jobLogoContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobLogo: {
    width: 24,
    height: 24,
  },
  jobInfo: {
    flex: 1,
    marginLeft: 15,
  },
  jobTitle: {
    fontSize: 16,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
  },
  jobCompany: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontFamily: FONTS.interMedium,
    marginTop: 4,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 15,
  },
  tag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 11,
    color: COLORS.textSecondary,
    fontFamily: FONTS.interMedium,
  },
  jobFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 15,
  },
  postedTime: {
    fontSize: 11,
    color: COLORS.textLight,
    fontFamily: FONTS.interRegular,
  },
  applyNowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  applyNowText: {
    fontSize: 13,
    fontFamily: FONTS.interBold,
    color: COLORS.primary,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: COLORS.textLight,
    fontFamily: FONTS.interMedium,
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 10,
    color: COLORS.primary,
    fontFamily: FONTS.interBold,
    marginTop: 4,
  },
});

export default HomeScreen;
