const currentDay = document.getElementById("#currentDay");
const today = moment().format("LLLL");

$("#currentDay").text(today);