// set config for staging
const stageConfig = {
    globalUrlEn: "https://newilbau-labs.dev/en",
    globalUrlFi: "https://newilbau-labs.dev/",
  };
  
  // set config for production
  const prodConfig = {
    globalUrlEn: "https://newilbau-labs.dev/en",
    globalUrlFi: "https://newilbau-labs.dev",
  };
  
  // get the environment type from command line. If none, set it to dev
  const environment = process.env.TEST_ENV || "stage";
  
  if (environment === "stage") {
    console.log("**********************RUNNING ON STAGING*********************");
  } else {
    console.log(
      "**********************RUNNING ON PRODUCTION*********************"
    );
  }
  
  // config object with default configuration and environment specific configuration
  const config = {
    ...(environment === "production" ? prodConfig : stageConfig),
  };
  
  module.exports = {
    config,
  };