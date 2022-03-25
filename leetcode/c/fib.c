int fib(int n){    
  int secondLast = 0;
  int last = 1;
  
  for(int i = 0; i < n; i += 1) {
    int temp = last;
    last = secondLast + last;
    secondLast = temp;
  }
  
  return secondLast;
}f
