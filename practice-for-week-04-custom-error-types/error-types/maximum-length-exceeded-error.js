const ValidationError = require("./validation-error.js")

class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength = null) {
    // Determine the message based on the excessLength argument
    const message = excessLength
      ? `Maximum length exceeded by ${excessLength}`
      : "Maximum length exceeded";

    // Call the parent class (ValidationError) constructor with the message
    super(message);

    // Set the name of the error to 'MaximumLengthExceededError'
    this.name = "MaximumLengthExceededError";
  }
}




/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}