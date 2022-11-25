import env from 'dotenv';

env.config({ path: process.env.ENV_FILE_PATH });

export const AppEnvironment = {
  TEST: 'test',
  LOCAL: 'local',
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production',
};

const isTestEnvironment = process.env.APP_ENV === AppEnvironment.TEST;

const config = {
  env: {
    isProduction: process.env.NODE_ENV === AppEnvironment.PRODUCTION,
    isDevelopment: process.env.NODE_ENV === AppEnvironment.DEVELOPMENT,
    isTest: process.env.NODE_ENV === AppEnvironment.TEST,
  },
  app: {
    port: +process.env.PORT,
  },
};
export const validateConfig = () => {
  const missingKeys = [];
  Object.entries(config).forEach(([baseKey, baseValue]) => {
    Object.entries(baseValue).forEach(([key, value]) => {
      if (value === '' || value === undefined) {
        missingKeys.push(`${baseKey}.${key}`);
      }
    });
  });
  if (missingKeys.length) {
    global.console.error(`The following configuration keys are not set: ${missingKeys.join(', ')}`);
    process.exit(1);
  }
};

// validateConfig();

export default config;
