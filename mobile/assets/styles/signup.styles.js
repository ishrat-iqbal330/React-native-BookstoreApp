import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },  card: {
    width: width * 0.9,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 20,
    padding: 20,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: `${COLORS.primary}20`,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    fontFamily: "JetBrainsMono-Medium",
    color: COLORS.primary,
    marginBottom: 12,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
    lineHeight: 24,
    maxWidth: "95%",
  },  formContainer: { marginBottom: 20, width: "100%" },
  inputGroup: { marginBottom: 16 },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: COLORS.textPrimary,
    fontWeight: "600",
    letterSpacing: 0.3,
  },inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: `${COLORS.border}80`,
    paddingHorizontal: 12,
    height: 48,
    marginTop: 4,
  },
  inputIcon: { marginRight: 8, opacity: 0.7 },
  input: {
    flex: 1,
    color: COLORS.textDark,
    fontSize: 15,
    fontWeight: "500",
  },
  eyeIcon: { padding: 8, opacity: 0.7 },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
    paddingVertical: 8,
  },
  footerText: {
    color: COLORS.textSecondary,
    marginRight: 6,
    fontSize: 15,
  },
  link: {
    color: COLORS.primary,
    fontWeight: "700",
    fontSize: 15,
  },
});

export default styles;
