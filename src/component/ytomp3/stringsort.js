function stringSort(data) {
  var res = "";
  if (data.match(".be/")) {
    res = data.split(".be/");
  } else {
    res = data.split("/watch?v=");
  }

  return res[1];
}

export default stringSort;
