function clearfield() {
  document.getElementById('age').reset();
  document.getElementById('wconvert').reset();
  document.getElementById('wconvertl').reset();
  document.getElementById('wconvert2').reset();
  document.getElementById('wconvert3').reset();

}
function weightConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputPounds = document.getElementById('inputPounds');
    var inputKilograms = document.getElementById('inputKilograms');
    var inputOunces = document.getElementById('inputOunces');
    var inputGrams = document.getElementById('inputGrams');
    var inputStones = document.getElementById('inputStones');
    if (source == 'inputPounds') {
      inputKilograms.value = (valNum / 2.2046).toFixed(2);
      inputOunces.value = (valNum * 16).toFixed(2);
      inputGrams.value = (valNum / 0.0022046).toFixed();
      inputStones.value = (valNum * 0.071429).toFixed(3);
    }
    if (source == 'inputKilograms') {
      inputPounds.value = (valNum * 2.2046).toFixed(2);
      inputOunces.value = (valNum * 35.274).toFixed(2);
      inputGrams.value = (valNum * 1000).toFixed();
      inputStones.value = (valNum * 0.1574).toFixed(3);
    }
    if (source == 'inputOunces') {
      inputPounds.value = (valNum * 0.0625).toFixed(4);
      inputKilograms.value = (valNum / 35.274).toFixed(4);
      inputGrams.value = (valNum / 0.035274).toFixed(1);
      inputStones.value = (valNum * 0.0044643).toFixed(4);
    }
    if (source == 'inputGrams') {
      inputPounds.value = (valNum * 0.0022046).toFixed(4);
      inputKilograms.value = (valNum / 1000).toFixed(4);
      inputOunces.value = (valNum * 0.035274).toFixed(3);
      inputStones.value = (valNum * 0.00015747).toFixed(5);
    }
    if (source == 'inputStones') {
      inputPounds.value = (valNum * 14).toFixed(1);
      inputKilograms.value = (valNum / 0.15747).toFixed(1);
      inputOunces.value = (valNum * 224).toFixed();
      inputGrams.value = (valNum / 0.00015747).toFixed();
    }
  }
function temperatureConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputFahrenheit = document.getElementById('inputFahrenheit');
    var inputCelsius = document.getElementById('inputCelsius');
    var inputKelvin = document.getElementById('inputKelvin');
    if (source == 'inputFahrenheit') {
      inputCelsius.value = ((valNum - 32) / 1.8).toFixed(2);
      inputKelvin.value = ((valNum - 32) / 1.8 + 273.15).toFixed(2);
    }
    if (source == 'inputCelsius') {
      inputFahrenheit.value = (valNum * 1.8 + 32).toFixed(2);
      inputKelvin.value = (valNum + 273.15).toFixed(2);
    }
    if (source == 'inputKelvin') {
      inputFahrenheit.value = ((valNum - 273.15) * 1.8 + 32).toFixed(2);
      inputCelsius.value = (valNum - 273.15).toFixed(2);
    }
  }
