import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../theme/theme';
import { ChevronLeft, Plus, MoreVertical, Briefcase, Eye, User, FileText } from 'lucide-react-native';
import { RECOMMENDED_JOBS } from '../data/mockData';

const EmployerDashboard = ({ navigation }) => {
  const stats = [
    { id: '1', title: 'Active Jobs', value: '12', icon: Briefcase, color: '#EBEBFF' },
    { id: '2', title: 'New Applicants', value: '48', icon: User, color: '#D1F5D3' },
    { id: '3', title: 'Interviewing', value: '15', icon: Eye, color: '#FFEBEB' },
  ];

  const renderJobItem = ({ item }) => (
    <View style={styles.jobCard}>
      <View style={styles.jobHeader}>
        <View style={styles.jobTitleContainer}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.jobMeta}>{item.type} • {item.postedTime}</Text>
        </View>
        <TouchableOpacity>
          <MoreVertical size={20} color={COLORS.textLight} />
        </TouchableOpacity>
      </View>

      <View style={styles.applicantStats}>
        <View style={styles.applicantStat}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Applicants</Text>
        </View>
        <View style={styles.applicantStat}>
          <Text style={[styles.statNumber, { color: COLORS.success }]}>8</Text>
          <Text style={styles.statLabel}>Shortlisted</Text>
        </View>
        <View style={styles.applicantStat}>
          <Text style={[styles.statNumber, { color: COLORS.danger }]}>2</Text>
          <Text style={styles.statLabel}>Rejected</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.viewBtn}>
        <Text style={styles.viewBtnText}>View Applicants</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Manager Dashboard</Text>
          <Text style={styles.userName}>Google Recruiter</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Plus size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.statsContainer}>
          {stats.map((stat) => (
            <View key={stat.id} style={[styles.statCard, { backgroundColor: stat.color }]}>
              <stat.icon size={20} color={COLORS.primary} />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
            </View>
          ))}
        </View>

        <View style={styles.listHeaderSection}>
          <Text style={styles.sectionTitle}>Active Job Listings</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={RECOMMENDED_JOBS.slice(0, 3)}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
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
    paddingVertical: 20,
    backgroundColor: COLORS.white,
  },
  welcomeText: {
    fontSize: 12,
    fontFamily: FONTS.interRegular,
    color: COLORS.textSecondary,
  },
  userName: {
    fontSize: 20,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
    marginTop: 2,
  },
  addBtn: {
    width: 48,
    height: 48,
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
  scrollContent: {
    padding: SIZES.padding,
    paddingBottom: 40,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
    marginTop: 8,
  },
  statTitle: {
    fontSize: 10,
    fontFamily: FONTS.interMedium,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  listHeaderSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
  },
  seeAllText: {
    fontSize: 13,
    fontFamily: FONTS.interBold,
    color: COLORS.primary,
  },
  jobCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  jobTitleContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
  },
  jobMeta: {
    fontSize: 12,
    fontFamily: FONTS.interRegular,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  applicantStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  applicantStat: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 16,
    fontFamily: FONTS.outfitBold,
    color: COLORS.textMain,
  },
  statLabel: {
    fontSize: 10,
    fontFamily: FONTS.interMedium,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  viewBtn: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  viewBtnText: {
    fontSize: 13,
    fontFamily: FONTS.interBold,
    color: COLORS.textMain,
  },
});

export default EmployerDashboard;
