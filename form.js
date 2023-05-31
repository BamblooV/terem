const formData = document.getElementById('formData');

$("#form").on("submit", function (event) {
  const data = $(this).serializeArray().reduce((acc, field) => {
    if (Boolean(field.value)) {
      acc[field.name] = field.value;
    }

    return acc;
  }, {});
  formData.innerText = JSON.stringify(data);

  $.get("demo_test.asp", function (data, status) {
    alert("Data: " + data + "\nStatus: " + status);
  });
  event.preventDefault();
});