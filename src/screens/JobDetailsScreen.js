import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView, Dimensions } from 'react-native';
import { COLORS, FONTS, SIZES } from '../theme/theme';
import { ChevronLeft, Share2, Briefcase, MapPin, DollarSign, Calendar, CheckCircle2, Shield, CreditCard, Layout } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const JobDetailsScreen = ({ navigation, route }) => {
  const { job } = route.params;
  const [activeTab, setActiveTab] = useState('Description');

  const renderContent = () => {
    switch (activeTab) {
      case 'Description':
        return (
          <View style={styles.contentSection}>
            <Text style={styles.sectionTitle}>Job Description</Text>
            <Text style={styles.descriptionText}>{job.description}</Text>
          </View>
        );
      case 'Requirements':
        return (
          <View style={styles.contentSection}>
            <Text style={styles.sectionTitle}>Requirements</Text>
            {job.requirements.map((req, index) => (
              <View key={index} style={styles.reqRow}>
                <CheckCircle2 size={18} color={COLORS.primary} style={styles.reqIcon} />
                <Text style={styles.reqText}>{req}</Text>
              </View>
            ))}
          </View>
        );
      case 'Skills':
        return (
          <View style={styles.contentSection}>
            <Text style={styles.sectionTitle}>Key Skills</Text>
            <View style={styles.skillContainer}>
              {job.skills.map((skill, index) => (
                <View key={index} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color={COLORS.textMain} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Details</Text>
        <TouchableOpacity style={styles.shareBtn}>
          <Share2 size={24} color={COLORS.textMain} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.jobInfoCard}>
          <View style={[styles.jobLogoContainer, { backgroundColor: job.color || COLORS.primaryLight }]}>
            <Image source={{ uri: job.logo }} style={styles.jobLogo} />
          </View>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.jobCompany}>{job.company} • </Text>
            <Text style={styles.jobType}>{job.type}</Text>
          </View>
          <View style={styles.locationRow}>
            <MapPin size={14} color={COLORS.textSecondary} />
            <Text style={styles.jobLocation}>{job.location} ({job.workplace})</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>SALARY</Text>
            <Text style={styles.statValue}>{job.salary}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>EXPERIENCE</Text>
            <Text style={styles.statValue}>5+ years</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>POSTED</Text>
            <Text style={styles.statValue}>{job.postedTime}</Text>
          </View>
        </View>

        <View style={styles.tabsSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
            {['Description', 'Requirements', 'Skills', 'Benefits'].map((tab) => (
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

        {renderContent()}

        {activeTab === 'Description' && (
          <View style={styles.benefitsSection}>
            <Text style={styles.sectionTitle}>Benefits</Text>
            {job.benefits.map((benefit) => (
              <View key={benefit.id} style={styles.benefitCard}>
                <View style={styles.benefitIconContainer}>
                  {benefit.icon === 'shield' && <Shield size={20} color={COLORS.primary} />}
                  {benefit.icon === 'credit-card' && <CreditCard size={20} color={COLORS.primary} />}
                  {benefit.icon === 'map-pin' && <MapPin size={20} color={COLORS.primary} />}
                </View>
                <View style={styles.benefitTextContainer}>
                  <Text style={styles.benefitName}>{benefit.name}</Text>
                  <Text style={styles.benefitDescription}>{benefit.description}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Footer Apply Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.bookmarkBtn}>
          <Layout size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyBtnText}>Apply Now</Text>
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
  scrollContent: {
    paddingBottom: 100,
  },
  jobInfoCard: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: COLORS.white,
  },
  jobLogoContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  jobLogo: {
    width: 40,
    height: 40,
  },
  jobTitle: {
    fontSize: 24,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  metaRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  jobCompany: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: FONTS.interSemiBold,
  },
  jobType: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: FONTS.interSemiBold,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 5,
  },
  jobLocation: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontFamily: FONTS.interMedium,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    marginTop: 20,
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: COLORS.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  statLabel: {
    fontSize: 10,
    color: COLORS.textLight,
    fontFamily: FONTS.interBold,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 12,
    color: COLORS.textMain,
    fontFamily: FONTS.interBold,
    textAlign: 'center',
  },
  tabsSection: {
    marginTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    backgroundColor: COLORS.white,
  },
  tabsContainer: {
    paddingHorizontal: SIZES.padding,
  },
  tabItem: {
    marginRight: 25,
    paddingBottom: 15,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    fontFamily: FONTS.interSemiBold,
  },
  activeTabText: {
    color: COLORS.primary,
    fontFamily: FONTS.interBold,
  },
  contentSection: {
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 24,
    fontFamily: FONTS.interRegular,
  },
  reqRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  reqIcon: {
    marginTop: 2,
    marginRight: 10,
  },
  reqText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 22,
    fontFamily: FONTS.interRegular,
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillTag: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  skillText: {
    fontSize: 13,
    color: COLORS.primary,
    fontFamily: FONTS.interBold,
  },
  benefitsSection: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: 20,
    backgroundColor: COLORS.white,
  },
  benefitCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  benefitIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  benefitTextContainer: {
    flex: 1,
  },
  benefitName: {
    fontSize: 15,
    fontFamily: FONTS.interBold,
    color: COLORS.textMain,
  },
  benefitDescription: {
    fontSize: 12,
    fontFamily: FONTS.interRegular,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingBottom: 20,
  },
  bookmarkBtn: {
    width: 56,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  applyBtn: {
    flex: 1,
    height: 56,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  applyBtnText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.interBold,
  },
});

export default JobDetailsScreen;
