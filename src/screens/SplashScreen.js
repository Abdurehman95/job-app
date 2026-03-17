import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ProgressBarAndroid, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SIZES } from '../theme/theme';
import { Briefcase } from 'lucide-react-native';

const SplashScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(interval);
          setTimeout(() => {
            navigation.replace('Login');
          }, 500);
          return 1;
        }
        return prev + 0.05;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.iconBackground}>
            <Briefcase size={48} color={COLORS.white} />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Job<Text style={styles.titleBlue}>Connect</Text>
          </Text>
          <Text style={styles.subtitle}>YOUR NEXT CAREER MOVE STARTS HERE</Text>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressTextRow}>
            <Text style={styles.progressLabel}>Initializing</Text>
            <Text style={styles.progressPercent}>{Math.round(progress * 100)}%</Text>
          </View>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.dotContainer}>
          <View style={styles.dotInactive} />
          <View style={styles.dotActive} />
          <View style={styles.dotInactive} />
        </View>
        <Text style={styles.copyright}>PROFESSIONAL NETWORK © 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  content: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 40,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  iconBackground: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1A1D1E',
    fontFamily: FONTS.outfitBold,
  },
  titleBlue: {
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    letterSpacing: 1.5,
    marginTop: 8,
    fontFamily: FONTS.interSemiBold,
    textAlign: 'center',
  },
  progressSection: {
    width: '100%',
    maxWidth: 250,
  },
  progressTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontFamily: FONTS.interMedium,
  },
  progressPercent: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
    fontFamily: FONTS.interBold,
  },
  progressBarBackground: {
    height: 6,
    width: '100%',
    backgroundColor: COLORS.lightGray,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dotInactive: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 18,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginHorizontal: 4,
  },
  copyright: {
    fontSize: 10,
    color: COLORS.textLight,
    letterSpacing: 1,
    fontFamily: FONTS.interRegular,
  },
});

export default SplashScreen;
