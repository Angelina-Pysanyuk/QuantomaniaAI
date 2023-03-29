// get the country data from the plugin
const input = $("#phone");

// init plugin
const iti = intlTelInput(input[0], {
  utilsScript: "./js/phoneMask/utils.js",
  initialCountry: "ua",
  separateDialCode: true,
});

// Open soluzione text

const button = $(".arrow-down-button");
const blockText = $(".solutions-section");

button.click(() => {
  blockText.toggle("active");
});

// Validation
const form = $("#registration");
form.validate({
  errorElement: "div",
  rules: {
    firstName: {
      required: true,
      minlength: 3,
    },
    lastName: {
      required: false,
      minlength: 3,
    },
    email: {
      required: true,
      email: true,
    },
    phone: {
      required: true,
      number: true,
      minlength: 3,
    },
  },
  submitHandler: function () {
    console.log("Submit form");
  },
});
