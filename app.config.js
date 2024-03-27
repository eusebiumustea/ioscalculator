export default {
  expo: {
    name: "Calculator",
    slug: "calculator",
    version: "1.0.0Beta",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    assetBundlePatterns: ["**/*"],
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ff9800",
      },
      package: "com.eusebiu.calculator",
    },
    ios: {
      bundleIdentifier: "com.eusebiu.calculator",
      supportsTablet: true,
    },

    extra: {
      eas: {
        projectId: "5d3319bb-b340-4a7f-b443-06f3cfea42c0",
      },
    },
    plugins: [
      [
        "expo-build-properties",
        {
          android: {
            compileSdkVersion: 34,
            targetSdkVersion: 31,
            buildToolsVersion: "31.0.0",
            enableProguardInReleaseBuilds: true,
          },
          ios: {
            deploymentTarget: "13.4",
          },
        },
      ],
    ],
  },
};
