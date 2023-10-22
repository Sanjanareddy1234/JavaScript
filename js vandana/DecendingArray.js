function sortArrayDescending(arr) {
    arr.sort(function(a, b) {
      return b - a; 
    });
  }
  const num = [5, 1, 9, 3, 7];
  sortArrayDescending(num);
  console.log(num); 