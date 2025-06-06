import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    padding: 24,
    justifyContent: "center",
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    padding: 28,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    marginHorizontal: 4,
  },
  header: {
    alignItems: "center",
    marginBottom: 28,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 4,
    letterSpacing: 0,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 16,
  },
  formContainer: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    marginBottom: 8,
    color: COLORS.textPrimary,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 14,
    height: 52,
  },
  inputIcon: {
    marginRight: 10,
    opacity: 0.8,
  },
  input: {
    flex: 1,
    height: 52,
    color: COLORS.textDark,
    fontSize: 16,
    fontWeight: "400",
  },
  eyeIcon: {
    padding: 10,
    opacity: 0.7,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 2,
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
