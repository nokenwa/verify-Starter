require("dotenv").config();
const twilioClient = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// twilioClient.verify
//   .services("VAfbe1d841799179503808b75b5e52f611")
//   .verifications.create({ to: "nokenwa@twilio.com", channel: "email" })
//   .then(verification => {
//     console.log("Verification email sent");
//   })
//   .catch(error => {
//     console.log(error);
//   });

twilioClient.verify
  .services("VAfbe1d841799179503808b75b5e52f611")
  .verificationChecks.create({ to: "nokenwa@twilio.com", code: "415004" })
  .then(verification_check => console.log(verification_check))
  .catch(error => {
    console.log(error);
  });
