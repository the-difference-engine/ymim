import random

chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)"
print("".join(random.choice(chars) for i in range(50)))
