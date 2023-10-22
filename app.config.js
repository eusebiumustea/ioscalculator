export default {
  expo: {
    android: {
      package: "com.eusebiu.calculator",
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
            compileSdkVersion: 31,
            targetSdkVersion: 31,
            buildToolsVersion: "31.0.0",
            enableProguardInReleaseBuilds: true,
          },
          ios: {
            deploymentTarget: "13.0",
          },
        },
      ],
    ],
  },
};
