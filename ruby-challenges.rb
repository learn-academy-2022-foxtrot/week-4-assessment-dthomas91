# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

if (num2 % 2 == 0)
  p "#{num2} is even"
    else 
    p "#{num2} is odd"
end

# I spent way too much time on this question. My brain is mush. Not sure if I was supposed to make this so it can test num1, num2, num3 all at the same time or not. I couldn't figure out how to do that, so I set it up to test one at a time.


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels word
  if ("#{word}.include? 'a', 'e', 'i', 'o', 'u'")
   "#{word}".downcase.delete "'a', 'e', 'i', 'o', 'u'"
  end
end

p no_vowels 'Rubber Soul'
p no_vowels 'Sgt Pepper'
p no_vowels 'Abbey Road'


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def palindrome word
  "#{word}"
  if word.downcase == word.downcase.reverse
    'it is a palindrome'
    else
      'it is not a palindrome'
  end
end

p palindrome 'Racecar'
# "it is a palindrome"

p palindrome 'LEARN'
# "it is not a palindrome"

p palindrome 'Rotator'
# "it is a palindrome"