$(document).ready(function () {
  $('#calculate').click(function () {
    var mdate = $('#birth_date').val().toString();
    var yearThen = parseInt(mdate.substring(0, 4), 10);
    var monthThen = parseInt(mdate.substring(5, 7), 10);
    var dayThen = parseInt(mdate.substring(8, 10), 10);

    var today = new Date();
    var birthday = new Date(yearThen, monthThen - 1, dayThen);

    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

    if (
      today.getMonth() == birthday.getMonth() &&
      today.getDate() == birthday.getDate()
    ) {
      alert("Happy B'day!!!");
    }

    var month_age = Math.floor(day_age / 30);

    day_age = day_age % 30;

    if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
      $('#exact_age').text('Invalid birthday - Please try again!');
    } else {
      $('#exact_age').html(
        'You are<br/><span id="age">' +
          year_age +
          ' years ' +
          month_age +
          ' months ' +
          day_age +
          ' days</span> old'
      );
    }
  });
});
function speedConverter(source, valNum) {
  valNum = parseFloat(valNum);
  var inputMPH = document.getElementById('inputMPH');
  var inputKPH = document.getElementById('inputKPH');
  var inputKnots = document.getElementById('inputKnots');
  var inputMach = document.getElementById('inputMach');
  if (source == 'inputMPH') {
    inputKPH.value = (valNum * 1.609344).toFixed(2);
    inputKnots.value = (valNum / 1.150779).toFixed(2);
    inputMach.value = (valNum / 761.207).toFixed(4);
  }
  if (source == 'inputKPH') {
    inputMPH.value = (valNum / 1.609344).toFixed(2);
    inputKnots.value = (valNum / 1.852).toFixed(2);
    inputMach.value = (valNum / 1225.044).toFixed(5);
  }
  if (source == 'inputKnots') {
    inputMPH.value = (valNum * 1.150779).toFixed(2);
    inputKPH.value = (valNum * 1.852).toFixed(2);
    inputMach.value = (valNum / 661.4708).toFixed(4);
  }
  if (source == 'inputMach') {
    inputMPH.value = (valNum * 761.207).toFixed();
    inputKPH.value = (valNum * 1225.044).toFixed();
    inputKnots.value = (valNum * 661.4708).toFixed();
  }
}
function lengthConverter(source, valNum) {
  valNum = parseFloat(valNum);
  var inputFeet = document.getElementById('inputFeet');
  var inputMeters = document.getElementById('inputMeters');
  var inputInches = document.getElementById('inputInches');
  var inputcm = document.getElementById('inputcm');
  var inputYards = document.getElementById('inputYards');
  var inputKilometers = document.getElementById('inputKilometers');
  var inputMiles = document.getElementById('inputMiles');
  if (source == 'inputFeet') {
    inputMeters.value = (valNum / 3.2808).toFixed(2);
    inputInches.value = (valNum * 12).toFixed(2);
    inputcm.value = (valNum / 0.032808).toFixed();
    inputYards.value = (valNum * 0.33333).toFixed(2);
    inputKilometers.value = (valNum / 3280.8).toFixed(5);
    inputMiles.value = (valNum * 0.00018939).toFixed(5);
  }
  if (source == 'inputMeters') {
    inputFeet.value = (valNum * 3.2808).toFixed(2);
    inputInches.value = (valNum * 39.37).toFixed(2);
    inputcm.value = (valNum / 0.01).toFixed();
    inputYards.value = (valNum * 1.0936).toFixed(2);
    inputKilometers.value = (valNum / 1000).toFixed(5);
    inputMiles.value = (valNum * 0.00062137).toFixed(5);
  }
  if (source == 'inputInches') {
    inputFeet.value = (valNum * 0.083333).toFixed(3);
    inputMeters.value = (valNum / 39.37).toFixed(3);
    inputcm.value = (valNum / 0.3937).toFixed(2);
    inputYards.value = (valNum * 0.027778).toFixed(3);
    inputKilometers.value = (valNum / 39370).toFixed(6);
    inputMiles.value = (valNum * 0.000015783).toFixed(6);
  }
  if (source == 'inputcm') {
    inputFeet.value = (valNum * 0.032808).toFixed(3);
    inputMeters.value = (valNum / 100).toFixed(3);
    inputInches.value = (valNum * 0.3937).toFixed(2);
    inputYards.value = (valNum * 0.010936).toFixed(3);
    inputKilometers.value = (valNum / 100000).toFixed(6);
    inputMiles.value = (valNum * 0.0000062137).toFixed(6);
  }
  if (source == 'inputYards') {
    inputFeet.value = (valNum * 3).toFixed();
    inputMeters.value = (valNum / 1.0936).toFixed(2);
    inputInches.value = (valNum * 36).toFixed();
    inputcm.value = (valNum / 0.010936).toFixed();
    inputKilometers.value = (valNum / 1093.6).toFixed(5);
    inputMiles.value = (valNum * 0.00056818).toFixed(5);
  }
  if (source == 'inputKilometers') {
    inputFeet.value = (valNum * 3280.8).toFixed();
    inputMeters.value = (valNum * 1000).toFixed();
    inputInches.value = (valNum * 39370).toFixed();
    inputcm.value = (valNum * 100000).toFixed();
    inputYards.value = (valNum * 1093.6).toFixed();
    inputMiles.value = (valNum * 0.62137).toFixed(2);
  }
  if (source == 'inputMiles') {
    inputFeet.value = (valNum * 5280).toFixed();
    inputMeters.value = (valNum / 0.00062137).toFixed();
    inputInches.value = (valNum * 63360).toFixed();
    inputcm.value = (valNum / 0.0000062137).toFixed();
    inputYards.value = (valNum * 1760).toFixed();
    inputKilometers.value = (valNum / 0.62137).toFixed(2);
  }
}
